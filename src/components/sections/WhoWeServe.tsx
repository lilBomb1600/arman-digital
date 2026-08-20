import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { businessTypes } from "@/data/businessTypes";

export function WhoWeServe() {
  const half = Math.ceil(businessTypes.length / 2);
  const rowA = businessTypes.slice(0, half);
  const rowB = businessTypes.slice(half);

  return (
    <section className="border-t border-border/60 bg-surface/40 py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Who I Work With" title="Built for businesses that live in the real world" />
      </Container>

      <Reveal className="mt-10 space-y-4">
        <Marquee durationSeconds={26}>
          {rowA.map((type) => (
            <span
              key={type}
              className="inline-flex shrink-0 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-cream/90 transition-colors hover:border-gold/40 hover:text-gold"
            >
              {type}
            </span>
          ))}
        </Marquee>
        <Marquee durationSeconds={32} reverse>
          {rowB.map((type) => (
            <span
              key={type}
              className="inline-flex shrink-0 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-cream/90 transition-colors hover:border-gold/40 hover:text-gold"
            >
              {type}
            </span>
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
