const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // ─── Create Admin User ──────────────────────────────────
  const hashedPassword = await bcrypt.hash('admin123', 12);
  const admin = await prisma.user.upsert({
    where: { email: 'owner@ccsalon.com' },
    update: {},
    create: {
      name: 'Salon Owner',
      email: 'owner@ccsalon.com',
      phone: '+919607023902',
      role: 'OWNER',
      password: hashedPassword,
    },
  });
  console.log('  ✓ Admin user created:', admin.email);

  // ─── Create Services (Draft/Review) ─────────────────────
  const services = [
    {
      slug: 'ladies-haircut',
      name: "Ladies' Haircut",
      category: 'HAIR',
      shortDescription: 'Expert cuts tailored to your style and face shape.',
      longDescription: 'Our skilled stylists craft the perfect cut to complement your features, lifestyle, and personal style. Every haircut includes a consultation, shampoo, and styling.',
      durationMin: 45,
      bufferMin: 10,
      priceType: 'CONSULTATION',
      priceInr: 0,
      isActive: true,
      needsReview: true,
      sortOrder: 1,
    },
    {
      slug: 'hair-colour',
      name: 'Hair Colour',
      category: 'COLOUR_TREATMENTS',
      shortDescription: 'Rich, vibrant colour with premium products.',
      longDescription: 'Transform your look with our professional hair colour services. We use premium products to deliver lasting, vibrant results while maintaining hair health.',
      durationMin: 90,
      bufferMin: 15,
      priceType: 'CONSULTATION',
      priceInr: 0,
      isActive: true,
      needsReview: true,
      sortOrder: 2,
    },
    {
      slug: 'global-highlights',
      name: 'Global Highlights',
      category: 'COLOUR_TREATMENTS',
      shortDescription: 'Dimensional highlights for a sun-kissed look.',
      longDescription: 'Add depth and dimension to your hair with expertly placed global highlights. Our colour specialists create natural-looking, multi-tonal effects.',
      durationMin: 120,
      bufferMin: 15,
      priceType: 'CONSULTATION',
      priceInr: 0,
      isActive: true,
      needsReview: true,
      sortOrder: 3,
    },
    {
      slug: 'keratin-treatment',
      name: 'Keratin Treatment',
      category: 'COLOUR_TREATMENTS',
      shortDescription: 'Smooth, frizz-free hair with lasting results.',
      longDescription: 'Our professional keratin treatment smooths frizz, adds shine, and makes hair more manageable for weeks. Ideal for Goa\'s humid climate.',
      durationMin: 150,
      bufferMin: 15,
      priceType: 'CONSULTATION',
      priceInr: 0,
      isActive: true,
      needsReview: true,
      sortOrder: 4,
    },
    {
      slug: 'hair-spa',
      name: 'Hair Spa',
      category: 'HAIR',
      shortDescription: 'Deep conditioning and scalp care for healthy hair.',
      longDescription: 'Rejuvenate your hair and scalp with our luxurious hair spa treatment. Includes deep conditioning, scalp massage, and steam therapy.',
      durationMin: 60,
      bufferMin: 10,
      priceType: 'CONSULTATION',
      priceInr: 0,
      isActive: true,
      needsReview: true,
      sortOrder: 5,
    },
    {
      slug: 'facial-cleanup',
      name: 'Facial & Cleanup',
      category: 'SKIN_BEAUTY',
      shortDescription: 'Refreshing facial treatments for glowing skin.',
      longDescription: 'Our facial and cleanup services refresh and revitalize your skin. Each treatment is customized to your skin type for the best results.',
      durationMin: 60,
      bufferMin: 10,
      priceType: 'CONSULTATION',
      priceInr: 0,
      isActive: true,
      needsReview: true,
      sortOrder: 6,
    },
    {
      slug: 'manicure-pedicure',
      name: 'Manicure & Pedicure',
      category: 'NAILS_MAKEUP',
      shortDescription: 'Luxurious nail care and grooming.',
      longDescription: 'Pamper your hands and feet with our professional manicure and pedicure services. Includes nail shaping, cuticle care, moisturizing, and polish.',
      durationMin: 75,
      bufferMin: 10,
      priceType: 'CONSULTATION',
      priceInr: 0,
      isActive: true,
      needsReview: true,
      sortOrder: 7,
    },
    {
      slug: 'bridal-makeup',
      name: 'Bridal & Occasion Makeup',
      category: 'NAILS_MAKEUP',
      shortDescription: 'Camera-ready beauty for your special day.',
      longDescription: 'Look your absolute best on your special occasion. Our makeup artists create stunning, long-lasting looks using premium products.',
      durationMin: 120,
      bufferMin: 15,
      priceType: 'CONSULTATION',
      priceInr: 0,
      isActive: true,
      needsReview: true,
      sortOrder: 8,
    },
    {
      slug: 'hair-trimming-styling',
      name: 'Hair Trimming & Styling',
      category: 'HAIR',
      shortDescription: 'Precision trims and expert styling.',
      longDescription: 'Maintain your look with our precision trimming service, or get styled for any occasion by our expert stylists.',
      durationMin: 30,
      bufferMin: 10,
      priceType: 'CONSULTATION',
      priceInr: 0,
      isActive: true,
      needsReview: true,
      sortOrder: 9,
    },
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: service,
      create: service,
    });
  }
  console.log(`  ✓ ${services.length} services seeded (marked for owner review)`);

  // ─── Create Draft Offer (inactive) ──────────────────────
  await prisma.offer.upsert({
    where: { promoCode: 'CC20' },
    update: {},
    create: {
      title: '20% Off All Services',
      description: 'Get 20% off on all salon services. A warm welcome to new and returning clients.',
      terms: 'Valid on all services. Cannot be combined with other offers. Subject to availability.',
      discountType: 'PERCENTAGE',
      discountValue: 20,
      isPublished: false,
      promoCode: 'CC20',
      sortOrder: 1,
    },
  });
  console.log('  ✓ Draft offer seeded (inactive, awaiting owner activation)');

  // ─── Create Business Hours (placeholder) ─────────────────
  const defaultHours = [
    { weekday: 0, openTime: '10:00', closeTime: '22:00', isClosed: false }, // Sunday
    { weekday: 1, openTime: '10:00', closeTime: '22:00', isClosed: false }, // Monday
    { weekday: 2, openTime: '10:00', closeTime: '22:00', isClosed: false }, // Tuesday
    { weekday: 3, openTime: '10:00', closeTime: '22:00', isClosed: false }, // Wednesday
    { weekday: 4, openTime: '10:00', closeTime: '22:00', isClosed: false }, // Thursday
    { weekday: 5, openTime: '10:00', closeTime: '22:00', isClosed: false }, // Friday
    { weekday: 6, openTime: '10:00', closeTime: '22:00', isClosed: false }, // Saturday
  ];

  // Delete existing hours and re-create
  await prisma.businessHour.deleteMany();
  for (const hours of defaultHours) {
    await prisma.businessHour.create({ data: hours });
  }
  console.log('  ✓ Business hours seeded (placeholder — needs owner confirmation)');

  // ─── Create Salon Settings ──────────────────────────────
  const settings = [
    { key: 'salon_name', value: 'The C&C House Of Hair & Beauty Salon', type: 'STRING' },
    { key: 'short_name', value: 'C&C Salon', type: 'STRING' },
    { key: 'address', value: 'Shop No. G-1, Utopia Apartment, near Cuts & Care Salon, Murida, Fatorda, Madgaon/Margao, Goa 403602, India', type: 'STRING' },
    { key: 'primary_phone', value: '+919607023902', type: 'STRING' },
    { key: 'additional_phone', value: '+917030450463', type: 'STRING' },
    { key: 'additional_phone_confirmed', value: 'false', type: 'BOOLEAN' },
    { key: 'instagram_url', value: 'https://www.instagram.com/thecandcsalon/', type: 'STRING' },
    { key: 'google_maps_url', value: 'https://www.google.com/maps/place/The+C%26C+House+Of+Hair+%26+Beauty+Salon/@15.2910394,73.9730298,21z/', type: 'STRING' },
    { key: 'rating', value: '4.9', type: 'STRING' },
    { key: 'review_count', value: '80', type: 'STRING' },
    { key: 'timezone', value: 'Asia/Kolkata', type: 'STRING' },
    { key: 'offers_toggle', value: 'false', type: 'BOOLEAN' },
    { key: 'hold_duration_minutes', value: '10', type: 'NUMBER' },
    { key: 'slot_interval_minutes', value: '30', type: 'NUMBER' },
    { key: 'min_notice_hours', value: '2', type: 'NUMBER' },
    { key: 'booking_horizon_days', value: '30', type: 'NUMBER' },
    { key: 'staff_capacity', value: '1', type: 'NUMBER' },
    { key: 'hero_headline', value: 'Your next style masterpiece awaits.', type: 'STRING' },
    { key: 'hero_subtext', value: 'Hair, beauty, nails, and occasion-ready care in the heart of Fatorda.', type: 'STRING' },
    { key: 'hours_confirmed', value: 'false', type: 'BOOLEAN' },
    { key: 'payment_mode', value: 'mock', type: 'STRING' },
    { key: 'whatsapp_mode', value: 'mock', type: 'STRING' },
    { key: 'cancellation_policy', value: 'Cancellation policy details will be provided by the salon owner. Please contact us for current terms.', type: 'STRING' },
    { key: 'privacy_policy', value: 'Privacy policy details will be provided by the salon owner.', type: 'STRING' },
  ];

  for (const setting of settings) {
    await prisma.salonSetting.upsert({
      where: { key: setting.key },
      update: { value: setting.value, type: setting.type },
      create: setting,
    });
  }
  console.log(`  ✓ ${settings.length} salon settings seeded`);

  console.log('\n✅ Seeding complete!\n');
  console.log('  Admin login: owner@ccsalon.com / admin123');
  console.log('  All services are marked for owner review');
  console.log('  Offers are disabled by default');
  console.log('  Business hours need owner confirmation\n');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
