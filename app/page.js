'use client';

import React, { useState } from 'react';

export default function Home() {
  const [guests, setGuests] = useState(1);
  const basePricePerPerson = 180;
  const totalPrice = guests * basePricePerPerson;

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 font-sans antialiased">
      {/* Top Announcement Bar */}
      <div className="bg-amber-500 text-neutral-950 text-xs font-semibold tracking-wide uppercase py-2 px-4 text-center">
        Private All-Inclusive Bookings Open for 2026 • Free Cancellation Up to 24h Before
      </div>

      {/* Navigation */}
      <header className="border-b border-neutral-800 bg-neutral-900/90 backdrop-blur sticky top-0 z-50 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight text-white">BOGOTÁ<span className="text-amber-500">UNLOCKED</span></span>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://wa.me/573152551212"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block text-xs font-medium text-neutral-300 hover:text-white"
          >
            WhatsApp Us Direct
          </a>
          <a
            href="#book"
            className="bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded shadow-sm transition"
          >
            Reserve Your Day ($180)
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-28 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-300 text-xs font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Exclusive 1-Day Private City Immersion</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
          Experience the Real Bogotá in One <span className="text-amber-500">Worry-Free</span> Day.
        </h1>
        <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Private luxury transit, authentic mountain & market gastronomy, fast-track access, and a passionate bilingual host. Zero queues, zero hidden expenses.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#book"
            className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold rounded text-sm uppercase tracking-wider transition shadow-lg shadow-amber-500/10 text-center"
          >
            Check Availability & Book
          </a>
          <a
            href="#itinerary"
            className="w-full sm:w-auto px-8 py-4 border border-neutral-700 hover:border-neutral-500 text-neutral-300 font-semibold rounded text-sm transition text-center"
          >
            Explore Full Itinerary
          </a>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
          <span>✓ Private Hotel Pickup & Return</span>
          <span>✓ All Entrance Fees & Food Included</span>
          <span>✓ Verified Colombian Tourism Operator</span>
        </div>
      </section>

      {/* Feature Pillars */}
      <section className="border-t border-neutral-800 bg-neutral-950/40 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center text-xl font-bold mb-4">🔒</div>
            <h3 className="text-lg font-bold text-white mb-2">Zero Hidden Costs</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Leave your wallet in your pocket. Every exotic fruit tasting, summit ticket, artisan coffee brew, traditional lunch, and beer is already covered.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xl font-bold mb-4">🛡️</div>
            <h3 className="text-lg font-bold text-white mb-2">Total Peace of Mind</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Private door-to-door transportation in a vetted, secure vehicle. Navigate both historic corners and local markets with a trusted local partner.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition">
            <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-500 flex items-center justify-center text-xl font-bold mb-4">✨</div>
            <h3 className="text-lg font-bold text-white mb-2">Curated Insider Access</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              No canned tour speeches or commercial souvenir shops. We introduce you to multi-generational market vendors, certified baristas, and local players.
            </p>
          </div>
        </div>
      </section>

      {/* Itinerary Timeline */}
      <section id="itinerary" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white mb-4">The 1-Day Signature Journey</h2>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto">
            A seamless 8:00 AM to 7:00 PM curated balance of nature, culture, culinary indulgence, and explosive local sport.
          </p>
        </div>
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-neutral-800">
          {[
            { time: "08:00 AM", title: "Private Hotel Pickup", desc: "Your dedicated host meets you directly in your hotel or Airbnb lobby in Chapinero, Usaquén, or El Chicó." },
            { time: "08:45 AM", title: "Paloquemao Market & Fruit Discovery", desc: "Taste 7+ exotic fruits (Lulo, Guanábana, Feijoa, Maracuyá) paired with freshly baked Boyacense arepas." },
            { time: "10:45 AM", title: "Monserrate Sanctuary (Fast-Track)", desc: "Ascend via cable car or funicular to 3,152 meters. Panoramic views of Bogotá's vast savanna without ticket lines." },
            { time: "01:00 PM", title: "Sit-Down Traditional Criollo Lunch", desc: "Authentic Ajiaco Santafereño soup in a restored colonial courtyard, served with avocado, capers, cream, and refreshments." },
            { time: "02:30 PM", title: "La Candelaria & Historical Gold Museum", desc: "Explore colonial street art, the historic Plaza de Bolívar, and the world-renowned Gold Museum's El Dorado ceremonial room." },
            { time: "05:30 PM", title: "Third-Wave Coffee Cupping & Tejo Game", desc: "Interactive filtration cupping session with certified specialty baristas, followed by explosive Colombian gunpowder tejo and cold beer." },
            { time: "07:00 PM", title: "Safe Private Drop-Off", desc: "Relax in private transport back to your hotel door, safely avoiding evening traffic congestion." },
          ].map((item, idx) => (
            <div key={idx} className="relative pl-10 group">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-neutral-900 border-2 border-amber-500"></div>
              <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest block mb-1">{item.time}</span>
              <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form Widget */}
      <section id="book" className="py-20 px-6 border-t border-neutral-800 bg-neutral-950">
        <div className="max-w-xl mx-auto bg-neutral-900 border border-neutral-800 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-2 text-center">Reserve Bogotá Unlocked</h2>
          <p className="text-neutral-400 text-xs text-center mb-8">Instant confirmation • Private small party format</p>

          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-neutral-300 uppercase mb-2">Select Date</label>
              <input type="date" className="w-full bg-neutral-800 border border-neutral-700 text-white rounded p-3 text-sm focus:outline-none focus:border-amber-500" />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-300 uppercase mb-2">Number of Guests</label>
              <div className="flex items-center space-x-3">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    onClick={() => setGuests(num)}
                    type="button"
                    className={`flex-1 py-3 text-sm font-bold rounded border transition ${
                      guests === num
                        ? 'bg-amber-500 text-neutral-950 border-amber-500'
                        : 'bg-neutral-800 text-neutral-300 border-neutral-700 hover:border-neutral-500'
                    }`}
                  >
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 bg-neutral-800/60 rounded border border-neutral-800 flex justify-between items-center">
              <span className="text-sm text-neutral-300">Total Price (All-Inclusive):</span>
              <span className="text-2xl font-black text-amber-400">${totalPrice} USD</span>
            </div>

            <a
              href={`https://wa.me/573152551212?text=Hi!%20I'd%20like%20to%20reserve%20Bogot%C3%A1%20Unlocked%20for%20${guests}%20guest(s).`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full py-4 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-extrabold rounded text-sm uppercase tracking-wider transition shadow-lg cursor-pointer"
            >
              Confirm Reservation on WhatsApp
            </a>
            <p className="text-center text-neutral-500 text-xs">
              Direct host confirmation • 100% money-back cancellation guarantee up to 24h before departure.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-12 px-6 text-center text-xs text-neutral-500">
        <p className="mb-2">Bogotá Unlocked • Licensed Operator • Registered with the Chamber of Commerce of Bogotá (CCB)</p>
        <p>Operated by Iván Santiago Betancurt Giraldo • Bogotá, Colombia</p>
      </footer>
    </div>
  );
}
