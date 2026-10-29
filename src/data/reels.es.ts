import type { Reel } from "./reels";

/** Spanish captions for reels.ts, keyed by id. Files, order and the Spanish cuts (slugEs) come from reels.ts. */
export const reelsEs: Record<string, Pick<Reel, "business" | "what" | "source">> = {
  "hellcat-matte-black": {
    business: "Taller de wraps en Richmond",
    what: "Wrap negro mate en un Hellcat blanco",
    source: "Su video + tomas con IA",
  },
  "cookies-the-pull": {
    business: "Repostera de galletas en Elk Grove",
    what: "Galletas rellenas estilo Nueva York, partidas a la mitad",
    source: "Sus fotos + movimiento con IA",
  },
  "meal-prep-offer": {
    business: "Meal prep en Hayward",
    what: "Su oferta de la semana. La hice en español y en inglés",
    source: "Su video + tomas con IA",
  },
  "tesla-ppf": {
    business: "Taller de wraps en Richmond",
    what: "Anuncio de PPF para Tesla en el Golden Gate",
    source: "Hecho con IA",
  },
  "cookies-thirteen-flavors": {
    business: "Repostera de galletas en Elk Grove",
    what: "Sus 13 sabores, uno por uno",
    source: "Sus fotos + movimiento con IA",
  },
  "camry-black-roof": {
    business: "Taller de wraps en Richmond",
    what: "PPF negro en el techo y los pilares de un Camry, antes y después",
    source: "Sus fotos",
  },
  "meal-prep-how-to-order": {
    business: "Meal prep en Hayward",
    what: "Cómo pedir, contado como un chat por DM",
    source: "Mi animación + su foto",
  },
  "arman-digital-cursor": {
    business: "Arman Digital (o sea, yo)",
    what: "Un anuncio que hice para mi propio negocio",
    source: "Mi propio anuncio",
  },
};
