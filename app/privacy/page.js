export default function PrivacyPolicy() {
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
                When you request availability or contact Bogotá Unlocked,
                we may collect information such as your name, email address,
                preferred tour date, number of guests, pickup location and
                other information you voluntarily provide when communicating
                with us.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[#2C2523] mb-3">
                2. How We Use Your Information
              </h2>

              <p>
                We use the information you provide to respond to availability
                requests, communicate with you about your experience, organize
                transportation and tour logistics, process reservations and
                provide customer support.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[#2C2523] mb-3">
                3. WhatsApp Communication
              </h2>

              <p>
                When you choose to contact Bogotá Unlocked through WhatsApp,
                information you provide through that service is also subject
                to WhatsApp's own privacy practices and terms. We use WhatsApp
                as a communication channel for availability, booking
                coordination and customer support.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[#2C2523] mb-3">
                4. Payment Information
              </h2>

              <p>
                Bogotá Unlocked does not collect or store your full payment
                card information directly through this website. If a payment
                is required after availability has been confirmed, you may
                receive a payment link from a third-party payment provider.
                Payment information submitted through that provider is handled
                according to the provider's applicable privacy and security
                policies.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[#2C2523] mb-3">
                5. Sharing of Information
              </h2>

              <p>
                We may share information when reasonably necessary to provide
                the services you request, including with service providers
                involved in transportation, admissions, activities, payment
                processing or other tour logistics.
              </p>

              <p className="mt-3">
                We do not intend to sell your personal information to third
                parties.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[#2C2523] mb-3">
                6. Data Security
              </h2>

              <p>
                We take reasonable measures to protect the personal information
                provided to us. However, no method of transmission or electronic
                storage can be guaranteed to be completely secure.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[#2C2523] mb-3">
                7. Your Rights
              </h2>

              <p>
                Applicable Colombian data protection rules provide individuals
                with rights regarding their personal information. Requests
                concerning access, correction, updating or other applicable
                data protection rights may be directed to Bogotá Unlocked
                through the contact information provided on this website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[#2C2523] mb-3">
                8. Changes to This Policy
              </h2>

              <p>
                Bogotá Unlocked may update this Privacy Policy from time to
                time. The updated version will be published on this page with
                a revised update date.
              </p>
            </section>

            <section className="bg-[#F7F4EE] border border-[#EAE4DC] rounded-xl p-6">
              <h2 className="font-serif text-2xl font-bold text-[#2C2523] mb-3">
                Contact
              </h2>

              <p>
                For questions about this Privacy Policy or your personal
                information, please contact Bogotá Unlocked through WhatsApp.
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
