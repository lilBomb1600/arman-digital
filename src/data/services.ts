export type Service = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    id: "websites",
    title: "Website Design & Development",
    description:
      "Custom-built websites for local businesses — fast, mobile-first, and built to actually convert visitors into customers, not just look nice.",
    bullets: ["Custom design, no templates", "Mobile & SEO optimized", "Menu, booking & contact built in", "Free hosting setup & launch"],
  },
  {
    id: "video",
    title: "Cinematic Video Production",
    description:
      "Brand and marketing videos shot and edited with a cinematic eye — the kind of footage that makes a business feel premium the moment someone hits play.",
    bullets: ["Brand & marketing videos", "Product & promo edits", "Social-ready cuts (Reels, TikTok, YouTube)"],
  },
  {
    id: "airbnb",
    title: "Airbnb Walkthrough Videos",
    description:
      "Cinematic walkthroughs that show off a short-term rental the way photos never can — helping listings stand out and book faster.",
    bullets: ["Full property walkthrough", "Drone shots where available", "Edited for the listing & social"],
  },
  {
    id: "auto",
    title: "Car Walkthrough Videos",
    description:
      "360° cinematic walkthrough videos for dealers and private sellers — built to make a listing stand out on the lot and online.",
    bullets: ["Full interior & exterior walkthrough", "Detail & feature highlights", "Ready for Marketplace, Instagram & dealer sites"],
  },
  {
    id: "branding",
    title: "Logo & Brand Identity",
    description:
      "A logo and visual identity that looks as good on a storefront sign as it does on a phone screen.",
    bullets: ["Custom logo design", "Color & typography system", "Brand assets for print & web"],
  },
];
