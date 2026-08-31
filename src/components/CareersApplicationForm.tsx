"use client";

import { useState } from "react";
import Link from "next/link";

const MAX_CV_BYTES = 5 * 1024 * 1024; // 5MB

export default function CareersApplicationForm({ listings }: { listings: string[] }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", position: "", coverNote: "" });
  const [cv, setCv] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  const handleFile = (file: File | null) => {
    if (!file) return setCv(null);
    if (file.type !== "application/pdf") {
      setErrorMsg("Please upload your CV as a PDF file.");
      setCv(null);
      return;
    }
    if (file.size > MAX_CV_BYTES) {
      setErrorMsg("CV file must be under 5MB.");
      setCv(null);
      return;
    }
    setErrorMsg("");
    setCv(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cv) {
      setErrorMsg("Please attach your CV (PDF) before submitting.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const body = new FormData();
      body.append("name", form.name);
      body.append("email", form.email);
      body.append("phone", form.phone);
      body.append("position", form.position);
      body.append("coverNote", form.coverNote);
      body.append("cv", cv);

      const res = await fetch("/api/careers-apply", { method: "POST", body });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="py-20 px-4 bg-white">
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <span className="text-3xl">✅</span>
          </div>
          <h2 className="text-2xl font-bold text-[#0C0E6B] mb-3">Application Received!</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            Thank you for your interest in joining Stutterheim International School. Our team will
            review your application and be in touch if there&apos;s a match. A confirmation has been
            sent to your email address.
          </p>
          <Link href="/" className="inline-block px-8 py-3 bg-[#0C0E6B] text-white font-bold rounded-lg hover:bg-blue-900 transition-colors text-sm">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-blue-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">Apply Now</p>
          <h2 className="text-3xl font-bold text-[#0C0E6B]">Submit Your Application</h2>
          <div className="mt-4 w-16 h-1 bg-[#0C0E6B] mx-auto rounded" />
        </div>

        <form onSubmit={handleSubmit} className="bg-[#E8EAEE] rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 space-y-5">
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Full Name <span className="text-red-400">*</span></label>
            <input required value={form.name} onChange={(e) => set("name", e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0C0E6B]/30 focus:border-[#0C0E6B]"
              placeholder="Your full name" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Email Address <span className="text-red-400">*</span></label>
              <input required type="email" value={form.email} onChange={(e) => set("email", e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0C0E6B]/30 focus:border-[#0C0E6B]"
                placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Phone Number <span className="text-red-400">*</span></label>
              <input required type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0C0E6B]/30 focus:border-[#0C0E6B]"
                placeholder="e.g. 082 123 4567" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Position Applying For <span className="text-red-400">*</span></label>
            <select required value={form.position} onChange={(e) => set("position", e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0C0E6B]/30 focus:border-[#0C0E6B]">
              <option value="">Select a position</option>
              {listings.map((p) => <option key={p} value={p}>{p}</option>)}
              <option value="General / Speculative Application">General / Speculative Application</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">CV Upload (PDF) <span className="text-red-400">*</span></label>
            <input required type="file" accept="application/pdf" onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white file:mr-4 file:py-1.5 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-[#0C0E6B] file:text-white hover:file:bg-blue-900" />
            {cv && <p className="mt-1.5 text-xs text-gray-500">Selected: {cv.name} ({(cv.size / 1024 / 1024).toFixed(2)} MB)</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Cover Note (optional)</label>
            <textarea value={form.coverNote} onChange={(e) => set("coverNote", e.target.value)} rows={4}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white resize-none focus:outline-none focus:ring-2 focus:ring-[#0C0E6B]/30 focus:border-[#0C0E6B]"
              placeholder="Tell us briefly why you'd be a good fit..." />
          </div>

          {(errorMsg || status === "error") && (
            <p className="text-red-500 text-sm text-center">
              {errorMsg || "Something went wrong. Please try again or contact us directly."}
            </p>
          )}

          <button type="submit" disabled={status === "loading"}
            className="w-full py-4 bg-[#0C0E6B] text-white font-bold rounded-xl hover:bg-blue-900 transition-all hover:scale-[1.01] text-base shadow-md disabled:opacity-60 disabled:cursor-not-allowed">
            {status === "loading" ? "Submitting…" : "Submit Application →"}
          </button>
          <p className="text-center text-gray-400 text-xs">
            By submitting this form you consent to SIS processing your details for recruitment purposes.
          </p>
        </form>
      </div>
    </section>
  );
}
