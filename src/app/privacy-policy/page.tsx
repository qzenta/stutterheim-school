import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Privacy Policy | Stutterheim International School",
  description: "Privacy Policy for Stutterheim International School — how we collect, use, and protect your personal information in accordance with POPIA.",
};

const sections = [
  {
    title: "1. Who We Are",
    body: `Stutterheim International School (Pty) Ltd ("SIS", "we", "us", "our") is a private school situated at 49 Louisa Street, Stutterheim, Eastern Cape, 4930, South Africa. We are responsible for the personal information we collect through this website and our contact form at stutterheimschool.co.za.`,
  },
  {
    title: "2. What Personal Information We Collect",
    body: `When you use the contact form or application enquiry form on our website, we may collect the following personal information:\n\n• Full name (parent/guardian and learner)\n• Email address\n• Phone/cell number\n• Learner's date of birth, grade, and current school\n• Town or area of residence\n• Any medical information voluntarily disclosed\n• Any messages or notes you submit\n\nWe do not collect payment information through this website.`,
  },
  {
    title: "3. How We Use Your Information",
    body: `We use the personal information you provide solely for the following purposes:\n\n• To respond to your admissions enquiry or general query\n• To send you the official application pack and relevant school information\n• To contact you regarding your child's application progress\n• To communicate school-related updates if you have opted in\n\nWe do not use your information for any purpose other than responding to your enquiry and facilitating the admissions process.`,
  },
  {
    title: "4. Sharing of Information",
    body: `We do not sell, rent, trade, or otherwise share your personal information with third parties for marketing or commercial purposes.\n\nYour information may be shared internally with SIS staff directly involved in the admissions process. We use Brevo (Sendinblue) as our email delivery platform — your email address and form content are transmitted through their service solely to deliver your message to our admissions team. Brevo's privacy policy is available at brevo.com.`,
  },
  {
    title: "5. Cookies and Local Storage",
    body: `This website uses browser localStorage (not tracking cookies) for the following limited purposes:\n\n• To remember if you have dismissed the admissions notice banner\n• To remember if you have accepted our cookie/privacy notice\n\nNo third-party tracking cookies, advertising networks, or analytics scripts are loaded on this website. We do not track your browsing behaviour.`,
  },
  {
    title: "6. Data Retention",
    body: `We retain personal information submitted through our website for as long as is necessary to fulfil the purpose for which it was collected (i.e. to process your admissions enquiry) or as required by applicable law. Enquiries that do not result in enrolment are not retained beyond 12 months.`,
  },
  {
    title: "7. Your Rights Under POPIA",
    body: `In terms of the Protection of Personal Information Act (POPIA), Act 4 of 2013, you have the right to:\n\n• Know what personal information we hold about you\n• Request correction of inaccurate information\n• Request deletion of your personal information\n• Object to the processing of your personal information\n• Lodge a complaint with the Information Regulator of South Africa\n\nTo exercise any of these rights, please contact us at the details below.`,
  },
  {
    title: "8. Security",
    body: `We take reasonable technical and organisational measures to protect your personal information against unauthorised access, loss, or misuse. Our website is served over HTTPS (TLS encryption). Form submissions are transmitted via encrypted channels.`,
  },
  {
    title: "9. Contact Us for Data Queries",
    body: `If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:\n\nEmail: sis@stutterheimschool.co.za\nPhone: (067) 397-7613\nAddress: 49 Louisa Street, Stutterheim, Eastern Cape, 4930`,
  },
  {
    title: "10. Updates to This Policy",
    body: `We may update this Privacy Policy from time to time. The most current version will always be available at stutterheimschool.co.za/privacy-policy. This policy was last updated on 7 June 2026.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-[#0C0E6B] pt-24 pb-14 px-4 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-blue-300 text-xs font-semibold uppercase tracking-[0.2em] mb-3">Legal</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-blue-200 text-base max-w-xl mx-auto leading-relaxed">
              How Stutterheim International School collects, uses, and protects your personal information
              in compliance with POPIA (South Africa).
            </p>
            <div className="mt-6 w-16 h-1 bg-white/30 mx-auto rounded" />
          </FadeIn>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 px-4 bg-[#F5F6F8]">
        <div className="max-w-3xl mx-auto space-y-6">
          {sections.map((s, i) => (
            <FadeIn key={s.title} delay={i * 40}>
              <div className="bg-white rounded-xl border border-gray-100 p-7 shadow-sm">
                <h2 className="text-base font-bold text-[#0C0E6B] mb-3">{s.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{s.body}</p>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={sections.length * 40}>
            <div className="bg-[#E8E9F4] border border-[#0C0E6B]/15 rounded-xl px-6 py-5 text-center">
              <p className="text-[#0C0E6B] font-bold text-sm mb-1">Questions about your data?</p>
              <p className="text-gray-600 text-sm">
                Email us at{" "}
                <a href="mailto:sis@stutterheimschool.co.za" className="text-[#0C0E6B] underline font-semibold">
                  sis@stutterheimschool.co.za
                </a>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
