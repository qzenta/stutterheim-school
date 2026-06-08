"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem("sis-cookie-consent");
      if (!accepted) {
        // Small delay so it doesn't flash immediately on first paint
        const t = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      // localStorage unavailable (SSR guard)
    }
  }, []);

  const accept = () => {
    try { localStorage.setItem("sis-cookie-consent", "accepted"); } catch {}
    setVisible(false);
  };

  const decline = () => {
    try { localStorage.setItem("sis-cookie-consent", "declined"); } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[200] sm:bottom-5 sm:left-5 sm:right-auto"
    >
      <div className="bg-white border border-gray-200 shadow-2xl sm:rounded-2xl sm:max-w-sm p-5 m-0 sm:m-0">
        {/* Icon + heading */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 bg-[#0C0E6B] rounded-lg flex items-center justify-center shrink-0 text-base">
            🍪
          </div>
          <p className="font-bold text-[#0C0E6B] text-sm">We use cookies</p>
        </div>

        <p className="text-gray-600 text-xs leading-relaxed mb-4">
          Stutterheim International School uses cookies to improve your browsing experience,
          analyse site traffic, and support our contact form. By clicking{" "}
          <strong>Accept</strong> you consent to our use of cookies in accordance with
          South Africa&apos;s{" "}
          <abbr title="Protection of Personal Information Act" className="no-underline cursor-help">POPIA</abbr>
          {" "}and our{" "}
          <Link href="/contact" className="text-[#0C0E6B] underline hover:no-underline">
            Privacy Policy
          </Link>
          .
        </p>

        <div className="flex gap-2">
          <button
            onClick={accept}
            className="flex-1 py-2.5 bg-[#0C0E6B] text-white font-bold rounded-lg text-xs hover:bg-blue-900 transition-colors"
          >
            Accept All
          </button>
          <button
            onClick={decline}
            className="flex-1 py-2.5 border border-gray-200 text-gray-600 font-medium rounded-lg text-xs hover:bg-gray-50 transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
