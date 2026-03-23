import type { Metadata } from "next";
import Image from "next/image";
import { iconMap } from "@/lib/icon-map";
import {
  aboutApproach,
  aboutCommitments,
  aboutCoreStatements,
  aboutEmmausStory,
  aboutFoundations,
  aboutValues,
  aboutWhoWeAre,
} from "@/lib/content";
import { FocusCard } from "@/components/cards/FocusCard";
import { ImageFeatureSection } from "@/components/ui/ImageFeatureSection";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGrid } from "@/components/ui/StaggerGrid";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn in depth about Emmaus Hope Foundation’s identity, inspiration, vision, mission, values, and commitment to restoring hope and protecting human dignity.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Emmaus Hope Foundation",
    description:
      "Learn in depth about Emmaus Hope Foundation’s identity, inspiration, vision, mission, values, and commitment to restoring hope and protecting human dignity.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A foundation rooted in dignity, faith, and hope-filled service"
        description="Emmaus Hope Foundation accompanies poor and vulnerable persons with compassionate, accountable, and sustainable action shaped by Catholic Social Teaching and a commitment to human dignity."
      />

      <section className="pb-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal>
            <article className="card-surface border-orange-100/70 px-6 py-10 sm:px-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-600">
                {aboutWhoWeAre.title}
              </p>
              <h2 className="mt-3 font-display text-3xl text-slate-950 sm:text-4xl lg:text-5xl">
                Serving poor and vulnerable persons with compassion and purpose
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                {aboutWhoWeAre.description}
              </p>
              <p className="mt-5 text-base leading-8 text-slate-600">
                We believe humanitarian service should meet immediate needs
                while also helping people recover stability, agency, and
                opportunity. That conviction shapes how we design programs,
                build partnerships, and remain accountable to those we serve.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-6">
              <div className="relative min-h-[260px] overflow-hidden rounded-[2rem] shadow-[0_28px_70px_-36px_rgba(15,23,42,0.45)]">
                <Image
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
                  alt="Community members and volunteers sharing a hopeful moment"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 34vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-slate-950/10 to-transparent" />
              </div>
              <div className="card-surface border-blue-100/70 bg-gradient-to-br from-orange-50 via-white to-blue-50 p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
                  What defines us
                </p>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Emmaus Hope Foundation exists to restore hope in ways that are
                  relational, principled, and sustainable. We do not see people
                  as projects, but as persons deserving care, respect, and
                  meaningful opportunity. That conviction shapes not just what
                  we do, but how we do it. It also shapes how we speak about our
                  work and how we remain accountable to the people and
                  communities we serve. We are a foundation rooted in dignity,
                  faith, and hope-filled service.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell">
          <Reveal>
            <div className="card-surface overflow-hidden border-orange-100/70 bg-gradient-to-br from-white via-orange-50/60 to-blue-50/65 px-6 py-8 sm:px-10 sm:py-10">
              <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
                <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] shadow-[0_26px_70px_-38px_rgba(15,23,42,0.4)]">
                  <Image
                    src="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&w=1200&q=80"
                    alt="Faith community and humanitarian service in action"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 32vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
                </div>
                <div>
                  <SectionHeading
                    eyebrow="Our Inspiration"
                    title="Guided by faith and sustainable human development"
                    description="The Foundation is inspired by Catholic Social Teaching on the Preferential Option for the Poor and by the global vision for sustainable human development. Together, these commitments shape both our moral imagination and our practical work."
                  />
                  <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                    These inspirations keep our work both spiritually grounded and practically attentive to the real pressures communities face every day.
                  </p>
                </div>
              </div>
              <StaggerGrid className="mt-10 grid gap-6 md:grid-cols-3">
                {aboutFoundations.map((item) => (
                  <FocusCard key={item.title} {...item} />
                ))}
              </StaggerGrid>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell">
          <Reveal>
            <div className="card-surface overflow-hidden border-blue-100/70 bg-slate-950 px-6 py-10 text-white sm:px-10 lg:px-12">
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-300">
                    {aboutEmmausStory.title}
                  </p>
                  <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-gradient">
                    The Emmaus story is our picture of accompaniment and renewed
                    hope
                  </h2>
                </div>
                <div>
                  <p className="text-base leading-8 text-slate-900 sm:text-lg">
                    {aboutEmmausStory.description}
                  </p>
                  <p className="mt-5 text-sm font-medium uppercase tracking-[0.22em] text-blue-300">
                    Luke 24:13–35
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <SectionHeading
                eyebrow="Core Direction"
                title="The statements that anchor our identity and work"
                description="Our vision, mission, and goal keep us focused on dignity-centered service that is spiritually grounded, socially responsive, and development-minded."
              />
            </div>
          </Reveal>
          <StaggerGrid className="grid gap-6 lg:grid-cols-3">
            {aboutCoreStatements.map((item) => (
              <article
                key={item.title}
                className="card-surface h-full border-orange-100/70 p-8 sm:p-10"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-600">
                  {item.title}
                </p>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <SectionHeading
                eyebrow="Our Values"
                title="The principles that shape every decision and every program"
                description="Our values are not aspirational slogans. They are working commitments that guide how we serve, partner, and remain accountable to the communities who trust us."
              />
            </div>
          </Reveal>
          <StaggerGrid className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {aboutValues.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <article
                  key={item.title}
                  className="card-surface h-full border-orange-100/70 p-8"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-blue-600 text-white shadow-lg shadow-orange-500/20">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </StaggerGrid>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell">
          <ImageFeatureSection
            eyebrow="How We Work"
            title="Practical compassion shaped by dignity and sustainability"
            description="Our model of service combines immediate response with empowerment, partnership, and long-term thinking so that communities are not only supported, but strengthened. We want support to feel humane in the moment and constructive for the future."
            image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            alt="Team members planning a community support initiative"
            surfaceClassName="from-white via-blue-50/60 to-orange-50/60"
            overlayClassName="bg-gradient-to-t from-blue-950/35 via-transparent to-transparent"
            eyebrowClassName="text-blue-700"
          />
          <StaggerGrid className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {aboutApproach.map((item) => (
              <FocusCard key={item.title} {...item} />
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="relative min-h-[260px] overflow-hidden rounded-[2rem] shadow-[0_24px_60px_-36px_rgba(15,23,42,0.35)]">
                <Image
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1200&q=80"
                  alt="Volunteers and community members gathered together outdoors"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 30vw, 100vw"
                />
              </div>
              <div className="max-w-3xl">
                <SectionHeading
                  eyebrow="Our Commitments"
                  title="What partners, donors, and others can expect from us"
                  description="Depth and quality in humanitarian work are built through consistent commitments, not slogans. These are some of the operational convictions we seek to embody every day."
                />
              </div>
            </div>
          </Reveal>
          <StaggerGrid className="grid gap-6 lg:grid-cols-2">
            {aboutCommitments.map((item) => (
              <article
                key={item.title}
                className="card-surface h-full border-orange-100/70 p-8 sm:p-10"
              >
                <h3 className="font-display text-3xl text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </StaggerGrid>
        </div>
      </section>
    </>
  );
}
