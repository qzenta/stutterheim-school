"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BASE = "https://www.stutterheimschool.co.za/extra-images";

const slides = [
  {
    url: `${BASE}/banner1.jpg`,
    alt: "SIS learners in school uniform on campus steps",
  },
  {
    url: `${BASE}/banner4.jpg`,
    alt: "Young learner studying at school desk",
  },
  {
    url: `${BASE}/banner3.jpg`,
    alt: "Primary school children engaged in digital learning",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ height: "580px" }}>
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.url}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.url}
            alt={slide.alt}
            className="w-full h-full object-cover object-center"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Overlay — darkens right side for right-aligned text readability */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#111480]/90 via-[#111480]/50 to-[#111480]/10" />

      {/* Content — RIGHT aligned */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <div className="max-w-xl ml-auto text-right">
            <p className="text-blue-200 text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              Stutterheim, Eastern Cape
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 drop-shadow">
              Shaping Tomorrow&apos;s<br />Leaders Today
            </h1>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-8">
              A premier private school offering Pre-School, Primary &amp; High School
              education — academic excellence, holistic development, and boarding facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <Link
                href="/admissions"
                className="px-7 py-3.5 bg-white text-[#111480] font-bold rounded-lg hover:bg-blue-50 transition-all hover:scale-105 text-sm shadow"
              >
                Apply for 2027
              </Link>
              <Link
                href="/about"
                className="px-7 py-3.5 border-2 border-white/70 text-white font-semibold rounded-lg hover:bg-white/10 transition-all hover:scale-105 text-sm"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dot indicators — bottom right to match text alignment */}
      <div className="absolute bottom-6 left-0 right-0">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex gap-2 justify-end">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
