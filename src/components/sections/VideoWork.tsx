"use client";

import { Car, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { VideoCarousel } from "@/components/sections/VideoCarousel";
import { videoWork } from "@/data/videoWork";

export function VideoWork() {
  const cars = videoWork.filter((v) => v.group === "car");
  const properties = videoWork.filter((v) => v.group === "property");

  return (
    <section id="video-work" className="relative overflow-hidden border-t border-border/60 py-24 sm:py-28">
      <SectionGlow className="-left-32 bottom-0" />
      <Container>
        <SectionHeading
          eyebrow="Video Work"
          title="Cinematic video, not just websites"
          description="Real walkthroughs, shot and edited to make a property or vehicle stand out — not just photos, and not just a website."
        />

        <div className="mt-14 space-y-16">
          {cars.length > 0 && (
            <Reveal>
              <VideoCarousel items={cars} label="Cars" icon={Car} />
            </Reveal>
          )}
          {properties.length > 0 && (
            <Reveal delay={0.1}>
              <VideoCarousel items={properties} label="Properties & Airbnb" icon={Home} />
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
