export default function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'The C&C House Of Hair & Beauty Salon',
    alternateName: 'C&C Salon',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://ccsalon.vercel.app',
    telephone: '+919607023902',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop No. G-1, Utopia Apartment, near Cuts & Care Salon, Murida',
      addressLocality: 'Fatorda, Madgaon/Margao',
      addressRegion: 'Goa',
      postalCode: '403602',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 15.2911079,
      longitude: 73.9731494,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '80',
      bestRating: '5',
    },
    sameAs: [
      'https://www.instagram.com/thecandcsalon/',
    ],
    priceRange: '₹₹',
    image: [],
    description: 'Premium hair, beauty, nail, and occasion-ready services in Fatorda, Margao, South Goa. Expert stylists, premium products, and a warm welcome.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
