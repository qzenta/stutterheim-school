import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Stutterheim International School",
  description: "Get in touch with Stutterheim International School — admissions, boarding, and general enquiries.",
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-[#111480] mb-2">Contact Us</h1>
      <div className="w-16 h-1 bg-[#FFD000] rounded mb-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Info */}
        <div>
          <div className="space-y-6 text-gray-700">
            <div>
              <p className="font-semibold text-[#111480]">Address</p>
              <p className="mt-1">49 Louisa Street<br />Stutterheim, Eastern Cape, 4930</p>
            </div>
            <div>
              <p className="font-semibold text-[#111480]">Phone</p>
              <a href="tel:+27673977613" className="mt-1 block hover:text-[#111480] transition-colors">(067) 397-7613</a>
            </div>
            <div>
              <p className="font-semibold text-[#111480]">Email</p>
              <a href="mailto:sis@stutterheimschool.co.za" className="mt-1 block hover:text-[#111480] transition-colors">sis@stutterheimschool.co.za</a>
            </div>
            <div>
              <p className="font-semibold text-[#111480]">Office Hours</p>
              <p className="mt-1">Monday – Friday: 7:00 AM – 3:00 PM</p>
            </div>
          </div>

          {/* Map */}
          <div className="mt-8 rounded-lg overflow-hidden border border-gray-200 h-64">
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
        <ContactForm />
      </div>
    </div>
  );
}
