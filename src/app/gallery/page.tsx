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

        <div className="bg-sand rounded-2xl p-16 text-center max-w-3xl mx-auto border border-espresso/10 mb-16">
          <span className="text-5xl block mb-6">📸</span>
          <h3 className="font-display text-3xl text-ink mb-4">Our gallery is being refreshed</h3>
          <p className="text-espresso/70 mb-8 max-w-xl mx-auto text-lg font-body">
            We are curating a collection of our finest transformations and studio moments. 
            In the meantime, follow @thecandcsalon on Instagram for our latest work.
          </p>
          <a href="https://www.instagram.com/thecandcsalon/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 border border-ink text-ink font-body font-medium rounded hover:bg-ink hover:text-white transition-colors">
            Follow us on Instagram
          </a>
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
