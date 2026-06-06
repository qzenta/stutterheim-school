import type { Metadata } from "next";
import { Trophy, BookOpen, Users, Star } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Achievements | Stutterheim International School",
  description:
    "Discover the academic, sporting, and community achievements of Stutterheim International School learners.",
};

const categories = [
  {
    icon: BookOpen,
    heading: "Academic Excellence",
    color: "text-blue-700",
    bgColor: "bg-blue-50",
    items: [
      {
        title: "Certificates & Academic Honours",
        desc: "Learners have consistently achieved distinction-level results across our full range of subjects. Our Grade 12 pass rate exceeds the provincial average.",
        year: "2024–2025",
      },
      {
        title: "Mathematics & Science Awards",
        desc: "Top performers recognised at regional level for exceptional results in STEM subjects.",
        year: "2024",
      },
      {
        title: "Subject Distinction Awards",
        desc: "Multiple learners awarded full subject distinctions across English, Mathematics, Life Sciences, and Physical Sciences.",
        year: "2023–2025",
      },
    ],
  },
  {
    icon: Trophy,
    heading: "Sports & Recreation",
    color: "text-amber-700",
    bgColor: "bg-amber-50",
    items: [
      {
        title: "Regional Swimming Champions",
        desc: "SIS swim team placed in the top three at regional championships, with individual medals in freestyle and backstroke events.",
        year: "2024",
      },
      {
        title: "Athletics Honours",
        desc: "Learners represented the Eastern Cape region in inter-school athletics competitions.",
        year: "2023",
      },
      {
        title: "Dance & Ballet Recognition",
        desc: "Ballet students achieved examination distinctions through the Royal Academy of Dance programme.",
        year: "2024–2025",
      },
    ],
  },
  {
    icon: Users,
    heading: "Community & Culture",
    color: "text-green-700",
    bgColor: "bg-green-50",
    items: [
      {
        title: "Community Outreach Recognition",
        desc: "Our outreach team was recognised by local government for exceptional service to the Stutterheim community.",
        year: "2023–2025",
      },
      {
        title: "Cultural & Arts Showcases",
        desc: "Drama and arts learners performed at regional cultural festivals, receiving commendations for originality.",
        year: "2024",
      },
      {
        title: "Environmental Responsibility Award",
        desc: "School garden and recycling initiative recognised by the Eastern Cape Department of Environment.",
        year: "2025",
      },
    ],
  },
  {
    icon: Star,
    heading: "Leadership & Character",
    color: "text-purple-700",
    bgColor: "bg-purple-50",
    items: [
      {
        title: "Student Leadership Programme",
        desc: "SIS learners participate in structured leadership development, with student council members recognised at district level.",
        year: "2024",
      },
      {
        title: "Citizenship Awards",
        desc: "Annual awards recognising outstanding character, integrity, and contribution to school culture.",
        year: "2023–2025",
      },
    ],
  },
];

export default function AchievementsPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[#111480] text-white pt-36 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-[#FFD000] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Our Track Record
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Achievements & Honours</h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
              We take pride in the accomplishments of our learners — in the classroom, on the field,
              and in the community.
            </p>
            <div className="mt-6 w-16 h-1 bg-[#FFD000] mx-auto rounded" />
          </FadeIn>
        </div>
      </div>

      {/* Achievement categories */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        {categories.map((cat, ci) => (
          <section key={cat.heading}>
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-10 h-10 ${cat.bgColor} rounded-lg flex items-center justify-center`}>
                  <cat.icon className={`w-5 h-5 ${cat.color}`} />
                </div>
                <h2 className="text-2xl font-bold text-[#111480]">{cat.heading}</h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.items.map((item, i) => (
                <FadeIn key={item.title} delay={i * 100}>
                  <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
                    <p className="text-[#FFD000] text-xs font-semibold mb-2">{item.year}</p>
                    <h3 className="font-bold text-[#111480] mb-3 text-base">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-[#FFD000] py-16 px-4">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#111480] mb-4">
            Become Part of Our Story
          </h2>
          <p className="text-[#111480]/80 mb-8 text-base">
            Your child&apos;s achievement begins at Stutterheim International School.
          </p>
          <a
            href="/admissions"
            className="inline-block px-10 py-4 bg-[#111480] text-white font-bold rounded-lg hover:bg-blue-900 transition-all hover:scale-105 text-base"
          >
            Apply for 2027
          </a>
        </FadeIn>
      </section>
    </>
  );
}
