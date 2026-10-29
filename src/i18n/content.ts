import type { Lang } from "./config";
import { studio } from "@/data/business";
import { studioEs } from "@/data/business.es";
import { about } from "@/data/about";
import { aboutEs } from "@/data/about.es";
import { services } from "@/data/services";
import { servicesEs } from "@/data/services.es";
import { businessTypes, process } from "@/data/businessTypes";
import { businessTypesEs, processEs } from "@/data/businessTypes.es";
import { videoWork, type VideoCaseStudy } from "@/data/videoWork";
import { videoWorkEs } from "@/data/videoWork.es";
import { work, workGroups, type CaseStudy, type WorkGroup } from "@/data/work";
import { workEs, workGroupsEs } from "@/data/work.es";
import { reels, type Reel } from "@/data/reels";
import { reelsEs } from "@/data/reels.es";
import { addOns, pricing, type AddOns, type Pricing } from "@/data/pricing";
import { addOnItemsEs, pricingEs } from "@/data/pricing.es";

/**
 * The prose data for a language. English always comes straight from src/data/*.ts, untouched. Spanish comes
 * from the matching *.es.ts file; work cards and video case studies fall back to English field by field
 * when an id has no Spanish entry yet, so a new card never shows up blank on /es.
 */

export function getStudioCopy(lang: Lang): { tagline: string; description: string } {
  return lang === "es" ? studioEs : { tagline: studio.tagline, description: studio.description };
}

export function getAbout(lang: Lang) {
  return lang === "es" ? aboutEs : about;
}

export function getServices(lang: Lang) {
  return lang === "es" ? servicesEs : services;
}

export function getBusinessTypes(lang: Lang) {
  return lang === "es" ? businessTypesEs : businessTypes;
}

export function getProcess(lang: Lang) {
  return lang === "es" ? processEs : process;
}

export function getVideoWork(lang: Lang): VideoCaseStudy[] {
  if (lang === "en") return videoWork;
  return videoWork.map((v) => {
    const es = videoWorkEs[v.id];
    return {
      ...v,
      category: es?.category ?? v.category,
      title: es?.title ?? v.title,
      description: es?.description ?? v.description,
      deliverables: es?.deliverables ?? v.deliverables,
    };
  });
}

export function getWork(lang: Lang): CaseStudy[] {
  if (lang === "en") return work;
  return work.map((w) => {
    const es = workEs[w.id];
    return {
      ...w,
      category: es?.category ?? w.category,
      short: es?.short ?? w.short,
      summary: es?.summary ?? w.summary,
      deliverables: es?.deliverables ?? w.deliverables,
    };
  });
}

/** The gallery's filter groups in display order, with their label in the page's language. */
export function getWorkGroups(lang: Lang): { id: WorkGroup; label: string }[] {
  return workGroups.map((g) => ({ id: g.id, label: lang === "es" ? workGroupsEs[g.id] : g.label }));
}

/** A Reel with the file to play on this language's page (the Spanish cut on /es when there is one). */
export type LocalizedReel = Omit<Reel, "slug" | "slugEs"> & { video: string; poster: string };

export function getReels(lang: Lang): LocalizedReel[] {
  return reels.map(({ slug, slugEs, ...r }) => {
    const file = lang === "es" && slugEs ? slugEs : slug;
    const es = lang === "es" ? reelsEs[r.id] : undefined;
    return {
      ...r,
      business: es?.business ?? r.business,
      what: es?.what ?? r.what,
      source: es?.source ?? r.source,
      video: `/reels/${file}.mp4`,
      poster: `/reels/${file}.jpg`,
    };
  });
}

export function getPricing(lang: Lang): Pricing {
  return lang === "es" ? pricingEs : pricing;
}

/** Add-ons in this language. `showPrices` always comes from pricing.ts, so it's switched on in one place. */
export function getAddOns(lang: Lang): AddOns {
  return { showPrices: addOns.showPrices, items: lang === "es" ? addOnItemsEs : addOns.items };
}

/** What the command menu needs to list the live client sites. */
export type LiveSiteLink = Pick<CaseStudy, "id" | "client" | "category"> & { liveUrl: string };

export function getLiveSiteLinks(lang: Lang): LiveSiteLink[] {
  return getWork(lang)
    .filter((w): w is CaseStudy & { liveUrl: string } => w.status === "live" && Boolean(w.liveUrl))
    .map(({ id, client, category, liveUrl }) => ({ id, client, category, liveUrl }));
}
