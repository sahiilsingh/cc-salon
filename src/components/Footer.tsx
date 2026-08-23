import Link from 'next/link';

const SALON_SETTINGS = {
  name: "The C&C House Of Hair & Beauty Salon",
  primaryPhone: "+91 96070 23902",
  instagramUrl: "https://www.instagram.com/thecandcsalon/",
  mapsUrl: "https://www.google.com/maps/place/The+C%26C+House+Of+Hair+%26+Beauty+Salon/",
  address: "Shop No. G-1, Utopia Apartment, near Cuts & Care Salon, Murida, Fatorda, Madgaon/Margao, Goa 403602",
};

export default function Footer() {
  return (
    <footer className="bg-espresso text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-display text-2xl font-semibold mb-2">C&C</h3>
            <p className="font-body text-xs uppercase tracking-widest text-white/70 mb-6">
              House of Hair & Beauty
            </p>
            <p className="font-body text-sm text-white/80 leading-relaxed mb-6">
              Premium hair, beauty, nails, and occasion-ready care in the heart of Fatorda, Goa.
            </p>
            <div className="flex space-x-4">
              <a href={SALON_SETTINGS.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href={SALON_SETTINGS.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors" aria-label="Google Maps">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div className="col-span-1">
            <h4 className="font-display text-lg font-medium mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-3 font-body text-sm text-white/80">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services & Menu</Link></li>
              <li><Link href="/offers" className="hover:text-white transition-colors">Current Offers</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/book" className="hover:text-white transition-colors">Book an appointment</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="col-span-1">
            <h4 className="font-display text-lg font-medium mb-4 text-gold">Contact</h4>
            <ul className="space-y-3 font-body text-sm text-white/80">
              <li className="flex items-start">
                <span className="mr-2 mt-0.5">📍</span>
                <span>{SALON_SETTINGS.address}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <a href={`tel:${SALON_SETTINGS.primaryPhone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">{SALON_SETTINGS.primaryPhone}</a>
              </li>
            </ul>
          </div>

          {/* Hours Col */}
          <div className="col-span-1">
            <h4 className="font-display text-lg font-medium mb-4 text-gold">Hours</h4>
            <p className="font-body text-sm text-white/80 mb-4">
              Please call to confirm today&apos;s availability.
            </p>
            <div className="mt-6 p-4 bg-white/5 rounded border border-white/10">
              <p className="font-body text-xs text-white/70 italic">
                * Offers and prices subject to confirmation upon consultation.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-white/60">
            © {new Date().getFullYear()} C&C House of Hair & Beauty. All rights reserved.
          </p>
          <div className="flex gap-4 font-body text-xs text-white/60">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/cancellation" className="hover:text-white transition-colors">Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
