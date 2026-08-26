import { Mail, Phone, ArrowUpRight, CalendarDays } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { GlassCard } from "@/components/ui/GlassCard";
import { BookCallButton } from "@/components/ui/BookCallButton";
import { studio } from "@/data/business";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border/60 py-24 sm:py-28">
      <SectionGlow className="left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 bg-gold/[0.1]" />
      <Container>
        <Reveal>
          <GlassCard hoverLift={false} className="rounded-[2.5rem] !border-gold/15 p-10 shadow-[0_40px_100px_-30px_rgba(217,164,65,0.3)] sm:p-16">
            <div className="max-w-xl">
              <span className="mb-4 block h-[3px] w-10 rounded-full bg-gradient-to-r from-gold to-gold-light" />
              <h2 className="font-display text-balance text-3xl font-semibold text-cream sm:text-4xl">
                Got a business that deserves to look this good?
              </h2>
              <p className="mt-4 text-balance leading-relaxed text-muted">
                Reach out and tell me a bit about your business — I'll get back to you within a day.
              </p>

              <BookCallButton className="group mt-8 flex w-fit items-center gap-2 rounded-full bg-gradient-to-b from-gold-light to-gold px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_6px_24px_-6px_rgba(217,164,65,0.55)] transition-all hover:-translate-y-1 hover:shadow-[0_10px_32px_-6px_rgba(217,164,65,0.75)]">
                <CalendarDays className="h-4 w-4" />
                Book a Free 15-Min Call
              </BookCallButton>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a
                href={studio.phoneHref}
                className="glass-panel group flex items-center justify-between rounded-2xl px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:!border-gold/40 hover:shadow-[0_15px_40px_-12px_rgba(217,164,65,0.35)]"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold transition-transform duration-300 group-hover:scale-110">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted">Call or text</p>
                    <p className="font-display text-lg font-semibold text-cream">{studio.phone}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted transition-colors group-hover:text-gold" />
              </a>

              <a
                href={studio.emailHref}
                className="glass-panel group flex items-center justify-between rounded-2xl px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:!border-gold/40 hover:shadow-[0_15px_40px_-12px_rgba(217,164,65,0.35)]"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold transition-transform duration-300 group-hover:scale-110">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted">Email</p>
                    <p className="font-display text-lg font-semibold text-cream">{studio.email}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted transition-colors group-hover:text-gold" />
              </a>
            </div>
          </GlassCard>
        </Reveal>
      </Container>
    </section>
  );
}
