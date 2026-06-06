import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Notices | Stutterheim International School",
  description: "Current notices, term dates, and events at Stutterheim International School.",
};

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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-[#1A3A8F] mb-2">Events & Notices</h1>
      <div className="w-16 h-1 bg-[#E8A020] rounded mb-10" />

      {/* Notices */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-[#1A3A8F] mb-6">Notices</h2>
        {notices.length === 0 ? (
          <p className="text-gray-400">No notices at this time. Check back soon.</p>
        ) : (
          <ul className="space-y-6">
            {notices.map((n, i) => (
              <li key={i} className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
                <p className="text-xs text-gray-400 mb-1">{n.date}</p>
                <p className="font-bold text-[#1A3A8F] mb-2">{n.title}</p>
                <p className="text-gray-600 text-sm">{n.body}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Term dates */}
      <section>
        <h2 className="text-2xl font-bold text-[#1A3A8F] mb-6">Term Dates</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-100 rounded-lg overflow-hidden">
            <thead className="bg-[#1A3A8F] text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Term</th>
                <th className="px-4 py-3 font-semibold">Start</th>
                <th className="px-4 py-3 font-semibold">End</th>
              </tr>
            </thead>
            <tbody>
              {termDates.map((t, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F7F8FA]"}>
                  <td className="px-4 py-3 text-gray-700">{t.term}</td>
                  <td className="px-4 py-3 text-gray-500">{t.start}</td>
                  <td className="px-4 py-3 text-gray-500">{t.end}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
