/**
 * WhatsApp link helper.
 * Every CTA in the site routes to a real WhatsApp chat.
 */
const PRIMARY = "573218066128"; // Línea principal — 321 806 6128

export function wa(message?: string) {
  const base = `https://wa.me/${PRIMARY}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const WA_CONTACTS = [
  { label: "Atención al cliente", phone: "321 806 6128", waId: PRIMARY },
];

export function waLink(id: string, message?: string) {
  const base = `https://wa.me/${id}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
