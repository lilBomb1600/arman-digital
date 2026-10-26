import { Space_Grotesk, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import type { Lang } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getLiveSiteLinks } from "@/i18n/content";
import { cn } from "@/lib/utils";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

/**
 * Everything around the page content: <html>/<body>, fonts, the vignette and grain overlays, the scroll bar,
 * navbar and footer. Both root layouts (English at "/", Spanish at "/es") render this, so the two languages
 * can never drift apart in structure. globals.css is imported by each root layout.
 */
export function SiteShell({
  lang,
  children,
  onHome = true,
}: {
  lang: Lang;
  children: React.ReactNode;
  /** False for the 404 page, which has none of the home page's sections. */
  onHome?: boolean;
}) {
  const t = getDictionary(lang);

  return (
    <html lang={lang} className={cn("dark h-full antialiased", display.variable, body.variable)}>
      <body className="flex min-h-full flex-col bg-ink text-cream">
        <div className="pointer-events-none fixed inset-0 z-[54] bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />
        <div className="grain-overlay pointer-events-none fixed inset-0 z-[55] opacity-[0.05]" />
        <ScrollProgress />
        <Navbar lang={lang} t={t.nav} langLabel={t.langSwitch.label} command={t.command} liveSites={getLiveSiteLinks(lang)} onHome={onHome} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
