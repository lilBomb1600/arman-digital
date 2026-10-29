/**
 * "How it works" for the two newer add-ons (review texter, chat helper), shown under the extras in the Prices section.
 * Arman (2026-10-29): no live demo of either on the portfolio, just a plain explanation that shows it's done right.
 * The examples use a made-up business so no real client is named. Prices must match pricing.ts.
 */
export type HowItWorksItem = {
  id: string;
  title: string;
  price: string;
  steps: string[];
  rules: string;
  example: { label: string; lines: { from: "them" | "you"; text: string }[] };
};

export type HowItWorks = { title: string; items: HowItWorksItem[] };

export const howItWorks: HowItWorks = {
  title: "How the two new ones work",
  items: [
    {
      id: "review-texter",
      title: "Review texter",
      price: "from $99 + $29/mo",
      steps: [
        "You finish a job and tap one button on your phone.",
        "Your customer gets one text from your business: a thank you and your Google review link.",
        "They write the review on Google themselves, in their own words.",
      ],
      rules:
        "Every customer gets the same text, there are no discounts for reviews, and replying STOP always works. That's how Google and the phone carriers want it, and that's how I set it up. Getting your number approved by the carriers takes about 1 to 2 weeks.",
      example: {
        label: "Example text",
        lines: [
          {
            from: "them",
            text: "Hi Maria, thanks for choosing Sunrise Tile & Stone! Mind sharing how your backsplash went? g.page/r/…/review Reply STOP to opt out.",
          },
        ],
      },
    },
    {
      id: "chat-helper",
      title: "Chat helper",
      price: "from $99 + $25/mo",
      steps: [
        "A chat bubble sits on your website.",
        "People ask about your prices, hours or services any time, in English or Spanish. It answers only from your real info.",
        "When they're ready, it hands them to you by text or call with their question already written.",
      ],
      rules:
        "It says it's an AI, never makes up a price or a date, and we don't save the chats. Once your site is live, it takes about a day to set up.",
      example: {
        label: "Example chat",
        lines: [
          { from: "you", text: "Are you open Sunday?" },
          { from: "them", text: "Yes, Sundays 9 to 3. Want to place an order? I can write it up and you send it to us by text." },
        ],
      },
    },
  ],
};

export const howItWorksEs: HowItWorks = {
  title: "Cómo funcionan los dos nuevos",
  items: [
    {
      id: "review-texter",
      title: "Textos para reseñas",
      price: "desde $99 + $29/mes",
      steps: [
        "Terminas un trabajo y tocas un botón en tu celular.",
        "A tu cliente le llega un texto de tu negocio: las gracias y tu link de reseñas de Google.",
        "Ellos escriben la reseña en Google, con sus propias palabras.",
      ],
      rules:
        "A todos los clientes les llega el mismo texto, no hay descuentos a cambio de reseñas y responder STOP siempre funciona. Así lo piden Google y las compañías de teléfono, y así lo configuro. Que aprueben tu número tarda de 1 a 2 semanas.",
      example: {
        label: "Ejemplo de texto",
        lines: [
          {
            from: "them",
            text: "Hola María, ¡gracias por elegir Sunrise Tile & Stone! ¿Nos cuentas cómo te quedó tu backsplash? g.page/r/…/review Responde STOP para no recibir más.",
          },
        ],
      },
    },
    {
      id: "chat-helper",
      title: "Chat para tu página",
      price: "desde $99 + $25/mes",
      steps: [
        "Un chat aparece en tu página web.",
        "La gente pregunta por tus precios, horario o servicios a cualquier hora, en inglés o español. Contesta solo con tu información real.",
        "Cuando están listos, te los manda a ti por texto o llamada con su pregunta ya escrita.",
      ],
      rules:
        "Dice que es IA, nunca inventa un precio ni una fecha y no guardamos los chats. Cuando tu página ya está en línea, se instala en más o menos un día.",
      example: {
        label: "Ejemplo de chat",
        lines: [
          { from: "you", text: "¿Abren el domingo?" },
          { from: "them", text: "Sí, los domingos de 9 a 3. ¿Quieres hacer un pedido? Te lo dejo escrito y nos lo mandas por texto." },
        ],
      },
    },
  ],
};
