export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      
      {/* HERO SECTION */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <img
          src="/logo.png"
          alt="Zwamashango Projects"
          className="w-40 mx-auto mb-6"
        />

        <h1 className="text-5xl font-bold mb-4">
          ZWAMASHANGO PROJECTS
        </h1>

        <p className="text-xl text-green-400 mb-6">
          Building Communities, One Job At A Time
        </p>

        <p className="max-w-2xl mx-auto text-gray-300">
          Professional painting, gardening, maintenance,
          plumbing, construction and electrical solutions
          in Nzhelele and surrounding areas.
        </p>

        <a
          href="https://wa.me/27766208922"
          target="_blank"
          className="inline-block mt-8 bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 rounded-xl transition"
        >
          Contact Us On WhatsApp
        </a>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {[
            "Painting",
            "Gardening & Landscaping",
            "Plumbing",
            "Electrical Solutions",
            "Maintenance & Renovations",
            "Construction Services",
          ].map((service) => (
            <div
              key={service}
              className="border border-gray-200 rounded-2xl p-8 shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-2xl font-bold text-green-500 mb-4">
                {service}
              </h3>

              <p className="text-gray-700">
                Professional and affordable {service.toLowerCase()}
                services for homes, schools, churches and businesses.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MONTHLY PACKAGES */}
      <section className="bg-gray-100 py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Monthly Maintenance Packages
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-3xl font-bold text-green-500 mb-4">
              Basic
            </h3>

            <p className="text-5xl font-bold mb-6">
              R550
              <span className="text-lg text-gray-500">/month</span>
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Garden Cleaning</li>
              <li>✔ Lawn Cutting</li>
              <li>✔ 2 Visits Monthly</li>
            </ul>
          </div>

          <div className="bg-black text-white rounded-2xl shadow-xl p-8 scale-105">
            <h3 className="text-3xl font-bold text-green-400 mb-4">
              Standard
            </h3>

            <p className="text-5xl font-bold mb-6">
              R1200
              <span className="text-lg text-gray-400">/month</span>
            </p>

            <ul className="space-y-3">
              <li>✔ Garden Maintenance</li>
              <li>✔ Painting Touch-Ups</li>
              <li>✔ Plumbing Checks</li>
              <li>✔ 4 Visits Monthly</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-3xl font-bold text-green-500 mb-4">
              Premium
            </h3>

            <p className="text-5xl font-bold mb-6">
              R1500
              <span className="text-lg text-gray-500">/month</span>
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Full Property Maintenance</li>
              <li>✔ Gardening</li>
              <li>✔ Painting</li>
              <li>✔ Electrical & Plumbing Support</li>
              <li>✔ Weekly Visits</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">
          About The Founder
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-8">
          Zwamashango Projects was founded by 
          Ntsieni Reckson Netshiongolwe, a young entrepreneur
          from Nzhelele with a background in Mechanical Engineering,
          Electrical knowledge, and a vision to build a trusted
          local business that creates jobs and delivers quality work.
        </p>
      </section>

      {/* CONTACT */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Contact Us
        </h2>

        <div className="space-y-4 text-lg">
          <p>📞 076 620 8922</p>
          <p>📧 zwamashangoprojects@gmail.com</p>
          <p>📍 Nzhelele, Vhembe District, Limpopo</p>
        </div>

        <p className="mt-10 text-gray-400">
          Company Registration: 2026/404521/07
        </p>
      </section>
    </main>
  );
}