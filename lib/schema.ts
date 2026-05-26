import { SITE } from "./data/site";
import { PROVIDERS, type Provider } from "./data/providers";
import { TEAM, getMember } from "./data/team";
import { FAQS, type QA } from "./data/faqs";
import { type Drug } from "./data/drugs";

const u = (path = "/") => `${SITE.url}${path}`;

// ── Identity graph (emitted once, in the root layout) ──────────────
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": u("/#organization"),
    name: SITE.name,
    alternateName: "GLPReview.org",
    url: SITE.url,
    email: SITE.email,
    logo: u("/icon.svg"),
    publishingPrinciples: u("/methodology"),
    ethicsPolicy: u("/methodology#independence"),
    actionableFeedbackPolicy: u("/methodology#corrections"),
    foundingDate: SITE.published,
    founder: { "@type": "Organization", name: SITE.publisher },
    parentOrganization: { "@type": "Organization", name: SITE.publisher },
    knowsAbout: [
      "Tirzepatide",
      "Semaglutide",
      "Compounded GLP-1",
      "Mounjaro",
      "Zepbound",
      "Ozempic",
      "Wegovy",
      "GLP-1 receptor agonists",
      "Telehealth providers",
      "503A compounding pharmacies",
      "503B outsourcing facilities",
      "Obesity medicine",
      "Type 2 diabetes",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": u("/#website"),
    name: SITE.name,
    url: SITE.url,
    publisher: { "@id": u("/#organization") },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: u("/rankings?q={query}") },
      "query-input": "required name=query",
    },
  };
}

export function personSchema(id: string) {
  const m = getMember(id);
  if (!m) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": u(`/about#${m.id}`),
    name: m.name,
    jobTitle: m.role,
    description: m.bio,
    knowsAbout: m.knowsAbout,
    worksFor: { "@id": u("/#organization") },
  };
}

// ── Page-level builders ────────────────────────────────────────────
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: u(t.path),
    })),
  };
}

export function faqSchema(items: QA[] = FAQS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function providerListSchema(providers: Provider[] = PROVIDERS) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": u("/rankings#itemlist"),
    name: "Best GLP-1 Telehealth Providers — 2026 Editorial Ranking",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: providers.length,
    itemListElement: providers.map((p) => ({
      "@type": "ListItem",
      position: p.rank,
      url: u(`/providers/${p.slug}`),
      item: {
        "@type": "MedicalBusiness",
        name: p.name,
        url: p.url,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: p.rating.toFixed(1),
          reviewCount: p.reviewCount,
          bestRating: "5",
        },
      },
    })),
  };
}

export function medicalWebPageSchema(opts: {
  path: string;
  name: string;
  description: string;
  aboutDrug?: Drug;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": u(`${opts.path}#webpage`),
    url: u(opts.path),
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": u("/#website") },
    publisher: { "@id": u("/#organization") },
    datePublished: SITE.published,
    dateModified: SITE.modified,
    lastReviewed: SITE.lastReviewed,
    author: { "@id": u("/about#dr-parmis") },
    reviewedBy: { "@id": u("/about#adam-kennah") },
    specialty: { "@type": "MedicalSpecialty", name: "Obesity Medicine" },
    audience: { "@type": "MedicalAudience", audienceType: "Patient" },
    inLanguage: "en-US",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".ai-snippet", "h1", ".lede"],
    },
    ...(opts.aboutDrug
      ? {
          about: {
            "@type": "Drug",
            name: opts.aboutDrug.name,
            alternateName: opts.aboutDrug.brands,
          },
        }
      : {}),
  };
}

export function articleSchema(opts: { path: string; headline: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    datePublished: SITE.published,
    dateModified: SITE.modified,
    author: { "@id": u("/about#dr-parmis") },
    reviewedBy: { "@id": u("/about#adam-kennah") },
    publisher: { "@id": u("/#organization") },
    mainEntityOfPage: u(opts.path),
    isAccessibleForFree: true,
  };
}

export function reviewSchema(p: Provider) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": u(`/providers/${p.slug}#review`),
    itemReviewed: {
      "@type": "MedicalBusiness",
      name: p.name,
      url: p.url,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: p.rating.toFixed(1),
        reviewCount: p.reviewCount,
        bestRating: "5",
      },
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: (p.score / 20).toFixed(1),
      bestRating: "5",
    },
    name: `${p.name} review — GLP Review 2026`,
    reviewBody: p.verdict,
    author: { "@id": u("/about#dr-parmis") },
    datePublished: SITE.published,
    dateModified: SITE.modified,
    publisher: { "@id": u("/#organization") },
  };
}

export function drugSchema(d: Drug) {
  return {
    "@context": "https://schema.org",
    "@type": "Drug",
    "@id": u(`/medications/${d.slug}#drug`),
    name: d.name,
    alternateName: [...d.brands, ...(d.code !== "—" ? [d.code] : [])],
    drugClass: { "@type": "DrugClass", name: d.drugClass },
    manufacturer: { "@type": "Organization", name: d.manufacturer },
    activeIngredient: d.name,
    administrationRoute: d.route,
    mechanismOfAction: d.mechanism,
    doseSchedule: {
      "@type": "DoseSchedule",
      doseUnit: d.doseUnit,
      doseValue: `${d.doseLadder[0]}–${d.doseLadder[d.doseLadder.length - 1]}`,
      frequency: "weekly",
    },
    contraindication: d.contraindications.map((c) => ({
      "@type": "MedicalContraindication",
      name: c,
    })),
  };
}

// Convenience: the global graph for the root layout.
export function globalGraph() {
  return [organizationSchema(), websiteSchema(), ...TEAM.map((m) => personSchema(m.id)!).filter(Boolean)];
}
