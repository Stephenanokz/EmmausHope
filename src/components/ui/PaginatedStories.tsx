"use client";

import { startTransition, useDeferredValue, useMemo, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { StoryCard } from "@/components/cards/StoryCard";
import { iconMap } from "@/lib/icon-map";
import type { Story } from "@/lib/content";

type PaginatedStoriesProps = {
  stories: Story[];
  pageSize?: number;
};

function getVisiblePages(totalPages: number, currentPage: number) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, "ellipsis", totalPages] as const;
  }

  if (currentPage >= totalPages - 3) {
    return [1, "ellipsis", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages] as const;
  }

  return [1, "ellipsis", currentPage - 1, currentPage, currentPage + 1, "ellipsis", totalPages] as const;
}

export function PaginatedStories({ stories, pageSize = 6 }: PaginatedStoriesProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const listRef = useRef<HTMLDivElement | null>(null);
  const ChevronLeftIcon = iconMap.ChevronLeft;
  const ChevronRightIcon = iconMap.ChevronRight;
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(stories.map((story) => story.category)))],
    [stories],
  );
  const activeCategory = categories.includes(searchParams.get("category") ?? "")
    ? (searchParams.get("category") as string)
    : "All";
  const deferredCategory = useDeferredValue(activeCategory);
  const filteredStories = useMemo(
    () =>
      deferredCategory === "All"
        ? stories
        : stories.filter((story) => story.category === deferredCategory),
    [deferredCategory, stories],
  );
  const totalPages = Math.max(1, Math.ceil(filteredStories.length / pageSize));
  const requestedPage = Number(searchParams.get("page") ?? "1");
  const currentPage = Number.isFinite(requestedPage)
    ? Math.min(Math.max(requestedPage, 1), totalPages)
    : 1;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredStories.length);
  const currentStories = filteredStories.slice(startIndex, endIndex);
  const visiblePages = getVisiblePages(totalPages, currentPage);

  const updateSearch = (category: string, page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    if (page <= 1) {
      params.delete("page");
    } else {
      params.set("page", String(page));
    }

    const query = params.toString();
    const href = query ? `${pathname}?${query}` : pathname;

    startTransition(() => {
      router.replace(href, { scroll: false });
    });
  };

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) {
      return;
    }

    updateSearch(activeCategory, page);

    requestAnimationFrame(() => {
      listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <div ref={listRef} className="scroll-mt-36">
      <div className="-mx-1 mb-6 flex items-center gap-2 overflow-x-auto px-1 pb-2 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0">
        {categories.map((category) => {
          const active = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              aria-pressed={active}
              onClick={() => {
                updateSearch(category, 1);
              }}
              className={[
                "focus-ring inline-flex shrink-0 items-center rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap",
                active
                  ? "bg-gradient-to-r from-orange-500 to-blue-600 text-white shadow-md"
                  : "border border-slate-200 bg-white text-slate-900 hover:border-orange-200 hover:bg-orange-50",
              ].join(" ")}
            >
              {category}
            </button>
          );
        })}
      </div>

      <p className="mb-6 text-sm font-medium text-slate-600" aria-live="polite">
        Showing {filteredStories.length === 0 ? 0 : startIndex + 1}-{endIndex} of {filteredStories.length} stories
        {deferredCategory !== "All" ? ` in ${deferredCategory}` : ""}
      </p>

      {currentStories.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {currentStories.map((story) => (
            <StoryCard key={story.title} {...story} />
          ))}
        </div>
      ) : (
        <div className="card-surface border-orange-100/70 px-6 py-10 text-center">
          <p className="text-lg font-medium text-slate-900">No stories found in this category yet.</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Try another category to continue browsing updates from Emmaus Hope Foundation.
          </p>
        </div>
      )}

      {totalPages > 1 ? (
        <nav
          aria-label="News pagination"
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 disabled:cursor-not-allowed disabled:opacity-45 max-[420px]:w-full"
            >
              <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
              Previous
            </button>
            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 disabled:cursor-not-allowed disabled:opacity-45 max-[420px]:w-full"
            >
              Next
              <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-end">
            {visiblePages.map((item, index) =>
              item === "ellipsis" ? (
                <span key={`ellipsis-${index}`} className="px-2 text-sm text-slate-500" aria-hidden="true">
                  ...
                </span>
              ) : (
                <button
                  key={item}
                  type="button"
                  onClick={() => goToPage(item)}
                  aria-current={item === currentPage ? "page" : undefined}
                  className={[
                    "focus-ring inline-flex h-11 min-w-11 items-center justify-center rounded-full px-4 text-sm font-semibold",
                    item === currentPage
                      ? "bg-gradient-to-r from-orange-500 to-blue-600 text-white shadow-md"
                      : "border border-slate-200 bg-white text-slate-900 hover:border-orange-200 hover:bg-orange-50",
                  ].join(" ")}
                >
                  {item}
                </button>
              ),
            )}
          </div>
        </nav>
      ) : null}
    </div>
  );
}