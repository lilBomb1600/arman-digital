"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { cn } from "@/lib/utils";
import { studio } from "@/data/business";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-ink/85 backdrop-blur transition-shadow",
        scrolled ? "border-border shadow-lg shadow-black/20" : "border-border/60"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="font-display text-lg font-bold tracking-tight text-cream">
          Arman <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Digital</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "relative px-3 py-2 text-sm font-medium transition-colors",
                activeHref === l.href ? "text-cream" : "text-muted hover:text-cream"
              )}
            >
              {l.label}
              {activeHref === l.href && (
                <motion.span
                  layoutId="nav-indicator"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-gold"
                />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={studio.social.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Arman Digital on Instagram"
            className="text-muted transition-colors hover:text-gold"
          >
            <InstagramIcon className="h-[18px] w-[18px]" />
          </a>
          <a href={studio.phoneHref} className="flex items-center gap-2 text-sm font-medium text-muted hover:text-cream">
            <Phone className="h-4 w-4 text-gold" />
            {studio.phone}
          </a>
          <a
            href="#contact"
            className="shine-btn rounded-full bg-gradient-to-b from-gold-light to-gold px-5 py-2.5 text-sm font-semibold text-ink shadow-[0_4px_20px_-4px_rgba(217,164,65,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_28px_-4px_rgba(217,164,65,0.7)]"
          >
            Start a Project
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="text-cream md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border/60 bg-ink md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-surface hover:text-cream",
                    activeHref === l.href ? "text-gold" : "text-muted"
                  )}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-ink"
              >
                Start a Project
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
