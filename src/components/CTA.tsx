function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-3xl bg-indigo-600 px-8 py-16 text-center text-white sm:px-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          ¿Listo para empezar?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-indigo-100">
          Cierra con una llamada a la acción clara. Reemplaza este texto por tu
          oferta real.
        </p>
        <form
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="tu@email.com"
            className="w-full rounded-lg px-4 py-3 text-slate-900 outline-none ring-2 ring-transparent focus:ring-indigo-300"
          />
          <button
            type="submit"
            className="rounded-lg bg-white px-6 py-3 font-semibold text-indigo-600 transition-colors hover:bg-indigo-50"
          >
            Suscribirme
          </button>
        </form>
      </div>
    </section>
  );
}

export default CTA;
