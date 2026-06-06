import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ChevronDown } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Admissions | Stutterheim International School",
  description:
    "Apply to Stutterheim International School for 2027. Download application forms, fee structures, and learn about our admissions process.",
};

const steps = [
  {
    num: "01",
    title: "Download & Complete Application Form",
    desc: "Download our official application form (PDF), complete all sections clearly, and gather the required supporting documents.",
  },
  {
    num: "02",
    title: "Submit Your Application",
    desc: "Submit your completed form via email to sis@stutterheimschool.co.za, or deliver it in person to our school office.",
  },
  {
    num: "03",
    title: "Application Review",
    desc: "Our admissions team reviews all applications within 5 business days and will contact you to schedule an assessment where required.",
  },
  {
    num: "04",
    title: "Offer & Acceptance",
    desc: "Successful applicants receive a formal offer letter. Accept your place and complete registration to secure your child&apos;s enrolment.",
  },
];

const requirements = [
  "Certified copy of learner's birth certificate",
  "Most recent school report / academic records",
  "Certified copy of parent/guardian ID document",
  "Proof of residence (utility bill, not older than 3 months)",
  "Transfer card (for learners transferring from another school)",
  "2 passport-size photographs of the learner",
];

const faqs = [
  {
    q: "What grades does SIS currently offer?",
    a: "We currently offer Grades R through 12 across our full curriculum. Contact us for specific availability per grade for 2027.",
  },
  {
    q: "Is boarding available?",
    a: "Yes, we offer boarding facilities with limited spaces. Please contact us directly to discuss boarding availability and fees.",
  },
  {
    q: "What is the language of instruction?",
    a: "The language of instruction at SIS is English across all subjects.",
  },
  {
    q: "When is the application deadline?",
    a: "We recommend applying as early as possible — spaces for 2027 are limited. Contact us for specific deadline information.",
  },
  {
    q: "Are bursaries or financial assistance available?",
    a: "Please contact the school office directly to enquire about any available financial assistance options.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[#111480] text-white pt-24 pb-20 px-4" id="how">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-blue-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              2027 Academic Year
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Admissions</h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
              We welcome applications from all learners who are seeking a quality, holistic education
              in a safe and supportive environment.
            </p>
            <div className="mt-6 w-16 h-1 bg-[#111480] mx-auto rounded" />
          </FadeIn>
        </div>
      </div>

      {/* Application downloads */}
      <section className="py-16 px-4 bg-[#111480]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#111480]">Download Application Materials</h2>
            <p className="text-[#111480]/70 mt-2 text-sm">
              All documents will be provided by Dr Haruna — check back for downloads or contact us directly.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="flex items-center gap-2 px-7 py-3.5 bg-[#111480] text-white font-bold rounded-lg hover:bg-blue-900 transition-all hover:scale-105 text-sm shadow"
              >
                📄 Application Form (PDF)
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-7 py-3.5 bg-[#111480] text-white font-bold rounded-lg hover:bg-blue-900 transition-all hover:scale-105 text-sm shadow"
              >
                📄 Fee Structure (PDF)
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-7 py-3.5 bg-[#111480] text-white font-bold rounded-lg hover:bg-blue-900 transition-all hover:scale-105 text-sm shadow"
              >
                📄 School Brochure (PDF)
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-7 py-3.5 border-2 border-[#111480] text-[#111480] font-bold rounded-lg hover:bg-[#111480] hover:text-white transition-all hover:scale-105 text-sm"
              >
                🌐 Apply Online (Google Form)
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How to apply — steps */}
      <section className="py-20 px-4 bg-[#F7F8FA]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <p className="text-blue-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Simple Process
            </p>
            <h2 className="text-3xl font-bold text-[#111480]">How to Apply</h2>
            <div className="mt-4 w-16 h-1 bg-[#111480] mx-auto rounded" />
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 100}>
                <div className="bg-white rounded-xl border border-gray-100 p-7 hover:shadow-md transition-shadow h-full">
                  <p className="text-[#111480] text-3xl font-bold mb-3">{step.num}</p>
                  <h3 className="font-bold text-[#111480] text-base mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="text-blue-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              What You Need
            </p>
            <h2 className="text-3xl font-bold text-[#111480]">Application Requirements</h2>
            <div className="mt-4 w-16 h-1 bg-[#111480] mx-auto rounded" />
          </FadeIn>

          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {requirements.map((req) => (
                <div key={req} className="flex items-start gap-3 p-4 bg-[#F7F8FA] rounded-lg border border-gray-100">
                  <CheckCircle className="w-5 h-5 text-[#111480] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{req}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Key dates placeholder */}
      <section className="py-16 px-4 bg-[#111480] text-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-2">Key Dates for 2027</h2>
            <p className="text-blue-200 text-sm">
              Specific dates will be confirmed by the school — contact us for the latest information.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              {[
                { label: "Applications Open", date: "Now Open" },
                { label: "Application Deadline", date: "To Be Confirmed" },
                { label: "School Starts", date: "January 2027" },
              ].map((d) => (
                <div key={d.label} className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <p className="text-white font-bold text-lg mb-1">{d.date}</p>
                  <p className="text-blue-200 text-sm">{d.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="py-20 px-4 bg-[#F7F8FA]">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="text-blue-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Got Questions?
            </p>
            <h2 className="text-3xl font-bold text-[#111480]">Frequently Asked Questions</h2>
            <div className="mt-4 w-16 h-1 bg-[#111480] mx-auto rounded" />
          </FadeIn>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 80}>
                <details className="bg-white rounded-xl border border-gray-100 group">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-[#111480] text-sm list-none select-none">
                    {faq.q}
                    <ChevronDown size={16} className="shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </details>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-10">
            <p className="text-gray-600 text-sm mb-4">Still have questions?</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-[#111480] text-white font-bold rounded-lg hover:bg-blue-900 transition-colors text-sm"
            >
              Contact Us
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
