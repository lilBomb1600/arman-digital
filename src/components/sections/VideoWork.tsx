import { Clapperboard } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { videoWork } from "@/data/videoWork";

export function VideoWork() {
  return (
    <section id="video-work" className="border-t border-border/60 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Video Work"
          title="Cinematic video, not just websites"
          description="Real walkthroughs, shot and edited to make a property or vehicle stand out — not just photos, and not just a website."
        />

        <div className="mt-14 space-y-10">
          {videoWork.map((project) => (
            <Reveal key={project.id}>
              <div className="grid overflow-hidden rounded-[2rem] border border-border bg-surface transition-colors duration-300 hover:border-gold/30 lg:grid-cols-2">
                <div className="relative aspect-video bg-ink lg:aspect-auto">
                  <video
                    className="h-full w-full object-cover"
                    src={project.videoSrc}
                    poster={project.poster}
                    controls
                    playsInline
                    preload="metadata"
                  />
                </div>

                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                    <Clapperboard className="h-3.5 w-3.5" />
                    {project.category}
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-cream sm:text-3xl">{project.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
                  <ul className="mt-6 grid grid-cols-1 gap-2 text-sm text-cream/80 sm:grid-cols-2">
                    {project.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-gold" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
