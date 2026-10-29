"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Languages } from "lucide-react";
import type { CaseStudy, WorkGroup } from "@/data/work";
import type { Dictionary } from "@/i18n/dictionaries";
import { fill } from "@/i18n/config";
import { cn } from "@/lib/utils";

export type GalleryItem = Pick<
  CaseStudy,
  "id" | "client" | "category" | "group" | "short" | "liveUrl" | "status" | "bilingual" | "featured" | "deliverables"
>;

type Filter = "all" | WorkGroup;

const EASE = [0.16, 1, 0.3, 1] as const;

/*
 * "All" starts short so the Reels and prices aren't 30 cards away on a phone: the 3 featured sites plus a few
 * more (PREVIEW_PHONE on phones, PREVIEW on wider screens), then a "Show all" button. A picked group always
 * shows every site in it.
 */
const PREVIEW = 9;
const PREVIEW_PHONE = 6;

/*
 * The selected group lives in the URL (?type=auto), so Arman can text a prospect a link that opens straight on
 * their kind of business. The URL is the only source of truth: chips write it with replaceState, this store
 * reads it. On the server (and during hydration) there's no URL to read, so the page renders "All" first.
 */
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("popstate", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("popstate", onChange);
  };
}

const readType = () => new URLSearchParams(window.location.search).get("type");
const noType = () => null;

function writeType(type: Filter) {
  const url = new URL(window.location.href);
  if (type === "all") url.searchParams.delete("type");
  else url.searchParams.set("type", type);
  url.hash = "work";
  window.history.replaceState(null, "", url);
  listeners.forEach((l) => l());
}

export function WorkGallery({
  items,
  groups,
  t,
  showBilingual,
}: {
  items: GalleryItem[];
  groups: { id: WorkGroup; label: string }[];
  t: Dictionary["work"];
  /** Only on /es: a badge on the client sites that have their own Spanish version. */
  showBilingual: boolean;
}) {
  const type = useSyncExternalStore(subscribe, readType, noType);
  const active: Filter = groups.some((g) => g.id === type) ? (type as WorkGroup) : "all";

  // A shared link like /?type=auto (no #work) should still land on the gallery, not the top of the page.
  useEffect(() => {
    if (readType() && !window.location.hash) document.getElementById("work")?.scrollIntoView({ behavior: "instant" });
  }, []);

  const chips = useMemo(
    () => [
      { id: "all" as Filter, label: t.all, count: items.length },
      ...groups.map((g) => ({ id: g.id as Filter, label: g.label, count: items.filter((i) => i.group === g.id).length })),
    ],
    [items, groups, t.all]
  );

  // "All" leads with the featured sites; every view keeps the data order otherwise, with coming-soon sites last.
  const shown = useMemo(() => {
    const list = active === "all" ? items : items.filter((i) => i.group === active);
    const rank = (i: GalleryItem) => (active === "all" && i.featured ? i.featured - 10 : 0) + (i.status === "coming-soon" ? 100 : 0);
    return [...list].sort((a, b) => rank(a) - rank(b));
  }, [items, active]);

  const activeLabel = chips.find((c) => c.id === active)?.label ?? t.all;

  const [expanded, setExpanded] = useState(false);
  const list = useRef<HTMLUListElement>(null);
  const collapsed = active === "all" && !expanded && shown.length > PREVIEW;
  const visible = collapsed ? shown.slice(0, PREVIEW) : shown;

  function showAll() {
    // Keyboard and screen-reader users land on the first card that just appeared, not back at the top.
    const first = window.matchMedia("(min-width: 768px)").matches ? PREVIEW : PREVIEW_PHONE;
    setExpanded(true);
    requestAnimationFrame(() => list.current?.querySelectorAll<HTMLElement>(":scope > li")[first]?.querySelector("a")?.focus({ preventScroll: true }));
  }

  return (
    <MotionConfig reducedMotion="user">
      <div role="group" aria-label={t.filterLabel} className="mt-10 flex flex-wrap gap-2">
        {chips.map((chip) => {
          const on = chip.id === active;
          return (
            <button
              key={chip.id}
              type="button"
              aria-pressed={on}
              onClick={() => writeType(chip.id)}
              className={cn(
                "relative inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium transition-colors duration-200",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
                on ? "text-ink" : "border border-border bg-surface/70 text-cream/85 hover:border-gold/40 hover:text-cream"
              )}
            >
              {on && (
                <motion.span
                  layoutId="work-chip"
                  transition={{ type: "spring", stiffness: 420, damping: 36 }}
                  className="absolute inset-0 rounded-full bg-gradient-to-b from-gold-light to-gold shadow-[0_6px_20px_-8px_rgba(217,164,65,0.7)]"
                />
              )}
              <span className="relative">{chip.label}</span>
              <span className={cn("relative text-xs tabular-nums", on ? "text-ink/70" : "text-muted")}>{chip.count}</span>
            </button>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        {fill(t.showing, { count: shown.length, group: activeLabel })}
      </p>

      <ul id="work-grid" ref={list} className="relative mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((item, index) => {
            const big = active === "all" && item.featured === 1;
            return (
              <motion.li
                // The big featured card is its own element, so it fades out instead of squashing when a filter is picked.
                key={big ? `${item.id}-big` : item.id}
                layout="position"
                initial={{ opacity: 0, y: 18, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.18, ease: "easeOut" } }}
                transition={{ duration: 0.45, ease: EASE, layout: { type: "spring", stiffness: 320, damping: 34 } }}
                className={cn(big && "md:col-span-2 lg:row-span-2", collapsed && index >= PREVIEW_PHONE && "max-md:hidden")}
              >
                <SiteCard item={item} big={big} t={t} showBilingual={showBilingual} />
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>

      {collapsed && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={showAll}
            aria-controls="work-grid"
            className="group inline-flex h-12 items-center gap-2 rounded-full border border-gold/40 px-6 text-sm font-semibold text-gold transition-[background-color,border-color] duration-200 hover:border-gold hover:bg-gold/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            {fill(t.showAll, { count: shown.length })}
            <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
          </button>
        </div>
      )}
    </MotionConfig>
  );
}

function SiteCard({ item, big, t, showBilingual }: { item: GalleryItem; big: boolean; t: Dictionary["work"]; showBilingual: boolean }) {
  const live = item.status === "live" && Boolean(item.liveUrl);
  const domain = item.liveUrl ? item.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "") : "";

  return (
    <article
      className={cn(
        "group/card relative flex h-full flex-col overflow-hidden rounded-[1.75rem] transition-[border-color,box-shadow,transform] duration-300 ease-out",
        live
          ? "tile border border-white/[0.07] hover:-translate-y-1 hover:border-gold/35 hover:shadow-[0_28px_60px_-28px_rgba(217,164,65,0.5)]"
          : "border border-dashed border-border"
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-ink",
          // The big card keeps the screenshot's own shape until it spans two rows on desktop, where it fills the
          // height instead and crops from the right (the site's name and headline sit on the left).
          big ? "aspect-[1200/833] lg:aspect-auto lg:min-h-[22rem] lg:flex-1" : "aspect-[1200/833]"
        )}
      >
        <div className="absolute inset-x-0 top-0 z-10 flex h-7 items-center gap-1.5 border-b border-white/5 bg-ink px-3">
          <span className="h-2 w-2 rounded-full bg-red-400/60" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
          <span className="h-2 w-2 rounded-full bg-green-400/60" />
          <span className="ml-1.5 truncate rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] text-cream/55">{domain}</span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element -- pre-sized screenshots with their own srcset */}
        <img
          src={`/images/work/${item.id}.jpg`}
          srcSet={`/images/work/${item.id}-640.jpg 640w, /images/work/${item.id}.jpg 1200w`}
          sizes={big ? "(min-width: 1024px) 720px, 92vw" : "(min-width: 1024px) 340px, (min-width: 768px) 45vw, 92vw"}
          alt={fill(t.previewAlt, { title: item.client })}
          loading="lazy"
          decoding="async"
          className={cn(
            "absolute inset-x-0 bottom-0 top-7 h-[calc(100%-1.75rem)] w-full object-cover transition-transform duration-700 ease-out",
            "object-left-top",
            live ? "group-hover/card:scale-[1.035]" : "opacity-35 grayscale"
          )}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink/80 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center gap-1.5">
          <span className="rounded-full bg-ink/85 px-2.5 py-1 text-[11px] font-semibold text-cream/90 ring-1 ring-white/10">
            {item.category}
          </span>
          {showBilingual && item.bilingual && (
            <span className="inline-flex items-center gap-1 rounded-full bg-ink/85 px-2.5 py-1 text-[11px] font-semibold text-gold ring-1 ring-gold/25">
              <Languages className="h-3 w-3" />
              {t.bilingual}
            </span>
          )}
        </div>
      </div>

      <div className={cn("flex flex-col", big ? "p-6 sm:p-8 lg:flex-none" : "flex-1 p-5 sm:p-6")}>
        <h3 className={cn("font-display font-semibold text-cream", big ? "text-2xl sm:text-3xl" : "text-xl")}>{item.client}</h3>
        <p className={cn("mt-2 leading-relaxed text-muted", big ? "max-w-xl" : "text-sm")}>{item.short}</p>
        {big && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {item.deliverables.map((d) => (
              <li key={d} className="rounded-full border border-white/10 px-3 py-1 text-xs text-cream/80">
                {d}
              </li>
            ))}
          </ul>
        )}
        <div className={cn("flex items-center pt-5", !big && "mt-auto")}>
          {live ? (
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={fill(t.openLabel, { client: item.client })}
              className={cn(
                "inline-flex items-center gap-1.5 text-sm font-semibold text-gold outline-none",
                // The whole card is the link's hit area; the focus ring is drawn on the card.
                "after:absolute after:inset-0 after:z-20 after:rounded-[1.75rem] after:content-['']",
                "focus-visible:after:ring-2 focus-visible:after:ring-gold focus-visible:after:ring-offset-2 focus-visible:after:ring-offset-ink"
              )}
            >
              {t.open}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5" />
            </a>
          ) : (
            <span className="rounded-full border border-dashed border-border px-3 py-1 text-xs font-semibold text-muted">{t.comingSoon}</span>
          )}
        </div>
      </div>
    </article>
  );
}
