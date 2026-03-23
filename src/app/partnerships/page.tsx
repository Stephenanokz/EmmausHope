import type { Metadata } from "next";
import { partnershipGroups, partnershipPrinciples } from "@/lib/content";
import { FocusCard } from "@/components/cards/FocusCard";
import { ImageFeatureSection } from "@/components/ui/ImageFeatureSection";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGrid } from "@/components/ui/StaggerGrid";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Learn how Emmaus Hope Foundation collaborates with churches, government agencies, NGOs, corporate partners, and international development partners.",
  alternates: {
    canonical: "/partnerships",
  },
  openGraph: {
    title: "Partnerships | Emmaus Hope Foundation",
    description:
      "Learn how Emmaus Hope Foundation collaborates with churches, government agencies, NGOs, corporate partners, and international development partners.",
    url: "/partnerships",
  },
};

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Collaboration that helps compassionate work go further"
        description="We believe meaningful development and humanitarian impact grow stronger when diverse partners work with shared purpose, mutual respect, and accountability."
      />

      <section className="pb-24">
        <div className="section-shell">
          <ImageFeatureSection
            eyebrow="Collaborate With Us"
            title="Partnerships help compassionate intentions become coordinated, durable action"
            description="Emmaus Hope Foundation welcomes partnerships that strengthen local reach, deepen program quality, and increase the sustainability of work done for poor and vulnerable communities."
            image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            alt="Partners gathered around a table in discussion"
            surfaceClassName="from-white via-blue-50/70 to-cyan-50/55"
            overlayClassName="bg-gradient-to-t from-blue-950/35 via-transparent to-transparent"
            eyebrowClassName="text-blue-700"
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell">
          <StaggerGrid className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {partnershipGroups.map((group) => (
              <FocusCard key={group.title} {...group} />
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <SectionHeading
                eyebrow="Why Partnership Matters"
                title="Shared responsibility produces deeper, more sustainable impact"
                description="Through collaboration, Emmaus Hope Foundation can extend reach, improve program quality, strengthen accountability, and serve vulnerable communities with better coordination and stronger local ownership."
              />
            </div>
          </Reveal>
          <StaggerGrid className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {partnershipPrinciples.map((item) => (
              <FocusCard key={item.title} {...item} />
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell">
          <ImageFeatureSection
            eyebrow="Partner Experience"
            title="We value collaboration that is transparent, respectful, and built for long-term usefulness"
            description="Whether a partnership begins with funding, field coordination, visibility, or technical support, we want it to grow through mutual trust, clear communication, and a shared commitment to dignity-centered service."
            image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
            alt="Partner organizations collaborating with community leaders"
            reverse
            surfaceClassName="from-white via-orange-50/60 to-blue-50/60"
            overlayClassName="bg-gradient-to-t from-orange-950/35 via-transparent to-transparent"
          />
        </div>
      </section>
    </>
  );
}