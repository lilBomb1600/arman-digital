import { ArrowUpRight, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { testimonials } from "@/data/testimonials";
import { work } from "@/data/work";

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  const project = work.find((w) => w.id === t.workId);

  return (
    <div className="glass-panel flex w-[340px] shrink-0 flex-col gap-4 rounded-2xl p-6 sm:w-[380px]">
      <Quote className="h-5 w-5 shrink-0 text-gold/50" />
      <p className="flex-1 text-sm leading-relaxed text-cream/90">&ldquo;{t.quote}&rdquo;</p>
      <div className="flex items-center justify-between gap-3 border-t border-white/5 pt-4">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-cream">{t.author}</p>
          {t.location && <p className="truncate text-xs text-muted">{t.location}</p>}
        </div>
        {project?.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="group/tag flex shrink-0 items-center gap-1 rounded-full bg-gold/10 px-3 py-1.5 text-xs font-semibold text-gold transition-colors hover:bg-gold/20"
          >
            {t.business}
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover/tag:translate-x-0.5 group-hover/tag:-translate-y-0.5" />
          </a>
        )}
      </div>
    </div>
  );
}

export function Testimonials() {
  const half = Math.ceil(testimonials.length / 2);
  const rowA = testimonials.slice(0, half);
  const rowB = testimonials.slice(half);

  return (
    <section className="relative overflow-hidden border-t border-border/60 py-24 sm:py-28">
      <SectionGlow className="left-1/2 -top-20 -translate-x-1/2" />
      <Container>
        <SectionHeading
          title="The businesses are real. So are their customers."
          description="These aren't reviews of my work — they're what real customers say about the real businesses behind each site. That's the whole point: the design is only as good as the trust already earned."
        />
      </Container>

      <div className="mt-14 space-y-5">
        <Marquee durationSeconds={48}>
          {rowA.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </Marquee>
        <Marquee durationSeconds={54} reverse>
          {rowB.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
