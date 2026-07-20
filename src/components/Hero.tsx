import { HERO } from '../data';
import WhatsAppButton from './WhatsAppButton';

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-ink">
      {/* Fondo texturizado oscuro, igual al del PDF */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/images/background.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-10 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-gold/60 px-6 py-1.5 font-condensed text-sm uppercase tracking-[0.15em] text-gold">
            {HERO.badge}
          </span>

          <h1 className="mt-8 font-display text-[1.9rem] font-extrabold leading-[1.1] text-cream sm:text-6xl">
            {HERO.titleTop}{' '}
            <span className="text-gold-gradient">{HERO.titleGold}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
            {HERO.subtitle}
          </p>

          <div className="mt-9 flex justify-center">
            <WhatsAppButton
              message="Hola Casa Morales, quiero ahorrar dinero en mi proyecto de mobiliario. ¿Me ayudan?"
              size="lg"
            >
              {HERO.cta}
            </WhatsAppButton>
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-cream/60">
            {HERO.body}
          </p>
        </div>

        {/* Foto real de cocina + cita */}
        <div className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-gold/20 shadow-2xl shadow-black/50">
          <img
            src="/images/kitchen_real_photo.jpeg"
            alt="Cocina diseñada por Casa Morales"
            className="block h-auto w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/95 to-transparent p-5 pt-16">
            <blockquote className="max-w-2xl text-sm italic leading-relaxed text-cream/90 sm:text-base">
              “{HERO.quote}”
              <cite className="mt-1 block not-italic font-condensed uppercase tracking-wide text-gold">
                — {HERO.quoteAuthor}
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
