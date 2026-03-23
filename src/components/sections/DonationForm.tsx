"use client";

import { useState } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { Heart, ShieldCheck } from "lucide-react";

const presetAmounts = [25, 50, 100, 250, 500, 1000];

export function DonationForm() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const reduceMotion = useReducedMotion();

  const activeAmount = selectedAmount ?? (customAmount ? Number(customAmount) : 0);

  function handleAmountClick(amount: number) {
    setSelectedAmount(amount);
    setCustomAmount("");
  }

  function handleCustomAmountChange(value: string) {
    const sanitized = value.replace(/[^0-9.]/g, "");
    setCustomAmount(sanitized);
    setSelectedAmount(null);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!activeAmount || activeAmount <= 0) return;
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = Object.fromEntries(new FormData(form));

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName ?? ""} ${formData.lastName ?? ""}`.trim(),
          email: formData.email,
          message: `Donation Pledge:\nAmount: $${activeAmount.toLocaleString()}\nFrequency: ${frequency}\nDesignation: ${formData.designation || "Where it's needed most"}`,
        }),
      });
    } catch {
      // Email delivery is best-effort; still show confirmation
    }

    setSubmitted(true);
    setIsSubmitting(false);
  }

  if (submitted) {
    return (
      <LazyMotion features={domAnimation}>
        <m.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card-surface border-green-200 bg-gradient-to-br from-green-50 via-white to-blue-50 p-8 text-center sm:p-10"
        >
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <Heart className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="font-display text-3xl text-slate-950">Thank you for your generosity!</h3>
          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-600">
            Your {frequency === "monthly" ? "monthly pledge" : "one-time gift"} of ${activeAmount.toLocaleString()} will help restore hope and protect dignity for vulnerable communities.
          </p>
          {frequency === "monthly" ? (
            <p className="mt-4 text-sm text-slate-500">
              Our team will email you a secure payment link each month so you can give at your own pace — no payment details are stored. You can adjust or cancel your pledge at any time by contacting us.
            </p>
          ) : (
            <p className="mt-4 text-sm text-slate-500">
              Our team will reach out with a secure payment link to complete your donation. Once a payment gateway is integrated, this step will happen instantly.
            </p>
          )}
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setSelectedAmount(100);
              setCustomAmount("");
            }}
            className="focus-ring mt-6 inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:-translate-y-0.5 hover:bg-slate-50"
          >
            Make another donation
          </button>
        </m.div>
      </LazyMotion>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface border-orange-100/70 p-6 sm:p-8" aria-label="Donation form">
      {/* Frequency toggle */}
      <div className="mb-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Donation Frequency</p>
        <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1">
          <button
            type="button"
            onClick={() => setFrequency("one-time")}
            className={`focus-ring rounded-full px-5 py-2 text-sm font-semibold transition ${
              frequency === "one-time"
                ? "bg-slate-950 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            One-Time
          </button>
          <button
            type="button"
            onClick={() => setFrequency("monthly")}
            className={`focus-ring rounded-full px-5 py-2 text-sm font-semibold transition ${
              frequency === "monthly"
                ? "bg-slate-950 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {frequency === "monthly" && (
        <p className="mb-6 rounded-2xl border border-blue-100 bg-blue-50/60 px-4 py-3 text-sm leading-6 text-blue-800">
          <strong>How monthly giving works:</strong> We&apos;ll send a secure payment link to your email each month. No card details are saved — you stay in control and can pause or stop anytime.
        </p>
      )}

      {/* Amount selection */}
      <div className="mb-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Select Amount (USD)</p>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
          {presetAmounts.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => handleAmountClick(amount)}
              className={`focus-ring rounded-2xl border px-3 py-3 text-sm font-semibold transition ${
                selectedAmount === amount
                  ? "border-orange-500 bg-orange-50 text-orange-700 shadow-sm"
                  : "border-slate-200 bg-white text-slate-700 hover:border-orange-300 hover:bg-orange-50/50"
              }`}
            >
              ${amount.toLocaleString()}
            </button>
          ))}
        </div>
        <div className="mt-3">
          <label htmlFor="custom-amount" className="sr-only">Custom amount</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-400">$</span>
            <input
              id="custom-amount"
              type="text"
              inputMode="decimal"
              placeholder="Other amount"
              value={customAmount}
              onChange={(e) => handleCustomAmountChange(e.target.value)}
              className="focus-ring w-full rounded-2xl border border-slate-200 bg-white py-3 pl-8 pr-4 text-sm text-slate-900 placeholder:text-slate-400"
            />
          </div>
        </div>
      </div>

      {/* Personal info */}
      <div className="mb-6 space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Your Information</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="donor-first" className="mb-1.5 block text-sm font-medium text-slate-700">First Name</label>
            <input
              id="donor-first"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              className="focus-ring w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400"
              placeholder="First name"
            />
          </div>
          <div>
            <label htmlFor="donor-last" className="mb-1.5 block text-sm font-medium text-slate-700">Last Name</label>
            <input
              id="donor-last"
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
          <label htmlFor="donor-email" className="mb-1.5 block text-sm font-medium text-slate-700">Email</label>
          <input
            id="donor-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            className="focus-ring w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400"
            placeholder="you@example.com"
          />
        </div>
      </div>

      {/* Designation */}
      <div className="mb-6">
        <label htmlFor="designation" className="mb-1.5 block text-sm font-medium text-slate-700">
          Designate your gift <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <select
          id="designation"
          name="designation"
          className="focus-ring w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900"
          defaultValue=""
        >
          <option value="">Where it&apos;s needed most</option>
          <option value="feeding">Feeding Programs</option>
          <option value="education">Educational Scholarships</option>
          <option value="skills">Skills Acquisition Training</option>
          <option value="women">Women Empowerment Initiatives</option>
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting || !activeAmount || activeAmount <= 0}
        className="focus-ring w-full rounded-full bg-orange-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-orange-500 disabled:pointer-events-none disabled:opacity-50"
      >
        {isSubmitting
          ? "Processing…"
          : `Donate $${activeAmount > 0 ? activeAmount.toLocaleString() : "0"} ${frequency === "monthly" ? "Monthly" : ""}`}
      </button>

      {/* Trust signal */}
      <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
        <ShieldCheck className="h-4 w-4 text-green-600" aria-hidden="true" />
        <span>Secure, transparent stewardship. Your gift is used responsibly.</span>
      </div>
    </form>
  );
}
