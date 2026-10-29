import type { Lang } from "./config";

/**
 * Every short UI string on the site, in English and Spanish. `es` is typed as `Dictionary` (the shape of `en`),
 * so TypeScript fails the build if a key is missing or misspelled on either side.
 *
 * To change a string: edit it here in both objects. {curly} placeholders are filled in by `fill()` from
 * ./config.ts, so keep them as they are. Longer prose (about, services, work cards, reels, prices, process,
 * business types) lives next to the English data in src/data/*.es.ts.
 *
 * Voice: Arman talking, first person, short and plain, the way he'd text a shop owner. No agency talk, no em
 * dashes, no made-up numbers or results. Spanish: "tú", US / Mexican-American Spanish (celular, carro, troca).
 * Don't claim he speaks Spanish anywhere; that isn't confirmed.
 */
export const en = {
  meta: {
    title: "Arman Digital | Websites and Reels for local businesses",
  },
  langSwitch: {
    label: "Language",
  },
  nav: {
    work: "Work",
    reels: "Reels",
    prices: "Prices",
    process: "Process",
    services: "Services",
    about: "About",
    contact: "Contact",
    cta: "Get a free demo",
    /** The same button in the desktop bar, where space is tight. */
    ctaShort: "Get a free demo",
    toggleMenu: "Toggle menu",
    instagram: "Arman Digital on Instagram",
  },
  command: {
    open: "Open command menu",
    button: "Quick nav",
    title: "Quick navigation",
    description: "Jump to a section, open a live site, or get in touch.",
    placeholder: "Jump to a section, a site, or get in touch...",
    empty: "No results found.",
    groups: {
      navigate: "Navigate",
      liveSites: "Live Sites",
      contact: "Get in Touch",
      language: "Language",
    },
    sections: {
      hero: "Home",
      work: "Work",
      reels: "Reels",
      prices: "Prices",
      process: "Process",
      services: "Services",
      about: "About",
      videoWork: "Walkthrough videos",
      instagram: "Instagram",
      contact: "Contact",
    },
    call: "Call or text {phone}",
    email: "Email {email}",
    book: "Book a free 15-min call",
    instagram: "Follow on Instagram",
    /** The other language's name, shown in its own language. */
    switchTo: "Español",
    search: {
      call: "call phone text",
      email: "email",
      book: "book a call schedule",
      instagram: "instagram follow",
      switchTo: "spanish español",
      prices: "prices cost how much",
    },
  },
  hero: {
    badge: "Taking new projects",
    headline: [
      { text: "I'll", gold: false },
      { text: "build", gold: false },
      { text: "your", gold: false },
      { text: "website", gold: false },
      { text: "before", gold: true },
      { text: "you", gold: true },
      { text: "pay", gold: true },
      // One token with a non-breaking space, so "a" never ends a line on its own.
      { text: "a dime.", gold: true },
    ],
    cta: "Find a site like yours",
  },
  stats: {
    liveSites: "Live sites I built",
    videos: "Videos on this page",
    templates: "Templates used",
  },
  ticker: ["Websites", "Reels", "Free demo first", "4 Reels a month", "Car and home walkthroughs", "Logos", "Google review cards", "Flyers and business cards"],
  about: {
    photoSoon: "Photo coming soon",
  },
  services: {
    title: "What I make",
    description: "Websites and short videos for local businesses. I do all of it myself, so you talk to me the whole time.",
    askPrice: "Text me for a price",
  },
  work: {
    title: "Find a site like yours",
    description:
      "Pick your kind of business and open any of these on your phone. Most are free demos I built to show a local business what their site could look like. I'd make you one the same way.",
    filterLabel: "Show sites for",
    all: "All",
    /** Read out by screen readers after a filter change. */
    showing: "Showing {count} sites: {group}",
    open: "Open site",
    openLabel: "Open the {client} site in a new tab",
    comingSoon: "Coming soon",
    /** Button under the shortened "All" view. */
    showAll: "Show all {count} sites",
    /** Badge on the bilingual client sites. Only shown on /es. */
    bilingual: "Also in Spanish",
    previewAlt: "{title} website, top of the home page",
  },
  reels: {
    title: "Reels I made for real clients",
    description:
      "These are real Reels for businesses that paid me, plus one ad I made for myself. Most are cut from the owner's own photos and clips. When there are AI shots in one, I say so.",
    results: [
      "A wrap shop I made Reels for said people loved them.",
      "The cookie baker I made Reels for got more customers from them.",
    ],
    price: "from $40 a Reel",
    rail: "Reels",
    prev: "Previous Reels",
    next: "Next Reels",
    soundOn: "Sound on",
    tapForSound: "Tap for sound",
    playWithSound: "Play with sound: {label}",
    mute: "Mute: {label}",
    pause: "Pause: {label}",
    cta: "Text me for a free sample Reel",
    ctaNote: "Send a few photos of your work. I'll make one Reel from them for free.",
    smsBody: "Hi Arman, I saw your Reels. Can you make me a free sample one?",
  },
  prices: {
    title: "What it costs",
    description: "Starting prices, right here, so you don't have to ask. And you always see a free demo before you pay anything.",
    demoCta: "Text me for a free demo",
    smsBody: "Hi Arman, I saw your site. Can you make me a free demo?",
    addOnsTitle: "Extras I can do",
    addOnsNote: "Text me for a price on any of these.",
    flexibleTitle: "Got a different budget?",
    flexibleBody: "These are starting prices. Every business is different, so tell me what you're working with and we'll figure something out.",
    flexibleCta: "Text me your budget",
    flexibleSms: "Hi Arman, I saw your prices. My budget is about $___ for ___. What can you do?",
    askPrice: "Text me",
    newTag: "New",
    callOrText: "Call or text",
    book: "Book a free 15-min call",
    seeSites: "See the sites I've built",
  },
  testimonials: {
    title: "What their customers say",
    description:
      "Real reviews of the businesses these sites are for, from their Yelp, Google and Booksy pages. They're about the businesses, not about my work.",
  },
  videoWork: {
    title: "Car and home walkthroughs",
    description:
      "Walkthrough videos of cars, homes and Airbnbs, cut into one smooth video so they stand out more than photos do.",
    cars: "Cars",
    properties: "Homes and Airbnbs",
    prev: "Previous {label} video",
    next: "Next {label} video",
    goTo: "Go to {title}",
  },
  instagram: {
    title: "Follow the process",
    description: "New sites, Reels and how I make them, posted as I go.",
    follow: "Follow {handle}",
    profileAlt: "Arman Digital Instagram profile picture",
    posts: {
      intro: "Arman Digital brand introduction post",
      gt3: "Porsche GT3 cinematic video highlight",
      treehouse: "Dome treehouse video highlight",
      stats: "Arman Digital credibility stats card",
    },
  },
  process: {
    title: "How it works",
  },
  whoWeServe: {
    title: "Who I work with",
  },
  contact: {
    title: "Tell me about your business",
    body: "Send me a few photos of your work and tell me what you do. I'll make you a free demo and get back to you within a day.",
    text: "Text me for a free demo",
    smsBody: "Hi Arman, I saw your site. Can you make me a free demo?",
    book: "Book a free 15-min call",
    call: "Call or text",
    email: "Email",
  },
  footer: {
    instagram: "Instagram",
    rights: "All rights reserved.",
  },
};

export type Dictionary = typeof en;

export const es: Dictionary = {
  meta: {
    title: "Arman Digital | Páginas web y Reels para negocios locales",
  },
  langSwitch: {
    label: "Idioma",
  },
  nav: {
    work: "Trabajos",
    reels: "Reels",
    prices: "Precios",
    process: "Proceso",
    services: "Servicios",
    about: "Sobre mí",
    contact: "Contacto",
    cta: "Pide tu demo gratis",
    ctaShort: "Demo gratis",
    toggleMenu: "Abrir o cerrar el menú",
    instagram: "Arman Digital en Instagram",
  },
  command: {
    open: "Abrir el menú rápido",
    button: "Buscar",
    title: "Navegación rápida",
    description: "Ve a una sección, abre una página en línea o ponte en contacto.",
    placeholder: "Busca una sección o una página, o ponte en contacto...",
    empty: "No hay resultados.",
    groups: {
      navigate: "Secciones",
      liveSites: "Páginas en línea",
      contact: "Ponte en contacto",
      language: "Idioma",
    },
    sections: {
      hero: "Inicio",
      work: "Trabajos",
      reels: "Reels",
      prices: "Precios",
      process: "Proceso",
      services: "Servicios",
      about: "Sobre mí",
      videoWork: "Videos de recorrido",
      instagram: "Instagram",
      contact: "Contacto",
    },
    call: "Llama o manda texto al {phone}",
    email: "Escribe a {email}",
    book: "Agenda una llamada gratis de 15 min",
    instagram: "Sígueme en Instagram",
    switchTo: "English",
    search: {
      call: "llamar teléfono texto mensaje",
      email: "correo email",
      book: "agendar cita llamada",
      instagram: "instagram seguir",
      switchTo: "english inglés",
      prices: "precios cuánto cuesta costo",
    },
  },
  hero: {
    badge: "Tomando proyectos nuevos",
    headline: [
      { text: "Te", gold: false },
      { text: "hago", gold: false },
      { text: "tu", gold: false },
      { text: "página", gold: false },
      { text: "web", gold: false },
      { text: "antes", gold: true },
      // Non-breaking spaces keep "de que" and "un dólar" together on one line.
      { text: "de que", gold: true },
      { text: "pagues", gold: true },
      { text: "un dólar.", gold: true },
    ],
    cta: "Busca una página como la tuya",
  },
  stats: {
    liveSites: "Páginas que hice, en línea",
    videos: "Videos en esta página",
    templates: "Plantillas usadas",
  },
  ticker: ["Páginas web", "Reels", "Primero el demo gratis", "4 Reels al mes", "Recorridos de carros y casas", "Logos", "Tarjetas para reseñas de Google", "Volantes y tarjetas"],
  about: {
    photoSoon: "Foto próximamente",
  },
  services: {
    title: "Lo que hago",
    description: "Páginas web y videos cortos para negocios locales. Todo lo hago yo, así que hablas conmigo de principio a fin.",
    askPrice: "Mándame un texto y te digo el precio",
  },
  work: {
    title: "Busca una página como la tuya",
    description:
      "Escoge tu tipo de negocio y abre cualquiera en tu celular. La mayoría son demos gratis que hice para enseñarle a un negocio de aquí cómo se vería su página. A ti te hago uno igual.",
    filterLabel: "Ver páginas de",
    all: "Todas",
    showing: "Mostrando {count} páginas: {group}",
    open: "Abrir la página",
    openLabel: "Abrir la página de {client} en otra pestaña",
    comingSoon: "Muy pronto",
    showAll: "Ver las {count} páginas",
    bilingual: "También en español",
    previewAlt: "Página web de {title}, la parte de arriba del inicio",
  },
  reels: {
    title: "Reels que hice para clientes reales",
    description:
      "Son Reels de verdad para negocios que me pagaron, más un anuncio que hice para mí. Casi todos salen de las fotos y videos del mismo dueño. Si un Reel trae tomas con IA, te lo digo.",
    results: [
      "Un taller de wraps para el que hice Reels me dijo que a la gente le encantaron.",
      "La repostera para la que hice Reels consiguió más clientes con ellos.",
    ],
    price: "desde $40 por Reel",
    rail: "Reels",
    prev: "Reels anteriores",
    next: "Más Reels",
    soundOn: "Con sonido",
    tapForSound: "Toca para oír",
    playWithSound: "Ver con sonido: {label}",
    mute: "Quitar el sonido: {label}",
    pause: "Pausar: {label}",
    cta: "Pídeme un Reel de muestra gratis",
    ctaNote: "Mándame unas fotos de tu trabajo y te hago un Reel gratis con ellas.",
    smsBody: "Hola Arman, vi tus Reels. ¿Me puedes hacer uno de muestra gratis?",
  },
  prices: {
    title: "Lo que cuesta",
    description: "Mis precios base, aquí mismo, para que no tengas que preguntar. Y siempre ves un demo gratis antes de pagar algo.",
    demoCta: "Pídeme un demo gratis",
    smsBody: "Hola Arman, vi tu página. ¿Me puedes hacer un demo gratis?",
    addOnsTitle: "Extras que también hago",
    addOnsNote: "Mándame un texto y te digo el precio de cualquiera.",
    flexibleTitle: "¿Tienes otro presupuesto?",
    flexibleBody: "Estos son precios base. Cada negocio es diferente, así que dime con cuánto cuentas y lo arreglamos.",
    flexibleCta: "Mándame tu presupuesto",
    flexibleSms: "Hola Arman, vi tus precios. Tengo como $___ para ___. ¿Qué me puedes hacer?",
    askPrice: "Pregúntame",
    newTag: "Nuevo",
    callOrText: "Llama o manda texto",
    book: "Llamada gratis de 15 min",
    seeSites: "Ver las páginas que he hecho",
  },
  testimonials: {
    title: "Lo que dicen sus clientes",
    description:
      "Reseñas reales de los negocios de estas páginas, sacadas de su Yelp, Google y Booksy. Hablan de los negocios, no de mi trabajo. Están en su idioma original.",
  },
  videoWork: {
    title: "Recorridos de carros y casas",
    description: "Videos de recorrido de carros, casas y Airbnbs, editados en un solo video para que destaquen más que en fotos.",
    cars: "Carros",
    properties: "Casas y Airbnb",
    prev: "Video anterior de {label}",
    next: "Siguiente video de {label}",
    goTo: "Ir a {title}",
  },
  instagram: {
    title: "Sigue el proceso",
    description: "Páginas nuevas, Reels y cómo los hago, publicado conforme van saliendo.",
    follow: "Seguir a {handle}",
    profileAlt: "Foto de perfil de Arman Digital en Instagram",
    posts: {
      intro: "Publicación de presentación de Arman Digital",
      gt3: "Video cinematográfico del Porsche GT3",
      treehouse: "Video de la casa del árbol con domo",
      stats: "Tarjeta con los números de Arman Digital",
    },
  },
  process: {
    title: "Cómo funciona",
  },
  whoWeServe: {
    title: "Con quién trabajo",
  },
  contact: {
    title: "Cuéntame de tu negocio",
    body: "Mándame unas fotos de tu trabajo y cuéntame qué haces. Te hago un demo gratis y te contesto en menos de un día.",
    text: "Pídeme un demo gratis",
    smsBody: "Hola Arman, vi tu página. ¿Me puedes hacer un demo gratis?",
    book: "Llamada gratis de 15 min",
    call: "Llama o manda texto",
    email: "Correo",
  },
  footer: {
    instagram: "Instagram",
    rights: "Todos los derechos reservados.",
  },
};

const dictionaries: Record<Lang, Dictionary> = { en, es };

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}
