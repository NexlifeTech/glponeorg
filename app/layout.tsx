import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE } from "@/lib/data/site";
import { GlassDock } from "@/components/nav/GlassDock";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { globalGraph } from "@/lib/schema";
import { SmoothScroll } from "@/components/scroll/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Independent 2026 GLP-1 Provider Rankings`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: "Dr. Parmis" }, { name: "Adam Kennah, M.D." }],
  alternates: {
    canonical: "/",
    types: {
      "text/plain": [
        { url: "/llms.txt", title: "LLMs.txt summary for AI assistants" },
        { url: "/llms-full.txt", title: "LLMs full content" },
      ],
    },
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_US",
    url: SITE.url,
    title: `${SITE.name} — Independent 2026 GLP-1 Provider Rankings`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Independent 2026 GLP-1 Provider Rankings`,
    description: SITE.description,
  },
  category: "health",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbfbfd",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light" className="antialiased">
      <body className="flex min-h-screen flex-col">
        <JsonLd data={globalGraph()} />
        <SmoothScroll />
        <GlassDock />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
