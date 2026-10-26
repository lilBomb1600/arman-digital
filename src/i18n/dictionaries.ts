import type { Lang } from "./config";

/**
 * Every short UI string on the site, in English and Spanish. `es` is typed as `Dictionary` (the shape of `en`),
 * so TypeScript fails the build if a key is missing or misspelled on either side.
 *
 * To change a string: edit it here in both objects. {curly} placeholders are filled in by `fill()` from
 * ./config.ts, so keep them as they are. Longer prose (about, services, work cards, video work, process,
 * business types) lives next to the English data in src/data/*.es.ts.
 *
 * Spanish voice: Arman talking, "tú", short and plain, US / Mexican-American Spanish (celular, carro, cotización).
 * Don't claim he speaks Spanish anywhere; that isn't confirmed.
 */
export const en = {
  meta: {
    title: "Arman Digital — Websites & Cinematic Media for Local Businesses",
  },
  langSwitch: {
    label: "Language",
  },
  nav: {
    about: "About",
    services: "Services",
    work: "Work",
    process: "Process",
    contact: "Contact",
    cta: "Start a Project",
    toggleMenu: "Toggle menu",
    instagram: "Arman Digital on Instagram",
  },
  command: {
    open: "Open command menu",
    button: "Quick nav",
    title: "Quick navigation",
    description: "Jump to a section, visit a live project, or get in touch.",
    placeholder: "Jump to a section, project, or get in touch...",
    empty: "No results found.",
    groups: {
      navigate: "Navigate",
      liveSites: "Live Sites",
      contact: "Get in Touch",
      language: "Language",
    },
    sections: {
      hero: "Home",
      about: "About",
      services: "Services",
      work: "Work",
      videoWork: "Video Work",
      instagram: "Instagram",
      process: "Process",
      contact: "Contact",
    },
    call: "Call or text {phone}",
    email: "Email {email}",
    book: "Book a free 15-min call",
    instagram: "Follow on Instagram",
    /** The other language's name, shown in its own language. */
    switchTo: "Español",
    search: {
      call: "call phone",
      email: "email",
      book: "book a call schedule",
      instagram: "instagram follow",
      switchTo: "spanish español",
    },
  },
  hero: {
    badge: "Now booking new projects",
    headline: [
      { text: "Websites", gold: false },
      { text: "&", gold: false },
      { text: "cinematic", gold: true },
      { text: "media", gold: true },
      { text: "for", gold: false },
      { text: "businesses", gold: false },
      { text: "that", gold: false },
      { text: "mean", gold: false },
      { text: "business.", gold: false },
    ],
    cta: "See the Work",
  },
  stats: {
    liveSites: "Live Sites Shipped",
    videos: "Cinematic Videos Produced",
    custom: "Custom-Built, No Templates",
  },
  ticker: ["Websites", "Cinematic Video", "Car Walkarounds", "Airbnb Walkthroughs", "Brand Identity", "Local Businesses"],
  about: {
    photoSoon: "Photo coming soon",
  },
  services: {
    title: "Full-service creative, without the agency overhead",
    description: "One person, direct communication, real craft — from your website to the video that sells it.",
  },
  work: {
    title: "A look at what's already live",
    description: "Real projects, built for real businesses — this is what your site could look like.",
    live: "Live",
    visit: "Visit Live Site",
    /** Badge on the bilingual client sites. Only shown on /es. */
    bilingual: "Also in Spanish",
    previewAlt: "{title} website, top of the home page",
    previewLive: "{title}, live",
  },
  testimonials: {
    title: "The businesses are real. So are their customers.",
    description:
      "These aren't reviews of my work — they're what real customers say about the real businesses behind each site. That's the whole point: the design is only as good as the trust already earned.",
  },
  videoWork: {
    title: "Cinematic video, not just websites",
    description:
      "Real walkthroughs, shot and edited to make a property or vehicle stand out — not just photos, and not just a website.",
    cars: "Cars",
    properties: "Properties & Airbnb",
    prev: "Previous {label} video",
    next: "Next {label} video",
    goTo: "Go to {title}",
  },
  instagram: {
    title: "Follow the process",
    description: "Behind-the-scenes builds, cinematic clips, and new sites going live — posted as they happen.",
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
    title: "Simple, direct, no runaround",
  },
  whoWeServe: {
    title: "Built for businesses that live in the real world",
  },
  contact: {
    title: "Got a business that deserves to look this good?",
    body: "Reach out and tell me a bit about your business — I'll get back to you within a day.",
    book: "Book a Free 15-Min Call",
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
    title: "Arman Digital — Páginas web y video cinematográfico para negocios locales",
  },
  langSwitch: {
    label: "Idioma",
  },
  nav: {
    about: "Sobre mí",
    services: "Servicios",
    work: "Trabajos",
    process: "Proceso",
    contact: "Contacto",
    cta: "Empecemos",
    toggleMenu: "Abrir o cerrar el menú",
    instagram: "Arman Digital en Instagram",
  },
  command: {
    open: "Abrir el menú rápido",
    button: "Buscar",
    title: "Navegación rápida",
    description: "Ve a una sección, abre un proyecto en línea o ponte en contacto.",
    placeholder: "Busca una sección o un proyecto, o ponte en contacto...",
    empty: "No hay resultados.",
    groups: {
      navigate: "Secciones",
      liveSites: "Páginas en línea",
      contact: "Ponte en contacto",
      language: "Idioma",
    },
    sections: {
      hero: "Inicio",
      about: "Sobre mí",
      services: "Servicios",
      work: "Trabajos",
      videoWork: "Videos",
      instagram: "Instagram",
      process: "Proceso",
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
    },
  },
  hero: {
    badge: "Ya estoy tomando proyectos nuevos",
    headline: [
      { text: "Páginas", gold: false },
      { text: "web", gold: false },
      { text: "y", gold: false },
      { text: "videos", gold: true },
      // "de cine" is one token with a non-breaking space, so "de" never ends a line on its own.
      { text: "de cine", gold: true },
      { text: "para", gold: false },
      { text: "negocios", gold: false },
      { text: "que", gold: false },
      { text: "van", gold: false },
      { text: "en", gold: false },
      { text: "serio.", gold: false },
    ],
    cta: "Ver los trabajos",
  },
  stats: {
    liveSites: "Páginas web publicadas",
    videos: "Videos con calidad de cine",
    custom: "A la medida, sin plantillas",
  },
  ticker: ["Páginas web", "Video cinematográfico", "Recorridos de carros", "Recorridos de Airbnb", "Identidad de marca", "Negocios locales"],
  about: {
    photoSoon: "Foto próximamente",
  },
  services: {
    title: "Todo lo creativo, sin los costos de una agencia",
    description: "Una sola persona, trato directo y trabajo bien hecho, desde tu página web hasta el video que vende tu negocio.",
  },
  work: {
    title: "Mira lo que ya está en línea",
    description: "Proyectos reales para negocios reales. Así podría verse tu página web.",
    live: "En línea",
    visit: "Ver la página",
    bilingual: "También en español",
    previewAlt: "Página web de {title}, la parte de arriba del inicio",
    previewLive: "{title}, en línea",
  },
  testimonials: {
    title: "Los negocios son reales. Sus clientes también.",
    description:
      "Estas no son reseñas de mi trabajo. Es lo que clientes reales dicen de los negocios reales detrás de cada página web. De eso se trata: un diseño vale lo que vale la confianza que el negocio ya se ganó. Las reseñas están en su idioma original.",
  },
  videoWork: {
    title: "Video cinematográfico, no solo páginas web",
    description:
      "Recorridos reales, grabados y editados para que una propiedad o un carro destaque. No solo fotos, y no solo una página web.",
    cars: "Carros",
    properties: "Propiedades y Airbnb",
    prev: "Video anterior de {label}",
    next: "Siguiente video de {label}",
    goTo: "Ir a {title}",
  },
  instagram: {
    title: "Sigue el proceso",
    description:
      "Cómo se arma cada proyecto, clips cinematográficos y páginas web nuevas que van saliendo, todo publicado en el momento.",
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
    title: "Simple, directo y sin vueltas",
  },
  whoWeServe: {
    title: "Hecho para negocios del mundo real",
  },
  contact: {
    title: "¿Tienes un negocio que merece verse así de bien?",
    body: "Escríbeme y cuéntame un poco de tu negocio. Te contesto en menos de un día.",
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
