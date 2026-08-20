"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { work } from "@/data/work";
import { videoWork } from "@/data/videoWork";

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.3,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  );
}

export function Stats() {
  const liveSites = work.filter((w) => w.status === "live").length;
  const videos = videoWork.length;

  return (
    <section className="relative overflow-hidden border-t border-border/60 py-14">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-gold/[0.04] via-transparent to-gold/[0.04]" />
      <Container className="grid grid-cols-3 gap-8">
        <div className="text-center sm:text-left">
          <p className="text-glow font-display text-4xl font-bold text-gold sm:text-5xl">
            <CountUp to={liveSites} />
          </p>
          <p className="mt-2 text-xs text-muted sm:text-sm">Live Sites Shipped</p>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-glow font-display text-4xl font-bold text-gold sm:text-5xl">
            <CountUp to={videos} />
          </p>
          <p className="mt-2 text-xs text-muted sm:text-sm">Cinematic Videos Produced</p>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-glow font-display text-4xl font-bold text-gold sm:text-5xl">100%</p>
          <p className="mt-2 text-xs text-muted sm:text-sm">Custom-Built, No Templates</p>
        </div>
      </Container>
    </section>
  );
}
