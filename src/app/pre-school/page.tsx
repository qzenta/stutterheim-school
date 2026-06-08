import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Pre-School (Grade R) | Stutterheim International School",
  description: "SIS Pre-School offers a nurturing, play-based foundation phase for Grade R learners in Stutterheim, Eastern Cape.",
};

const activities = [
  { icon: "🎨", title: "Creative Arts", desc: "Drawing, painting, crafts and music to develop creativity and fine motor skills." },
  { icon: "📚", title: "Early Literacy", desc: "Phonics, storytelling and reading readiness to build strong language foundations." },
  { icon: "🔢", title: "Early Numeracy", desc: "Counting, patterns and basic maths through hands-on, playful learning." },
  { icon: "🏃", title: "Physical Play", desc: "Outdoor activities, movement games and motor skills development." },
  { icon: "🤝", title: "Social Skills", desc: "Structured group activities that build confidence, sharing and communication." },
  { icon: "🌱", title: "Life Skills", desc: "Personal hygiene, safety, emotional intelligence and self-care routines." },
];

export default function PreSchoolPage() {
  return (
    <>
      {/* Page header with real school image */}
      <div
        className="relative text-white pt-24 pb-20 px-4"
        style={{
          backgroundImage: `url(/extra-images/banner3.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0C0E6B]/80" />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-blue-200 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Foundation Phase
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Pre-School</h1>
            <p className="text-xl font-light text-blue-100 mb-2">Grade R</p>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
              Building the foundation for a lifetime of learning through play, curiosity and care.
            </p>
            <div className="mt-6 w-16 h-1 bg-white/40 mx-auto rounded" />
          </FadeIn>
        </div>
      </div>

      {/* Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Ages 5–6
              </p>
              <h2 className="text-3xl font-bold text-[#0C0E6B] mb-4">
                A Warm Start to School Life
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our Grade R programme provides a nurturing, play-based environment where
                young learners develop the social, emotional, and cognitive skills they need to
                thrive in primary school and beyond.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With small class sizes and qualified foundation phase educators, every child
                receives the individual attention they deserve during these critical early years.
              </p>
              <div className="mt-6 flex gap-3">
                <Link
                  href="/admissions"
                  className="px-6 py-3 bg-[#0C0E6B] text-white font-bold rounded-lg hover:bg-blue-900 transition-colors text-sm"
                >
                  Enrol Your Child
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 border border-[#0C0E6B] text-[#0C0E6B] font-semibold rounded-lg hover:bg-[#0C0E6B] hover:text-white transition-colors text-sm"
                >
                  Ask a Question
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/extra-images/banner3.jpg"
                alt="Pre-school children learning"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 px-4 bg-[#F5F6F8]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#0C0E6B]">What We Learn & Do</h2>
            <div className="mt-3 w-12 h-1 bg-[#0C0E6B] mx-auto rounded" />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {activities.map((a, i) => (
              <FadeIn key={a.title} delay={i * 80}>
                <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <p className="text-3xl mb-3">{a.icon}</p>
                  <h3 className="font-bold text-[#0C0E6B] mb-2 text-sm">{a.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0C0E6B] py-14 px-4">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Enrol?</h2>
          <p className="text-blue-200 text-sm mb-6">Applications for 2027 are now open. Spaces are limited.</p>
          <Link href="/admissions" className="inline-block px-8 py-3 bg-white text-[#0C0E6B] font-bold rounded-lg hover:bg-blue-50 transition-colors text-sm">
            Apply Now
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
