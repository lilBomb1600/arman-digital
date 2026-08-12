import { User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { about } from "@/data/about";

export function About() {
  return (
    <section id="about" className="border-t border-border/60 py-24 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-surface to-surface-light">
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-muted">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold">
                <User className="h-7 w-7" />
              </span>
              <p className="text-xs uppercase tracking-widest">Photo coming soon</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <span className="h-px w-6 bg-gold" />
            {about.eyebrow}
          </span>
          <h2 className="font-display text-balance text-3xl font-semibold text-cream sm:text-4xl">{about.heading}</h2>
          <div className="mt-5 space-y-4 text-balance leading-relaxed text-muted">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {about.credentials.map((c) => (
              <span key={c} className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-cream/90">
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
