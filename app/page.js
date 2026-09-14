'use client';

import React, { useState } from 'react';

export default function Home() {
  const [guests, setGuests] = useState(2);
  const [formData, setFormData] = useState({
    date: '',
    name: '',
    email: '',
    pickupLocation: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pricing rules to guarantee healthy profit margins
  const pricePerPerson = guests === 1 ? 279 : 199;
  const totalPrice = guests * pricePerPerson;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Redirección a pasarela de pagos (ejemplo: Stripe Payment Link o Wompi)
    // Aquí puedes vincular directamente tu enlace de pago seguro
    const checkoutUrl = `https://checkout.wompi.co/l/TU_LINK_DE_PAGO?amount=${totalPrice}&guests=${guests}&email=${encodeURIComponent(formData.email)}`;
    
    // Por ahora mostramos alerta de confirmación o redirigimos
    window.location.href = checkoutUrl;
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C2523] font-sans antialiased selection:bg-[#E07A5F] selection:text-white">
      {/* Top Banner */}
      <div className="bg-[#2D3E35] text-[#F4F1DE] text-xs font-semibold tracking-wider uppercase py-2.5 px-4 text-center">
        Private All-Inclusive Bookings Open for 2026 • Instant Digital Confirmation
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
              <span>Questions? Chat with Host</span>
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
      <section className="relative px-6 pt-16 pb-20 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#EAE4DC] text-[#2D3E35] text-xs font-semibold tracking-wide uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-[#C85A32]"></span>
          <span>Exclusive 1-Day Private Immersion</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-[#2C2523] leading-[1.15] mb-6">
          Experience the authentic soul of Bogotá in one <span className="italic text-[#C85A32]">effortless</span> day.
        </h1>

        <p className="text-lg sm:text-xl text-[#5C534E] max-w-2xl mx-auto mb-10 leading-relaxed">
          Exotic mountain gastronomy, historic colonial courtyards, high-altitude panoramas, and explosive gunpowder tejo. Complete door-to-door private transport, all entrance passes, and your dedicated local host.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#reserve"
            className="w-full sm:w-auto px-8 py-4 bg-[#C85A32] hover:bg-[#B04A25] text-white font-bold rounded-md text-xs uppercase tracking-wider transition shadow-md shadow-[#C85A32]/20"
          >
            Check Availability & Reserve Online
          </a>
          <a
            href="#itinerary"
            className="w-full sm:w-auto px-8 py-4 border border-[#D6CEC3] hover:border-[#2C2523] text-[#2C2523] font-bold rounded-md text-xs uppercase tracking-wider transition"
          >
            Explore 1-Day Itinerary
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs font-medium text-[#786E65]">
          <span>✓ Private Hotel Pickup & Drop-Off</span>
          <span>✓ 100% All-Inclusive (No Hidden Costs)</span>
          <span>✓ Secure Card Checkout (Instant Receipt)</span>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative h-80 rounded-xl overflow-hidden shadow-sm bg-[#EAE4DC]">
            <img 
              src="https://images.unsplash.com/photo-1543083477-4f785aeafaa9?auto=format&fit=crop&w=900&q=80" 
              alt="Paloquemao Market" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-300">Paloquemao Market</span>
              <h3 className="font-serif text-xl font-bold">Exotic Fruit Tasting & Arepas</h3>
            </div>
          </div>

          <div className="group relative h-80 rounded-xl overflow-hidden shadow-sm bg-[#EAE4DC]">
            <img 
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80" 
              alt="Tejo Tradition" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-300">National Sport</span>
              <h3 className="font-serif text-xl font-bold">Gunpowder Tejo & Cold Craft Beer</h3>
            </div>
          </div>

          <div className="group relative h-80 rounded-xl overflow-hidden shadow-sm bg-[#EAE4DC]">
            <img 
              src="https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=900&q=80" 
              alt="Monserrate Views" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-300">Fast-Track Access</span>
              <h3 className="font-serif text-xl font-bold">Monserrate Summit & Historic Candelaria</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Timeline */}
      <section id="itinerary" className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#C85A32]">The Signature Itinerary</span>
          <h2 className="font-serif text-3xl font-bold text-[#2C2523] mt-2">Everything Planned, Zero Hassle</h2>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[#D6CEC3]">
          {[
            { time: "08:00 AM", title: "Private Hotel Lobby Pickup", desc: "Private vehicle and host meet you directly at your accommodation in Chapinero, Usaquén, or El Chicó." },
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

      {/* Online Checkout & Booking Section */}
      <section id="reserve" className="py-20 px-6 border-t border-[#EAE4DC] bg-[#F7F4EE]">
        <div className="max-w-xl mx-auto bg-[#FDFBF7] border border-[#EAE4DC] rounded-xl p-8 shadow-xl">
          <h2 className="font-serif text-2xl font-bold text-[#2C2523] text-center mb-1">Book Your Private Tour</h2>
          <p className="text-xs text-[#786E65] text-center mb-8">Instant confirmation • Secure credit card processing</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Guest Selector */}
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
                  *Solo traveler private vehicle & guide exclusivity fee applied ($279 total).
                </p>
              )}
            </div>

            {/* Date Selector */}
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

            {/* Contact Details */}
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

            {/* Total Pricing Box */}
            <div className="p-4 bg-[#F7F4EE] rounded-md border border-[#EAE4DC] flex justify-between items-center">
              <div>
                <span className="block text-xs text-[#786E65]">Total All-Inclusive Price</span>
                <span className="text-xs text-[#5C534E] font-medium">({guests} {guests === 1 ? 'person' : 'people'} × ${pricePerPerson} USD)</span>
              </div>
              <span className="text-2xl font-serif font-bold text-[#C85A32]">${totalPrice} USD</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-[#C85A32] hover:bg-[#B04A25] text-white font-bold rounded-md text-xs uppercase tracking-wider transition shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <span>🔒 Proceed to Secure Credit Card Payment</span>
            </button>

            <div className="flex items-center justify-center gap-4 text-xs text-[#786E65] pt-1">
              <span>💳 Visa / Mastercard / Amex</span>
              <span>•</span>
              <span>100% Refund if cancelled 24h before</span>
            </div>
          </form>
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
