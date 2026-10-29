import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionGlow } from "@/components/ui/SectionGlow";
import type { Lang } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getWork, getWorkGroups } from "@/i18n/content";
import { WorkGallery, type GalleryItem } from "./WorkGallery";

/**
 * "Find a site like yours": every site as a compact card, filterable by kind of business. Cards are static
 * screenshots (public/images/work/<id>.jpg and <id>-640.jpg), never live iframes, so phones stay light.
 */
export function Work({ lang }: { lang: Lang }) {
  const t = getDictionary(lang).work;
  // Only what the cards render goes to the browser; the long summaries stay on the server.
  const items: GalleryItem[] = getWork(lang).map(
    ({ id, client, category, group, short, liveUrl, status, bilingual, featured, deliverables }) => ({
      id,
      client,
      category,
      group,
      short,
      liveUrl,
      status,
      bilingual,
      featured,
      deliverables,
    })
  );

  return (
    <section id="work" className="relative overflow-hidden border-t border-border/60 bg-surface/40 py-24 sm:py-28">
      <SectionGlow className="-right-40 top-10" />
      <Container>
        <SectionHeading title={t.title} description={t.description} />
        <WorkGallery items={items} groups={getWorkGroups(lang)} t={t} showBilingual={lang === "es"} />
      </Container>
    </section>
  );
}
