import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://alasaad.de",
      lastModified: new Date("2026-08-05"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}