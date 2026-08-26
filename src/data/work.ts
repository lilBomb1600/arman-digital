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
    id: "pittsburg-tires",
    client: "Pittsburg Tires And Wheels",
    category: "Auto & Tire Shop",
    summary:
      "A bold, industrial redesign for a Pittsburg tire shop with no existing website — dark asphalt & safety-yellow palette, gauge-style stats, and a bento service layout, built around their real 4.7-star reviews.",
    deliverables: ["Custom website design & build", "Services & booking-ready contact", "Reviews showcase", "Mobile-first, live on the web"],
    liveUrl: "https://pittsburg-tires.vercel.app",
    status: "live",
  },
  {
    id: "luxe-lounge",
    client: "The Luxe Lounge",
    category: "Hair Salon",
    summary:
      "A completely distinct layout for a Concord hair salon — fixed sidebar navigation, a soft boho-glam palette pulled from the real studio's interior, and a personal 'Meet Your Stylist' intro built around the owner's real story.",
    deliverables: ["Custom website design & build", "Services & booking flow", "Reviews showcase", "Mobile-first, live on the web"],
    liveUrl: "https://luxe-lounge-snowy.vercel.app",
    status: "live",
  },
  {
    id: "trl-boyz",
    client: "TRL BOYZ",
    category: "Streetwear & E-commerce",
    summary:
      "A stark black-and-white streetwear shop built to spec from brand references — a drag-to-spin 360 product viewer for checking front and back before buying, plus a full custom horror-grunge art direction with a custom cursor and terminal-style UI.",
    deliverables: ["Custom website design & build", "Drag-to-spin product viewer", "Custom cart & sign-up flow", "Mobile-first, live on the web"],
    liveUrl: "https://trl-boyz.vercel.app",
    status: "live",
  },
  {
    id: "iron-therapy-gym",
    client: "Iron Therapy Gym",
    category: "Strength & Conditioning Gym",
    summary:
      "A high-energy, forge-themed site for a 24/7 Concord gym — split day/night hero, count-up stats, rising ember particles, and a real 5.0-star Yelp reviews wall built around the owner's own story.",
    deliverables: ["Custom website design & build", "Programs, gallery & FAQ", "Reviews showcase", "Mobile-first, live on the web"],
    liveUrl: "https://iron-therapy-gym.vercel.app",
    status: "live",
  },
  {
    id: "feels-good-barbershop",
    client: "Feel Goods Barbershop",
    category: "Barbershop",
    summary:
      "A vintage Americana redesign for a Pittsburg family barbershop with no existing website — a spinning red/cream/navy barber pole built as a real SVG pattern, a vintage price board, and a real 4.6-star reviews wall pulled from their Booksy page.",
    deliverables: ["Custom website design & build", "Real-time booking link", "Reviews showcase", "Mobile-first, live on the web"],
    liveUrl: "https://feels-good-barbershop.vercel.app",
    status: "live",
  },
  {
    id: "oasis-cafe",
    client: "Oasis Cafe",
    category: "Halal Café",
    summary:
      "A halal Lafayette café rebuilt as a field-survey document of the oasis it's named for — the menu itself organized as descending depth strata down to a glowing aquifer, with a real 4.3-star Yelp reviews wall and real photos of the place.",
    deliverables: ["Custom website design & build", "Full menu system", "Reviews & photo showcase", "Mobile-first, live on the web"],
    liveUrl: "https://oasis-cafe-six.vercel.app",
    status: "live",
  },
  {
    id: "gm-landscape",
    client: "G&M Landscape Services",
    category: "Landscaping & Hardscape",
    summary:
      "A liquid-glass, motion-heavy site for a 30-year family-owned Pittsburg landscaping crew — frosted glass UI with a cursor-reactive glow and 3D card tilt floating over their own real project photography, plus their real 5-star Yelp review.",
    deliverables: ["Custom website design & build", "Service & portfolio gallery", "Reviews showcase", "Mobile-first, live on the web"],
    liveUrl: "https://gm-landscape.vercel.app",
    status: "live",
  },
];
