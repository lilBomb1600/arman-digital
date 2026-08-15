export type CaseStudy = {
  id: string;
  client: string;
  category: string;
  summary: string;
  deliverables: string[];
  liveUrl?: string;
  status: "live" | "coming-soon";
};

export const work: CaseStudy[] = [
  {
    id: "chaiwala-shop",
    client: "Chaiwala Shop",
    category: "Café & Restaurant",
    summary:
      "A full premium website for a Concord, CA chaiwala — built around their real menu, real 5-star reviews, and their own brand photography.",
    deliverables: ["Custom website design & build", "Full menu system", "Reviews showcase", "Mobile-first, live on the web"],
    liveUrl: "https://chaiwala-shop.vercel.app",
    status: "live",
  },
  {
    id: "the-dive",
    client: "The Dive",
    category: "Bar & Lounge",
    summary:
      "A moody, neon-lit website for a Walnut Creek speakeasy — built around their real logo, 5-star Google reviews, and full drink menu.",
    deliverables: ["Custom website design & build", "Full beer & cocktail menu", "Reviews showcase", "Mobile-first, live on the web"],
    liveUrl: "https://the-dive-mu.vercel.app",
    status: "live",
  },
  {
    id: "little-red-bistro",
    client: "Little Red Bistro",
    category: "Café & Bistro",
    summary:
      "A full redesign for a Pleasant Hill bistro, replacing an outdated site with a modern one built around their real crêpe & panini menu, real Yelp reviews, and full amenities list.",
    deliverables: ["Custom website design & build", "Full menu system (40+ items)", "Reviews showcase", "Mobile-first, live on the web"],
    liveUrl: "https://little-red-bistro.vercel.app",
    status: "live",
  },
  {
    id: "salon",
    client: "Salons & Spas",
    category: "Coming soon",
    summary: "A booking-first website concept for salons and spas — built to turn browsers into booked appointments.",
    deliverables: [],
    status: "coming-soon",
  },
  {
    id: "gym",
    client: "Gyms & Studios",
    category: "Coming soon",
    summary: "A membership-focused site concept for gyms and fitness studios, built around class schedules and sign-ups.",
    deliverables: [],
    status: "coming-soon",
  },
];
