import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: 'asc' },
      select: {
        id: true,
        slug: true,
        name: true,
        category: true,
        shortDescription: true,
        durationMin: true,
        bufferMin: true,
        priceType: true,
        priceInr: true,
        consultationRequired: true,
        imageUrl: true,
        needsReview: true,
        sortOrder: true,
      },
    });

    return NextResponse.json({ services });
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json(
      { error: 'Failed to fetch services', code: 'INTERNAL_ERROR' },
      { status: 500 }
    );
  }
}
