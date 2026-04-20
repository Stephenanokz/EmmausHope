"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

const interestAreas = [
  "Field Volunteering",
  "Professional/Skilled Support",
  "Advocacy & Mobilization",
  "Fundraising & Giving",
  "Communications & Media",
  "Other",
];

export function VolunteerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (res.ok) {
        setResult({ success: true, message: "Thank you! We received your volunteer interest and will be in touch soon." });
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
    <form onSubmit={handleSubmit} className="card-surface border-orange-100/70 p-6 sm:p-8" aria-label="Volunteer interest form">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-600">Register Your Interest</p>
      <h3 className="mt-2 font-display text-3xl text-slate-950 sm:text-4xl">Volunteer with us</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Fill out this form and our team will reach out to discuss how you can best serve with Emmaus Care Foundation.
      </p>

      {result && (
        <div
          className={`mt-5 flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm ${
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

      <div className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="vol-first" className="mb-1.5 block text-sm font-medium text-slate-700">First Name</label>
            <input
              id="vol-first"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              className="focus-ring w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400"
              placeholder="First name"
            />
          </div>
          <div>
            <label htmlFor="vol-last" className="mb-1.5 block text-sm font-medium text-slate-700">Last Name</label>
            <input
              id="vol-last"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              className="focus-ring w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400"
              placeholder="Last name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="vol-email" className="mb-1.5 block text-sm font-medium text-slate-700">Email</label>
          <input
            id="vol-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            className="focus-ring w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="vol-phone" className="mb-1.5 block text-sm font-medium text-slate-700">
            Phone <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input
            id="vol-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className="focus-ring w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400"
            placeholder="+234 000 000 0000"
          />
        </div>

        <div>
          <label htmlFor="vol-interest" className="mb-1.5 block text-sm font-medium text-slate-700">Area of Interest</label>
          <select
            id="vol-interest"
            name="interest"
            required
            className="focus-ring w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900"
            defaultValue=""
          >
            <option value="" disabled>Select an area</option>
            {interestAreas.map((area) => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="vol-message" className="mb-1.5 block text-sm font-medium text-slate-700">
            Tell us about yourself <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <textarea
            id="vol-message"
            name="message"
            rows={4}
            autoComplete="off"
            className="focus-ring w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400"
            placeholder="Brief background, skills, or how you'd like to help."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="focus-ring w-full rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:pointer-events-none disabled:opacity-50"
        >
          {isSubmitting ? "Sending…" : "Submit Interest"}
        </button>
      </div>
    </form>
  );
}
