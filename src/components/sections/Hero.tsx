"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { studio } from "@/data/business";

const EASE = [0.16, 1, 0.3, 1] as const;

const HEADLINE = [
  { text: "Websites", gold: false },
  { text: "&", gold: false },
  { text: "cinematic", gold: true },
  { text: "media", gold: true },
  { text: "for", gold: false },
  { text: "businesses", gold: false },
  { text: "that", gold: false },
  { text: "mean", gold: false },
  { text: "business.", gold: false },
];

const headlineContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.1 } },
};

const headlineWord: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-20 sm:pb-28 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_30%_0%,rgba(217,164,65,0.16),transparent_65%)]" />
        <motion.div
          animate={{ x: [0, 30, -10, 0], y: [0, -20, 15, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-gold/20 blur-3xl motion-reduce:animate-none"
        />
        <motion.div
          animate={{ x: [0, -25, 15, 0], y: [0, 20, -15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-gold-light/10 blur-3xl motion-reduce:animate-none"
        />
        <motion.div
          animate={{ x: [0, 20, -15, 0], y: [0, -15, 10, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-gold-dark/20 blur-3xl motion-reduce:animate-none"
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-muted"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
          Now booking new projects
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={headlineContainer}
          className="max-w-3xl text-balance font-display text-5xl font-bold leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-[5.25rem]"
        >
          {HEADLINE.map((word, i) => (
            <motion.span
              key={i}
              variants={headlineWord}
              className={
                word.gold
                  ? "text-glow inline-block bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent"
                  : "inline-block"
              }
            >
              {word.text}&nbsp;
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted"
        >
          {studio.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="shine-btn group flex items-center gap-2 rounded-full bg-gradient-to-b from-gold-light to-gold px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_8px_30px_-6px_rgba(217,164,65,0.55)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_-6px_rgba(217,164,65,0.75)]"
          >
            See the Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={studio.phoneHref}
            className="flex items-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-3.5 text-sm font-semibold text-cream backdrop-blur transition-all hover:-translate-y-1 hover:border-gold hover:text-gold"
          >
            <Phone className="h-4 w-4" />
            {studio.phone}
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
