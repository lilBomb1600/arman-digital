/**
 * The filter chips on the Work gallery, in the order they show. The id is also the ?type= value in the URL,
 * so Arman can text a prospect a link straight to their kind of business (arman-digital.vercel.app/?type=auto).
 * Don't rename an id once links are out there. Spanish labels live in work.es.ts.
 */
export const workGroups = [
  { id: "food", label: "Food and drinks" },
  { id: "beauty", label: "Beauty and grooming" },
  { id: "home", label: "Home and outdoor" },
  { id: "auto", label: "Auto" },
  { id: "kids", label: "Kids and family" },
  { id: "shops", label: "Shops and services" },
] as const;

export type WorkGroup = (typeof workGroups)[number]["id"];

export type CaseStudy = {
  id: string;
  client: string;
  category: string;
  /** Which filter chip the site shows under. */
  group: WorkGroup;
  /** One line for the gallery card, in Arman's voice. No em dashes. */
  short: string;
  /** The longer write-up. Not shown on the gallery cards anymore; kept for reference and future use. */
  summary: string;
  deliverables: string[];
  liveUrl?: string;
  status: "live" | "coming-soon";
  /** The client site itself has an English / Spanish switch. Shows a "También en español" badge on /es. */
  bilingual?: boolean;
  /** 1, 2, 3: shown first and bigger on the "All" view of the gallery, in this order. */
  featured?: 1 | 2 | 3;
};

export const work: CaseStudy[] = [
  {
    id: "chaiwala-shop",
    client: "Chaiwala Shop",
    category: "Café & Restaurant",
    group: "food",
    short: "Concord chai shop, built on their real menu, reviews and photos.",
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
    group: "food",
    short: "Walnut Creek speakeasy. Neon, their logo and the whole drink menu.",
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
    group: "food",
    short: "Pleasant Hill bistro. Swapped their old site for one with the full crêpe menu.",
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
    group: "auto",
    short: "Pittsburg tire shop that had no site. Asphalt black and safety yellow.",
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
    group: "beauty",
    short: "Concord hair salon. Soft colors from the real studio and the owner's story.",
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
    group: "shops",
    short: "Streetwear shop with a 360 product viewer you drag to spin.",
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
    group: "shops",
    short: "24/7 Concord gym. A day and night hero and their real Yelp reviews.",
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
    group: "beauty",
    short: "Pittsburg family barbershop. A spinning barber pole and an old-school price board.",
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
    group: "food",
    short: "Halal café in Lafayette. The menu goes down in layers, like an oasis.",
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
    group: "home",
    short: "Pittsburg landscaping crew, family owned for 30 years. Their own job photos.",
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
    group: "home",
    short: "Concord cleaning company. No photos, just a hand-drawn tile pattern that moves.",
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
    group: "auto",
    short: "Concord repair shop. A garage door rolls open as you scroll.",
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
    group: "auto",
    short: "Pick a real Porsche paint and see in 3D where the protection film goes.",
    featured: 1,
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
    group: "food",
    short: "Lafayette pastry shop with a QR table menu they edit from a Google Sheet.",
    featured: 3,
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
    group: "home",
    short: "Watsonville epoxy floors. Swirl a metallic floor with your finger.",
    featured: 2,
    summary:
      "A bilingual concept site for a Watsonville epoxy floor installer. The first screen is a live metallic epoxy floor you can swirl with your finger and recolor, or mix your own colors. A flake designer throws chips onto a garage floor, and the free estimate form sends your square footage and design straight to his phone or Instagram.",
    deliverables: ["Interactive metallic floor (WebGL)", "Flake floor designer", "English / Spanish", "Estimate by text or Instagram DM"],
    liveUrl: "https://esparzas-resin.vercel.app",
    status: "live",
    bilingual: true,
  },
  {
    id: "alumifred",
    client: "Alumifred",
    category: "Glass Showers & Railings · Concept",
    group: "home",
    short: "San Jose shower glass and railings. Draw your shower and it texts Fred.",
    summary:
      "A concept site for a San Jose crew that installs frameless shower glass and glass railings. You draw your shower (layout, hardware, rough size) or measure a railing run, watch the drawing change as you pick, and it turns into a text to Fred. Built from his own job photos and video.",
    deliverables: ["Draw-your-shower tool", "Railing measure tool", "Quote by text", "His real jobs and reel"],
    liveUrl: "https://alumifred.vercel.app",
    status: "live",
  },
  {
    id: "fit-fuel-meals",
    client: "FitFuel Meals",
    category: "Meal Prep · Concept",
    group: "food",
    short: "Hayward meal prep. Build your box of 10 and send the order by DM.",
    summary:
      "A bilingual concept site for a Hayward meal-prep chef, built from his own kitchen reels and meal photos. You scroll through his kitchen, build a box of 10 from this Sunday's menu, and the order is written for you to paste into his Instagram DM. Spanish first, with a real English switch.",
    deliverables: ["Dark cinematic build from his own reels", "Build-your-box tool from the weekly menu", "Spanish / English", "Orders by Instagram DM"],
    liveUrl: "https://fit-fuel-meals-delta.vercel.app",
    status: "live",
    bilingual: true,
  },
  {
    id: "premium-ppf",
    client: "PREMIUM",
    category: "Wraps, PPF & Tint · Concept",
    group: "auto",
    short: "Richmond wrap and PPF shop. Tap a swatch to recolor a real Range Rover.",
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
    group: "beauty",
    short: "Pleasant Hill nail studio, drawn as her manicure table from above.",
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
    group: "food",
    short: "Antioch taquería styled like a Day-Glo dance poster. English and Spanish.",
    summary:
      "A bilingual concept site for an Antioch taquería, styled like the Day-Glo dance posters on a Mexican street, with their full menu, real food photos and party packages.",
    deliverables: ["Dance-poster art direction", "Full menu", "Spanish / English", "Order by phone or WhatsApp"],
    liveUrl: "https://taqueria-los-mexicanos.vercel.app",
    status: "live",
    bilingual: true,
  },
  {
    id: "simsers-handy-service",
    client: "Simsers Handy Service",
    category: "Handyman · Concept",
    group: "home",
    short: "Pittsburg handyman. Flip a breaker to see the jobs he does in each room.",
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
    group: "shops",
    short: "Walnut Creek shop of handmade goods from Mexico, under papel picado.",
    summary:
      "A bilingual concept site for a Walnut Creek shop of handmade goods from Mexico, under strings of papel picado, with their real products, workshops and Día de Muertos pieces.",
    deliverables: ["Papel picado art direction", "Products & workshops", "Spanish / English", "Mobile-first, live on the web"],
    liveUrl: "https://portal-artesanal.vercel.app",
    status: "live",
    bilingual: true,
  },
  {
    id: "tax-services-inc",
    client: "Tax Services, Inc.",
    category: "Family Tax Office · Concept",
    group: "shops",
    short: "Walnut Creek family tax office open since 1998, printed like security paper.",
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
    group: "shops",
    short: "Martinez real estate broker, drawn as an old hand-tinted map of downtown.",
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
    group: "beauty",
    short: "Walnut Creek dog groomer. Trim the dog on the grooming chart yourself.",
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
    group: "kids",
    short: "Concord bounce houses. Check what fits your yard, then text to book.",
    summary:
      "A concept site for a Concord bounce house and water slide rental, with a yard-fit tool that checks which rental fits your space before you text to book.",
    deliverables: ["Will-it-fit yard tool", "Rentals with real sizes", "Book by text", "Mobile-first, live on the web"],
    liveUrl: "https://lima-jumpers.vercel.app",
    status: "live",
  },
  {
    id: "astro-kids-daycare",
    client: "Astro Kids Daycare",
    category: "Home Daycare · Concept",
    group: "kids",
    short: "Walnut Creek home daycare. Turn the star wheel to see their day.",
    summary:
      "A concept site for a licensed Montessori-inspired home daycare in Walnut Creek, drawn as a star wheel. Turn the disk and the real weekday schedule passes under the window as constellations, then the state record, the 1 : 3 ratio, reviews and tuition by days a week.",
    deliverables: ["Turnable day-wheel schedule", "State record & reviews", "Tuition by days a week", "Call to book a tour"],
    liveUrl: "https://astro-kids-daycare.vercel.app",
    status: "live",
  },
  {
    id: "mayrik-childcare",
    client: "Mayrik Childcare",
    category: "Home Preschool · Concept",
    group: "kids",
    short: "Concord home preschool. Foam blocks fall into the page with real physics.",
    summary:
      "A concept site for a licensed Concord home preschool, built like the soft-play gym in its converted garage. Foam pieces tumble into the hero under real physics, and every one you tap is added to a tour text, followed by the state record, the week, the food and the daily texts parents get.",
    deliverables: ["Foam-piece physics hero", "Tap-to-build tour text", "State record & Yelp reviews", "Mobile-first, live on the web"],
    liveUrl: "https://mayrik-childcare.vercel.app",
    status: "live",
  },
  {
    id: "miles-of-smiles",
    client: "Miles of Smiles",
    category: "Daycare & Preschool · Concept",
    group: "kids",
    short: "Concord home daycare told as a felt board. Slide to your kid's age.",
    summary:
      "A concept site for an in-home daycare and preschool in Concord, told as a circle-time felt board. Slide the smile to your child's age and the board re-sets with their day; hours, food and outdoor time sit in a pocket chart that shows whether it's open right now.",
    deliverables: ["Felt-board illustration, no photos", "Slide-to-age day board", "Live open / closed pocket chart", "Call in one tap"],
    liveUrl: "https://miles-of-smiles-lilac.vercel.app",
    status: "live",
  },
  {
    id: "sugar-rush",
    client: "Sugar Rush",
    category: "Dessert Shop · Concept",
    group: "food",
    short: "A made-up sweet shop with a piñata you can break.",
    summary:
      "A made-up sweet shop with a piñata you can break in the first screen. The menu comes from two real Bay Area dessert spots, used with permission: party cakes, croffles, snowflake bingsu and boba, laid out like party-store aisles.",
    deliverables: ["Breakable piñata hero", "Seven menu aisles", "Party box builder", "Mobile-first, live on the web"],
    liveUrl: "https://sugar-rush-cyan.vercel.app",
    status: "live",
  },
  {
    id: "guadaclean",
    client: "GuadaClean",
    category: "Exterior Cleaning · Concept",
    group: "home",
    short: "Antioch gutters, roofs, solar and driveways. Rinse the grime off a roof, then call.",
    summary:
      "A concept site for an Antioch exterior cleaning crew (gutters, roof soft wash, solar panels, windows, driveways). The page walks down one house from roof to driveway, lets you rinse the grime off a photo with your finger, and builds your list before you call.",
    deliverables: ["Rinse-it-clean photo tool", "Build-your-list call script", "Real Google and Yelp reviews", "Mobile-first, live on the web"],
    liveUrl: "https://guadaclean-6htk.vercel.app",
    status: "live",
  },
  {
    id: "ww-mobile-mechanic",
    client: "WW Mobile Mechanic",
    category: "Mobile Mechanic · Concept",
    group: "auto",
    short: "El Sobrante mobile mechanic. Tap what your car is doing and it writes the text for you.",
    summary:
      "A concept site for a mobile mechanic who comes to your driveway in West Contra Costa. Tap what the car is doing, add the year, make and model, and the site writes the text to Will.",
    deliverables: ["What's-it-doing symptom picker", "Prefilled text to the mechanic", "Real Yelp reviews", "Mobile-first, live on the web"],
    liveUrl: "https://ww-mobile-mechanic.vercel.app",
    status: "live",
  },
  {
    id: "lashed-out",
    client: "Lashed Out",
    category: "Lash Studio · Concept",
    group: "beauty",
    short: "Concord lash studio. Three taps match you to a set, with the real price, then book.",
    summary:
      "A concept site for a Concord lash artist who specializes in Korean lash lifts. A three-tap chooser lands on her real service and price, the full new and returning guest menu is on the page, and booking goes straight to her Acuity page.",
    deliverables: ["Find-your-set chooser", "Full price menu", "Book on Acuity", "Mobile-first, live on the web"],
    liveUrl: "https://lashed-out.vercel.app",
    status: "live",
  },
  {
    id: "her-creative-events",
    client: "Her Creative Events",
    category: "Balloon & Event Decor · Concept",
    group: "kids",
    short: "Antioch balloon garlands and event styling. Pick your colors and see your garland.",
    summary:
      "A concept site for an Antioch event stylist (balloon garlands, backdrops, tablescapes, weddings). Pick your balloon colors and watch the garland change, then send your picks straight to her inquiry form.",
    deliverables: ["Garland color preview", "Send-your-picks inquiry", "Real Thumbtack reviews", "Mobile-first, live on the web"],
    liveUrl: "https://her-creative-events.vercel.app",
    status: "live",
  },
  {
    id: "kold-krate",
    client: "Kold Krate",
    category: "Redwood Cold Plunges · Concept",
    group: "home",
    short: "Santa Cruz redwood cold plunges, in the owner's own words.",
    summary:
      "A concept site for a Santa Cruz maker who builds cold and hot plunges by hand from California redwood. Written in his own voice around his reasons to buy his: they look better, there's more room inside, and he makes every one himself. Quiet stone grays, his real photos, and hot and cold side by side.",
    deliverables: ["Custom website design & build", "Copy in the owner's own voice", "Hot / cold chooser & quote flow", "Mobile-first, live on the web"],
    liveUrl: "https://kold-krate.vercel.app",
    status: "coming-soon",
  },
];
