"use client";

import {
  Paintbrush,
  Trees,
  Wrench,
  Hammer,
  Sparkles,
  Zap,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      title: "Construction",
      icon: <Hammer size={40} />,
    },
    {
      title: "Gardening & Landscaping",
      icon: <Trees size={40} />,
    },
    {
      title: "Painting",
      icon: <Paintbrush size={40} />,
    },
    {
      title: "Plumbing",
      icon: <Wrench size={40} />,
    },
    {
      title: "Cleaning Services",
      icon: <Sparkles size={40} />,
    },
    {
      title: "Electrical Solutions",
      icon: <Zap size={40} />,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-black text-white shadow-lg">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />

            <h1 className="font-bold text-sm md:text-lg break-words">
              Zwamashango Project (Pty) Ltd
            </h1>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 text-sm font-medium">

            <a
             href="#contact"
           className="bg-green-500 text-black px-4 py-1 rounded-lg font-bold"
          >
            Request a Quote
          </a>

          <a
          href="tel:0766208922"
          className="border border-green-400 px-4 py-1 rounded-lg"
>
          Call Now
          </a>

            <a href="#home" className="hover:text-green-400 transition">
              Home
            </a>

            <a href="#services" className="hover:text-green-400 transition">
              Services
            </a>

            <a href="#about" className="hover:text-green-400 transition">
              About
            </a>

            <a href="#careers" className="hover:text-green-400 transition">
              Careers
            </a>

            <a href="#contact" className="hover:text-green-400 transition">
              Contact
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6 space-y-4 text-center">

            <a
              href="#home"
              className="block hover:text-green-400"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="#services"
              className="block hover:text-green-400"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>

            <a
              href="#about"
              className="block hover:text-green-400"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>

            <a
              href="#careers"
              className="block hover:text-green-400"
              onClick={() => setMenuOpen(false)}
            >
              Careers
            </a>

            <a
              href="#contact"
              className="block hover:text-green-400"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>

            <a
          href="#contact"
          className="block bg-green-500 text-black px-4 py-2 rounded-lg font-bold"
          onClick={() => setMenuOpen(false)}
        >
          Request a Quote
        </a>

        <a
          href="tel:0766208922"
          className="block border border-green-400 px-4 py-2 rounded-lg"
          onClick={() => setMenuOpen(false)}
        >
          Call Now
        </a>

        <a
          href="https://wa.me/27766208922"
          target="_blank"
          className="block bg-green-600 text-black px-4 py-2 rounded-lg font-bold"
        >
          WhatsApp Us
        </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="bg-black text-white py-20 px-6 text-center"
      >

        <h1 className="text-4xl md:text-6xl font-bold mb-4 break-words">
          ZWAMASHANGO PROJECT (PTY) LTD
        </h1>

        <div className="relative flex justify-center mb-10">
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 blur-3xl opacity-70 animate-pulse"></div>

          <div className="relative bg-black rounded-full p-6 border border-white/10 shadow-2xl">
            <img
              src="/logo.png"
              alt="Zwamashango Projects"
              className="w-40 h-40 object-contain"
            />
          </div>
        </div>

        <p className="text-xl text-green-400 mb-6 break-words">
          Building Communities, One Job At A Time
        </p>

        <p className="max-w-3xl mx-auto text-gray-300 text-base md:text-lg leading-8 break-words">
          Professional construction, painting, plumbing,
          gardening, landscaping, electrical, cleaning and
          property maintenance services in Pretoria,
          Gauteng, Nzhelele and surrounding areas.
        </p>


        <div className="mt-8 flex flex-wrap justify-center gap-4">

        <a
          href="#contact"
          className="bg-green-500 text-black font-bold py-3 px-6 rounded-xl hover:scale-105 transition"
        >
          Request a Quote
        </a>

        <a
          href="tel:0766208922"
          className="border border-white text-white font-bold py-3 px-6 rounded-xl"
        >
          Call Now
        </a>

        <a
          href="https://wa.me/27766208922"
          target="_blank"
          className="bg-green-600 text-black font-bold py-3 px-6 rounded-xl"
        >
          WhatsApp Us
        </a>

      </div>
      </section>

     {/* SERVICES */}
<section id="services" className="py-20 px-6">
  <h2 className="text-4xl font-bold text-center mb-12">
    Our Services
  </h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

    {services.map((service) => (
      <div
        key={service.title}
        className="border border-gray-200 rounded-2xl p-8 shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
      >
        <div className="text-green-500 mb-4">
          {service.icon}
        </div>

        <h3 className="text-2xl font-bold text-green-500 mb-4 break-words">
          {service.title}
        </h3>

        {/* BULLET LIST STYLE */}
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          {service.title === "Construction" && (
            <>
              <li>Building Construction</li>
              <li>Planning and Design</li>
              <li>Electrical Solutions</li>
              <li>Road Maintenance</li>
              <li>Paving & Tiling</li>
            </>
          )}

          {service.title === "Gardening & Landscaping" && (
            <>
              <li>Grass cutting</li>
              <li>Tree trimming</li>
              <li>Garden maintenance</li>
              <li>Landscaping design</li>
              <li>Weed control</li>
              <li>Planting flowers and trees</li>
            </>
          )}

          {service.title === "Painting" && (
            <>
              <li>Interior painting</li>
              <li>Exterior painting</li>
              <li>Roof cleaning & painting</li>
            </>
          )}

          {service.title === "Plumbing" && (
            <>
              <li>Pipe repairs</li>
              <li>Tap installations</li>
              <li>Toilet repairs</li>
              <li>Drain unblocking</li>
              <li>Geyser maintenance</li>
              <li>Leak detection</li>
            </>
          )}

          {service.title === "Cleaning Services" && (
            <>
              <li>Residential cleaning</li>
              <li>Office cleaning</li>
              <li>Deep cleaning</li>
              <li>Post-construction cleaning</li>
              <li>Window cleaning</li>
              <li>Yard cleaning</li>
            </>
          )}

          {service.title === "Electrical Solutions" && (
            <>
              <li>House wiring</li>
              <li>Fault finding</li>
              <li>Electrical repairs</li>
              <li>Installations</li>
            </>
          )}
        </ul>
      </div>
    ))}
  </div>
</section>

      {/* COMPANY DETAILS */}
      <section className="bg-gray-100 py-20 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
            <h2 className="text-3xl font-bold mb-6 text-green-500">
              Our Vision
            </h2>

            <p className="text-gray-700 leading-8 break-words">
              To become one of the leading trusted
              construction, property maintenance and
              cleaning service providers in South Africa.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
            <h2 className="text-3xl font-bold mb-6 text-green-500">
              Our Mission
            </h2>

            <p className="text-gray-700 leading-8 break-words">
              To deliver professional, affordable and
              quality services while building long-term
              relationships with clients.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-20 px-6 text-center"
      >
        <h2 className="text-4xl font-bold mb-8">
          About The Founder
        </h2>

        <p className="max-w-4xl mx-auto text-lg text-gray-700 leading-8 break-words">
          Zwamashango Project (Pty) Ltd was founded by
          Ntsieni Reckson Netshiongolwe, a young entrepreneur
          from Nzhelele with a background in Mechanical Engineering,
          Electrical knowledge, and a vision to build a trusted
          local business that creates jobs and delivers quality work
          across South Africa.
        </p>
      </section>

      {/* CAREERS */}
      <section
        id="careers"
        className="bg-gray-100 py-20 px-6 text-center"
      >
        <h2 className="text-4xl font-bold mb-8">
          Careers
        </h2>

        <p className="max-w-2xl mx-auto text-gray-700 text-lg leading-8 break-words">
          Zwamashango Project (Pty) Ltd is committed to
          creating employment opportunities and empowering
          local communities.

          <br /><br />

          We currently do not have any available positions.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {[
            "Construction Workers",
            "Painters",
            "Gardeners",
            "Cleaners",
            "Plumbers",
            "Electricians",
          ].map((job) => (
            <div
              key={job}
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-green-500 hover:text-black transition"
            >
              {job}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-black text-white py-20 px-6 text-center"
      >
        <h2 className="text-4xl font-bold mb-8">
          Contact Us
        </h2>

        <div className="space-y-4 text-lg break-words">
          <p>📞 076 620 8922</p>
          <p>📞 071 424 8034</p>
          <p>📧 zwamashangoprojects@gmail.com</p>

          <p>
            📍 Pretoria, Gauteng & Nzhelele,
            Vhembe District, Limpopo
          </p>
        </div>

        <p className="mt-10 text-gray-400 break-words">
          Company Registration: 2026/404521/07
        </p>
      </section>
    </main>
  );
}