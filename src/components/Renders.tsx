import { RENDER_UNITS, COMBOS } from '../data';
import WhatsAppButton from './WhatsAppButton';

function Renders() {
  return (
    <section className="bg-cream text-graphite">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-condensed text-3xl font-bold uppercase text-graphite sm:text-4xl">
          Renderización <span className="text-gold-dark">fotorrealista</span>
        </h2>
        <p className="mt-3 max-w-xl text-graphite/70">
          Visualiza tu mueble antes de fabricarlo, lo más cercano a la realidad.
        </p>

        {/* Unidades de render */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {RENDER_UNITS.map((r, i) => (
            <div
              key={r.title}
              className={`flex flex-col rounded-2xl p-7 ${
                i === 0 ? 'bg-graphite text-cream' : 'bg-ink text-cream'
              }`}
            >
              <h3 className="font-condensed text-2xl font-bold uppercase">{r.title}</h3>
              <p className="mt-2 text-sm text-cream/70">{r.desc}</p>
              <div className="mt-6 font-condensed text-2xl font-bold text-gold">
                {r.cop} <span className="text-base text-cream/60">/ {r.usd}</span>
              </div>
              <div className="mt-6">
                <WhatsAppButton
                  message={`Hola Casa Morales, quiero cotizar el servicio de ${r.title}.`}
                  variant="gold"
                  className="w-full"
                >
                  Solicita tu diseño
                </WhatsAppButton>
              </div>
            </div>
          ))}
        </div>

        {/* Combos */}
        <h3 className="mt-16 font-condensed text-2xl font-bold uppercase text-graphite">
          Combos
        </h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {COMBOS.map((c) => (
            <div
              key={c.title}
              className={`relative flex flex-col rounded-2xl p-7 text-cream ${
                c.featured ? 'bg-graphite ring-2 ring-gold' : 'bg-ink'
              }`}
            >
              {c.featured && (
                <span className="absolute -top-3 left-6 rounded-full bg-gold px-4 py-1 font-condensed text-xs font-semibold uppercase tracking-wide text-ink">
                  El más popular
                </span>
              )}
              <h4 className="font-condensed text-xl font-bold uppercase leading-tight">
                {c.title}
              </h4>
              <ul className="mt-4 flex-1 space-y-2 text-sm text-cream/80">
                {c.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-gold">•</span>
                    {f}
                  </li>
                ))}
                <li className="pt-2 text-xs text-cream/55">{c.extra}</li>
              </ul>
              <div className="mt-5 font-condensed text-lg font-bold text-gold">{c.price}</div>
              <div className="mt-5">
                <WhatsAppButton
                  message={`Hola Casa Morales, me interesa el combo de ${c.title}.`}
                  variant="gold"
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

export default Renders;
