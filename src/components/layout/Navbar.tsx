"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { CommandMenu } from "@/components/layout/CommandMenu";
import { LanguageSwitch } from "@/components/layout/LanguageSwitch";
import { cn } from "@/lib/utils";
import { studio } from "@/data/business";
import { homePath, type Lang } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import type { LiveSiteLink } from "@/i18n/content";

const SECTION_LINKS = ["about", "services", "work", "process", "contact"] as const;

export function Navbar({
  lang,
  t,
  langLabel,
  command,
  liveSites,
  onHome = true,
}: {
  lang: Lang;
  t: Dictionary["nav"];
  langLabel: string;
  command: Dictionary["command"];
  liveSites: LiveSiteLink[];
  /** False on the 404 page: section links then point at the home page, and the language switch marks nothing as current. */
  onHome?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  // Section the mobile menu should scroll to once it has finished closing (see onExitComplete below).
  const pendingSection = useRef<string | null>(null);
  const sectionHref = (id: string) => (onHome ? `#${id}` : `${homePath[lang]}#${id}`);
  const links = SECTION_LINKS.map((id) => ({ id, href: sectionHref(id), label: t[id] }));

  // Collapsing the menu shifts the page just as the browser's own smooth scroll starts, which cancels it.
  // So on phones and tablets the menu closes first, and the scroll starts once the exit animation is done.
  function goFromMenu(e: MouseEvent<HTMLAnchorElement>, id: string) {
    if (!document.getElementById(id)) return; // not on the home page: let the link load it
    e.preventDefault();
    pendingSection.current = id;
    setOpen(false);
  }

  function scrollToPendingSection() {
    const id = pendingSection.current;
    pendingSection.current = null;
    if (!id) return;
    document.getElementById(id)?.scrollIntoView(); // follows the CSS scroll-behavior and scroll-padding-top
    window.history.pushState(null, "", `#${id}`);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = SECTION_LINKS.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);

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
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <motion.div
        animate={{ height: scrolled ? 60 : 72 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "glass-panel mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 transition-shadow duration-300 sm:px-6",
          scrolled ? "shadow-xl shadow-black/40" : "shadow-lg shadow-black/20"
        )}
      >
        <Link href={homePath[lang]} className="shrink-0 font-display text-lg font-bold tracking-tight text-cream">
          Arman <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Digital</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={l.href}
              className={cn(
                "relative whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors",
                activeHref === `#${l.id}` ? "text-cream" : "text-muted hover:text-cream"
              )}
            >
              {l.label}
              {activeHref === `#${l.id}` && (
                <motion.span
                  layoutId="nav-indicator"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-gold"
                />
              )}
            </a>
          ))}
        </nav>

        {/* Spanish labels run longer, so the right-hand group sits a little tighter on /es. */}
        <div className={cn("hidden items-center lg:flex", lang === "es" ? "gap-3" : "gap-4")}>
          <LanguageSwitch lang={lang} label={langLabel} markCurrent={onHome} />
          <CommandMenu lang={lang} t={command} liveSites={liveSites} />
          <a
            href={studio.social.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label={t.instagram}
            className="text-muted transition-colors hover:text-gold"
          >
            <InstagramIcon className="h-[18px] w-[18px]" />
          </a>
          {/* The number is also in the hero and contact section; below 1280px the bar keeps room for the language switch. */}
          <a href={studio.phoneHref} className="hidden items-center gap-2 whitespace-nowrap text-sm font-medium text-muted hover:text-cream xl:flex">
            <Phone className="h-4 w-4 text-gold" />
            {studio.phone}
          </a>
          <a
            href={sectionHref("contact")}
            className="shine-btn whitespace-nowrap rounded-full bg-gradient-to-b from-gold-light to-gold px-5 py-2.5 text-sm font-semibold text-ink shadow-[0_4px_20px_-4px_rgba(217,164,65,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_28px_-4px_rgba(217,164,65,0.7)]"
          >
            {t.cta}
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitch lang={lang} label={langLabel} markCurrent={onHome} />
          <button aria-label={t.toggleMenu} aria-expanded={open} onClick={() => setOpen((v) => !v)} className="text-cream">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence onExitComplete={scrollToPendingSection}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={l.href}
                  onClick={(e) => goFromMenu(e, l.id)}
                  className={cn(
                    "rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-surface hover:text-cream",
                    activeHref === `#${l.id}` ? "text-gold" : "text-muted"
                  )}
                >
                  {l.label}
                </a>
              ))}
              <a
                href={sectionHref("contact")}
                onClick={(e) => goFromMenu(e, "contact")}
                className="mt-2 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-ink"
              >
                {t.cta}
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
