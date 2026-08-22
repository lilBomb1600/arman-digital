import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { studio } from "@/data/business";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface">
      <Container className="flex flex-col items-start justify-between gap-8 py-14 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-lg font-semibold text-cream">
            Arman <span className="text-gold">Digital</span>
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">{studio.tagline}</p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-muted">
          <a href={studio.phoneHref} className="flex items-center gap-2 hover:text-cream">
            <Phone className="h-4 w-4 text-gold" />
            {studio.phone}
          </a>
          <a href={studio.emailHref} className="flex items-center gap-2 hover:text-cream">
            <Mail className="h-4 w-4 text-gold" />
            {studio.email}
          </a>
          <a href={studio.social.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cream">
            <InstagramIcon className="h-4 w-4 text-gold" />
            Instagram
          </a>
        </div>
      </Container>
      <Container className="border-t border-border/60 py-6">
        <p className="text-xs text-muted">© {new Date().getFullYear()} Arman Digital. All rights reserved.</p>
      </Container>
    </footer>
  );
}
