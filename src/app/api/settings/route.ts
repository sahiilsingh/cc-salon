import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
  try {
    const settings = await prisma.salonSetting.findMany();
    const settingsMap: Record<string, string> = {};
    settings.forEach((s) => {
      settingsMap[s.key] = s.value;
    });

    // Only expose public settings
    const publicSettings = {
      salonName: settingsMap['salon_name'] || 'C&C Salon',
      shortName: settingsMap['short_name'] || 'C&C Salon',
      address: settingsMap['address'] || '',
      primaryPhone: settingsMap['primary_phone'] || '',
      instagramUrl: settingsMap['instagram_url'] || '',
      googleMapsUrl: settingsMap['google_maps_url'] || '',
      rating: settingsMap['rating'] || '4.9',
      reviewCount: settingsMap['review_count'] || '80',
      heroHeadline: settingsMap['hero_headline'] || 'Your next style masterpiece awaits.',
      heroSubtext: settingsMap['hero_subtext'] || 'Hair, beauty, nails, and occasion-ready care in the heart of Fatorda.',
      hoursConfirmed: settingsMap['hours_confirmed'] === 'true',
      offersEnabled: settingsMap['offers_toggle'] === 'true',
    };

    return NextResponse.json(publicSettings);
  } catch (error) {
    console.error('Error fetching settings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch settings', code: 'INTERNAL_ERROR' },
      { status: 500 }
    );
  }
}
