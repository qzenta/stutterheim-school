import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Events & Notices | Stutterheim International School",
  description: "Current notices, term dates, and upcoming events at Stutterheim International School.",
};

const BASE = "/extra-images";

// Update these arrays when the school sends through term dates and notices
const notices: { date: string; title: string; body: string }[] = [];

const termDates: { term: string; start: string; end: string }[] = [
  { term: "Term 1 2027", start: "TBC", end: "TBC" },
  { term: "Term 2 2027", start: "TBC", end: "TBC" },
  { term: "Term 3 2027", start: "TBC", end: "TBC" },
  { term: "Term 4 2027", start: "TBC", end: "TBC" },
];

export default function EventsPage() {
  return (
    <>
      {/* Page banner */}
      <div
        className="relative text-white pt-24 pb-16 px-4"
        style={{
          backgroundImage: `url(${BASE}/book-fair.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0C0E6B]/80" />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-blue-200 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Stay Informed
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-3">Events &amp; Notices</h1>
            <p className="text-blue-200 text-lg max-w-xl mx-auto leading-relaxed">
              Term dates, school notices, upcoming events and important announcements for the SIS community.
            </p>
            <div className="mt-5 w-16 h-1 bg-white/40 mx-auto rounded" />
          </FadeIn>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Notices */}
        <section className="mb-14">
          <FadeIn>
            <h2 className="text-2xl font-bold text-[#0C0E6B] mb-2">Notices</h2>
            <div className="w-10 h-1 bg-[#0C0E6B] rounded mb-6" />
          </FadeIn>
          {notices.length === 0 ? (
            <FadeIn>
              <div className="bg-[#F5F6F8] border border-gray-100 rounded-xl p-8 text-center">
                <p className="text-3xl mb-3">📋</p>
                <p className="text-gray-500 font-medium">No notices at this time.</p>
                <p className="text-gray-400 text-sm mt-1">Check back soon — notices will appear here as the school publishes them.</p>
              </div>
            </FadeIn>
          ) : (
            <ul className="space-y-5">
              {notices.map((n, i) => (
                <li key={i} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                  <p className="text-xs text-gray-400 mb-1">{n.date}</p>
                  <p className="font-bold text-[#0C0E6B] mb-2">{n.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{n.body}</p>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Term dates */}
        <section className="mb-14">
          <FadeIn>
            <h2 className="text-2xl font-bold text-[#0C0E6B] mb-2">Term Dates 2027</h2>
            <div className="w-10 h-1 bg-[#0C0E6B] rounded mb-6" />
          </FadeIn>
          <FadeIn>
            <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-100">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#0C0E6B] text-white">
                  <tr>
                    <th className="px-5 py-3.5 font-semibold">Term</th>
                    <th className="px-5 py-3.5 font-semibold">Start Date</th>
                    <th className="px-5 py-3.5 font-semibold">End Date</th>
                  </tr>
                </thead>
                <tbody>
                  {termDates.map((t, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F6F8]"}>
                      <td className="px-5 py-4 text-gray-700 font-medium">{t.term}</td>
                      <td className="px-5 py-4 text-gray-500">{t.start}</td>
                      <td className="px-5 py-4 text-gray-500">{t.end}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">
              Term dates will be confirmed by Dr Haruna — contact the school for the latest information.
            </p>
          </FadeIn>
        </section>

        {/* Upcoming school events photos strip */}
        <section>
          <FadeIn>
            <h2 className="text-2xl font-bold text-[#0C0E6B] mb-2">School Activities</h2>
            <div className="w-10 h-1 bg-[#0C0E6B] rounded mb-6" />
          </FadeIn>
          <FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { src: `${BASE}/book-fair.jpg`, label: "Book Fair" },
                { src: `${BASE}/Camping.webp`, label: "Camping" },
                { src: `${BASE}/field-trip.jpg`, label: "Field Trip" },
                { src: `${BASE}/make-a-difference.jpg`, label: "Community Outreach" },
              ].map((item) => (
                <div key={item.label} className="relative rounded-xl overflow-hidden group" style={{ aspectRatio: "1" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0C0E6B]/40 group-hover:bg-[#0C0E6B]/20 transition-colors" />
                  <p className="absolute bottom-2 left-0 right-0 text-center text-white text-xs font-semibold px-2">{item.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>
      </div>
    </>
  );
}
