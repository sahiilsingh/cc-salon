import Link from 'next/link';
import { notFound } from 'next/navigation';

const DEMO_SERVICES = [
  { slug: 'ladies-haircut', name: "Ladies' Haircut", category: 'HAIR', shortDescription: 'Expert cuts tailored to your style and face shape.', durationMin: 45, priceType: 'CONSULTATION', priceInr: 0, needsReview: true },
  { slug: 'hair-colour', name: 'Hair Colour', category: 'COLOUR_TREATMENTS', shortDescription: 'Rich, vibrant colour with premium products.', durationMin: 90, priceType: 'CONSULTATION', priceInr: 0, needsReview: true },
  { slug: 'global-highlights', name: 'Global Highlights', category: 'COLOUR_TREATMENTS', shortDescription: 'Dimensional highlights for a sun-kissed look.', durationMin: 120, priceType: 'CONSULTATION', priceInr: 0, needsReview: true },
  { slug: 'keratin-treatment', name: 'Keratin Treatment', category: 'COLOUR_TREATMENTS', shortDescription: 'Smooth, frizz-free hair with lasting results.', durationMin: 150, priceType: 'CONSULTATION', priceInr: 0, needsReview: true },
  { slug: 'hair-spa', name: 'Hair Spa', category: 'HAIR', shortDescription: 'Deep conditioning and scalp care for healthy hair.', durationMin: 60, priceType: 'CONSULTATION', priceInr: 0, needsReview: true },
  { slug: 'facial-cleanup', name: 'Facial & Cleanup', category: 'SKIN_BEAUTY', shortDescription: 'Refreshing facial treatments for glowing skin.', durationMin: 60, priceType: 'CONSULTATION', priceInr: 0, needsReview: true },
  { slug: 'manicure-pedicure', name: 'Manicure & Pedicure', category: 'NAILS_MAKEUP', shortDescription: 'Luxurious nail care and grooming.', durationMin: 75, priceType: 'CONSULTATION', priceInr: 0, needsReview: true },
  { slug: 'bridal-makeup', name: 'Bridal & Occasion Makeup', category: 'NAILS_MAKEUP', shortDescription: 'Camera-ready beauty for your special day.', durationMin: 120, priceType: 'CONSULTATION', priceInr: 0, needsReview: true },
  { slug: 'hair-trimming', name: 'Hair Trimming & Styling', category: 'HAIR', shortDescription: 'Precision trims and expert styling.', durationMin: 30, priceType: 'CONSULTATION', priceInr: 0, needsReview: true },
];

const CATEGORIES: Record<string, string> = {
  'HAIR': 'Hair',
  'COLOUR_TREATMENTS': 'Colour & Treatments',
  'SKIN_BEAUTY': 'Skin & Beauty',
  'NAILS_MAKEUP': 'Nails & Makeup'
};

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = DEMO_SERVICES.find(s => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = DEMO_SERVICES.filter(s => s.category === service.category && s.slug !== service.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-ivory text-ink py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex text-sm text-ink/60 mb-8 font-body">
          <Link href="/" className="hover:text-terracotta transition-colors">Home</Link>
          <span className="mx-2">&gt;</span>
          <Link href="/services" className="hover:text-terracotta transition-colors">Services</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-espresso font-medium">{service.name}</span>
        </nav>

        <div className="bg-white rounded-3xl shadow-sm border border-sand p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div>
              <div className="inline-block px-3 py-1 bg-blush text-espresso text-sm font-semibold rounded-full mb-4">
                {CATEGORIES[service.category]}
              </div>
              <h1 className="font-display text-3xl md:text-5xl text-espresso mb-4">
                {service.name}
              </h1>
              <p className="font-body text-xl text-ink/70">
                {service.shortDescription}
              </p>
            </div>
            
            <div className="bg-sand/30 p-6 rounded-2xl min-w-[240px]">
              <div className="space-y-4 font-body mb-6">
                <div>
                  <span className="block text-sm text-ink/60 mb-1">Duration</span>
                  <span className="text-lg text-espresso font-medium">{service.durationMin} minutes</span>
                </div>
                <div>
                  <span className="block text-sm text-ink/60 mb-1">Price</span>
                  <span className="text-lg text-espresso font-medium">
                    {service.priceType === 'CONSULTATION' ? 'Price on consultation' : `₹${service.priceInr}`}
                  </span>
                </div>
              </div>
              <Link href="/book" className="block w-full text-center py-3 px-4 rounded-xl font-medium bg-espresso text-white hover:bg-terracotta transition-colors">
                Book this service
              </Link>
            </div>
          </div>

          <div className="space-y-8 border-t border-sand pt-8">
            <div>
              <h2 className="font-display text-2xl text-espresso mb-4">About this service</h2>
              <p className="font-body text-ink/80 leading-relaxed">
                [Detailed description placeholder: This section will contain a thorough explanation of the {service.name} service, the techniques used, and the benefits it provides. It highlights the premium products involved and the expert care delivered by our team.]
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-espresso mb-4">Preparation & Aftercare</h2>
              <ul className="list-disc list-inside font-body text-ink/80 space-y-2">
                <li>[Preparation placeholder: e.g., Arrive with clean hair/skin]</li>
                <li>[Preparation placeholder: e.g., Avoid caffeine before the appointment]</li>
                <li>[Aftercare placeholder: e.g., Use recommended salon products for maintenance]</li>
                <li>[Aftercare placeholder: e.g., Avoid sun exposure for 24 hours]</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div>
            <h2 className="font-display text-3xl text-espresso mb-8 text-center">You might also like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map(related => (
                <Link key={related.slug} href={`/services/${related.slug}`} className="block bg-white rounded-2xl border border-sand p-6 hover:shadow-md transition-shadow group">
                  <h3 className="font-display text-xl text-espresso mb-2 group-hover:text-terracotta transition-colors">{related.name}</h3>
                  <p className="font-body text-sm text-ink/70 mb-4 line-clamp-2">{related.shortDescription}</p>
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-terracotta">{related.durationMin} mins</span>
                    <span className="text-espresso hover:underline">View details</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
