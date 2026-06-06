import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A3A8F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <p className="text-[#E8A020] font-bold text-lg mb-2">Stutterheim International School</p>
          <p className="text-sm text-blue-200">49 Louisa Street<br />Stutterheim, Eastern Cape, 4930</p>
          <p className="text-sm text-blue-200 mt-2">
            <a href="tel:+27673977613" className="hover:text-white transition-colors">(067) 397-7613</a>
          </p>
          <p className="text-sm text-blue-200">
            <a href="mailto:sis@stutterheimschool.co.za" className="hover:text-white transition-colors">sis@stutterheimschool.co.za</a>
          </p>
        </div>

        <div>
          <p className="font-semibold mb-3 text-sm uppercase tracking-wider text-blue-300">Quick Links</p>
          <ul className="space-y-2 text-sm text-blue-200">
            {[
              { href: "/about", label: "About Us" },
              { href: "/subjects", label: "Subjects" },
              { href: "/staff", label: "Staff" },
              { href: "/gallery", label: "Gallery" },
              { href: "/events", label: "Events & Notices" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-3 text-sm uppercase tracking-wider text-blue-300">Connect</p>
          <ul className="space-y-2 text-sm text-blue-200">
            <li><a href="https://www.facebook.com/stutterheimint" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
            <li><a href="https://twitter.com/stutterheimint" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter / X</a></li>
            <li><a href="https://www.linkedin.com/company/stutterheimint" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
          </ul>
          <p className="text-sm text-blue-200 mt-4">Mon–Fri: 7:00 AM – 3:00 PM</p>
        </div>
      </div>

      <div className="border-t border-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-blue-300">
            &copy; {new Date().getFullYear()} Stutterheim International School (Pty) Ltd. All rights reserved.
          </p>
          <p className="text-xs text-blue-400">
            Developed &amp; Hosted by{" "}
            <a href="https://qzenta.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
              Qzenta
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
