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
    // Full-viewport column: banner strip + content fill remainder
    <div className="flex flex-col" style={{ minHeight: "100dvh" }}>

      {/* ── Slim banner strip ─────────────────────────────────────────────── */}
      <div
        className="relative text-white shrink-0 px-4 py-5"
        style={{
          paddingTop: "calc(64px + 40px + 12px)", // navbar + admissions marquee + breathing room
          backgroundImage: "url(/extra-images/banner3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-[#0C0E6B]/85" />
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-blue-300 text-xs font-semibold uppercase tracking-[0.2em] mb-1">
              A Message From Our Director
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold">Director&apos;s Welcome</h1>
          </FadeIn>
        </div>
      </div>

      {/* ── Content — fills all remaining viewport height ─────────────────── */}
      <section className="flex-1 overflow-hidden px-4 py-5 bg-[#E8EAEE]">
        <div className="max-w-6xl mx-auto h-full flex flex-col lg:flex-row gap-6 items-stretch">

          {/* Director photo + credentials */}
          <FadeIn className="lg:w-64 xl:w-72 shrink-0 flex flex-col h-full">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
              {/* Photo fills all space above credentials */}
              <div className="flex-1 min-h-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/extra-images/zimaseka-kalimashe.jpg"
                  alt="Ms Zimaseka Kalimashe – Co-Director"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Credentials — fixed at bottom, never scrolls */}
              <div className="p-4 shrink-0">
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-white bg-[#0C0E6B] rounded-full px-3 py-1 mb-2">
                  Co-Director
                </span>
                <h2 className="font-bold text-[#0C0E6B] text-base leading-tight mb-1">
                  Ms Zimaseka Kalimashe
                </h2>
                <p className="text-blue-500 text-xs font-medium mb-2">
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

          {/* Welcome letter — letter body scrolls inside, signature stays pinned */}
          <FadeIn delay={100} className="flex-1 flex flex-col min-h-0 h-full">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8 flex flex-col h-full">

              {/* Quote — pinned at top */}
              <blockquote className="border-l-4 border-[#0C0E6B] pl-4 mb-5 shrink-0">
                <p className="text-[#0C0E6B] text-base font-semibold italic leading-relaxed">
                  &ldquo;We are committed to nurturing confident, compassionate, and globally
                  competitive individuals.&rdquo;
                </p>
              </blockquote>

              {/* Scrollable letter body */}
              <div className="flex-1 overflow-y-auto min-h-0 pr-2 space-y-4 text-gray-600 text-sm leading-relaxed"
                style={{ scrollbarWidth: "thin", scrollbarColor: "#0C0E6B20 transparent" }}>
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

                <p>With warm regards and great hope,</p>
              </div>

              {/* Signature — pinned at bottom, never scrolls away */}
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-3 shrink-0">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#0C0E6B]/20 shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/extra-images/zimaseka-kalimashe.jpg"
                    alt="Ms Zimaseka Kalimashe"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-bold text-[#0C0E6B] text-sm">Ms Zimaseka Kalimashe</p>
                  <p className="text-blue-500 text-xs font-medium">Co-Director</p>
                  <p className="text-gray-400 text-xs">Stutterheim International School</p>
                </div>
                <div className="ml-auto flex gap-2">
                  <Link href="/admissions" className="px-4 py-2 bg-[#0C0E6B] text-white font-bold rounded-lg hover:bg-blue-900 transition-colors text-xs">
                    Apply Now
                  </Link>
                  <Link href="/contact" className="px-4 py-2 border border-[#0C0E6B] text-[#0C0E6B] font-semibold rounded-lg hover:bg-[#0C0E6B] hover:text-white transition-colors text-xs">
                    Book a Visit
                  </Link>
                </div>
              </div>

            </div>
          </FadeIn>

        </div>
      </section>
    </div>
  );
}
