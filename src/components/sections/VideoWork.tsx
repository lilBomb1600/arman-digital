import { Clapperboard } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function VideoWork() {
  return (
    <section id="video-work" className="border-t border-border/60 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Video Work"
          title="Cinematic video, not just websites"
          description="A real 360° car walkaround, shot and edited to make a listing stand out — exterior and interior, cut into one continuous piece."
        />

        <Reveal>
          <div className="mt-14 grid overflow-hidden rounded-[2rem] border border-border bg-surface lg:grid-cols-2">
            <div className="relative aspect-video bg-ink lg:aspect-auto">
              <video
                className="h-full w-full object-cover"
                src="/videos/lexus-es350-walkaround.mp4"
                poster="/videos/lexus-es350-poster.jpg"
                controls
                playsInline
                preload="metadata"
              />
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-12">
              <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                <Clapperboard className="h-3.5 w-3.5" />
                Car Walkthrough Video
              </span>
              <h3 className="font-display text-2xl font-semibold text-cream sm:text-3xl">2025 Lexus ES 350</h3>
              <p className="mt-4 leading-relaxed text-muted">
                A full 360° exterior orbit followed by an interior cabin tour — steering wheel, dash, console, and back
                seats — cut into one continuous walkaround. Built for listings, Marketplace, and social.
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-2 text-sm text-cream/80 sm:grid-cols-2">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  Full exterior 360° orbit
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  Interior cabin walkthrough
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  Edited into one continuous cut
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  Ready for listings & social
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
