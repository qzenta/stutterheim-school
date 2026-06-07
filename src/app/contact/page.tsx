import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Contact Us | Stutterheim International School",
  description: "Get in touch with Stutterheim International School — admissions, boarding, and general enquiries.",
};

const BASE = "https://www.stutterheimschool.co.za/extra-images";

export default function ContactPage() {
  return (
    <>
      {/* Page banner */}
      <div
        className="relative text-white pt-24 pb-16 px-4"
        style={{
          backgroundImage: `url(${BASE}/banner2.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#111480]/80" />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-blue-200 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              We&apos;d Love to Hear From You
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-3">Contact Us</h1>
            <p className="text-blue-200 text-lg max-w-xl mx-auto leading-relaxed">
              Reach out for admissions enquiries, boarding information, or any general questions about SIS.
            </p>
            <div className="mt-5 w-16 h-1 bg-white/40 mx-auto rounded" />
          </FadeIn>
        </div>
      </div>

      {/* Contact body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-xl font-bold text-[#111480] mb-6">School Details</h2>
            <div className="space-y-5 text-gray-700">
              <div className="flex items-start gap-4 p-4 bg-[#F7F8FA] rounded-xl border border-gray-100">
                <span className="text-xl">📍</span>
                <div>
                  <p className="font-semibold text-[#111480] text-sm">Address</p>
                  <p className="mt-1 text-sm">49 Louisa Street<br />Stutterheim, Eastern Cape, 4930</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-[#F7F8FA] rounded-xl border border-gray-100">
                <span className="text-xl">📞</span>
                <div>
                  <p className="font-semibold text-[#111480] text-sm">Phone</p>
                  <a href="tel:+27673977613" className="mt-1 block text-sm hover:text-[#111480] transition-colors">(067) 397-7613</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-[#F7F8FA] rounded-xl border border-gray-100">
                <span className="text-xl">✉️</span>
                <div>
                  <p className="font-semibold text-[#111480] text-sm">Email</p>
                  <a href="mailto:sis@stutterheimschool.co.za" className="mt-1 block text-sm hover:text-[#111480] transition-colors">sis@stutterheimschool.co.za</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-[#F7F8FA] rounded-xl border border-gray-100">
                <span className="text-xl">🕐</span>
                <div>
                  <p className="font-semibold text-[#111480] text-sm">Office Hours</p>
                  <p className="mt-1 text-sm">Monday – Friday: 7:00 AM – 3:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-gray-200 shadow-sm" style={{ height: "240px" }}>
              <iframe
                title="Stutterheim International School location"
                src="https://maps.google.com/maps?q=49+Louisa+Street,+Stutterheim,+Eastern+Cape,+4930,+South+Africa&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-xl font-bold text-[#111480] mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
