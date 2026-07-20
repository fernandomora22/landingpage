import { BRAND } from '../config';
import WhatsAppButton from './WhatsAppButton';

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/15 bg-ink/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src="/images/gold_logo_transparent.png"
            alt={BRAND.name}
            className="h-10 w-auto"
          />
          <span className="leading-tight">
            <span className="block font-condensed text-lg font-semibold uppercase tracking-wide text-cream">
              {BRAND.name}
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-gold">
              {BRAND.tagline}
            </span>
          </span>
        </a>
        <WhatsAppButton
          message="Hola Casa Morales, quiero cotizar el diseño de mi mobiliario."
          size="md"
          className="hidden sm:inline-flex"
        >
          Cotizar
        </WhatsAppButton>
      </nav>
    </header>
  );
}

export default Navbar;
