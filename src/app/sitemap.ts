import type { MetadataRoute } from "next";
import { newsStories } from "@/lib/content";

const routes = [
  "",
  "/about",
  "/founder",
  "/programs",
  "/impact",
  "/get-involved",
  "/partnerships",
  "/news",
  "/donate",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = routes.map((route) => ({
    url: `https://emmaushopefoundation.org${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : 0.8,
  }));

  const storyRoutes = newsStories.map((story) => ({
    url: `https://emmaushopefoundation.org/news/${story.slug}`,
    lastModified: new Date(story.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...storyRoutes];
}