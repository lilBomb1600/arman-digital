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
import { work, type CaseStudy } from "@/data/work";
import { workEs } from "@/data/work.es";

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
      summary: es?.summary ?? w.summary,
      deliverables: es?.deliverables ?? w.deliverables,
    };
  });
}

/** What the command menu needs to list the live client sites. */
export type LiveSiteLink = Pick<CaseStudy, "id" | "client" | "category"> & { liveUrl: string };

export function getLiveSiteLinks(lang: Lang): LiveSiteLink[] {
  return getWork(lang)
    .filter((w): w is CaseStudy & { liveUrl: string } => w.status === "live" && Boolean(w.liveUrl))
    .map(({ id, client, category, liveUrl }) => ({ id, client, category, liveUrl }));
}
