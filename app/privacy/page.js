export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#2C2523] font-sans antialiased">
      <div className="bg-[#2D3E35] text-[#F4F1DE] text-[10px] sm:text-xs font-semibold tracking-wider uppercase py-2.5 px-4 text-center">
        Bogotá Unlocked • Privacy Policy
      </div>

      <header className="border-b border-[#EAE4DC] bg-[#FDFBF7] px-5 sm:px-6 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <a href="/" className="shrink-0">
            <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#2C2523]">
              BOGOTÁ{' '}
              <span className="text-[#C85A32] italic font-normal">
                UNLOCKED
              </span>
            </span>
          </a>

          <a
            href="/"
            className="text-xs font-bold uppercase tracking-wider text-[#5C534E] hover:text-[#C85A32] transition"
          >
            Back to Home
          </a>
        </div>
      </header>

      <section className="px-5 sm:px-6 py-14 sm:py-20">
        <div className="max-w-4xl mx-auto">

          <div className="mb-10">
            <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-[#C85A32]">
              Legal Information
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2C2523] mt-2">
              Privacy Policy
            </h1>

            <p className="text-sm text-[#786E65] mt-4">
              Last updated: October 2026
            </p>
          </div>

          <div className="space-y-8 text-sm sm:text-base text-[#5C534E] leading-relaxed">

            <section>
              <h2 className="font-serif text-2xl font-bold text-[#2C2523] mb-3">
                1. Information We Collect
              </h2>

              <p>
                When you request availability for a Bogotá Unlocked experience,
                we may collect information such as your name, email address,
                preferred date, number of guests, and pickup location.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[#2C2523] mb-3">
                2. How We Use Your Information
              </h2>

              <p>
                We use the information you provide to respond to your request,
                check availability, organize your experience, communicate with
                you about your reservation, and provide the requested services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[#2C2523] mb-3">
                3. WhatsApp Communication
              </h2>

              <p>
                When you choose to check availability through WhatsApp, the
                information you submit may be included in the WhatsApp message
                used to communicate with you.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[#2C2523] mb-3">
                4. Payment Information
              </h2>

              <p>
                Bogotá Unlocked does not collect or store your full card details
                through this website. When a deposit is required after your date
                has been confirmed, payment may be processed through a
                third-party payment provider using a secure payment link.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[#2C2523] mb-3">
                5. Sharing of Information
              </h2>

              <p>
                We may share information when necessary with service providers
                involved in delivering your experience, such as transportation
                providers, guides, or payment providers. We only use information
                as reasonably necessary to provide and manage the service.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[#2C2523] mb-3">
                6. Data Security
              </h2>

              <p>
                We take reasonable measures to protect the information provided
                through our website and communication channels. However, no
                internet transmission or electronic storage system can be
                guaranteed to be completely secure.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[#2C2523] mb-3">
                7. Your Rights
              </h2>

              <p>
                You may request information about the personal data we hold
                about you and request correction or other actions available
                under applicable Colombian data protection law.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[#2C2523] mb-3">
                8. Changes to This Policy
              </h2>

              <p>
                We may update this Privacy Policy from time to time. Any updated
                version will be published on this page with a revised update date.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[#2C2523] mb-3">
                9. Contact
              </h2>

              <p>
                If you have questions about this Privacy Policy or the handling
                of your personal information, please contact Bogotá Unlocked
                through the communication channels provided on our website.
              </p>
            </section>

            <section className="bg-[#F7F4EE] border border-[#EAE4DC] rounded-xl p-6">
              <h2 className="font-serif text-2xl font-bold text-[#2C2523] mb-3">
                Contact
              </h2>

              <p>
                Questions about privacy or the handling of your personal
                information can be directed to the host through WhatsApp.
              </p>

              <a
                href="https://wa.me/573152551212"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-4 px-5 py-3 bg-[#C85A32] hover:bg-[#B04A25] text-white font-bold rounded-md text-xs uppercase tracking-wider transition"
              >
                Contact via WhatsApp
              </a>
            </section>

          </div>
        </div>
      </section>

      <footer className="bg-[#1C2620] text-neutral-400 py-8 px-5 sm:px-6 text-center text-xs">
        <p className="font-serif text-base font-bold text-white mb-2">
          Bogotá Unlocked
        </p>

        <p>Bogotá D.C., Colombia • RNT No. 301817</p>

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-4">
          <a href="/privacy" className="hover:text-white transition">
            Privacy Policy
          </a>

          <a href="/terms" className="hover:text-white transition">
            Terms & Conditions
          </a>

          <a href="/cancellation" className="hover:text-white transition">
            Cancellation Policy
          </a>
        </div>
      </footer>
    </main>
  );
}
