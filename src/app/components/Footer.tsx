import logoSource from "../../imports/LOGO_SOURCE.png";

const servicios = ["Diseño Gráfico", "Producción Audiovisual", "Desarrollo de Software", "Diseño UI/UX"];
const socials = [
  { name: "Instagram", href: "https://www.instagram.com/sourcecompanystudios/" },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61559080473984&locale=es_LA" },
];

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/5 pt-16 sm:pt-20 md:pt-24 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 sm:mb-20 md:mb-24 grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 md:gap-16">
        <div>
          <img src={logoSource} alt="SOURCE" className="h-7 sm:h-8 object-contain mb-5 sm:mb-6 brightness-200" />
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Fuente de creatividad e innovación. Transformamos ideas en realidades visuales y tecnológicas.
          </p>
        </div>

        <div>
          <h5 className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-4 sm:mb-6">Servicios</h5>
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
          <h5 className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-4 sm:mb-6">Contacto</h5>
          <div className="space-y-3 text-sm text-gray-400">
            <a
              href="mailto:sourcecompanystudios@gmail.com"
              className="block hover:text-[#78B803] transition-colors break-all"
            >
              sourcecompanystudios@gmail.com
            </a>
            <div className="flex flex-wrap gap-4 sm:gap-6 pt-4">
              {socials.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs tracking-widest uppercase hover:text-[#78B803] transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-end h-[18vh] sm:h-[25vh] md:h-[35vh] overflow-hidden">
        <h1
          className="text-[22vw] sm:text-[20vw] md:text-[18vw] leading-none font-black font-grandis-extended uppercase tracking-tighter text-transparent select-none"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.04)" }}
        >
          SOURCE
        </h1>
      </div>

      <div className="text-center py-4 px-4 border-t border-white/5">
        <p className="text-[10px] sm:text-xs text-gray-700 tracking-widest">
          © 2025 SOURCE COMPANY STUDIOS. TODOS LOS DERECHOS RESERVADOS.
        </p>
      </div>
    </footer>
  );
}
