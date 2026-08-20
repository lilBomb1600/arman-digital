import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
  reverse = false,
  durationSeconds = 28,
}: {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  durationSeconds?: number;
}) {
  return (
    <div
      className={cn(
        "group flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          style={{ animationDuration: `${durationSeconds}s` }}
          className={cn(
            "flex shrink-0 items-center gap-3 pr-3",
            reverse ? "animate-marquee-reverse" : "animate-marquee",
            "motion-reduce:animate-none group-hover:[animation-play-state:paused]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
