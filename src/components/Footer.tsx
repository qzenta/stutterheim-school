import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/admissions", label: "Admissions" },
  { href: "/subjects", label: "Subjects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const downloads = [
  { href: "#", label: "Application Form (PDF)" },
  { href: "#", label: "Fee Structure (PDF)" },
  { href: "#", label: "School Brochure (PDF)" },
  { href: "/admissions", label: "Apply Online" },
];

const socials = [
  {
    href: "https://www.facebook.com/stutterheimint",
    label: "Facebook",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: "https://twitter.com/stutterheimint",
    label: "Twitter / X",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/stutterheimint",
    label: "LinkedIn",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d1060] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Logo + tagline + socials */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#FFD000] text-[#111480] font-extrabold text-xs px-2 py-1 rounded">
                SIS
              </div>
              <span className="font-bold text-sm text-white leading-tight">
                Stutterheim<br />International School
              </span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Providing academic excellence and holistic development to learners in
              Stutterheim, Eastern Cape since our founding.
            </p>
            <div className="flex gap-3">
              {socials.map(({ href, label, svg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FFD000] hover:text-[#111480] flex items-center justify-center transition-all duration-200"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-[#FFD000] font-semibold text-xs uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-blue-200 text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Downloads */}
          <div>
            <h3 className="text-[#FFD000] font-semibold text-xs uppercase tracking-wider mb-5">
              Downloads & Admissions
            </h3>
            <ul className="space-y-2.5">
              {downloads.map((d) => (
                <li key={d.label}>
                  <a
                    href={d.href}
                    className="text-blue-200 text-sm hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#FFD000]">↓</span>
                    {d.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/admissions"
                className="inline-block px-5 py-2.5 bg-[#FFD000] text-[#111480] font-bold rounded-lg text-sm hover:bg-amber-400 transition-colors"
              >
                Apply for 2027 →
              </Link>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-[#FFD000] font-semibold text-xs uppercase tracking-wider mb-5">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#FFD000] mt-0.5 shrink-0" />
                <span className="text-blue-200 text-sm leading-snug">
                  49 Louisa Street<br />Stutterheim, Eastern Cape, 4930
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#FFD000] shrink-0" />
                <a
                  href="tel:+27673977613"
                  className="text-blue-200 text-sm hover:text-white transition-colors"
                >
                  (067) 397-7613
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#FFD000] shrink-0" />
                <a
                  href="mailto:sis@stutterheimschool.co.za"
                  className="text-blue-200 text-sm hover:text-white transition-colors"
                >
                  sis@stutterheimschool.co.za
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={15} className="text-[#FFD000] shrink-0" />
                <span className="text-blue-200 text-sm">Mon – Fri: 7:00 AM – 3:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-400">
          <p>
            &copy; {new Date().getFullYear()} Stutterheim International School (Pty) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">·</span>
            <a
              href="https://qzenta.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Developed &amp; Hosted by Qzenta
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
