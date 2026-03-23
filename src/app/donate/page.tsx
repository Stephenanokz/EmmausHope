import type { Metadata } from "next";
import Link from "next/link";
import { donationAreas } from "@/lib/content";
import { FocusCard } from "@/components/cards/FocusCard";
import { DonationForm } from "@/components/sections/DonationForm";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGrid } from "@/components/ui/StaggerGrid";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Emmaus Hope Foundation through donor-friendly giving that funds feeding programs, scholarships, skills training, and women empowerment initiatives.",
  alternates: {
    canonical: "/donate",
  },
  openGraph: {
    title: "Donate | Emmaus Hope Foundation",
    description:
      "Support Emmaus Hope Foundation through donor-friendly giving that funds feeding programs, scholarships, skills training, and women empowerment initiatives.",
    url: "/donate",
  },
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Give today so hope can reach further tomorrow"
        description="Your support helps Emmaus Hope Foundation respond to urgent needs while investing in education, empowerment, and sustainable community transformation."
      />

      <section className="pb-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-8">
            <Reveal>
              <div className="card-surface border-orange-100/70 p-8 sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-600">Why your gift matters</p>
                <h2 className="mt-3 font-display text-3xl text-slate-950 sm:text-4xl">Compelling generosity with practical impact</h2>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  Donations help us sustain responsive humanitarian programs that feed families, keep children in school, support women with opportunity, and accompany vulnerable persons with dignity-centered care.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  We are committed to stewardship, transparency, and program delivery that honors the trust donors and partners place in our mission.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <DonationForm />
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <SectionHeading
                eyebrow="Where Your Gift Goes"
                title="Every contribution supports one of these vital areas"
                description="Your generosity directly funds programs that protect dignity, restore hope, and create lasting change."
              />
            </div>
          </Reveal>
          <StaggerGrid className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {donationAreas.map((item) => (
              <FocusCard key={item.title} {...item} />
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell">
          <Reveal>
            <div className="card-surface border-slate-800/80 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">Tailored giving</p>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">Plan a more intentional way to support the mission.</h2>
                <p className="mt-5 text-base leading-8 text-white/90">
                  If you want to discuss structured support, institutional giving, or partnership-led generosity, we can help shape the right path with clarity and stewardship.
                </p>
              </div>
              <Link
                href="mailto:info@emmaushopefoundation.org"
                className="focus-ring mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:-translate-y-0.5 hover:bg-slate-100 lg:mt-0"
              >
                Discuss a giving plan
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}