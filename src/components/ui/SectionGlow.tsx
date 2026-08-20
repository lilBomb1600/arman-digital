import { cn } from "@/lib/utils";

export function SectionGlow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -z-10 h-[440px] w-[440px] rounded-full bg-gold/[0.08] blur-[110px]",
        className
      )}
    />
  );
}
