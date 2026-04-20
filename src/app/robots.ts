import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://emmauscarefoundation.org",
    sitemap: "https://emmauscarefoundation.org/sitemap.xml",
  };
}