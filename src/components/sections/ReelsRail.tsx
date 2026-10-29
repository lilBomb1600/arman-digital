"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Play, Volume2, VolumeX } from "lucide-react";
import type { LocalizedReel } from "@/i18n/content";
import type { Dictionary } from "@/i18n/dictionaries";
import { fill } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

/**
 * A sideways row of phone-shaped Reel players. Rules it keeps, because the portfolio once crashed iPhones:
 * - Videos are preload="none"; the poster is only attached once the row is about a screen away.
 * - Exactly one Reel plays at a time (the one in view, or the one you hover or tap), muted until you tap it.
 *   Everything else is paused, and nothing plays while the row is off screen.
 * - The row moves only by swipe, mouse drag, trackpad or the arrow buttons. Vertical page scroll never drives it.
 * - With reduced motion on, nothing autoplays: a tap plays that Reel with sound, another tap pauses it.
 */
export function ReelsRail({ reels, t, aside }: { reels: LocalizedReel[]; t: Dictionary["reels"]; aside?: ReactNode }) {
  const rail = useRef<HTMLDivElement>(null);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const bars = useRef<(HTMLSpanElement | null)[]>([]);
  const ratios = useRef<number[]>([]);
  const hoverTimer = useRef<number | undefined>(undefined);
  const drag = useRef<{ x: number; left: number; id: number; moved: boolean } | null>(null);
  const justDragged = useRef(false);
  // A tapped card that's still sliding into view. Until it gets there it keeps its turn, even though it's
  // only half showing.
  const settling = useRef<number | null>(null);

  const [near, setNear] = useState(false);
  const [onScreen, setOnScreen] = useState(false);
  const [firstInView, setFirstInView] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [picked, setPicked] = useState<number | null>(null);
  const [soundOn, setSoundOn] = useState(false);
  const [edges, setEdges] = useState({ start: true, end: false });
  const reduce = usePrefersReducedMotion();

  // A tap beats a hover: once you pick a Reel, moving the mouse across the others (or a card sliding under a
  // still mouse) doesn't switch it. Hover only previews while nothing is picked.
  const active = reduce ? picked : (picked ?? hovered ?? firstInView);

  // Is the row near the screen (posters may load) and on it (one Reel may play)?
  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    const nearIO = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setNear(true);
          nearIO.disconnect();
        }
      },
      { rootMargin: "900px 0px" }
    );
    const seenIO = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting), { threshold: 0.4 });
    nearIO.observe(el);
    seenIO.observe(el);
    return () => {
      nearIO.disconnect();
      seenIO.disconnect();
    };
  }, []);

  // Which cards are actually showing inside the row. The first one mostly in view is the one that plays.
  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) ratios.current[Number((e.target as HTMLElement).dataset.reel)] = e.intersectionRatio;
        const first = ratios.current.findIndex((r) => r >= 0.6);
        if (first !== -1) setFirstInView(first);
        const s = settling.current;
        if (s !== null && (ratios.current[s] ?? 0) >= 0.9) settling.current = null;
        // A picked Reel gives up its turn once you scroll it mostly out of view (but not while it's sliding in).
        setPicked((p) => (p !== null && p !== settling.current && (ratios.current[p] ?? 0) < 0.5 ? null : p));
      },
      { root: el, threshold: [0, 0.5, 0.6, 0.9, 1] }
    );
    el.querySelectorAll<HTMLElement>("[data-reel]").forEach((card) => io.observe(card));
    return () => io.disconnect();
  }, []);

  // Arrow buttons know when the row is at either end (also when the window is resized).
  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    const update = () =>
      setEdges({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    el.addEventListener("scroll", update, { passive: true });
    return () => {
      ro.disconnect();
      el.removeEventListener("scroll", update);
    };
  }, []);

  // Play the active Reel, pause every other one.
  useEffect(() => {
    videos.current.forEach((v, i) => {
      if (!v) return;
      if (onScreen && i === active) {
        v.muted = !soundOn;
        v.play().catch(() => {
          // The browser refused sound without a fresh tap: fall back to muted.
          if (!v.muted) {
            v.muted = true;
            setSoundOn(false);
            v.play().catch(() => {});
          }
        });
      } else if (!v.paused) {
        v.pause();
      }
    });
  }, [active, onScreen, soundOn]);

  useEffect(() => () => window.clearTimeout(hoverTimer.current), []);

  function tap(i: number) {
    if (justDragged.current) return;
    const v = videos.current[i];
    // Unmute and play inside the tap itself; iPhones only allow sound from a direct user gesture.
    const playWithSound = () => {
      if (!v) return;
      v.muted = false;
      v.play().catch(() => {});
    };
    if (reduce) {
      if (picked === i) {
        setPicked(null);
        return;
      }
      playWithSound();
      setSoundOn(true);
      setPicked(i);
      return;
    }
    if (i === active) {
      const next = !soundOn;
      if (next) playWithSound();
      else if (v) v.muted = true;
      setSoundOn(next);
      // If it was only playing because the mouse was over it, the tap makes it stick when the mouse leaves.
      setPicked(i);
    } else {
      playWithSound();
      setSoundOn(true);
      setPicked(i);
      // A half-showing card slides fully into view, so it stays the one playing.
      if ((ratios.current[i] ?? 0) < 0.95) {
        settling.current = i;
        window.setTimeout(() => {
          if (settling.current === i) settling.current = null;
        }, 1200);
        rail.current
          ?.querySelector<HTMLElement>(`[data-reel="${i}"]`)
          ?.scrollIntoView({ inline: "start", block: "nearest", behavior: reduce ? "auto" : "smooth" });
      }
    }
  }

  function hoverIn(e: ReactPointerEvent, i: number) {
    if (e.pointerType !== "mouse" || reduce) return;
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setHovered(i), 180);
  }

  function hoverOut(e: ReactPointerEvent) {
    if (e.pointerType !== "mouse") return;
    window.clearTimeout(hoverTimer.current);
    setHovered(null);
  }

  function railMetrics(el: HTMLDivElement) {
    const card = el.querySelector<HTMLElement>("[data-reel]");
    const style = getComputedStyle(el);
    const step = (card?.offsetWidth ?? 260) + (parseFloat(style.columnGap) || 16);
    return { step, pad: parseFloat(style.paddingLeft) || 0 };
  }

  function page(dir: 1 | -1) {
    const el = rail.current;
    if (!el) return;
    const { step, pad } = railMetrics(el);
    const perView = Math.max(1, Math.floor((el.clientWidth - pad) / step));
    el.scrollBy({ left: dir * step * perView, behavior: reduce ? "auto" : "smooth" });
  }

  // Mouse drag to scroll (touch and trackpads already scroll natively).
  function dragStart(e: ReactPointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse" || e.button !== 0 || !rail.current) return;
    drag.current = { x: e.clientX, left: rail.current.scrollLeft, id: e.pointerId, moved: false };
    justDragged.current = false;
  }

  function dragMove(e: ReactPointerEvent<HTMLDivElement>) {
    const d = drag.current;
    const el = rail.current;
    if (!d || !el) return;
    const dx = e.clientX - d.x;
    if (!d.moved && Math.abs(dx) > 6) {
      d.moved = true;
      el.setPointerCapture(d.id);
      el.style.scrollSnapType = "none";
      el.style.cursor = "grabbing";
    }
    if (d.moved) el.scrollLeft = d.left - dx;
  }

  function dragEnd() {
    const d = drag.current;
    const el = rail.current;
    drag.current = null;
    if (!d?.moved || !el) return;
    justDragged.current = true;
    window.setTimeout(() => (justDragged.current = false), 0);
    el.style.cursor = "";
    const { step } = railMetrics(el);
    const target = Math.round(el.scrollLeft / step) * step;
    el.scrollTo({ left: target, behavior: reduce ? "auto" : "smooth" });
    window.setTimeout(() => (el.style.scrollSnapType = ""), 400);
  }

  return (
    <div>
      <div className="flex items-end justify-between gap-6 px-6 lg:px-[max(2rem,calc((100%_-_72rem)/2_+_2rem))]">
        <div className="min-w-0">{aside}</div>
        <div className="flex shrink-0 gap-2">
        <button
          type="button"
          aria-label={t.prev}
          aria-controls="reels-rail"
          disabled={edges.start}
          onClick={() => page(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-cream transition-[color,border-color,opacity,box-shadow] hover:border-gold hover:text-gold hover:shadow-[0_0_16px_-2px_rgba(217,164,65,0.6)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label={t.next}
          aria-controls="reels-rail"
          disabled={edges.end}
          onClick={() => page(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-cream transition-[color,border-color,opacity,box-shadow] hover:border-gold hover:text-gold hover:shadow-[0_0_16px_-2px_rgba(217,164,65,0.6)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
        </div>
      </div>

      <div
        id="reels-rail"
        ref={rail}
        role="region"
        aria-label={t.rail}
        onPointerDown={dragStart}
        onPointerMove={dragMove}
        onPointerUp={dragEnd}
        onPointerCancel={dragEnd}
        className={cn(
          "no-scrollbar mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2 pt-1 sm:gap-5",
          // Lines the first card up with the page content, then lets the row run off the right edge.
          "px-6 [scroll-padding-inline:1.5rem] lg:px-[max(2rem,calc((100%_-_72rem)/2_+_2rem))] lg:[scroll-padding-inline:max(2rem,calc((100%_-_72rem)/2_+_2rem))]"
        )}
      >
        {reels.map((reel, i) => {
          const isActive = i === active;
          const label = `${reel.business}: ${reel.what}`;
          const playingWithSound = isActive && soundOn;
          const buttonLabel = reduce && isActive ? fill(t.pause, { label }) : playingWithSound ? fill(t.mute, { label }) : fill(t.playWithSound, { label });
          return (
            <figure
              key={reel.id}
              data-reel={i}
              className="w-[70vw] max-w-[290px] shrink-0 snap-start sm:w-[250px] lg:w-[256px]"
              onPointerEnter={(e) => hoverIn(e, i)}
              onPointerLeave={hoverOut}
            >
              <button
                type="button"
                onClick={() => tap(i)}
                aria-label={buttonLabel}
                className={cn(
                  "relative block aspect-[9/16] w-full overflow-hidden rounded-[1.75rem] bg-surface-light p-0 shadow-[0_28px_50px_-24px_rgba(0,0,0,0.85)] ring-1 transition-[box-shadow,transform] duration-300 ease-out",
                  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold",
                  isActive ? "ring-gold/50 shadow-[0_30px_60px_-24px_rgba(217,164,65,0.35)]" : "ring-white/10 hover:ring-white/25"
                )}
              >
                <video
                  ref={(el) => {
                    videos.current[i] = el;
                  }}
                  src={reel.video}
                  poster={near ? reel.poster : undefined}
                  preload="none"
                  muted
                  loop
                  playsInline
                  aria-hidden
                  tabIndex={-1}
                  onTimeUpdate={(e) => {
                    const v = e.currentTarget;
                    const bar = bars.current[i];
                    if (bar && v.duration) bar.style.transform = `scaleX(${v.currentTime / v.duration})`;
                  }}
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                />
                {/* Story-style progress line, like the top of a Reel on a phone. */}
                <span className="absolute inset-x-3 top-3 h-[3px] overflow-hidden rounded-full bg-white/25">
                  <span
                    ref={(el) => {
                      bars.current[i] = el;
                    }}
                    className="block h-full origin-left scale-x-0 rounded-full bg-cream transition-transform duration-300 ease-linear"
                  />
                </span>
                {!isActive && (
                  <span className="absolute inset-0 flex items-center justify-center bg-ink/15">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink/75 ring-1 ring-white/20">
                      <Play className="ml-0.5 h-5 w-5 fill-cream text-cream" />
                    </span>
                  </span>
                )}
                <span
                  className={cn(
                    "absolute bottom-3 right-3 inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-[11px] font-semibold ring-1 transition-colors",
                    playingWithSound ? "bg-gold text-ink ring-gold" : "bg-ink/80 text-cream ring-white/15"
                  )}
                >
                  {playingWithSound ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5" />}
                  {playingWithSound ? t.soundOn : t.tapForSound}
                </span>
              </button>
              <figcaption className="mt-4 px-1">
                <p className="font-display text-[15px] font-semibold leading-snug text-cream">{reel.business}</p>
                <p className="mt-1 text-sm leading-snug text-muted">{reel.what}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="rounded-full border border-white/12 px-2.5 py-1 text-[11px] font-medium text-cream/80">{reel.source}</span>
                  <span className="rounded-full bg-gold/12 px-2.5 py-1 text-[11px] font-semibold text-gold">{t.price}</span>
                </div>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}
