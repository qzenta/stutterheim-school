"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/subjects", label: "Subjects" },
  { href: "/staff", label: "Staff" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events & Notices" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#111480] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3 font-semibold text-lg tracking-tight">
          <span className="text-[#FFD000] font-bold">SIS</span>
          <span className="hidden sm:inline">Stutterheim International School</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-[#FFD000] transition-colors">
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 px-4 py-2 bg-[#FFD000] text-[#111480] font-semibold rounded hover:bg-amber-400 transition-colors"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded hover:bg-blue-800 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#111480] border-t border-blue-700 px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-2 text-sm hover:text-[#FFD000] transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 block text-center px-4 py-2 bg-[#FFD000] text-[#111480] font-semibold rounded"
            onClick={() => setOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      )}
    </header>
  );
}
