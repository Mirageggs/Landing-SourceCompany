import logoSource from "../../imports/LOGO_SOURCE.png";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-xl bg-black/50 border-b border-white/5">
      <nav className="hidden md:flex gap-10 text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
        <a href="#servicios" className="hover:text-[#78B803] transition-colors duration-300">
          Servicios
        </a>
        <a href="#portafolio" className="hover:text-[#78B803] transition-colors duration-300">
          Portafolio
        </a>
      </nav>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <img src={logoSource} alt="SOURCE Company Studios" className="h-8 object-contain" />
      </div>

      <div className="flex items-center gap-8">
        <nav className="hidden md:flex gap-10 text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
          <a href="#nosotros" className="hover:text-[#78B803] transition-colors duration-300">
            Nosotros
          </a>
        </nav>
        <a
          href="#contacto"
          className="border border-white/20 hover:border-[#78B803] hover:text-[#78B803] transition-all duration-300 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
        >
          Contacto
        </a>
      </div>
    </header>
  );
}
