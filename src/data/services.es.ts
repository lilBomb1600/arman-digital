import type { Service } from "./services";

/** Spanish version of services.ts, same ids, order and shape. */
export const servicesEs: Service[] = [
  {
    id: "websites",
    title: "Diseño y desarrollo de páginas web",
    description:
      "Páginas web hechas a la medida para negocios locales: rápidas, pensadas para el celular y hechas para convertir visitas en clientes, no solo para verse bonitas.",
    bullets: [
      "Diseño a la medida, sin plantillas",
      "Optimizada para celular y SEO",
      "Menú, citas y contacto incluidos",
      "Configuración de hosting y lanzamiento gratis",
    ],
  },
  {
    id: "video",
    title: "Producción de video cinematográfico",
    description:
      "Videos de marca y de publicidad grabados y editados con ojo de cine. El tipo de video que hace que un negocio se vea de primera desde que alguien le da play.",
    bullets: ["Videos de marca y publicidad", "Videos de productos y promociones", "Versiones listas para redes (Reels, TikTok, YouTube)"],
  },
  {
    id: "airbnb",
    title: "Videos de recorrido para Airbnb",
    description:
      "Recorridos cinematográficos que muestran tu renta de corto plazo como ninguna foto puede, para que tu anuncio destaque y se reserve más rápido.",
    bullets: ["Recorrido completo de la propiedad", "Tomas con dron donde se pueda", "Editado para el anuncio y las redes"],
  },
  {
    id: "auto",
    title: "Videos de recorrido de carros",
    description:
      "Videos cinematográficos de recorrido en 360° para agencias y vendedores particulares, hechos para que el carro destaque en el lote y en internet.",
    bullets: [
      "Recorrido completo por dentro y por fuera",
      "Detalles y funciones destacados",
      "Listo para Marketplace, Instagram y páginas web de agencias",
    ],
  },
  {
    id: "branding",
    title: "Logo e identidad de marca",
    description:
      "Un logo y una identidad visual que se ven igual de bien en el letrero de tu local que en la pantalla de un celular.",
    bullets: ["Diseño de logo a la medida", "Sistema de colores y tipografía", "Material de marca para imprimir y para la web"],
  },
];
