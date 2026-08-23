'use client';

import { useState } from 'react';
import Link from 'next/link';

const CATEGORIES = ['All', 'Hair', 'Nails', 'Skin', 'Ambience'];

const PLACEHOLDER_IMAGES = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  category: CATEGORIES[(i % 4) + 1],
  alt: `Gallery image ${i + 1}`
}));

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? PLACEHOLDER_IMAGES 
    : PLACEHOLDER_IMAGES.filter(img => img.category === activeCategory);

  return (
    <main className="min-h-screen bg-ivory text-ink py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-espresso mb-4">
            Our Gallery
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6 rounded-full"></div>
          <p className="font-body text-lg max-w-2xl mx-auto text-ink/80">
            A glimpse into the C&C Salon experience, featuring our beautiful space and stunning transformations.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-body text-sm transition-colors ${
                activeCategory === category
                  ? 'bg-espresso text-white'
                  : 'bg-white border border-sand text-ink hover:bg-sand'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredImages.map((image) => (
            <div key={image.id} className="relative aspect-square rounded-2xl overflow-hidden bg-sand flex flex-col items-center justify-center border border-sand/50 group">
              {/* This would be an actual next/image component when images are available */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-body font-medium">{image.category}</span>
              </div>
              <svg className="w-12 h-12 text-ink/20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span className="text-sm font-medium text-ink/40 font-body">Owner-approved image</span>
            </div>
          ))}
        </div>

        <div className="text-center bg-blush/30 rounded-3xl p-12 border border-blush/50">
          <h2 className="font-display text-3xl text-espresso mb-6">Like what you see?</h2>
          <p className="font-body text-ink/80 mb-8 max-w-lg mx-auto">
            Experience our premium services for yourself. Book your appointment today and let our experts take care of you.
          </p>
          <Link href="/book" className="inline-block px-8 py-4 bg-terracotta text-white rounded-full font-medium hover:bg-espresso transition-colors shadow-sm">
            Book your appointment
          </Link>
        </div>
      </div>
    </main>
  );
}
