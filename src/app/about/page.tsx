import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Stutterheim International School",
  description: "Learn about our mission, vision, history, and boarding facilities.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-[#111480] mb-2">About Us</h1>
      <div className="w-16 h-1 bg-[#FFD000] rounded mb-8" />

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#111480] mb-3">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to provide a safe and conducive environment where everyone is valued and
          respected. All staff members, in partnership with parents and families, are fully committed
          to learner attainment and success.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#111480] mb-3">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          Our vision is to empower learners to acquire, demonstrate, and articulate knowledge,
          attitude and skills that will support them as life-long and global learners, and enable
          them to contribute to a non-racial world.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#111480] mb-3">Our School</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Stutterheim International School is situated at 49 Louisa Street, Stutterheim, Eastern Cape.
          Under the leadership of Director Dr Suraj Haruna, the school has grown into a thriving
          community of learners and educators committed to excellence.
        </p>
        <p className="text-gray-700 leading-relaxed">
          With over 60 enrolled students, 6+ qualified teachers, and more than 20 subjects on offer,
          SIS delivers a comprehensive academic programme alongside a rich extracurricular life —
          including ballet, swimming, sports, outreach, and academic achievement programmes.
        </p>
      </section>

      <section className="bg-[#111480] text-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-3">Boarding Facility</h2>
        <p className="text-blue-200 leading-relaxed">
          SIS offers a boarding facility for learners who travel from outside Stutterheim.
          Spaces are limited — contact us early to enquire about availability for the 2027 academic year.
        </p>
      </section>
    </div>
  );
}
