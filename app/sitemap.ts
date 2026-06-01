import type { MetadataRoute } from "next";
import { SITE, SITE_PAGES } from "@/lib/data/site";
import { PROVIDERS } from "@/lib/data/providers";
import { DRUGS } from "@/lib/data/drugs";
import { NEWS } from "@/lib/data/news";
import { JOURNAL } from "@/lib/data/journal";
import { GUIDES } from "@/lib/data/guides";
import { STATES } from "@/lib/data/states";
import { CITIES } from "@/lib/data/cities";
import { PHARMACIES } from "@/lib/data/pharmacies";
import { STUDIES } from "@/lib/data/research";
import { CONDITIONS } from "@/lib/data/conditions";

// Pulls from the data model so URLs auto-scale as content grows.
export default function sitemap(): MetadataRoute.Sitemap {
  const mod = new Date(SITE.modified);
  const monthly: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly";
  const weekly: MetadataRoute.Sitemap[number]["changeFrequency"] = "weekly";

  const core = SITE_PAGES.map((p) => ({
    url: `${SITE.url}${p.path}`,
    lastModified: mod,
    changeFrequency: p.changefreq as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: p.priority,
  }));

  // New section index pages
  const sectionIndexes = [
    { path: "/news", priority: 0.85, cf: weekly },
    { path: "/journal", priority: 0.85, cf: weekly },
    { path: "/guides", priority: 0.9, cf: monthly },
    { path: "/states", priority: 0.85, cf: monthly },
    { path: "/cities", priority: 0.8, cf: monthly },
    { path: "/pharmacies", priority: 0.8, cf: monthly },
    { path: "/research", priority: 0.85, cf: monthly },
    { path: "/conditions", priority: 0.85, cf: monthly },
    { path: "/glossary", priority: 0.85, cf: monthly },
    { path: "/about/press", priority: 0.55, cf: monthly },
    { path: "/about/contact", priority: 0.55, cf: monthly },
  ].map((p) => ({
    url: `${SITE.url}${p.path}`,
    lastModified: mod,
    changeFrequency: p.cf,
    priority: p.priority,
  }));

  // Existing providers + drugs (preserved)
  const providers = [
    { url: `${SITE.url}/providers`, priority: 0.8 },
    ...PROVIDERS.map((p) => ({ url: `${SITE.url}/providers/${p.slug}`, priority: 0.78 })),
  ].map((e) => ({ ...e, lastModified: mod, changeFrequency: monthly }));

  const drugs = Object.values(DRUGS).map((d) => ({
    url: `${SITE.url}/medications/${d.slug}`,
    lastModified: mod,
    changeFrequency: monthly,
    priority: 0.8,
  }));

  // Article detail collections
  const news = NEWS.map((n) => ({
    url: `${SITE.url}/news/${n.slug}`,
    lastModified: new Date(n.date),
    changeFrequency: weekly,
    priority: 0.7,
  }));
  const journal = JOURNAL.map((j) => ({
    url: `${SITE.url}/journal/${j.slug}`,
    lastModified: new Date(j.dateModified),
    changeFrequency: monthly,
    priority: 0.75,
  }));
  const guides = GUIDES.map((g) => ({
    url: `${SITE.url}/guides/${g.slug}`,
    lastModified: new Date(g.updated),
    changeFrequency: monthly,
    priority: 0.78,
  }));

  // Geo
  const states = STATES.map((s) => ({
    url: `${SITE.url}/states/${s.slug}`,
    lastModified: mod,
    changeFrequency: monthly,
    priority: 0.7,
  }));
  const cities = CITIES.map((c) => ({
    url: `${SITE.url}/cities/${c.slug}`,
    lastModified: mod,
    changeFrequency: monthly,
    priority: 0.68,
  }));

  // Reference
  const pharmacies = PHARMACIES.map((p) => ({
    url: `${SITE.url}/pharmacies/${p.slug}`,
    lastModified: mod,
    changeFrequency: monthly,
    priority: 0.72,
  }));
  const studies = STUDIES.map((s) => ({
    url: `${SITE.url}/research/${s.slug}`,
    lastModified: mod,
    changeFrequency: monthly,
    priority: 0.75,
  }));
  const conditions = CONDITIONS.map((c) => ({
    url: `${SITE.url}/conditions/${c.slug}`,
    lastModified: mod,
    changeFrequency: monthly,
    priority: 0.78,
  }));

  return [
    ...core,
    ...sectionIndexes,
    ...providers,
    ...drugs,
    ...news,
    ...journal,
    ...guides,
    ...states,
    ...cities,
    ...pharmacies,
    ...studies,
    ...conditions,
  ];
}
