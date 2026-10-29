import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionGlow } from "@/components/ui/SectionGlow";
import type { Lang } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getServices } from "@/i18n/content";

/** What Arman sells, as a plain list: name, what you get, and the price when there's an approved one. */
export function Services({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).services;
  const services = getServices(lang);

  return (
    <section id="services" className="relative overflow-hidden border-t border-border/60 py-24 sm:py-28">
      <SectionGlow className="-left-40 top-1/4" />
      <Container>
        <SectionHeading title={t.title} description={t.description} />

        <RevealGroup className="mt-12 border-t border-white/[0.08]">
          {services.map((service) => (
            <RevealItem key={service.id}>
              <div className="group grid gap-4 border-b border-white/[0.08] py-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)_10rem] md:gap-10">
                <h3 className="font-display text-2xl font-semibold text-cream transition-colors duration-300 group-hover:text-gold-light">
                  {service.title}
                </h3>
                <div>
                  <p className="max-w-prose leading-relaxed text-muted">{service.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {service.bullets.map((b) => (
                      <li key={b} className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-cream/85">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="md:text-right">
                  {service.price ? (
                    <span className="whitespace-nowrap font-display text-xl font-semibold tabular-nums text-gold">{service.price}</span>
                  ) : (
                    <span className="text-sm text-muted md:inline-block">{t.askPrice}</span>
                  )}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
