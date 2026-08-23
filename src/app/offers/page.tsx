import Link from 'next/link';

export default function OffersPage() {
  // Toggle this to true to see the placeholder active offers
  const HAS_ACTIVE_OFFERS = false;

  return (
    <main className="min-h-screen bg-ivory text-ink py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-espresso mb-6">
            Current Offers
          </h1>
          <p className="font-body text-lg text-ink/80">
            Exclusive deals and seasonal packages curated just for you.
          </p>
        </div>

        {!HAS_ACTIVE_OFFERS ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-sand shadow-sm">
            <div className="w-20 h-20 bg-blush rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
            </div>
            <h2 className="font-display text-2xl text-espresso mb-4">No offers are currently active</h2>
            <p className="font-body text-ink/70 mb-8 max-w-md mx-auto">
              Follow us on Instagram for the latest updates on seasonal promotions, exclusive packages, and more!
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#" className="px-6 py-3 bg-sand text-espresso rounded-full font-medium hover:bg-terracotta hover:text-white transition-colors">
                Follow on Instagram
              </a>
              <Link href="/services" className="px-6 py-3 bg-espresso text-white rounded-full font-medium hover:bg-terracotta transition-colors">
                View All Services
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Placeholder Offer 1 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-sand shadow-sm flex flex-col">
              <div className="bg-blush/30 p-8 border-b border-sand">
                <span className="inline-block px-3 py-1 bg-white text-terracotta text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                  Bridal Season
                </span>
                <h3 className="font-display text-3xl text-espresso mb-2">Bridal Glow Package</h3>
                <p className="font-body text-ink/70">Complete pre-wedding care for the radiant bride.</p>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <ul className="font-body text-ink/80 space-y-3 mb-8 flex-grow">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-success mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Advanced Facial & Cleanup
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-success mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Hair Spa & Treatment
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-success mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Premium Mani-Pedi
                  </li>
                </ul>
                <div className="mb-6">
                  <p className="text-sm text-ink/60 italic">* Valid until December 31st</p>
                  <p className="text-sm text-ink/60 italic">* Terms & Conditions apply</p>
                </div>
                <Link href="/book?offer=bridal-glow" className="block w-full text-center py-3 bg-espresso text-white rounded-xl font-medium hover:bg-terracotta transition-colors">
                  Book with this offer
                </Link>
              </div>
            </div>

            {/* Placeholder Offer 2 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-sand shadow-sm flex flex-col">
              <div className="bg-sand/30 p-8 border-b border-sand">
                <span className="inline-block px-3 py-1 bg-white text-terracotta text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                  Midweek Treat
                </span>
                <h3 className="font-display text-3xl text-espresso mb-2">20% Off Hair Colour</h3>
                <p className="font-body text-ink/70">Transform your look with our premium colours.</p>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <p className="font-body text-ink/80 mb-8 flex-grow">
                  Book any hair colour service between Tuesday and Thursday and enjoy a 20% discount on your treatment. Includes global colour, highlights, and balayage.
                </p>
                <div className="mb-6">
                  <p className="text-sm text-ink/60 italic">* Valid on Tue, Wed, Thu only</p>
                  <p className="text-sm text-ink/60 italic">* Excludes root touch-ups</p>
                </div>
                <Link href="/book?offer=midweek-colour" className="block w-full text-center py-3 bg-espresso text-white rounded-xl font-medium hover:bg-terracotta transition-colors">
                  Book with this offer
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 text-center text-sm font-body text-ink/50 bg-sand/20 p-4 rounded-xl">
          Note: Offers are managed and updated by the salon owner. Prices and availability are subject to change.
        </div>
      </div>
    </main>
  );
}
