import { useLayoutEffect, useRef, useState } from "react";

type WebProject = {
  id: number;
  cat: string;
  catLabel: string;
  title: string;
  description: string;
  tags: string[];
  accent: string[];
  bg: string;
  icon: string;
  accentTag: string;
};

const projects: WebProject[] = [
  {
    id: 1,
    cat: "erp",
    catLabel: "ERP / Software",
    title: "Sistema ERP Empresarial",
    description:
      "Software de gestión operativa con monitoreo de estado en tiempo real, control de inventario y generación automatizada de reportes Z exportables.",
    tags: ["React", "Supabase", "JWT", "Dashboard"],
    accent: ["React", "Supabase"],
    bg: "bg-blue-950/40",
    icon: "💹",
    accentTag: "bg-blue-950/50 text-blue-300 border-blue-800/50",
  },
  {
    id: 2,
    cat: "ecommerce",
    catLabel: "E-commerce",
    title: "E-commerce Customizado",
    description:
      "Plataforma de ventas integral con carrito de compras optimizado, gestión de catálogo para productos tradicionales y módulo de eventos.",
    tags: ["Tienda Virtual", "UI/UX", "Pagos"],
    accent: ["Tienda Virtual", "UI/UX"],
    bg: "bg-emerald-950/40",
    icon: "🛒",
    accentTag: "bg-emerald-950/50 text-emerald-300 border-emerald-800/50",
  },
  {
    id: 3,
    cat: "web",
    catLabel: "Web Corporativa",
    title: "Desarrollo Web Corporativo",
    description:
      "Landing pages de alta conversión, arquitectura optimizada para tiempos de carga rápidos y diseño enfocado en experiencia de usuario.",
    tags: ["Landing Page", "Optimización", "Responsive"],
    accent: ["Landing Page"],
    bg: "bg-amber-950/40",
    icon: "🖥️",
    accentTag: "bg-amber-950/50 text-amber-300 border-amber-800/50",
  },
];

const filters = [
  { id: "all", label: "Todos" },
  { id: "erp", label: "ERP / Software" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "web", label: "Web Corporativa" },
];

const HOVER_3D_ZONES = Array.from({ length: 8 }, (_, i) => i);

function Hover3DCard({ project }: { project: WebProject }) {
  return (
    <div className="hover-3d group/tilt h-full cursor-pointer">
      <div className="rounded-2xl bg-[#0a0a0a] border border-white/5 overflow-hidden shadow-2xl shadow-black/40">
        <figure
          className={`relative aspect-video flex items-center justify-center text-5xl overflow-hidden border-b border-white/5 ${project.bg}`}
        >
          <span>{project.icon}</span>
          <figcaption className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover/tilt:opacity-100 transition-opacity duration-300 pointer-events-none">
            <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white border border-white/40 px-5 py-2 rounded-full">
              Ver proyecto →
            </span>
          </figcaption>
        </figure>

        <div className="p-5 sm:p-6 flex flex-col gap-4">
          <div>
            <p className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#78B803] mb-2">
              {project.catLabel}
            </p>
            <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-white">
              {project.title}
            </h3>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">{project.description}</p>
          </div>

          <div className="flex gap-2 flex-wrap mt-auto">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full border ${
                  project.accent.includes(tag)
                    ? project.accentTag
                    : "bg-white/5 text-gray-400 border-white/10"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {HOVER_3D_ZONES.map((zone) => (
        <div key={zone} aria-hidden="true" />
      ))}
    </div>
  );
}

export function PortfolioWebSection() {
  const [active, setActive] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);
  const visible = projects.filter((p) => active === "all" || p.cat === active);

  useLayoutEffect(() => {
    sectionRef.current
      ?.querySelectorAll(".portfolio-web-card")
      .forEach((el) => el.classList.add("visible"));
  }, [active]);

  return (
    <section
      ref={sectionRef}
      id="portafolio-web"
      className="py-20 sm:py-28 md:py-32 bg-[#050505] text-white border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="reveal mb-8 sm:mb-10">
          <p className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-gray-500 mb-3 sm:mb-4">
            Nuestro trabajo
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-grandis-extended tracking-tighter uppercase leading-[0.9]">
            Portafolio —{" "}
            <span className="text-[#78B803]">Desarrollo Web</span>
          </h2>
        </div>

        <div className="reveal flex flex-wrap gap-2 mb-10 sm:mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActive(filter.id)}
              className={`text-[10px] sm:text-xs font-bold tracking-widest uppercase px-4 sm:px-5 py-2 rounded-full border transition-all duration-200 ${
                active === filter.id
                  ? "bg-[#78B803] text-black border-[#78B803]"
                  : "border-white/10 text-gray-500 hover:border-[#78B803]/40 hover:text-[#78B803]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visible.map((project, index) => (
            <div
              key={project.id}
              className="reveal portfolio-web-card h-full"
              style={{ transitionDelay: `${0.08 * index}s` }}
            >
              <Hover3DCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
