import type { Metadata } from "next";
import "../globals.css";
import { SiteShell } from "@/components/layout/SiteShell";
import { studio } from "@/data/business";
import { en } from "@/i18n/dictionaries";
import { homePath, languageAlternates, siteUrl } from "@/i18n/config";

// English root layout for "/". The Spanish one lives at src/app/(es)/es/layout.tsx; both render SiteShell.
export const metadata: Metadata = {
  title: en.meta.title,
  description: studio.description,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: homePath.en,
    languages: languageAlternates,
  },
  openGraph: {
    title: en.meta.title,
    description: studio.description,
    type: "website",
    locale: "en_US",
    alternateLocale: "es_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <SiteShell lang="en">{children}</SiteShell>;
}
