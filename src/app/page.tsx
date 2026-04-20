import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { iconMap } from "@/lib/icon-map";
import { sdgAlignment } from "@/lib/content";
import { AboutSummary } from "@/components/sections/AboutSummary";
import { FocusAreas } from "@/components/sections/FocusAreas";
import { GetInvolvedCTA } from "@/components/sections/GetInvolvedCTA";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { ProgramsPreview } from "@/components/sections/ProgramsPreview";
import { ImageFeatureSection } from "@/components/ui/ImageFeatureSection";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGrid } from "@/components/ui/StaggerGrid";

export const metadata: Metadata = {
  title: "Emmaus Care Foundation",
  description:
    "Emmaus Care Foundation uplifts poor and vulnerable communities through poverty reduction, hunger relief, education support, empowerment, and partnerships.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Home | Emmaus Care Foundation",
    description:
      "Emmaus Care Foundation uplifts poor and vulnerable communities through poverty reduction, hunger relief, education support, empowerment, and partnerships.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <AboutSummary />
      <FocusAreas />
      <section className="pb-24">
        <div className="section-shell">
          <ImageFeatureSection
            eyebrow="Responsive Care"
            title="Relief matters most when it is timely, thoughtful, and connected to a longer horizon of recovery"
            description="Our work moves from emergency response toward more stable and sustainable pathways that help households and communities regain confidence and momentum."
            image="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80"
            alt="Children and families receiving support in a community setting"
            reverse
            surfaceClassName="from-white via-blue-50/65 to-cyan-50/55"
            overlayClassName="bg-gradient-to-t from-blue-950/35 via-transparent to-transparent"
            eyebrowClassName="text-blue-700"
          />
        </div>
      </section>
      <ProgramsPreview />

      {/* Founder preview */}
      {/* <section className="py-20 sm:py-24">
        <div className="section-shell">
          <Reveal>
            <div className="card-surface overflow-hidden border-orange-100/70 bg-gradient-to-br from-white via-orange-50/60 to-blue-50/70">
              <div className="grid gap-0 lg:grid-cols-[0.45fr_0.55fr]">
                <div className="relative min-h-[320px] sm:min-h-[400px]">
                  <Image
                    src="/images/founder/founder.jpg"
                    alt="Fr. Peter Tule Amaya-Akpala, OP — Founder of Emmaus Care Foundation"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950/10" />
                </div>
                <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-600">
                    Meet Our Founder
                  </p>
                  <h2 className="mt-3 font-display text-3xl text-slate-950 sm:text-4xl lg:text-5xl">
                    Fr. Peter Tule Amaya-Akpala, OP
                  </h2>
                  <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                    Fr. Peter Tule Amaya-Akpala, OP, is a Catholic Dominican priest dedicated to serving the poor and restoring hope. Inspired by Christ&apos;s encounter on the road to Emmaus, he founded Emmaus Care Foundation to walk with the vulnerable and transform lives.
                  </p>
                  <Link
                    href="/founder"
                    className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-slate-800"
                  >
                    Read Full Story
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section> */}
      <section className="py-20 sm:py-24">
        <div className="section-shell">
          <Reveal>
            <div className="card-surface overflow-hidden border-orange-100 bg-gradient-to-br from-orange-50 via-white to-blue-50 px-6 py-10 sm:px-10">
              <SectionHeading
                eyebrow="Global Alignment"
                title="Guided by the Sustainable Development Goals"
                description="Our work aligns local compassion with global priorities so that relief today contributes to stronger, more resilient communities tomorrow."
              />
              <StaggerGrid className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {sdgAlignment.map((goal) => {
                  const Icon = iconMap[goal.icon];

                  return (
                    <article
                      key={goal.title}
                      className="rounded-3xl border border-white/80 bg-white/90 p-6 shadow-[0_16px_40px_-28px_rgba(37,99,235,0.4)]"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-blue-600 text-white shadow-lg shadow-orange-500/20">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="font-display text-2xl text-slate-900">{goal.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{goal.description}</p>
                    </article>
                  );
                })}
              </StaggerGrid>
            </div>
          </Reveal>
        </div>
      </section>
      <ImpactSection />
      <GetInvolvedCTA />
    </>
  );
}
