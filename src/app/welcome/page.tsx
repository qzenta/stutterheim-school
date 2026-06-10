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
        className="relative text-white pt-20 pb-8 px-4"
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
      <section className="py-12 px-4 bg-[#E8EAEE]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">

            {/* Director photo + credentials */}
            <FadeIn className="lg:w-72 shrink-0 flex flex-col">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col flex-1">
                <div className="flex-1 min-h-0 overflow-hidden">
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
            <FadeIn delay={100} className="flex-1 flex flex-col">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10 flex-1">
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
                    It is with immense joy and a heart full of purpose that I welcome you to
                    Stutterheim International School — a place where every child matters, every
                    voice is heard, and every dream is taken seriously.
                  </p>

                  <p>
                    I have dedicated over two decades of my life to education, and with each
                    passing year, my conviction grows stronger: the greatest gift we can give a
                    child is a safe space to learn, grow, and discover who they truly are. That
                    is exactly what SIS was built to be.
                  </p>

                  <p>
                    Our school is not simply a place of academic instruction. It is a community.
                    A family. We believe that excellence in the classroom must be matched by
                    excellence in character — and so we invest equally in both. Our learners
                    achieve, but more importantly, they care. They lead, and they serve.
                  </p>

                  <p>
                    From Grade R through Grade 9, our qualified and passionate educators walk
                    alongside every learner — celebrating their wins, supporting them through
                    their struggles, and never allowing them to settle for less than their best.
                    Whether your child is in the classroom, on the athletics track, in a ballet
                    rehearsal, or at the swimming pool, they are seen, valued, and encouraged
                    every single day.
                  </p>

                  <p>
                    For families who travel to be part of our community, our boarding facility
                    offers a warm, structured, and nurturing home-away-from-home. Your child
                    will never feel far from family here.
                  </p>

                  <p>
                    I invite you to come and experience the SIS difference for yourself. Walk
                    our grounds, meet our staff, and speak to our learners. The warmth you will
                    feel is not manufactured — it is who we are.
                  </p>

                  <p>
                    On behalf of our entire SIS family, I look forward to welcoming your child
                    through our doors. Together, let us build something extraordinary.
                  </p>

                  <p className="pt-2">With warm regards and great hope,</p>
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

      {/* Core Commitments */}
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
