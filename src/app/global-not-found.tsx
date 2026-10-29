import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/layout/SiteShell";
import { Container } from "@/components/ui/Container";
import { homePath, siteUrl } from "@/i18n/config";

// With two root layouts (English "/" and Spanish "/es") there's no single layout to wrap a 404 in, so Next
// serves this page for any unknown URL (experimental.globalNotFound in next.config.ts). English, with a way
// back to either language.
export const metadata: Metadata = {
  title: "Page not found | Arman Digital",
  metadataBase: new URL(siteUrl),
};

export default function GlobalNotFound() {
  return (
    <SiteShell lang="en" onHome={false}>
      <section className="py-32 sm:py-40">
        <Container className="max-w-2xl text-center">
          <p className="font-display text-6xl font-bold text-gold/40">404</p>
          <h1 className="mt-4 font-display text-3xl font-semibold text-cream sm:text-4xl">This page doesn&rsquo;t exist.</h1>
          <p lang="es" className="mt-3 text-lg text-muted">
            Esta página no existe.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={homePath.en}
              className="shine-btn rounded-full bg-gradient-to-b from-gold-light to-gold px-6 py-3 text-sm font-semibold text-ink"
            >
              Back to the homepage
            </a>
            <a
              href={homePath.es}
              hrefLang="es"
              lang="es"
              className="glass-panel rounded-full px-6 py-3 text-sm font-semibold text-cream transition-colors hover:text-gold"
            >
              Ir a la versión en español
            </a>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
