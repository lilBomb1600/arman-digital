import Image from "next/image";
import { Heart, MessageCircle, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { studio } from "@/data/business";

const posts = [
  { src: "/images/instagram/post-1-intro.png", alt: "Arman Digital brand introduction post" },
  { src: "/images/instagram/post-2-gt3.png", alt: "Porsche GT3 cinematic video highlight" },
  { src: "/images/instagram/post-3-treehouse.png", alt: "Dome treehouse video highlight" },
  { src: "/images/instagram/post-4-stats.png", alt: "Arman Digital credibility stats card" },
];

const handle = studio.social.instagram.replace(/^https?:\/\/(www\.)?instagram\.com\//, "@").replace(/\/$/, "");

export function Instagram() {
  return (
    <section id="instagram" className="relative overflow-hidden border-t border-border/60 py-24 sm:py-28">
      <SectionGlow className="-left-40 bottom-0 bg-gold/[0.08]" />
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="On Instagram"
            title="Follow the process"
            description="Behind-the-scenes builds, cinematic clips, and new sites going live — posted as they happen."
            className="max-w-xl"
          />
          <a
            href={studio.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="shine-btn group flex w-fit shrink-0 items-center gap-2 rounded-full bg-gradient-to-b from-gold-light to-gold px-6 py-3 text-sm font-semibold text-ink shadow-[0_6px_24px_-6px_rgba(217,164,65,0.55)] transition-all hover:-translate-y-1 hover:shadow-[0_10px_32px_-6px_rgba(217,164,65,0.75)]"
          >
            <InstagramIcon className="h-4 w-4" />
            Follow {handle}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <Reveal delay={0.1}>
          <div className="glow-ring mt-14 overflow-hidden rounded-[2rem] border border-white/5 bg-surface">
            <div className="flex items-center gap-4 border-b border-border/60 p-6 sm:p-8">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-gold/60 ring-offset-2 ring-offset-surface sm:h-20 sm:w-20">
                <Image src="/images/instagram/profile-picture.png" alt="Arman Digital Instagram profile picture" fill sizes="80px" className="object-cover" />
              </div>
              <div className="min-w-0">
                <p className="truncate font-display text-lg font-semibold text-cream sm:text-xl">{handle}</p>
                <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                  Digital Creator | Building impactful websites and cinematic media for local businesses in the Bay Area. Let&rsquo;s connect to elevate your brand.
                </p>
              </div>
            </div>

            <RevealGroup className="grid grid-cols-2 sm:grid-cols-4">
              {posts.map((post) => (
                <RevealItem key={post.src}>
                  <a
                    href={studio.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative block aspect-square overflow-hidden"
                  >
                    <Image
                      src={post.src}
                      alt={post.alt}
                      fill
                      sizes="(min-width: 640px) 25vw, 50vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center gap-5 bg-ink/0 opacity-0 backdrop-blur-0 transition-all duration-300 group-hover:bg-ink/70 group-hover:opacity-100 group-hover:backdrop-blur-[1px]">
                      <span className="flex items-center gap-1.5 text-sm font-semibold text-cream">
                        <Heart className="h-4 w-4 fill-cream" />
                      </span>
                      <span className="flex items-center gap-1.5 text-sm font-semibold text-cream">
                        <MessageCircle className="h-4 w-4 fill-cream" />
                      </span>
                    </div>
                  </a>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
