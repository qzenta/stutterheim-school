import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Leadership Team | Stutterheim International School",
  description:
    "Meet the experienced leadership team at Stutterheim International School — qualified educators committed to academic excellence and holistic learner development.",
};

const zimaseka = {
  name: "Ms Zimaseka Kalimashe",
  role: "Co-Director",
  subjects: "Physical Sciences & NSTECH",
  photo: "/extra-images/zimaseka-kalimashe.jpg",
  summary: "23 years teaching Physical Sciences & NSTECH. Physics Deputy Chief Marker and passionate STEM educator.",
  bio: [
    "Ms Kalimashe brings 23 years of dedicated teaching in Physical Sciences and Natural Sciences & Technology (NSTECH). She holds a Diploma in Education, BEd Honours, and an Advanced Certificate in Education.",
    "A distinguished marker and educator, she has served as a Physics Senior Marker for over 15 years and as Physics Deputy Chief Marker for 7+ years — demonstrating a deep commitment to assessment standards and curriculum excellence. She has also served as Departmental Head for the Intermediate Phase for 13 years, shaping both teachers and learners at a foundational level.",
    "Ms Kalimashe is focused on conceptual teaching, assessment excellence, and developing teachers and learners for STEM success.",
  ],
  credentials: [
    "Dip. Ed",
    "BEd Hons Ed",
    "Advanced Cert Ed",
    "Physics Senior Marker 15+ yrs",
    "Physics Deputy Chief Marker 7+ yrs",
    "Dept. Head (Intermediate) 13 yrs",
  ],
};

const pending = [
  {
    name: "Mdingi Vuyelwa",
    role: "Principal",
    initials: "MV",
    subjects: "School Leadership · Academic Management",
  },
  {
    name: "Amanda Salzwedel",
    role: "Assistant Principal",
    initials: "AS",
    subjects: "Curriculum Support · Learner Affairs",
  },
];

export default function LeadershipPage() {
  return (
    <>
      {/* Page banner */}
      <div
        className="relative text-white pt-24 pb-20 px-4"
        style={{
          backgroundImage: "url(/extra-images/banner3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0C0E6B]/85" />
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-blue-300 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Meet Our Team
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Leadership Team</h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
              Stutterheim International School is led by qualified, experienced educators
              with a deep commitment to academic excellence and holistic learner development.
            </p>
            <div className="mt-6 w-16 h-1 bg-white/40 mx-auto rounded" />
          </FadeIn>
        </div>
      </div>

      {/* Leadership cards */}
      <section className="py-20 px-4 bg-[#F5F6F8]">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* ── Zimaseka — full featured card ── */}
          <FadeIn>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Photo */}
                <div className="md:w-64 h-72 md:h-auto flex-shrink-0 overflow-hidden bg-[#E8E9F4]">
                  <img
                    src={zimaseka.photo}
                    alt={`${zimaseka.name} – ${zimaseka.role}`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                {/* Content */}
                <div className="p-8 flex flex-col justify-start flex-1">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-white bg-[#0C0E6B] rounded-full px-3 py-1 mb-4 self-start">
                    {zimaseka.role}
                  </span>
                  <h2 className="text-2xl font-bold text-[#0C0E6B] mb-1">{zimaseka.name}</h2>
                  <p className="text-blue-500 text-sm font-medium mb-6">{zimaseka.subjects}</p>

                  <div className="space-y-3 mb-7">
                    {zimaseka.bio.map((para, i) => (
                      <p key={i} className="text-gray-600 text-sm leading-relaxed">{para}</p>
                    ))}
                  </div>

                  {/* Credential badges */}
                  <div className="flex flex-wrap gap-2">
                    {zimaseka.credentials.map((c) => (
                      <span
                        key={c}
                        className="text-[11px] font-semibold text-[#0C0E6B] bg-[#E8E9F4] border border-[#0C0E6B]/15 rounded-full px-3 py-1"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ── Mdingi + Amanda — pending cards ── */}
          {pending.map((leader, i) => (
            <FadeIn key={leader.name} delay={i * 100}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Initials avatar */}
                  <div className="md:w-64 h-48 md:h-auto flex-shrink-0 bg-[#E8E9F4] flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-24 h-24 rounded-full bg-[#0C0E6B]/10 border-4 border-[#0C0E6B]/15 flex items-center justify-center">
                        <span className="text-3xl font-bold text-[#0C0E6B]/40">{leader.initials}</span>
                      </div>
                      <p className="text-[#0C0E6B]/30 text-xs font-medium">Photo coming soon</p>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center flex-1">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-white bg-[#0C0E6B] rounded-full px-3 py-1 mb-4 self-start">
                      {leader.role}
                    </span>
                    <h2 className="text-2xl font-bold text-[#0C0E6B] mb-1">{leader.name}</h2>
                    <p className="text-blue-500 text-sm font-medium mb-6">{leader.subjects}</p>
                    <p className="text-gray-400 text-sm italic">
                      Full biography coming soon. We look forward to introducing {leader.name.split(" ")[0]} to our school community.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}

        </div>
      </section>

      {/* CTA strip */}
      <section className="py-14 px-4 bg-[#0C0E6B] text-white text-center">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-3">Interested in joining our team?</h2>
          <p className="text-blue-200 text-sm max-w-md mx-auto mb-6">
            We are always looking for passionate, qualified educators who share our commitment
            to learner success. Get in touch with us.
          </p>
          <a
            href="mailto:sis@stutterheimschool.co.za?subject=Teaching%20Position%20Enquiry"
            className="inline-block px-8 py-3 bg-white text-[#0C0E6B] font-bold rounded-lg hover:bg-blue-50 transition-colors text-sm"
          >
            Contact Us →
          </a>
        </FadeIn>
      </section>
    </>
  );
}
