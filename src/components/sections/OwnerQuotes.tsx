import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ownerQuotes } from "@/data/ownerQuotes";
import type { Lang } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

/**
 * Owners' own words about Arman's work, between the Reels and the prices. Paid clients and demo reactions are
 * labeled differently on purpose. Data: src/data/ownerQuotes.ts.
 */
export function OwnerQuotes({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).ownerQuotes;

  return (
    <section id="owners" className="relative overflow-hidden border-t border-border/60 py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading title={t.title} description={t.description} />
        </Reveal>
        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ownerQuotes.map((q, i) => (
            <RevealItem key={q.id} className={i === 0 ? "sm:col-span-2 lg:col-span-1" : undefined}>
              <figure className="tile flex h-full flex-col rounded-[1.75rem] border border-white/[0.06] p-7">
                <Quote className="h-5 w-5 text-gold/70" />
                <blockquote className="mt-4 flex-1 font-display text-xl font-semibold leading-snug text-cream sm:text-2xl">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-white/[0.07] pt-4">
                  <p className="font-semibold text-cream">{q.name}</p>
                  <p className="text-sm text-muted">{q.business}</p>
                  <p className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                    <span
                      className={
                        q.kind === "client"
                          ? "rounded-full bg-gold/12 px-2.5 py-0.5 font-semibold text-gold ring-1 ring-gold/25"
                          : "rounded-full bg-white/[0.06] px-2.5 py-0.5 font-semibold text-cream/80 ring-1 ring-white/10"
                      }
                    >
                      {q.kind === "client" ? t.client : t.demo}
                    </span>
                    <span className="text-muted">{fillWhere(t.via, q.where)}</span>
                  </p>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

function fillWhere(template: string, where: string) {
  return template.replace("{where}", where);
}
