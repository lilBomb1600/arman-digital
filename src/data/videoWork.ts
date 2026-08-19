export type VideoCaseStudy = {
  id: string;
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
    category: "Car Walkthrough Video",
    title: "2022 Porsche 911 GT3",
    description:
      "A full 360° exterior orbit of the 992 GT3 followed by an interior tour — gauge cluster, manual shift knob, and roll cage — cut into one continuous walkaround. Built for listings, Marketplace, and social.",
    deliverables: ["Full exterior 360° orbit", "Interior cabin walkthrough", "Edited into one continuous cut", "Ready for listings & social"],
    videoSrc: "/videos/porsche-gt3-walkaround.mp4",
    poster: "/videos/porsche-gt3-poster.jpg",
  },
];
