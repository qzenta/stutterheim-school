"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import SearchModal from "@/components/SearchModal";

type NavChild = { label: string; href: string };
type NavItem = {
  label: string;
  href: string;
  highlight?: boolean;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about#story" },
      { label: "Vision & Mission", href: "/about#mission" },
      { label: "Director's Welcome", href: "/welcome" },
      { label: "Leadership Team", href: "/leadership" },
    ],
  },
  {
    label: "Academics",
    href: "/subjects",
    children: [
      { label: "Pre-School (Grade R)", href: "/pre-school" },
      { label: "Primary School (Grades 1–7)", href: "/primary-school" },
      { label: "Senior Phase (Grades 8–9)", href: "/high-school" },
      { label: "All Subjects", href: "/subjects" },
      { label: "Activities & Sport", href: "/about#activities" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    highlight: true,
    children: [
      { label: "How to Apply", href: "/admissions" },
      { label: "Apply Online", href: "/apply" },
      { label: "Fee Structure", href: "/fees" },
      { label: "Request Documents", href: "mailto:sis@stutterheimschool.co.za?subject=Application%20Pack%20Request" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
  { label: "Staff", href: "/staff" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 180);
  };

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/images/logo.png"
            alt="Stutterheim International School"
            width={200}
            height={64}
            className="h-16 w-auto object-contain"
            priority
            unoptimized
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-0.5 text-sm font-medium">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href + "/"));
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && openDropdown(item.label)}
                onMouseLeave={() => item.children && scheduleClose()}
              >
                <Link
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded transition-all text-sm ${
                    item.highlight
                      ? "bg-[#0C0E6B] text-white font-bold hover:bg-blue-900"
                      : isActive
                      ? "text-[#0C0E6B] font-semibold"
                      : "text-gray-600 hover:text-[#0C0E6B]"
                  }`}
                >
                  {item.label}
                </Link>

                {item.children && activeDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl py-1.5 z-50 border border-gray-100"
                    onMouseEnter={() => openDropdown(item.label)}
                    onMouseLeave={scheduleClose}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-[#0C0E6B] font-medium transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Search icon */}
          <button
            className="p-2 text-gray-400 hover:text-[#0C0E6B] transition-colors ml-1"
            onClick={() => setSearchOpen(true)}
            aria-label="Search site"
          >
            <Search size={18} />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="xl:hidden flex items-center gap-1">
          <button
            className="p-2 text-gray-400 hover:text-[#0C0E6B] transition-colors"
            onClick={() => setSearchOpen(true)}
            aria-label="Search site"
          >
            <Search size={20} />
          </button>
          <button
            className="p-2 text-[#0C0E6B] hover:text-blue-700 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100 ${
          open ? "max-h-[80vh] overflow-y-auto" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-0.5">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    className={`w-full flex items-center justify-between py-2.5 px-2 text-sm font-medium rounded transition-colors ${
                      item.highlight
                        ? "text-[#0C0E6B] font-bold"
                        : "text-gray-700 hover:text-[#0C0E6B]"
                    }`}
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${
                        mobileExpanded === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="ml-3 pl-3 border-l border-gray-200 pb-1 space-y-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block py-2 px-2 text-sm text-gray-500 hover:text-[#0C0E6B] transition-colors"
                          onClick={() => {
                            setOpen(false);
                            setMobileExpanded(null);
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`block py-2.5 px-2 text-sm font-medium rounded transition-colors ${
                    pathname === item.href
                      ? "text-[#0C0E6B] font-semibold"
                      : "text-gray-700 hover:text-[#0C0E6B]"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <div className="pt-3">
            <Link
              href="/admissions"
              className="block text-center px-4 py-3 bg-[#0C0E6B] text-white font-bold rounded text-sm hover:bg-blue-900 transition-colors"
              onClick={() => setOpen(false)}
            >
              Apply for 2027
            </Link>
          </div>
        </div>
      </div>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </nav>
  );
}
