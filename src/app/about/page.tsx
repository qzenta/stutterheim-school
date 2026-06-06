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
          To provide an inclusive, internationally-oriented education that equips every learner with the
          knowledge, values, and skills needed to thrive in a rapidly changing world.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#111480] mb-3">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          To be the leading institution in the Eastern Cape for academic excellence, character development,
          and holistic education — producing graduates who are globally competitive and community-minded.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#111480] mb-3">Our School</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Stutterheim International School is situated at 49 Louisa Street, Stutterheim, Eastern Cape.
          Under the leadership of Director Dr Suraj Haruna, the school has grown into a thriving community
          of learners and educators committed to excellence.
        </p>
        <p className="text-gray-700 leading-relaxed">
          With over 60 enrolled students, 6+ qualified teachers, and more than 20 subjects on offer,
          SIS delivers a comprehensive academic programme alongside a rich extracurricular life.
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
