import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          <span className="h-px w-6 bg-gold" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-balance text-3xl font-semibold text-cream sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-balance leading-relaxed text-muted">{description}</p>}
    </div>
  );
}
