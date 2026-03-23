import { focusAreas } from "@/lib/content";
import { FocusCard } from "@/components/cards/FocusCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerGrid } from "@/components/ui/StaggerGrid";

export function FocusAreas() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Focus Areas"
            title="Where compassion becomes practical support"
            description="Our core focus areas reflect the urgent needs we encounter and the long-term change we are committed to building with communities."
            align="center"
          />
        </Reveal>
        <StaggerGrid className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {focusAreas.map((area) => (
            <FocusCard key={area.title} {...area} />
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}