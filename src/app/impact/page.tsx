import type { Metadata } from "next";
import Link from "next/link";
import { impactGoals, impactPathways, successStories } from "@/lib/content";
import { FocusCard } from "@/components/cards/FocusCard";
import { StoryCard } from "@/components/cards/StoryCard";
import { ImageFeatureSection } from "@/components/ui/ImageFeatureSection";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGrid } from "@/components/ui/StaggerGrid";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "See the impact vision of Emmaus Care Foundation and how our programs restore hope, promote dignity, and strengthen communities.",
  alternates: {
    canonical: "/impact",
  },
  openGraph: {
    title: "Impact | Emmaus Care Foundation",
    description:
      "See the impact vision of Emmaus Care Foundation and how our programs restore hope, promote dignity, and strengthen communities.",
    url: "/impact",
  },
};

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="Restoring Care Transforming Lives"
        description="Our impact vision centers on practical compassion, measurable community support, and long-term dignity for vulnerable persons."
      />

      <section className="pb-24">
        <div className="section-shell">
          <ImageFeatureSection
            eyebrow="Impact Vision"
            title="Impact is measured not only by activity, but by lives strengthened with dignity and hope"
            description="Emmaus Care Foundation seeks outcomes that are practical, humane, and lasting. We want communities to feel the difference in everyday life through relief, inclusion, education, empowerment, and strengthened solidarity."
            image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80"
            alt="Community members gathered during a humanitarian outreach"
            surfaceClassName="from-white via-orange-50/60 to-amber-50/50"
            overlayClassName="bg-gradient-to-t from-orange-950/35 via-transparent to-transparent"
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <Reveal>
            <div className="card-surface border-orange-100/70 p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-600">Impact Goals</p>
              <h2 className="mt-3 font-display text-3xl text-slate-950 sm:text-4xl">What transformation looks like</h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Our impact goals reflect the kind of change we want to see in households, relationships, and communities over time.
              </p>
            </div>
          </Reveal>
          <StaggerGrid className="grid gap-4">
            {impactGoals.map((goal) => (
              <div
                key={goal}
                className="card-surface border-blue-100/70 bg-white/95 px-6 py-5 text-base leading-8 text-slate-700"
              >
                {goal}
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <SectionHeading
                eyebrow="Pathways of Change"
                title="The areas where practical action becomes visible progress"
                description="We understand impact as a combination of immediate support, social inclusion, opportunity, and strengthened community resilience."
              />
            </div>
          </Reveal>
          <StaggerGrid className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {impactPathways.map((item) => (
              <FocusCard key={item.title} {...item} />
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell">
          <ImageFeatureSection
            eyebrow="Learning and Accountability"
            title="We pay attention to stories, outcomes, and relationships so that impact can deepen over time"
            description="Sustainable impact requires reflection, follow-up, stewardship, and a willingness to learn from what communities share with us. This is how hope-building work becomes more responsive and more credible."
            image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
            alt="Staff reviewing community outcomes and program notes"
            reverse
            surfaceClassName="from-white via-blue-50/65 to-cyan-50/55"
            overlayClassName="bg-gradient-to-t from-blue-950/35 via-transparent to-transparent"
            eyebrowClassName="text-blue-700"
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell">
          <Reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl mb-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-600">Success Stories</p>
                <h2 className="mt-3 font-display text-3xl text-slate-950 sm:text-4xl lg:text-5xl">Stories that reflect care in motion</h2>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  These placeholder stories illustrate the kind of life-giving change made possible through faithful service, partnership, and consistent support.
                </p>
              </div>
              <Link
                href="/news"
                className="focus-ring inline-flex items-center gap-2 self-start rounded-full border border-orange-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:-translate-y-0.5 hover:bg-orange-50"
              >
                View more stories
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </Reveal>
          <StaggerGrid className="grid gap-6 lg:grid-cols-3">
            {successStories.map((story) => (
              <StoryCard key={story.title} {...story} />
            ))}
          </StaggerGrid>
        </div>
      </section>
    </>
  );
}