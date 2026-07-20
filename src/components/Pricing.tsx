import { PRICING } from '../data';
import WhatsAppButton from './WhatsAppButton';

function Pricing() {
  return (
    <section id="tarifas" className="bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="text-center">
          <span className="font-condensed text-sm uppercase tracking-[0.2em] text-gold">
            Tarifas y servicios
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-cream sm:text-4xl">
            Diseño a la medida de tu <span className="text-gold-gradient">presupuesto</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            Elige el mueble que necesitas. Cada diseño incluye todo lo necesario para
            ejecutarlo y ahorrar.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PRICING.map((cat) => (
            <div
              key={cat.id}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                cat.featured
                  ? 'border-gold bg-charcoal shadow-2xl shadow-black/50'
                  : 'border-white/10 bg-charcoal/60'
              }`}
            >
              {cat.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 font-condensed text-xs font-semibold uppercase tracking-wide text-ink">
                  Más solicitado
                </span>
              )}
              <h3 className="font-condensed text-2xl font-bold uppercase tracking-wide text-cream">
                {cat.title}
              </h3>

              <ul className="mt-5 space-y-2 border-b border-white/10 pb-6">
                {cat.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-cream/70">
                    <span className="text-gold">•</span>
                    {f}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex-1 space-y-3">
                {cat.items.map((item) => (
                  <li key={item.name} className="flex items-baseline justify-between gap-3">
                    <span className="text-sm text-cream/85">{item.name}</span>
                    <span className="whitespace-nowrap text-right font-condensed text-sm font-semibold text-gold">
                      {item.cop}
                      {item.usd && <span className="block text-[11px] text-cream/50">{item.usd}</span>}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <WhatsAppButton
                  message={`Hola Casa Morales, quiero solicitar el diseño de: ${cat.title}. ¿Me pasan más información?`}
                  variant={cat.featured ? 'gold' : 'outline'}
                  className="w-full"
                >
                  Solicita tu diseño
                </WhatsAppButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
