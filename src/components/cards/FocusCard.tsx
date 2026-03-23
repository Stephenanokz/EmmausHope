import { iconMap } from "@/lib/icon-map";
import type { IconName } from "@/lib/icon-map";

type FocusCardProps = {
  title: string;
  description: string;
  icon: IconName;
};

export function FocusCard({ title, description, icon }: FocusCardProps) {
  const Icon = iconMap[icon];

  return (
    <article className="card-surface group h-full border-orange-100/70 p-6 sm:p-7">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-blue-600 text-white shadow-lg shadow-orange-500/20 transition-transform duration-200 group-hover:-translate-y-1">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </div>
      <h3 className="mt-6 font-display text-2xl text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}