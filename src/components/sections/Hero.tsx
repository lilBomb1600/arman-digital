"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { studio } from "@/data/business";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-20 sm:pb-28 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          Now booking new projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl text-balance font-display text-5xl font-semibold leading-[1.05] text-cream sm:text-6xl lg:text-7xl"
        >
          Websites & cinematic media for businesses that mean business.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted"
        >
          {studio.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-gold/20 transition-all hover:-translate-y-0.5"
          >
            See the Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={studio.phoneHref}
            className="flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-gold hover:text-gold"
          >
            <Phone className="h-4 w-4" />
            {studio.phone}
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
