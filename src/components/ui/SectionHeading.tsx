"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  description,
  align = "left",
  className,
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: align === "center" ? "center" : "left" }}
        className={cn("mb-4 block h-[3px] w-10 rounded-full bg-gradient-to-r from-gold to-gold-light", align === "center" && "mx-auto")}
      />
      <h2 className="font-display text-balance text-4xl font-semibold text-cream sm:text-5xl">{title}</h2>
      {description && <p className="mt-4 max-w-xl text-balance leading-relaxed text-muted">{description}</p>}
    </div>
  );
}
