import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Stutterheim International School",
  description: "Get in touch with Stutterheim International School — admissions, boarding, and general enquiries.",
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-[#1A3A8F] mb-2">Contact Us</h1>
      <div className="w-16 h-1 bg-[#E8A020] rounded mb-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Info */}
        <div>
          <div className="space-y-6 text-gray-700">
            <div>
              <p className="font-semibold text-[#1A3A8F]">Address</p>
              <p className="mt-1">49 Louisa Street<br />Stutterheim, Eastern Cape, 4930</p>
            </div>
            <div>
              <p className="font-semibold text-[#1A3A8F]">Phone</p>
              <a href="tel:+27673977613" className="mt-1 block hover:text-[#1A3A8F] transition-colors">(067) 397-7613</a>
            </div>
            <div>
              <p className="font-semibold text-[#1A3A8F]">Email</p>
              <a href="mailto:sis@stutterheimschool.co.za" className="mt-1 block hover:text-[#1A3A8F] transition-colors">sis@stutterheimschool.co.za</a>
            </div>
            <div>
              <p className="font-semibold text-[#1A3A8F]">Office Hours</p>
              <p className="mt-1">Monday – Friday: 7:00 AM – 3:00 PM</p>
            </div>
          </div>

          {/* Map */}
          <div className="mt-8 rounded-lg overflow-hidden border border-gray-200 h-64">
            <iframe
              title="Stutterheim International School location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.0!2d27.4331!3d-32.5636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDMzJzQ5LjAiUyAyN8KwMjUnNTkuMiJF!5e0!3m2!1sen!2sza!4v1234567890"
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
