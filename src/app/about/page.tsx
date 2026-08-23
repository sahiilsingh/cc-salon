import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-ivory text-ink">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sand/30 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-espresso mb-6">
            Where Beauty Meets Confidence
          </h1>
          <p className="font-body text-lg md:text-xl text-ink/80 leading-relaxed">
            Welcome to C&C Salon, Fatorda's premier destination for personalized beauty and wellness.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl text-espresso mb-6 text-center">Our Story</h2>
          <div className="font-body text-ink/80 space-y-6 leading-relaxed">
            <p>
              [Placeholder for the salon's journey in Fatorda. This section will elaborate on when the salon was founded, the passion behind starting it, and the vision to create a unique space for beauty in the heart of the city.]
            </p>
            <p>
              [Placeholder: Elaborate on the growth of the salon, the community it has built, and the dedication to providing top-tier services to every client who walks through the door.]
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-sand">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl text-espresso mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-ivory rounded-2xl border border-sand">
              <h3 className="font-display text-xl text-terracotta mb-3">Personal Attention</h3>
              <p className="font-body text-sm text-ink/70">Every client receives dedicated, unhurried care tailored to their unique needs and preferences.</p>
            </div>
            <div className="p-6 bg-ivory rounded-2xl border border-sand">
              <h3 className="font-display text-xl text-terracotta mb-3">Premium Products</h3>
              <p className="font-body text-sm text-ink/70">We carefully select and use only the highest quality products for beautiful, lasting results.</p>
            </div>
            <div className="p-6 bg-ivory rounded-2xl border border-sand">
              <h3 className="font-display text-xl text-terracotta mb-3">Inclusive & Welcoming</h3>
              <p className="font-body text-sm text-ink/70">A safe, judgment-free space where everyone is celebrated and cared for.</p>
            </div>
            <div className="p-6 bg-ivory rounded-2xl border border-sand">
              <h3 className="font-display text-xl text-terracotta mb-3">Modern Experience</h3>
              <p className="font-body text-sm text-ink/70">A beautiful, clean, and relaxing studio environment designed for your comfort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inclusivity Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blush/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl text-espresso mb-4">Everyone is Welcome Here</h2>
          <p className="font-body text-ink/80 leading-relaxed mb-6">
            C&C Salon is proudly a women-led business and a safe, LGBTQ+ friendly space. We believe beauty is for everyone, and our salon is designed to be an environment where you can truly be yourself while we take care of you.
          </p>
        </div>
      </section>

      {/* Location & CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl text-espresso mb-6">Visit Us in Fatorda</h2>
          <p className="font-body text-ink/80 mb-8 max-w-lg mx-auto">
            [Full Address Placeholder]<br/>
            Fatorda, Margao, Goa
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-8 py-3 bg-white border border-espresso text-espresso rounded-full font-medium hover:bg-sand transition-colors">
              Get Directions
            </Link>
            <Link href="/book" className="px-8 py-3 bg-espresso text-white rounded-full font-medium hover:bg-terracotta transition-colors shadow-sm">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
