import type { Metadata } from "next";
import Image from "next/image";
import { GraduationCap, Users, Sparkles, CalendarDays, ShieldCheck } from "lucide-react";
import CareersApplicationForm from "@/components/CareersApplicationForm";

export const revalidate = 1800; // ISR — refresh listings every ~30 min

const BASE = "https://www.stutterheimschool.co.za";

export const metadata: Metadata = {
  title: "Careers | Teaching & Staff Vacancies",
  description:
    "Join the team at Stutterheim International School. View current teaching and staff vacancies and apply online.",
  alternates: { canonical: `${BASE}/careers` },
  openGraph: {
    title: "Careers at Stutterheim International School",
    description:
      "View current teaching and staff vacancies at Stutterheim International School and apply online.",
    url: `${BASE}/careers`,
    siteName: "Stutterheim International School",
    locale: "en_ZA",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Careers at Stutterheim International School" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Stutterheim International School",
    description: "View current teaching and staff vacancies and apply online.",
    images: ["/og-image.jpg"],
  },
};

type JobListing = {
  id: string;
  position: string;
  phase: string | null;
  requirements: string;
  saceRequired: boolean;
  closingDate: string | null;
};

async function getOpenListings(): Promise<JobListing[]> {
  const apiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_JOBS_DATABASE_ID;
  if (!apiKey || !databaseId) return [];

  try {
    const res = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filter: { property: "Status", select: { equals: "Open" } },
        sorts: [{ property: "Closing Date", direction: "ascending" }],
      }),
      next: { revalidate: 1800 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return (json.results ?? []).map((page: {
      id: string;
      properties: {
        Position?: { title?: { plain_text?: string }[] };
        Phase?: { select?: { name?: string } | null };
        Requirements?: { rich_text?: { plain_text?: string }[] };
        "SACE Registration Required"?: { checkbox?: boolean };
        "Closing Date"?: { date?: { start?: string } | null };
      };
    }) => ({
      id: page.id,
      position: page.properties.Position?.title?.[0]?.plain_text ?? "Untitled Position",
      phase: page.properties.Phase?.select?.name ?? null,
      requirements:
        page.properties.Requirements?.rich_text?.map((t) => t.plain_text).join("") ?? "",
      saceRequired: Boolean(page.properties["SACE Registration Required"]?.checkbox),
      closingDate: page.properties["Closing Date"]?.date?.start ?? null,
    }));
  } catch {
    return [];
  }
}

const whyTeach = [
  {
    title: "A Supportive Community",
    desc: "Work alongside a close-knit staff team and a school culture built on mutual respect and collaboration.",
    image: "/extra-images/about-us.jpg",
    icon: Users,
  },
  {
    title: "Room to Grow",
    desc: "Ongoing professional development and clear pathways for teachers to build their careers with us.",
    image: "/extra-images/make-a-difference.jpg",
    icon: Sparkles,
  },
  {
    title: "Resources That Matter",
    desc: "Small class sizes and well-resourced classrooms so you can focus on what matters — teaching.",
    image: "/extra-images/gallery-01.jpg",
    icon: GraduationCap,
  },
];

function formatDate(iso: string | null) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" });
}

export default async function CareersPage() {
  const listings = await getOpenListings();

  return (
    <>
      {/* Page banner */}
      <div
        className="relative text-white pt-24 pb-16 px-4"
        style={{ backgroundImage: "url(/extra-images/banner3.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-[#0C0E6B]/82" />
        <div className="relative max-w-3xl mx-auto text-center">
          <Image src="/images/logo.png" alt="SIS" width={120} height={40} className="h-12 w-auto object-contain mx-auto mb-5 opacity-90" unoptimized />
          <p className="text-blue-300 text-xs font-semibold uppercase tracking-[0.2em] mb-3">Join Our Team</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Careers at SIS</h1>
          <p className="text-blue-200 text-sm leading-relaxed max-w-lg mx-auto">
            We&apos;re always looking for passionate educators and staff who want to make a real
            difference in learners&apos; lives at Stutterheim International School.
          </p>
          <div className="mt-5 w-16 h-1 bg-white/40 mx-auto rounded" />
        </div>
      </div>

      {/* Why Teach at Stutterheim */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Why Teach at Stutterheim
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0C0E6B]">A Place to Belong</h2>
            <div className="mt-4 w-16 h-1 bg-[#0C0E6B] mx-auto rounded" />
          </div>

          <style>{`
            .flip-card { perspective: 1000px; }
            .flip-card-inner {
              position: relative;
              width: 100%;
              height: 100%;
              transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
              transform-style: preserve-3d;
            }
            .flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
            .flip-card-front, .flip-card-back {
              position: absolute;
              inset: 0;
              backface-visibility: hidden;
              -webkit-backface-visibility: hidden;
              border-radius: 0.75rem;
            }
            .flip-card-back { transform: rotateY(180deg); }
          `}</style>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {whyTeach.map((p) => (
              <div key={p.title} className="flip-card h-72 cursor-pointer">
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front bg-[#E8EAEE] p-8 flex flex-col border border-gray-100 shadow-sm">
                    <div className="w-12 h-12 bg-[#0C0E6B] rounded-lg flex items-center justify-center mb-5">
                      <p.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-8 h-1 bg-[#0C0E6B] rounded mb-4" />
                    <h3 className="font-bold text-[#0C0E6B] text-lg mb-3">{p.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back overflow-hidden shadow-lg">
                    <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E6B]/90 via-[#0C0E6B]/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="text-white font-bold text-lg">{p.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Vacancies */}
      <section className="py-16 px-4 bg-[#E8EAEE]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-blue-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">Open Positions</p>
            <h2 className="text-3xl font-bold text-[#0C0E6B]">Current Vacancies</h2>
            <div className="mt-4 w-16 h-1 bg-[#0C0E6B] mx-auto rounded" />
          </div>

          {listings.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center">
              <p className="text-gray-600 text-sm">
                There are no open vacancies at the moment. Check back soon, or send us your CV below
                and we&apos;ll keep it on file for future openings.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {listings.map((job) => (
                <div key={job.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <h3 className="font-bold text-[#0C0E6B] text-lg">{job.position}</h3>
                    <div className="flex flex-wrap gap-2">
                      {job.phase && (
                        <span className="px-3 py-1 rounded-full bg-[#E8E9F4] text-[#0C0E6B] text-xs font-semibold">
                          {job.phase}
                        </span>
                      )}
                      {job.saceRequired && (
                        <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold">
                          <ShieldCheck size={12} /> SACE Registration Required
                        </span>
                      )}
                    </div>
                  </div>
                  {job.requirements && (
                    <p className="text-gray-600 text-sm leading-relaxed mb-3 whitespace-pre-wrap">{job.requirements}</p>
                  )}
                  {job.closingDate && (
                    <p className="flex items-center gap-1.5 text-xs text-gray-500">
                      <CalendarDays size={13} /> Closing date: {formatDate(job.closingDate)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Application Form */}
      <CareersApplicationForm listings={listings.map((l) => l.position)} />
    </>
  );
}
