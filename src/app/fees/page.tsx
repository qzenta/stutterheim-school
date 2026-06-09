import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Fee Structure | Stutterheim International School",
  description: "View the 2027 fee structure at Stutterheim International School. School fees, registration fees, boarding fees and banking details.",
};

export default function FeesPage() {
  return (
    <>
      {/* Page banner */}
      <div
        className="relative text-white pt-24 pb-20 px-4"
        style={{
          backgroundImage: `url(/extra-images/campus-history.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0C0E6B]/82" />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-blue-200 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Transparent Pricing
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Fee Structure</h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
              2027 confirmed fee schedule for Stutterheim International School.
            </p>
            <div className="mt-6 w-16 h-1 bg-white/40 mx-auto rounded" />
          </FadeIn>
        </div>
      </div>

      {/* Fee tables */}
      <section className="py-20 px-4 bg-[#E8EAEE]">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* School Fees */}
          <FadeIn>
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="bg-[#0C0E6B] px-6 py-4">
                <h2 className="text-white font-bold text-base">School Fees</h2>
                <p className="text-blue-200 text-xs mt-0.5">Monthly — all grades, Grade R through Grade 12</p>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100 bg-[#E8EAEE]">
                    <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Item</th>
                    <th className="text-right px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-sm text-gray-700">Monthly School Fees (all grades)</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#0C0E6B] text-right">R1,300 / month</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>

          {/* Registration Fee */}
          <FadeIn delay={80}>
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="bg-[#0C0E6B] px-6 py-4">
                <h2 className="text-white font-bold text-base">Registration Fee</h2>
                <p className="text-blue-200 text-xs mt-0.5">Once-off, non-refundable — payable on enrolment</p>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100 bg-[#E8EAEE]">
                    <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Item</th>
                    <th className="text-right px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-sm text-gray-700">Registration Fee (new learners, non-refundable)</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#0C0E6B] text-right">R250</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>

          {/* Boarding */}
          <FadeIn delay={160}>
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="bg-[#0C0E6B] px-6 py-4">
                <h2 className="text-white font-bold text-base">Boarding Fees</h2>
                <p className="text-blue-200 text-xs mt-0.5">Limited spaces — enquire early</p>
              </div>
              <table className="w-full">
                <tbody>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-sm text-gray-700">Full Boarding (accommodation + meals)</td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-right">Contact school directly</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>

          {/* Fee conditions note */}
          <FadeIn delay={200}>
            <div className="bg-[#E8E9F4] border border-[#0C0E6B]/15 rounded-xl px-6 py-5">
              <p className="text-[#0C0E6B] font-bold text-sm mb-1">Payment Conditions</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Monthly fees are due on the first day of the month. Learners with outstanding fees exceeding
                3 months will be sent home until an arrangement is made with the school principal.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Banking details */}
      <section className="py-16 px-4 bg-[#E8EAEE]">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#0C0E6B]">Banking Details</h2>
            <p className="text-gray-500 text-sm mt-2">Use EFT for all fee payments</p>
            <div className="mt-3 w-12 h-1 bg-[#0C0E6B] mx-auto rounded" />
          </FadeIn>
          <FadeIn>
            <div className="bg-[#E8EAEE] rounded-2xl border border-gray-100 overflow-hidden max-w-lg mx-auto">
              <div className="bg-[#0C0E6B] px-6 py-4">
                <p className="text-white font-bold text-sm">FNB — Electronic Transfer</p>
              </div>
              {[
                { label: "Account Name", value: "Stutterheim International School" },
                { label: "Bank", value: "FNB (First National Bank)" },
                { label: "Account Number", value: "62865720124" },
                { label: "Branch Code", value: "210835" },
                { label: "Payment Reference", value: "Learner's surname" },
              ].map((row, i) => (
                <div key={row.label} className={`flex justify-between px-6 py-3 text-sm border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#E8EAEE]"}`}>
                  <span className="text-gray-500 font-medium">{row.label}</span>
                  <span className="text-[#0C0E6B] font-bold">{row.value}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-xs mt-4">
              Email proof of payment to{" "}
              <a href="mailto:sis@stutterheimschool.co.za" className="text-[#0C0E6B] underline">
                sis@stutterheimschool.co.za
              </a>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0C0E6B] py-16 px-4">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h2>
          <p className="text-blue-200 text-sm mb-6 leading-relaxed">
            Start your application online or download the full application form.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/apply"
              className="px-8 py-3 bg-white text-[#0C0E6B] font-bold rounded-lg hover:bg-blue-50 transition-all hover:scale-105 text-sm"
            >
              Apply Online
            </Link>
            <a
              href="/downloads/SIS-Application-Form-2027.pdf"
              className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0C0E6B] transition-all hover:scale-105 text-sm"
            >
              Download Application Form
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
