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

  const pricePerPerson = guests === 1 ? 279 : 199;
  const totalPrice = guests * pricePerPerson;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    const message = `Hi! I'd like to book Bogotá Unlocked for ${guests} guest(s) on date: ${formData.date || 'TBD'}. Name: ${formData.name}, Pickup: ${formData.pickupLocation}. Total: $${totalPrice} USD.`;
    window.open(`https://wa.me/573152551212?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C2523] font-sans antialiased selection:bg-[#E07A5F] selection:text-white">
      {/* Top Banner */}
      <div className="bg-[#2D3E35] text-[#F4F1DE] text-xs font-semibold tracking-wider uppercase py-2.5 px-4 text-center">
        Private All-Inclusive Bookings Open for 2026 • Curated Small-Party Exclusivity
      </div>

      {/* Navigation */}
      <header className="border-b border-[#EAE4DC] bg-[#FDFBF7]/90 backdrop-blur sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <span className="text-2xl font-serif font-bold tracking-tight text-[#2C2523]">
              BOGOTÁ <span className="text-[#C85A32] italic font-normal">UNLOCKED</span>
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://wa.me/573152551212"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase text-[#5C534E] hover:text-[#C85A32] transition"
            >
              Direct Host Contact
            </a>
            <a
              href="#reserve"
              className="bg-[#C85A32] hover:bg-[#B04A25] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-md shadow-sm transition"
            >
              Book Your Day
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 pt-16 pb-16 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#EAE4DC] text-[#2D3E35] text-xs font-semibold tracking-wide uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-[#C85A32]"></span>
          <span>Exclusive 1-Day Private Immersion</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-[#2C2523] leading-[1.15] mb-6">
          Experience the authentic soul of Bogotá in one <span className="italic text-[#C85A32]">effortless</span> day.
        </h1>

        <p className="text-lg sm:text-xl text-[#5C534E] max-w-2xl mx-auto mb-10 leading-relaxed">
          From exotic fruit cupping in vibrant markets and panoramic high-altitude sanctuaries to colonial gold and explosive gunpowder tejo. Complete door-to-door private transport, all admissions, and your dedicated local host.
        </p>

        {/* Hero Video Banner (Monserrate Drone) */}
        <div className="relative w-full h-[360px] sm:h-[480px] overflow-hidden rounded-2xl shadow-xl mb-12 bg-neutral-900">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="/monserrate.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 flex items-end justify-between p-6 sm:p-8 text-white">
            <span className="text-sm font-medium tracking-wide">
              Monserrate Sanctuary (3,152m) • Private Fast-Track Access
            </span>
            <span className="text-xs uppercase tracking-widest text-amber-300 font-bold hidden sm:inline-block">
              Panoramic Andean Views
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#reserve"
            className="w-full sm:w-auto px-8 py-4 bg-[#C85A32] hover:bg-[#B04A25] text-white font-bold rounded-md text-xs uppercase tracking-wider transition shadow-md shadow-[#C85A32]/20"
          >
            Reserve Your Private Date
          </a>
          <a
            href="#itinerary"
            className="w-full sm:w-auto px-8 py-4 border border-[#D6CEC3] hover:border-[#2C2523] text-[#2C2523] font-bold rounded-md text-xs uppercase tracking-wider transition"
          >
            Explore Full Itinerary
          </a>
        </div>
      </section>

      {/* Visual Feature Showcase with Videos */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Paloquemao Fruits Video */}
          <div className="group relative h-96 rounded-xl overflow-hidden shadow-md bg-[#EAE4DC]">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            >
              <source src="/fruits.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-300">Paloquemao Market</span>
              <h3 className="font-serif text-xl font-bold">Exotic Native Fruit Tasting</h3>
              <p className="text-xs text-neutral-200 mt-1">Lulo, passionfruit, granadilla & freshly baked Boyacense arepas.</p>
            </div>
          </div>

          {/* Card 2: Tejo Culture */}
          <div className="group relative h-96 rounded-xl overflow-hidden shadow-md bg-[#EAE4DC]">
            <img 
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80" 
              alt="Tejo Tradition" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-300">National Sport</span>
              <h3 className="font-serif text-xl font-bold">Gunpowder Tejo & Craft Beer</h3>
              <p className="text-xs text-neutral-200 mt-1">Experience Colombia's explosive 500-year-old indigenous game.</p>
            </div>
          </div>

          {/* Card 3: Specialty Coffee Video */}
          <div className="group relative h-96 rounded-xl overflow-hidden shadow-md bg-[#EAE4DC]">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            >
              <source src="/coffee.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-300">Specialty Coffee</span>
              <h3 className="font-serif text-xl font-bold">Third-Wave Cupping Session</h3>
              <p className="text-xs text-neutral-200 mt-1">Single-origin pour-over methods guided by certified local baristas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Timeline */}
      <section id="itinerary" className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#C85A32]">The Signature Itinerary</span>
          <h2 className="font-serif text-3xl font-bold text-[#2C2523] mt-2">Everything Planned, Zero Friction</h2>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[#D6CEC3]">
          {[
            { time: "08:00 AM", title: "Private Hotel Lobby Pickup", desc: "Private vehicle meets you directly at your accommodation in Chapinero, Usaquén, or El Chicó." },
            { time: "08:45 AM", title: "Paloquemao Exotic Fruit Immersion", desc: "Sample 7+ exotic native fruits alongside hot Boyacense arepas and fresh local coffee." },
            { time: "10:45 AM", title: "Monserrate Sanctuary (Fast-Track)", desc: "Skip ticket queues and take the cable car or funicular up to 3,152m for panoramic city vistas." },
            { time: "01:00 PM", title: "Traditional Colonial Courtyard Lunch", desc: "Sit-down multi-course lunch featuring authentic Ajiaco Santafereño soup, artisan refreshments, and dessert." },
            { time: "02:30 PM", title: "La Candelaria & The Gold Museum", desc: "Colonial street art alleys, Plaza de Bolívar, and private access through pre-Hispanic gold treasures." },
            { time: "05:30 PM", title: "Specialty Coffee Cupping & Gunpowder Tejo", desc: "Interactive third-wave coffee tasting, followed by throwing steel pucks at gunpowder targets with cold beer." },
            { time: "07:00 PM", title: "Safe Hotel Return", desc: "Direct door-to-door return in your private vehicle safely avoiding rush-hour transit." },
          ].map((item, idx) => (
            <div key={idx} className="relative pl-10">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-[#FDFBF7] border-2 border-[#C85A32]"></div>
              <span className="text-xs font-mono font-bold text-[#C85A32] tracking-wider block mb-1">{item.time}</span>
              <h3 className="font-serif text-lg font-bold text-[#2C2523] mb-1">{item.title}</h3>
              <p className="text-sm text-[#5C534E] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Online Reservation Widget */}
      <section id="reserve" className="py-20 px-6 border-t border-[#EAE4DC] bg-[#F7F4EE]">
        <div className="max-w-xl mx-auto bg-[#FDFBF7] border border-[#EAE4DC] rounded-xl p-8 shadow-xl">
          <h2 className="font-serif text-2xl font-bold text-[#2C2523] text-center mb-1">Reserve Your Private Tour</h2>
          <p className="text-xs text-[#786E65] text-center mb-8">Instant confirmation • Small party exclusivity guarantee</p>

          <form onSubmit={handleCheckout} className="space-y-5">
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
              {guests === 1 && (
                <p className="text-[11px] text-[#C85A32] mt-1.5 italic">
                  *Solo traveler private vehicle & host exclusivity fee applied ($279 total).
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5C534E] mb-2">Select Date</label>
              <input 
                type="date" 
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-white border border-[#D6CEC3] rounded-md p-3 text-sm text-[#2C2523] focus:outline-none focus:border-[#C85A32]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5C534E] mb-1">Full Name</label>
                <input 
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
                <label className="block text-xs font-bold uppercase tracking-wider text-[#5C534E] mb-1">Email Address</label>
                <input 
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

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#5C534E] mb-1">Hotel or Airbnb Address (For Pickup)</label>
              <input 
                type="text" 
                name="pickupLocation"
                placeholder="Hotel name or street address in Bogotá"
                required
                value={formData.pickupLocation}
                onChange={handleChange}
                className="w-full bg-white border border-[#D6CEC3] rounded-md p-3 text-sm text-[#2C2523] focus:outline-none focus:border-[#C85A32]"
              />
            </div>

            <div className="p-4 bg-[#F7F4EE] rounded-md border border-[#EAE4DC] flex justify-between items-center">
              <div>
                <span className="block text-xs text-[#786E65]">Total All-Inclusive Price</span>
                <span className="text-xs text-[#5C534E] font-medium">({guests} {guests === 1 ? 'guest' : 'guests'} × ${pricePerPerson} USD)</span>
              </div>
              <span className="text-2xl font-serif font-bold text-[#C85A32]">${totalPrice} USD</span>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#C85A32] hover:bg-[#B04A25] text-white font-bold rounded-md text-xs uppercase tracking-wider transition shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              Confirm Reservation & Request Availability
            </button>

            <div className="flex items-center justify-center gap-4 text-xs text-[#786E65] pt-1">
              <span>All Taxes & Fees Included</span>
              <span>•</span>
              <span>100% Refundable up to 24h prior</span>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#EAE4DC] py-12 px-6 text-center text-xs text-[#786E65] bg-[#FDFBF7]">
        <p className="font-serif font-bold text-[#2C2523] mb-1">Bogotá Unlocked</p>
        <p className="mb-1">Registered Tourism Operator • Bogotá Chamber of Commerce</p>
        <p>Bogotá, Colombia</p>
      </footer>
    </div>
  );
}
