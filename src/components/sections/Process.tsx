import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { process } from "@/data/businessTypes";

export function Process() {
  return (
    <section id="process" className="border-t border-border/60 py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="How It Works" title="Simple, direct, no runaround" align="center" className="mx-auto" />

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <RevealItem key={step.title}>
              <div className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40">
                <span className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-gold to-gold-light transition-transform duration-500 group-hover:scale-x-100" />
                <span className="font-display text-4xl font-semibold text-gold/30 transition-colors duration-300 group-hover:text-gold/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-cream">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
