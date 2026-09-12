'use client';

import React, { useState } from 'react';

export default function Home() {
  const [guests, setGuests] = useState(1);
  const basePricePerPerson = 180;
  const totalPrice = guests * basePricePerPerson;

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C2523] font-sans antialiased selection:bg-[#E07A5F] selection:text-white">
      {/* Top Banner */}
      <div className="bg-[#2D3E35] text-[#F4F1DE] text-xs font-semibold tracking-wider uppercase py-2.5 px-4 text-center">
        Private All-Inclusive Bookings Open for 2026 • Curated Small-Party Exclusivity
      </div>

      {/* Navigation */}
      <header className="border-b border-[#EAE4DC] bg-[#FDFBF7]/90 backdrop-blur sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-bold tracking-tight text-[#2C2523]">
              BOGOTÁ <span className="text-[#C85A32] italic font-normal">UNLOCKED</span>
            </span>
          </div>
          <div className="flex items-center space-x-5">
            <a
              href="https://wa.me/573152551212"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block text-xs font-semibold tracking-wide uppercase text-[#5C534E] hover:text-[#C85A32] transition"
            >
              Direct Concierge (WhatsApp)
            </a>
            <a
              href="#book"
              className="bg-[#C85A32] hover:bg-[#B04A25] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-md shadow-sm transition"
            >
              Reserve Experience ($180)
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 pt-16 pb-24 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#EAE4DC] text-[#2D3E35] text-xs font-semibold tracking-wide uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-[#C85A32]"></span>
          <span>Curated Private Day Experience</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-[#2C2523] leading-[1.15] mb-6">
          Experience the authentic soul of Bogotá in one <span className="italic text-[#C85A32]">effortless</span> day.
        </h1>

        <p className="text-lg sm:text-xl text-[#5C534E] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          From the vibrant aromas of Paloquemao and historic colonial courtyards to high-altitude views and explosive gunpowder tejo. Private transport, exceptional gastronomy, and your dedicated local host.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#book"
            className="w-full sm:w-auto px-8 py-4 bg-[#C85A32] hover:bg-[#B04A25] text-white font-bold rounded-md text-xs uppercase tracking-wider transition shadow-md shadow-[#C85A32]/20"
          >
            Check Availability & Reserve
          </a>
          <a
            href="#gallery"
            className="w-full sm:w-auto px-8 py-4 border border-[#D6CEC3] hover:border-[#2C2523] text-[#2C2523] font-bold rounded-md text-xs uppercase tracking-wider transition"
          >
            View Experience Gallery
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs font-medium text-[#786E65]">
          <span className="flex items-center gap-1.5">✓ Private Door-to-Door Vehicle</span>
          <span className="flex items-center gap-1.5">✓ All Food, Tastings & Fast-Track Passes</span>
          <span className="flex items-center gap-1.5">✓ Verified RNT Operator</span>
        </div>
      </section>

      {/* Visual Experience Showcase / Photo & Video Section */}
      <section id="gallery" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Paloquemao / Food */}
          <div className="group relative h-80 rounded-xl overflow-hidden shadow-md bg-[#EAE4DC]">
            <img 
              src="https://images.unsplash.com/photo-1543083477-4f785aeafaa9?auto=format&fit=crop&w=900&q=80" 
              alt="Exotic Fruits and Markets" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-300">Paloquemao Market</span>
              <h3 className="font-serif text-xl font-bold">Exotic Fruit Cupping & Arepas</h3>
            </div>
          </div>

          {/* Card 2: Tejo / Culture */}
          <div className="group relative h-80 rounded-xl overflow-hidden shadow-md bg-[#EAE4DC]">
            <img 
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80" 
              alt="Traditional Colombian Tejo" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-300">Explosive Tradition</span>
              <h3 className="font-serif text-xl font-bold">Gunpowder Tejo & Craft Beer</h3>
            </div>
          </div>

          {/* Card 3: Monserrate / City Views */}
          <div className="group relative h-80 rounded-xl overflow-hidden shadow-md bg-[#EAE4DC]">
            <img 
              src="https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=900&q=80" 
              alt="Monserrate and Historic Colonial Architecture" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-300">High-Altitude Vistas</span>
              <h3 className="font-serif text-xl font-bold">Monserrate & Colonial Candelaria</h3>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Pillars */}
      <section className="border-t border-b border-[#EAE4DC] bg-[#F7F4EE] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-3">
            <span className="text-2xl text-[#C85A32]">☕</span>
            <h3 className="font-serif text-lg font-bold text-[#2C2523]">Completely Seamless</h3>
            <p className="text-sm text-[#5C534E] leading-relaxed">
              Every summit ticket, fruit tasting, specialty pour-over coffee, traditional sit-down lunch, and craft beer is taken care of. Never worry about conversions or queues.
            </p>
          </div>
          <div className="space-y-3">
            <span className="text-2xl text-[#C85A32]">🏛️</span>
            <h3 className="font-serif text-lg font-bold text-[#2C2523]">Authentic & Thoughtful</h3>
            <p className="text-sm text-[#5C534E] leading-relaxed">
              No generic bus tours or tourist souvenir shops. We introduce you directly to market sellers, specialty baristas, and authentic colonial courtyards.
            </p>
          </div>
          <div className="space-y-3">
            <span className="text-2xl text-[#C85A32]">🛡️</span>
            <h3 className="font-serif text-lg font-bold text-[#2C2523]">Safe Door-to-Door Ease</h3>
            <p className="text-sm text-[#5C534E] leading-relaxed">
              A private, vetted vehicle handles the logistics from your hotel lobby in Chapinero, Usaquén, or El Chicó, returning you comfortably before nightfall.
            </p>
          </div>
        </div>
      </section>

      {/* Itinerary Timeline */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#C85A32]">The Signature Day</span>
          <h2 className="font-serif text-3xl font-bold text-[#2C2523] mt-2">Curated From Morning to Evening</h2>
          <p className="text-sm text-[#786E65] mt-2">An unhurried balance of culture, local flavours, and iconic landmarks.</p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[#D6CEC3]">
          {[
            { time: "08:00 AM", title: "Private Hotel Pickup", desc: "Your host and private driver greet you directly in your hotel or accommodation lobby." },
            { time: "08:45 AM", title: "Paloquemao Market & Fruit Tasting", desc: "Immerse yourself in Colombia's legendary produce, sampling 7+ exotic fruits alongside freshly baked Boyacense arepas." },
            { time: "10:45 AM", title: "Monserrate Sanctuary (Fast-Track)", desc: "Ascend via cable car or funicular to 3,152m for breathtaking panoramas across the high Andean savanna." },
            { time: "01:00 PM", title: "Traditional Courtyard Lunch", desc: "Enjoy an authentic Ajiaco Santafereño in a restored colonial casona with traditional sides and dessert." },
            { time: "02:30 PM", title: "La Candelaria & The Gold Museum", desc: "Stroll through colonial streets, artisan murals, and the legendary pre-Hispanic collections of the Gold Museum." },
            { time: "05:30 PM", title: "Specialty Coffee & Gunpowder Tejo", desc: "Interactive cupping with certified local baristas, followed by playing Colombia’s explosive national game with craft beer." },
            { time: "07:00 PM", title: "Comfortable Return", desc: "Relax in private transport directly back to your hotel." },
          ].map((step, idx) => (
            <div key={idx} className="relative pl-10">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-[#FDFBF7] border-2 border-[#C85A32]"></div>
              <span className="text-xs font-mono font-bold text-[#C85A32] tracking-wider block mb-1">{step.time}</span>
              <h3 className="font-serif text-lg font-bold text-[#2C2523] mb-1">{step.title}</h3>
              <p className="text-sm text-[#5C534E] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Widget */}
      <section id="book" className="py-20 px-6 border-t border-[#EAE4DC] bg-[#F7F4EE]">
        <div className="max-w-lg mx-auto bg-[#FDFBF7] border border-[#EAE4DC] rounded-xl p-8 shadow-lg">
          <h2 className="font-serif text-2xl font-bold text-[#2C2523] text-center mb-1">Reserve Your Experience</h2>
          <p className="text-xs text-[#786E65] text-center mb-8">All-inclusive private tour • Instant host confirmation</p>

          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5C534E] mb-2">Preferred Date</label>
              <input 
                type="date" 
                className="w-full bg-white border border-[#D6CEC3] rounded-md p-3 text-sm text-[#2C2523] focus:outline-none focus:border-[#C85A32]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5C534E] mb-2">Number of Guests</label>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((num) => (
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
            </div>

            <div className="p-4 bg-[#F7F4EE] rounded-md border border-[#EAE4DC] flex justify-between items-center">
              <span className="text-sm font-medium text-[#5C534E]">Total (All-Inclusive):</span>
              <span className="text-2xl font-serif font-bold text-[#C85A32]">${totalPrice} USD</span>
            </div>

            <a
              href={`https://wa.me/573152551212?text=Hi!%20I'd%20like%20to%20reserve%20Bogot%C3%A1%20Unlocked%20for%20${guests}%20guest(s).`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full py-4 bg-[#C85A32] hover:bg-[#B04A25] text-white font-bold rounded-md text-xs uppercase tracking-wider transition shadow-md"
            >
              Confirm Reservation on WhatsApp
            </a>

            <p className="text-center text-[11px] text-[#786E65]">
              Direct host contact • Full refund cancellation up to 24 hours prior.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#EAE4DC] py-12 px-6 text-center text-xs text-[#786E65] bg-[#FDFBF7]">
        <p className="font-serif font-bold text-[#2C2523] mb-1">Bogotá Unlocked</p>
        <p className="mb-1">Registered Tourism Operator • Bogotá Chamber of Commerce</p>
        <p>Iván Santiago Betancurt Giraldo • Bogotá, Colombia</p>
      </footer>
    </div>
  );
}
