export type Service = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  /** Approved price to show next to it (see pricing.ts). Leave it out when there's no approved price yet. */
  price?: string;
};

/** What Arman sells now, in his own voice. Prices must match pricing.ts. Spanish twin: services.es.ts. */
export const services: Service[] = [
  {
    id: "websites",
    title: "Websites",
    description:
      "I build your site from scratch around your real photos, prices and reviews. It's made for phones first, because that's where your customers find you, and they can call or text you in one tap.",
    bullets: ["No templates", "Made for phones first", "Call, text or book in one tap", "I set up the hosting and launch it"],
    price: "from $1,000",
  },
  {
    id: "reels",
    title: "Reels for your business",
    description:
      "Short videos for Instagram, TikTok and Facebook, cut from your own photos and clips. If you don't have much footage, I can mix in AI shots, and I'll always tell you which parts are AI.",
    bullets: ["Your photos and clips", "Text and music on it", "A cover for your page", "Ready to post"],
    price: "from $40 a Reel",
  },
  {
    id: "monthly",
    title: "4 Reels a month",
    description:
      "A new Reel every week so your page doesn't go quiet. Send me photos when you have them and I do the rest.",
    bullets: ["One new Reel a week", "Cancel anytime", "Best price per Reel"],
    price: "from $129 a month",
  },
  {
    id: "review-texter",
    title: "Review texter",
    description:
      "After every job, your customer gets one text with your Google review link. You tap one button on your phone, and they write the review in their own words. Everyone gets the same text, so it plays by Google's rules.",
    bullets: ["One tap after each job", "One reminder at most", "Reply STOP always works"],
    price: "from $99 + $29 a month",
  },
  {
    id: "chat-helper",
    title: "Chat helper for your site",
    description:
      "A chat bubble on your website that answers questions at 11pm from your real prices, hours and services, in English or Spanish. When someone's ready, it sends them to you. It says it's an AI and never makes up a price.",
    bullets: ["Answers from your real info", "English and Spanish", "Sends you the customer"],
    price: "from $99 + $25 a month",
  },
  {
    id: "walkthroughs",
    title: "Walkthrough videos for cars and homes",
    description:
      "One clean walkthrough of a car or a place, shot and edited so it stands out more than photos do. For dealers, people selling a car, Airbnb hosts and realtors.",
    bullets: ["Inside and out", "Edited into one continuous video", "Ready for Marketplace, listings and Instagram"],
  },
  {
    id: "branding",
    title: "Logo and branding",
    description: "A logo and colors that look right on your sign, your truck and your Instagram.",
    bullets: ["Custom logo", "Colors and fonts", "Files for print and web"],
    price: "from $149",
  },
];
