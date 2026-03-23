import type { MetadataRoute } from "next";
import { siteLogoPath, siteName } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "Emmaus Hope",
    description:
      "Faith-driven humanitarian initiatives that restore hope, uphold dignity, and strengthen vulnerable communities.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffaf5",
    theme_color: "#ea580c",
    icons: [
      {
        src: siteLogoPath,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: siteLogoPath,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
