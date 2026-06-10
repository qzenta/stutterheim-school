"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const BASE = "/extra-images";

// ── Image naming convention ───────────────────────────────────────────────────
// Format: {event-slug}-{YYYYMMDD}-{n}.jpeg
// Example: athletics-day-20260610-1.jpeg
// Slug rules: lowercase, hyphens only, no spaces or underscores

const categories = [
  "All",
  "Beauty Contest 2026",
  "Athletics Day 2026",
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

  // ── Athletics Day 2026 ───────────────────────────────────────────────────
  { src: `${BASE}/athletics-day-20260610-1.jpeg`, label: "Athletics Day 2026", category: "Athletics Day 2026" },
  { src: `${BASE}/athletics-day-20260610-2.jpeg`, label: "Athletics Day 2026", category: "Athletics Day 2026" },
  { src: `${BASE}/athletics-day-20260610-3.jpeg`, label: "Athletics Day 2026", category: "Athletics Day 2026" },
  { src: `${BASE}/athletics-day-20260610-4.jpeg`, label: "Athletics Day 2026", category: "Athletics Day 2026" },
  { src: `${BASE}/athletics-day-20260610-5.jpeg`, label: "Athletics Day 2026", category: "Athletics Day 2026" },
  { src: `${BASE}/athletics-day-20260610-6.jpeg`, label: "Athletics Day 2026", category: "Athletics Day 2026" },

  // ── Sports & Activities ──────────────────────────────────────────────────
  { src: `${BASE}/swimming.jpg`,    label: "Swimming Programme",        category: "Sports & Activities" },
  { src: `${BASE}/ballet.jpg`,      label: "Ballet — SIS Dancers",      category: "Sports & Activities" },
  { src: `${BASE}/ballet-2.webp`,   label: "Ballet Performance",        category: "Sports & Activities" },
  { src: `${BASE}/Racing.jpg`,      label: "Racing Day",                category: "Sports & Activities" },
  { src: `${BASE}/Tournament.jpg`,  label: "Sports Tournament",         category: "Sports & Activities" },
  { src: `${BASE}/field-day.webp`,  label: "Field Day Activities",      category: "Sports & Activities" },
  { src: `${BASE}/theatre.webp`,    label: "Performing Arts & Theatre", category: "Sports & Activities" },

  // ── Campus Life ──────────────────────────────────────────────────────────
  { src: `${BASE}/banner1.jpg`,             label: "Learners on Campus",        category: "Campus Life" },
  { src: `${BASE}/banner2.jpg`,             label: "Outdoor School Activity",   category: "Campus Life" },
  { src: `${BASE}/banner5.jpg`,             label: "School Life at SIS",        category: "Campus Life" },
  { src: `${BASE}/about-us.jpg`,            label: "Our School Community",      category: "Campus Life" },
  { src: `${BASE}/gallery-01.jpg`,          label: "Daily Life at SIS",         category: "Campus Life" },
  { src: `${BASE}/gallery-02.jpg`,          label: "Learners at Work",          category: "Campus Life" },
  { src: `${BASE}/gallery-03.jpg`,          label: "Together We Learn",         category: "Campus Life" },
  { src: `${BASE}/gallery-07.jpg`,          label: "School Spirit",             category: "Campus Life" },
  { src: `${BASE}/grade-r-20260610-1.jpeg`, label: "Grade R — Foundation Phase",category: "Campus Life" },
  { src: `${BASE}/grade-r-20260610-2.jpeg`, label: "Grade R — Foundation Phase",category: "Campus Life" },
  { src: `${BASE}/free-play-20260610-1.jpeg`, label: "Free Play & Exploration", category: "Campus Life" },
  { src: `${BASE}/free-play-20260610-2.jpeg`, label: "Free Play & Exploration", category: "Campus Life" },
  { src: `${BASE}/free-play-20260610-3.jpeg`, label: "Free Play & Exploration", category: "Campus Life" },
  { src: `${BASE}/free-play-20260610-4.jpeg`, label: "Free Play & Exploration", category: "Campus Life" },
  { src: `${BASE}/free-play-20260610-5.jpeg`, label: "Free Play & Exploration", category: "Campus Life" },

  // ── Events ───────────────────────────────────────────────────────────────
  { src: `${BASE}/school-opening-20260610-1.jpeg`,  label: "School Opening 2026",         category: "Events" },
  { src: `${BASE}/school-opening-20260610-2.jpeg`,  label: "School Opening 2026",         category: "Events" },
  { src: `${BASE}/building-project-20260610-1.jpeg`,label: "School Building Project",     category: "Events" },
  { src: `${BASE}/building-project-20260610-2.jpeg`,label: "School Building Project",     category: "Events" },
  { src: `${BASE}/building-project-20260610-3.jpeg`,label: "School Building Project",     category: "Events" },
  { src: `${BASE}/building-project-20260610-4.jpeg`,label: "School Building Project",     category: "Events" },
  { src: `${BASE}/valentines-day-20260610-1.jpeg`,  label: "Valentine's Day",             category: "Events" },
  { src: `${BASE}/valentines-day-20260610-2.jpeg`,  label: "Valentine's Day",             category: "Events" },
  { src: `${BASE}/valentines-day-20260610-3.jpeg`,  label: "Valentine's Day",             category: "Events" },
  { src: `${BASE}/no-school-bag-day-20260610-1.jpeg`,label: "No School Bag Day",          category: "Events" },
  { src: `${BASE}/no-school-bag-day-20260610-2.jpeg`,label: "No School Bag Day",          category: "Events" },
  { src: `${BASE}/no-school-bag-day-20260610-3.jpeg`,label: "No School Bag Day",          category: "Events" },
  { src: `${BASE}/flowers-day-20260610-1.jpeg`,     label: "Flowers Day",                 category: "Events" },
  { src: `${BASE}/flowers-day-20260610-2.jpeg`,     label: "Flowers Day",                 category: "Events" },
  { src: `${BASE}/flowers-day-20260610-3.jpeg`,     label: "Flowers Day",                 category: "Events" },
  { src: `${BASE}/field-trip.jpg`,                  label: "Educational Field Trip",      category: "Events" },
  { src: `${BASE}/Camping.webp`,                    label: "Camping & Outdoor Experience",category: "Events" },
  { src: `${BASE}/book-fair.jpg`,                   label: "Annual Book Fair",            category: "Events" },
  { src: `${BASE}/make-a-difference.jpg`,           label: "Community Outreach Day",      category: "Events" },
  { src: `${BASE}/table-mount.jpg`,                 label: "Table Mountain Excursion",    category: "Events" },
  { src: `${BASE}/gallery-04.jpg`,                  label: "School Event Highlights",     category: "Events" },
  { src: `${BASE}/event1.jpg`,                      label: "School Event",                category: "Events" },
  { src: `${BASE}/event2.jpg`,                      label: "School Event",                category: "Events" },
  { src: `${BASE}/event3.jpg`,                      label: "School Event",                category: "Events" },
  { src: `${BASE}/event4.jpg`,                      label: "School Event",                category: "Events" },

  // ── Academics ────────────────────────────────────────────────────────────
  { src: `${BASE}/painting-20260610-1.jpeg`, label: "Art & Painting",               category: "Academics" },
  { src: `${BASE}/painting-20260610-2.jpeg`, label: "Art & Painting",               category: "Academics" },
  { src: `${BASE}/painting-20260610-3.jpeg`, label: "Art & Painting",               category: "Academics" },
  { src: `${BASE}/banner3.jpg`,              label: "Young Learners with Technology",category: "Academics" },
  { src: `${BASE}/banner4.jpg`,              label: "Focused Learning",             category: "Academics" },
  { src: `${BASE}/gallery-05.jpg`,           label: "Sports on the Fields",         category: "Sports & Activities" },
  { src: `${BASE}/gallery-06.jpg`,           label: "Classroom Engagement",         category: "Academics" },
  { src: `${BASE}/learning-arts.jpg`,        label: "Creative Arts",                category: "Academics" },
  { src: `${BASE}/lerning-eng.jpg`,          label: "English Language Learning",    category: "Academics" },
  { src: `${BASE}/learnig-math.webp`,        label: "Mathematics in Action",        category: "Academics" },
  { src: `${BASE}/learning-afr.webp`,        label: "Afrikaans in the Classroom",   category: "Academics" },
];

// ── Featured albums shown above the main grid ────────────────────────────────
const featuredAlbums: {
  key: Category; title: string; date: string; description: string;
}[] = [
  {
    key: "Beauty Contest 2026",
    title: "Beauty Contest 2026",
    date: "6 June 2026",
    description:
      "Celebrating elegance, confidence, and school pride — our annual Beauty Contest brought smiles and memorable moments for everyone.",
  },
  {
    key: "Athletics Day 2026",
    title: "Athletics Day 2026",
    date: "10 June 2026",
    description:
      "Speed, strength, and school spirit on full display — learners gave their all on the track and field at our 2026 Athletics Day.",
  },
];

function AlbumSection({ albumKey, title, date, description }: {
  albumKey: Category; title: string; date: string; description: string;
}) {
  const albumImages = images.filter((img) => img.category === albumKey);
  return (
    <section className="py-14 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div>
            <p className="text-blue-500 text-xs font-semibold uppercase tracking-[0.2em] mb-1">Featured Album</p>
            <h2 className="text-2xl font-bold text-[#0C0E6B]">{title}</h2>
            <p className="text-gray-400 text-xs mt-1">{date}</p>
            <p className="text-gray-500 text-sm mt-2 max-w-lg">{description}</p>
            <div className="mt-3 w-12 h-1 bg-[#0C0E6B] rounded" />
          </div>
          <span className="text-xs text-gray-400 shrink-0">{albumImages.length} photos</span>
        </FadeIn>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {albumImages.map((img, i) => (
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
  );
}

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? images : images.filter((img) => img.category === active);

  return (
    <>
      {/* Page header */}
      <div
        className="relative text-white pt-24 pb-16 px-4"
        style={{
          backgroundImage: `url(${BASE}/athletics-day-20260610-1.jpeg)`,
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
              A glimpse into daily school life — from the classroom to the stage, the pool to the track.
            </p>
            <div className="mt-5 w-16 h-1 bg-white/40 mx-auto rounded" />
          </FadeIn>
        </div>
      </div>

      {/* Hero mosaic */}
      <section className="py-12 px-4 bg-[#E8EAEE]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3" style={{ gridAutoRows: "200px" }}>
              <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${BASE}/athletics-day-20260610-1.jpeg`} alt="Athletics Day 2026" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="rounded-xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${BASE}/beauty-contest-20260606-1.jpeg`} alt="Beauty Contest 2026" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="rounded-xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${BASE}/swimming.jpg`} alt="Swimming at SIS" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="rounded-xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${BASE}/free-play-20260610-1.jpeg`} alt="Free Play at SIS" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="rounded-xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${BASE}/ballet.jpg`} alt="Ballet at SIS" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured albums */}
      {featuredAlbums.map((album) => (
        <AlbumSection
          key={album.key}
          albumKey={album.key}
          title={album.title}
          date={album.date}
          description={album.description}
        />
      ))}

      {/* All photos — with filter */}
      <section className="py-14 px-4 bg-[#E8EAEE]">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-8">
            <h2 className="text-2xl font-bold text-[#0C0E6B] mb-1">All Photos</h2>
            <div className="mt-2 w-10 h-1 bg-[#0C0E6B] rounded mb-6" />
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
                  {cat !== "All" && (
                    <span className="ml-1.5 text-[10px] opacity-60">
                      ({images.filter((img) => img.category === cat).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((img, i) => (
              <FadeIn key={`${img.src}-${i}`} delay={i * 20}>
                <div className="aspect-square rounded-xl overflow-hidden group relative cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-white text-xs font-semibold leading-tight line-clamp-2">{img.label}</span>
                    <span className="block text-white/60 text-[10px] mt-0.5">{img.category}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-16 text-sm">No photos in this category yet — check back soon!</p>
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
