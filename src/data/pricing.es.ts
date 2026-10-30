import type { AddOns, Pricing } from "./pricing";

/** Spanish version of pricing.ts, same shape, same numbers. `showPrices` always comes from the English file. */
export const pricingEs: Pricing = {
  from: "desde",
  demo: {
    price: "Gratis",
    title: "Primero, un demo",
    body: "Te hago un demo de una página o un Reel con tus propias fotos antes de que pagues algo. Lleva marca de agua hasta que lo compres.",
  },
  reels: {
    title: "Reels",
    items: [
      { id: "one", price: "$40", title: "1 Reel", detail: "El archivo limpio y una portada." },
      { id: "three", price: "$99", title: "3 Reels", detail: "2 rondas de cambios." },
      {
        id: "monthly",
        price: "$129",
        per: "al mes",
        title: "4 Reels al mes",
        detail: "Cancelas cuando quieras.",
        best: "El mejor precio por Reel",
      },
    ],
    note: "Los videos se pagan antes de mandarte los archivos limpios.",
  },
  website: {
    title: "Una página web",
    price: "$1,000",
    lines: [
      "$300 para empezar, y el resto cuando ya esté en línea y te guste.",
      "$100 al mes solo si quieres que yo la hospede y la mantenga al día. Eso es opcional.",
    ],
    starter: {
      title: "¿Solo necesitas una página?",
      price: "$299",
      per: "+ $25/mes de hosting",
      line: "Tus servicios, precios, fotos y un botón para llamar o mandar texto. Si después quieres la página completa, los $299 cuentan.",
    },
  },
};

export const addOnItemsEs: AddOns["items"] = [
  {
    id: "review-texter",
    title: "Textos para reseñas",
    detail: "Después de cada trabajo, tu cliente recibe un texto con tu link de reseñas de Google. Tú tocas un botón y ellos escriben la reseña.",
    price: "$99 + $29/mes",
    isNew: true,
  },
  {
    id: "chat-helper",
    title: "Chat para tu página",
    detail: "Un chat con IA en tu página que contesta con tus precios y horario reales, en inglés o español, y te manda los datos del cliente.",
    price: "$99 + $25/mes",
    isNew: true,
  },
  {
    id: "google-profile",
    title: "Perfil de Google Business: lo creo y lo arreglo",
    detail: "Tu horario, fotos, servicios y teléfono, bien puestos, para que la gente cerca te encuentre en Maps.",
    price: "$99",
  },
  {
    id: "review-qr",
    title: "Tarjetas QR para reseñas de Google",
    detail: "Una tarjeta para el mostrador o una calcomanía. Tus clientes la escanean y caen directo en tus reseñas de Google.",
    price: "$49",
  },
  {
    id: "marketplace-photos",
    title: "Fotos para tus anuncios de Marketplace",
    detail: "Una portada con tus precios y 4 imágenes más para tus anuncios. Las usas cada vez que vuelves a publicar.",
    price: "$49",
  },
  {
    id: "print",
    title: "Volantes, colgantes para puertas y tarjetas de presentación",
    detail: "Archivos listos para imprimir, con tu logo y tus colores. $59 cada uno, o los 3 por $99.",
    price: "$59",
  },
  {
    id: "logo",
    title: "Logo",
    detail: "Un logo que se vea bien en tu letrero, tu troca y tu Instagram.",
    price: "$149",
  },
  {
    id: "holiday",
    title: "Paquete de temporada (nov a dic)",
    detail: "2 Reels navideños y un póster de \"pide antes del...\" para tus historias y tu mostrador.",
    price: "$79",
  },
  {
    id: "newsletter",
    title: "Correo para tus clientes (newsletter)",
    detail: "Solo para clientes que se apuntan. Por ejemplo, tu menú de la semana o tus ofertas.",
    price: "",
  },
];
