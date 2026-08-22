export type VideoCaseStudy = {
  id: string;
  group: "car" | "property";
  category: string;
  title: string;
  description: string;
  deliverables: string[];
  videoSrc: string;
  poster: string;
};

export const videoWork: VideoCaseStudy[] = [
  {
    id: "house-walkthrough",
    group: "property",
    category: "Real Estate Walkthrough Video",
    title: "Modern Minimalist Home",
    description:
      "A full property walkthrough — front entry, backyard fire pit, rooftop deck and garden, living room, kitchen, dining, hallway, laundry, bedroom, and bathroom — cut into one continuous cinematic tour.",
    deliverables: ["Full exterior & interior coverage", "Fire pit & rooftop deck footage", "Every room, one continuous cut", "Ready for listings & social"],
    videoSrc: "/videos/house-walkthrough.mp4",
    poster: "/videos/house-poster.jpg",
  },
  {
    id: "lexus-es350",
    group: "car",
    category: "Car Walkthrough Video",
    title: "2025 Lexus ES 350",
    description:
      "A full 360° exterior orbit followed by an interior cabin tour — steering wheel, dash, console, and back seats — cut into one continuous walkaround. Built for listings, Marketplace, and social.",
    deliverables: ["Full exterior 360° orbit", "Interior cabin walkthrough", "Edited into one continuous cut", "Ready for listings & social"],
    videoSrc: "/videos/lexus-es350-walkaround.mp4",
    poster: "/videos/lexus-es350-poster.jpg",
  },
  {
    id: "porsche-911-gt3",
    group: "car",
    category: "Car Walkthrough Video",
    title: "2022 Porsche 911 GT3",
    description:
      "A full 360° exterior orbit of the 992 GT3 followed by an interior tour — gauge cluster, manual shift knob, and roll cage — cut into one continuous walkaround. Built for listings, Marketplace, and social.",
    deliverables: ["Full exterior 360° orbit", "Interior cabin walkthrough", "Edited into one continuous cut", "Ready for listings & social"],
    videoSrc: "/videos/porsche-gt3-walkaround.mp4",
    poster: "/videos/porsche-gt3-poster.jpg",
  },
  {
    id: "lexus-ls430",
    group: "car",
    category: "Car Walkthrough Video",
    title: "2005 Lexus LS 430",
    description:
      "A full exterior 360° orbit, a close detail pass on the wheels and exhaust, then a front-to-back interior tour — dash, console, front seats, rear seats, sunroof, and trunk — cut into one continuous walkaround. Built for listings, Marketplace, and social.",
    deliverables: ["Full exterior 360° orbit", "Wheel & exhaust detail pass", "Front & rear interior walkthrough", "Ready for listings & social"],
    videoSrc: "/videos/lexus-ls430-walkaround.mp4",
    poster: "/videos/lexus-ls430-poster.jpg",
  },
  {
    id: "dome-treehouse",
    group: "property",
    category: "Airbnb Walkthrough Video",
    title: "Geodesic Dome Treehouse",
    description:
      "A hillside dome retreat in Lafayette, CA — exterior at dusk, the dome living room and kitchen, both dome bedrooms, the main house's living room and bathrooms, deck views over the valley, and the hot tub and rec areas, cut into one continuous cinematic tour.",
    deliverables: ["Full property exterior & interior coverage", "Every room & outdoor amenity", "Edited into one continuous cut", "Ready for the listing & social"],
    videoSrc: "/videos/dome-treehouse-walkthrough.mp4",
    poster: "/videos/dome-treehouse-poster.jpg",
  },
  {
    id: "tuscan-villa-suite",
    group: "property",
    category: "Airbnb Walkthrough Video",
    title: "Tuscan Villa Suite",
    description:
      "An ocean-view patio at the Tuscan Villa Suite in Pacifica, CA, a coastal town just south of San Francisco — captured in one continuous golden-hour take from the living room out to the patio overlooking the Pacific.",
    deliverables: ["Ocean-view patio at golden hour", "Continuous cinematic take", "Pacifica, CA coastal retreat", "Ready for the listing & social"],
    videoSrc: "/videos/hillside-patio-sunset.mp4",
    poster: "/videos/hillside-patio-sunset-poster.jpg",
  },
];
