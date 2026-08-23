import React from 'react'

export default function CancellationPolicyPage() {
  return (
    <main className="min-h-screen bg-sand py-16 font-body">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm section">
          <h1 className="text-4xl font-display text-ink mb-6">Cancellation Policy</h1>
          <p className="text-sm text-espresso mb-8">Effective Date: August 23, 2026</p>

          <div className="space-y-8 text-espresso leading-relaxed">
            <section>
              <h2 className="text-2xl font-display text-ink mb-4">Notice Period</h2>
              <p>
                We value your time and ours. We request that you provide at least <strong>24 hours notice</strong> if you need to cancel or reschedule your appointment. This allows us to offer the time slot to other clients.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-ink mb-4">Late Cancellations</h2>
              <p>
                Cancellations made within 24 hours of the scheduled appointment time may be subject to a cancellation fee equivalent to 50% of the scheduled service cost.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-ink mb-4">No-Shows</h2>
              <p>
                Failure to arrive for your scheduled appointment without prior notification will result in a no-show charge of 100% of the service cost. Future bookings may require a non-refundable deposit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-ink mb-4">Late Arrivals</h2>
              <p>
                If you arrive more than 15 minutes late for your appointment, we may need to shorten your service time or reschedule entirely to avoid disrupting other clients' appointments. In such cases, the original service fee may still apply.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-ink mb-4">How to Cancel</h2>
              <p>
                To cancel or reschedule, please contact us directly via phone, WhatsApp, or through the booking management link provided in your confirmation email.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
