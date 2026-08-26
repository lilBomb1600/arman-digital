import { User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { GlassCard } from "@/components/ui/GlassCard";
import { about } from "@/data/about";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-border/60 py-24 sm:py-28">
      <SectionGlow className="-right-32 -top-32" />
      <Container className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <GlassCard className="relative mx-auto aspect-square w-full max-w-sm rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(217,164,65,0.25)] hover:!border-gold/30">
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-muted">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold">
                <User className="h-7 w-7" />
              </span>
              <p className="text-xs uppercase tracking-widest">Photo coming soon</p>
            </div>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="mb-4 block h-[3px] w-10 rounded-full bg-gradient-to-r from-gold to-gold-light" />
          <h2 className="font-display text-balance text-4xl font-semibold text-cream sm:text-5xl">{about.heading}</h2>
          <div className="mt-5 space-y-4 text-balance leading-relaxed text-muted">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {about.credentials.map((c) => (
              <span key={c} className="glass-panel rounded-full px-4 py-2 text-xs font-medium text-cream/90">
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
