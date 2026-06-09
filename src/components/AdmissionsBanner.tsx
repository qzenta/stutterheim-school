"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

const messages = [
  "🎓  Now Open: Admissions for 2027 — Limited spaces available.",
  "🏠  Boarding Facility Available — Secure your space early.",
  "📚  Pre-School · Primary School · Senior Phase — All under one roof.",
  "📞  Call us: (067) 397-7613 · sis@stutterheimschool.co.za",
  "🏅  20+ Subjects · 60+ Enrolled Learners · 6+ Qualified Teachers.",
];

// Duplicate messages for seamless looping
const ticker = [...messages, ...messages];

export default function AdmissionsBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("sis-banner-dismissed-2027");
    if (!dismissed) setVisible(true);
  }, []);

  const dismiss = () => {
    localStorage.setItem("sis-banner-dismissed-2027", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="bg-[#0C0E6B] text-white overflow-hidden relative" style={{ height: "36px" }}>
      {/* Scrolling ticker */}
      <div className="flex items-center h-full">
        <div className="animate-marquee flex whitespace-nowrap will-change-transform">
          {ticker.map((msg, i) => (
            <span key={i} className="inline-flex items-center text-xs font-medium px-8">
              {msg}
              <span className="mx-6 text-white/30">|</span>
            </span>
          ))}
        </div>
      </div>

      {/* Dismiss button — absolute right */}
      <button
        onClick={dismiss}
        aria-label="Dismiss banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/60 hover:text-white transition-colors z-10 bg-[#0C0E6B]"
      >
        <X size={13} />
      </button>
    </div>
  );
}
