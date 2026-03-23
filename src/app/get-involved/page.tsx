import type { Metadata } from "next";
import Link from "next/link";
import { involvementWays, volunteerRoles } from "@/lib/content";
import { FocusCard } from "@/components/cards/FocusCard";
import { VolunteerForm } from "@/components/sections/VolunteerForm";
import { ImageFeatureSection } from "@/components/ui/ImageFeatureSection";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGrid } from "@/components/ui/StaggerGrid";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, partner, or become a donor with Emmaus Hope Foundation and help expand faith-driven humanitarian impact.",
  alternates: {
    canonical: "/get-involved",
  },
  openGraph: {
    title: "Get Involved | Emmaus Hope Foundation",
    description:
      "Volunteer, partner, or become a donor with Emmaus Hope Foundation and help expand faith-driven humanitarian impact.",
    url: "/get-involved",
  },
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Bring your time, resources, and influence into service"
        description="There are multiple ways to stand with Emmaus Hope Foundation as we serve poor and vulnerable communities with dignity-centered care."
      />

      <section className="pb-24">
        <div className="section-shell">
          <ImageFeatureSection
            eyebrow="Serve With Us"
            title="There is a place for practical compassion, professional skill, and generous partnership"
            description="Getting involved with Emmaus Hope Foundation means joining work that is relational, accountable, and oriented toward restoring hope in tangible ways."
            image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80"
            alt="Volunteers working together during a community support event"
            surfaceClassName="from-white via-orange-50/60 to-rose-50/55"
            overlayClassName="bg-gradient-to-t from-orange-950/35 via-transparent to-transparent"
          >
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Start serving
              </Link>
              <Link
                href="/donate"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-orange-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:-translate-y-0.5 hover:bg-orange-50"
              >
                Support the work
              </Link>
            </div>
          </ImageFeatureSection>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell">
          <StaggerGrid className="grid gap-6 md:grid-cols-3">
            {involvementWays.map((item) => (
              <FocusCard key={item.title} {...item} />
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <SectionHeading
                eyebrow="Ways To Help"
                title="Different forms of support, one shared mission"
                description="Some people show up with time, others with expertise, networks, advocacy, or financial support. Each contribution helps expand compassionate impact."
              />
            </div>
          </Reveal>
          <StaggerGrid className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {volunteerRoles.map((item) => (
              <FocusCard key={item.title} {...item} />
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Volunteer Interest"
                title="Ready to make a difference?"
                description="Register your interest and our team will connect with you about the right volunteer opportunity. Whether you have a few hours or want to commit long-term, there is a place for you."
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <VolunteerForm />
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell">
          <Reveal>
            <div className="card-surface border-slate-800/80 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-10 text-white sm:px-10 sm:py-12">
              <div className="mx-auto max-w-5xl text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">Take the next step</p>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
                  Choose how you want to stand with the mission.
                </h2>
                <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-200">
                  Whether you want to serve in the field, contribute financially, or open partnership conversations, we can help you find the most meaningful and sustainable way to get involved.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  <div className="rounded-3xl border border-white/10 bg-white/6 p-5 text-left">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-200">Volunteer</p>
                    <p className="mt-3 text-sm leading-7 text-slate-200">
                      Offer your time, practical presence, or professional expertise where it can serve communities well.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/6 p-5 text-left">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-200">Partner</p>
                    <p className="mt-3 text-sm leading-7 text-slate-200">
                      Collaborate as an institution, church, or network to extend reach, capacity, and continuity.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/6 p-5 text-left">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-200">Give</p>
                    <p className="mt-3 text-sm leading-7 text-slate-200">
                      Fund concrete interventions that protect dignity and restore hope in practical ways.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:-translate-y-0.5 hover:bg-slate-100"
                  >
                    Start a conversation
                  </Link>
                  <Link
                    href="/donate"
                    className="focus-ring inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-white/15"
                  >
                    Give today
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}