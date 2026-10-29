import { Mail, Phone, ArrowUpRight, CalendarDays, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { GlassCard } from "@/components/ui/GlassCard";
import { BookCallButton } from "@/components/ui/BookCallButton";
import { smsLink, studio } from "@/data/business";
import type { Lang } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function Contact({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).contact;

  return (
    <section id="contact" className="relative overflow-hidden border-t border-border/60 py-24 sm:py-28">
      <SectionGlow className="left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 bg-gold/[0.1]" />
      <Container>
        <Reveal>
          <GlassCard hoverLift={false} className="rounded-[2.5rem] !border-gold/15 p-7 shadow-[0_40px_100px_-30px_rgba(217,164,65,0.3)] sm:p-16">
            <div className="max-w-xl">
              <span className="mb-4 block h-[3px] w-10 rounded-full bg-gradient-to-r from-gold to-gold-light" />
              <h2 className="font-display text-balance text-3xl font-semibold text-cream sm:text-4xl">
                {t.title}
              </h2>
              <p className="mt-4 text-balance leading-relaxed text-muted">
                {t.body}
              </p>

              {/* Texting is the main way in (send photos, get a demo); a call is there for people who'd rather talk. */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={smsLink(t.smsBody)}
                  className="shine-btn group flex w-fit items-center gap-2 rounded-full bg-gradient-to-b from-gold-light to-gold px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_6px_24px_-6px_rgba(217,164,65,0.55)] transition-all hover:-translate-y-1 hover:shadow-[0_10px_32px_-6px_rgba(217,164,65,0.75)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t.text}
                </a>
                <BookCallButton className="flex w-fit items-center gap-2 rounded-full border border-gold/40 px-6 py-3.5 text-sm font-semibold text-gold transition-all hover:-translate-y-1 hover:bg-gold/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
                  <CalendarDays className="h-4 w-4" />
                  {t.book}
                </BookCallButton>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a
                href={studio.phoneHref}
                className="glass-panel group flex items-center justify-between gap-2 rounded-2xl px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:!border-gold/40 hover:shadow-[0_15px_40px_-12px_rgba(217,164,65,0.35)] sm:px-6"
              >
                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wide text-muted">{t.call}</p>
                    <p className="font-display text-base font-semibold text-cream sm:text-lg">{studio.phone}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-gold" />
              </a>

              <a
                href={studio.emailHref}
                className="glass-panel group flex items-center justify-between gap-2 rounded-2xl px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:!border-gold/40 hover:shadow-[0_15px_40px_-12px_rgba(217,164,65,0.35)] sm:px-6"
              >
                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wide text-muted">{t.email}</p>
                    <p className="font-display text-base font-semibold text-cream [overflow-wrap:anywhere] sm:text-lg">{studio.email}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-gold" />
              </a>
            </div>
          </GlassCard>
        </Reveal>
      </Container>
    </section>
  );
}
