"use client";

import { useState, useEffect } from "react";
import {
  Hammer, Trees, Paintbrush, Wrench, Sparkles, Zap,
  Menu, X, Phone, Mail, MapPin, MessageCircle, ChevronRight,
} from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);

  const heroSlides = [
    {
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80",
      tag: "Construction & Property Services",
      heading: "RELY ON\nOUR ABILITY.",
    },
    {
      img: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=1600&q=80",
      tag: "Professional Workmanship",
      heading: "WE'RE HANDS ON\nEVERY JOB.",
    },
    {
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
      tag: "Quality You Can Count On",
      heading: "BUILDING\nCOMMUNITIES.",
    },
  ];

  useEffect(() => {
    const t = setInterval(() => setHeroSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("wv")),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".wrev").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: <Hammer size={32} />,
      title: "Construction",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      items: ["Building Construction", "Planning & Design", "Road Maintenance", "Paving & Tiling"],
    },
    {
      icon: <Trees size={32} />,
      title: "Gardening & Landscaping",
      img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
      items: ["Grass Cutting", "Tree Trimming", "Garden Maintenance", "Landscaping Design"],
    },
    {
      icon: <Paintbrush size={32} />,
      title: "Painting",
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      items: ["Interior Painting", "Exterior Painting", "Roof Cleaning & Painting"],
    },
    {
      icon: <Wrench size={32} />,
      title: "Plumbing",
      img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
      items: ["Pipe Repairs", "Tap Installations", "Geyser Maintenance", "Leak Detection"],
    },
    {
      icon: <Sparkles size={32} />,
      title: "Cleaning Services",
      img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
      items: ["Residential Cleaning", "Office Cleaning", "Deep Cleaning", "Post-Construction Cleaning"],
    },
    {
      icon: <Zap size={32} />,
      title: "Electrical Solutions",
      img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
      items: ["House Wiring", "Fault Finding", "Electrical Repairs", "Installations"],
    },
  ];

  const values = [
    { title: "SAFETY", desc: "A safe site is a productive site. Safety is non-negotiable on every job we take." },
    { title: "QUALITY", desc: "We do not finish a job until the client is fully satisfied. Guaranteed." },
    { title: "INTEGRITY", desc: "Honest pricing, transparent timelines, written quotes — always." },
    { title: "COMMUNITY", desc: "We hire locally, spend locally, and build the communities we serve." },
    { title: "RELIABILITY", desc: "When we say we will be there, we are there. Every time." },
    { title: "EXCELLENCE", desc: "Every job, big or small, receives the same standard of workmanship." },
  ];

  const navLinks = [
    ["about", "About"],
    ["what-we-do", "What We Do"],
    ["projects", "Projects"],
    ["careers", "Careers"],
    ["contact", "Contact"],
  ];

  return (
    <main className="min-h-screen bg-white text-black overflow-x-hidden" style={{ fontFamily: "'Arial', sans-serif" }}>

      <style jsx global>{`
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; margin: 0; }
        .wrev { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .wrev.wv { opacity: 1; transform: translateY(0); }
        .wrev-l { opacity: 0; transform: translateX(-28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .wrev-l.wv { opacity: 1; transform: translateX(0); }
        .wrev-r { opacity: 0; transform: translateX(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .wrev-r.wv { opacity: 1; transform: translateX(0); }
        .hero-img { transition: opacity 1s ease; }
        .service-img-wrap { overflow: hidden; }
        .service-img-wrap img { transition: transform 0.6s ease; }
        .service-card:hover .service-img-wrap img { transform: scale(1.06); }
        .nav-link { position: relative; }
        .nav-link::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: #2ECC40; transition: width 0.25s ease; }
        .nav-link:hover::after { width: 100%; }
        @keyframes fadeSlide { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .hero-text-anim { animation: fadeSlide 0.8s ease forwards; }
      `}</style>

      {/* ══════════════════════════════════════════
          NAV — exactly WBHO: white bg, black text,
          green accent on hover, logo left, links right
      ══════════════════════════════════════════ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.96)",
          backdropFilter: "blur(8px)",
          borderBottom: scrolled ? "1px solid #e5e5e5" : "1px solid rgba(229,229,229,0.6)",
          height: scrolled ? "60px" : "72px",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div className="h-full max-w-7xl mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <button onClick={() => scrollTo("home")} className="flex items-center gap-3 bg-transparent border-none cursor-pointer p-0">
            <img src="/logo.png" alt="Zwamashango Projects" className="object-contain" style={{ height: scrolled ? "36px" : "44px", transition: "height 0.3s" }} />
            <div className="text-left hidden sm:block">
              <div className="font-black text-black leading-tight tracking-tight" style={{ fontSize: scrolled ? "13px" : "15px", transition: "font-size 0.3s" }}>
                ZWAMASHANGO PROJECT
              </div>
              <div className="font-semibold tracking-widest uppercase" style={{ fontSize: "9px", color: "#2ECC40" }}>
                (PTY) LTD
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)}
                className="nav-link bg-transparent border-none cursor-pointer font-semibold tracking-wide uppercase text-black hover:text-black transition-colors"
                style={{ fontSize: "12px", letterSpacing: "0.5px" }}>
                {label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <a href="https://wa.me/27766208922" target="_blank"
            className="hidden lg:inline-flex items-center gap-2 font-bold text-white text-xs tracking-wider uppercase px-5 py-3 no-underline transition-all hover:opacity-90"
            style={{ background: "#2ECC40", letterSpacing: "1px" }}>
            GET A QUOTE
          </a>

          {/* Mobile burger */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden bg-transparent border-none cursor-pointer p-1">
            {menuOpen ? <X size={24} color="#000" /> : <Menu size={24} color="#000" />}
          </button>
        </div>

        {/* Mobile menu — full width white dropdown like WBHO */}
        {menuOpen && (
          <div className="lg:hidden flex flex-col" style={{ background: "#fff", borderTop: "1px solid #e5e5e5" }}>
            {navLinks.map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)}
                className="text-left font-bold text-black text-sm uppercase tracking-wider px-6 py-4 bg-transparent border-none cursor-pointer hover:text-green-500 transition-colors"
                style={{ borderBottom: "1px solid #f0f0f0", letterSpacing: "1px" }}>
                {label}
              </button>
            ))}
            <a href="https://wa.me/27766208922" target="_blank"
              className="font-bold text-white text-sm text-center uppercase tracking-wider py-4 no-underline"
              style={{ background: "#2ECC40", letterSpacing: "1px" }}>
              GET A QUOTE
            </a>
          </div>
        )}
      </nav>

      {/* ══════════════════════════════════════════
          HERO — full screen slideshow exactly like WBHO:
          big photo background, dark overlay,
          huge white ALL-CAPS heading, small tag above
      ══════════════════════════════════════════ */}
      <section id="home" className="relative w-full" style={{ height: "100vh", minHeight: "600px" }}>
        {/* slides */}
        {heroSlides.map((slide, i) => (
          <div key={i} className="absolute inset-0 hero-img" style={{ opacity: heroSlide === i ? 1 : 0, transition: "opacity 1.2s ease" }}>
            <img src={slide.img} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.2) 100%)" }} />
          </div>
        ))}

        {/* content */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-20 max-w-7xl mx-auto" style={{ paddingTop: "80px" }}>
          <div key={heroSlide} className="hero-text-anim">
            {/* small tag */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5" style={{ background: "#2ECC40" }} />
              <span className="font-bold text-white text-xs tracking-[3px] uppercase opacity-80">
                {heroSlides[heroSlide].tag}
              </span>
            </div>
            {/* big heading */}
            <h1 className="font-black text-white leading-none mb-8"
              style={{ fontSize: "clamp(36px,7vw,90px)", letterSpacing: "-1px", maxWidth: "700px", whiteSpace: "pre-line" }}>
              {heroSlides[heroSlide].heading}
            </h1>
            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <button onClick={() => scrollTo("what-we-do")}
                className="font-bold text-white text-xs tracking-widest uppercase px-6 py-3 border-none cursor-pointer transition-all hover:opacity-90"
                style={{ background: "#2ECC40", letterSpacing: "1.5px" }}>
                VIEW SERVICES
              </button>
              <button onClick={() => scrollTo("contact")}
                className="font-bold text-white text-xs tracking-widest uppercase px-6 py-3 cursor-pointer transition-all hover:bg-white hover:text-black"
                style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.5)", letterSpacing: "1.5px" }}>
                CONTACT US
              </button>
            </div>
          </div>
        </div>

        {/* slide dots */}
        <div className="absolute bottom-8 right-8 flex gap-2">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setHeroSlide(i)}
              className="rounded-full border-none cursor-pointer transition-all"
              style={{ width: heroSlide === i ? "24px" : "8px", height: "8px", background: heroSlide === i ? "#2ECC40" : "rgba(255,255,255,0.5)" }} />
          ))}
        </div>

        {/* bottom tag strip — like WBHO's colored strip */}
        <div className="absolute bottom-0 left-0 right-0 flex" style={{ height: "4px" }}>
          <div className="flex-1" style={{ background: "#2ECC40" }} />
          <div className="flex-1" style={{ background: "#1aaa2a" }} />
          <div className="flex-1" style={{ background: "#0f7a1a" }} />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT INTRO — like WBHO: white bg,
          bold statement left, short para right
      ══════════════════════════════════════════ */}
      <section id="about" className="px-6 py-24" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="wrev">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5" style={{ background: "#2ECC40" }} />
              <span className="font-bold text-xs tracking-[3px] uppercase" style={{ color: "#2ECC40" }}>About Us</span>
            </div>
            <h2 className="font-black text-black leading-tight mb-0"
              style={{ fontSize: "clamp(28px,5vw,56px)", letterSpacing: "-1px" }}>
              BUILDING<br />COMMUNITIES<br /><span style={{ color: "#2ECC40" }}>THROUGH QUALITY</span><br />SERVICE.
            </h2>
          </div>
          <div className="wrev">
            <p className="text-base leading-8 mb-6" style={{ color: "#444" }}>
              Zwamashango Project (Pty) Ltd is a locally owned, formally registered construction and property maintenance company operating across <strong>Nzhelele, Vhembe District, Limpopo</strong> and <strong>Pretoria, Gauteng</strong>. Founded by <strong>Ntsieni Reckson Netshiongolwe</strong> — a young entrepreneur with N4 Mechanical Engineering qualifications and electrical training — we were built to deliver professional, reliable services to communities that deserve better.
            </p>
            <p className="text-base leading-8 mb-8" style={{ color: "#444" }}>
              We are CIPC registered, SARS tax compliant, and operate with full professional integrity — written quotations, branded workwear, photographic records of every job, and a genuine workmanship guarantee on everything we do.
            </p>
            {/* reg strip */}
            <div className="flex flex-wrap gap-6 pt-6" style={{ borderTop: "1px solid #e5e5e5" }}>
              {[
                ["REG NUMBER", "2026/404521/07"],
                ["TAX STATUS", "SARS Registered"],
                ["BANKING", "First National Bank Business"],
                ["FOUNDED", "2026"],
              ].map(([lbl, val]) => (
                <div key={lbl}>
                  <div className="font-bold text-[10px] tracking-[2px] uppercase mb-1" style={{ color: "#999" }}>{lbl}</div>
                  <div className="font-black text-sm text-black">{val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          THE ZWAMASHANGO WAY — dark section like
          WBHO's "THE WBHO WAY" values block
      ══════════════════════════════════════════ */}
      <section className="px-6 py-24" style={{ background: "#111" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            <div className="wrev">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5" style={{ background: "#2ECC40" }} />
                <span className="font-bold text-xs tracking-[3px] uppercase" style={{ color: "#2ECC40" }}>Our Values</span>
              </div>
              <h2 className="font-black text-white leading-tight"
                style={{ fontSize: "clamp(28px,4vw,52px)", letterSpacing: "-1px" }}>
                THE ZWAMASHANGO WAY
              </h2>
            </div>
            <div className="wrev">
              <p className="text-base leading-8" style={{ color: "rgba(255,255,255,0.55)" }}>
                Our culture and shared values are the foundation of everything we do. These are not words on a wall — they are the principles our team lives by on every single job, every single day.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {values.map((v, i) => (
              <div key={i} className="wrev px-8 py-10 group transition-colors duration-300 cursor-default"
                style={{ background: "#111" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#1a1a1a")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#111")}>
                <div className="font-black text-white text-lg mb-3 tracking-tight" style={{ letterSpacing: "-0.3px" }}>
                  {v.title}
                </div>
                <div className="w-8 h-0.5 mb-4" style={{ background: "#2ECC40" }} />
                <p className="text-sm leading-7" style={{ color: "rgba(255,255,255,0.5)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT WE DO — like WBHO's services section:
          grid of service cards with photo + title,
          hover reveals details
      ══════════════════════════════════════════ */}
      <section id="what-we-do" className="px-6 py-24" style={{ background: "#f7f7f7" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
            <div className="wrev">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5" style={{ background: "#2ECC40" }} />
                <span className="font-bold text-xs tracking-[3px] uppercase" style={{ color: "#2ECC40" }}>Our Services</span>
              </div>
              <h2 className="font-black text-black leading-tight"
                style={{ fontSize: "clamp(28px,4vw,52px)", letterSpacing: "-1px" }}>
                WHAT WE DO
              </h2>
            </div>
            <div className="wrev">
              <p className="text-base leading-8" style={{ color: "#666" }}>
                We make any property project work for you — no matter the size. Think of us as your single partner from start to finish. Every job gets a free site assessment and a written quotation.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {services.map((s, i) => (
              <div key={i}
                className="wrev service-card group relative overflow-hidden cursor-default"
                style={{ aspectRatio: "4/3", background: "#000" }}>
                {/* photo */}
                <div className="service-img-wrap absolute inset-0">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                </div>
                {/* overlay */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%)" }} />
                {/* green left border on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300" style={{ background: "#2ECC40", transform: "scaleY(0)", transformOrigin: "bottom" }}
                  ref={(el) => {
                    if (!el) return;
                    const card = el.closest(".service-card") as HTMLElement;
                    card?.addEventListener("mouseenter", () => { el.style.transform = "scaleY(1)"; });
                    card?.addEventListener("mouseleave", () => { el.style.transform = "scaleY(0)"; });
                  }} />
                {/* content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="text-white mb-2 opacity-80" style={{ color: "#2ECC40" }}>{s.icon}</div>
                  <h3 className="font-black text-white text-lg mb-3 leading-tight" style={{ letterSpacing: "-0.3px" }}>{s.title}</h3>
                  <ul className="list-none space-y-1 max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>
                        <ChevronRight size={10} style={{ color: "#2ECC40", flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 mt-3 text-xs font-bold tracking-wider uppercase transition-opacity duration-300 group-hover:opacity-0"
                    style={{ color: "#2ECC40" }}>
                    <span>LEARN MORE</span>
                    <ChevronRight size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROJECTS — like WBHO's portfolio section:
          full-width dark strip with project photos
          and titles, exactly like WBHO portfolio grid
      ══════════════════════════════════════════ */}
      <section id="projects" className="px-6 py-24" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
            <div className="wrev">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5" style={{ background: "#2ECC40" }} />
                <span className="font-bold text-xs tracking-[3px] uppercase" style={{ color: "#2ECC40" }}>Portfolio</span>
              </div>
              <h2 className="font-black text-black leading-tight"
                style={{ fontSize: "clamp(28px,4vw,52px)", letterSpacing: "-1px" }}>
                OUR PROJECTS
              </h2>
            </div>
            <div className="wrev">
              <p className="text-base leading-8" style={{ color: "#666" }}>
                We photograph every job from start to finish. As our portfolio grows, every completed project will be showcased here. Our work speaks louder than any words.
              </p>
            </div>
          </div>

          {/* big project grid like WBHO */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {[
              { img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", title: "RESIDENTIAL CONSTRUCTION", loc: "Nzhelele, Limpopo" },
              { img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", title: "EXTERIOR PAINTING PROJECT", loc: "Vhembe District" },
              { img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80", title: "LANDSCAPING & GARDEN", loc: "Nzhelele, Limpopo" },
              { img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80", title: "COMMERCIAL CLEANING", loc: "Pretoria, Gauteng" },
              { img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80", title: "ELECTRICAL INSTALLATION", loc: "Vhembe District" },
              { img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80", title: "PLUMBING MAINTENANCE", loc: "Pretoria, Gauteng" },
            ].map((p, i) => (
              <div key={i} className="wrev group relative overflow-hidden cursor-pointer" style={{ aspectRatio: "4/3", background: "#000" }}>
                <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-50 group-hover:scale-105 transition-all duration-600" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-[10px] font-bold tracking-[2px] uppercase mb-1" style={{ color: "#2ECC40" }}>{p.loc}</div>
                  <h3 className="font-black text-white text-sm leading-tight" style={{ letterSpacing: "0.5px" }}>{p.title}</h3>
                </div>
                {/* hover: green bottom bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 scale-x-0 group-hover:scale-x-100" style={{ background: "#2ECC40", transformOrigin: "left" }} />
              </div>
            ))}
          </div>

          <div className="wrev mt-6 text-center">
            <p className="text-sm italic" style={{ color: "#999" }}>
              Portfolio actively growing — we photograph every completed project. Contact us to see our latest work.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          QUOTE CTA — full-width green band
          like WBHO's "contact us" highlight strip
      ══════════════════════════════════════════ */}
      <div className="relative py-16 px-6 overflow-hidden" style={{ background: "#2ECC40" }}>
        <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg,transparent,transparent 30px,rgba(0,0,0,0.04) 30px,rgba(0,0,0,0.04) 31px)" }} />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-8">
          <div>
            <div className="font-black text-black leading-tight mb-2" style={{ fontSize: "clamp(22px,4vw,40px)", letterSpacing: "-0.5px" }}>
              READY TO START YOUR PROJECT?
            </div>
            <p className="text-sm font-medium" style={{ color: "rgba(0,0,0,0.65)" }}>
              Free site assessment · Written quotation · No hidden costs
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://wa.me/27766208922" target="_blank"
              className="inline-flex items-center gap-2 font-bold text-white text-xs tracking-wider uppercase px-6 py-3 no-underline hover:opacity-90 transition-opacity"
              style={{ background: "#080808", letterSpacing: "1px" }}>
              <MessageCircle size={14} /> WHATSAPP US
            </a>
            <a href="tel:0766208922"
              className="inline-flex items-center gap-2 font-bold text-black text-xs tracking-wider uppercase px-6 py-3 no-underline transition-all border border-black/20 hover:bg-black hover:text-white"
              style={{ background: "rgba(255,255,255,0.4)", letterSpacing: "1px" }}>
              <Phone size={14} /> 076 620 8922
            </a>
            <a href="tel:0714248034"
              className="inline-flex items-center gap-2 font-bold text-black text-xs tracking-wider uppercase px-6 py-3 no-underline transition-all border border-black/20 hover:bg-black hover:text-white"
              style={{ background: "rgba(255,255,255,0.4)", letterSpacing: "1px" }}>
              <Phone size={14} /> 071 424 8034
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          CAREERS — clean white section like WBHO
      ══════════════════════════════════════════ */}
      <section id="careers" className="px-6 py-24" style={{ background: "#f7f7f7" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="wrev">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5" style={{ background: "#2ECC40" }} />
              <span className="font-bold text-xs tracking-[3px] uppercase" style={{ color: "#2ECC40" }}>Join Our Team</span>
            </div>
            <h2 className="font-black text-black leading-tight mb-6"
              style={{ fontSize: "clamp(28px,4vw,52px)", letterSpacing: "-1px" }}>
              CAREERS &<br />OPPORTUNITIES
            </h2>
            <p className="text-base leading-8 mb-6" style={{ color: "#555" }}>
              Zwamashango Project (Pty) Ltd is committed to creating employment and empowering local communities across Nzhelele and Pretoria. We hire skilled, hardworking people who share our values.
            </p>
            <p className="text-sm font-bold mb-8" style={{ color: "#2ECC40" }}>
              No current vacancies — but send us your details and we will be in touch.
            </p>
            <a href="https://wa.me/27766208922?text=Hello%2C%20I%20would%20like%20to%20apply%20for%20a%20position%20at%20Zwamashango%20Projects"
              target="_blank"
              className="inline-flex items-center gap-2 font-bold text-white text-xs tracking-wider uppercase px-6 py-3 no-underline hover:opacity-90"
              style={{ background: "#2ECC40", letterSpacing: "1px" }}>
              <MessageCircle size={14} /> SEND YOUR CV ON WHATSAPP
            </a>
          </div>
          <div className="wrev">
            <div className="grid grid-cols-2 gap-1">
              {["Construction Workers", "Painters", "Gardeners & Landscapers", "Plumbers", "Electricians", "Cleaners"].map((job) => (
                <div key={job} className="p-5 font-bold text-sm text-black" style={{ background: "#fff", borderLeft: "3px solid #2ECC40" }}>
                  {job}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT — dark section like WBHO footer area
      ══════════════════════════════════════════ */}
      <section id="contact" className="px-6 py-24" style={{ background: "#111" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* left: contact info */}
          <div className="wrev">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5" style={{ background: "#2ECC40" }} />
              <span className="font-bold text-xs tracking-[3px] uppercase" style={{ color: "#2ECC40" }}>Get In Touch</span>
            </div>
            <h2 className="font-black text-white leading-tight mb-8"
              style={{ fontSize: "clamp(28px,4vw,52px)", letterSpacing: "-1px" }}>
              CONTACT US
            </h2>
            <div className="flex flex-col gap-0">
              {[
                { icon: <Phone size={16} />, label: "Primary Number", val: "076 620 8922", href: "tel:0766208922" },
                { icon: <Phone size={16} />, label: "Alternative Number", val: "071 424 8034", href: "tel:0714248034" },
                { icon: <MessageCircle size={16} />, label: "WhatsApp", val: "076 620 8922", href: "https://wa.me/27766208922" },
                { icon: <Mail size={16} />, label: "Email", val: "zwamashangoprojects@gmail.com", href: "mailto:zwamashangoprojects@gmail.com" },
                { icon: <MapPin size={16} />, label: "Locations", val: "Nzhelele, Limpopo  &  Pretoria, Gauteng", href: null },
              ].map((row, i, arr) => (
                <div key={row.label} className="flex items-center gap-4 py-4"
                  style={{ borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                  <div className="w-9 h-9 flex items-center justify-center rounded flex-shrink-0"
                    style={{ background: "rgba(46,204,64,0.12)", border: "1px solid rgba(46,204,64,0.2)", color: "#2ECC40" }}>
                    {row.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-[2px] uppercase mb-0.5" style={{ color: "#555" }}>{row.label}</div>
                    {row.href ? (
                      <a href={row.href} target={row.href.startsWith("http") ? "_blank" : undefined}
                        className="text-sm font-semibold text-white no-underline hover:text-green-400 transition-colors">
                        {row.val}
                      </a>
                    ) : (
                      <div className="text-sm font-semibold text-white">{row.val}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 text-xs" style={{ borderTop: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.3)" }}>
              Reg: 2026/404521/07 · SARS Tax Registered · Capitec Business Account
            </div>
          </div>

          {/* right: quote form */}
          <div className="wrev">
            <div className="p-8" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <h3 className="font-black text-white text-xl mb-6 tracking-tight">REQUEST A QUOTE</h3>
              {[
                { label: "Full Name", type: "text", ph: "Your name" },
                { label: "Phone Number", type: "tel", ph: "Your contact number" },
                { label: "Location / Area", type: "text", ph: "Where is the property?" },
              ].map((f) => (
                <div key={f.label} className="mb-4">
                  <label className="block text-[10px] font-bold tracking-[2px] uppercase mb-2" style={{ color: "#666" }}>{f.label}</label>
                  <input type={f.type} placeholder={f.ph}
                    className="w-full px-4 py-3 text-sm text-white outline-none"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", fontFamily: "Arial, sans-serif" }}
                    onFocus={(e) => (e.target.style.borderColor = "#2ECC40")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                </div>
              ))}
              <div className="mb-4">
                <label className="block text-[10px] font-bold tracking-[2px] uppercase mb-2" style={{ color: "#666" }}>Service Required</label>
                <select className="w-full px-4 py-3 text-sm text-white outline-none"
                  style={{ background: "rgba(20,20,20,0.98)", border: "1px solid rgba(255,255,255,0.1)", fontFamily: "Arial, sans-serif" }}
                  onFocus={(e) => (e.target.style.borderColor = "#2ECC40")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}>
                  <option value="">Select a service...</option>
                  {["Construction", "Gardening & Landscaping", "Painting", "Plumbing", "Cleaning Services", "Electrical Solutions", "Maintenance & Renovation", "Multiple Services"].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-[10px] font-bold tracking-[2px] uppercase mb-2" style={{ color: "#666" }}>Describe Your Project</label>
                <textarea placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 text-sm text-white outline-none resize-none"
                  style={{ height: "90px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", fontFamily: "Arial, sans-serif" }}
                  onFocus={(e) => (e.target.style.borderColor = "#2ECC40")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
              </div>
              <button
                onClick={() => {
                  const inputs = document.querySelectorAll<HTMLInputElement>('input[type="text"], input[type="tel"]');
                  const name = inputs[0]?.value || "Not provided";
                  const phone = inputs[1]?.value || "Not provided";
                  const loc = inputs[2]?.value || "Not provided";
                  const svc = (document.querySelector("select") as HTMLSelectElement)?.value || "Not selected";
                  const desc = (document.querySelector("textarea") as HTMLTextAreaElement)?.value || "None";
                  const msg = `Hello Zwamashango Projects!%0A%0AQuote Request:%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Service:* ${encodeURIComponent(svc)}%0A*Location:* ${encodeURIComponent(loc)}%0A*Details:* ${encodeURIComponent(desc)}`;
                  window.open(`https://wa.me/27766208922?text=${msg}`, "_blank");
                }}
                className="w-full py-4 font-black text-white text-xs tracking-[2px] uppercase border-none cursor-pointer hover:opacity-90 transition-opacity"
                style={{ background: "#2ECC40", color: "#000", letterSpacing: "2px" }}>
                SEND VIA WHATSAPP →
              </button>
              <p className="text-center mt-3 text-[10px]" style={{ color: "#444" }}>Opens WhatsApp with your details pre-filled</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER — exactly like WBHO:
          dark, 4-column, clean links, address, reg
      ══════════════════════════════════════════ */}
      <footer style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* brand */}
          <div>
            <img src="/logo.png" alt="Zwamashango" className="object-contain mb-4" style={{ height: "48px" }} />
            <div className="font-black text-white text-sm mb-1 tracking-tight">ZWAMASHANGO PROJECT</div>
            <div className="font-semibold text-xs tracking-[2px] mb-4" style={{ color: "#2ECC40" }}>(PTY) LTD</div>
            <p className="text-xs leading-6" style={{ color: "rgba(255,255,255,0.35)" }}>
              Building Communities<br />Through Quality Service.
            </p>
          </div>
          {/* quick links */}
          <div>
            <div className="font-black text-white text-xs tracking-[2px] uppercase mb-5">Quick Links</div>
            <div className="flex flex-col gap-3">
              {navLinks.map(([id, label]) => (
                <button key={id} onClick={() => scrollTo(id)}
                  className="text-left text-xs bg-transparent border-none cursor-pointer hover:text-green-400 transition-colors"
                  style={{ color: "rgba(255,255,255,0.45)", fontWeight: 600, letterSpacing: "0.5px" }}>
                  {label}
                </button>
              ))}
            </div>
          </div>
          {/* services */}
          <div>
            <div className="font-black text-white text-xs tracking-[2px] uppercase mb-5">Services</div>
            <div className="flex flex-col gap-3">
              {["Construction", "Gardening & Landscaping", "Painting", "Plumbing", "Cleaning", "Electrical"].map((s) => (
                <span key={s} className="text-xs" style={{ color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>{s}</span>
              ))}
            </div>
          </div>
          {/* contact */}
          <div>
            <div className="font-black text-white text-xs tracking-[2px] uppercase mb-5">Contact</div>
            <div className="flex flex-col gap-3 text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
              <a href="tel:0766208922" className="no-underline hover:text-green-400 transition-colors" style={{ color: "rgba(255,255,255,0.45)" }}>076 620 8922</a>
              <a href="tel:0714248034" className="no-underline hover:text-green-400 transition-colors" style={{ color: "rgba(255,255,255,0.45)" }}>071 424 8034</a>
              <a href="mailto:zwamashangoprojects@gmail.com" className="no-underline hover:text-green-400 transition-colors break-all" style={{ color: "rgba(255,255,255,0.45)" }}>zwamashangoprojects@gmail.com</a>
              <span>Nzhelele, Limpopo</span>
              <span>Pretoria, Gauteng</span>
              <span className="mt-1" style={{ color: "rgba(255,255,255,0.25)" }}>Reg: 2026/404521/07</span>
            </div>
          </div>
        </div>
        {/* bottom bar */}
        <div className="px-6 py-4 flex flex-wrap items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            © 2026 Zwamashango Project (Pty) Ltd. All rights reserved.
          </span>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            SARS Registered · First National Bank Business Account
          </span>
        </div>
      </footer>

    </main>
  );
}