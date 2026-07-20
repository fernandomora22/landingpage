import { BENEFITS } from '../data';
import WhatsAppButton from './WhatsAppButton';

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 shrink-0 text-gold-dark" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="m8 12 2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Benefits() {
  return (
    <section className="bg-cream text-graphite">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-condensed text-2xl font-bold uppercase leading-tight text-graphite sm:text-3xl">
              {BENEFITS.title}
            </h2>
            <ul className="mt-8 space-y-4">
              {BENEFITS.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4">
            <img
              src="/images/business_meet.jpg"
              alt="Asesoría personalizada con el cliente"
              className="w-full rounded-2xl object-cover shadow-xl"
              loading="lazy"
            />
            <img
              src="/images/kitchen_sketch.jpg"
              alt="Modelado 3D del espacio"
              className="w-full rounded-2xl object-cover shadow-xl"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-ink px-6 py-10 text-center">
          <p className="mx-auto max-w-2xl font-condensed text-xl font-semibold uppercase leading-snug text-gold-gradient sm:text-2xl">
            {BENEFITS.closing}
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton
              message="Hola Casa Morales, quiero saber cuánto costaría el diseño de mi mueble."
              size="lg"
            >
              Solicita tu diseño
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
