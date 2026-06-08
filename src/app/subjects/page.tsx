import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "All Subjects | Stutterheim International School",
  description: "Explore the 20+ subjects offered across all phases at Stutterheim International School.",
};

const BASE = "/extra-images";

const subjectGroups = [
  {
    group: "Languages",
    icon: "🗣️",
    subjects: ["English Home Language", "Afrikaans First Additional Language", "isiXhosa"],
  },
  {
    group: "Mathematics",
    icon: "🔢",
    subjects: ["Mathematics", "Mathematical Literacy"],
  },
  {
    group: "Sciences",
    icon: "🔬",
    subjects: ["Physical Sciences", "Life Sciences", "Agricultural Sciences"],
  },
  {
    group: "Social Sciences & Humanities",
    icon: "🌍",
    subjects: ["Geography", "History", "Tourism", "Life Orientation"],
  },
  {
    group: "Commerce",
    icon: "📊",
    subjects: ["Accounting", "Business Studies", "Economics", "Consumer Studies"],
  },
  {
    group: "Technology & Arts",
    icon: "💻",
    subjects: ["Information Technology", "Visual Arts", "Music", "Engineering Graphics & Design"],
  },
];

export default function SubjectsPage() {
  return (
    <>
      {/* Page banner */}
      <div
        className="relative text-white pt-24 pb-16 px-4"
        style={{
          backgroundImage: `url(${BASE}/learning-arts.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0C0E6B]/82" />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-blue-200 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              CAPS Curriculum
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-3">All Subjects</h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
              A broad curriculum of 20+ subjects across six subject groups — ensuring every learner
              can find their strengths and pursue their passions.
            </p>
            <div className="mt-5 w-16 h-1 bg-white/40 mx-auto rounded" />
          </FadeIn>
        </div>
      </div>

      {/* Subject groups */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-10">
            <p className="text-xs text-gray-400 bg-blue-50 border border-blue-100 rounded-lg px-5 py-2.5 inline-block text-sm">
              ℹ️ Subject list to be confirmed with Dr Haruna before launch. Final offering may vary by grade.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjectGroups.map((sg, i) => (
              <FadeIn key={sg.group} delay={i * 80}>
                <div className="bg-[#F5F6F8] rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#0C0E6B] rounded-lg flex items-center justify-center text-lg shrink-0">
                      {sg.icon}
                    </div>
                    <h2 className="font-bold text-[#0C0E6B] text-sm leading-tight">{sg.group}</h2>
                  </div>
                  <ul className="space-y-2">
                    {sg.subjects.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0C0E6B]/40 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Learning in action photos */}
      <section className="py-12 px-4 bg-[#F5F6F8]">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-6 text-center">
            <h2 className="text-xl font-bold text-[#0C0E6B]">Learning in Action</h2>
          </FadeIn>
          <FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { src: `${BASE}/learning-arts.jpg`, label: "Arts" },
                { src: `${BASE}/lerning-eng.jpg`, label: "English" },
                { src: `${BASE}/learnig-math.webp`, label: "Maths" },
                { src: `${BASE}/learnig-science.avif`, label: "Sciences" },
                { src: `${BASE}/learning-afr.webp`, label: "Afrikaans" },
                { src: `${BASE}/learnig-tech.avif`, label: "Technology" },
              ].map((item) => (
                <div key={item.label} className="relative rounded-xl overflow-hidden group" style={{ aspectRatio: "1" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={`${item.label} at SIS`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0C0E6B]/40" />
                  <p className="absolute bottom-2 left-0 right-0 text-center text-white text-xs font-bold">{item.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0C0E6B] py-14 px-4">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Start?</h2>
          <p className="text-blue-200 text-sm mb-6">Apply for the 2027 academic year — limited spaces available.</p>
          <div className="flex gap-3 justify-center">
            <Link href="/admissions" className="inline-block px-8 py-3 bg-white text-[#0C0E6B] font-bold rounded-lg hover:bg-blue-50 transition-colors text-sm">
              Apply Now
            </Link>
            <Link href="/contact" className="inline-block px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm">
              Ask a Question
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
