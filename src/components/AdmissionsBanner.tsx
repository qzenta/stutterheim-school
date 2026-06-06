"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function AdmissionsBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("sis-banner-dismissed-2027");
    if (!dismissed) setVisible(true);
  }, []);

  const dismiss = () => {
    localStorage.setItem("sis-banner-dismissed-2027", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="bg-[#FFD000] text-[#111480] px-4 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <p className="text-sm font-semibold flex items-center gap-2 min-w-0">
          <span className="shrink-0">🎓</span>
          <span className="truncate sm:whitespace-normal">
            Now Open: Admissions for 2027 — Limited spaces available. Apply today.
          </span>
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/admissions"
            className="hidden sm:inline-flex items-center text-xs font-bold bg-[#111480] text-white px-3 py-1.5 rounded hover:bg-blue-900 transition-colors whitespace-nowrap"
          >
            Apply Now →
          </a>
          <button
            onClick={dismiss}
            aria-label="Dismiss admissions banner"
            className="p-0.5 hover:opacity-60 transition-opacity"
          >
            <X size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
