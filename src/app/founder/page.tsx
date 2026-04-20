import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Meet Our Founder",
  description:
    "Fr. Peter Tule Amaya-Akpala, OP, is a Catholic Dominican priest who founded Emmaus Care Foundation to walk with the vulnerable and transform lives through faith-driven humanitarian action.",
  alternates: {
    canonical: "/founder",
  },
  openGraph: {
    title: "Meet Our Founder | Emmaus Care Foundation",
    description:
      "Fr. Peter Tule Amaya-Akpala, OP, is a Catholic Dominican priest who founded Emmaus Care Foundation to walk with the vulnerable and transform lives.",
    url: "/founder",
  },
};

export default function FounderPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(234,88,12,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_34%)]" />
        <div className="section-shell">
          <Reveal>
            <div className="card-surface overflow-hidden border-orange-100/70 bg-white/85">
              <div className="grid gap-0 lg:grid-cols-[0.4fr_0.6fr]">
                <div className="relative min-h-[360px] sm:min-h-[460px]">
                  <Image
                    src="/images/founder/founder.jpg"
                    alt="Fr. Peter Tule Amaya-Akpala, OP — Founder of Emmaus Care Foundation"
                    fill
                    priority
                    className="object-cover"
                    sizes="(min-width: 1024px) 38vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950/5" />
                </div>
                <div className="flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-14">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-600">
                    Meet Our Founder
                  </p>
                  <h1 className="mt-3 font-display text-3xl leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
                    Fr. Peter Tule Amaya-Akpala, OP
                  </h1>
                  <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                    A Catholic Dominican priest dedicated to serving the poor and restoring hope through faith-driven humanitarian action.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Biography */}
      <section className="pb-24">
        <div className="section-shell">
          <Reveal>
            <article className="mx-auto max-w-4xl">
              <div className="story-rich-content">
                <p>
                  Fr. Peter Tule Amaya-Akpala, OP, is a Catholic Dominican priest dedicated to serving the poor and restoring hope. Inspired by Christ&apos;s encounter on the road to Emmaus, he founded Emmaus Care Foundation to walk with the vulnerable and transform lives.
                </p>

                <p>
                  Rooted in the Gospel and guided by the Dominican charism of truth (<em>Veritas</em>), Fr. Peter&apos;s life and ministry are dedicated to restoring hope, defending human dignity, and serving those most in need. His work is deeply inspired by the Catholic Social Teaching principle of the <strong>Preferential Option for the Poor</strong>, which calls for special concern for the most vulnerable members of society.
                </p>

                <p>
                  Fr. Peter draws deep inspiration from the encounter of Christ with the two disciples on the road to Emmaus (Luke 24:13–35). Just as Christ walked with them in their moment of despair, listened to their struggles, and restored their hope, Fr. Peter has committed his life to walking with the poor, the marginalized, and the forgotten — bringing light where there is darkness and hope where there is despair.
                </p>

                <p>
                  In response to the growing realities of poverty, hunger, inequality, and lack of opportunity affecting millions in Nigeria, Fr. Peter founded <em>Emmaus Care Foundation</em>. The Foundation is a faith-driven humanitarian and development initiative committed to &ldquo;leaving no one behind&rdquo; by sharing resources, empowering lives, and creating pathways for sustainable growth.
                </p>

                <p>
                  Through this platform, Fr. Peter seeks not only to provide immediate relief — such as food, education support, and humanitarian aid — but also to empower individuals, especially the youths, to become self-reliant, confident, and capable of shaping their own future. His vision is to help young people rise above their circumstances, discover their potential, and become the best versions of themselves.
                </p>

                <p>
                  Fr. Peter strongly believes that true transformation happens when compassion meets action. He actively promotes a global culture of solidarity by encouraging individuals, communities, and organizations to give, volunteer, and partner in service of humanity. Through these shared efforts, he envisages a world where the poor are not forgotten, but uplifted; where dignity is not denied, but restored; and where hope is not lost, but renewed.
                </p>

                <p>
                  A seasoned preacher and mission-driven leader, Fr. Peter continues to inspire people across cultures and continents with his message of practical love, faith in action, human dignity, and sustainable impact. His work stands as a living testimonial to the words of Christ in Matthew 25:40:
                </p>

                <blockquote>
                  <p>&ldquo;Whatever you did for one of the least of these brothers and sisters of mine, you did for me.&rdquo;</p>
                </blockquote>

                <p>
                  Through his ministry and leadership, Fr. Peter Tule Amaya-Akpala, OP, is not only changing lives, not only building a movement of care, compassion, and transformation — he is winning souls for Christ through the Emmaus Care Foundation.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
