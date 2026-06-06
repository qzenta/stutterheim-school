import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Gallery | Stutterheim International School",
  description: "Photos from events, activities, and life at Stutterheim International School — ballet, swimming, sports, academics and more.",
};

const BASE = "https://www.stutterheimschool.co.za/extra-images";

const categories = ["All", "Campus Life", "Sports & Activities", "Events", "Academics"] as const;
type Category = (typeof categories)[number];

const images: { src: string; alt: string; category: Category }[] = [
  // Campus / Learners
  { src: `${BASE}/banner1.jpg`, alt: "SIS learners in maroon uniform on campus steps", category: "Campus Life" },
  { src: `${BASE}/banner2.jpg`, alt: "Learners and teacher on outdoor school activity", category: "Campus Life" },
  { src: `${BASE}/banner4.jpg`, alt: "Learner focused at school desk", category: "Academics" },
  { src: `${BASE}/banner3.jpg`, alt: "Young children learning with technology", category: "Academics" },
  { src: `${BASE}/banner5.jpg`, alt: "Learner ready for school", category: "Campus Life" },
  { src: `${BASE}/about-us.jpg`, alt: "About Stutterheim International School", category: "Campus Life" },
  { src: `${BASE}/campus-history.jpg`, alt: "SIS campus", category: "Campus Life" },
  { src: `${BASE}/mission.jpg`, alt: "School mission in action", category: "Campus Life" },

  // Gallery set
  { src: `${BASE}/gallery-01.jpg`, alt: "School gallery — life at SIS", category: "Campus Life" },
  { src: `${BASE}/gallery-02.jpg`, alt: "School gallery — activities", category: "Campus Life" },
  { src: `${BASE}/gallery-03.jpg`, alt: "School gallery — learners", category: "Campus Life" },
  { src: `${BASE}/gallery-04.jpg`, alt: "School gallery — events", category: "Events" },
  { src: `${BASE}/gallery-05.jpg`, alt: "School gallery — sports", category: "Sports & Activities" },
  { src: `${BASE}/gallery-06.jpg`, alt: "School gallery — academics", category: "Academics" },
  { src: `${BASE}/gallery-07.jpg`, alt: "School gallery — school life", category: "Campus Life" },

  // Sports & Activities
  { src: `${BASE}/swimming.jpg`, alt: "SIS swimming programme", category: "Sports & Activities" },
  { src: `${BASE}/ballet.jpg`, alt: "Ballet programme at SIS", category: "Sports & Activities" },
  { src: `${BASE}/ballet 2.webp`, alt: "Ballet performance by SIS learners", category: "Sports & Activities" },
  { src: `${BASE}/Racing.jpg`, alt: "SIS learners at racing event", category: "Sports & Activities" },
  { src: `${BASE}/Tournament.jpg`, alt: "SIS sports tournament", category: "Sports & Activities" },
  { src: `${BASE}/Field day.webp`, alt: "SIS field day activities", category: "Sports & Activities" },
  { src: `${BASE}/theatre.webp`, alt: "Theatre and performing arts at SIS", category: "Sports & Activities" },

  // Events & Trips
  { src: `${BASE}/Field trip.jpg`, alt: "SIS learners on field trip", category: "Events" },
  { src: `${BASE}/Camping.webp`, alt: "SIS camping and outdoor experience", category: "Events" },
  { src: `${BASE}/Book Fair.jpg`, alt: "Annual book fair at SIS", category: "Events" },
  { src: `${BASE}/Make a Difference.jpg`, alt: "SIS community outreach programme", category: "Events" },
  { src: `${BASE}/event1.jpg`, alt: "School event 1", category: "Events" },
  { src: `${BASE}/event2.jpg`, alt: "School event 2", category: "Events" },
  { src: `${BASE}/event3.jpg`, alt: "School event 3", category: "Events" },
  { src: `${BASE}/event4.jpg`, alt: "School event 4", category: "Events" },

  // Academics
  { src: `${BASE}/learning arts.jpg`, alt: "Creative arts and learning", category: "Academics" },
  { src: `${BASE}/lerning eng.jpg`, alt: "English language learning", category: "Academics" },
  { src: `${BASE}/learnig math.webp`, alt: "Mathematics in the classroom", category: "Academics" },
  { src: `${BASE}/learnig science.avif`, alt: "Science lessons at SIS", category: "Academics" },
  { src: `${BASE}/learning afr.webp`, alt: "Afrikaans language learning", category: "Academics" },
  { src: `${BASE}/learnig tech.avif`, alt: "Technology and digital learning", category: "Academics" },
];

export default function GalleryPage() {
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
        <div className="absolute inset-0 bg-[#111480]/80" />
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
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3" style={{ gridAutoRows: "200px" }}>
              {/* Large featured */}
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
                <img src={`${BASE}/Field trip.jpg`} alt="SIS field trip" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="rounded-xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${BASE}/banner2.jpg`} alt="Learners on activity" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Full gallery grid */}
      <section className="pb-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-8">
            <h2 className="text-xl font-bold text-[#111480]">All Photos</h2>
            <div className="mt-2 w-10 h-1 bg-[#111480] rounded" />
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {images.map((img, i) => (
              <FadeIn key={`${img.src}-${i}`} delay={i * 30}>
                <div className="aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111480] py-14 px-4">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Want to See More?</h2>
          <p className="text-blue-200 text-sm mb-6">Visit us or contact us to arrange a school tour.</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-[#111480] font-bold rounded-lg hover:bg-blue-50 transition-colors text-sm">
            Book a Tour
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
