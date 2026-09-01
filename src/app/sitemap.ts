import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const routes = [""];

  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of routing.locales) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : 0.8,
        alternates: {
          languages: {
            ...Object.fromEntries(routing.locales.map((loc) => [loc, `${baseUrl}/${loc}${route}`])),
            "x-default": `${baseUrl}/${routing.defaultLocale}${route}`,
          },
        },
      });
    }
  }

  return entries;
}
