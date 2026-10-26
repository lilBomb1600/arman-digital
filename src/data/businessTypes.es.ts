import type { process } from "./businessTypes";

/** Spanish versions of businessTypes.ts, same shape and order. */
export const businessTypesEs: string[] = [
  "Restaurantes y cafés",
  "Bienes raíces y anfitriones de Airbnb",
  "Agencias y vendedores de carros",
  "Salones y spas",
  "Gimnasios y estudios de fitness",
  "Contratistas y servicios para el hogar",
  "Tiendas y boutiques",
  "Servicios profesionales",
];

export const processEs: typeof process = [
  {
    title: "Llamada para conocernos",
    description:
      "Una llamada rápida para conocer tu negocio, tus metas y lo que de verdad necesitas. Sin palabras raras y sin presión.",
  },
  {
    title: "Diseño y desarrollo",
    description: "Recibes un diseño a la medida hecho con tu contenido real: tu menú, tus fotos, tu historia y tus reseñas.",
  },
  {
    title: "Lanzamiento",
    description: "Tu página sale en línea: carga rápido, se ve bien en el celular y queda lista para mandarle clientes.",
  },
  {
    title: "Apoyo continuo",
    description:
      "¿Necesitas un cambio, una foto nueva o un precio nuevo? Nomás me llamas. No te entrego la página y desaparezco.",
  },
];
