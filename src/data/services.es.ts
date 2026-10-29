import type { Service } from "./services";

/** Spanish version of services.ts, same ids, order, shape and prices. */
export const servicesEs: Service[] = [
  {
    id: "websites",
    title: "Páginas web",
    description:
      "Te hago tu página desde cero con tus fotos, tus precios y tus reseñas reales. Está hecha primero para el celular, porque ahí es donde te buscan tus clientes, y te pueden llamar o mandar texto con un toque.",
    bullets: ["Sin plantillas", "Hecha primero para el celular", "Llamar, mandar texto o hacer cita con un toque", "Yo configuro el hosting y la publico"],
    price: "desde $1,000",
  },
  {
    id: "reels",
    title: "Reels para tu negocio",
    description:
      "Videos cortos para Instagram, TikTok y Facebook, hechos con tus propias fotos y videos. Si no tienes mucho material, le puedo meter tomas con IA, y siempre te digo qué partes son IA.",
    bullets: ["Tus fotos y videos", "Con texto y música", "Una portada para tu perfil", "Listo para publicar"],
    price: "desde $40 por Reel",
  },
  {
    id: "monthly",
    title: "4 Reels al mes",
    description:
      "Un Reel nuevo cada semana para que tu página no se quede callada. Me mandas fotos cuando tengas y yo hago lo demás.",
    bullets: ["Un Reel nuevo por semana", "Cancelas cuando quieras", "El mejor precio por Reel"],
    price: "desde $129 al mes",
  },
  {
    id: "review-texter",
    title: "Textos para reseñas",
    description:
      "Después de cada trabajo, tu cliente recibe un texto con tu link de reseñas de Google. Tú tocas un botón en tu celular y ellos escriben la reseña con sus propias palabras. A todos les llega el mismo texto, así se cumplen las reglas de Google.",
    bullets: ["Un toque después de cada trabajo", "Máximo un recordatorio", "Responder STOP siempre funciona"],
    price: "desde $99 + $29 al mes",
  },
  {
    id: "chat-helper",
    title: "Chat para tu página",
    description:
      "Un chat en tu página que contesta preguntas a las 11 de la noche con tus precios, horario y servicios reales, en inglés o español. Cuando alguien está listo, te lo manda a ti. Dice que es IA y nunca inventa un precio.",
    bullets: ["Contesta con tu información real", "Inglés y español", "Te manda al cliente"],
    price: "desde $99 + $25 al mes",
  },
  {
    id: "walkthroughs",
    title: "Videos de recorrido de carros y casas",
    description:
      "Un recorrido limpio de un carro o de un lugar, grabado y editado para que destaque más que en fotos. Para agencias, gente que vende su carro, anfitriones de Airbnb y realtors.",
    bullets: ["Por dentro y por fuera", "Editado en un solo video", "Listo para Marketplace, anuncios e Instagram"],
  },
  {
    id: "branding",
    title: "Logo e imagen de marca",
    description: "Un logo y unos colores que se vean bien en tu letrero, tu troca y tu Instagram.",
    bullets: ["Logo a la medida", "Colores y tipografía", "Archivos para imprimir y para la web"],
    price: "desde $149",
  },
];
