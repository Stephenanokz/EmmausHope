type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`${alignment} max-w-3xl`}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-display text-3xl leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{description}</p>
      ) : null}
    </div>
  );
}