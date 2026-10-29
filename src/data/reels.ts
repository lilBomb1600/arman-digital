/**
 * Real Reels Arman made for paying clients, plus one ad he made for himself. Shown in the Reels section
 * right after the Work gallery, in this order.
 *
 * Files live in public/reels: <slug>.mp4 (720x1280 H.264, under 3.5 MB, +faststart) and <slug>.jpg (the
 * poster frame). `slugEs` is the Spanish cut of the same Reel, played on /es instead.
 *
 * `source` says honestly where the footage came from, including when there are AI shots in it. Keep it that
 * way: never tag a Reel as the owner's own footage if any of it is AI. Spanish copy is in reels.es.ts.
 */
export type Reel = {
  id: string;
  slug: string;
  slugEs?: string;
  /** What kind of business it was for, and where. */
  business: string;
  /** What the Reel is, in a few words. */
  what: string;
  /** Where the footage came from. */
  source: string;
};

export const reels: Reel[] = [
  {
    id: "hellcat-matte-black",
    slug: "premium-hellcat-matte-black",
    business: "Wrap shop in Richmond",
    what: "Matte black wrap on a white Hellcat",
    source: "His footage + AI shots",
  },
  {
    id: "cookies-the-pull",
    slug: "angsarap-the-pull",
    business: "Cookie baker in Elk Grove",
    what: "New York style filled cookies, pulled apart",
    source: "Her photos + AI motion",
  },
  {
    id: "meal-prep-offer",
    slug: "fitfuel-offer-en",
    slugEs: "fitfuel-offer-es",
    business: "Meal prep in Hayward",
    what: "His weekly deal. I made it in English and Spanish",
    source: "His footage + AI shots",
  },
  {
    id: "tesla-ppf",
    slug: "premium-tesla-ppf",
    business: "Wrap shop in Richmond",
    what: "Tesla paint protection ad on the Golden Gate",
    source: "Made with AI",
  },
  {
    id: "cookies-thirteen-flavors",
    slug: "angsarap-thirteen-flavors",
    business: "Cookie baker in Elk Grove",
    what: "All 13 flavors, one at a time",
    source: "Her photos + AI motion",
  },
  {
    id: "camry-black-roof",
    slug: "premium-camry-black-roof",
    business: "Wrap shop in Richmond",
    what: "Black PPF on a Camry's roof and pillars, before and after",
    source: "His photos",
  },
  {
    id: "meal-prep-how-to-order",
    slug: "fitfuel-how-to-order-en",
    slugEs: "fitfuel-how-to-order-es",
    business: "Meal prep in Hayward",
    what: "How to order, shown as a DM chat",
    // A DM skit Arman animated himself; the only real image is Salvador's meal photo on the end card.
    source: "My animation + his photo",
  },
  {
    id: "arman-digital-cursor",
    slug: "arman-digital-cursor",
    business: "Arman Digital (that's me)",
    what: "An ad I made for my own business",
    source: "My own ad",
  },
];
