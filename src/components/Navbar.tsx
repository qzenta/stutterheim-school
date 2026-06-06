"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
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
      { label: "School Leadership", href: "/about#leadership" },
    ],
  },
  {
    label: "Academics",
    href: "/subjects",
    children: [
      { label: "Subjects Offered", href: "/subjects" },
      { label: "Teaching Approach", href: "/subjects#approach" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    highlight: true,
    children: [
      { label: "How to Apply", href: "/admissions#how" },
      { label: "Fee Structure", href: "/fees" },
      { label: "Application Form (PDF)", href: "#" },
      { label: "Apply Online", href: "#" },
    ],
  },
  {
    label: "School Life",
    href: "/gallery",
    children: [
      { label: "Gallery", href: "/gallery" },
      { label: "Events & Notices", href: "/events" },
      { label: "Activities", href: "/about#activities" },
    ],
  },
  { label: "Staff", href: "/staff" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
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

  const isHeroPage = pathname === "/";
  const navBg =
    scrolled || open
      ? "bg-[#111480] shadow-lg"
      : isHeroPage
      ? "bg-transparent"
      : "bg-[#111480] shadow-md";

  return (
    <nav className={`transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="bg-[#FFD000] text-[#111480] font-extrabold text-xs px-2 py-1 rounded tracking-wide">
            SIS
          </div>
          <div className="text-white leading-tight">
            <p className="font-bold text-sm hidden sm:block">Stutterheim International School</p>
            <p className="font-bold text-sm sm:hidden">SIS</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-0.5 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && openDropdown(item.label)}
                onMouseLeave={() => item.children && scheduleClose()}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-0.5 px-3 py-2 rounded transition-all ${
                    item.highlight
                      ? "bg-[#FFD000] text-[#111480] font-bold hover:bg-amber-400"
                      : isActive
                      ? "text-[#FFD000]"
                      : "text-white/90 hover:text-[#FFD000]"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
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
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#111480] font-medium transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Search icon (desktop) */}
        <button
          className="hidden xl:flex p-2 text-white/70 hover:text-[#FFD000] transition-colors ml-1"
          onClick={() => setSearchOpen(true)}
          aria-label="Search site"
        >
          <Search size={18} />
        </button>

        {/* Mobile controls */}
        <div className="xl:hidden flex items-center gap-1">
          <button
            className="p-2 text-white/70 hover:text-[#FFD000] transition-colors"
            onClick={() => setSearchOpen(true)}
            aria-label="Search site"
          >
            <Search size={20} />
          </button>
          <button
            className="p-2 text-white hover:text-[#FFD000] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Mobile drawer — slide down */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[80vh] overflow-y-auto" : "max-h-0"
        }`}
      >
        <div className="border-t border-[#1a2090] px-4 pt-3 pb-6 space-y-0.5">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    className={`w-full flex items-center justify-between py-2.5 px-2 text-sm font-medium rounded transition-colors ${
                      item.highlight ? "text-[#FFD000]" : "text-white hover:text-[#FFD000]"
                    }`}
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
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
                    <div className="ml-3 pl-3 border-l border-[#2a34a0] pb-1 space-y-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block py-2 px-2 text-sm text-blue-200 hover:text-white transition-colors"
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
                      ? "text-[#FFD000]"
                      : "text-white hover:text-[#FFD000]"
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
              className="block text-center px-4 py-3 bg-[#FFD000] text-[#111480] font-bold rounded text-sm hover:bg-amber-400 transition-colors"
              onClick={() => setOpen(false)}
            >
              Apply for 2027
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
