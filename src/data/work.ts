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
  {
    id: "mari-eli-cleaning",
    client: "Mari & Eli Cleaning Service",
    category: "Home Cleaning",
    summary:
      "A fully graphic, no-photo site for a Concord cleaning company founded by two Brazilian-born cleaners in 2007 — an original hand-drawn azulejo tile pattern that scatters and springs into a registered grid as you scroll, built around their real 4.8-star, 122-review Yelp wall.",
    deliverables: ["Custom website design & build", "Original tile-pattern motion system", "Reviews showcase", "Mobile-first, live on the web"],
    liveUrl: "https://mari-eli-cleaning.vercel.app",
    status: "live",
  },
  {
    id: "aa-auto-repair",
    client: "AA Automotive Repair",
    category: "Auto Repair",
    summary:
      "A motion-heavy site for a 24-year family-owned Concord repair shop, built in the spirit of a top-tier digital agency's own reel — a scroll-scrubbed garage door that rolls open over real shop photos, a gauge-cluster radial nav, and a real 4.9-star, 208-review Yelp wall.",
    deliverables: ["Custom website design & build", "Scroll-scrubbed garage-door hero", "Radial gauge-cluster nav", "Mobile-first, live on the web"],
    liveUrl: "https://aa-auto-repair-xi.vercel.app",
    status: "live",
  },
  {
    id: "porsche-walnut-creek",
    client: "Porsche Walnut Creek",
    category: "Porsche Dealer · 3D Concept",
    summary:
      "A concept site for a Walnut Creek Porsche dealer, built around a live 3D protection studio: pick a real Porsche paint, see exactly where paint protection film ends, preview tint and ceramic, then send the build to finance. Photographic 8k scenes, a tail-light hero, and a heritage timeline.",
    deliverables: ["Real-time 3D configurator (WebGL)", "Showroom finance handoff", "Cinematic scroll hero", "Mobile-first, live on the web"],
    liveUrl: "https://porsche-walnut-creek.vercel.app",
    status: "live",
  },
  {
    id: "castagna-pasticceria",
    client: "Castagna Pasticceria",
    category: "Pasticceria & Gelateria",
    summary:
      "A concept site for a Lafayette pasticceria: a 4K film of espresso poured over their gelato, their real pastry case with its handwritten prices, and a QR table menu the owner edits from a Google Sheet. The same table cards send guests to the shop's Google reviews.",
    deliverables: ["Custom website design & build", "QR table menu & printable table cards", "Owner-editable menu (Google Sheets)", "Mobile-first, live on the web"],
    liveUrl: "https://castagna-pasticceria.vercel.app",
    status: "live",
  },
  {
    id: "esparzas-resin",
    client: "Esparza's Resin",
    category: "Epoxy Floors · Concept",
    summary:
      "A bilingual concept site for a Watsonville epoxy floor installer. The first screen is a live metallic epoxy floor you can swirl with your finger and recolor, or mix your own colors. A flake designer throws chips onto a garage floor, and the free estimate form sends your square footage and design straight to his phone or Instagram.",
    deliverables: ["Interactive metallic floor (WebGL)", "Flake floor designer", "English / Spanish", "Estimate by text or Instagram DM"],
    liveUrl: "https://esparzas-resin.vercel.app",
    status: "live",
  },
  {
    id: "fit-fuel-meals",
    client: "FitFuel Meals",
    category: "Meal Prep · Concept",
    summary:
      "A bilingual concept site for a Hayward meal-prep chef, built from his own kitchen reels and meal photos. You scroll through his kitchen, build a box of 10 from this Sunday's menu, and the order is written for you to paste into his Instagram DM. Spanish first, with a real English switch.",
    deliverables: ["Dark cinematic build from his own reels", "Build-your-box tool from the weekly menu", "Spanish / English", "Orders by Instagram DM"],
    liveUrl: "https://fit-fuel-meals-delta.vercel.app",
    status: "live",
  },
  {
    id: "premium-ppf",
    client: "PREMIUM",
    category: "Wraps, PPF & Tint · Concept",
    summary:
      "A concept site for a Richmond wrap, paint protection film and window tint shop. A fan of film swatches recolors a real Range Rover roof from his jobs, a diagram shows what each PPF package covers, and a quote builder writes the text for you.",
    deliverables: ["Swatch-fan color preview", "PPF coverage diagram", "Real before / after jobs", "Free quote by text"],
    liveUrl: "https://premium-ppf.vercel.app",
    status: "live",
  },
  {
    id: "nails-by-june",
    client: "Nails By June",
    category: "Nail Studio · Concept",
    summary:
      "A concept site for a cozy Pleasant Hill nail studio, drawn as her manicure table seen from above, with a lamp that follows your cursor, her polish bottles and her real nail photos.",
    deliverables: ["Illustrated manicure-table scene", "Services & studio photos", "Call or text to book", "Mobile-first, live on the web"],
    liveUrl: "https://nails-by-june.vercel.app",
    status: "live",
  },
  {
    id: "taqueria-los-mexicanos",
    client: "Taquería Los Mexicanos",
    category: "Taquería · Concept",
    summary:
      "A bilingual concept site for an Antioch taquería, styled like the Day-Glo dance posters on a Mexican street, with their full menu, real food photos and party packages.",
    deliverables: ["Dance-poster art direction", "Full menu", "Spanish / English", "Order by phone or WhatsApp"],
    liveUrl: "https://taqueria-los-mexicanos.vercel.app",
    status: "live",
  },
  {
    id: "simsers-handy-service",
    client: "Simsers Handy Service",
    category: "Handyman · Concept",
    summary:
      "A concept site for a Pittsburg handyman built like a breaker panel: every switch is a room of the house, so you flip the kitchen or the garage to see the jobs he does there. Real job photos and quotes by text.",
    deliverables: ["Breaker-panel room picker", "Real job photos", "Quote by text", "Mobile-first, live on the web"],
    liveUrl: "https://simsers-handy-service.vercel.app",
    status: "live",
  },
  {
    id: "portal-artesanal",
    client: "Portal Artesanal",
    category: "Mexican Crafts Boutique · Concept",
    summary:
      "A bilingual concept site for a Walnut Creek shop of handmade goods from Mexico, under strings of papel picado, with their real products, workshops and Día de Muertos pieces.",
    deliverables: ["Papel picado art direction", "Products & workshops", "Spanish / English", "Mobile-first, live on the web"],
    liveUrl: "https://portal-artesanal.vercel.app",
    status: "live",
  },
  {
    id: "tax-services-inc",
    client: "Tax Services, Inc.",
    category: "Family Tax Office · Concept",
    summary:
      "A concept site for a Walnut Creek family tax office open since 1998, printed like security paper with a guilloche rosette, and written in the voice of the family that runs it.",
    deliverables: ["Security-paper art direction", "Services & how it works", "Call to book", "Mobile-first, live on the web"],
    liveUrl: "https://tax-services-inc.vercel.app",
    status: "live",
  },
  {
    id: "angelica-martinez-real-estate",
    client: "Angelica Martinez Real Estate",
    category: "Real Estate Broker · Concept",
    summary:
      "A concept site for a Martinez real estate broker, drawn as a hand-tinted fire-insurance map of downtown Martinez, with credited photos of the town and her office on Ferry St.",
    deliverables: ["Hand-tinted map art direction", "Credited town photography", "Call or get directions", "Mobile-first, live on the web"],
    liveUrl: "https://angelica-martinez-real-estate.vercel.app",
    status: "live",
  },
  {
    id: "four-paws-grooming",
    client: "Four Paws Grooming",
    category: "Dog Grooming · Concept",
    summary:
      "A concept site for a Walnut Creek dog groomer that hand dries and scissor finishes every dog: a grooming chart you trim with your cursor, and their real before-and-after photos.",
    deliverables: ["Interactive grooming chart", "Real before / after photos", "Call to book", "Mobile-first, live on the web"],
    liveUrl: "https://four-paws-grooming.vercel.app",
    status: "live",
  },
  {
    id: "lima-jumpers",
    client: "Lima Jumpers",
    category: "Party Rentals · Concept",
    summary:
      "A concept site for a Concord bounce house and water slide rental, with a yard-fit tool that checks which rental fits your space before you text to book.",
    deliverables: ["Will-it-fit yard tool", "Rentals with real sizes", "Book by text", "Mobile-first, live on the web"],
    liveUrl: "https://lima-jumpers.vercel.app",
    status: "live",
  },
  {
    id: "kold-krate",
    client: "Kold Krate",
    category: "Redwood Cold Plunges · Concept",
    summary:
      "A concept site for a Santa Cruz maker who builds cold and hot plunges by hand from California redwood. Written in his own voice around his reasons to buy his: they look better, there's more room inside, and he makes every one himself. Quiet stone grays, his real photos, and hot and cold side by side.",
    deliverables: ["Custom website design & build", "Copy in the owner's own voice", "Hot / cold chooser & quote flow", "Mobile-first, live on the web"],
    liveUrl: "https://kold-krate.vercel.app",
    status: "coming-soon",
  },
];
