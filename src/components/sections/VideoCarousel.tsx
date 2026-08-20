"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Clapperboard, type LucideIcon } from "lucide-react";
import type { VideoCaseStudy } from "@/data/videoWork";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export function VideoCarousel({
  items,
  label,
  icon: Icon,
}: {
  items: VideoCaseStudy[];
  label: string;
  icon: LucideIcon;
}) {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  if (items.length === 0) return null;
  const project = items[index];

  const go = (dir: number) => {
    setIndex(([i]) => [(i + dir + items.length) % items.length, dir]);
  };

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h3 className="flex items-center gap-2.5 font-display text-xl font-semibold text-cream sm:text-2xl">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-gold/25 to-gold/5 text-gold shadow-[0_0_20px_-4px_rgba(217,164,65,0.5)]">
            <Icon className="h-4.5 w-4.5" />
          </span>
          {label}
          <span className="text-sm font-normal text-muted">({items.length})</span>
        </h3>

        {items.length > 1 && (
          <div className="flex items-center gap-3">
            <span className="text-sm tabular-nums text-muted">
              {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
            <button
              aria-label={`Previous ${label.toLowerCase()} video`}
              onClick={() => go(-1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-cream transition-all hover:-translate-x-0.5 hover:border-gold hover:text-gold hover:shadow-[0_0_16px_-2px_rgba(217,164,65,0.6)]"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              aria-label={`Next ${label.toLowerCase()} video`}
              onClick={() => go(1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-cream transition-all hover:translate-x-0.5 hover:border-gold hover:text-gold hover:shadow-[0_0_16px_-2px_rgba(217,164,65,0.6)]"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface transition-all duration-300 hover:border-gold/40 hover:shadow-[0_30px_70px_-20px_rgba(217,164,65,0.3)]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={project.id}
            custom={direction}
            initial={{ opacity: 0, x: direction >= 0 ? 48 : -48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction >= 0 ? -48 : 48 }}
            transition={{ duration: 0.45, ease: EASE }}
            drag={items.length > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) go(1);
              else if (info.offset.x > 80) go(-1);
            }}
            className="grid lg:grid-cols-2"
          >
            <div className="relative aspect-video bg-ink lg:aspect-auto">
              <video
                className="h-full w-full object-cover"
                src={project.videoSrc}
                poster={project.poster}
                controls
                playsInline
                preload="metadata"
              />
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-12">
              <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                <Clapperboard className="h-3.5 w-3.5" />
                {project.category}
              </span>
              <h4 className="font-display text-2xl font-semibold text-cream sm:text-3xl">{project.title}</h4>
              <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
              <ul className="mt-6 grid grid-cols-1 gap-2 text-sm text-cream/80 sm:grid-cols-2">
                {project.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {items.length > 1 && (
        <div className="mt-5 flex justify-center gap-2">
          {items.map((item, i) => (
            <button
              key={item.id}
              aria-label={`Go to ${item.title}`}
              onClick={() => setIndex([i, i > index ? 1 : -1])}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === index ? "w-6 bg-gold" : "w-1.5 bg-border hover:bg-gold/50"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
