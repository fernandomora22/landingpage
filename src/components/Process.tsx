import { PROCESS } from '../data';

function Process() {
  return (
    <section className="relative bg-charcoal">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/images/background.jpg')" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-20">
        <h2 className="mx-auto max-w-3xl text-center font-condensed text-3xl font-bold uppercase leading-tight text-gold-gradient sm:text-4xl">
          {PROCESS.title}
        </h2>

        <p className="mx-auto mt-8 max-w-3xl rounded-2xl border border-gold/50 bg-ink/40 p-6 text-center leading-relaxed text-cream/90">
          {PROCESS.intro}
        </p>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2">
          {PROCESS.steps.map((step, i) => (
            <li
              key={i}
              className="flex gap-4 rounded-xl border border-white/5 bg-ink/50 p-5 transition-colors hover:border-gold/30"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/50 font-condensed text-lg font-bold text-gold">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed text-cream/80">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Process;
