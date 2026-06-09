/**
 * WhatsApp link helper.
 * Every CTA in the site routes to a real WhatsApp chat.
 */
const PRIMARY = "573105305952"; // Asesora — 310 530 5952

export function wa(message?: string) {
  const base = `https://wa.me/${PRIMARY}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const WA_CONTACTS = [
  { label: "Asesora", phone: "310 530 5952", waId: "573105305952" },
  { label: "Cotizaciones · Asistente 1", phone: "310 752 8529", waId: "573107528529" },
  { label: "Cotizaciones · Asistente 2", phone: "300 739 9331", waId: "573007399331" },
];

export function waLink(id: string, message?: string) {
  const base = `https://wa.me/${id}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
