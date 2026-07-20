import { WHATSAPP_NUMBER } from '../config';

/**
 * Construye un enlace wa.me con mensaje prellenado.
 * Toda la landing es un "gancho" que redirige a WhatsApp, así que
 * cada CTA pasa un mensaje distinto para saber desde dónde escribe el cliente.
 */
export function waLink(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
