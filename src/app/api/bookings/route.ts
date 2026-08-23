import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

function generateBookingRef(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let result = 'CC-';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function normalizePhone(phone: string): string {
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  if (cleaned.startsWith('+91')) return cleaned;
  if (cleaned.startsWith('91') && cleaned.length === 12) return '+' + cleaned;
  if (cleaned.length === 10) return '+91' + cleaned;
  return cleaned;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { serviceId, date, timeSlot, customerName, customerPhone, customerEmail, notes, consent } = body;

    // ─── Validate required fields ──────────────────────
    if (!serviceId || !date || !timeSlot || !customerName || !customerPhone || !consent) {
      return NextResponse.json(
        { error: 'Missing required fields', code: 'VALIDATION_ERROR' },
        { status: 400 }
      );
    }

    // ─── Validate service exists and is active ─────────
    const service = await prisma.service.findUnique({
      where: { id: serviceId },
    });

    if (!service || !service.isActive) {
      return NextResponse.json(
        { error: 'Service not found or unavailable', code: 'VALIDATION_ERROR' },
        { status: 400 }
      );
    }

    // ─── Normalize phone ───────────────────────────────
    const normalizedPhone = normalizePhone(customerPhone);

    // ─── Find or create customer ───────────────────────
    let customer = await prisma.customer.findUnique({
      where: { normalizedPhone },
    });

    if (!customer) {
      customer = await prisma.customer.create({
        data: {
          name: customerName,
          normalizedPhone,
          email: customerEmail || null,
          marketingConsent: false,
        },
      });
    }

    // ─── Calculate booking times ───────────────────────
    const [hours, minutes] = timeSlot.split(':').map(Number);
    const startsAt = new Date(date);
    startsAt.setHours(hours, minutes, 0, 0);

    const endsAt = new Date(startsAt);
    endsAt.setMinutes(endsAt.getMinutes() + service.durationMin);

    // ─── Calculate price (server-side) ─────────────────
    const subtotalInr = service.priceInr; // in paise
    const discountInr = 0;
    const totalInr = subtotalInr - discountInr;

    // ─── Generate unique booking reference ─────────────
    let publicReference = generateBookingRef();
    let attempts = 0;
    while (attempts < 10) {
      const existing = await prisma.booking.findUnique({
        where: { publicReference },
      });
      if (!existing) break;
      publicReference = generateBookingRef();
      attempts++;
    }

    // ─── Create booking ────────────────────────────────
    const booking = await prisma.booking.create({
      data: {
        publicReference,
        customerId: customer.id,
        serviceId: service.id,
        startsAt,
        endsAt,
        timezone: 'Asia/Kolkata',
        status: 'CONFIRMED', // Mock payment auto-confirms
        paymentStatus: 'CAPTURED',
        subtotalInr,
        discountInr,
        totalInr,
        customerNotes: notes || null,
        source: 'WEB',
      },
    });

    // ─── Create mock payment record ────────────────────
    await prisma.payment.create({
      data: {
        bookingId: booking.id,
        provider: 'MOCK',
        providerOrderId: `mock_order_${uuidv4().slice(0, 8)}`,
        providerPaymentId: `mock_pay_${uuidv4().slice(0, 8)}`,
        amountInr: totalInr,
        currency: 'INR',
        status: 'CAPTURED',
        signatureVerified: true,
        idempotencyKey: uuidv4(),
        capturedAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      booking: {
        publicReference: booking.publicReference,
        service: service.name,
        startsAt: booking.startsAt,
        endsAt: booking.endsAt,
        status: booking.status,
        paymentStatus: booking.paymentStatus,
        totalInr: booking.totalInr,
      },
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json(
      { error: 'Failed to create booking', code: 'INTERNAL_ERROR' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const reference = searchParams.get('reference');

    if (!reference) {
      return NextResponse.json(
        { error: 'Booking reference required', code: 'VALIDATION_ERROR' },
        { status: 400 }
      );
    }

    const booking = await prisma.booking.findUnique({
      where: { publicReference: reference },
      include: {
        service: {
          select: { name: true, category: true, durationMin: true },
        },
        customer: {
          select: { name: true },
        },
        payments: {
          select: { status: true, amountInr: true, provider: true, capturedAt: true },
        },
      },
    });

    if (!booking) {
      return NextResponse.json(
        { error: 'Booking not found', code: 'BOOKING_NOT_FOUND' },
        { status: 404 }
      );
    }

    return NextResponse.json({ booking });
  } catch (error) {
    console.error('Error fetching booking:', error);
    return NextResponse.json(
      { error: 'Failed to fetch booking', code: 'INTERNAL_ERROR' },
      { status: 500 }
    );
  }
}
