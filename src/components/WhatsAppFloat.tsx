import { waLink } from '../lib/whatsapp';
import { WhatsAppIcon } from './WhatsAppButton';

function WhatsAppFloat() {
  return (
    <a
      href={waLink('Hola Casa Morales, quiero información sobre el diseño de mi mobiliario.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/40 transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

export default WhatsAppFloat;
