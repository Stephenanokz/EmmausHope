import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSummary() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <div className="card-surface border-orange-100/70 px-6 py-10 sm:px-10">
              <SectionHeading
                eyebrow="About Emmaus Care"
                title="Restoring hope with dignity-centered service"
                description="Emmaus Care Foundation works to uplift poor and vulnerable communities through empowerment programs, education support, hunger relief initiatives, and social inclusion programs."
              />
            </div>
            <blockquote className="card-surface border-blue-100/70 bg-gradient-to-br from-slate-950 to-blue-950 px-6 py-10 text-white sm:px-8">
              <p className="font-display text-3xl leading-relaxed sm:text-[2.2rem]">
                &ldquo;Whatever you did for one of the least of these brothers and sisters of mine, you did for me.&rdquo;
              </p>
              <footer className="mt-6 text-sm uppercase tracking-[0.22em] text-orange-300">
                Matthew 25:40
              </footer>
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  );
}