import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "High School (Grades 8–12) | Stutterheim International School",
  description: "SIS High School offers Grades 8–12 with 20+ subjects, matric preparation, and boarding facilities in Stutterheim, Eastern Cape.",
};

const subjects = [
  { group: "Languages", items: ["English Home Language", "Afrikaans FAL", "isiXhosa FAL"] },
  { group: "Mathematics", items: ["Mathematics", "Mathematical Literacy"] },
  { group: "Sciences", items: ["Physical Sciences", "Life Sciences", "Agricultural Sciences"] },
  { group: "Commerce", items: ["Accounting", "Business Studies", "Economics"] },
  { group: "Humanities", items: ["Geography", "History", "Tourism", "Consumer Studies"] },
  { group: "Technology", items: ["Computer Applications Technology", "Information Technology"] },
];

const highlights = [
  { icon: "🎓", stat: "100%", label: "Matric pass rate target" },
  { icon: "📖", stat: "20+", label: "Subjects offered" },
  { icon: "🏠", stat: "Boarding", label: "Residential facility" },
  { icon: "👨‍🏫", stat: "6+", label: "Qualified educators" },
];

export default function HighSchoolPage() {
  return (
    <>
      {/* Hero header */}
      <div
        className="relative text-white pt-24 pb-20 px-4"
        style={{
          backgroundImage: `url(https://www.stutterheimschool.co.za/extra-images/banner4.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#111480]/80" />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-blue-200 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              FET Phase
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">High School</h1>
            <p className="text-xl font-light text-blue-100 mb-2">Grades 8 – 12</p>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
              Preparing learners for matric, tertiary education and life beyond school with rigour and purpose.
            </p>
            <div className="mt-6 w-16 h-1 bg-white/40 mx-auto rounded" />
          </FadeIn>
        </div>
      </div>

      {/* Stats strip */}
      <section className="bg-[#111480] py-8 px-4">
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-10">
            <p className="text-blue-500 text-xs font-semibold uppercase tracking-[0.2em] mb-2">CAPS Curriculum</p>
            <h2 className="text-2xl font-bold text-[#111480]">Subjects by Group</h2>
            <div className="mt-3 w-12 h-1 bg-[#111480] mx-auto rounded" />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {subjects.map((g, i) => (
              <FadeIn key={g.group} delay={i * 80}>
                <div className="bg-[#F7F8FA] rounded-xl p-5 border border-gray-100">
                  <h3 className="font-bold text-[#111480] text-sm mb-3 border-b border-gray-200 pb-2">{g.group}</h3>
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
            <Link href="/subjects" className="text-sm font-semibold text-[#111480] hover:underline">
              View full subjects list →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Boarding callout */}
      <section className="py-16 px-4 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.stutterheimschool.co.za/extra-images/banner2.jpg"
                alt="SIS learners on school activity"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-blue-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">Boarding Facility</p>
              <h2 className="text-2xl font-bold text-[#111480] mb-4">Live, Learn &amp; Grow</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Our boarding facility provides a safe and structured residential environment for learners
                who travel from outside Stutterheim. Supervised study sessions, meals, and monitored
                recreation ensure a balanced lifestyle.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Early booking is strongly advised — boarding spaces fill quickly each year.
              </p>
              <Link href="/admissions" className="px-6 py-3 bg-[#111480] text-white font-bold rounded-lg hover:bg-blue-900 transition-colors text-sm inline-block">
                Book a Boarding Space
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111480] py-14 px-4">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready for High School?</h2>
          <p className="text-blue-200 text-sm mb-6">2027 enrolments open. Day scholar and boarding options available.</p>
          <div className="flex gap-3 justify-center">
            <Link href="/admissions" className="inline-block px-8 py-3 bg-white text-[#111480] font-bold rounded-lg hover:bg-blue-50 transition-colors text-sm">
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
