import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Primary School (Grades 1–7) | Stutterheim International School",
  description: "SIS Primary School offers Grades 1–7 with a balanced curriculum covering all core subjects, arts, and sports in Stutterheim, Eastern Cape.",
};

const subjects = [
  "English Home Language", "Afrikaans First Additional Language", "isiXhosa",
  "Mathematics", "Natural Sciences & Technology", "Social Sciences",
  "Life Skills", "Creative Arts", "Economic & Management Sciences",
];

const phases = [
  {
    phase: "Foundation Phase",
    grades: "Grades 1–3",
    focus: "Literacy, numeracy, and life skills through guided discovery and play-based learning.",
    color: "bg-blue-50 border-blue-200",
  },
  {
    phase: "Intermediate Phase",
    grades: "Grades 4–6",
    focus: "Broadening subject knowledge, critical thinking, and independent study habits.",
    color: "bg-indigo-50 border-indigo-200",
  },
  {
    phase: "Senior Phase",
    grades: "Grade 7",
    focus: "Transition preparation: deeper subject work and study skills for high school.",
    color: "bg-navy-50 border-[#0C0E6B]/20",
  },
];

export default function PrimarySchoolPage() {
  return (
    <>
      {/* Hero header */}
      <div
        className="relative text-white pt-24 pb-20 px-4"
        style={{
          backgroundImage: `url(/extra-images/banner1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-[#0C0E6B]/80" />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-blue-200 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Intermediate &amp; Senior Phase
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Primary School</h1>
            <p className="text-xl font-light text-blue-100 mb-2">Grades 1 – 7</p>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
              Building knowledge, character and confidence across Foundation, Intermediate and Senior phases.
            </p>
            <div className="mt-6 w-16 h-1 bg-white/40 mx-auto rounded" />
          </FadeIn>
        </div>
      </div>

      {/* Phases */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#0C0E6B]">Three Distinct Learning Phases</h2>
            <div className="mt-3 w-12 h-1 bg-[#0C0E6B] mx-auto rounded" />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {phases.map((p, i) => (
              <FadeIn key={p.phase} delay={i * 100}>
                <div className={`rounded-xl p-6 border ${p.color}`}>
                  <p className="text-[#0C0E6B] font-bold text-sm mb-1">{p.phase}</p>
                  <p className="text-xs text-blue-500 font-semibold mb-3">{p.grades}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.focus}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects + image */}
      <section className="py-16 px-4 bg-[#F5F6F8]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">Curriculum</p>
              <h2 className="text-2xl font-bold text-[#0C0E6B] mb-6">Subjects Offered</h2>
              <ul className="grid grid-cols-1 gap-2">
                {subjects.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0C0E6B] shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="/subjects" className="text-sm font-semibold text-[#0C0E6B] hover:underline">
                  View all subjects →
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/extra-images/banner1.jpg"
                alt="Primary school learners at SIS"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0C0E6B] py-14 px-4">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Give Your Child the Best Foundation</h2>
          <p className="text-blue-200 text-sm mb-6">2027 enrolments now open. Limited places in each grade.</p>
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
