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
// ─── TEACHING STAFF (7) + SUPPORT STAFF (1) ──────────────────────────────────
// ─── LEADERSHIP: Zimaseka Kalimashe (Co-Director) is homepage only.
// Mdingi Vuyelwa (Principal) + Amanda Salzwedel (Asst Principal) appear here + homepage.
// ─────────────────────────────────────────────────────────────────────────────
const staff = [
  // ── School Leadership (also on homepage) ────────────────────────────────────
  {
    name: "Mdingi Vuyelwa",
    role: "Principal",
    subjects: "School Leadership · Academic Management · Staff Development",
    type: "teaching" as const,
    photo: "",
    bio: "Mdingi Vuyelwa leads Stutterheim International School with passion and purpose, ensuring academic excellence and a nurturing environment for every learner from Grade R through Grade 12. Photo and full bio coming soon.",
  },
  {
    name: "Amanda Salzwedel",
    role: "Assistant Principal",
    subjects: "School Administration · Learner Affairs · Curriculum Support",
    type: "teaching" as const,
    photo: "",
    bio: "Amanda Salzwedel supports the Principal in all aspects of school management, learner welfare, and curriculum delivery. Photo and full bio coming soon.",
  },
  // ── Teaching Staff ──────────────────────────────────────────────────────────
  {
    name: "Teacher Name",
    role: "Foundation Phase Educator",
    subjects: "Grade R · Grades 1–3 · Early Literacy & Numeracy",
    type: "teaching" as const,
    photo: "",
    bio: "A passionate foundation phase educator dedicated to nurturing early literacy, numeracy, and social skills in our youngest learners. Bio to be updated by the school.",
  },
  {
    name: "Teacher Name",
    role: "Intermediate Phase Educator",
    subjects: "Grades 4–6 · Mathematics · Natural Sciences",
    type: "teaching" as const,
    photo: "",
    bio: "Committed to making Mathematics and Sciences accessible and engaging for Intermediate Phase learners. Bio to be updated by the school.",
  },
  {
    name: "Teacher Name",
    role: "Senior Phase Educator",
    subjects: "Grade 7 · English · Social Sciences",
    type: "teaching" as const,
    photo: "",
    bio: "A dedicated educator preparing Grade 7 learners for the transition to high school through strong language and critical thinking skills. Bio to be updated by the school.",
  },
  {
    name: "Teacher Name",
    role: "FET Phase Educator",
    subjects: "Grades 8–12 · Physical Sciences · Life Sciences",
    type: "teaching" as const,
    photo: "",
    bio: "Specialist in Science subjects for the FET phase, with a focus on hands-on learning and matric exam preparation. Bio to be updated by the school.",
  },
  {
    name: "Teacher Name",
    role: "FET Phase Educator",
    subjects: "Grades 8–12 · Accounting · Business Studies · Economics",
    type: "teaching" as const,
    photo: "",
    bio: "Experienced Commerce educator bringing real-world business knowledge into the classroom to prepare learners for tertiary study and entrepreneurship. Bio to be updated by the school.",
  },
  {
    name: "Teacher Name",
    role: "Languages & Humanities Educator",
    subjects: "Grades 8–12 · Afrikaans · isiXhosa · History",
    type: "teaching" as const,
    photo: "",
    bio: "A multilingual educator passionate about South African languages and history, helping learners connect their academic work to their cultural heritage. Bio to be updated by the school.",
  },
  // ── Support Staff ────────────────────────────────────────────────────────────
  {
    name: "Staff Member Name",
    role: "School Administrator & Support Staff",
    subjects: "Administration · Learner Welfare · Office Management",
    type: "support" as const,
    photo: "",
    bio: "Our dedicated support staff member ensures the smooth daily operation of the school — from learner records and communications to welfare and logistics. Details to be updated by the school.",
  },
];

export default function StaffPage() {
  return (
    <>
      {/* Page banner */}
      <div
        className="relative text-white pt-24 pb-16 px-4"
        style={{ backgroundImage: "url(/extra-images/banner2.jpg)", backgroundSize: "cover", backgroundPosition: "center top" }}
      >
        <div className="absolute inset-0 bg-[#0C0E6B]/80" />
        <div className="relative max-w-4xl mx-auto text-center">
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

      {/* Teaching staff */}
      <section className="py-16 px-4 bg-[#F5F6F8]">
        <div className="max-w-6xl mx-auto">
          {/* Leadership callout */}
          <FadeIn className="mb-12">
            <div className="bg-[#0C0E6B] rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-white font-bold text-sm">School Leadership</p>
                <p className="text-blue-200 text-xs mt-1">
                  Meet Co-Director Zimaseka Kalimashe on the homepage leadership section.
                </p>
              </div>
              <a
                href="/#leadership"
                className="shrink-0 px-5 py-2 bg-white text-[#0C0E6B] font-bold rounded-lg text-xs hover:bg-blue-50 transition-colors whitespace-nowrap"
              >
                View Leadership →
              </a>
            </div>
          </FadeIn>

          <FadeIn className="mb-8">
            <h2 className="text-xl font-bold text-[#0C0E6B]">Teaching Staff</h2>
            <div className="mt-2 w-10 h-1 bg-[#0C0E6B] rounded" />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {staff.filter(m => m.type === "teaching").map((member, i) => (
              <FadeIn key={`${member.name}-${i}`} delay={i * 80}>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                  {/* Headshot area */}
                  <div className="h-52 bg-[#0C0E6B]/5 flex items-center justify-center relative overflow-hidden">
                    {member.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-top" />
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-center px-4">
                        <div className="w-20 h-20 rounded-full bg-[#0C0E6B]/15 border-4 border-[#0C0E6B]/10 flex items-center justify-center">
                          <span className="text-3xl font-bold text-[#0C0E6B]/40">{member.name.charAt(0)}</span>
                        </div>
                        <p className="text-[#0C0E6B]/30 text-xs font-medium">Headshot coming soon</p>
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-[#0C0E6B] text-base leading-tight">{member.name}</h3>
                    <p className="text-blue-500 text-xs font-semibold mt-1">{member.role}</p>
                    <p className="text-gray-400 text-xs mt-1 mb-3">{member.subjects}</p>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">{member.bio}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Support staff */}
          <FadeIn className="mb-8">
            <h2 className="text-xl font-bold text-[#0C0E6B]">Support Staff</h2>
            <div className="mt-2 w-10 h-1 bg-[#0C0E6B] rounded" />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {staff.filter(m => m.type === "support").map((member, i) => (
              <FadeIn key={`${member.name}-support-${i}`} delay={i * 80}>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                  <div className="h-52 bg-[#0C0E6B]/5 flex items-center justify-center relative overflow-hidden">
                    {member.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-top" />
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-center px-4">
                        <div className="w-20 h-20 rounded-full bg-gray-200 border-4 border-gray-100 flex items-center justify-center">
                          <span className="text-3xl font-bold text-gray-400">{member.name.charAt(0)}</span>
                        </div>
                        <p className="text-gray-300 text-xs font-medium">Headshot coming soon</p>
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="inline-block text-xs font-semibold text-gray-500 bg-gray-100 rounded px-2 py-0.5 mb-2 self-start">Support</span>
                    <h3 className="font-bold text-[#0C0E6B] text-base leading-tight">{member.name}</h3>
                    <p className="text-gray-500 text-xs font-semibold mt-1">{member.role}</p>
                    <p className="text-gray-400 text-xs mt-1 mb-3">{member.subjects}</p>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">{member.bio}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              Headshots and full biographies will be updated when provided by the school.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Join us CTA */}
      <section className="bg-[#0C0E6B] py-14 px-4">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Join Our Team</h2>
          <p className="text-blue-200 text-sm mb-6">
            We are always looking for passionate, qualified educators to join the SIS family.
          </p>
          <a
            href="mailto:sis@stutterheimschool.co.za?subject=Teaching%20Position%20Enquiry"
            className="inline-block px-8 py-3 bg-white text-[#0C0E6B] font-bold rounded-lg hover:bg-blue-50 transition-colors text-sm"
          >
            Send Your CV
          </a>
        </FadeIn>
      </section>
    </>
  );
}
