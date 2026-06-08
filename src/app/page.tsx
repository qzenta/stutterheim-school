import Link from "next/link";
import { GraduationCap, Building2, Heart, BookOpen, Trophy, Users, Phone } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import AnimatedStats from "@/components/AnimatedStats";
import PartnersMarquee from "@/components/PartnersMarquee";
import FadeIn from "@/components/FadeIn";

const pillars = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    desc: "Rigorous curriculum across 20+ subjects with dedicated, qualified educators committed to learner attainment and success.",
  },
  {
    icon: Building2,
    title: "State-of-the-Art Facilities",
    desc: "Modern classrooms, laboratories, and sporting infrastructure designed to create an optimal learning environment.",
  },
  {
    icon: Heart,
    title: "Holistic Development",
    desc: "Ballet, swimming, outreach, and extracurricular programmes nurture each learner's unique talents and character.",
  },
];

const achievements = [
  {
    icon: BookOpen,
    title: "Certificates & Academic Honours",
    desc: "Learners consistently achieve distinction-level results across our full subject offering.",
    year: "2024–2025",
  },
  {
    icon: Trophy,
    title: "Sports & Recreation",
    desc: "Regional recognition in swimming, athletics, and team sports competitions.",
    year: "2024",
  },
  {
    icon: Users,
    title: "Community Outreach",
    desc: "Recognised for outstanding service to the Stutterheim community through our outreach programme.",
    year: "2023–2025",
  },
];

const BASE_IMG = "/extra-images";
const galleryPreviews = [
  { src: `${BASE_IMG}/swimming.jpg`, alt: "Swimming programme at SIS" },
  { src: `${BASE_IMG}/ballet.jpg`, alt: "Ballet at Stutterheim International School" },
  { src: `${BASE_IMG}/field-trip.jpg`, alt: "SIS learners on field trip" },
  { src: `${BASE_IMG}/Camping.webp`, alt: "SIS camping and outdoor experience" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Animated Stats */}
      <AnimatedStats />

      {/* Why Choose SIS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-blue-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Why Parents Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0C0E6B]">
              A Complete Education
            </h2>
            <div className="mt-4 w-16 h-1 bg-[#0C0E6B] mx-auto rounded" />
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 120}>
                <div className="bg-[#F5F6F8] rounded-xl p-8 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-[#0C0E6B] rounded-lg flex items-center justify-center mb-5">
                    <p.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-8 h-1 bg-[#0C0E6B] rounded mb-4" />
                  <h3 className="font-bold text-[#0C0E6B] text-lg mb-3">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Boarding callout */}
          <FadeIn className="mt-10">
            <div className="bg-[#0C0E6B] rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-white text-lg">
                  🏠 Boarding Facility Available — Limited Spaces
                </p>
                <p className="text-blue-200 text-sm mt-1">
                  Secure accommodation for learners from outside Stutterheim.
                </p>
              </div>
              <a
                href="https://wa.me/27673977613?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20boarding%20at%20Stutterheim%20International%20School."
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center gap-2 px-6 py-3 bg-white text-[#0C0E6B] font-bold rounded-lg hover:bg-blue-50 transition-colors hover:scale-105 duration-200 text-sm"
              >
                <Phone size={15} />
                WhatsApp Us
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Admissions 2027 */}
      <section
        className="relative text-white py-20 px-4"
        style={{ backgroundImage: "url(/extra-images/banner5.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-[#0C0E6B]/85" />
        <div className="relative max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-blue-300 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              2027 Academic Year
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">Applications Now Open</h2>
            <p className="text-blue-200 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Secure your child&apos;s place at Stutterheim International School. Follow our
              simple three-step application process.
            </p>
            <div className="mt-4 w-16 h-1 bg-white/40 mx-auto rounded" />
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              { step: "01", title: "Submit Form", desc: "Complete and submit the application form — download below or apply online." },
              { step: "02", title: "Review", desc: "Our admissions team reviews your application and contacts you within 5 business days." },
              { step: "03", title: "Confirmation", desc: "Receive your official acceptance letter and secure your space for 2027." },
            ].map((s, i) => (
              <FadeIn key={s.step} delay={i * 120}>
                <div className="bg-white/10 border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
                  <p className="text-white text-4xl font-bold mb-3">{s.step}</p>
                  <h3 className="font-bold text-white text-base mb-2">{s.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/downloads/SIS-Application-Form-2027.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-white text-[#0C0E6B] font-bold rounded-lg hover:bg-blue-50 transition-all hover:scale-105 text-sm"
              >
                📄 Download Application Form
              </a>
              <a
                href="/fees"
                className="flex items-center gap-2 px-6 py-3 bg-white/15 text-white border border-white/30 font-semibold rounded-lg hover:bg-white/25 transition-all hover:scale-105 text-sm"
              >
                📄 Fee Structure
              </a>
              <Link
                href="/admissions"
                className="flex items-center gap-2 px-6 py-3 bg-white/15 text-white border border-white/30 font-semibold rounded-lg hover:bg-white/25 transition-all hover:scale-105 text-sm"
              >
                Apply Online →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 bg-[#F5F6F8]">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-blue-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Track Record
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0C0E6B]">Our Achievements</h2>
            <div className="mt-4 w-16 h-1 bg-[#0C0E6B] mx-auto rounded" />
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {achievements.map((a, i) => (
              <FadeIn key={a.title} delay={i * 120}>
                <div className="bg-white border border-gray-100 rounded-xl p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-10 h-10 bg-[#0C0E6B]/10 rounded-lg flex items-center justify-center mb-4">
                    <a.icon className="w-5 h-5 text-[#0C0E6B]" />
                  </div>
                  <p className="text-blue-500 text-xs font-semibold mb-2">{a.year}</p>
                  <h3 className="font-bold text-[#0C0E6B] mb-2 text-base">{a.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-8">
            <Link
              href="/achievements"
              className="inline-flex items-center gap-2 text-[#0C0E6B] font-semibold text-sm hover:text-blue-700 transition-colors"
            >
              View All Achievements →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="text-blue-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Life at SIS
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0C0E6B]">Gallery</h2>
            <div className="mt-4 w-16 h-1 bg-[#0C0E6B] mx-auto rounded" />
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {galleryPreviews.map((item, i) => (
              <FadeIn key={item.src} delay={i * 80}>
                <Link href="/gallery" className="block aspect-square overflow-hidden rounded-xl group shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-8">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#0C0E6B] text-[#0C0E6B] font-semibold rounded-lg hover:bg-[#0C0E6B] hover:text-white transition-colors text-sm"
            >
              View Full Gallery →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* School Leadership */}
      <section id="leadership" className="py-20 px-4 bg-[#0C0E6B] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-blue-300 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              The People Behind SIS
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">School Leadership</h2>
            <div className="mt-4 w-16 h-1 bg-white/30 mx-auto rounded" />
          </FadeIn>

          {/* Director left (tall) · Principal + Asst Principal stacked right */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 items-stretch">

            {/* ── LEFT: Co-Director (tall vertical card) ── */}
            <FadeIn delay={0}>
              <div className="group flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-2xl p-10 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-black/30 cursor-default h-full min-h-[420px] justify-center">
                {/* Avatar — larger for director */}
                <div className="relative w-36 h-36 mb-6">
                  <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:border-white/50 transition-colors duration-500 overflow-hidden">
                    <img src="/extra-images/zimaseka-kalimashe.jpg" alt="Ms Zimaseka Kalimashe – Co-Director" className="w-full h-full object-cover object-center" />
                  </div>
                  <div className="absolute inset-[-8px] rounded-full border border-white/10 group-hover:border-white/30 group-hover:scale-110 transition-all duration-500" />
                </div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300 bg-blue-900/40 border border-blue-400/20 rounded-full px-3 py-1 mb-3 group-hover:bg-blue-800/60 transition-colors">
                  Co-Director
                </span>
                <h3 className="font-bold text-white text-xl leading-tight mb-4">Zimaseka Kalimashe</h3>
                <div className="w-10 h-px bg-white/20 mb-4 group-hover:w-20 transition-all duration-500" />
                <blockquote className="text-blue-200 text-sm leading-relaxed italic max-w-xs">
                  &ldquo;We are committed to nurturing confident, compassionate, and globally competitive individuals.&rdquo;
                </blockquote>
              </div>
            </FadeIn>

            {/* ── RIGHT: Principal (top) + Asst Principal (bottom) ── */}
            <div className="flex flex-col gap-6 h-full">
              {[
                {
                  name: "Mdingi Vuyelwa",
                  role: "Principal",
                  initials: "MV",
                  quote: "Academic excellence and holistic growth go hand in hand at Stutterheim International School.",
                  accent: "from-sky-400/20 to-sky-600/10",
                  delay: 160,
                },
                {
                  name: "Amanda Salzwedel",
                  role: "Assistant Principal",
                  initials: "AS",
                  quote: "Every learner has unique potential — our role is to discover it, develop it, and celebrate it.",
                  accent: "from-blue-400/20 to-blue-600/10",
                  delay: 280,
                },
              ].map((leader) => (
                <FadeIn key={leader.name} delay={leader.delay} className="flex-1 flex flex-col">
                  <div className="group flex flex-row items-center gap-6 bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-black/30 cursor-default h-full">
                    {/* Avatar */}
                    <div className="relative w-20 h-20 shrink-0">
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${leader.accent} border-2 border-white/20 group-hover:border-white/50 transition-colors duration-500`} />
                      <div className="w-full h-full rounded-full flex items-center justify-center relative z-10">
                        <span className="text-xl font-bold text-white/60 group-hover:text-white/90 transition-colors duration-300">
                          {leader.initials}
                        </span>
                      </div>
                      <div className="absolute inset-[-5px] rounded-full border border-white/10 group-hover:border-white/30 group-hover:scale-110 transition-all duration-500" />
                    </div>
                    {/* Text */}
                    <div className="flex flex-col text-left">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300 bg-blue-900/40 border border-blue-400/20 rounded-full px-3 py-1 mb-2 self-start group-hover:bg-blue-800/60 transition-colors">
                        {leader.role}
                      </span>
                      <h3 className="font-bold text-white text-lg leading-tight mb-2">{leader.name}</h3>
                      <div className="w-8 h-px bg-white/20 mb-3 group-hover:w-14 transition-all duration-500" />
                      <blockquote className="text-blue-200 text-sm leading-relaxed italic">
                        &ldquo;{leader.quote}&rdquo;
                      </blockquote>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>

          {/* Leadership CTA */}
          <FadeIn className="text-center mt-10">
            <a href="/leadership" className="inline-flex items-center gap-2 text-blue-300 hover:text-white text-sm font-semibold transition-colors group">
              Learn more about our leadership team
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </FadeIn>

        </div>
      </section>

      {/* Partners Marquee */}
      <PartnersMarquee />

      {/* CTA Strip */}
      <section className="bg-white border-t border-gray-100 py-16 px-4">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0C0E6B] mb-4">
            Ready to Join Our School Family?
          </h2>
          <p className="text-gray-500 mb-8 text-base">
            Applications for the 2027 academic year are open. Limited spaces available — apply today.
          </p>
          <Link
            href="/admissions"
            className="inline-block px-10 py-4 bg-[#0C0E6B] text-white font-bold rounded-lg hover:bg-blue-900 transition-all hover:scale-105 text-base shadow"
          >
            Start Your Application
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
