import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
  try {
    const hours = await prisma.businessHour.findMany({
      orderBy: { weekday: 'asc' },
    });

    const hoursConfirmed = await prisma.salonSetting.findUnique({
      where: { key: 'hours_confirmed' },
    });

    return NextResponse.json({
      hours,
      confirmed: hoursConfirmed?.value === 'true',
    });
  } catch (error) {
    console.error('Error fetching availability:', error);
    return NextResponse.json(
      { error: 'Failed to fetch availability', code: 'INTERNAL_ERROR' },
      { status: 500 }
    );
  }
}
