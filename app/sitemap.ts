import type { MetadataRoute } from "next";
import { SITE, SITE_PAGES } from "@/lib/data/site";
import { PROVIDERS } from "@/lib/data/providers";
import { DRUGS } from "@/lib/data/drugs";

// Single comprehensive sitemap (well under the 50k-URL limit). Pulls from the
// data model so provider + drug pages are always included. When programmatic
// geo pages land, split this with generateSitemaps().
export default function sitemap(): MetadataRoute.Sitemap {
  const mod = new Date(SITE.modified);

  const core = SITE_PAGES.map((p) => ({
    url: `${SITE.url}${p.path}`,
    lastModified: mod,
    changeFrequency: p.changefreq as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: p.priority,
  }));

  const providers = [
    { url: `${SITE.url}/providers`, priority: 0.8 },
    ...PROVIDERS.map((p) => ({ url: `${SITE.url}/providers/${p.slug}`, priority: 0.75 })),
  ].map((e) => ({
    ...e,
    lastModified: mod,
    changeFrequency: "monthly" as const,
  }));

  const drugs = Object.values(DRUGS).map((d) => ({
    url: `${SITE.url}/medications/${d.slug}`,
    lastModified: mod,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...core, ...providers, ...drugs];
}
