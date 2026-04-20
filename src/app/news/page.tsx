import type { Metadata } from "next";
import { Suspense } from "react";
import { newsStories } from "@/lib/content";
import { ImageFeatureSection } from "@/components/ui/ImageFeatureSection";
import { PaginatedStories } from "@/components/ui/PaginatedStories";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "News & Stories",
  description:
    "Read placeholder news, outreach updates, empowerment initiatives, community projects, success stories, and campaign highlights from Emmaus Care Foundation.",
  alternates: {
    canonical: "/news",
  },
  openGraph: {
    title: "News & Stories | Emmaus Care Foundation",
    description:
      "Read placeholder news, outreach updates, empowerment initiatives, community projects, success stories, and campaign highlights from Emmaus Care Foundation.",
    url: "/news",
  },
};

export default function NewsPage() {
  const featuredStory = newsStories[0];
  const remainingStories = newsStories.slice(1);

  return (
    <>
      <PageHero
        eyebrow="News & Stories"
        title="Updates from the journey of care, hope, service, and community"
        description="A blog-style collection of placeholder updates highlighting outreach programs, empowerment initiatives, community projects, success stories, and campaigns."
      />

      <section className="pb-24">
        <div className="section-shell">
          <ImageFeatureSection
            eyebrow="Featured Story"
            title={featuredStory.title}
            description={featuredStory.excerpt}
            image={featuredStory.image}
            alt={featuredStory.title}
            surfaceClassName="from-white via-orange-50/65 to-blue-50/65"
            overlayClassName="bg-gradient-to-t from-orange-950/35 via-transparent to-transparent"
          >
            <span className="inline-flex rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-900">
              {featuredStory.category}
            </span>
          </ImageFeatureSection>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">Browse by category</p>
              <p className="text-base leading-8 text-slate-600">
                Use this space to share milestones, field reflections, community achievements, and stories that help donors and partners see the human impact behind every program.
              </p>
            </div>
          </Reveal>
          <Suspense
            fallback={
              <div className="card-surface border-orange-100/70 px-6 py-10 text-center">
                <p className="text-base font-medium text-slate-900">Loading stories...</p>
              </div>
            }
          >
            <PaginatedStories stories={remainingStories} pageSize={6} />
          </Suspense>
        </div>
      </section>
    </>
  );
}