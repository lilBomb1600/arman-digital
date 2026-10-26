"use client";

import { Car, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { VideoCarousel } from "@/components/sections/VideoCarousel";
import type { VideoCaseStudy } from "@/data/videoWork";
import type { Dictionary } from "@/i18n/dictionaries";

export function VideoWork({ t, items }: { t: Dictionary["videoWork"]; items: VideoCaseStudy[] }) {
  const cars = items.filter((v) => v.group === "car");
  const properties = items.filter((v) => v.group === "property");

  return (
    <section id="video-work" className="relative overflow-hidden border-t border-border/60 py-24 sm:py-28">
      <SectionGlow className="-left-32 bottom-0" />
      <Container>
        <SectionHeading
          title={t.title}
          description={t.description}
        />

        <div className="mt-14 space-y-16">
          {cars.length > 0 && (
            <Reveal>
              <VideoCarousel items={cars} label={t.cars} icon={Car} t={t} />
            </Reveal>
          )}
          {properties.length > 0 && (
            <Reveal delay={0.1}>
              <VideoCarousel items={properties} label={t.properties} icon={Home} t={t} />
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
