import Link from "next/link";

const stats = [
  { value: "20+", label: "Subjects Offered" },
  { value: "60+", label: "Students Enrolled" },
  { value: "6+", label: "Qualified Teachers" },
  { value: "2+", label: "Awards Received" },
];

const activities = [
  "Ballet Dancing",
  "Sports & Recreation",
  "Swimming Lessons",
  "Outreach Team",
  "Certificates & Academic Achievements",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111480] text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#FFD000] font-semibold text-sm uppercase tracking-widest mb-3">
            Now Open: Admissions 2027
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Academic Excellence<br />in the Eastern Cape
          </h1>
          <p className="text-blue-200 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            Stutterheim International School offers holistic education with state-of-the-art
            facilities, qualified teachers, and a boarding programme with limited spaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-[#FFD000] text-[#111480] font-bold rounded hover:bg-amber-400 transition-colors text-lg"
            >
              Apply Now
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 border border-white text-white font-semibold rounded hover:bg-white hover:text-[#111480] transition-colors text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100 py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-bold text-[#111480]">{s.value}</p>
              <p className="text-sm text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission snippet */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#111480] mb-4">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            To provide an inclusive, internationally-oriented education that equips every learner
            with the knowledge, values, and skills needed to thrive in a rapidly changing world.
          </p>
          <div className="mt-6 w-16 h-1 bg-[#FFD000] mx-auto rounded" />
        </div>
      </section>

      {/* Key pillars */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#111480] text-center mb-10">Why Choose SIS?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "Academic Excellence", desc: "Rigorous curriculum across 20+ subjects with dedicated, qualified educators." },
              { title: "State-of-the-Art Facilities", desc: "Modern classrooms, labs, and sporting infrastructure for well-rounded development." },
              { title: "Holistic Development", desc: "Ballet, swimming, outreach, and extracurricular programmes alongside academics." },
            ].map((p) => (
              <div key={p.title} className="bg-[#F7F8FA] rounded-lg p-6 border border-gray-100">
                <div className="w-10 h-1 bg-[#FFD000] rounded mb-4" />
                <h3 className="font-bold text-[#111480] mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#111480] text-center mb-8">Activities & Programmes</h2>
          <ul className="flex flex-wrap justify-center gap-3">
            {activities.map((a) => (
              <li key={a} className="bg-[#111480] text-white px-4 py-2 rounded-full text-sm font-medium">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="bg-[#111480] text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#FFD000] font-semibold text-sm uppercase tracking-widest mb-2">Limited Spaces</p>
          <h2 className="text-3xl font-bold mb-4">Boarding Facility Available</h2>
          <p className="text-blue-200 mb-8">
            We offer boarding with limited spaces. Apply early to secure a place for the 2027 academic year.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-[#FFD000] text-[#111480] font-bold rounded hover:bg-amber-400 transition-colors text-lg"
          >
            Enquire About Admissions
          </Link>
        </div>
      </section>
    </>
  );
}
