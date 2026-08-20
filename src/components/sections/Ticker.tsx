import { Sparkles } from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";

const items = [
  "Websites",
  "Cinematic Video",
  "Car Walkarounds",
  "Airbnb Walkthroughs",
  "Brand Identity",
  "Local Businesses",
];

export function Ticker() {
  return (
    <div className="-rotate-1 border-y border-gold/20 bg-gold/5 py-3">
      <Marquee durationSeconds={24}>
        {items.map((item) => (
          <span
            key={item}
            className="flex shrink-0 items-center gap-3 px-4 text-sm font-semibold uppercase tracking-widest text-gold/80"
          >
            {item}
            <Sparkles className="h-3.5 w-3.5 text-gold/40" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
