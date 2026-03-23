"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (res.ok) {
        setResult({ success: true, message: "Message sent! We will respond as promptly as possible." });
        form.reset();
      } else {
        setResult({ success: false, message: json.error ?? "Something went wrong. Please try again." });
      }
    } catch {
      setResult({ success: false, message: "Network error. Please check your connection and try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="card-surface border-orange-100/70 p-8 sm:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-600">Send a message</p>
      <h2 className="mt-3 font-display text-4xl text-slate-950">We will respond as promptly as possible</h2>

      {result && (
        <div
          className={`mt-6 flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm ${
            result.success
              ? "border-green-200 bg-green-50 text-green-800"
              : "border-red-200 bg-red-50 text-red-800"
          }`}
          role="alert"
        >
          {result.success && <Heart className="mt-0.5 h-4 w-4 shrink-0 text-green-600" aria-hidden="true" />}
          <span>{result.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-5" aria-label="Contact form">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="focus-ring w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            className="focus-ring w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            autoComplete="off"
            required
            className="focus-ring w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400"
            placeholder="Tell us how you would like to connect."
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="focus-ring inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:pointer-events-none disabled:opacity-50"
        >
          {isSubmitting ? "Sending…" : "Send Message"}
        </button>
      </form>
    </div>
  );
}
