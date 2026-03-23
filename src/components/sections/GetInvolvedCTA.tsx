import Link from "next/link";
import { involvementWays } from "@/lib/content";
import { FocusCard } from "@/components/cards/FocusCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGrid } from "@/components/ui/StaggerGrid";

export function GetInvolvedCTA() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Get Involved"
              title="Join the people helping hope reach further"
              description="Whether you volunteer, partner, or donate, your support helps us accompany vulnerable communities with practical compassion."
            />
            <Link
              href="/get-involved"
              className="focus-ring inline-flex items-center gap-2 self-start rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Take action
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </Reveal>
        <StaggerGrid className="mt-12 grid gap-6 md:grid-cols-3">
          {involvementWays.map((item) => (
            <FocusCard key={item.title} {...item} />
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}