import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { businessTypes } from "@/data/businessTypes";

export function WhoWeServe() {
  return (
    <section className="border-t border-border/60 bg-surface/40 py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Who I Work With" title="Built for businesses that live in the real world" />

        <div className="mt-10 flex flex-wrap gap-3">
          {businessTypes.map((type, i) => (
            <Reveal key={type} delay={i * 0.03}>
              <span className="inline-flex rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-cream/90">
                {type}
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
