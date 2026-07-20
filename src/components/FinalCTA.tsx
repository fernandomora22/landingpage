import WhatsAppButton from './WhatsAppButton';

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/images/background.jpg')" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center">
        <img
          src="/images/gold_logo_transparent.png"
          alt="Casa Morales"
          className="mx-auto h-16 w-auto"
        />
        <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-cream sm:text-5xl">
          Hagamos realidad el <span className="text-gold-gradient">mueble que sueñas</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-cream/75">
          Cuéntanos tu proyecto por WhatsApp y recibe tu diseño con planos, despiece y
          visualización 3D. Ahorra tiempo, dinero e intermediarios.
        </p>
        <div className="mt-9 flex justify-center">
          <WhatsAppButton
            message="Hola Casa Morales, quiero empezar mi proyecto de mobiliario. ¿Me asesoran?"
            size="lg"
          >
            Escríbenos por WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
