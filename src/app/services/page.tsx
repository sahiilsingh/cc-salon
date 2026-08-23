'use client';

import { useState } from 'react';
import Link from 'next/link';

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

const CATEGORIES = [
  { id: 'ALL', label: 'All Services' },
  { id: 'HAIR', label: 'Hair' },
  { id: 'COLOUR_TREATMENTS', label: 'Colour & Treatments' },
  { id: 'SKIN_BEAUTY', label: 'Skin & Beauty' },
  { id: 'NAILS_MAKEUP', label: 'Nails & Makeup' }
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = DEMO_SERVICES.filter(service => {
    const matchesCategory = activeCategory === 'ALL' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-ivory text-ink py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-espresso mb-6">
            Our Services
          </h1>
          <p className="font-body text-lg max-w-2xl mx-auto text-ink/80">
            Discover our range of premium hair, skin, and beauty treatments designed to make you look and feel your absolute best.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full font-body text-sm transition-colors ${
                  activeCategory === category.id
                    ? 'bg-terracotta text-white'
                    : 'bg-sand text-ink hover:bg-blush hover:text-espresso'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-full border border-sand bg-white focus:outline-none focus:ring-2 focus:ring-terracotta font-body text-sm"
            />
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.slug} className="bg-white rounded-2xl shadow-sm border border-sand overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-display text-xl text-espresso">{service.name}</h3>
                    <span className="text-xs font-semibold px-2 py-1 bg-blush text-espresso rounded-full">
                      {CATEGORIES.find(c => c.id === service.category)?.label}
                    </span>
                  </div>
                  <p className="font-body text-ink/70 mb-6 line-clamp-3">
                    {service.shortDescription}
                  </p>
                  
                  <div className="flex flex-col gap-2 mt-auto text-sm font-body text-ink/80">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      {service.durationMin} mins
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      {service.priceType === 'CONSULTATION' ? 'Price on consultation' : `₹${service.priceInr}`}
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-sand/30 border-t border-sand flex gap-3">
                  <Link href={`/services/${service.slug}`} className="flex-1 text-center py-2 px-4 rounded-lg font-medium text-terracotta border border-terracotta hover:bg-terracotta hover:text-white transition-colors">
                    Details
                  </Link>
                  <Link href="/book" className="flex-1 text-center py-2 px-4 rounded-lg font-medium bg-espresso text-white hover:bg-terracotta transition-colors">
                    Book
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-sand">
            <h3 className="font-display text-2xl text-espresso mb-2">No services found</h3>
            <p className="font-body text-ink/70">Try adjusting your filters or search query.</p>
          </div>
        )}
      </div>
    </main>
  );
}
