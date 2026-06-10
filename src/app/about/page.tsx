import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About Us | Private School Stutterheim Eastern Cape",
  description:
    "Learn about Stutterheim International School — our mission, values, history, and boarding facilities. A leading independent school in the Eastern Cape.",
};

const BASE = "/extra-images";

const galleryImages = [
  { src: `${BASE}/banner1.jpg`, alt: "SIS learners in maroon uniform on campus steps" },
  { src: `${BASE}/banner2.jpg`, alt: "Learners and teacher on outdoor school activity" },
  { src: `${BASE}/banner4.jpg`, alt: "Learner focused at school desk" },
  { src: `${BASE}/banner3.jpg`, alt: "Young children learning with technology" },
  { src: `${BASE}/banner5.jpg`, alt: "Learner ready for school" },
];

const values = [
  { icon: "🎯", title: "Academic Excellence", desc: "High standards across all grades, from Grade R to Grade 9." },
  { icon: "🤝", title: "Inclusivity", desc: "Every learner is valued, respected and empowered to succeed." },
  { icon: "🌍", title: "Global Citizenship", desc: "Preparing learners to contribute to a non-racial, global world." },
  { icon: "❤️", title: "Community", desc: "A partnership between school, parents, families and learners." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <div
        className="relative text-white pt-24 pb-20 px-4"
        style={{
          backgroundImage: `url(${BASE}/banner1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-[#0C0E6B]/80" />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-blue-200 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Stutterheim, Eastern Cape
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Our School</h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
              A premier private school committed to academic excellence, holistic development and community values.
            </p>
            <div className="mt-6 w-16 h-1 bg-white/40 mx-auto rounded" />
          </FadeIn>
        </div>
      </div>

      {/* Vision · Mission · Values — animated flip cards */}
      <section className="py-20 px-4 bg-[#E8EAEE]" id="mission">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="text-blue-500 text-xs font-semibold uppercase tracking-[0.2em] mb-2">Who We Are</p>
            <h2 className="text-3xl font-bold text-[#0C0E6B]">Vision, Mission &amp; Values</h2>
            <div className="mt-3 w-12 h-1 bg-[#0C0E6B] mx-auto rounded" />
          </FadeIn>

          <style>{`
            .flip-card { perspective: 1000px; }
            .flip-card-inner {
              position: relative;
              width: 100%;
              height: 100%;
              transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
              transform-style: preserve-3d;
            }
            .flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
            .flip-card-front, .flip-card-back {
              position: absolute;
              inset: 0;
              backface-visibility: hidden;
              -webkit-backface-visibility: hidden;
              border-radius: 1rem;
            }
            .flip-card-back { transform: rotateY(180deg); }
          `}</style>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* VISION */}
            <FadeIn delay={0}>
              <div className="flip-card h-72 cursor-pointer">
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front bg-[#0C0E6B] p-8 flex flex-col items-center justify-center text-center shadow-lg">
                    <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center mb-5">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">Our Vision</h3>
                    <p className="text-blue-300 text-xs uppercase tracking-widest">Hover to read</p>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back bg-white p-8 flex flex-col justify-center shadow-lg border border-blue-100">
                    <div className="w-10 h-1 bg-[#0C0E6B] rounded mb-5" />
                    <h3 className="text-[#0C0E6B] font-bold text-lg mb-3">Our Vision</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      To empower learners to acquire, demonstrate, and articulate the knowledge,
                      attitudes, and skills that will support them as lifelong, global learners —
                      enabling them to contribute meaningfully to a non-racial, compassionate world.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* MISSION */}
            <FadeIn delay={150}>
              <div className="flip-card h-72 cursor-pointer">
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front bg-white p-8 flex flex-col items-center justify-center text-center shadow-lg border border-blue-100">
                    <div className="w-14 h-14 rounded-full bg-[#0C0E6B]/10 flex items-center justify-center mb-5">
                      <svg className="w-7 h-7 text-[#0C0E6B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h3 className="text-[#0C0E6B] font-bold text-xl mb-2">Our Mission</h3>
                    <p className="text-gray-400 text-xs uppercase tracking-widest">Hover to read</p>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back bg-[#0C0E6B] p-8 flex flex-col justify-center shadow-lg">
                    <div className="w-10 h-1 bg-white/40 rounded mb-5" />
                    <h3 className="text-white font-bold text-lg mb-3">Our Mission</h3>
                    <p className="text-blue-200 text-sm leading-relaxed">
                      To provide a safe, nurturing, and stimulating environment where every learner
                      is valued and respected. In partnership with parents and families, our dedicated
                      staff are fully committed to learner attainment, holistic growth, and lifelong
                      success — from the very first day of school to the last.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* VALUES */}
            <FadeIn delay={300}>
              <div className="flip-card h-72 cursor-pointer">
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front bg-[#0C0E6B] p-8 flex flex-col items-center justify-center text-center shadow-lg">
                    <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center mb-5">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">Our Values</h3>
                    <p className="text-blue-300 text-xs uppercase tracking-widest">Hover to read</p>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back bg-white p-8 flex flex-col justify-center shadow-lg border border-blue-100">
                    <div className="w-10 h-1 bg-[#0C0E6B] rounded mb-4" />
                    <h3 className="text-[#0C0E6B] font-bold text-lg mb-3">Our Values</h3>
                    <ul className="space-y-1.5">
                      {[
                        ["Excellence", "We set high standards and pursue them relentlessly."],
                        ["Ubuntu", "I am because we are — community is at our core."],
                        ["Integrity", "We act with honesty, fairness, and accountability."],
                        ["Respect", "Every person is valued, regardless of background."],
                        ["Growth", "We champion curiosity, resilience, and lifelong learning."],
                      ].map(([title, desc]) => (
                        <li key={title} className="flex items-start gap-2 text-xs text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0C0E6B] mt-1.5 shrink-0" />
                          <span><strong className="text-[#0C0E6B]">{title}</strong> — {desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Our Story + images */}
      <section className="py-16 px-4 bg-[#E8EAEE]" id="story">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-blue-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">Our Story</p>
              <h2 className="text-2xl font-bold text-[#0C0E6B] mb-5">Building Leaders in the Eastern Cape</h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                Stutterheim International School is situated at 49 Louisa Street, Stutterheim, Eastern Cape.
                Stutterheim International School has grown into a
                thriving community of learners and educators committed to excellence under dedicated leadership.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                With over 60 enrolled students, 6+ qualified teachers, and more than 20 subjects on offer,
                SIS delivers a comprehensive academic programme across Pre-School, Primary School and Senior Phase —
                All under one roof.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Beyond the classroom, learners enjoy a rich extracurricular life including ballet, swimming,
                sports, community outreach, and academic achievement programmes designed to develop the whole child.
              </p>
              <div className="mt-6 flex gap-3">
                <Link href="/staff" className="text-sm font-semibold text-[#0C0E6B] border border-[#0C0E6B] px-5 py-2.5 rounded-lg hover:bg-[#0C0E6B] hover:text-white transition-colors">
                  Meet Our Staff
                </Link>
                <Link href="/admissions" className="text-sm font-semibold bg-[#0C0E6B] text-white px-5 py-2.5 rounded-lg hover:bg-blue-900 transition-colors">
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Photo grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 rounded-xl overflow-hidden aspect-video">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-[#E8EAEE]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#0C0E6B]">What We Stand For</h2>
            <div className="mt-3 w-12 h-1 bg-[#0C0E6B] mx-auto rounded" />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 80}>
                <div className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                  <p className="text-3xl mb-3">{v.icon}</p>
                  <h3 className="font-bold text-[#0C0E6B] text-sm mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* More photos */}
      <section className="py-12 px-4 bg-[#E8EAEE]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {galleryImages.slice(2).map((img, i) => (
              <div
                key={img.src}
                className={`rounded-xl overflow-hidden ${i === 0 ? "sm:col-span-2" : ""}`}
                style={{ aspectRatio: i === 0 ? "16/7" : "4/3" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Boarding */}
      <section className="bg-[#0C0E6B] py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-blue-300 text-xs font-semibold uppercase tracking-[0.2em] mb-3">Residential</p>
              <h2 className="text-2xl font-bold text-white mb-4">Boarding Facility</h2>
              <p className="text-blue-200 text-sm leading-relaxed mb-4">
                SIS offers a boarding facility for learners who travel from outside Stutterheim.
                Our boarding programme provides a structured, supportive environment with supervised
                study, meals, and monitored recreation.
              </p>
              <p className="text-blue-200 text-sm leading-relaxed mb-6">
                Spaces are limited — contact us early to enquire about availability for the 2027 academic year.
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-white text-[#0C0E6B] font-bold rounded-lg text-sm hover:bg-blue-50 transition-colors"
              >
                Enquire About Boarding
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${BASE}/banner2.jpg`}
                alt="SIS learners on school activity"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
