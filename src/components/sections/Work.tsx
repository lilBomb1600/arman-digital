import { ArrowUpRight, Languages, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { GlassCard } from "@/components/ui/GlassCard";
import type { Lang } from "@/i18n/config";
import { fill } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getWork } from "@/i18n/content";
import { SitePreview } from "./SitePreview";

/** On /es, the client sites that have their own English / Spanish switch get a small badge next to the category. */
function BilingualBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-gold/25 px-3 py-1 text-xs font-semibold text-gold">
      <Languages className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}

export function Work({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).work;
  const work = getWork(lang);
  const live = work.filter((w) => w.status === "live");
  const upcoming = work.filter((w) => w.status === "coming-soon");

  return (
    <section id="work" className="relative overflow-hidden border-t border-border/60 bg-surface/40 py-24 sm:py-28">
      <SectionGlow className="-right-40 top-10" />
      <Container>
        <SectionHeading
          title={t.title}
          description={t.description}
        />

        <div className="mt-14 space-y-10">
          {live.map((project, i) => {
            const domain = project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "") : "";
            return (
            <Reveal key={project.id}>
              <GlassCard tilt className="glow-ring group grid rounded-[2rem] !bg-surface/70 transition-shadow duration-300 hover:shadow-[0_30px_80px_-20px_rgba(217,164,65,0.4)] lg:grid-cols-2">
                <div data-site-card className="relative aspect-[4/3] overflow-hidden bg-ink lg:aspect-auto lg:min-h-[420px]">
                  <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-1.5 border-b border-white/5 bg-ink/95 px-3.5 py-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                    <span className="ml-2 truncate rounded-full bg-white/5 px-3 py-0.5 text-[10px] text-cream/50">{domain}</span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 top-[37px] overflow-hidden transition-transform duration-700 ease-out group-hover:scale-105">
                    <SitePreview
                      id={project.id}
                      url={project.liveUrl}
                      alt={fill(t.previewAlt, { title: project.client })}
                      liveTitle={fill(t.previewLive, { title: project.client })}
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <span className="absolute right-3 top-12 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-cream/80">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    {t.live}
                  </span>
                </div>

                <div className="relative flex flex-col justify-center p-8 sm:p-12">
                  <span className="pointer-events-none absolute right-6 top-4 select-none font-display text-6xl font-bold text-gold/[0.07] sm:text-7xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                      <Sparkles className="h-3.5 w-3.5" />
                      {project.category}
                    </span>
                    {lang === "es" && project.bilingual && <BilingualBadge label={t.bilingual} />}
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-cream sm:text-3xl">{project.client}</h3>
                  <p className="mt-4 leading-relaxed text-muted">{project.summary}</p>
                  <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-cream/80">
                    {project.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-gold" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="shine-btn group/btn mt-8 flex w-fit items-center gap-2 rounded-full bg-gradient-to-b from-gold-light to-gold px-6 py-3 text-sm font-semibold text-ink shadow-[0_6px_24px_-6px_rgba(217,164,65,0.55)] transition-all hover:-translate-y-1 hover:shadow-[0_10px_32px_-6px_rgba(217,164,65,0.75)]"
                    >
                      {t.visit}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </GlassCard>
            </Reveal>
            );
          })}
        </div>

        {upcoming.length > 0 && (
          <RevealGroup className="mt-8 grid gap-6 sm:grid-cols-2">
            {upcoming.map((project) => (
              <RevealItem key={project.id}>
                <div className="flex h-full flex-col rounded-3xl border border-dashed border-border bg-transparent p-8 transition-colors duration-300 hover:border-gold/30">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="inline-flex w-fit items-center rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted">
                      {project.category}
                    </span>
                    {lang === "es" && project.bilingual && <BilingualBadge label={t.bilingual} />}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-cream">{project.client}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        )}
      </Container>
    </section>
  );
}
