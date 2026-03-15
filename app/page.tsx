"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Home() {

  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
      link.addEventListener("click", function (e: any) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target?.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);

  return (
    <div className="bg-white text-black">

      {/* NAVBAR */}
      <header className="sticky top-0 bg-white border-b border-gray-200 z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <div className="w-40 h-15 relative">
  <Image
    src="/logo.png"
    alt="Institute of Digital Risk"
    fill
    className="object-contain"
  />
</div>

          <div className="flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-orange-500">About</a>
            <a href="#services" className="hover:text-orange-500">Services</a>
            <a href="#community" className="hover:text-orange-500">Community</a>
            <a href="#contact" className="hover:text-orange-500">Contact</a>
          </div>

        </nav>
      </header>

      <main>

        {/* HERO SECTION */}
        <section className="bg-black text-white py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Advancing the Future of Digital Risk
            </h1>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              The Institute of Digital Risk trains and deploys professionals in
              digital, cyber and AI risk through academic collaboration and
              real-world industry practice.
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded text-white font-semibold transition">
              Explore Programs
            </button>

          </div>
        </section>


        {/* ABOUT */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

            {/* TEXT */}
            <div>
              <h2 className="text-3xl font-bold mb-6">About IDR</h2>

              <p className="text-gray-600 mb-4">
                The Institute of Digital Risk (IDR) is an industry-led training and
                deployment institute focused on preparing professionals for digital,
                cyber and technology risk roles in regulated environments.
              </p>

              <p className="text-gray-600">
                Through partnerships with leading UK universities and collaboration
                with industry, IDR combines academic insight with practical projects
                to develop the next generation of digital risk practitioners.
              </p>
            </div>

            {/* IMAGE */}
            <div className="relative flex justify-center">

              {/* Glow */}
              <div className="absolute w-72 h-72 bg-orange-400/30 blur-3xl rounded-full"></div>

              <img
                src="/risk.jpg"
                alt="Digital Risk"
                className="relative w-[350px] rounded-lg shadow-lg"
              />

            </div>

          </div>
        </section>


        {/* SERVICES */}
        <section id="services" className="bg-gray-50 py-20 px-6">
          <div className="max-w-6xl mx-auto">

            <h2 className="text-3xl font-bold text-center mb-12">
              Our Model
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3">Academy</h3>
                <p className="text-gray-600">
                  Training programs and bootcamps designed for students and
                  professionals seeking careers in cyber and digital risk.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3">
                  Innovation & Incubation
                </h3>
                <p className="text-gray-600">
                  Developing intellectual property, new digital risk models and
                  frameworks for AI governance and technology resilience.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3">
                  Advisory Services
                </h3>
                <p className="text-gray-600">
                  Helping organisations implement security and risk frameworks
                  such as NIST, ISO 27001 and NIS2.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* COMMUNITY */}
        <section id="community" className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

            {/* IMAGE */}
            <div className="relative flex justify-center">

              {/* Glow */}
              <div className="absolute w-72 h-72 bg-orange-400/30 blur-3xl rounded-full"></div>

              <img
                src="/community.jpg"
                alt="Community"
                className="relative w-[350px] rounded-lg shadow-lg"
              />

            </div>

            {/* TEXT */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Our Community
              </h2>

              <p className="text-gray-600">
                IDR supports a growing community of students, early-career
                professionals and practitioners working in sectors such as
                financial services, technology and critical infrastructure.
                Through training and collaboration, the institute helps
                professionals upskill in digital and cyber risk to meet the
                demands of modern organisations.
              </p>
            </div>

          </div>
        </section>


        {/* CONTACT */}
        <section id="contact" className="bg-black text-white py-20 px-6">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-3xl font-bold text-center mb-10">
              Register Your Interest
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded text-black"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded text-black"
              />

              <textarea
                placeholder="Message"
                className="w-full p-3 rounded text-black"
                rows={4}
              ></textarea>

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded w-full font-semibold transition"
              >
                Submit
              </button>

            </form>

          </div>
        </section>

      </main>


      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-500 py-6 border-t">
        © 2026 Institute of Digital Risk
      </footer>

    </div>
  );
}