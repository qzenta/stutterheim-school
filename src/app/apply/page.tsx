"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const grades = ["R", "1", "2", "3", "4", "5", "6", "7", "8", "9", ];

export default function ApplyPage() {
  const [form, setForm] = useState({
    learnerName: "", dob: "", gender: "", gradeApplying: "", currentSchool: "", currentGrade: "",
    parentName: "", relationship: "", cell: "", email: "", town: "",
    medicalConditions: "no", medicalDetails: "", hearAboutUs: "", notes: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [ref, setRef] = useState<string>("");

  const set = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      const json = await res.json();
      if (json.ref) setRef(json.ref);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen bg-[#E8EAEE] flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <span className="text-3xl">✅</span>
          </div>
          <h1 className="text-2xl font-bold text-[#0C0E6B] mb-3">Enquiry Received!</h1>
          {ref && (
            <div className="bg-[#E8E9F4] border border-[#0C0E6B]/20 rounded-xl px-6 py-4 mb-5">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Your reference number</p>
              <p className="text-2xl font-bold text-[#0C0E6B] tracking-widest">{ref}</p>
              <p className="text-xs text-gray-600 mt-2">Write this on your paper application form before submitting it to the school.</p>
            </div>
          )}
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Thank you for your interest in Stutterheim International School. We have received your enquiry
            and will contact you within 5 business days with the full application pack and next steps.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            A confirmation with your reference number has been sent to your email address.
          </p>
          <Link href="/" className="inline-block px-8 py-3 bg-[#0C0E6B] text-white font-bold rounded-lg hover:bg-blue-900 transition-colors text-sm">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Page banner */}
      <div
        className="relative text-white pt-24 pb-16 px-4"
        style={{ backgroundImage: "url(/extra-images/banner1.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-[#0C0E6B]/82" />
        <div className="relative max-w-2xl mx-auto text-center">
          <Image src="/images/logo.png" alt="SIS" width={120} height={40} className="h-12 w-auto object-contain mx-auto mb-5 opacity-90" unoptimized />
          <p className="text-blue-300 text-xs font-semibold uppercase tracking-[0.2em] mb-3">2027 Admissions</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Apply Online</h1>
          <p className="text-blue-200 text-sm leading-relaxed max-w-lg mx-auto">
            Complete this short enquiry form and our admissions team will contact you within 5 business days
            with the full application pack and next steps.
          </p>
          <div className="mt-5 w-16 h-1 bg-white/40 mx-auto rounded" />
        </div>
      </div>

      {/* Notice callout */}
      <div className="bg-[#E8E9F4] border-b border-[#0C0E6B]/10 px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#0C0E6B] text-sm text-center">
            <strong>ℹ️ Initial Enquiry Form</strong> — Upon receipt, we will email you the official application pack including the full application form, required documents checklist, and fee structure.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="py-14 px-4 bg-[#E8EAEE]">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Learner section */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="bg-[#0C0E6B] px-6 py-4">
                <h2 className="text-white font-bold text-sm uppercase tracking-wider">Learner Details</h2>
              </div>
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Full Name <span className="text-red-400">*</span></label>
                  <input required value={form.learnerName} onChange={(e) => set("learnerName", e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C0E6B]/30 focus:border-[#0C0E6B]"
                    placeholder="Learner's full name" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Date of Birth</label>
                  <input type="date" value={form.dob} onChange={(e) => set("dob", e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C0E6B]/30 focus:border-[#0C0E6B]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Gender</label>
                  <select value={form.gender} onChange={(e) => set("gender", e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C0E6B]/30 focus:border-[#0C0E6B] bg-white">
                    <option value="">Select</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Grade Applying For <span className="text-red-400">*</span></label>
                  <select required value={form.gradeApplying} onChange={(e) => set("gradeApplying", e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C0E6B]/30 focus:border-[#0C0E6B] bg-white">
                    <option value="">Select grade</option>
                    {grades.map((g) => <option key={g} value={g}>Grade {g}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Current Grade</label>
                  <select value={form.currentGrade} onChange={(e) => set("currentGrade", e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C0E6B]/30 focus:border-[#0C0E6B] bg-white">
                    <option value="">Select</option>
                    {grades.map((g) => <option key={g} value={g}>Grade {g}</option>)}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Current School</label>
                  <input value={form.currentSchool} onChange={(e) => set("currentSchool", e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C0E6B]/30 focus:border-[#0C0E6B]"
                    placeholder="Name of current school" />
                </div>
              </div>
            </div>

            {/* Parent/Guardian section */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="bg-[#0C0E6B] px-6 py-4">
                <h2 className="text-white font-bold text-sm uppercase tracking-wider">Parent / Guardian Details</h2>
              </div>
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Full Name <span className="text-red-400">*</span></label>
                  <input required value={form.parentName} onChange={(e) => set("parentName", e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C0E6B]/30 focus:border-[#0C0E6B]"
                    placeholder="Parent or guardian's full name" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Relationship to Learner</label>
                  <select value={form.relationship} onChange={(e) => set("relationship", e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C0E6B]/30 focus:border-[#0C0E6B] bg-white">
                    <option value="">Select</option>
                    <option>Father</option>
                    <option>Mother</option>
                    <option>Guardian</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Cell Number <span className="text-red-400">*</span></label>
                  <input required type="tel" value={form.cell} onChange={(e) => set("cell", e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C0E6B]/30 focus:border-[#0C0E6B]"
                    placeholder="e.g. 082 123 4567" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Email Address <span className="text-red-400">*</span></label>
                  <input required type="email" value={form.email} onChange={(e) => set("email", e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C0E6B]/30 focus:border-[#0C0E6B]"
                    placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Town / Area of Residence</label>
                  <input value={form.town} onChange={(e) => set("town", e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C0E6B]/30 focus:border-[#0C0E6B]"
                    placeholder="e.g. Stutterheim" />
                </div>
              </div>
            </div>

            {/* Additional */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="bg-[#0C0E6B] px-6 py-4">
                <h2 className="text-white font-bold text-sm uppercase tracking-wider">Additional Information</h2>
              </div>
              <div className="p-6 space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Does the learner have any medical conditions?</label>
                  <div className="flex gap-6">
                    {["no", "yes"].map((v) => (
                      <label key={v} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="medical" value={v} checked={form.medicalConditions === v} onChange={() => set("medicalConditions", v)} className="accent-[#0C0E6B]" />
                        <span className="text-sm text-gray-700 capitalize">{v}</span>
                      </label>
                    ))}
                  </div>
                  {form.medicalConditions === "yes" && (
                    <input value={form.medicalDetails} onChange={(e) => set("medicalDetails", e.target.value)}
                      className="mt-3 w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C0E6B]/30 focus:border-[#0C0E6B]"
                      placeholder="Brief description of medical condition(s)" />
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">How did you hear about SIS?</label>
                  <select value={form.hearAboutUs} onChange={(e) => set("hearAboutUs", e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C0E6B]/30 focus:border-[#0C0E6B] bg-white">
                    <option value="">Select</option>
                    <option>Facebook</option>
                    <option>Google Search</option>
                    <option>Referral from friend / family</option>
                    <option>Road Signage</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Notes or Questions (optional)</label>
                  <textarea value={form.notes} onChange={(e) => set("notes", e.target.value)} rows={4}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0C0E6B]/30 focus:border-[#0C0E6B] resize-none"
                    placeholder="Any questions or additional information..." />
                </div>
              </div>
            </div>

            {/* Download paper form link */}
            <div className="bg-[#E8E9F4] border border-[#0C0E6B]/15 rounded-xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-[#0C0E6B] text-sm font-medium">Prefer a paper form? Download the full official application.</p>
              <a href="/downloads/SIS-Application-Form-2027.pdf"
                className="shrink-0 px-5 py-2 bg-[#0C0E6B] text-white font-bold rounded-lg text-sm hover:bg-blue-900 transition-colors">
                Download PDF Form
              </a>
            </div>

            {/* Reference number notice */}
            <div className="bg-[#fff3cd] border-2 border-yellow-400 rounded-xl px-6 py-5 text-center">
              <p className="text-base font-bold text-[#0C0E6B] mb-1">📋 You will receive a unique reference number</p>
              <p className="text-sm text-gray-700">Upon submission, a reference number (e.g. <span className="font-mono font-bold">SIS-2027-XXXXXX</span>) will appear on screen and be emailed to you. Write it clearly on your paper application form before submitting it to the school.</p>
            </div>

            {/* Submit */}
            {status === "error" && (
              <p className="text-red-500 text-sm text-center">Something went wrong. Please try again or contact us directly.</p>
            )}
            <button type="submit" disabled={status === "loading"}
              className="w-full py-4 bg-[#0C0E6B] text-white font-bold rounded-xl hover:bg-blue-900 transition-all hover:scale-[1.01] text-base shadow-md disabled:opacity-60 disabled:cursor-not-allowed">
              {status === "loading" ? "Submitting…" : "Submit Enquiry →"}
            </button>
            <p className="text-center text-gray-400 text-xs">
              By submitting this form you agree to be contacted by SIS regarding your enquiry.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
