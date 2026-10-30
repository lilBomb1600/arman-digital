import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Ticker } from "@/components/sections/Ticker";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Testimonials } from "@/components/sections/Testimonials";
import { VideoWork } from "@/components/sections/VideoWork";
import { Instagram } from "@/components/sections/Instagram";
import { Process } from "@/components/sections/Process";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { Contact } from "@/components/sections/Contact";
import { Reels } from "@/components/sections/Reels";
import { OwnerQuotes } from "@/components/sections/OwnerQuotes";
import { Prices } from "@/components/sections/Prices";
import type { Lang } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getStudioCopy, getVideoWork } from "@/i18n/content";

/**
 * The one-page portfolio, in either language. Server sections take `lang` and read their own strings; client
 * sections (Hero, Stats, VideoWork) get just the strings they render, so no dictionary ships to the browser.
 *
 * Order is the sales order: proof first (sites, then Reels), then prices and how it works, then who I am.
 */
export function HomePage({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);

  return (
    <>
      <Hero t={t.hero} description={getStudioCopy(lang).description} />
      <Stats t={t.stats} />
      <Ticker items={t.ticker} />
      <Work lang={lang} />
      <Reels lang={lang} />
      <OwnerQuotes lang={lang} />
      <Prices lang={lang} />
      <Process lang={lang} />
      <Services lang={lang} />
      <About lang={lang} />
      <Testimonials lang={lang} />
      <VideoWork t={t.videoWork} items={getVideoWork(lang)} />
      <Instagram lang={lang} />
      <WhoWeServe lang={lang} />
      <Contact lang={lang} />
    </>
  );
}
