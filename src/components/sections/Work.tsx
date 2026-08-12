import { ArrowUpRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { work } from "@/data/work";

export function Work() {
  const live = work.filter((w) => w.status === "live");
  const upcoming = work.filter((w) => w.status === "coming-soon");

  return (
    <section id="work" className="border-t border-border/60 bg-surface/40 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Recent Work"
          title="A look at what's already live"
          description="Real projects, built for real businesses — this is what your site could look like."
        />

        <div className="mt-14 space-y-10">
          {live.map((project) => (
            <Reveal key={project.id}>
              <div className="grid overflow-hidden rounded-[2rem] border border-border bg-surface lg:grid-cols-2">
                <div className="relative aspect-[4/3] bg-ink lg:aspect-auto">
                  <div className="absolute inset-0 overflow-hidden">
                    <iframe
                      src={project.liveUrl}
                      title={project.client}
                      className="pointer-events-none h-[1000px] w-[1440px] origin-top-left scale-[0.32] border-0 sm:scale-[0.4] lg:scale-[0.42]"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                </div>

                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                    <Sparkles className="h-3.5 w-3.5" />
                    {project.category}
                  </span>
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
                      className="group mt-8 flex w-fit items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
                    >
                      Visit Live Site
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {upcoming.length > 0 && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {upcoming.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-3xl border border-dashed border-border bg-transparent p-8">
                  <span className="mb-3 inline-flex w-fit items-center rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-cream">{project.client}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
