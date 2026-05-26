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
  ShieldCheck,
  Phone,
  MapPin,
  Briefcase,
} from "lucide-react";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const services = [
    {
      title: "Construction",
      icon: <Hammer size={34} />,
      items: [
        "Building Construction",
        "Planning and Design",
        "Electrical Solutions",
        "Road Maintenance",
        "Paving & Tiling",
      ],
    },
    {
      title: "Gardening & Landscaping",
      icon: <Trees size={34} />,
      items: [
        "Grass cutting",
        "Tree trimming",
        "Garden maintenance",
        "Landscaping design",
        "Weed control",
        "Planting flowers and trees",
      ],
    },
    {
      title: "Painting",
      icon: <Paintbrush size={34} />,
      items: [
        "Interior painting",
        "Exterior painting",
        "Roof cleaning & painting",
      ],
    },
    {
      title: "Plumbing",
      icon: <Wrench size={34} />,
      items: [
        "Pipe repairs",
        "Tap installations",
        "Toilet repairs",
        "Drain unblocking",
        "Geyser maintenance",
        "Leak detection",
      ],
    },
    {
      title: "Cleaning Services",
      icon: <Sparkles size={34} />,
      items: [
        "Residential cleaning",
        "Office cleaning",
        "Deep cleaning",
        "Post-construction cleaning",
        "Window cleaning",
        "Yard cleaning",
      ],
    },
    {
      title: "Electrical Solutions",
      icon: <Zap size={34} />,
      items: [
        "House wiring",
        "Fault finding",
        "Electrical repairs",
        "Installations",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md text-white border-b border-white/10">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

          {/* LOGO */}
          <div className="flex items-center gap-3">

            <img
              src="/logo.png"
              alt="Logo"
              className="w-8 h-8 object-contain"
            />

            <h1 className="font-semibold text-sm md:text-base">
              Zwamashango Project
            </h1>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-green-500 text-black p-2 rounded-xl"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="bg-black border-t border-white/10 px-6 py-6 space-y-5 text-center">

            {[
              "home",
              "services",
              "about",
              "careers",
              "contact",
            ].map((section) => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section);
                  setMenuOpen(false);
                }}
                className="block w-full text-base capitalize hover:text-green-400 transition"
              >
                {section}
              </button>
            ))}

            <a
              href="https://wa.me/27766208922"
              target="_blank"
              className="block bg-green-500 text-black px-4 py-3 rounded-xl font-bold"
            >
              WhatsApp Us
            </a>

            <a
              href="tel:0766208922"
              className="block border border-white/20 px-4 py-3 rounded-xl"
            >
              Call Now
            </a>
          </div>
        )}
      </nav>

      {/* HOME PAGE */}
      {activeSection === "home" && (
        <>
          {/* HERO */}
          <section className="min-h-[85vh] bg-gradient-to-b from-black via-zinc-950 to-black text-white flex flex-col justify-center px-6 text-center">

            <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-5">
              ZWAMASHANGO PROJECT (PTY) LTD
            </h1>

            <div className="relative flex justify-center mb-8">

              <div className="absolute w-60 h-60 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 blur-3xl opacity-50 animate-pulse"></div>

              <div className="relative bg-black rounded-full p-5 border border-white/10 shadow-2xl">

                <img
                  src="/logo.png"
                  alt="Zwamashango Projects"
                  className="w-28 h-28 md:w-40 md:h-40 object-contain"
                />
              </div>
            </div>

            <p className="text-lg md:text-xl text-green-400 mb-5 leading-8">
              Building Communities, One Job At A Time
            </p>

            {/* BADGES */}
            <div className="flex justify-center gap-3 flex-wrap mb-8">

              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                Construction
              </span>

              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                Cleaning
              </span>

              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                Landscaping
              </span>

            </div>

            <p className="max-w-xl mx-auto text-gray-300 text-base leading-7">
              Professional construction, cleaning,
              plumbing, landscaping and property
              maintenance services across Pretoria,
              Gauteng and Limpopo.
            </p>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-wrap justify-center gap-4">

              <button
                onClick={() => setActiveSection("contact")}
                className="bg-green-500 text-black font-bold py-3 px-6 rounded-xl hover:scale-105 transition-all duration-300"
              >
                Request a Quote
              </button>

              <a
                href="https://wa.me/27766208922"
                target="_blank"
                className="border border-white text-white font-bold py-3 px-6 rounded-xl hover:bg-white hover:text-black transition-all duration-300"
              >
                WhatsApp Us
              </a>

            </div>
          </section>

          {/* WHY CHOOSE US */}
          <section className="py-14 md:py-20 px-6 bg-zinc-50">

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Us
            </h2>

            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">

              {[
                "Trusted Local Company",
                "Affordable Quotations",
                "Quality Workmanship",
                "Fast Response Time",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
                >
                  <ShieldCheck
                    size={34}
                    className="mx-auto text-green-500 mb-4"
                  />

                  <p className="font-semibold leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* STATS */}
          <section className="py-14 md:py-20 px-6 bg-black text-white">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">

              <div>
                <h3 className="text-3xl font-bold text-green-400">
                  10+
                </h3>

                <p className="mt-2 text-gray-300">
                  Services
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-400">
                  100%
                </h3>

                <p className="mt-2 text-gray-300">
                  Client Focus
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-400">
                  2
                </h3>

                <p className="mt-2 text-gray-300">
                  Provinces
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-400">
                  24/7
                </h3>

                <p className="mt-2 text-gray-300">
                  Support
                </p>
              </div>

            </div>
          </section>
        </>
      )}

      {/* SERVICES */}
      {activeSection === "services" && (
        <section className="py-14 md:py-20 px-6 min-h-screen bg-zinc-50">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >

                <div className="text-green-500 mb-5">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-green-500 mb-5 leading-tight">
                  {service.title}
                </h3>

                <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-7">

                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}

                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ABOUT */}
      {activeSection === "about" && (
        <section className="py-14 md:py-20 px-6 min-h-screen text-center bg-white">

          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            About The Founder
          </h2>

          <div className="max-w-2xl mx-auto bg-zinc-50 rounded-3xl p-8 shadow-xl">

            <Briefcase
              size={40}
              className="mx-auto text-green-500 mb-5"
            />

            <p className="text-gray-700 text-base md:text-lg leading-8">
              Zwamashango Project (Pty) Ltd was founded by
              Ntsieni Reckson Netshiongolwe, a young entrepreneur
              from Nzhelele with a background in Mechanical Engineering,
              Electrical knowledge, and a vision to build a trusted
              local business that creates jobs and delivers quality work
              across South Africa.
            </p>
          </div>
        </section>
      )}

      {/* CAREERS */}
      {activeSection === "careers" && (
        <section className="py-14 md:py-20 px-6 min-h-screen bg-zinc-50 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Careers
          </h2>

          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 shadow-xl">

            <p className="text-gray-700 text-base md:text-lg leading-8">
              We are always looking for hardworking and passionate
              individuals to join our growing team.

              <br /><br />

              There are currently no open vacancies available.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

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
                className="bg-black text-white px-5 py-3 rounded-full text-sm hover:bg-green-500 hover:text-black transition-all duration-300"
              >
                {job}
              </div>
            ))}

          </div>
        </section>
      )}

      {/* CONTACT */}
      {activeSection === "contact" && (
        <section className="py-14 md:py-20 px-6 min-h-screen bg-black text-white text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Contact Us
          </h2>

          <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl">

            <div className="space-y-6 text-base md:text-lg">

              <div className="flex items-center justify-center gap-3">
                <Phone className="text-green-400" size={22} />
                <p>076 620 8922</p>
              </div>

              <div className="flex items-center justify-center gap-3">
                <Phone className="text-green-400" size={22} />
                <p>071 424 8034</p>
              </div>

              <div>
                <p className="text-green-400 mb-2">
                  Email
                </p>

                <p className="break-words">
                  zwamashangoprojects@gmail.com
                </p>
              </div>

              <div className="flex items-center justify-center gap-3">
                <MapPin className="text-green-400" size={22} />

                <p>
                  Pretoria, Gauteng & Nzhelele,
                  Vhembe District, Limpopo
                </p>
              </div>

            </div>

            <p className="mt-10 text-gray-400 text-sm">
              Company Registration: 2026/404521/07
            </p>

          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 text-gray-400 text-center py-8 px-6">

        <p>
          © 2026 Zwamashango Project (Pty) Ltd
        </p>

        <p className="mt-2 text-sm">
          Construction • Cleaning • Landscaping • Maintenance
        </p>

      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/27766208922"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-black px-5 py-3 rounded-full shadow-2xl font-bold hover:scale-105 transition-all duration-300"
      >
        WhatsApp
      </a>

    </main>
  );
}