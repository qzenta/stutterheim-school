"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const BASE = "/extra-images";

const categories = [
  "All",
  "Beauty Contest 2026",
  "Sports & Activities",
  "Campus Life",
  "Events",
  "Academics",
] as const;
type Category = (typeof categories)[number];

interface GalleryImage {
  src: string;
  label: string;
  category: Category;
}

const images: GalleryImage[] = [
  // ── Beauty Contest 2026 ──────────────────────────────────────────────────
  { src: `${BASE}/beauty-contest-20260606-1.jpeg`, label: "Beauty Contest 2026", category: "Beauty Contest 2026" },
  { src: `${BASE}/beauty-contest-20260606-2.jpeg`, label: "Beauty Contest 2026", category: "Beauty Contest 2026" },
  { src: `${BASE}/beauty-contest-20260606-3.jpeg`, label: "Beauty Contest 2026", category: "Beauty Contest 2026" },
  { src: `${BASE}/beauty-contest-20260606-4.jpeg`, label: "Beauty Contest 2026", category: "Beauty Contest 2026" },
  { src: `${BASE}/beauty-contest-20260606-5.jpeg`, label: "Beauty Contest 2026", category: "Beauty Contest 2026" },
  { src: `${BASE}/beauty-contest-20260606-6.jpeg`, label: "Beauty Contest 2026", category: "Beauty Contest 2026" },
  { src: `${BASE}/beauty-contest-20260606-7.jpeg`, label: "Beauty Contest 2026", category: "Beauty Contest 2026" },
  { src: `${BASE}/beauty-contest-20260606-8.jpeg`, label: "Beauty Contest 2026", category: "Beauty Contest 2026" },
  { src: `${BASE}/beauty-contest-20260606-9.jpeg`, label: "Beauty Contest 2026", category: "Beauty Contest 2026" },

  // ── Sports & Activities ──────────────────────────────────────────────────
  { src: `${BASE}/swimming.jpg`,    label: "Swimming Programme",          category: "Sports & Activities" },
  { src: `${BASE}/ballet.jpg`,      label: "Ballet — SIS Dancers",        category: "Sports & Activities" },
  { src: `${BASE}/ballet-2.webp`,   label: "Ballet Performance",          category: "Sports & Activities" },
  { src: `${BASE}/Racing.jpg`,      label: "Racing Day",                  category: "Sports & Activities" },
  { src: `${BASE}/Tournament.jpg`,  label: "Sports Tournament",           category: "Sports & Activities" },
  { src: `${BASE}/field-day.webp`,  label: "Field Day Activities",        category: "Sports & Activities" },
  { src: `${BASE}/theatre.webp`,    label: "Performing Arts & Theatre",   category: "Sports & Activities" },

  // ── Campus Life ──────────────────────────────────────────────────────────
  { src: `${BASE}/banner1.jpg`,       label: "Learners on Campus",          category: "Campus Life" },
  { src: `${BASE}/banner2.jpg`,       label: "Outdoor School Activity",     category: "Campus Life" },
  { src: `${BASE}/banner5.jpg`,       label: "School Life at SIS",          category: "Campus Life" },
  { src: `${BASE}/about-us.jpg`,      label: "Our School Community",        category: "Campus Life" },
  { src: `${BASE}/campus-history.jpg`,label: "SIS Campus",                  category: "Campus Life" },
  { src: `${BASE}/mission.jpg`,       label: "Living Our Mission",          category: "Campus Life" },
  { src: `${BASE}/gallery-01.jpg`,    label: "Daily Life at SIS",           category: "Campus Life" },
  { src: `${BASE}/gallery-02.jpg`,    label: "Learners at Work",            category: "Campus Life" },
  { src: `${BASE}/gallery-03.jpg`,    label: "Together We Learn",           category: "Campus Life" },
  { src: `${BASE}/gallery-07.jpg`,    label: "School Spirit",               category: "Campus Life" },

  // ── Events ───────────────────────────────────────────────────────────────
  { src: `${BASE}/field-trip.jpg`,       label: "Educational Field Trip",    category: "Events" },
  { src: `${BASE}/Camping.webp`,         label: "Camping & Outdoor Experience", category: "Events" },
  { src: `${BASE}/book-fair.jpg`,        label: "Annual Book Fair",          category: "Events" },
  { src: `${BASE}/make-a-difference.jpg`,label: "Community Outreach Day",    category: "Events" },
  { src: `${BASE}/table-mount.jpg`,      label: "Table Mountain Excursion",  category: "Events" },
  { src: `${BASE}/gallery-04.jpg`,       label: "School Event Highlights",   category: "Events" },
  { src: `${BASE}/event1.jpg`,           label: "School Event",              category: "Events" },
  { src: `${BASE}/event2.jpg`,           label: "School Event",              category: "Events" },
  { src: `${BASE}/event3.jpg`,           label: "School Event",              category: "Events" },
  { src: `${BASE}/event4.jpg`,           label: "School Event",              category: "Events" },

  // ── Academics ────────────────────────────────────────────────────────────
  { src: `${BASE}/banner3.jpg`,       label: "Young Learners with Technology", category: "Academics" },
  { src: `${BASE}/banner4.jpg`,       label: "Focused Learning",               category: "Academics" },
  { src: `${BASE}/gallery-05.jpg`,    label: "Sports on the Fields",           category: "Sports & Activities" },
  { src: `${BASE}/gallery-06.jpg`,    label: "Classroom Engagement",           category: "Academics" },
  { src: `${BASE}/learning-arts.jpg`, label: "Creative Arts",                  category: "Academics" },
  { src: `${BASE}/lerning-eng.jpg`,   label: "English Language Learning",      category: "Academics" },
  { src: `${BASE}/learnig-math.webp`, label: "Mathematics in Action",          category: "Academics" },
  { src: `${BASE}/learning-afr.webp`, label: "Afrikaans in the Classroom",     category: "Academics" },
];

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? images : images.filter((img) => img.category === active);

  const beautyContestImages = images.filter((img) => img.category === "Beauty Contest 2026");

  return (
    <>
      {/* Page header */}
      <div
        className="relative text-white pt-24 pb-16 px-4"
        style={{
          backgroundImage: `url(${BASE}/gallery-01.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0C0E6B]/80" />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-blue-200 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Life at SIS
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-3">Gallery</h1>
            <p className="text-blue-200 text-base max-w-xl mx-auto leading-relaxed">
              A glimpse into daily school life — from the classroom to the stage, the pool to the field.
            </p>
            <div className="mt-5 w-16 h-1 bg-white/40 mx-auto rounded" />
          </FadeIn>
        </div>
      </div>

      {/* Featured hero mosaic */}
      <section className="py-12 px-4 bg-[#E8EAEE]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3" style={{ gridAutoRows: "200px" }}>
              <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${BASE}/banner1.jpg`} alt="SIS learners on campus" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="rounded-xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${BASE}/swimming.jpg`} alt="Swimming at SIS" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="rounded-xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${BASE}/ballet.jpg`} alt="Ballet at SIS" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="rounded-xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${BASE}/beauty-contest-20260606-1.jpeg`} alt="Beauty Contest 2026" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="rounded-xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${BASE}/beauty-contest-20260606-3.jpeg`} alt="Beauty Contest 2026" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Beauty Contest 2026 — featured album */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-8">
            <p className="text-blue-500 text-xs font-semibold uppercase tracking-[0.2em] mb-2">Featured Album</p>
            <h2 className="text-2xl font-bold text-[#0C0E6B]">Beauty Contest 2026</h2>
            <p className="text-gray-500 text-sm mt-1 max-w-lg">
              Celebrating elegance, confidence, and school pride — our annual Beauty Contest brought smiles and memorable moments for everyone.
            </p>
            <div className="mt-3 w-12 h-1 bg-[#0C0E6B] rounded" />
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {beautyContestImages.map((img, i) => (
              <FadeIn key={img.src} delay={i * 40}>
                <div className="aspect-square rounded-xl overflow-hidden group relative shadow-sm hover:shadow-lg transition-shadow">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <span className="text-white text-xs font-semibold px-3 pb-3 leading-tight">{img.label}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* All photos — with filter */}
      <section className="py-14 px-4 bg-[#E8EAEE]">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-8">
            <h2 className="text-2xl font-bold text-[#0C0E6B] mb-1">All Photos</h2>
            <div className="mt-2 w-10 h-1 bg-[#0C0E6B] rounded mb-6" />

            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
                    active === cat
                      ? "bg-[#0C0E6B] text-white border-[#0C0E6B]"
                      : "bg-white text-[#0C0E6B] border-gray-200 hover:border-[#0C0E6B]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((img, i) => (
              <FadeIn key={`${img.src}-${i}`} delay={i * 25}>
                <div className="aspect-square rounded-xl overflow-hidden group relative cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Label overlay — always visible at bottom, brightens on hover */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-white text-xs font-semibold leading-tight line-clamp-2">{img.label}</span>
                    <span className="block text-white/60 text-[10px] mt-0.5">{img.category}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-16 text-sm">No photos in this category yet. Check back soon!</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0C0E6B] py-14 px-4">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Want to See More?</h2>
          <p className="text-blue-200 text-sm mb-6">Visit us or contact us to arrange a school tour.</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-[#0C0E6B] font-bold rounded-lg hover:bg-blue-50 transition-colors text-sm">
            Book a Tour
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
