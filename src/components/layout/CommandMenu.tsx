"use client";

import { useEffect, useState, useCallback } from "react";
import {
  Compass,
  Phone,
  Mail,
  CalendarDays,
  ArrowUpRight,
  Sparkles,
  Languages,
  Command as CommandIcon,
} from "lucide-react";
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
} from "@/components/ui/command";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { studio } from "@/data/business";
import { fill, homePath, type Lang } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import type { LiveSiteLink } from "@/i18n/content";

// In page order.
const SECTIONS = [
  { href: "#hero", key: "hero" },
  { href: "#work", key: "work" },
  { href: "#reels", key: "reels" },
  { href: "#prices", key: "prices" },
  { href: "#process", key: "process" },
  { href: "#services", key: "services" },
  { href: "#about", key: "about" },
  { href: "#video-work", key: "videoWork" },
  { href: "#instagram", key: "instagram" },
  { href: "#contact", key: "contact" },
] as const;

/**
 * Cmd+K quick nav — jump to any section, open any real live client site, or
 * fire off a call/email/booking. A portfolio for a web developer should
 * itself demonstrate the kind of polish being sold; this is that flex.
 */
export function CommandMenu({ lang, t, liveSites }: { lang: Lang; t: Dictionary["command"]; liveSites: LiveSiteLink[] }) {
  const [open, setOpen] = useState(false);
  const otherLang: Lang = lang === "en" ? "es" : "en";

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        const target = e.target as HTMLElement;
        const isTyping = ["INPUT", "TEXTAREA"].includes(target.tagName) || target.isContentEditable;
        if (e.key === "/" && isTyping) return;
        e.preventDefault();
        setOpen((v) => !v);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const go = useCallback((href: string) => {
    setOpen(false);
    if (href.startsWith("#") && !document.querySelector(href)) {
      // Not on the home page (the 404): load the home page at that section instead.
      window.location.assign(href === "#hero" ? homePath[lang] : `${homePath[lang]}${href}`);
    } else if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", homePath[lang]);
    } else if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    } else if (href.startsWith("/")) {
      // The other language's page: a different root layout, so a normal full page load.
      window.location.assign(href);
    } else {
      window.open(href, href.startsWith("http") ? "_blank" : "_self", "noreferrer");
    }
  }, [lang]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label={t.open}
        className="glass-panel hidden items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium text-muted transition-colors hover:!border-gold/40 hover:text-cream md:flex"
      >
        <CommandIcon className="h-3.5 w-3.5" />
        <span className="whitespace-nowrap">{t.button}</span>
        <CommandShortcut className="ml-1 rounded border border-border bg-surface px-1.5 py-0.5 font-sans text-[10px] text-muted">
          ⌘K
        </CommandShortcut>
      </button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title={t.title}
        description={t.description}
        className="glass-panel !border-gold/15 sm:max-w-lg"
      >
        <Command className="!bg-transparent">
        <CommandInput placeholder={t.placeholder} />
        <CommandList>
          <CommandEmpty>{t.empty}</CommandEmpty>

          <CommandGroup heading={t.groups.navigate}>
            {SECTIONS.map((s) => (
              <CommandItem
                key={s.href}
                onSelect={() => go(s.href)}
                value={s.key === "prices" ? `${t.sections.prices} ${t.search.prices}` : t.sections[s.key]}
              >
                <Compass className="text-gold" />
                {t.sections[s.key]}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup heading={t.groups.liveSites}>
            {liveSites.map((project) => (
              <CommandItem
                key={project.id}
                onSelect={() => go(project.liveUrl)}
                value={`${project.client} ${project.category}`}
              >
                <Sparkles className="text-gold" />
                {project.client}
                <CommandShortcut>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup heading={t.groups.contact}>
            <CommandItem onSelect={() => go(studio.phoneHref)} value={t.search.call}>
              <Phone className="text-gold" />
              {fill(t.call, { phone: studio.phone })}
            </CommandItem>
            <CommandItem onSelect={() => go(studio.emailHref)} value={t.search.email}>
              <Mail className="text-gold" />
              {fill(t.email, { email: studio.email })}
            </CommandItem>
            <CommandItem onSelect={() => go("#contact")} value={t.search.book}>
              <CalendarDays className="text-gold" />
              {t.book}
            </CommandItem>
            <CommandItem onSelect={() => go(studio.social.instagram)} value={t.search.instagram}>
              <InstagramIcon className="h-4 w-4 text-gold" />
              {t.instagram}
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading={t.groups.language}>
            <CommandItem onSelect={() => go(homePath[otherLang])} value={t.search.switchTo}>
              <Languages className="text-gold" />
              <span lang={otherLang}>{t.switchTo}</span>
              <CommandShortcut>{otherLang.toUpperCase()}</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
