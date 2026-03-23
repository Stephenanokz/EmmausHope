import Link from "next/link";
import Image from "next/image";
import type { Story } from "@/lib/content";

type StoryCardProps = Pick<Story, "slug" | "title" | "excerpt" | "category" | "image" | "publishedAt" | "readTime">;

export function StoryCard({ slug, title, excerpt, category, image, publishedAt, readTime }: StoryCardProps) {
  return (
    <Link href={`/news/${slug}`} className="focus-ring group block h-full cursor-pointer rounded-3xl">
      <article className="card-surface h-full overflow-hidden border-orange-100/70">
        <div className="relative h-60 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        </div>
        <div className="p-6 sm:p-7">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]">
            <p className="text-orange-600">{category}</p>
            <span className="text-slate-400">{publishedAt}</span>
            <span className="text-slate-400">{readTime}</span>
          </div>
          <h3 className="mt-4 font-display text-2xl text-slate-950 group-hover:text-orange-700">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{excerpt}</p>
        </div>
      </article>
    </Link>
  );
}