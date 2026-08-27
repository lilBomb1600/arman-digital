"use client";

import { useEffect, useState, useCallback } from "react";
import {
  Compass,
  Phone,
  Mail,
  CalendarDays,
  ArrowUpRight,
  Sparkles,
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
import { work } from "@/data/work";

const sections = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#video-work", label: "Video Work" },
  { href: "#instagram", label: "Instagram" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

const liveSites = work.filter((w) => w.status === "live" && w.liveUrl);

/**
 * Cmd+K quick nav — jump to any section, open any real live client site, or
 * fire off a call/email/booking. A portfolio for a web developer should
 * itself demonstrate the kind of polish being sold; this is that flex.
 */
export function CommandMenu() {
  const [open, setOpen] = useState(false);

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
    if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
    } else if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    } else {
      window.open(href, href.startsWith("http") ? "_blank" : "_self", "noreferrer");
    }
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open command menu"
        className="glass-panel hidden items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium text-muted transition-colors hover:!border-gold/40 hover:text-cream md:flex"
      >
        <CommandIcon className="h-3.5 w-3.5" />
        <span>Quick nav</span>
        <CommandShortcut className="ml-1 rounded border border-border bg-surface px-1.5 py-0.5 font-sans text-[10px] text-muted">
          ⌘K
        </CommandShortcut>
      </button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Quick navigation"
        description="Jump to a section, visit a live project, or get in touch."
        className="glass-panel !border-gold/15 sm:max-w-lg"
      >
        <Command className="!bg-transparent">
        <CommandInput placeholder="Jump to a section, project, or get in touch..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Navigate">
            {sections.map((s) => (
              <CommandItem key={s.href} onSelect={() => go(s.href)} value={s.label}>
                <Compass className="text-gold" />
                {s.label}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup heading="Live Sites">
            {liveSites.map((project) => (
              <CommandItem
                key={project.id}
                onSelect={() => go(project.liveUrl!)}
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

          <CommandGroup heading="Get in Touch">
            <CommandItem onSelect={() => go(studio.phoneHref)} value="call phone">
              <Phone className="text-gold" />
              Call or text {studio.phone}
            </CommandItem>
            <CommandItem onSelect={() => go(studio.emailHref)} value="email">
              <Mail className="text-gold" />
              Email {studio.email}
            </CommandItem>
            <CommandItem onSelect={() => go("#contact")} value="book a call schedule">
              <CalendarDays className="text-gold" />
              Book a free 15-min call
            </CommandItem>
            <CommandItem onSelect={() => go(studio.social.instagram)} value="instagram follow">
              <InstagramIcon className="h-4 w-4 text-gold" />
              Follow on Instagram
            </CommandItem>
          </CommandGroup>
        </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
