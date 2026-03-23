import Link from "next/link";

export function PreFooterCTA() {
  return (
    <section className="pb-24">
      <div className="section-shell">
        <div className="card-surface overflow-hidden border-orange-100/70 bg-gradient-to-r from-orange-600 via-orange-500 to-blue-600 px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-100">
              Join The Mission
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
              Help Emmaus Hope Foundation restore hope with practical, dignified action.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/90">
              Whether you give, volunteer, or partner, your support helps vulnerable communities experience care that is compassionate, accountable, and built to last.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <Link
              href="/donate"
              className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:-translate-y-0.5 hover:bg-orange-50"
            >
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-white/15"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}