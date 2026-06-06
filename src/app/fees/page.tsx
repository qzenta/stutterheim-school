import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Fee Structure | Stutterheim International School",
  description:
    "View the fee structure at Stutterheim International School. Download the official fee schedule or contact us for more information.",
};

const feeCategories = [
  {
    category: "Tuition Fees",
    note: "Per learner, per term. Contact school for confirmed 2027 rates.",
    rows: [
      { item: "Grade R – Grade 3", amount: "To be confirmed" },
      { item: "Grade 4 – Grade 7", amount: "To be confirmed" },
      { item: "Grade 8 – Grade 12", amount: "To be confirmed" },
    ],
  },
  {
    category: "Registration & Annual Fees",
    note: "Once-off or annual fees payable at start of year.",
    rows: [
      { item: "Registration Fee (new learners)", amount: "To be confirmed" },
      { item: "Annual Resource Levy", amount: "To be confirmed" },
      { item: "Stationery / Materials", amount: "To be confirmed" },
    ],
  },
  {
    category: "Boarding Fees",
    note: "Per learner, per term. Limited spaces — enquire early.",
    rows: [
      { item: "Full Boarding (accommodation + meals)", amount: "To be confirmed" },
      { item: "Laundry Supplement (optional)", amount: "To be confirmed" },
    ],
  },
  {
    category: "Co-curricular Activities",
    note: "Optional programmes billed separately.",
    rows: [
      { item: "Ballet Dancing", amount: "To be confirmed" },
      { item: "Swimming Lessons", amount: "To be confirmed" },
      { item: "Sports & Recreation", amount: "To be confirmed" },
    ],
  },
];

export default function FeesPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[#111480] text-white pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-white text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Transparent Pricing
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Fee Structure</h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
              We believe quality education should be accessible. Contact us or download the
              official fee schedule for 2027 rates.
            </p>
            <div className="mt-6 w-16 h-1 bg-[#111480] mx-auto rounded" />
          </FadeIn>
        </div>
      </div>

      {/* Download CTA */}
      <section className="py-12 px-4 bg-[#111480]">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <p className="text-white font-bold text-lg mb-2">
            📄 Download the Official 2027 Fee Schedule
          </p>
          <p className="text-blue-200 text-sm mb-6">
            The PDF contains confirmed per-grade fees, payment terms, and boarding rates.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="px-8 py-3 bg-[#111480] text-white font-bold rounded-lg hover:bg-blue-900 transition-all hover:scale-105 text-sm"
            >
              Download Fee Structure (PDF)
            </a>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#111480] transition-all hover:scale-105 text-sm"
            >
              Enquire Directly
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Fee tables */}
      <section className="py-20 px-4 bg-[#F7F8FA]">
        <div className="max-w-5xl mx-auto space-y-10">
          <FadeIn className="text-center mb-4">
            <p className="text-sm text-gray-500 bg-yellow-50 border border-yellow-200 rounded-lg px-5 py-3 inline-block">
              ⚠️ Fee amounts below are placeholders. Confirmed 2027 rates will be provided by Dr Haruna — download the PDF or contact the school.
            </p>
          </FadeIn>

          {feeCategories.map((cat, ci) => (
            <FadeIn key={cat.category} delay={ci * 100}>
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <div className="bg-[#111480] px-6 py-4">
                  <h2 className="text-white font-bold text-base">{cat.category}</h2>
                  <p className="text-blue-200 text-xs mt-0.5">{cat.note}</p>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100 bg-[#F7F8FA]">
                      <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Item
                      </th>
                      <th className="text-right px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Amount (per term)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cat.rows.map((row, ri) => (
                      <tr
                        key={row.item}
                        className={`border-b border-gray-50 ${ri % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}`}
                      >
                        <td className="px-6 py-4 text-sm text-gray-700">{row.item}</td>
                        <td className="px-6 py-4 text-sm text-gray-500 text-right font-mono">
                          {row.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Payment terms */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#111480]">Payment Information</h2>
            <div className="mt-3 w-12 h-1 bg-[#111480] mx-auto rounded" />
          </FadeIn>
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
              {[
                { heading: "Payment Terms", body: "Fees are payable per term in advance. Exact payment dates will be communicated in the school calendar." },
                { heading: "Payment Methods", body: "Bank EFT transfers accepted. Proof of payment to be emailed to sis@stutterheimschool.co.za." },
                { heading: "Arrears Policy", body: "Learners with outstanding fees may not be permitted to write exams. Please contact us if you have difficulty." },
              ].map((item) => (
                <div key={item.heading} className="bg-[#F7F8FA] rounded-xl border border-gray-100 p-6">
                  <p className="font-bold text-[#111480] mb-2 text-sm">{item.heading}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111480] py-16 px-4">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h2>
          <p className="text-blue-200 text-sm mb-6 leading-relaxed">
            Don&apos;t let uncertainty hold you back. Contact us today and we&apos;ll walk you through the
            admissions process and fees in detail.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/admissions"
              className="px-8 py-3 bg-[#111480] text-[#111480] font-bold rounded-lg hover:bg-amber-400 transition-all hover:scale-105 text-sm"
            >
              Start Application
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#111480] transition-all hover:scale-105 text-sm"
            >
              Contact School
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
