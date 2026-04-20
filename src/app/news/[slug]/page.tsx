import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStoryBySlug, newsStories, siteLogoPath, siteName } from "@/lib/content";
import { StoryCard } from "@/components/cards/StoryCard";
import { Reveal } from "@/components/ui/Reveal";

type NewsDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return newsStories.map((story) => ({
    slug: story.slug,
  }));
}

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story) {
    return {
      title: "Story Not Found",
    };
  }

  return {
    title: story.title,
    description: story.excerpt,
    alternates: {
      canonical: `/news/${story.slug}`,
    },
    openGraph: {
      title: story.title,
      description: story.excerpt,
      url: `/news/${story.slug}`,
      type: "article",
      images: [story.image],
      publishedTime: story.publishedAt,
      authors: [story.author],
    },
    twitter: {
      title: story.title,
      description: story.excerpt,
      images: [story.image],
    },
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  const relatedStories = newsStories
    .filter((candidate) => candidate.slug !== story.slug)
    .sort((left, right) => {
      const leftScore = Number(left.category === story.category) + Number(Boolean(left.featuredInImpact));
      const rightScore = Number(right.category === story.category) + Number(Boolean(right.featuredInImpact));

      return rightScore - leftScore;
    })
    .slice(0, 3);

  const authorInitials = story.author
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.title,
    description: story.excerpt,
    image: [story.image],
    datePublished: story.publishedAt,
    dateModified: story.publishedAt,
    author: {
      "@type": "Person",
      name: story.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: `https://emmauscarefoundation.org${siteLogoPath}`,
      },
    },
    mainEntityOfPage: `https://emmauscarefoundation.org/news/${story.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://emmauscarefoundation.org/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "News",
        item: "https://emmauscarefoundation.org/news",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: story.title,
        item: `https://emmauscarefoundation.org/news/${story.slug}`,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(234,88,12,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.14),transparent_30%)]" />
        <div className="section-shell">
          <Reveal>
            <div className="card-surface overflow-hidden border-orange-100/70 bg-white/90">
              <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="px-6 py-10 sm:px-10 sm:py-12">
                  <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                    <Link href="/" className="focus-ring rounded-full px-2 py-1 hover:text-slate-900">
                      Home
                    </Link>
                    <span aria-hidden="true">/</span>
                    <Link href="/news" className="focus-ring rounded-full px-2 py-1 hover:text-slate-900">
                      News
                    </Link>
                    <span aria-hidden="true">/</span>
                    <span className="line-clamp-1 max-w-[18rem] text-slate-700 sm:max-w-[24rem]">{story.title}</span>
                  </nav>

                  <Link
                    href="/news"
                    className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-orange-50"
                  >
                    <span aria-hidden="true">&larr;</span>
                    Back to News
                  </Link>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-orange-600">
                    {story.category}
                  </p>
                  <h1 className="mt-4 font-display text-3xl text-slate-950 sm:text-5xl lg:text-6xl">
                    {story.title}
                  </h1>
                  <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{story.excerpt}</p>
                  <div className="mt-8 flex flex-col gap-5 rounded-[1.75rem] border border-slate-200/80 bg-slate-50/90 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-blue-600 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-orange-500/20">
                        {authorInitials}
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Written by</p>
                        <p className="mt-1 text-base font-semibold text-slate-900">{story.author}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                      <time dateTime={story.publishedAt}>{story.publishedAt}</time>
                      <span aria-hidden="true">•</span>
                      <span>{story.readTime}</span>
                      <span aria-hidden="true">•</span>
                      <span>{story.category}</span>
                    </div>
                  </div>
                </div>
                <div className="relative min-h-[320px] h-full lg:min-h-[520px]">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
              <article className="card-surface border-orange-100/70 px-6 py-10 sm:px-10 sm:py-12">
                <div
                  className="story-rich-content mx-auto max-w-4xl"
                  dangerouslySetInnerHTML={{ __html: story.contentHtml }}
                />
              </article>

              <aside className="space-y-5 lg:sticky lg:top-28">
                <div className="card-surface border-slate-200/80 bg-slate-50/90 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Article Snapshot</p>
                  <dl className="mt-4 space-y-4 text-sm text-slate-600">
                    <div>
                      <dt className="font-semibold text-slate-900">Published</dt>
                      <dd className="mt-1">{story.publishedAt}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-900">Reading time</dt>
                      <dd className="mt-1">{story.readTime}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-900">Category</dt>
                      <dd className="mt-1">{story.category}</dd>
                    </div>
                  </dl>
                </div>

                <div className="card-surface border-orange-100/70 bg-gradient-to-br from-orange-50 via-white to-blue-50 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">Keep Reading</p>
                  <h2 className="mt-3 font-display text-2xl text-slate-950">More from Emmaus Care</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Explore more updates, campaign moments, and community stories shaping the foundation’s work.
                  </p>
                  <Link
                    href="/news"
                    className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    Browse all stories
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </aside>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-shell">
          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-600">Related Stories</p>
                <h2 className="mt-3 font-display text-3xl text-slate-950 sm:text-4xl">Continue exploring the story of impact</h2>
              </div>
              <Link
                href="/news"
                className="focus-ring inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                View all news
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {relatedStories.map((relatedStory) => (
                <StoryCard key={relatedStory.slug} {...relatedStory} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}