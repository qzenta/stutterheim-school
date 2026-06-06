"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#111480]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#111480]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#111480]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="subject">
          Subject <span className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#111480] bg-white"
        >
          <option value="">Select a subject…</option>
          <option value="General Enquiry">General Enquiry</option>
          <option value="Admissions">Admissions</option>
          <option value="Boarding">Boarding</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#111480] resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-[#111480] text-white font-semibold py-3 rounded-lg hover:bg-blue-900 transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-600 text-sm text-center">
          Message sent! We&apos;ll be in touch shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-sm text-center">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
