import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function ImpactSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <Reveal>
          <div className="card-surface overflow-hidden border-orange-100/70 bg-gradient-to-r from-orange-600 via-orange-500 to-blue-600 px-6 py-12 text-white sm:px-10 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-100">
                  Impact Vision
                </p>
                <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
                  Through faith-driven service and sustainable programs, Emmaus Hope Foundation strives to ensure that no one is left behind.
                </h2>
              </div>
              <div>
                <p className="text-base leading-8 text-white/90">
                  We believe meaningful impact is built through consistent presence, accountable partnerships, and practical responses that restore dignity while strengthening communities for the future.
                </p>
                <Link
                  href="/impact"
                  className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:-translate-y-0.5 hover:bg-orange-50"
                >
                  View our impact vision
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}