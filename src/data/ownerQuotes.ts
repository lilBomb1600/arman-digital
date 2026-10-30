/**
 * What business owners told Arman about his work, word for word, from the texts and DMs he shared (2026-10-29).
 * Quotes stay in the language they were written in. Never edit the wording; add only real messages.
 * Clients gave Arman permission to be quoted (10-29).
 * "kind" says whether they paid or were reacting to a free demo, so nobody reads a demo reaction as a paid review.
 */
export type OwnerQuote = {
  id: string;
  quote: string;
  name: string;
  business: string;
  kind: "client" | "demo";
  where: string;
};

export const ownerQuotes: OwnerQuote[] = [
  {
    id: "ricardo",
    quote: "That kind of videos i needed.",
    name: "Ricardo",
    business: "PREMIUM, wrap and PPF shop",
    kind: "client",
    where: "WhatsApp",
  },
  {
    id: "salvador",
    quote: "I honestly like the videos and the website looks really good too!",
    name: "Salvador",
    business: "FitFuel Meals, Hayward",
    kind: "client",
    where: "Text",
  },
  {
    id: "dan",
    quote: "I love it! Very professional",
    name: "Dan",
    business: "AngSarap FoodHauz, Elk Grove",
    kind: "client",
    where: "Text",
  },
  {
    id: "vaka",
    quote: "Wow that is really cool man",
    name: "Vaka",
    business: "Kona Concrete, Antioch",
    kind: "demo",
    where: "Facebook",
  },
  {
    id: "jonathan",
    quote: "Wow the website is nice",
    name: "Jonathan",
    business: "Epoxy X, Antioch",
    kind: "demo",
    where: "Facebook",
  },
];
