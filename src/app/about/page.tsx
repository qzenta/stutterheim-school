import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About Us | Stutterheim International School",
  description: "Learn about our mission, vision, history, leadership, and boarding facilities at Stutterheim International School.",
};

const BASE = "https://www.stutterheimschool.co.za/extra-images";

const galleryImages = [
  { src: `${BASE}/banner1.jpg`, alt: "SIS learners in maroon uniform on campus steps" },
  { src: `${BASE}/banner2.jpg`, alt: "Learners and teacher on outdoor school activity" },
  { src: `${BASE}/banner4.jpg`, alt: "Learner focused at school desk" },
  { src: `${BASE}/banner3.jpg`, alt: "Young children learning with technology" },
  { src: `${BASE}/banner5.jpg`, alt: "Learner ready for school" },
];

const values = [
  { icon: "🎯", title: "Academic Excellence", desc: "High standards across all grades, from Grade R to Grade 12." },
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
        <div className="absolute inset-0 bg-[#111480]/80" />
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

      {/* Mission + Vision */}
      <section className="py-16 px-4 bg-white" id="mission">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0}>
              <div className="bg-[#F7F8FA] rounded-2xl p-8 h-full">
                <div className="w-10 h-10 bg-[#111480] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <h2 className="text-xl font-bold text-[#111480] mb-3">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed text-sm">
                  To provide a safe and conducive environment where everyone is valued and respected.
                  All staff members, in partnership with parents and families, are fully committed
                  to learner attainment and success.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="bg-[#111480] rounded-2xl p-8 h-full">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-3">Our Vision</h2>
                <p className="text-blue-200 leading-relaxed text-sm">
                  To empower learners to acquire, demonstrate, and articulate knowledge, attitude
                  and skills that will support them as life-long and global learners, and enable
                  them to contribute to a non-racial world.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Story + images */}
      <section className="py-16 px-4 bg-[#F7F8FA]" id="story">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-blue-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">Our Story</p>
              <h2 className="text-2xl font-bold text-[#111480] mb-5">Building Leaders in the Eastern Cape</h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                Stutterheim International School is situated at 49 Louisa Street, Stutterheim, Eastern Cape.
                Under the visionary leadership of Director Dr Suraj Haruna, the school has grown into a
                thriving community of learners and educators committed to excellence.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                With over 60 enrolled students, 6+ qualified teachers, and more than 20 subjects on offer,
                SIS delivers a comprehensive academic programme across Pre-School, Primary School and High School —
                all under one roof.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Beyond the classroom, learners enjoy a rich extracurricular life including ballet, swimming,
                sports, community outreach, and academic achievement programmes designed to develop the whole child.
              </p>
              <div className="mt-6 flex gap-3">
                <Link href="/staff" className="text-sm font-semibold text-[#111480] border border-[#111480] px-5 py-2.5 rounded-lg hover:bg-[#111480] hover:text-white transition-colors">
                  Meet Our Staff
                </Link>
                <Link href="/admissions" className="text-sm font-semibold bg-[#111480] text-white px-5 py-2.5 rounded-lg hover:bg-blue-900 transition-colors">
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#111480]">What We Stand For</h2>
            <div className="mt-3 w-12 h-1 bg-[#111480] mx-auto rounded" />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 80}>
                <div className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                  <p className="text-3xl mb-3">{v.icon}</p>
                  <h3 className="font-bold text-[#111480] text-sm mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* More photos */}
      <section className="py-12 px-4 bg-[#F7F8FA]">
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

      {/* Leadership */}
      <section className="py-16 px-4 bg-white" id="leadership">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#111480]">School Leadership</h2>
            <div className="mt-3 w-12 h-1 bg-[#111480] mx-auto rounded" />
          </FadeIn>
          <FadeIn>
            <div className="bg-[#F7F8FA] rounded-2xl p-8 flex flex-col sm:flex-row gap-8 items-start">
              {/* Headshot placeholder */}
              <div className="w-28 h-28 rounded-full bg-[#111480]/10 border-4 border-[#111480]/20 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                <span className="text-3xl font-bold text-[#111480]">S</span>
              </div>
              <div>
                <p className="text-blue-500 text-xs font-semibold uppercase tracking-[0.15em] mb-1">Director &amp; Principal</p>
                <h3 className="text-xl font-bold text-[#111480] mb-3">Dr Suraj Haruna</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Dr Suraj Haruna is the founding Director and Principal of Stutterheim International School.
                  His leadership has shaped SIS into a centre of academic excellence in the Eastern Cape,
                  committed to the holistic development of every learner.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Under his guidance, the school has expanded its curriculum offering, established boarding
                  facilities, and built a culture of achievement and community service.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Boarding */}
      <section className="bg-[#111480] py-14 px-4">
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
                className="inline-block px-6 py-3 bg-white text-[#111480] font-bold rounded-lg text-sm hover:bg-blue-50 transition-colors"
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
