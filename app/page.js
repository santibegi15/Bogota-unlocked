'use client';

import React, { useState } from 'react';

export default function Home() {
  const [guests, setGuests] = useState(2);

  const [formData, setFormData] = useState({
    date: '',
    name: '',
    email: '',
    pickupLocation: '',
  });

  const pricePerPerson = guests === 1 ? 279 : guests <= 4 ? 199 : null;
  const totalPrice = pricePerPerson ? guests * pricePerPerson : null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckout = (e) => {
    e.preventDefault();

    const message = `Hi! I'd like to check availability for the Bogotá Unlocked Private Tour.

Guests: ${guests}
Preferred date: ${formData.date || 'TBD'}
Name: ${formData.name}
Email: ${formData.email}
Pickup location: ${formData.pickupLocation}
Estimated total: ${totalPrice ? `$${totalPrice} USD` : 'Custom quote for 5–12 guests'}

I understand that availability will be confirmed first and that a deposit is required to secure the reservation.`;

    window.open(
      `https://wa.me/573152551212?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  const faqs = [
    {
      question: 'Is this a private tour?',
      answer:
        'Yes. The experience is designed for your private group rather than a large shared tour. Your day includes private transportation and a dedicated local host.',
    },
    {
      question: 'What is included in the price?',
      answer:
        'The experience includes private transportation, hotel pickup and return, a dedicated local host, the planned itinerary, admissions listed in the itinerary, local food experiences, lunch, specialty coffee and the Tejo experience.',
    },
    {
      question: 'How many people can join?',
      answer:
        'The booking form supports private groups of 1 to 12 guests. Groups of 5–12 receive a customized quote from the host.',
    },
    {
      question: 'Where can you pick us up?',
      answer:
        'The current service area includes accommodations in areas such as Chapinero, Usaquén and El Chicó. Enter your hotel or pickup address when requesting availability.',
    },
    {
      question: 'What happens after I request a date?',
      answer:
        'Your request opens WhatsApp with the details you entered. The host will confirm availability first. Once your date is confirmed, a secure payment link will be sent to you through WhatsApp for the required deposit. Your reservation is secured once the deposit is paid.',
    },
    {
      question: 'What happens if the weather changes?',
      answer:
        'Some activities can be affected by weather or operational conditions. The host will coordinate any necessary itinerary adjustments with you.',
    },
    {
      question: 'Can I cancel my reservation?',
      answer:
        'The current stated cancellation policy is a full refund up to 24 hours before the pickup time. Final booking terms should be confirmed with the host before payment.',
    },
    {
      question: 'Do I need to speak Spanish?',
      answer:
        'No. The experience is designed for international visitors and includes a dedicated local host. Ask the host about language availability when confirming your booking.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C2523] font-sans antialiased selection:bg-[#C85A32] selection:text-white">

      {/* TOP TRUST BANNER */}
      <div className="bg-[#2D3E35] text-[#F4F1DE] text-[10px] sm:text-xs font-semibold tracking-wider uppercase py-2.5 px-4 text-center">
        Official MinCIT Registered Operator • RNT No. 301817 • Private Group Experience
      </div>

      {/* NAVIGATION */}
      <header className="border-b border-[#EAE4DC] bg-[#FDFBF7]/95 backdrop-blur sticky top-0 z-50 px-5 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

          <a href="/" className="shrink-0">
            <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#2C2523]">
              BOGOTÁ{' '}
              <span className="text-[#C85A32] italic font-normal">
                UNLOCKED
              </span>
            </span>
          </a>

          <div className="flex items-center gap-3 sm:gap-6">

            <a
              href="https://wa.me/573152551212"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase text-[#5C534E] hover:text-[#C85A32] transition"
            >
              WhatsApp Host
            </a>

            <a
              href="#reserve"
              className="bg-[#C85A32] hover:bg-[#B04A25] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-4 sm:px-5 py-2.5 rounded-md shadow-sm transition"
            >
              Check Availability
            </a>

          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative px-5 sm:px-6 pt-14 sm:pt-20 pb-14 sm:pb-20 max-w-6xl mx-auto text-center">

        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#EAE4DC] text-[#2D3E35] text-[10px] sm:text-xs font-semibold tracking-wide uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-[#C85A32]"></span>
          <span>Private Bogotá Day Experience</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#2C2523] leading-[1.08] mb-6 max-w-5xl mx-auto">
          One private day.
          <br />
          <span className="italic text-[#C85A32]">
            The best of Bogotá, made effortless.
          </span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-[#5C534E] max-w-3xl mx-auto mb-6 leading-relaxed">
          See Bogotá through food, culture, history and local traditions —
          without having to organize the day yourself. Private transportation,
          a dedicated local host and a full itinerary are arranged around your group.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm text-[#5C534E] mb-7">
          <span>✓ Private groups of 1–12</span>
          <span>✓ Hotel pickup & return</span>
          <span>✓ From $199/person</span>
        </div>

        {/* HERO CTA — MOVED BEFORE VIDEO */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4">

          <a
            href="#reserve"
            className="w-full sm:w-auto px-8 py-4 bg-[#C85A32] hover:bg-[#B04A25] text-white font-bold rounded-md text-xs uppercase tracking-wider transition shadow-md shadow-[#C85A32]/20"
          >
            Check Availability
          </a>

          <a
            href="#included"
            className="w-full sm:w-auto px-8 py-4 border border-[#D6CEC3] hover:border-[#2C2523] text-[#2C2523] font-bold rounded-md text-xs uppercase tracking-wider transition"
          >
            See What's Included
          </a>

        </div>

        <p className="text-[11px] sm:text-xs text-[#786E65] mb-9">
          No payment is taken when you request availability. Your date is confirmed before a deposit is requested.
        </p>

        {/* HERO VIDEO */}
        <div className="relative w-full h-[330px] sm:h-[480px] overflow-hidden rounded-2xl shadow-xl mb-9 bg-neutral-900">

          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/monserrate.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 flex items-end justify-between p-5 sm:p-8 text-white">

            <div className="text-left">
              <span className="text-sm font-medium tracking-wide">
                Monserrate Sanctuary
              </span>

              <span className="block text-xs text-white/75 mt-1">
                3,152m above Bogotá
              </span>
            </div>

            <span className="text-xs uppercase tracking-widest text-amber-300 font-bold hidden sm:inline-block">
              Panoramic Andean Views
            </span>

          </div>
        </div>

      </section>

      {/* WHY BOGOTÁ UNLOCKED */}
      <section className="bg-[#F7F4EE] border-y border-[#EAE4DC] py-16 sm:py-20 px-5 sm:px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-12">

            <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-[#C85A32]">
              Why Bogotá Unlocked
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2523] mt-2">
              Bogotá without the planning headache.
            </h2>

            <p className="text-sm sm:text-base text-[#5C534E] mt-4 leading-relaxed">
              One carefully organized private day designed to help you
              experience more of Bogotá without spending your vacation
              figuring out transportation, tickets and logistics.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            <div className="bg-[#FDFBF7] border border-[#EAE4DC] rounded-xl p-6">
              <div className="text-2xl mb-4">🚗</div>

              <h3 className="font-serif text-xl font-bold mb-2">
                Private
              </h3>

              <p className="text-sm text-[#5C534E] leading-relaxed">
                No large tour buses or waiting for strangers. Your day is
                organized around your private group.
              </p>
            </div>

            <div className="bg-[#FDFBF7] border border-[#EAE4DC] rounded-xl p-6">
              <div className="text-2xl mb-4">👤</div>

              <h3 className="font-serif text-xl font-bold mb-2">
                Local
              </h3>

              <p className="text-sm text-[#5C534E] leading-relaxed">
                A dedicated local host helps connect the places, food and
                traditions you experience throughout the day.
              </p>
            </div>

            <div className="bg-[#FDFBF7] border border-[#EAE4DC] rounded-xl p-6">
              <div className="text-2xl mb-4">🗓️</div>

              <h3 className="font-serif text-xl font-bold mb-2">
                Organized
              </h3>

              <p className="text-sm text-[#5C534E] leading-relaxed">
                Transportation, admissions and the day's route are planned
                so you can focus on the experience.
              </p>
            </div>

            <div className="bg-[#FDFBF7] border border-[#EAE4DC] rounded-xl p-6">
              <div className="text-2xl mb-4">🇨🇴</div>

              <h3 className="font-serif text-xl font-bold mb-2">
                Local Culture
              </h3>

              <p className="text-sm text-[#5C534E] leading-relaxed">
                Go beyond the standard postcard stops with Colombian food,
                coffee and the traditional game of Tejo.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-20"
      >

        <div className="text-center max-w-2xl mx-auto mb-12">

          <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-[#C85A32]">
            The Experience
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2523] mt-2">
            Taste it. See it. Play it.
          </h2>

          <p className="text-sm sm:text-base text-[#5C534E] mt-4 leading-relaxed">
            Bogotá is more than monuments. This experience combines food,
            altitude, history, coffee and one of Colombia's most distinctive
            traditional sports.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* FRUITS */}
          <div className="group relative h-[380px] sm:h-96 rounded-xl overflow-hidden shadow-md bg-[#EAE4DC]">

            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            >
              <source src="/fruits.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">

              <span className="text-xs uppercase font-bold tracking-widest text-amber-300">
                Paloquemao Market
              </span>

              <h3 className="font-serif text-xl font-bold">
                Exotic Native Fruit Tasting
              </h3>

              <p className="text-xs text-neutral-200 mt-1 leading-relaxed">
                Discover Colombian fruits, Boyacense arepas and local flavors
                inside one of Bogotá's most vibrant markets.
              </p>

            </div>
          </div>

          {/* TEJO */}
          <div className="group relative h-[380px] sm:h-96 rounded-xl overflow-hidden shadow-md bg-[#EAE4DC]">

            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            >
              <source src="/tejo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">

              <span className="text-xs uppercase font-bold tracking-widest text-amber-300">
                Traditional Sport
              </span>

              <h3 className="font-serif text-xl font-bold">
                Gunpowder Tejo & Craft Beer
              </h3>

              <p className="text-xs text-neutral-200 mt-1 leading-relaxed">
                Learn the rules, throw the steel puck and experience one of
                Colombia's most distinctive traditional games.
              </p>

            </div>
          </div>

          {/* COFFEE */}
          <div className="group relative h-[380px] sm:h-96 rounded-xl overflow-hidden shadow-md bg-[#EAE4DC]">

            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            >
              <source src="/coffee.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">

              <span className="text-xs uppercase font-bold tracking-widest text-amber-300">
                Colombian Coffee
              </span>

              <h3 className="font-serif text-xl font-bold">
                Specialty Coffee Cupping
              </h3>

              <p className="text-xs text-neutral-200 mt-1 leading-relaxed">
                Explore Colombian coffee through a guided specialty tasting
                with local expertise.
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section
        id="included"
        className="bg-[#2D3E35] text-[#F4F1DE] py-16 sm:py-20 px-5 sm:px-6"
      >

        <div className="max-w-6xl mx-auto">

          <div className="max-w-2xl mb-12">

            <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-amber-300">
              Everything planned
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2">
              One price. One private day.
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 mt-4 leading-relaxed">
              The idea is simple: you spend the day experiencing Bogotá,
              while the logistics are handled for you.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">

            {[
              [
                '🚗',
                'Private Transportation',
                'Door-to-door transportation throughout the planned experience.',
              ],
              [
                '👤',
                'Dedicated Local Host',
                "A local host accompanies you through the day's experiences.",
              ],
              [
                '🏨',
                'Hotel Pickup & Return',
                'Pickup and return coordination within the service area.',
              ],
              [
                '🎟️',
                'Planned Admissions',
                'Admissions listed as part of the itinerary are coordinated for you.',
              ],
              [
                '🍊',
                'Fruit Experience',
                'Native Colombian fruit tasting at Paloquemao Market.',
              ],
              [
                '🍽️',
                'Traditional Lunch',
                'A Colombian lunch experience during the day.',
              ],
              [
                '☕',
                'Specialty Coffee',
                'A guided Colombian coffee tasting experience.',
              ],
              [
                '💥',
                'Tejo Experience',
                'An introduction to traditional Tejo with the private group.',
              ],
              [
                '🍺',
                'Craft Beer',
                'Cold beer accompanying the Tejo experience.',
              ],
            ].map(([icon, title, description]) => (

              <div key={title} className="flex gap-4">

                <div className="shrink-0 text-xl">
                  {icon}
                </div>

                <div>

                  <h3 className="font-serif text-lg font-bold text-white">
                    {title}
                  </h3>

                  <p className="text-sm text-neutral-300 mt-1 leading-relaxed">
                    {description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* ITINERARY */}
      <section
        id="itinerary"
        className="py-16 sm:py-20 px-5 sm:px-6 max-w-4xl mx-auto"
      >

        <div className="text-center mb-14">

          <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-[#C85A32]">
            The Signature Itinerary
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2523] mt-2">
            Everything planned. Zero friction.
          </h2>

          <p className="text-sm sm:text-base text-[#5C534E] mt-4 max-w-2xl mx-auto leading-relaxed">
            A full day designed to connect Bogotá's food, history, views,
            coffee and local traditions without making you plan every stop.
          </p>

        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[#D6CEC3]">

          {[
            {
              time: '08:00 AM',
              title: 'Private Hotel Lobby Pickup',
              desc: 'Private vehicle meets you directly at your accommodation in Chapinero, Usaquén, or El Chicó.',
            },
            {
              time: '08:45 AM',
              title: 'Paloquemao Exotic Fruit Immersion',
              desc: 'Sample native Colombian fruits alongside Boyacense arepas and fresh local flavors.',
            },
            {
              time: '10:45 AM',
              title: 'Monserrate Sanctuary',
              desc: 'Travel up to 3,152m for panoramic views over Bogotá. Cable car or funicular access is coordinated according to conditions and availability.',
            },
            {
              time: '01:00 PM',
              title: 'Traditional Colombian Lunch',
              desc: 'Sit-down lunch featuring Colombian cuisine and local refreshments.',
            },
            {
              time: '02:30 PM',
              title: 'La Candelaria & The Gold Museum',
              desc: 'Explore colonial streets, Plaza de Bolívar and pre-Hispanic gold collections.',
            },
            {
              time: '05:30 PM',
              title: 'Specialty Coffee & Gunpowder Tejo',
              desc: 'Interactive Colombian coffee tasting followed by a traditional Tejo experience with cold beer.',
            },
            {
              time: '07:00 PM',
              title: 'Hotel Return',
              desc: 'Direct return to your accommodation in your private vehicle.',
            },
          ].map((item, idx) => (

            <div key={idx} className="relative pl-10">

              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-[#FDFBF7] border-2 border-[#C85A32]"></div>

              <span className="text-xs font-mono font-bold text-[#C85A32] tracking-wider block mb-1">
                {item.time}
              </span>

              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2C2523] mb-1">
                {item.title}
              </h3>

              <p className="text-sm text-[#5C534E] leading-relaxed">
                {item.desc}
              </p>

            </div>

          ))}

        </div>
      </section>

      {/* PRICING */}
      <section className="bg-[#F7F4EE] border-y border-[#EAE4DC] py-16 sm:py-20 px-5 sm:px-6">

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>

            <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-[#C85A32]">
              Private Experience
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#2C2523] mt-2 leading-tight">
              Your group.
              <br />
              Your vehicle.
              <br />
              Your Bogotá day.
            </h2>

            <p className="text-sm sm:text-base text-[#5C534E] mt-5 leading-relaxed max-w-xl">
              The experience is designed for private groups of up to 12 guests who want
              to see more of Bogotá without joining a large organized tour.
            </p>

            <div className="mt-7 space-y-3 text-sm text-[#5C534E]">

              <div className="flex gap-3">
                <span className="text-[#C85A32]">✓</span>
                <span>Private transportation</span>
              </div>

              <div className="flex gap-3">
                <span className="text-[#C85A32]">✓</span>
                <span>Dedicated local host</span>
              </div>

              <div className="flex gap-3">
                <span className="text-[#C85A32]">✓</span>
                <span>Food, culture, coffee and Tejo</span>
              </div>

              <div className="flex gap-3">
                <span className="text-[#C85A32]">✓</span>
                <span>Hotel pickup and return</span>
              </div>

            </div>

          </div>

          <div className="bg-[#FDFBF7] border border-[#EAE4DC] rounded-2xl p-7 sm:p-9 shadow-lg">

            <div className="text-center mb-7">

              <span className="text-xs uppercase tracking-widest font-bold text-[#786E65]">
                Private Tour Pricing
              </span>

              <div className="mt-3 text-5xl font-serif font-bold text-[#C85A32]">
                $199
              </div>

              <div className="text-sm text-[#786E65]">
                USD per person for 2–4 guests
              </div>

            </div>

            <div className="space-y-3 border-y border-[#EAE4DC] py-6">

              <div className="flex justify-between text-sm">
                <span className="text-[#5C534E]">1 guest</span>
                <strong>$279 USD</strong>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-[#5C534E]">2 guests</span>
                <strong>$398 USD</strong>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-[#5C534E]">3 guests</span>
                <strong>$597 USD</strong>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-[#5C534E]">4 guests</span>
                <strong>$796 USD</strong>
              </div>

              <div className="flex justify-between text-sm pt-2 border-t border-[#EAE4DC]">
                <span className="text-[#5C534E]">5–12 guests</span>
                <strong>Custom Quote</strong>
              </div>

            </div>

            <a
              href="#reserve"
              className="mt-7 w-full inline-flex items-center justify-center py-4 bg-[#C85A32] hover:bg-[#B04A25] text-white font-bold rounded-md text-xs uppercase tracking-wider transition"
            >
              Check Availability
            </a>

            <p className="text-[11px] text-[#786E65] text-center mt-4 leading-relaxed">
              Final availability is confirmed directly with the host. A deposit
              is required to secure the reservation. Groups of 5–12 receive a customized quote.
            </p>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 px-5 sm:px-6 max-w-4xl mx-auto">

        <div className="text-center mb-12">

          <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-[#C85A32]">
            Before You Book
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2523] mt-2">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="space-y-3">

          {faqs.map((faq) => (

            <details
              key={faq.question}
              className="group border border-[#EAE4DC] rounded-xl bg-[#FDFBF7] px-5 py-4"
            >

              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-serif font-bold text-[#2C2523]">

                <span>{faq.question}</span>

                <span className="text-[#C85A32] text-xl shrink-0 group-open:rotate-45 transition">
                  +
                </span>

              </summary>

              <p className="text-sm text-[#5C534E] leading-relaxed mt-4 pr-6">
                {faq.answer}
              </p>

            </details>

          ))}

        </div>
      </section>

      {/* BOOKING CONFIDENCE */}
      <section className="py-16 sm:py-20 px-5 sm:px-6 bg-[#FDFBF7] border-t border-[#EAE4DC]">

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-12">

            <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-[#C85A32]">
              Travel With Confidence
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C2523] mt-2">
              A private experience, handled personally.
            </h2>

            <p className="text-sm sm:text-base text-[#5C534E] mt-4 leading-relaxed">
              Bogotá Unlocked is designed for travelers who want a private,
              well-organized day with clear communication before they pay.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            <div className="border border-[#EAE4DC] rounded-xl p-6 bg-[#F7F4EE]">
              <div className="text-2xl mb-4">🏛️</div>

              <h3 className="font-serif text-xl font-bold mb-2">
                RNT Registered
              </h3>

              <p className="text-sm text-[#5C534E] leading-relaxed">
                Bogotá Unlocked operates under Colombian tourism registration,
                RNT No. 301817.
              </p>
            </div>

            <div className="border border-[#EAE4DC] rounded-xl p-6 bg-[#F7F4EE]">
              <div className="text-2xl mb-4">💬</div>

              <h3 className="font-serif text-xl font-bold mb-2">
                Direct Communication
              </h3>

              <p className="text-sm text-[#5C534E] leading-relaxed">
                You speak directly with the host before your reservation is
                confirmed, including date, pickup and final booking details.
              </p>
            </div>

            <div className="border border-[#EAE4DC] rounded-xl p-6 bg-[#F7F4EE]">
              <div className="text-2xl mb-4">🔒</div>

              <h3 className="font-serif text-xl font-bold mb-2">
                Confirmed Before Payment
              </h3>

              <p className="text-sm text-[#5C534E] leading-relaxed">
                Your date and booking details are confirmed before any deposit
                is requested. No payment is taken through this form.
              </p>
            </div>

            <div className="border border-[#EAE4DC] rounded-xl p-6 bg-[#F7F4EE]">
              <div className="text-2xl mb-4">🚗</div>

              <h3 className="font-serif text-xl font-bold mb-2">
                Private From Start to Finish
              </h3>

              <p className="text-sm text-[#5C534E] leading-relaxed">
                The experience is organized around your private group of up to 12 guests,
                with private transportation and a dedicated host.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* RESERVATION */}
      <section
        id="reserve"
        className="py-16 sm:py-20 px-5 sm:px-6 border-t border-[#EAE4DC] bg-[#F7F4EE]"
      >

        <div className="max-w-xl mx-auto bg-[#FDFBF7] border border-[#EAE4DC] rounded-2xl p-6 sm:p-8 shadow-xl">

          <div className="text-center mb-8">

            <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-[11px] font-semibold px-3 py-1 rounded-full mb-4">
              <span>✓</span>
              <span>Licensed Tour Operator • RNT 301817</span>
            </div>

            <h2 className="font-serif text-3xl font-bold text-[#2C2523]">
              Check Availability
            </h2>

            <p className="text-sm text-[#786E65] mt-2 leading-relaxed">
              Tell us when you would like to visit Bogotá. We'll confirm
              availability first, then help you secure your private experience.
            </p>

          </div>

          <form onSubmit={handleCheckout} className="space-y-5">

            {/* GUESTS */}
            <div>

              <label className="block text-xs font-bold uppercase tracking-wider text-[#5C534E] mb-2">
                Number of Guests
              </label>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">

                {Array.from({ length: 12 }, (_, index) => index + 1).map((num) => (

                  <button
                    key={num}
                    onClick={() => setGuests(num)}
                    type="button"
                    className={`py-3 text-sm font-semibold rounded-md border transition ${
                      guests === num
                        ? 'bg-[#C85A32] text-white border-[#C85A32]'
                        : 'bg-white text-[#5C534E] border-[#D6CEC3] hover:border-[#2C2523]'
                    }`}
                  >
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </button>

                ))}

              </div>

              {guests === 1 && (
                <p className="text-[11px] text-[#C85A32] mt-2 italic">
                  Solo traveler private vehicle & host exclusivity rate: $279 total.
                </p>
              )}

              {guests >= 5 && (
                <p className="text-[11px] text-[#C85A32] mt-2 italic">
                  Groups of 5–12 guests are welcome. The host will provide a customized quote.
                </p>
              )}

            </div>

            {/* DATE */}
            <div>

              <label
                htmlFor="date"
                className="block text-xs font-bold uppercase tracking-wider text-[#5C534E] mb-2"
              >
                Preferred Tour Date
              </label>

              <input
                id="date"
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full bg-white border border-[#D6CEC3] rounded-md p-3 text-sm text-[#2C2523] focus:outline-none focus:border-[#C85A32]"
              />

            </div>

            {/* NAME + EMAIL */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div>

                <label
                  htmlFor="name"
                  className="block text-xs font-bold uppercase tracking-wider text-[#5C534E] mb-1"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="e.g. John Miller"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border border-[#D6CEC3] rounded-md p-3 text-sm text-[#2C2523] focus:outline-none focus:border-[#C85A32]"
                />

              </div>

              <div>

                <label
                  htmlFor="email"
                  className="block text-xs font-bold uppercase tracking-wider text-[#5C534E] mb-1"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-[#D6CEC3] rounded-md p-3 text-sm text-[#2C2523] focus:outline-none focus:border-[#C85A32]"
                />

              </div>

            </div>

            {/* PICKUP */}
            <div>

              <label
                htmlFor="pickupLocation"
                className="block text-xs font-bold uppercase tracking-wider text-[#5C534E] mb-1"
              >
                Pickup Hotel or Address
              </label>

              <input
                id="pickupLocation"
                type="text"
                name="pickupLocation"
                placeholder="e.g. Hotel in Chapinero"
                required
                value={formData.pickupLocation}
                onChange={handleChange}
                className="w-full bg-white border border-[#D6CEC3] rounded-md p-3 text-sm text-[#2C2523] focus:outline-none focus:border-[#C85A32]"
              />

            </div>

            {/* RESERVATION PROCESS */}
            <div className="rounded-xl border border-[#EAE4DC] bg-[#F7F4EE] p-5">

              <div className="text-xs font-bold uppercase tracking-wider text-[#C85A32] mb-3">
                How booking works
              </div>

              <div className="space-y-3 text-sm text-[#5C534E]">

                <div className="flex gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-[#C85A32] text-white text-xs font-bold flex items-center justify-center">
                    1
                  </span>

                  <p>
                    <strong className="text-[#2C2523]">Request availability.</strong>{' '}
                    Send your preferred date and trip details to the host on WhatsApp.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-[#C85A32] text-white text-xs font-bold flex items-center justify-center">
                    2
                  </span>

                  <p>
                    <strong className="text-[#2C2523]">Confirm your date.</strong>{' '}
                    The host checks availability and confirms the final booking details with you.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-[#C85A32] text-white text-xs font-bold flex items-center justify-center">
                    3
                  </span>

                  <p>
                    <strong className="text-[#2C2523]">Secure your reservation.</strong>{' '}
                    A secure payment link is sent to you through WhatsApp for the required deposit.
                  </p>
                </div>

              </div>

              <p className="text-[11px] text-[#786E65] mt-4 pt-4 border-t border-[#EAE4DC] leading-relaxed">
                No payment is taken when you request availability. The deposit
                is requested only after your date has been confirmed.
              </p>

            </div>

            {/* PRICE */}
            <div className="p-4 bg-[#F7F4EE] rounded-md border border-[#EAE4DC] flex justify-between items-center gap-4">

              <div>

                <span className="block text-xs text-[#786E65]">
                  Estimated Total
                </span>

                <span className="text-xs text-[#5C534E] font-medium">
                  {guests <= 4
                    ? `${guests} ${guests === 1 ? 'guest' : 'guests'} × $${pricePerPerson} USD`
                    : 'Customized pricing for 5–12 guests'}
                </span>

              </div>

              <span className="text-2xl font-serif font-bold text-[#C85A32]">
                {totalPrice ? `$${totalPrice} USD` : 'Custom Quote'}
              </span>

            </div>

            {/* CTA */}
            <button
              type="submit"
              className="w-full py-4 bg-[#C85A32] hover:bg-[#B04A25] text-white font-bold rounded-md text-xs uppercase tracking-wider transition shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              💬 Check Availability on WhatsApp
            </button>

            <p className="text-[11px] text-[#786E65] text-center leading-relaxed">
              No payment is taken when you request availability. After your date
              is confirmed, a secure payment link will be sent through WhatsApp
              for the required deposit.
            </p>

          </form>

        </div>
      </section>

      {/* TRUST / LEGAL */}
      <section className="bg-[#232F28] text-[#F4F1DE] py-16 px-5 sm:px-6 border-t border-[#1C2620]">

        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">

            <div className="bg-[#2D3E35]/70 p-5 rounded-xl border border-emerald-900/50">

              <div className="text-2xl mb-2">
                🏛️
              </div>

              <h4 className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                MinCIT Registered
              </h4>

              <p className="text-base font-serif font-bold text-white mt-1">
                RNT No. 301817
              </p>

              <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                Registered tourism operator in Colombia. You can review the registration details before booking.
              </p>

            </div>

            <div className="bg-[#2D3E35]/70 p-5 rounded-xl border border-emerald-900/50">

              <div className="text-2xl mb-2">
                🚗
              </div>

              <h4 className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                Private Experience
              </h4>

              <p className="text-base font-serif font-bold text-white mt-1">
                Small-Group Touring
              </p>

              <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                Designed around private groups of up to 12 guests.
              </p>

            </div>

            <div className="bg-[#2D3E35]/70 p-5 rounded-xl border border-emerald-900/50">

              <div className="text-2xl mb-2">
                💬
              </div>

              <h4 className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                Direct Support
              </h4>

              <p className="text-base font-serif font-bold text-white mt-1">
                WhatsApp Host
              </p>

              <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                Confirm your date and questions directly with the host.
              </p>

            </div>

            <div className="bg-[#2D3E35]/70 p-5 rounded-xl border border-emerald-900/50">

              <div className="text-2xl mb-2">
                🛡️
              </div>

              <h4 className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                Flexible Terms
              </h4>

              <p className="text-base font-serif font-bold text-white mt-1">
                Cancellation
              </p>

              <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                Current stated policy: full refund up to 24 hours before pickup.
              </p>

            </div>

          </div>

          <div className="border-t border-emerald-900/60 pt-8 text-center text-xs text-neutral-400 space-y-3 max-w-4xl mx-auto leading-relaxed">

            <p>
              <strong>Bogotá Unlocked</strong> is a tourism operator registered
              with the Colombian National Tourism Registry (
              <strong>RNT No. 301817</strong>).
            </p>

            <p className="text-[11px] text-neutral-400">
              We collect only the information needed to respond to your booking request.
              You can review how your information is handled in our{' '}
              <a href="/privacy" className="underline hover:text-white">
                Privacy Policy
              </a>.
            </p>

            <p className="text-[11px] text-neutral-400">
              In compliance with applicable Colombian tourism regulations,
              Bogotá Unlocked rejects and denounces the commercial sexual
              exploitation of children and adolescents (ESCNNA) in tourism.
            </p>

          </div>

        </div>
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/573152551212"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Bogotá Unlocked on WhatsApp"
        className="fixed bottom-5 right-5 z-50 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full shadow-xl px-4 py-3 flex items-center gap-2 transition"
      >

        <span className="text-lg">
          💬
        </span>

        <span className="hidden sm:inline text-xs font-bold">
          WhatsApp
        </span>

      </a>

      {/* FOOTER */}
      <footer className="bg-[#1C2620] text-neutral-400 py-9 px-5 sm:px-6 text-center text-xs border-t border-neutral-800">

        <p className="font-serif text-base font-bold text-white mb-2">
          Bogotá Unlocked
        </p>

        <p className="mb-4">
          Bogotá D.C., Colombia
        </p>

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-5 text-[11px]">

          <span>
            Private Bogotá Experiences
          </span>

          <span>
            •
          </span>

          <span>
            RNT No. 301817
          </span>

        </div>

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] mb-5">

          <a
            href="/privacy"
            className="hover:text-white transition"
          >
            Privacy Policy
          </a>

          <a
            href="/terms"
            className="hover:text-white transition"
          >
            Terms & Conditions
          </a>

          <a
            href="/cancellation"
            className="hover:text-white transition"
          >
            Cancellation Policy
          </a>

          <a
            href="https://wa.me/573152551212"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Contact
          </a>

        </div>

        <p className="text-neutral-500 text-[11px]">
          © 2026 Bogotá Unlocked. All rights reserved.
        </p>

      </footer>

    </div>
  );
}
