/**
 * Arman's prices, as approved on 2026-10-28. Shown in the Prices section (src/components/sections/Prices.tsx).
 * Change a number here and in pricing.es.ts together; don't add a price that Arman hasn't approved.
 */
export type Pricing = {
  /** Small "from" label shown before every paid price: Arman wants prices to read as flexible starting points. */
  from: string;
  demo: { price: string; title: string; body: string };
  reels: {
    title: string;
    items: { id: string; price: string; per?: string; title: string; detail: string; best?: string }[];
    note: string;
  };
  website: {
    title: string;
    price: string;
    lines: string[];
    /** The one-page site: the main site offer for solo sellers (Arman, 2026-10-29). */
    starter: { title: string; price: string; per: string; line: string };
  };
};

export const pricing: Pricing = {
  from: "from",
  demo: {
    price: "Free",
    title: "A demo first",
    body: "I build a 1-page demo site or 1 Reel from your own photos before you pay anything. It stays watermarked until you buy.",
  },
  reels: {
    title: "Reels",
    items: [
      { id: "one", price: "$40", title: "1 Reel", detail: "Clean file and a cover." },
      { id: "three", price: "$99", title: "3 Reels", detail: "2 rounds of changes." },
      {
        id: "monthly",
        price: "$129",
        per: "a month",
        title: "4 Reels a month",
        detail: "Cancel anytime.",
      },
      {
        id: "monthly8",
        price: "$225",
        per: "a month",
        title: "8 Reels a month",
        detail: "2 a week, made from your own clips. Cancel anytime.",
        best: "Best price per Reel",
      },
    ],
    note: "Videos are paid before the clean files go out.",
  },
  website: {
    title: "A website",
    price: "$1,000",
    lines: [
      "$300 to start, the rest when it's live and you're happy.",
      "$100 a month only if you want me hosting and updating it. That part is optional.",
    ],
    starter: {
      title: "Just need one page?",
      price: "$299",
      per: "+ $25/mo hosting",
      line: "Your services, prices, photos and a call or text button. If you go full site later, the $299 counts toward it.",
    },
  },
};

/**
 * Extras that go with a site or Reels. Prices approved by Arman on 2026-10-28 ("show these prices"), shown as
 * "from" prices. An item with an empty price shows "Text me" instead. Keep pricing.es.ts in step.
 * The $299 starter page is NOT listed here on purpose: it's only offered after someone says no to the full site.
 */
export type AddOns = {
  showPrices: boolean;
  items: { id: string; title: string; detail: string; price: string; isNew?: boolean }[];
};

export const addOns: AddOns = {
  showPrices: true,
  items: [
    {
      id: "review-texter",
      title: "Review texter",
      detail: "After each job, your customer gets one text with your Google review link. You tap one button, they write the review themselves.",
      price: "$99 + $29/mo",
      isNew: true,
    },
    {
      id: "chat-helper",
      title: "Chat helper for your site",
      detail: "An AI chat on your website that answers from your real prices and hours, in English or Spanish, and sends you the customer's info.",
      price: "$99 + $25/mo",
      isNew: true,
    },
    {
      id: "google-profile",
      title: "Google Business Profile setup and cleanup",
      detail: "Your hours, photos, services and phone, filled in right, so people near you find you on Maps.",
      price: "$99",
    },
    {
      id: "google-monthly",
      title: "Google profile upkeep",
      detail: "After setup, I keep it fresh: new photos, a post every week, and replies to your reviews that you OK first.",
      price: "$49/mo",
    },
    {
      id: "posting",
      title: "I post your Reels for you",
      detail: "Add it to a monthly Reel plan. I post to your Instagram and Facebook with captions in English or Spanish, so you don't have to.",
      price: "$39/mo",
    },
    {
      id: "review-qr",
      title: "Google review QR cards",
      detail: "A counter card or a sticker. Customers scan it and land on your Google review page.",
      price: "$49",
    },
    {
      id: "marketplace-photos",
      title: "Marketplace listing photos",
      detail: "A cover with your prices plus 4 more images for your listings. Reuse them every time you repost.",
      price: "$49",
    },
    {
      id: "print",
      title: "Flyers, door hangers and business cards",
      detail: "Print-ready files with your logo and colors. $59 each, or all 3 for $99.",
      price: "$59",
    },
    {
      id: "second-language",
      title: "Your site or menu in Spanish (or English)",
      detail: "A second-language version of your one-page site for $99, or your menu or price list for $39. You check it before it goes live.",
      price: "$39",
    },
    {
      id: "logo",
      title: "Logo",
      detail: "A logo that works on your sign, your truck and your Instagram.",
      price: "$149",
    },
    {
      id: "holiday",
      title: "Holiday bundle (Nov to Dec)",
      detail: "2 holiday Reels and an \"order by\" poster for your story and your counter.",
      price: "$79",
    },
    {
      id: "newsletter",
      title: "Customer email newsletter",
      detail: "Opt-in only, for your own customers. Like a weekly menu or a deals email.",
      price: "",
    },
  ],
};
