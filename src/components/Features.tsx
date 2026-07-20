const FEATURES = [
  {
    title: 'Rápido',
    description: 'Describe aquí el primer beneficio clave de tu producto.',
    icon: '⚡',
  },
  {
    title: 'Simple',
    description: 'Describe aquí el segundo beneficio clave de tu producto.',
    icon: '✨',
  },
  {
    title: 'Escalable',
    description: 'Describe aquí el tercer beneficio clave de tu producto.',
    icon: '📈',
  },
];

function Features() {
  return (
    <section
      id="features"
      className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Todo lo que necesitas
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-600 dark:text-slate-400">
            Tres razones para elegir tu producto. Reemplaza cada tarjeta con
            beneficios reales.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="text-3xl">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
