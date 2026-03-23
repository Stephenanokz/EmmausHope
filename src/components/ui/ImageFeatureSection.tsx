import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

type ImageFeatureSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  children?: ReactNode;
  reverse?: boolean;
  surfaceClassName?: string;
  overlayClassName?: string;
  eyebrowClassName?: string;
  descriptionClassName?: string;
};

export function ImageFeatureSection({
  eyebrow,
  title,
  description,
  image,
  alt,
  children,
  reverse = false,
  surfaceClassName,
  overlayClassName,
  eyebrowClassName,
  descriptionClassName,
}: ImageFeatureSectionProps) {
  return (
    <Reveal>
      <div
        className={[
          "card-surface overflow-hidden border-orange-100/70 bg-gradient-to-br from-white via-orange-50/65 to-blue-50/70",
          surfaceClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="grid gap-0 lg:grid-cols-2">
          <div className={reverse ? "lg:order-2" : undefined}>
            <div className="relative h-full min-h-[260px] sm:min-h-[320px] lg:min-h-[420px]">
              <Image
                src={image}
                alt={alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div
                className={[
                  "absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent",
                  overlayClassName,
                ]
                  .filter(Boolean)
                  .join(" ")}
              />
            </div>
          </div>
          <div
            className={["px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12", reverse ? "lg:order-1" : undefined]
              .filter(Boolean)
              .join(" ")}
          >
            <p
              className={[
                "text-sm font-semibold uppercase tracking-[0.22em] text-orange-600",
                eyebrowClassName,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl text-slate-950 sm:text-4xl lg:text-5xl">{title}</h2>
            <p
              className={[
                "mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8",
                descriptionClassName,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {description}
            </p>
            {children ? <div className="mt-6">{children}</div> : null}
          </div>
        </div>
      </div>
    </Reveal>
  );
}