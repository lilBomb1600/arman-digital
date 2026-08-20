import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden border-t border-border/60 py-24 sm:py-28">
      <SectionGlow className="-left-40 top-1/4" />
      <Container>
        <SectionHeading
          eyebrow="What I Do"
          title="Full-service creative, without the agency overhead"
          description="One person, direct communication, real craft — from your website to the video that sells it."
        />

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <RevealItem key={service.id}>
              <div className="group flex h-full flex-col rounded-3xl border border-border bg-gradient-to-b from-surface to-surface-light p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_25px_60px_-15px_rgba(217,164,65,0.3)]">
                <h3 className="font-display text-xl font-semibold text-cream">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{service.description}</p>
                <ul className="mt-6 space-y-2.5">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-cream/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold transition-transform duration-300 group-hover:scale-110" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
