import Link from "next/link";
import { programs } from "@/lib/content";
import { ProgramCard } from "@/components/cards/ProgramCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGrid } from "@/components/ui/StaggerGrid";

export function ProgramsPreview() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Programs"
              title="Sustainable initiatives shaped around real human need"
              description="We combine relief, empowerment, and partnership so that immediate support can grow into long-term stability and inclusion."
            />
            <Link
              href="/programs"
              className="focus-ring inline-flex items-center gap-2 self-start rounded-full border border-orange-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:-translate-y-0.5 hover:border-orange-300 hover:bg-orange-50"
            >
              Explore all programs
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </Reveal>

        <StaggerGrid className="mt-12 grid gap-6 lg:grid-cols-3">
          {programs.slice(0, 3).map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}