export const studio = {
  name: "Arman Digital",
  tagline: "Websites and Reels for local businesses. Free demo first.",
  description:
    "I'm Arman, from Pittsburg in the East Bay. I make websites and Reels for local businesses. Send me some photos, I'll make you a free demo, and you only pay if you like it.",
  phone: "(925) 252-6347",
  phoneHref: "tel:+19252526347",
  /** Opens a text to Arman. Add a prefilled message with smsLink() below. */
  smsHref: "sms:+19252526347",
  email: "ak5297@yahoo.com",
  emailHref: "mailto:ak5297@yahoo.com",
  location: "Bay Area, CA",
  social: {
    instagram: "https://www.instagram.com/armank.digital",
  },
  cal: {
    username: "armankdigital",
    eventSlug: "15min",
  },
} as const;

/**
 * A text-message link to Arman with a message already typed in. "?&body=" works on both iPhone and Android.
 * On a computer it opens whatever handles texts there (Messages on a Mac), so the number is always shown too.
 */
export function smsLink(body: string) {
  return `${studio.smsHref}?&body=${encodeURIComponent(body)}`;
}
