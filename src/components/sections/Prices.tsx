import { ArrowUp, CalendarDays, Check, CircleAlert, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { BookCallButton } from "@/components/ui/BookCallButton";
import { smsLink, studio } from "@/data/business";
import type { Lang } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getAddOns, getPricing } from "@/i18n/content";
import { howItWorks, howItWorksEs } from "@/data/howItWorks";

const goldButton =
  "shine-btn flex w-fit shrink-0 items-center gap-2 rounded-full bg-gradient-to-b from-gold-light to-gold px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_6px_24px_-6px_rgba(217,164,65,0.55)] transition-all hover:-translate-y-1 hover:shadow-[0_10px_32px_-6px_rgba(217,164,65,0.75)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

/**
 * The price list: free demo first, then Reels and websites, then extras. Numbers come from src/data/pricing.ts;
 * the extras only show prices once `addOns.showPrices` is switched on there.
 */
export function Prices({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).prices;
  const p = getPricing(lang);
  const extras = getAddOns(lang);
  const how = lang === "es" ? howItWorksEs : howItWorks;

  return (
    <section id="prices" className="relative overflow-hidden border-t border-border/60 bg-surface/40 py-24 sm:py-28">
      <SectionGlow className="left-1/2 top-40 -translate-x-1/2" />
      <Container>
        <SectionHeading title={t.title} description={t.description} />

        {/* The lead: nothing to pay until you've seen it. */}
        <Reveal className="mt-12">
          <div className="tile glow-ring relative overflow-hidden rounded-[2rem] p-7 shadow-[0_30px_80px_-32px_rgba(217,164,65,0.5)] sm:p-10">
            <div className="grid gap-5 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center md:gap-10">
              <p className="text-glow font-display text-6xl font-bold leading-none tracking-tight text-gold sm:text-7xl">{p.demo.price}</p>
              <div>
                <h3 className="font-display text-2xl font-semibold text-cream sm:text-[1.7rem]">{p.demo.title}</h3>
                <p className="mt-2 max-w-xl leading-relaxed text-muted">{p.demo.body}</p>
              </div>
              <a href={smsLink(t.smsBody)} className={goldButton}>
                <MessageCircle className="h-4 w-4" />
                {t.demoCta}
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="h-full">
            <div className="tile h-full rounded-[2rem] border border-white/[0.06] p-7 sm:p-9">
              <h3 className="font-display text-xl font-semibold text-cream">{p.reels.title}</h3>
              <ul className="mt-6 divide-y divide-white/[0.07]">
                {p.reels.items.map((item) => (
                  <li key={item.id} className="py-5 first:pt-0 last:pb-0">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-base font-semibold text-cream sm:text-lg">{item.title}</span>
                      <span aria-hidden className="min-w-6 flex-1 border-b border-dotted border-cream/25" />
                      <span className="whitespace-nowrap font-display text-2xl font-bold tabular-nums tracking-tight text-gold sm:text-3xl">
                        <span className="mr-1.5 text-xs font-medium tracking-normal text-muted sm:text-sm">{p.from}</span>
                        {item.price}
                        {item.per && <span className="ml-1 text-xs font-medium tracking-normal text-muted sm:ml-1.5 sm:text-sm">{item.per}</span>}
                      </span>
                    </div>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
                      {item.detail}
                      {item.best && (
                        <span className="rounded-full bg-gold/12 px-2.5 py-0.5 text-xs font-semibold text-gold ring-1 ring-gold/25">
                          {item.best}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-7 flex items-start gap-2.5 border-t border-white/[0.07] pt-5 text-sm leading-relaxed text-cream/85">
                <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {p.reels.note}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <div className="tile flex h-full flex-col rounded-[2rem] border border-white/[0.06] p-7 sm:p-9">
              <h3 className="font-display text-xl font-semibold text-cream">{p.website.title}</h3>
              <p className="mt-5 font-display text-6xl font-bold leading-none tabular-nums tracking-tight text-gold">
                <span className="mr-2 align-middle text-base font-medium tracking-normal text-muted">{p.from}</span>
                {p.website.price}
              </p>
              <ul className="mt-7 space-y-4">
                {p.website.lines.map((line) => (
                  <li key={line} className="flex items-start gap-3 leading-relaxed text-cream/85">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-gold" />
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-7 rounded-2xl border border-gold/20 bg-gold/[0.04] p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="font-display text-lg font-semibold text-cream">{p.website.starter.title}</p>
                  <p className="whitespace-nowrap font-display text-2xl font-bold tabular-nums text-gold">
                    <span className="mr-1.5 text-xs font-medium text-muted">{p.from}</span>
                    {p.website.starter.price}
                    <span className="ml-1.5 text-xs font-medium text-muted">{p.website.starter.per}</span>
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.website.starter.line}</p>
              </div>
              <a
                href="#work"
                className="mt-auto inline-flex w-fit items-center gap-1.5 pt-8 text-sm font-semibold text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold-light hover:decoration-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <ArrowUp className="h-4 w-4" />
                {t.seeSites}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Arman wants the prices to read as starting points, not a wall: a plain way to bring a different budget. */}
        <Reveal className="mt-6">
          <div className="tile flex flex-col gap-5 rounded-[2rem] border border-gold/20 p-7 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:p-9">
            <div>
              <h3 className="font-display text-xl font-semibold text-cream sm:text-2xl">{t.flexibleTitle}</h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-muted">{t.flexibleBody}</p>
            </div>
            <a
              href={smsLink(t.flexibleSms)}
              className="flex w-fit shrink-0 items-center gap-2 rounded-full border border-gold/40 px-6 py-3.5 text-sm font-semibold text-gold transition-all hover:-translate-y-1 hover:bg-gold/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <MessageCircle className="h-4 w-4" />
              {t.flexibleCta}
            </a>
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h3 className="font-display text-2xl font-semibold text-cream">{t.addOnsTitle}</h3>
            {!extras.showPrices && <p className="text-sm text-muted">{t.addOnsNote}</p>}
          </div>
          <ul className="mt-6 grid border-t border-white/[0.08] sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
            {extras.items.map((item) => (
              <li key={item.id} className="border-b border-white/[0.08] py-5">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-medium text-cream">
                    {item.title}
                    {item.isNew && (
                      <span className="ml-2 inline-block translate-y-[-1px] rounded-full bg-gold/12 px-2 py-0.5 align-middle text-[11px] font-semibold text-gold ring-1 ring-gold/25">
                        {t.newTag}
                      </span>
                    )}
                  </p>
                  {extras.showPrices &&
                    (item.price ? (
                      <p className="shrink-0 whitespace-nowrap font-display font-semibold tabular-nums text-gold">
                        <span className="mr-1 text-xs font-medium text-muted">{p.from}</span>
                        {item.price}
                      </p>
                    ) : (
                      <p className="shrink-0 text-sm font-medium text-muted">{t.askPrice}</p>
                    ))}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* The two newer extras get a plain "how it works" instead of a live demo (Arman, 2026-10-29). */}
        <Reveal className="mt-16">
          <h3 className="font-display text-2xl font-semibold text-cream">{how.title}</h3>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {how.items.map((item) => (
              <article key={item.id} className="tile flex h-full flex-col rounded-[2rem] border border-white/[0.06] p-7 sm:p-9">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="font-display text-xl font-semibold text-cream">{item.title}</h4>
                  <p className="font-display font-semibold tabular-nums text-gold">{item.price}</p>
                </div>
                <ol className="mt-6 space-y-4">
                  {item.steps.map((step, i) => (
                    <li key={step} className="flex items-start gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/12 font-display text-sm font-semibold tabular-nums text-gold ring-1 ring-gold/25">
                        {i + 1}
                      </span>
                      <p className="leading-relaxed text-cream/85">{step}</p>
                    </li>
                  ))}
                </ol>
                <figure className="mt-7 rounded-2xl bg-ink/60 p-4 ring-1 ring-white/[0.06]">
                  <figcaption className="text-xs font-medium text-muted">{item.example.label}</figcaption>
                  <div className="mt-3 flex flex-col gap-2">
                    {item.example.lines.map((line) => (
                      <p
                        key={line.text}
                        className={
                          line.from === "you"
                            ? "max-w-[85%] self-end rounded-2xl rounded-br-md bg-gold/90 px-3.5 py-2 text-sm leading-snug text-ink"
                            : "max-w-[85%] self-start rounded-2xl rounded-bl-md bg-white/[0.08] px-3.5 py-2 text-sm leading-snug text-cream"
                        }
                      >
                        {line.text}
                      </p>
                    ))}
                  </div>
                </figure>
                <p className="mt-6 flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {item.rules}
                </p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={studio.phoneHref}
            className="glass-panel group flex w-fit items-center gap-3 rounded-full px-6 py-3.5 text-sm transition-all hover:-translate-y-1 hover:!border-gold/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <Phone className="h-4 w-4 text-gold" />
            <span className="text-muted">{t.callOrText}</span>
            <span className="font-semibold text-cream group-hover:text-gold">{studio.phone}</span>
          </a>
          <BookCallButton className="flex w-fit items-center gap-2 rounded-full border border-gold/40 px-6 py-3.5 text-sm font-semibold text-gold transition-all hover:-translate-y-1 hover:bg-gold/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
            <CalendarDays className="h-4 w-4" />
            {t.book}
          </BookCallButton>
        </Reveal>
      </Container>
    </section>
  );
}
