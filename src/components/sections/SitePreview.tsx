"use client";

import { useEffect, useRef, useState } from "react";

// Only one live site may run inside the page at a time.
let closeCurrent: (() => void) | null = null;

/**
 * A client site's preview: a static screenshot by default, so the page never holds a dozen live websites in memory
 * at once (that crashed phones on fast scrolls and pinch-zooms). On a desktop with a mouse, resting on the card for
 * a moment swaps in the real site, live, and leaving it unloads it again.
 */
export function SitePreview({ id, url, title }: { id: string; url?: string; title: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = box.current?.closest<HTMLElement>("[data-site-card]") ?? box.current;
    if (!el || !url) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let open: number | undefined;
    let shut: number | undefined;
    const close = () => {
      setLive(false);
      setLoaded(false);
    };
    const enter = () => {
      window.clearTimeout(shut);
      open = window.setTimeout(() => {
        if (closeCurrent && closeCurrent !== close) closeCurrent();
        closeCurrent = close;
        setLive(true);
      }, 450);
    };
    const leave = () => {
      window.clearTimeout(open);
      shut = window.setTimeout(() => {
        if (closeCurrent === close) closeCurrent = null;
        close();
      }, 700);
    };
    el.addEventListener("pointerenter", enter);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointerenter", enter);
      el.removeEventListener("pointerleave", leave);
      window.clearTimeout(open);
      window.clearTimeout(shut);
      if (closeCurrent === close) closeCurrent = null;
    };
  }, [url]);

  return (
    <div ref={box} className="absolute inset-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/work/${id}.jpg`}
        srcSet={`/images/work/${id}-640.jpg 640w, /images/work/${id}.jpg 1200w`}
        sizes="(min-width: 1024px) 45vw, 92vw"
        alt={`${title} website, top of the home page`}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-left-top"
      />
      {live && url && (
        <iframe
          src={url}
          title={`${title}, live`}
          onLoad={() => setLoaded(true)}
          className={`pointer-events-none absolute left-0 top-0 h-[1000px] w-[1440px] origin-top-left scale-[0.32] border-0 transition-opacity duration-500 sm:scale-[0.4] lg:scale-[0.42] ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </div>
  );
}
