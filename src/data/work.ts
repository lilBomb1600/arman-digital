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
