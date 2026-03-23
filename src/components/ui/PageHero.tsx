import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(234,88,12,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_34%)]" />
      <div className="section-shell">
        <Reveal>
          <div className="card-surface border-orange-100/70 bg-white/85 px-5 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={description}
              align="center"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}