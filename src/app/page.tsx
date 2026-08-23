import Link from "next/link";

const CATEGORIES = [
  {
    name: "Hair",
    description: "Expert cuts, styling, trimming, and hair spa treatments.",
    icon: "✂️",
    href: "/services?category=HAIR",
  },
  {
    name: "Colour & Treatments",
    description: "Vibrant colour, highlights, keratin, and deep treatments.",
    icon: "🎨",
    href: "/services?category=COLOUR_TREATMENTS",
  },
  {
    name: "Skin & Beauty",
    description: "Refreshing facials, cleanup, and skin-care therapies.",
    icon: "✨",
    href: "/services?category=SKIN_BEAUTY",
  },
  {
    name: "Nails & Makeup",
    description: "Luxurious nail care and occasion-ready makeup.",
    icon: "💅",
    href: "/services?category=NAILS_MAKEUP",
  },
];

const VALUES = [
  {
    icon: "🤝",
    title: "Personal Attention",
    description:
      "Every visit is tailored to you. Our stylists listen, advise, and create looks that reflect your personality.",
  },
  {
    icon: "💎",
    title: "Premium Care",
    description:
      "We use only premium, carefully selected products to ensure the best results and the health of your hair and skin.",
  },
  {
    icon: "🌿",
    title: "A Calm Studio Experience",
    description:
      "Step into a warm, modern studio designed for relaxation. Your time here is a moment of calm in a busy world.",
  },
];



export default function Home() {
  return (
    <div>
      {/* ─── Hero Section ───────────────────────────────────── */}
      <section className="relative bg-gradient-to-b from-ivory to-sand px-6 py-20 md:py-32 text-center">
        <div className="container mx-auto max-w-4xl">
          <p className="text-sm font-medium tracking-widest text-terracotta uppercase mb-4 font-body">
            Fatorda, Margao · South Goa
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-ink mb-6 leading-tight">
            Your next style masterpiece awaits.
          </h1>
          <p className="text-lg md:text-xl text-espresso/80 max-w-2xl mx-auto mb-10 font-body">
            Hair, beauty, nails, and occasion-ready care in the heart of
            Fatorda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="btn btn-primary btn-lg">
              Book an appointment
            </Link>
            <Link href="/services" className="btn btn-secondary btn-lg">
              Explore services
            </Link>
          </div>
        </div>
        {/* Decorative curve */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-ivory rounded-t-[50%_100%]" />
      </section>

      {/* ─── Trust Row ──────────────────────────────────────── */}
      <section className="bg-ivory py-8 border-b border-sand">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
            <div className="flex items-center gap-2">
              <span className="text-gold text-lg">★</span>
              <span className="font-semibold text-ink">4.9</span>
              <span className="text-espresso/60 text-sm">Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-ink">80+</span>
              <span className="text-espresso/60 text-sm">Google Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold text-lg">✦</span>
              <span className="text-espresso/60 text-sm">Premium Products</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-terracotta text-lg">◎</span>
              <span className="text-espresso/60 text-sm">Book Online</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Service Categories ─────────────────────────────── */}
      <section className="section bg-ivory">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl text-ink mb-3">
              Our Services
            </h2>
            <hr className="gold-line mx-auto mb-4" />
            <p className="text-espresso/70 max-w-xl mx-auto">
              From expert cuts to occasion-ready beauty, discover the care
              that&apos;s right for you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <Link key={cat.name} href={cat.href} className="group">
                <div className="card text-center h-full flex flex-col items-center p-8 group-hover:-translate-y-1 transition-transform">
                  <span className="text-4xl mb-4">{cat.icon}</span>
                  <h3 className="font-display text-xl text-ink mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-espresso/70 mb-4 flex-1">
                    {cat.description}
                  </p>
                  <span className="text-terracotta text-sm font-semibold group-hover:underline">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Gallery Mosaic ─────────────────────────────────── */}
      <section className="section bg-sand/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl text-ink mb-3">
              Transformations & Ambience
            </h2>
            <hr className="gold-line mx-auto mb-4" />
            <p className="text-espresso/70">
              A glimpse of our work and studio.
            </p>
          </div>
          <div className="bg-sand rounded-2xl p-12 text-center max-w-2xl mx-auto border border-espresso/10">
            <span className="text-4xl block mb-4">📸</span>
            <h3 className="font-display text-2xl text-ink mb-3">Our gallery is being refreshed</h3>
            <p className="text-espresso/70 mb-6">
              Follow @thecandcsalon on Instagram for our latest work, or book a consultation to discuss your next look.
            </p>
            <a href="https://www.instagram.com/thecandcsalon/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary inline-flex">
              Follow on Instagram
            </a>
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery" className="btn btn-secondary">
              View full gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Why C&C ────────────────────────────────────────── */}
      <section className="section bg-ivory">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl text-ink mb-3">
              Why C&C
            </h2>
            <hr className="gold-line mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((val) => (
              <div key={val.title} className="text-center">
                <span className="text-4xl block mb-4">{val.icon}</span>
                <h3 className="font-display text-xl text-ink mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-espresso/70 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Reviews ────────────────────────────────────────── */}
      <section className="section bg-sand/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl text-ink mb-3">
              What Our Clients Say
            </h2>
            <hr className="gold-line mx-auto mb-4" />
            <p className="text-espresso/70 text-sm">
              Based on our 4.9-star Google rating from 80+ reviews
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto shadow-sm border border-sand">
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-gold text-2xl">★</span>
              ))}
            </div>
            <h3 className="font-display text-2xl text-ink mb-4">Read our customer stories</h3>
            <p className="text-espresso/70 mb-8 max-w-lg mx-auto">
              We pride ourselves on delivering exceptional service. See what our community has to say about their experiences at C&C Salon.
            </p>
            <a href="https://www.google.com/maps/place/The+C%26C+House+Of+Hair+%26+Beauty+Salon/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary inline-flex">
              View latest Google Reviews
            </a>
          </div>
        </div>
      </section>

      {/* ─── Offer Banner ───────────────────────────────────── */}
      <section className="section bg-sand">
        <div className="container mx-auto max-w-3xl text-center">
          <span className="badge badge-blush mb-4">Offers</span>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-3">
            Special Offers
          </h2>
          <p className="text-espresso/60 mb-6">
            No current offers. Follow us on Instagram or check back soon for seasonal updates.
          </p>
          <a href="https://www.instagram.com/thecandcsalon/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            Follow on Instagram →
          </a>
        </div>
      </section>

      {/* ─── CTA + Location ─────────────────────────────────── */}
      <section className="bg-espresso text-white py-16 md:py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
                Ready to transform?
              </h2>
              <p className="text-white/70 mb-8">
                Reserve your chair at The C&C House Of Hair & Beauty Salon.
                We&apos;re ready to welcome you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book"
                  className="btn bg-terracotta text-white hover:bg-blush"
                >
                  Book an appointment
                </Link>
                <a
                  href="https://wa.me/919607023902?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
            <div className="space-y-4 text-white/80 text-sm">
              <div>
                <p className="font-semibold text-white text-base mb-1">
                  Visit Us
                </p>
                <p>
                  Shop No. G-1, Utopia Apartment,
                  <br />
                  near Cuts & Care Salon, Murida,
                  <br />
                  Fatorda, Madgaon/Margao,
                  <br />
                  Goa 403602, India
                </p>
              </div>
              <div>
                <p className="font-semibold text-white text-base mb-1">
                  Call Us
                </p>
                <a
                  href="tel:+919607023902"
                  className="text-blush hover:text-white transition-colors"
                >
                  +91 96070 23902
                </a>
              </div>
              <div>
                <p className="font-semibold text-white text-base mb-1">
                  Follow Us
                </p>
                <a
                  href="https://www.instagram.com/thecandcsalon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blush hover:text-white transition-colors"
                >
                  @thecandcsalon on Instagram
                </a>
              </div>
              <a
                href="https://www.google.com/maps/place/The+C%26C+House+Of+Hair+%26+Beauty+Salon/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm border border-white/30 text-white hover:bg-white/10 mt-2 inline-flex"
              >
                Get directions →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
