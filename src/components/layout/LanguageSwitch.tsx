import { homePath, langs, type Lang } from "@/i18n/config";
import { cn } from "@/lib/utils";

/** Each language's name in its own language, which is what someone looking for it will recognize. */
const NAMES: Record<Lang, string> = { en: "English", es: "Español" };

/**
 * EN / ES as two plain links between "/" and "/es". They're separate root layouts, so this is a full page load
 * either way; a real <a> keeps it working without JavaScript and lets people open the other language in a new tab.
 */
export function LanguageSwitch({
  lang,
  label,
  className,
  markCurrent = true,
}: {
  lang: Lang;
  label: string;
  className?: string;
  /** False on a page that isn't either home page (the 404), so neither link claims aria-current. */
  markCurrent?: boolean;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className={cn("glass-panel flex shrink-0 items-center rounded-full p-0.5 text-[11px] font-semibold tracking-wide", className)}
    >
      {langs.map((l) => {
        const active = l === lang;
        return (
          <a
            key={l}
            href={homePath[l]}
            hrefLang={l}
            lang={l}
            aria-label={NAMES[l]}
            aria-current={active && markCurrent ? "page" : undefined}
            className={cn(
              "rounded-full px-2 py-1 transition-colors",
              active ? "bg-gold/15 text-gold" : "text-muted hover:text-cream"
            )}
          >
            {l.toUpperCase()}
          </a>
        );
      })}
    </div>
  );
}
