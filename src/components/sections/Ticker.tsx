import { Sparkles } from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";

export function Ticker({ items }: { items: string[] }) {
  return (
    <div className="-rotate-1 border-y border-gold/30 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 py-3.5 shadow-[0_0_30px_-8px_rgba(217,164,65,0.4)]">
      <Marquee durationSeconds={24}>
        {items.map((item) => (
          <span
            key={item}
            className="flex shrink-0 items-center gap-3 px-4 text-sm font-bold uppercase tracking-widest text-gold"
          >
            {item}
            <Sparkles className="h-3.5 w-3.5 text-gold/40" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
