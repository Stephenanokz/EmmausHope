type ProgramCardProps = {
  title: string;
  description: string;
  sdg: string;
};

export function ProgramCard({ title, description, sdg }: ProgramCardProps) {
  return (
    <article className="card-surface group h-full border-orange-100/70 p-6 sm:p-7">
      <div className="inline-flex rounded-full bg-gradient-to-r from-orange-100 to-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
        {sdg}
      </div>
      <h3 className="mt-5 font-display text-2xl text-slate-950">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}