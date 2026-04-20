import type { Metadata } from "next";
import { programDeliveryPillars, programs } from "@/lib/content";
import { FocusCard } from "@/components/cards/FocusCard";
import { ProgramCard } from "@/components/cards/ProgramCard";
import { ImageFeatureSection } from "@/components/ui/ImageFeatureSection";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGrid } from "@/components/ui/StaggerGrid";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Emmaus Care Foundation programs focused on poverty alleviation, hunger relief, education support, women empowerment, dignity, and sustainable development partnerships.",
  alternates: {
    canonical: "/programs",
  },
  openGraph: {
    title: "Programs | Emmaus Care Foundation",
    description:
      "Explore Emmaus Care Foundation programs focused on poverty alleviation, hunger relief, education support, women empowerment, dignity, and sustainable development partnerships.",
    url: "/programs",
  },
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Programs designed for relief, resilience, and lasting care"
        description="Each Emmaus Care Foundation program responds to urgent need while laying the groundwork for stronger, more dignified futures."
      />

      <section className="pb-24">
        <div className="section-shell">
          <ImageFeatureSection
            eyebrow="Program Model"
            title="Our programs are built to respond compassionately and grow sustainably"
            description="Emmaus Care Foundation approaches programming as a continuum. We meet urgent needs with care, then build toward stability, inclusion, and opportunities that can endure beyond a single intervention."
            image="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80"
            alt="Team members engaging a community during a program visit"
            surfaceClassName="from-white via-orange-50/70 to-blue-50/55"
            overlayClassName="bg-gradient-to-t from-orange-950/35 via-transparent to-transparent"
          >
            <div className="flex flex-wrap gap-2">
              {["Poverty response", "Education continuity", "Empowerment pathways", "Collaborative delivery"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-900"
                >
                  {item}
                </span>
              ))}
            </div>
          </ImageFeatureSection>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell">
          <StaggerGrid className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <SectionHeading
                eyebrow="How We Work"
                title="Community rooted. Partnership strengthened. Outcome focused."
                description="We design programs around local context, uphold accountability in delivery, and prioritize interventions that respect dignity while creating pathways toward stability and inclusion."
              />
            </div>
          </Reveal>
          <StaggerGrid className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {programDeliveryPillars.map((item) => (
              <FocusCard key={item.title} {...item} />
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell">
          <ImageFeatureSection
            eyebrow="Program Impact"
            title="From relief to resilience, every intervention should move life forward"
            description="Whether supporting food access, education, empowerment, or social inclusion, we aim to create interventions that are both compassionate in the moment and constructive for the future."
            image="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80"
            alt="Children and caregivers gathered during a support program"
            reverse
            surfaceClassName="from-white via-blue-50/65 to-cyan-50/55"
            overlayClassName="bg-gradient-to-t from-blue-950/35 via-transparent to-transparent"
            eyebrowClassName="text-blue-700"
          />
        </div>
      </section>
    </>
  );
}