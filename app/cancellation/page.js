export default function CancellationPolicy() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#2C2523] font-sans antialiased">
      <div className="bg-[#2D3E35] text-[#F4F1DE] text-[10px] sm:text-xs font-semibold tracking-wider uppercase py-2.5 px-4 text-center">
        Bogotá Unlocked • Cancellation Policy
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
              Booking Information
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2C2523] mt-2">
              Cancellation Policy
            </h1>

            <p className="text-sm text-[#786E65] mt-4">
              Last updated: October 2026
            </p>
          </div>

          <div className="space-y-8 text-sm sm:text-base text-[#5C534E] leading-relaxed">

            <section>
              <h2 className="font-serif text-2xl font-bold text-[#2C2523] mb-3">
                1. Before Your Reservation Is Confirmed
              </h2>

              <p>
                An availability request does not create a confirmed
                reservation. No payment is taken when you initially submit
                the availability form.
              </p>

              <p className="mt-3">
                The host first confirms availability and the applicable
                booking details with you.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[#2C2523] mb-3">
                2. Deposit and Reservation Confirmation
              </h2>

              <p>
                When a deposit is required, a secure payment link or other
                payment instructions will be sent after your date and booking
                details have been confirmed.
              </p>

              <p className="mt-3">
                The reservation is considered secured once the required
                payment has been successfully received and the booking has
                been confirmed by the host.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[#2C2523] mb-3">
                3. Customer Cancellations
              </h2>

              <p>
                The current stated cancellation policy for Bogotá Unlocked is
                a full refund for eligible cancellations made at least 24
                hours before the scheduled pickup time.
              </p>

              <p className="mt-3">
                Cancellation requests should be made directly through the
                communication channel used to confirm the reservation,
                preferably WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[#2C2523] mb-3">
                4. Cancellations Within 24 Hours and No-Shows
              </h2>

              <p>
                Cancellations made within 24 hours of the scheduled pickup
                time, as well as situations where the customer does not appear
                for the agreed service, may be subject to the applicable
                cancellation terms communicated and agreed at the time of
                booking.
              </p>

              <p className="mt-3">
                Colombian tourism and consumer rules may establish specific
                rights and consequences regarding deposits, advance payments
                and failure to receive contracted tourism services. Those
                applicable rights will prevail over any conflicting provision.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[#2C2523] mb-3">
                5. Changes Made by Bogotá Unlocked
              </h2>

              <p>
                If Bogotá Unlocked cannot provide the contracted experience or
                makes a material change to the agreed service, the applicable
                consumer rights and remedies under Colombian law will apply.
              </p>

              <p className="mt-3">
                Depending on the circumstances, this may include rescheduling,
                an alternative service or a refund where required by law or
                agreed with the customer.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[#2C2523] mb-3">
                6. Weather and Operational Conditions
              </h2>

              <p>
                Bogotá's weather and operating conditions can affect individual
                activities. When reasonably necessary, the host may adjust
                the itinerary while attempting to preserve the overall
                experience.
              </p>

              <p className="mt-3">
                If circumstances result in a material change or cancellation
                of the contracted service, applicable Colombian consumer and
                tourism rules will be followed.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-[#2C2523] mb-3">
                7. How to Request a Cancellation
              </h2>

              <p>
                Contact the Bogotá Unlocked host through WhatsApp and provide
                the name used for the reservation and the scheduled tour date.
                The host will confirm the applicable cancellation and refund
                process.
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

            <section className="bg-[#F7F4EE] border border-[#EAE4DC] rounded-xl p-6">
              <h2 className="font-serif text-2xl font-bold text-[#2C2523] mb-3">
                Important
              </h2>

              <p>
                This policy is intended to summarize the booking and
                cancellation process in clear language. It does not limit any
                mandatory rights available to consumers under applicable
                Colombian law.
              </p>
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
