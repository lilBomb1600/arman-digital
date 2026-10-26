/**
 * The site ships in two languages: English at "/" and Spanish at "/es". Each has its own root layout
 * (src/app/(en)/layout.tsx and src/app/(es)/es/layout.tsx) so <html lang> is right on both, and both render
 * the same SiteShell and HomePage with a `lang` prop. Strings live in ./dictionaries.ts (UI copy) and in the
 * *.es.ts files next to the English data in src/data (prose: about, services, work cards, video work...).
 */
export type Lang = "en" | "es";

export const langs: readonly Lang[] = ["en", "es"];

/** Where each language's home page lives. Section anchors (#work, #contact...) are relative to it. */
export const homePath: Record<Lang, string> = {
  en: "/",
  es: "/es",
};

export const siteUrl = "https://arman-digital.vercel.app";

/** hreflang alternates, the same on both pages. English is the default for everyone else. */
export const languageAlternates = {
  en: homePath.en,
  es: homePath.es,
  "x-default": homePath.en,
};

/** Fills {placeholders} in a dictionary string: fill("Follow {handle}", { handle: "@x" }). */
export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}
