import type { Metadata } from "next";
import "../../globals.css";
import { SiteShell } from "@/components/layout/SiteShell";
import { studioEs } from "@/data/business.es";
import { es } from "@/i18n/dictionaries";
import { homePath, languageAlternates, siteUrl } from "@/i18n/config";

// Spanish root layout for "/es": its own <html lang="es">. Same SiteShell and HomePage as English.
export const metadata: Metadata = {
  title: es.meta.title,
  description: studioEs.description,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: homePath.es,
    languages: languageAlternates,
  },
  openGraph: {
    title: es.meta.title,
    description: studioEs.description,
    type: "website",
    locale: "es_US",
    alternateLocale: "en_US",
  },
};

export default function SpanishRootLayout({ children }: LayoutProps<"/es">) {
  return <SiteShell lang="es">{children}</SiteShell>;
}
