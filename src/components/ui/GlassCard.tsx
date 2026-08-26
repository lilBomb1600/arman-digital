"use client";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Real glass material: backdrop-blur + saturate so whatever glow or color
 * sits behind actually bleeds through, a bright inner top-edge to catch
 * light, and a cursor-tracked highlight + optional 3D tilt. Not a flat
 * gradient div pretending to be glass.
 */
export function GlassCard({
  children,
  className,
  tilt = false,
  hoverLift = true,
}: {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
  hoverLift?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const mouseXPercent = useMotionValue(50);
  const mouseYPercent = useMotionValue(50);
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, { stiffness: 220, damping: 22 });
  const rotateY = useSpring(rawRotateY, { stiffness: 220, damping: 22 });

  const glowBackground = useMotionTemplate`radial-gradient(320px circle at ${mouseXPercent}% ${mouseYPercent}%, rgba(255,255,255,0.16), transparent 70%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    mouseXPercent.set(px * 100);
    mouseYPercent.set(py * 100);
    if (tilt) {
      rawRotateY.set((px - 0.5) * 8);
      rawRotateX.set((0.5 - py) * 8);
    }
  }

  function handleMouseLeave() {
    if (tilt) {
      rawRotateX.set(0);
      rawRotateY.set(0);
    }
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        tilt && !prefersReducedMotion
          ? { rotateX, rotateY, transformPerspective: 1200 }
          : undefined
      }
      whileHover={hoverLift ? { y: -6 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className={cn(
        "glass-panel group relative overflow-hidden rounded-[inherit]",
        className
      )}
    >
      {/* CSS :hover (not JS state) so the glow can't get stuck showing after
          a scroll moves the card out from under a stationary cursor. */}
      {!prefersReducedMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glowBackground }}
        />
      )}
      {children}
    </motion.div>
  );
}
