import logoSource from "../../imports/LOGO_SOURCE.png";

const servicios = ["Diseño Gráfico", "Producción Audiovisual", "Desarrollo de Software", "Diseño UI/UX"];
const socials = ["Instagram", "Behance", "LinkedIn"];

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/5 pt-24 pb-0">
      <div className="max-w-7xl mx-auto px-6 mb-24 grid grid-cols-1 md:grid-cols-3 gap-16">
        <div>
          <img src={logoSource} alt="SOURCE" className="h-8 object-contain mb-6 brightness-200" />
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Fuente de creatividad e innovación. Transformamos ideas en realidades visuales y tecnológicas.
          </p>
        </div>

        <div>
          <h5 className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-6">Servicios</h5>
          <ul className="space-y-3 text-sm text-gray-400">
            {servicios.map((item) => (
              <li key={item}>
                <a href="#servicios" className="hover:text-[#78B803] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-6">Contacto</h5>
          <div className="space-y-3 text-sm text-gray-400">
            <a
              href="mailto:hello@source-estudios.com"
              className="block hover:text-[#78B803] transition-colors"
            >
              hello@source-estudios.com
            </a>
            <div className="flex gap-6 pt-4">
              {socials.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs tracking-widest uppercase hover:text-[#78B803] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-end h-[25vh] md:h-[35vh] overflow-hidden">
        <h1
          className="text-[18vw] leading-none font-black font-grandis-extended uppercase tracking-tighter text-transparent select-none"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.04)" }}
        >
          SOURCE
        </h1>
      </div>

      <div className="text-center py-4 border-t border-white/5">
        <p className="text-xs text-gray-700 tracking-widest">
          © 2025 SOURCE COMPANY STUDIOS. TODOS LOS DERECHOS RESERVADOS.
        </p>
      </div>
    </footer>
  );
}
