"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=85&fit=crop",
    alt: "Students engaged in a modern classroom",
  },
  {
    url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=85&fit=crop",
    alt: "Students collaborating and learning",
  },
  {
    url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1600&q=85&fit=crop",
    alt: "Beautiful school campus",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
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
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Overlay — navy gradient from left, lighter to let images breathe */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#111480]/85 via-[#111480]/50 to-[#111480]/10" />

      {/* Content — left-aligned, cambrilearn style */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <div className="max-w-xl">
            <p className="text-blue-200 text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              Stutterheim, Eastern Cape
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 drop-shadow">
              Shaping Tomorrow&apos;s<br />Leaders Today
            </h1>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-8">
              A premier private school offering academic excellence, holistic development,
              and boarding facilities in the Eastern Cape.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
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

      {/* Dot indicators — bottom left */}
      <div className="absolute bottom-6 left-0 right-0">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex gap-2">
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
