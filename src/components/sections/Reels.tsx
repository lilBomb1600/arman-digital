import { MessageCircle, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { smsLink, studio } from "@/data/business";
import type { Lang } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getReels } from "@/i18n/content";
import { ReelsRail } from "./ReelsRail";

/** Real Reels for real clients, right after the sites. Data: src/data/reels.ts; files: public/reels. */
export function Reels({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).reels;

  return (
    <section id="reels" className="relative overflow-hidden border-t border-border/60 py-24 sm:py-28">
      <SectionGlow className="-left-40 top-1/3" />
      <Container>
        <SectionHeading title={t.title} description={t.description} />
      </Container>

      <Reveal className="mt-10">
        <ReelsRail
          reels={getReels(lang)}
          t={t}
          aside={
            <div className="space-y-4">
            <ul className="space-y-2">
              {t.results.map((line) => (
                <li key={line} className="flex items-start gap-2.5 text-sm leading-relaxed text-cream/85">
                  <Quote className="mt-1 h-3.5 w-3.5 shrink-0 text-gold/70" />
                  {line}
                </li>
              ))}
            </ul>
            </div>
          }
        />
      </Reveal>

      <Container>
        <Reveal className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <a
            href={smsLink(t.smsBody)}
            className="shine-btn group flex w-fit items-center gap-2 rounded-full bg-gradient-to-b from-gold-light to-gold px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_6px_24px_-6px_rgba(217,164,65,0.55)] transition-all hover:-translate-y-1 hover:shadow-[0_10px_32px_-6px_rgba(217,164,65,0.75)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <MessageCircle className="h-4 w-4" />
            {t.cta}
          </a>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            {t.ctaNote}{" "}
            <a href={studio.phoneHref} className="whitespace-nowrap font-semibold text-cream underline decoration-gold/50 underline-offset-4 hover:text-gold">
              {studio.phone}
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
