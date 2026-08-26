"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * A large radial glow that follows the cursor within its nearest positioned
 * ancestor. Drifts to a slow idle position when the pointer hasn't moved
 * yet, so the section never looks static or dead on load.
 */
export function CursorGlow({
  className,
  color = "rgba(217, 164, 65, 0.18)",
}: {
  className?: string;
  color?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(50);
  const y = useMotionValue(35);
  const springX = useSpring(x, { stiffness: 60, damping: 20, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 60, damping: 20, mass: 0.6 });

  const background = useMotionTemplate`radial-gradient(680px circle at ${springX}% ${springY}%, ${color}, transparent 60%)`;

  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = containerRef.current?.parentElement;
    if (!el) return;

    let idle: ReturnType<typeof setInterval> | null = null;
    let userMoved = false;

    function handleMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      userMoved = true;
      if (idle) {
        clearInterval(idle);
        idle = null;
      }
      x.set(((e.clientX - rect.left) / rect.width) * 100);
      y.set(((e.clientY - rect.top) / rect.height) * 100);
    }

    // Gentle idle drift until the visitor actually moves the mouse here.
    let t = 0;
    idle = setInterval(() => {
      if (userMoved) return;
      t += 0.01;
      x.set(50 + Math.sin(t) * 18);
      y.set(35 + Math.cos(t * 0.8) * 12);
    }, 50);

    el.addEventListener("mousemove", handleMove);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      if (idle) clearInterval(idle);
    };
  }, [prefersReducedMotion, x, y]);

  return (
    <div ref={containerRef} className="contents">
      <motion.div
        aria-hidden
        className={cn("pointer-events-none absolute inset-0", className)}
        style={prefersReducedMotion ? undefined : { background }}
      />
    </div>
  );
}
