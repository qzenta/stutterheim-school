import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Senior Phase (Grades 8–9) | Private School Eastern Cape",
  description:
    "Stutterheim International School Senior Phase offers Grades 8–9 with 20+ subjects, boarding facilities, and personalised support in the Eastern Cape.",
};

const subjects = [
  { group: "Languages", items: ["English Home Language", "Afrikaans FAL", "isiXhosa FAL"] },
  { group: "Mathematics", items: ["Mathematics", "Mathematical Literacy"] },
  { group: "Sciences", items: ["Natural Sciences & Technology", "Life Sciences"] },
  { group: "Commerce & Social Sciences", items: ["Economic Management Sciences", "Social Sciences"] },
  { group: "Humanities", items: ["Geography", "History", "Consumer Studies"] },
  { group: "Arts & Technology", items: ["Creative Arts", "Technology", "Computer Literacy"] },
];

const highlights = [
  { icon: "📖", stat: "20+", label: "Subjects offered" },
  { icon: "🏠", stat: "Boarding", label: "Residential facility" },
  { icon: "👨‍🏫", stat: "6+", label: "Qualified educators" },
  { icon: "🎯", stat: "Gr 8–9", label: "Senior Phase" },
];

export default function HighSchoolPage() {
  return (
    <>
      {/* Hero header */}
      <div
        className="relative text-white pt-24 pb-20 px-4"
        style={{
          backgroundImage: `url(/extra-images/banner4.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0C0E6B]/80" />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-blue-200 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Senior Phase
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Senior Phase</h1>
            <p className="text-xl font-light text-blue-100 mb-2">Grades 8 – 9</p>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
              Building strong academic foundations and equipping learners with the skills and confidence
              for the next stage of their education journey.
            </p>
            <div className="mt-6 w-16 h-1 bg-white/40 mx-auto rounded" />
          </FadeIn>
        </div>
      </div>

      {/* Stats strip */}
      <section className="bg-[#0C0E6B] py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {highlights.map((h) => (
            <div key={h.label}>
              <p className="text-2xl mb-1">{h.icon}</p>
              <p className="text-white font-bold text-lg">{h.stat}</p>
              <p className="text-blue-300 text-xs">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subject groups */}
      <section className="py-16 px-4 bg-[#E8EAEE]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-10">
            <p className="text-blue-500 text-xs font-semibold uppercase tracking-[0.2em] mb-2">CAPS Curriculum</p>
            <h2 className="text-2xl font-bold text-[#0C0E6B]">Subjects by Group</h2>
            <div className="mt-3 w-12 h-1 bg-[#0C0E6B] mx-auto rounded" />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {subjects.map((g, i) => (
              <FadeIn key={g.group} delay={i * 80}>
                <div className="bg-white rounded-xl p-5 border border-gray-100">
                  <h3 className="font-bold text-[#0C0E6B] text-sm mb-3 border-b border-gray-200 pb-2">{g.group}</h3>
                  <ul className="space-y-1.5">
                    {g.items.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-6 text-center">
            <Link href="/subjects" className="text-sm font-semibold text-[#0C0E6B] hover:underline">
              View full subjects list →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Boarding callout */}
      <section className="py-16 px-4 bg-[#E8EAEE]">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/extra-images/banner2.jpg"
                alt="SIS learners on school activity"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-blue-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">Boarding Facility</p>
              <h2 className="text-2xl font-bold text-[#0C0E6B] mb-4">Live, Learn &amp; Grow</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Our boarding facility provides a safe and structured residential environment for learners
                who travel from outside Stutterheim. Supervised study sessions, meals, and monitored
                recreation ensure a balanced lifestyle.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Early booking is strongly advised — boarding spaces fill quickly each year.
              </p>
              <Link href="/admissions" className="px-6 py-3 bg-[#0C0E6B] text-white font-bold rounded-lg hover:bg-blue-900 transition-colors text-sm inline-block">
                Book a Boarding Space
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Future Facilities */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-10">
            <p className="text-blue-500 text-xs font-semibold uppercase tracking-[0.2em] mb-2">On the Horizon</p>
            <h2 className="text-2xl font-bold text-[#0C0E6B]">Future Facilities</h2>
            <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
              We are committed to continuously upgrading our learning environment. The facilities below are
              planned and in progress — watch this space.
            </p>
            <div className="mt-3 w-12 h-1 bg-[#0C0E6B] mx-auto rounded" />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FadeIn delay={80}>
              <div className="bg-[#E8EAEE] rounded-xl p-6 flex gap-4 items-start border border-blue-100">
                <div className="w-12 h-12 rounded-lg bg-[#0C0E6B]/10 flex items-center justify-center shrink-0 text-2xl">🔬</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-[#0C0E6B] text-sm">Science Laboratory</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wide bg-[#0C0E6B] text-white px-2 py-0.5 rounded-full">Coming Soon</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A fully equipped science lab is being developed to support hands-on experiments across
                    Natural Sciences, Life Sciences, and Physical Sciences. Learners will soon have access
                    to a dedicated space for practical, inquiry-based learning.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={160}>
              <div className="bg-[#E8EAEE] rounded-xl p-6 flex gap-4 items-start border border-blue-100">
                <div className="w-12 h-12 rounded-lg bg-[#0C0E6B]/10 flex items-center justify-center shrink-0 text-2xl">💻</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-[#0C0E6B] text-sm">Computer Lab</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wide bg-[#0C0E6B] text-white px-2 py-0.5 rounded-full">Coming Soon</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A dedicated Computer Literacy and Information Technology lab is planned to give every
                    learner structured access to digital tools, internet research, and coding fundamentals —
                    preparing them for the digital world ahead.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0C0E6B] py-14 px-4">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Enrol for 2027</h2>
          <p className="text-blue-200 text-sm mb-6">2027 enrolments open. Day scholar and boarding options available.</p>
          <div className="flex gap-3 justify-center">
            <Link href="/admissions" className="inline-block px-8 py-3 bg-white text-[#0C0E6B] font-bold rounded-lg hover:bg-blue-50 transition-colors text-sm">
              Apply Now
            </Link>
            <Link href="/contact" className="inline-block px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm">
              Enquire
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
