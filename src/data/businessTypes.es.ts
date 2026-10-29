import type { process } from "./businessTypes";

/** Spanish versions of businessTypes.ts, same shape and order. */
export const businessTypesEs: string[] = [
  "Contratistas y servicios para la casa",
  "Talleres de wraps, polarizado y PPF",
  "Restaurantes, cafés y taquerías",
  "Reposterías y postres",
  "Meal prep",
  "Salones, barberías y uñas",
  "Talleres mecánicos y llanteras",
  "Guarderías",
  "Boutiques y tiendas",
  "Agencias y vendedores de carros",
  "Realtors y anfitriones de Airbnb",
  "Gimnasios",
];

export const processEs: typeof process = [
  {
    title: "Demo gratis",
    description: "Te hago un demo gratis con tus propias fotos. Una página o un Reel.",
  },
  {
    title: "Lo revisas",
    description: "Lo ves en tu celular. Si te gusta, los precios están aquí arriba. Si no, no me debes nada.",
  },
  {
    title: "Pagas para empezar",
    description:
      "$300 para empezar una página. Los videos se pagan antes de mandarte los archivos limpios. Luego la termino con tus cambios.",
  },
  {
    title: "Sale en línea",
    description: "Tu página sale en línea. Si quieres, yo la mantengo al día por $100 al mes.",
  },
];
