const LINKS = [
  { label: 'Características', href: '#features' },
  { label: 'Empezar', href: '#cta' },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold tracking-tight">
          Marca<span className="text-indigo-600">.</span>
        </a>
        <ul className="flex items-center gap-6 text-sm font-medium">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#cta"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-500"
            >
              Prueba gratis
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
