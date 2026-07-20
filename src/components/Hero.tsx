function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center sm:py-32">
        <span className="inline-block rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950 dark:text-indigo-300">
          Placeholder — reemplaza este copy
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
          Tu propuesta de valor en una línea
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-400">
          Un subtítulo que explica qué hace tu producto y por qué le importa a
          quien llega a esta página.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#cta"
            className="w-full rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-500 sm:w-auto"
          >
            Empezar ahora
          </a>
          <a
            href="#features"
            className="w-full rounded-lg border border-slate-300 px-6 py-3 font-semibold transition-colors hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-900 sm:w-auto"
          >
            Ver más
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
