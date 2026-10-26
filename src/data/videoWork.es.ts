import type { VideoCaseStudy } from "./videoWork";

/**
 * Spanish copy for the video case studies, keyed by the id in videoWork.ts. Video files, posters, groups and
 * order all come from videoWork.ts; any id missing here falls back to English.
 */
export const videoWorkEs: Record<string, Pick<VideoCaseStudy, "category" | "title" | "description" | "deliverables">> = {
  "house-walkthrough": {
    category: "Video de recorrido de casa",
    title: "Casa moderna minimalista",
    description:
      "Un recorrido completo de la propiedad: la entrada, el fogatero del patio, la terraza en la azotea y el jardín, la sala, la cocina, el comedor, el pasillo, el cuarto de lavado, la recámara y el baño, todo en un solo recorrido cinematográfico.",
    deliverables: ["Exterior e interior completos", "Tomas del fogatero y la terraza", "Cada cuarto, en un solo video", "Listo para anuncios y redes"],
  },
  "lexus-es350": {
    category: "Video de recorrido de carro",
    title: "2025 Lexus ES 350",
    description:
      "Una vuelta completa de 360° por fuera y luego un recorrido por la cabina: volante, tablero, consola y asientos de atrás, todo en un solo video. Hecho para anuncios, Marketplace y redes.",
    deliverables: ["Vuelta exterior de 360°", "Recorrido por la cabina", "Editado en un solo video", "Listo para anuncios y redes"],
  },
  "porsche-911-gt3": {
    category: "Video de recorrido de carro",
    title: "2022 Porsche 911 GT3",
    description:
      "Una vuelta completa de 360° por fuera del GT3 992 y luego un recorrido por dentro: el tablero de instrumentos, la palanca de cambios manual y la jaula antivuelco, todo en un solo video. Hecho para anuncios, Marketplace y redes.",
    deliverables: ["Vuelta exterior de 360°", "Recorrido por la cabina", "Editado en un solo video", "Listo para anuncios y redes"],
  },
  "lexus-ls430": {
    category: "Video de recorrido de carro",
    title: "2005 Lexus LS 430",
    description:
      "Una vuelta completa de 360° por fuera, tomas de cerca de los rines y el escape, y luego un recorrido por dentro de adelante hacia atrás: tablero, consola, asientos de adelante y de atrás, quemacocos y cajuela, todo en un solo video. Hecho para anuncios, Marketplace y redes.",
    deliverables: ["Vuelta exterior de 360°", "Tomas de cerca de rines y escape", "Interior de adelante y de atrás", "Listo para anuncios y redes"],
  },
  "porsche-cayenne-turbo": {
    category: "Video de recorrido de carro",
    title: "2026 Porsche Cayenne Turbo Electric",
    description:
      "Tomas de cerca por fuera (los rines, los emblemas Turbo y las puertas) y luego un recorrido por la cabina roja con negro, el quemacocos panorámico y la cajuela, todo en un solo video. Hecho para anuncios, Marketplace y redes.",
    deliverables: ["Tomas de detalle por fuera", "Recorrido por la cabina", "Editado en un solo video", "Listo para anuncios y redes"],
  },
  "porsche-carrera-s": {
    category: "Video de recorrido de carro",
    title: "2008 Porsche 911 Carrera S",
    description:
      "Tomas de cerca por fuera (los rines, el perfil, los cuatro escapes y el emblema Carrera S) y luego un recorrido por la cabina color arena, el quemacocos y los asientos de atrás, todo en un solo video. Hecho para anuncios, Marketplace y redes.",
    deliverables: ["Tomas de detalle por fuera", "Recorrido por la cabina", "Editado en un solo video", "Listo para anuncios y redes"],
  },
  "dome-treehouse": {
    category: "Video de recorrido de Airbnb",
    title: "Casa del árbol con domo geodésico",
    description:
      "Un domo en la ladera de un cerro en Lafayette, CA: el exterior al atardecer, la sala y la cocina del domo, las dos recámaras del domo, la sala y los baños de la casa principal, la vista del valle desde la terraza, el jacuzzi y las áreas de recreación, todo en un solo recorrido cinematográfico.",
    deliverables: ["Exterior e interior completos", "Cada cuarto y cada área de afuera", "Editado en un solo video", "Listo para el anuncio y las redes"],
  },
  "tuscan-villa-suite": {
    category: "Video de recorrido de Airbnb",
    title: "Tuscan Villa Suite",
    description:
      "El patio con vista al mar de Tuscan Villa Suite en Pacifica, CA, un pueblo de la costa justo al sur de San Francisco, grabado en una sola toma a la hora dorada, desde la sala hasta el patio frente al Pacífico.",
    deliverables: ["Patio con vista al mar a la hora dorada", "Una sola toma cinematográfica", "En la costa de Pacifica, CA", "Listo para el anuncio y las redes"],
  },
};
