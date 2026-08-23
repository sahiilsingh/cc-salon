import React from 'react'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-sand py-16 font-body">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm section">
          <h1 className="text-4xl font-display text-ink mb-6">Terms of Service</h1>
          <p className="text-sm text-espresso mb-8">Last updated: August 23, 2026</p>

          <div className="space-y-8 text-espresso leading-relaxed">
            <section>
              <h2 className="text-2xl font-display text-ink mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and booking services at C&C Salon, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-ink mb-4">2. Appointments & Consultations</h2>
              <p>
                All bookings are subject to availability. Services listed as "Price on consultation" require an in-person assessment before a final quote can be provided. The salon reserves the right to adjust timings or refuse service based on hair/skin condition or late arrivals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-ink mb-4">3. Payments & Deposits</h2>
              <p>
                Some services may require a deposit to secure your booking. Full payment is due upon completion of services. We accept major credit cards, UPI, and cash.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-ink mb-4">4. Client Health & Safety</h2>
              <p>
                Please inform our staff of any allergies, medical conditions, or sensitivities prior to your service. C&C Salon is not liable for adverse reactions if relevant information was not disclosed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-ink mb-4">5. Modifications</h2>
              <p>
                We reserve the right to update or modify these Terms of Service at any time without prior notice. Continued use of our services constitutes acceptance of the revised terms.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
