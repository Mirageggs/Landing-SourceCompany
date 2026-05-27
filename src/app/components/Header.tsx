import { useEffect, useState } from "react";
import logoSource from "../../imports/LOGO_SOURCE.png";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/5">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 md:py-4">
        <nav className="hidden md:flex gap-10 text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 flex-1">
          <a href="#servicios" className="hover:text-[#78B803] transition-colors duration-300">
            Servicios
          </a>
          <a href="#portafolio" className="hover:text-[#78B803] transition-colors duration-300">
            Portafolio
          </a>
          <a href="#portafolio-web" className="hover:text-[#78B803] transition-colors duration-300">
            Desarrollo Web
          </a>
        </nav>

        <div className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          <a href="#" onClick={closeMenu}>
            <img
              src={logoSource}
              alt="SOURCE Company Studios"
              className="h-7 md:h-8 object-contain"
            />
          </a>
        </div>

        <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
          <nav className="flex gap-10 text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
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

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-white"
        >
          <span
            className={`block h-px w-6 bg-current transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out border-t border-white/5 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-6 text-sm font-semibold tracking-[0.2em] uppercase text-gray-300">
          <a
            href="#servicios"
            onClick={closeMenu}
            className="py-3 border-b border-white/5 hover:text-[#78B803] transition-colors"
          >
            Servicios
          </a>
          <a
            href="#portafolio"
            onClick={closeMenu}
            className="py-3 border-b border-white/5 hover:text-[#78B803] transition-colors"
          >
            Portafolio
          </a>
          <a
            href="#portafolio-web"
            onClick={closeMenu}
            className="py-3 border-b border-white/5 hover:text-[#78B803] transition-colors"
          >
            Desarrollo Web
          </a>
          <a
            href="#nosotros"
            onClick={closeMenu}
            className="py-3 border-b border-white/5 hover:text-[#78B803] transition-colors"
          >
            Nosotros
          </a>
          <a
            href="#contacto"
            onClick={closeMenu}
            className="mt-6 inline-flex items-center justify-center border border-[#78B803] text-[#78B803] hover:bg-[#78B803] hover:text-black transition-all duration-300 px-5 py-3 rounded-full text-xs font-bold tracking-widest uppercase"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
