import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Director's Welcome | Stutterheim International School",
  description:
    "A personal welcome from the Co-Director of Stutterheim International School — Ms Zimaseka Kalimashe — to prospective parents, learners, and the SIS community.",
};

// Navbar (64px) + AdmissionsBanner (40px) = 104px total fixed header
const HEADER_H = 104;

export default function WelcomePage() {
  return (
    <div
      className="flex flex-col bg-[#E8EAEE]"
      style={{ height: "100dvh", overflow: "hidden" }}
    >
      {/* ── Slim banner strip ─────────────────────────────────────────────── */}
      <div
        className="relative text-white shrink-0 text-center px-4"
        style={{
          paddingTop: `${HEADER_H + 10}px`,
          paddingBottom: "10px",
          backgroundImage: "url(/extra-images/banner3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-[#0C0E6B]/88" />
        <FadeIn className="relative">
          <p className="text-blue-300 text-[11px] font-semibold uppercase tracking-[0.2em] mb-1">
            A Message From Our Director
          </p>
          <h1 className="text-2xl font-bold text-white">Director&apos;s Welcome</h1>
        </FadeIn>
      </div>

      {/* ── Content area — fills all remaining height, no page overflow ───── */}
      <div className="flex-1 min-h-0 px-4 py-4">
        <div className="max-w-6xl mx-auto h-full flex flex-col lg:flex-row gap-5 items-stretch">

          {/* ── Photo card ─────────────────────────────────────────────────── */}
          <div className="lg:w-64 xl:w-72 shrink-0 h-full flex flex-col">
            <div className="flex flex-col h-full">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
                {/* Photo fills all space above credentials */}
                <div className="flex-1 min-h-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/extra-images/zimaseka-kalimashe.jpg"
                    alt="Ms Zimaseka Kalimashe – Co-Director"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Credentials — pinned at bottom */}
                <div className="p-4 shrink-0">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-[0.15em] text-white bg-[#0C0E6B] rounded-full px-3 py-1 mb-2">
                    Co-Director
                  </span>
                  <h2 className="font-bold text-[#0C0E6B] text-sm leading-tight mb-1">
                    Ms Zimaseka Kalimashe
                  </h2>
                  <p className="text-blue-500 text-xs mb-2">Physical Sciences &amp; NSTECH</p>
                  <div className="flex flex-wrap gap-1">
                    {["Dip. Ed", "BEd Hons Ed", "Advanced Cert Ed", "23 yrs experience"].map((c) => (
                      <span key={c} className="text-[10px] font-semibold text-[#0C0E6B] bg-[#E8EAEE] border border-[#0C0E6B]/15 rounded-full px-2 py-0.5">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Letter card ────────────────────────────────────────────────── */}
          <div className="flex-1 min-w-0 h-full flex flex-col">
            <div className="flex flex-col h-full">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-7 flex flex-col h-full">

                {/* Quote — pinned top */}
                <blockquote className="border-l-4 border-[#0C0E6B] pl-4 mb-4 shrink-0">
                  <p className="text-[#0C0E6B] text-sm font-semibold italic leading-relaxed">
                    &ldquo;We are committed to nurturing confident, compassionate, and globally
                    competitive individuals.&rdquo;
                  </p>
                </blockquote>

                {/* Letter body — scrolls inside card */}
                <div
                  className="flex-1 min-h-0 overflow-y-auto pr-1 space-y-3 text-gray-600 text-sm leading-relaxed"
                  style={{ scrollbarWidth: "thin", scrollbarColor: "#0C0E6B30 transparent" }}
                >
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

                {/* Signature — pinned bottom, never scrolls away */}
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-3 shrink-0">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#0C0E6B]/20 shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/extra-images/zimaseka-kalimashe.jpg"
                      alt="Ms Zimaseka Kalimashe"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-[#0C0E6B] text-sm">Ms Zimaseka Kalimashe</p>
                    <p className="text-blue-500 text-xs">Co-Director · Stutterheim International School</p>
                  </div>
                  <div className="ml-auto flex gap-2 shrink-0">
                    <Link href="/admissions" className="px-4 py-2 bg-[#0C0E6B] text-white font-bold rounded-lg hover:bg-blue-900 transition-colors text-xs whitespace-nowrap">
                      Apply Now
                    </Link>
                    <Link href="/contact" className="px-4 py-2 border border-[#0C0E6B] text-[#0C0E6B] font-semibold rounded-lg hover:bg-[#0C0E6B] hover:text-white transition-colors text-xs whitespace-nowrap">
                      Book a Visit
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
