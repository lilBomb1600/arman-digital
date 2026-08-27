"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const cards = [
  {
    src: "/images/hero-preview/chaiwala.jpg",
    domain: "chaiwala-shop.vercel.app",
    className: "left-0 top-2 w-[230px] rotate-[-7deg] sm:w-[250px]",
    float: { y: [0, -10, 0], duration: 7 },
    delay: 0.9,
  },
  {
    src: "/images/hero-preview/trlboyz.jpg",
    domain: "trl-boyz.vercel.app",
    className: "right-0 top-0 z-20 w-[250px] rotate-[6deg] sm:w-[270px]",
    float: { y: [0, 12, 0], duration: 8 },
    delay: 1.05,
  },
  {
    src: "/images/hero-preview/gmlandscape.jpg",
    domain: "gm-landscape.vercel.app",
    className: "left-10 bottom-6 w-[230px] rotate-[4deg] sm:w-[250px]",
    float: { y: [0, -8, 0], duration: 6.5 },
    delay: 1.2,
  },
  {
    src: "/images/hero-preview/marieli.jpg",
    domain: "mari-eli-cleaning.vercel.app",
    className: "right-6 bottom-0 z-10 w-[210px] rotate-[-5deg] sm:w-[230px]",
    float: { y: [0, 9, 0], duration: 7.5 },
    delay: 1.35,
  },
];

/**
 * A scattered pile of real live-site previews, floating gently. Static JPGs
 * rather than live iframes — this renders above the fold, and a handful of
 * eagerly-loaded cross-origin Next.js apps would tank first paint. Work.tsx
 * below still uses real lazy-loaded iframes for the actual portfolio grid.
 */
export function HeroPreviewStack() {
  return (
    <div className="relative hidden h-[440px] lg:block" aria-hidden="true">
      {cards.map((card) => (
        <motion.div
          key={card.domain}
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: card.delay, ease: EASE }}
          className={cn("absolute", card.className)}
        >
          <motion.div
            animate={{ y: card.float.y }}
            transition={{ duration: card.float.duration, repeat: Infinity, ease: "easeInOut" }}
            className="glass-panel overflow-hidden rounded-xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] motion-reduce:animate-none"
          >
            <div className="flex items-center gap-1.5 border-b border-white/5 bg-ink/90 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-red-400/60" />
              <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
              <span className="h-2 w-2 rounded-full bg-green-400/60" />
              <span className="ml-1.5 truncate rounded-full bg-white/5 px-2 py-0.5 text-[9px] text-cream/50">
                {card.domain}
              </span>
            </div>
            <Image
              src={card.src}
              alt=""
              width={640}
              height={337}
              className="h-auto w-full"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
