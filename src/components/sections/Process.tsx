import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { process } from "@/data/businessTypes";

export function Process() {
  return (
    <section id="process" className="border-t border-border/60 py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="How It Works" title="Simple, direct, no runaround" align="center" className="mx-auto" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="relative rounded-3xl border border-border bg-surface p-7">
                <span className="font-display text-4xl font-semibold text-gold/30">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-cream">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
