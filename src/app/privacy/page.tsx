export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-ivory text-ink py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-sand">
        <h1 className="font-display text-4xl text-espresso mb-8 border-b border-sand pb-6">Privacy Policy</h1>
        
        <div className="font-body space-y-8 text-ink/80 leading-relaxed">
          <section>
            <p className="text-sm text-ink/50 mb-4">Last Updated: [Date Placeholder]</p>
            <p>
              At C&C Salon ("we," "our," or "us"), we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-espresso mb-4">1. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of personal information when you book an appointment or communicate with us:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Name and contact details (email address, phone number)</li>
              <li>Appointment history and preferences</li>
              <li>Any information you provide regarding allergies or skin sensitivities relevant to our services</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-espresso mb-4">2. How We Use Your Information</h2>
            <p className="mb-3">Your information is used to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Process and manage your bookings</li>
              <li>Communicate with you regarding your appointments (e.g., confirmations, reminders)</li>
              <li>Improve our services and tailor treatments to your preferences</li>
              <li>Send promotional updates (only if you have opted in)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-espresso mb-4">3. Data Sharing and Protection</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We implement a variety of security measures to maintain the safety of your personal information.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-espresso mb-4">4. Your Rights</h2>
            <p>
              You have the right to request access to the personal data we hold about you, request corrections to any inaccurate data, or request deletion of your data, subject to legal requirements. To exercise these rights, please contact us.
            </p>
          </section>

          <section className="bg-sand/30 p-6 rounded-xl mt-8 border border-sand">
            <h2 className="font-display text-xl text-espresso mb-2">Contact Us</h2>
            <p>
              If you have any questions regarding this privacy policy, you may contact us using the information on our <a href="/contact" className="text-terracotta hover:underline">Contact Page</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
