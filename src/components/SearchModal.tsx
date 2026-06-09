"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import Link from "next/link";

// Static site index — populated here since pagefind is only available after build.
// Once pagefind is fully integrated this can be replaced with dynamic indexing.
const pages = [
  { title: "Home", href: "/", desc: "Stutterheim International School — premium private school in the Eastern Cape." },
  { title: "About Us", href: "/about", desc: "Our mission, vision, history, and boarding facilities." },
  { title: "Admissions", href: "/admissions", desc: "Apply for 2027 — download forms, fee schedule, and application process." },
  { title: "Pre-School (Grade R)", href: "/pre-school", desc: "Foundation phase education for Grade R learners at SIS." },
  { title: "Primary School (Grades 1–7)", href: "/primary-school", desc: "Intermediate and senior phase primary education at SIS." },
  { title: "Senior Phase (Grades 8–9)", href: "/high-school", desc: "Senior Phase education (Grades 8–9) at SIS." },
  { title: "Subjects Offered", href: "/subjects", desc: "20+ subjects across all grades offered by qualified teachers." },
  { title: "Fee Structure", href: "/fees", desc: "Tuition, boarding, and co-curricular fees — download full schedule." },
  { title: "Achievements", href: "/achievements", desc: "Academic, sports, and community honours and awards." },
  { title: "Staff & Teachers", href: "/staff", desc: "Meet our qualified teaching staff and school leadership." },
  { title: "Gallery", href: "/gallery", desc: "Photos from school events, activities, and student life." },
  { title: "Events & Notices", href: "/events", desc: "Term dates, upcoming events, and school notices." },
  { title: "Contact Us", href: "/contact", desc: "Phone, email, address, and contact form for enquiries." },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SearchModal({ open, onClose }: Props) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!open) return null;

  const results = query.length < 2
    ? pages
    : pages.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.desc.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4"
      style={{ background: "rgba(0,0,0,0.6)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
          <Search size={18} className="text-gray-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, subjects, admissions..."
            className="flex-1 text-sm outline-none text-gray-800 placeholder-gray-400"
          />
          <button onClick={onClose} className="p-1 hover:text-gray-600 text-gray-400 transition-colors">
            <X size={16} />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto py-2">
          {results.length === 0 ? (
            <p className="text-center text-sm text-gray-400 py-8">No results found for &quot;{query}&quot;</p>
          ) : (
            results.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                onClick={onClose}
                className="flex flex-col px-5 py-3 hover:bg-blue-50 transition-colors group"
              >
                <span className="text-sm font-semibold text-[#0C0E6B] group-hover:text-blue-700">{p.title}</span>
                <span className="text-xs text-gray-500 mt-0.5 leading-snug">{p.desc}</span>
              </Link>
            ))
          )}
        </div>

        {query.length < 2 && (
          <div className="px-5 py-2.5 border-t border-gray-50 text-xs text-gray-400">
            Type to search across all pages
          </div>
        )}
      </div>
    </div>
  );
}
