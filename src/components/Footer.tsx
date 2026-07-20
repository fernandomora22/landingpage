function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row">
        <span>
          © {new Date().getFullYear()} Marca. Todos los derechos reservados.
        </span>
        <div className="flex gap-6">
          <a href="#" className="transition-colors hover:text-slate-900 dark:hover:text-white">
            Privacidad
          </a>
          <a href="#" className="transition-colors hover:text-slate-900 dark:hover:text-white">
            Términos
          </a>
          <a href="#" className="transition-colors hover:text-slate-900 dark:hover:text-white">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
