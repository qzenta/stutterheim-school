import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Staff & Teachers | Stutterheim International School",
  description: "Meet the qualified teaching staff and school leadership at Stutterheim International School.",
};

// ─── UPDATE THIS ARRAY when client sends headshots and bios ───────────────────
// Replace `photo` with the URL or local path to the staff member's headshot.
// Replace the `bio` text with the actual biography provided by the school.
// ─────────────────────────────────────────────────────────────────────────────
const staff = [
  {
    name: "Dr Suraj Haruna",
    role: "Director & Principal",
    subjects: "School Leadership · Administration",
    photo: "",
    bio: "Dr Suraj Haruna is the founding Director and Principal of Stutterheim International School. His visionary leadership has built SIS into a thriving centre of academic excellence and holistic development in the Eastern Cape.",
  },
  {
    name: "Teacher Name",
    role: "Foundation Phase Educator",
    subjects: "Grade R · Grades 1–3",
    photo: "",
    bio: "A passionate foundation phase educator dedicated to nurturing early literacy, numeracy, and social skills in our youngest learners. Bio to be updated by the school.",
  },
  {
    name: "Teacher Name",
    role: "Intermediate Phase Educator",
    subjects: "Grades 4–6 · Mathematics · Natural Sciences",
    photo: "",
    bio: "Committed to making Mathematics and Sciences accessible and engaging for Intermediate Phase learners. Bio to be updated by the school.",
  },
  {
    name: "Teacher Name",
    role: "Senior Phase Educator",
    subjects: "Grade 7 · English · Social Sciences",
    photo: "",
    bio: "A dedicated educator preparing Grade 7 learners for the transition to high school through strong language and critical thinking skills. Bio to be updated by the school.",
  },
  {
    name: "Teacher Name",
    role: "FET Phase Educator",
    subjects: "Grades 8–12 · Physical Sciences · Life Sciences",
    photo: "",
    bio: "Specialist in Science subjects for the FET phase, with a focus on hands-on learning and matric exam preparation. Bio to be updated by the school.",
  },
  {
    name: "Teacher Name",
    role: "FET Phase Educator",
    subjects: "Grades 8–12 · Accounting · Business Studies",
    photo: "",
    bio: "Experienced Commerce educator bringing real-world business knowledge into the classroom to prepare learners for tertiary study and entrepreneurship. Bio to be updated by the school.",
  },
];

export default function StaffPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[#111480] text-white pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-blue-300 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Our People
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Staff &amp; Teachers</h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
              Meet the qualified educators and leaders who make SIS exceptional every day.
            </p>
            <div className="mt-6 w-16 h-1 bg-white/30 mx-auto rounded" />
          </FadeIn>
        </div>
      </div>

      {/* Staff grid */}
      <section className="py-16 px-4 bg-[#F7F8FA]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {staff.map((member, i) => (
              <FadeIn key={`${member.name}-${i}`} delay={i * 80}>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                  {/* Headshot area */}
                  <div className="h-52 bg-[#111480]/5 flex items-center justify-center relative overflow-hidden">
                    {member.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-center px-4">
                        <div className="w-20 h-20 rounded-full bg-[#111480]/15 border-4 border-[#111480]/10 flex items-center justify-center">
                          <span className="text-3xl font-bold text-[#111480]/40">
                            {member.name.charAt(0)}
                          </span>
                        </div>
                        <p className="text-[#111480]/30 text-xs font-medium">Headshot coming soon</p>
                      </div>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="mb-3">
                      <h3 className="font-bold text-[#111480] text-base leading-tight">{member.name}</h3>
                      <p className="text-blue-500 text-xs font-semibold mt-1">{member.role}</p>
                      <p className="text-gray-400 text-xs mt-1">{member.subjects}</p>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">{member.bio}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Staff headshots and full biographies will be updated when provided by the school.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Join us CTA */}
      <section className="bg-[#111480] py-14 px-4">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Join Our Team</h2>
          <p className="text-blue-200 text-sm mb-6">
            We are always looking for passionate, qualified educators to join the SIS family.
          </p>
          <a
            href="mailto:sis@stutterheimschool.co.za?subject=Teaching%20Position%20Enquiry"
            className="inline-block px-8 py-3 bg-white text-[#111480] font-bold rounded-lg hover:bg-blue-50 transition-colors text-sm"
          >
            Send Your CV
          </a>
        </FadeIn>
      </section>
    </>
  );
}
