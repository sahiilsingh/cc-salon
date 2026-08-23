import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
  try {
    // Check global offers toggle
    const offersToggle = await prisma.salonSetting.findUnique({
      where: { key: 'offers_toggle' },
    });

    if (offersToggle?.value !== 'true') {
      return NextResponse.json({ offers: [], offersEnabled: false });
    }

    const now = new Date();
    const offers = await prisma.offer.findMany({
      where: {
        isPublished: true,
        OR: [
          {
            startsAt: { lte: now },
            endsAt: { gte: now },
          },
          {
            startsAt: null,
            endsAt: null,
          },
        ],
      },
      orderBy: { sortOrder: 'asc' },
    });

    return NextResponse.json({ offers, offersEnabled: true });
  } catch (error) {
    console.error('Error fetching offers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch offers', code: 'INTERNAL_ERROR' },
      { status: 500 }
    );
  }
}
