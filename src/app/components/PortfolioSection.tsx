import conectaLogo from "../../imports/CONECTA_LOGO_2.png";
import gheirosLogo from "../../imports/GHEIROS_LOGO_2.png";
import urbezaLogo from "../../imports/URBEZA_LOGO_1.png";

type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  img: string | null;
  bg: string;
  tall: boolean;
};

const projects: PortfolioItem[] = [
  { id: 1, title: "CONECTA PROPIEDADES", category: "Branding / Identidad", img: conectaLogo, bg: "#0a0f05", tall: true },
  { id: 2, title: "GHEIROS INMOBILIARIA", category: "Diseño Corporativo", img: gheirosLogo, bg: "#050a0a", tall: false },
  { id: 3, title: "URBEZA INMOBILIARIA", category: "Identidad Visual", img: urbezaLogo, bg: "#050505", tall: false },
  { id: 4, title: "PROYECTOS WEB", category: "Desarrollo de Software", img: null, bg: "#030803", tall: true },
];

export function PortfolioSection() {
  return (
    <section id="portafolio" className="py-20 sm:py-28 md:py-32 bg-black text-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
        <div className="reveal mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-grandis-extended tracking-tighter uppercase leading-[0.9] md:leading-[0.88]">
            Portafolio <span className="text-gray-700">Selecto</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`reveal group relative overflow-hidden rounded-2xl cursor-pointer ${
                project.tall
                  ? "md:row-span-2 min-h-[340px] md:min-h-[500px]"
                  : "min-h-[240px] md:min-h-[280px]"
              }`}
              style={{ background: project.bg }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12">
                {project.img ? (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="max-w-[70%] max-h-[60%] object-contain opacity-30 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105 brightness-200 grayscale"
                  />
                ) : (
                  <div className="text-5xl sm:text-6xl font-black text-[#78B803]/20 group-hover:text-[#78B803]/40 transition-colors duration-500 text-center">
                    {"</>"}
                  </div>
                )}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[#78B803] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight uppercase">{project.title}</h3>
              </div>

              <div className="absolute inset-0 border border-[#78B803]/0 group-hover:border-[#78B803]/20 rounded-2xl transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
