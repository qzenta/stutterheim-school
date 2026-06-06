"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80",
    alt: "Students engaged in a modern classroom",
  },
  {
    url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80",
    alt: "Students collaborating and learning together",
  },
  {
    url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&q=80",
    alt: "Beautiful school campus and grounds",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [textReady, setTextReady] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextReady(false);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length);
        setTextReady(true);
      }, 500);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background slides */}
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

      {/* Gradient overlay — dark at bottom and sides */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d4a]/90 via-[#111480]/40 to-black/30" />

      {/* Content */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4"
        style={{
          opacity: textReady ? 1 : 0,
          transform: textReady ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        <p className="text-[#FFD000] text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-4">
          Stutterheim, Eastern Cape · Est. in Excellence
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight max-w-4xl mb-6 drop-shadow-lg">
          Shaping Tomorrow&apos;s<br />Leaders Today
        </h1>
        <p className="text-blue-100 text-base sm:text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed drop-shadow">
          A premier private school offering academic excellence, holistic development,
          and boarding facilities in the Eastern Cape.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/admissions"
            className="px-8 py-4 bg-[#FFD000] text-[#111480] font-bold rounded hover:bg-amber-400 transition-all hover:scale-105 text-base shadow-lg"
          >
            Apply for 2027
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-[#111480] transition-all hover:scale-105 text-base"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2.5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-[#FFD000]" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-1 text-white/50 text-xs">
        <span>Scroll</span>
        <div className="w-px h-8 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}
