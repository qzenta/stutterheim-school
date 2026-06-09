import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Director's Welcome | Stutterheim International School",
  description:
    "A personal welcome from the Co-Director of Stutterheim International School — Ms Zimaseka Kalimashe — to prospective parents, learners, and the SIS community.",
};

export default function WelcomePage() {
  return (
    <>
      {/* Banner */}
      <div
        className="relative text-white pt-24 pb-20 px-4"
        style={{
          backgroundImage: "url(/extra-images/banner3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-[#0C0E6B]/85" />
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-blue-300 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              A Message From Our Director
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Director&apos;s Welcome</h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
              A personal message from Ms Zimaseka Kalimashe, Co-Director of
              Stutterheim International School.
            </p>
            <div className="mt-6 w-16 h-1 bg-white/40 mx-auto rounded" />
          </FadeIn>
        </div>
      </div>

      {/* Welcome content */}
      <section className="py-20 px-4 bg-[#E8EAEE]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">

            {/* Director photo + credentials */}
            <FadeIn className="lg:w-72 shrink-0">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-80 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/extra-images/zimaseka-kalimashe.jpg"
                    alt="Ms Zimaseka Kalimashe – Co-Director"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-white bg-[#0C0E6B] rounded-full px-3 py-1 mb-3">
                    Co-Director
                  </span>
                  <h2 className="font-bold text-[#0C0E6B] text-lg leading-tight mb-1">
                    Ms Zimaseka Kalimashe
                  </h2>
                  <p className="text-blue-500 text-xs font-medium mb-3">
                    Physical Sciences &amp; NSTECH
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Dip. Ed", "BEd Hons Ed", "Advanced Cert Ed", "23 yrs experience"].map((c) => (
                      <span key={c} className="text-[10px] font-semibold text-[#0C0E6B] bg-[#E8EAEE] border border-[#0C0E6B]/15 rounded-full px-2.5 py-0.5">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Welcome letter */}
            <FadeIn delay={100} className="flex-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10">
                {/* Opening quote */}
                <blockquote className="border-l-4 border-[#0C0E6B] pl-5 mb-8">
                  <p className="text-[#0C0E6B] text-lg font-semibold italic leading-relaxed">
                    &ldquo;We are committed to nurturing confident, compassionate, and globally
                    competitive individuals.&rdquo;
                  </p>
                </blockquote>

                <div className="space-y-5 text-gray-600 text-sm leading-relaxed">
                  <p>Dear Prospective Parents and Learners,</p>

                  <p>
                    Welcome to Stutterheim International School. It is with great pride and
                    deep commitment that I extend this personal invitation to you and your
                    family to become part of our growing school community.
                  </p>

                  <p>
                    At SIS, we believe that every child has the right to a quality education
                    in a safe, nurturing, and stimulating environment. Our school was founded
                    on the principle that academic excellence and holistic development go hand
                    in hand — and this belief continues to guide everything we do.
                  </p>

                  <p>
                    Our dedicated team of qualified educators brings passion and purpose to
                    every classroom, working tirelessly to ensure that each learner reaches
                    their full potential. We do not simply teach — we inspire, guide, and
                    walk alongside your children as they grow.
                  </p>

                  <p>
                    We offer a comprehensive academic programme from Grade R through Grade 9,
                    covering over 20 subjects under the CAPS curriculum. Beyond the classroom,
                    our learners enjoy a rich extracurricular life including ballet, swimming,
                    outreach, and sporting activities — because we believe that character is
                    built both inside and outside the classroom.
                  </p>

                  <p>
                    For families outside Stutterheim, our boarding facility provides a safe,
                    structured, and supportive home-away-from-home — with supervised study,
                    wholesome meals, and monitored recreation.
                  </p>

                  <p>
                    I warmly invite you to visit our campus, meet our staff, and experience
                    the SIS difference for yourself. We would be honoured to welcome your
                    child into our family.
                  </p>

                  <p className="pt-2">
                    With warm regards,
                  </p>
                </div>

                {/* Signature block */}
                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#0C0E6B]/20 shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/extra-images/zimaseka-kalimashe.jpg"
                      alt="Ms Zimaseka Kalimashe"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-[#0C0E6B] text-base">Ms Zimaseka Kalimashe</p>
                    <p className="text-blue-500 text-xs font-medium">Co-Director</p>
                    <p className="text-gray-400 text-xs">Stutterheim International School</p>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="py-14 px-4 bg-[#0C0E6B] text-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-2">Our Core Commitments</h2>
            <div className="w-12 h-1 bg-white/30 mx-auto rounded" />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: "🎯", title: "Academic Excellence", desc: "High standards, dedicated educators, and a proven track record across all phases." },
              { icon: "❤️", title: "Holistic Development", desc: "Every learner is nurtured academically, socially, and emotionally." },
              { icon: "🌍", title: "Global Citizenship", desc: "Preparing confident, compassionate learners to contribute to a diverse world." },
            ].map((v, i) => (
              <FadeIn key={v.title} delay={i * 100}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
                  <p className="text-3xl mb-3">{v.icon}</p>
                  <h3 className="font-bold text-white text-sm mb-2">{v.title}</h3>
                  <p className="text-blue-200 text-xs leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 bg-[#E8EAEE] text-center">
        <FadeIn>
          <h2 className="text-2xl font-bold text-[#0C0E6B] mb-3">Ready to Join the SIS Family?</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto mb-7">
            Applications for the 2027 academic year are open. Limited spaces — apply today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/admissions"
              className="px-8 py-3 bg-[#0C0E6B] text-white font-bold rounded-lg hover:bg-blue-900 transition-colors text-sm"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-[#0C0E6B] text-[#0C0E6B] font-semibold rounded-lg hover:bg-[#0C0E6B] hover:text-white transition-colors text-sm"
            >
              Book a Visit
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
