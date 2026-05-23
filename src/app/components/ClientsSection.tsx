import conectaLogo from "../../imports/CONECTA_LOGO_2.png";
import gheirosLogo from "../../imports/GHEIROS_LOGO_2.png";
import urbezaLogo from "../../imports/URBEZA_LOGO_1.png";

const baseLogos = [
  { src: conectaLogo, alt: "Conecta Propiedades" },
  { src: gheirosLogo, alt: "Gheiros Inmobiliaria" },
  { src: urbezaLogo, alt: "Urbeza Inmobiliaria" },
];

const logos = [...baseLogos, ...baseLogos, ...baseLogos, ...baseLogos];

export function ClientsSection() {
  return (
    <section className="py-16 bg-black border-y border-white/5 overflow-hidden">
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-gray-600 uppercase">
          Marcas que confían en nosotros
        </p>
      </div>

      <div className="relative w-full flex overflow-x-hidden">
        <div className="flex items-center gap-20 marquee-track whitespace-nowrap">
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 group px-4">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 md:h-14 object-contain opacity-20 grayscale brightness-200 transition-all duration-500 group-hover:opacity-70 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
