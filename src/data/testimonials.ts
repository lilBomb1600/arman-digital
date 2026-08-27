export type Testimonial = {
  quote: string;
  author: string;
  location?: string;
  business: string;
  workId: string; // matches an id in data/work.ts
};

/**
 * These are real customer reviews of the real businesses each site was built
 * for — pulled verbatim (or as a genuine self-contained excerpt) from the
 * same Yelp/Google/Booksy listings used to build each site's own reviews
 * section. They are NOT reviews of the web design work itself — the point is
 * the opposite: these are real, well-loved local businesses, and the sites
 * are only as good as the trust already behind them. Do not invent or edit
 * these quotes. TRL BOYZ is a brand-reference build with no real business
 * behind it, so it has no entry here.
 */
export const testimonials: Testimonial[] = [
  {
    quote: "Lovely place and service. Very welcoming and calming atmosphere with great music and food.",
    author: "Taylor B.",
    location: "Concord, CA",
    business: "Chaiwala Shop",
    workId: "chaiwala-shop",
  },
  {
    quote: "Glad to see this place open. Excellent remodel and very nice staff.",
    author: "Jason Stoddard",
    business: "The Dive",
    workId: "the-dive",
  },
  {
    quote: "GREW UP ENJOYING THIS LIL PLACE!!! Love the crêpes and smoothies! Completely underrated!",
    author: "Lisa E.",
    business: "Little Red Bistro",
    workId: "little-red-bistro",
  },
  {
    quote: "Great place and very helpful. They even refilled the air in my spare tire... quick and on top of everything.",
    author: "Andrew P.",
    location: "San Francisco, CA",
    business: "Pittsburg Tires And Wheels",
    workId: "pittsburg-tires",
  },
  {
    quote: "She's the best at what she does! Always listens to what you want and gives you the honest truth on color.",
    author: "Alyssa Z.",
    location: "Port Hueneme, CA",
    business: "The Luxe Lounge",
    workId: "luxe-lounge",
  },
  {
    quote: "It has been hands down the best decision I could've made. I've lost about 50lbs so far and learned to love fitness.",
    author: "Lupita B.",
    location: "Bay Point, CA",
    business: "Iron Therapy Gym",
    workId: "iron-therapy-gym",
  },
  {
    quote: "Always a fire cut, great experience.",
    author: "Kevin",
    business: "Feel Goods Barbershop",
    workId: "feels-good-barbershop",
  },
  {
    quote: "Hidden Gem of Lafayette! Beautiful atmosphere. Food is great, I have gone back multiple times.",
    author: "Noelle S.",
    location: "Lafayette, CA",
    business: "Oasis Cafe",
    workId: "oasis-cafe",
  },
  {
    quote: "Five years later: zero movement, zero sinking pavers, and our HOA sent us a letter complimenting our yard.",
    author: "Carol K.",
    location: "Concord, CA",
    business: "G&M Landscape Services",
    workId: "gm-landscape",
  },
  {
    quote: "I'd give them 10 stars if I could. This is more than a deep cleaning — these ladies are skilled!",
    author: "Karla B.",
    location: "Oakland, CA",
    business: "Mari & Eli Cleaning Service",
    workId: "mari-eli-cleaning",
  },
];
