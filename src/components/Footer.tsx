import { BRAND } from '../config';

function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center">
        <div className="flex items-center gap-3">
          <img src="/images/gold_logo_transparent.png" alt={BRAND.name} className="h-9 w-auto" />
          <span className="leading-tight">
            <span className="block font-condensed text-base font-semibold uppercase tracking-wide text-cream">
              {BRAND.name}
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-gold">
              {BRAND.tagline}
            </span>
          </span>
        </div>
        <p className="text-xs text-cream/50">
          © {new Date().getFullYear()} {BRAND.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
