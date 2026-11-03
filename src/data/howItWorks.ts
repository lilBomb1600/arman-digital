/**
 * "How it works" for the newer add-ons, shown under the extras in the Prices section. Review texter and chat helper
 * came first (2026-10-29); phone receptionist, booking calendar, follow-up and Meta ads were added on 2026-11-03.
 * Arman: no live demo of any of them on the portfolio, just a plain explanation that shows it's done right.
 * No promised results (sales, calls, bookings), and the Meta ad budget is always shown as the owner's own cost.
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
  title: "How the new ones work",
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
    {
      id: "phone-receptionist",
      title: "Phone receptionist",
      price: "from $299 + $99/mo",
      steps: [
        "When you're on a job and can't pick up, it answers the call instead of voicemail.",
        "It answers in English or Spanish with your hours, prices and how to book, only from the info you gave me.",
        "It takes the caller's name, number and what they need, and texts it to you right away.",
      ],
      rules:
        "It tells every caller it's an automated assistant, and it never makes up a price or a date. Call minutes are extra, at what they cost me. Your number has to be registered with the phone carriers first, and that usually needs your EIN.",
      example: {
        label: "Example call",
        lines: [
          { from: "them", text: "Thanks for calling Sunrise Tile & Stone. This is the automated assistant, Ray's on a job right now. How can I help?" },
          { from: "you", text: "Can someone come look at my bathroom floor this week?" },
          { from: "them", text: "Sure. Can I get your name and number? I'll text them to Ray so he can call you back." },
        ],
      },
    },
    {
      id: "booking-calendar",
      title: "Booking calendar",
      price: "from $99 + $15/mo",
      steps: [
        "A Book button goes on your website and your Google profile.",
        "Customers pick a time you're really free, so you don't get two people at once.",
        "They get a reminder before the appointment, and it shows up in your phone's calendar.",
      ],
      rules:
        "You set your hours and how long each appointment takes, so nobody books you at 6am. It's the same kind of booking I use on this page for calls.",
      example: {
        label: "Example reminder",
        lines: [
          {
            from: "them",
            text: "Hi Maria, reminder from Sunrise Tile & Stone: your estimate is tomorrow at 10am. Need a different time? cal.com/… Reply STOP to opt out.",
          },
        ],
      },
    },
    {
      id: "follow-up",
      title: "Lead list and follow-up",
      price: "from $199 + $49/mo",
      steps: [
        "Everyone who reaches out from your site, your ads, Instagram or a missed call goes into one list on your phone.",
        "If someone asked for a quote and went quiet, they get a friendly follow-up text from your business.",
        "After the job they get your review link, and once a week you get a short summary of who's new and who's waiting on you.",
      ],
      rules:
        "Texts only go to people who reached out to you first, every one says Reply STOP, and you can turn off any follow-up. It works with the review texter and chat helper if you already have them.",
      example: {
        label: "Example follow-up",
        lines: [
          {
            from: "them",
            text: "Hi James, it's Sunrise Tile & Stone. Still thinking about the bathroom floor? Happy to answer any questions. Reply STOP to opt out.",
          },
        ],
      },
    },
    {
      id: "meta-ads",
      title: "Facebook and Instagram ads",
      price: "from $199/mo + your ad budget",
      steps: [
        "You add me as a partner in your Meta Business account. I never need your password.",
        "I make the ads from your own Reels and photos and show them to people near you.",
        "Every month you get a short report: what you spent, and how many people clicked, messaged or called.",
      ],
      rules:
        "Your ad budget is separate from my fee. You pay Meta directly on your own card, and you pick the amount. A lot of small shops start around $5 to $20 a day. Nobody can promise sales from ads, so I don't. I set them up right, keep an eye on them and show you the numbers.",
      example: {
        label: "Example text from me",
        lines: [
          {
            from: "them",
            text: "Your new ad is live. It's set to $10 a day on your card. Text me if you want to pause it, and I'll send you the numbers on the 1st.",
          },
        ],
      },
    },
  ],
};

export const howItWorksEs: HowItWorks = {
  title: "Cómo funcionan los nuevos",
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
    {
      id: "phone-receptionist",
      title: "Recepcionista telefónica",
      price: "desde $299 + $99/mes",
      steps: [
        "Cuando estás en un trabajo y no puedes contestar, contesta la llamada en vez del buzón de voz.",
        "Contesta en español o inglés con tu horario, tus precios y cómo hacer cita, solo con la información que tú me diste.",
        "Toma el nombre y el número de la persona y lo que necesita, y te lo manda por texto al momento.",
      ],
      rules:
        "A cada persona que llama le dice que es un asistente automático, y nunca inventa un precio ni una fecha. Los minutos de llamada se cobran aparte, a lo que me cuestan. Primero hay que registrar tu número con las compañías de teléfono, y casi siempre piden tu EIN.",
      example: {
        label: "Ejemplo de llamada",
        lines: [
          { from: "them", text: "Gracias por llamar a Sunrise Tile & Stone. Habla el asistente automático, Ray está en un trabajo. ¿En qué te ayudo?" },
          { from: "you", text: "¿Alguien puede venir a ver el piso de mi baño esta semana?" },
          { from: "them", text: "Claro. ¿Me das tu nombre y tu número? Se los mando a Ray por texto para que te llame." },
        ],
      },
    },
    {
      id: "booking-calendar",
      title: "Calendario para citas",
      price: "desde $99 + $15/mes",
      steps: [
        "Se pone un botón para hacer cita en tu página web y en tu perfil de Google.",
        "Tus clientes escogen una hora que de verdad tienes libre, así no te caen dos citas a la misma hora.",
        "Les llega un recordatorio antes de la cita, y la cita aparece en el calendario de tu celular.",
      ],
      rules:
        "Tú decides tu horario y cuánto dura cada cita, para que nadie te agende a las 6 de la mañana. Es el mismo tipo de calendario que uso en esta página para las llamadas.",
      example: {
        label: "Ejemplo de recordatorio",
        lines: [
          {
            from: "them",
            text: "Hola María, te recordamos de Sunrise Tile & Stone: tu cita es mañana a las 10am. ¿Necesitas otra hora? cal.com/… Responde STOP para no recibir más.",
          },
        ],
      },
    },
    {
      id: "follow-up",
      title: "Lista de clientes y seguimiento",
      price: "desde $199 + $49/mes",
      steps: [
        "Todos los que te escriben por tu página, tus anuncios, Instagram o una llamada perdida quedan en una sola lista en tu celular.",
        "Si alguien pidió una cotización y ya no contestó, le llega un texto amable de seguimiento de tu negocio.",
        "Después del trabajo le llega tu link de reseñas, y cada semana recibes un resumen corto de quién es nuevo y quién está esperando tu respuesta.",
      ],
      rules:
        "Los textos solo les llegan a personas que te contactaron primero, todos dicen Responde STOP y puedes apagar cualquier seguimiento. Funciona junto con los textos para reseñas y el chat si ya los tienes.",
      example: {
        label: "Ejemplo de seguimiento",
        lines: [
          {
            from: "them",
            text: "Hola Luis, te escribe Sunrise Tile & Stone. ¿Todavía estás pensando lo del piso del baño? Con gusto te contestamos cualquier pregunta. Responde STOP para no recibir más.",
          },
        ],
      },
    },
    {
      id: "meta-ads",
      title: "Anuncios en Facebook e Instagram",
      price: "desde $199/mes + lo que gastes en anuncios",
      steps: [
        "Me agregas como socio en tu cuenta de Meta Business. Nunca necesito tu contraseña.",
        "Hago los anuncios con tus propios Reels y fotos, y se los muestro a gente cerca de ti.",
        "Cada mes te mando un reporte corto: cuánto gastaste y cuántas personas hicieron clic, te escribieron o te llamaron.",
      ],
      rules:
        "Lo que gastas en anuncios va aparte de lo que me pagas a mí. Se lo pagas directo a Meta con tu propia tarjeta, y tú decides cuánto. Muchos negocios chicos empiezan con $5 a $20 al día. Nadie te puede prometer ventas con anuncios, así que yo no te las prometo. Los dejo bien hechos, los reviso y te enseño los números.",
      example: {
        label: "Ejemplo de mensaje mío",
        lines: [
          {
            from: "them",
            text: "Tu anuncio nuevo ya está activo. Está en $10 al día con tu tarjeta. Si lo quieres pausar, mándame un texto. El día 1 te mando los números.",
          },
        ],
      },
    },
  ],
};
