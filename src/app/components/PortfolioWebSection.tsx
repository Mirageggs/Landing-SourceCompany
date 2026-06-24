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
  status: "live" | "soon"; // live = desplegado y clickeable; soon = en desarrollo
  link?: string;           // deploy en vivo (omitir si es "soon")
  note?: string;           // aclaración, ej. "Acceso con cuenta demo"
};

const projects: WebProject[] = [
  {
    id: 1,
    cat: "erp",
    catLabel: "ERP / Software",
    title: "ERP Renzo's Pizza",
    description:
      "Sistema de gestión integral en producción: pedidos, inventario, caja y reportes en tiempo real. Mi proyecto más completo.",
    tags: ["React", "Supabase", "JWT", "Dashboard"],
    accent: ["React", "Supabase"],
    bg: "bg-blue-950/40",
    icon: "💹",
    accentTag: "bg-blue-950/50 text-blue-300 border-blue-800/50",
    status: "live",
    link: "https://erp-renzospizza.vercel.app",
    note: "Acceso con cuenta demo",
  },
  {
    id: 2,
    cat: "erp",
    catLabel: "ERP / Software",
    title: "Renzo's Pizza QR",
    description:
      "Carta digital accesible por código QR desde la mesa, con menú siempre actualizado y carga instantánea.",
    tags: ["HTML", "QR", "Menú Digital"],
    accent: ["QR"],
    bg: "bg-blue-950/40",
    icon: "📱",
    accentTag: "bg-blue-950/50 text-blue-300 border-blue-800/50",
    status: "live",
    link: "https://renzos-pizza-qr.vercel.app",
  },
  {
    id: 3,
    cat: "web",
    catLabel: "Web Corporativa",
    title: "Source Company",
    description:
      "Landing corporativa de alta conversión, arquitectura optimizada para tiempos de carga rápidos y enfoque en experiencia de usuario.",
    tags: ["Landing Page", "Optimización", "Responsive"],
    accent: ["Landing Page"],
    bg: "bg-amber-950/40",
    icon: "🖥️",
    accentTag: "bg-amber-950/50 text-amber-300 border-amber-800/50",
    status: "live",
    link: "https://landing-source-company.vercel.app",
  },
  {
    id: 4,
    cat: "ecommerce",
    catLabel: "E-commerce",
    title: "Tienda Ayahuasca",
    description:
      "Plataforma de ventas con catálogo de productos y módulo de reservas/booking integrado. Actualmente en desarrollo.",
    tags: ["Tienda Virtual", "Booking", "Pagos"],
    accent: ["Tienda Virtual"],
    bg: "bg-emerald-950/40",
    icon: "🛒",
    accentTag: "bg-emerald-950/50 text-emerald-300 border-emerald-800/50",
    status: "soon",
  },
  {
    id: 5,
    cat: "automatizacion",
    catLabel: "Automatización",
    title: "Bot WhatsApp",
    description:
      "Asistente automático para WhatsApp que responde consultas, califica leads y agenda citas sin intervención humana. Ideal para negocios que no quieren perder ningún mensaje.",
    tags: ["WhatsApp", "Bot", "IA", "Automatización"],
    accent: ["WhatsApp", "IA"],
    bg: "bg-green-950/40",
    icon: "🤖",
    accentTag: "bg-green-950/50 text-green-300 border-green-800/50",
    status: "soon",
  },
];

const filters = [
  { id: "all", label: "Todos" },
  { id: "erp", label: "ERP / Software" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "web", label: "Web Corporativa" },
  { id: "automatizacion", label: "Automatización" },
];

const HOVER_3D_ZONES = Array.from({ length: 8 }, (_, i) => i);

function Hover3DCard({ project }: { project: WebProject }) {
  // Contenido de la card (idéntico para "live" y "soon")
  const inner = (
    <>
      <div className="rounded-2xl bg-[#0a0a0a] border border-white/5 overflow-hidden shadow-2xl shadow-black/40">
        <figure
          className={`relative aspect-video flex items-center justify-center text-5xl overflow-hidden border-b border-white/5 ${project.bg}`}
        >
          <span>{project.icon}</span>

          {/* Badge "Próximamente" para proyectos en desarrollo */}
          {project.status === "soon" && (
            <span className="absolute top-3 right-3 text-[9px] font-bold tracking-widest uppercase text-amber-300 bg-amber-950/60 border border-amber-800/50 rounded-full px-2.5 py-1">
              Próximamente
            </span>
          )}

          <figcaption className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover/tilt:opacity-100 transition-opacity duration-300 pointer-events-none">
            <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white border border-white/40 px-5 py-2 rounded-full">
              {project.status === "live" ? "Ver en vivo →" : "En desarrollo"}
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
            {project.note && (
              <p className="text-gray-600 text-xs mt-2 italic">{project.note}</p>
            )}
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

      {/* Zonas invisibles del tilt 3D (NO tocar: son hijos 2-9 del .hover-3d) */}
      {HOVER_3D_ZONES.map((zone) => (
        <div key={zone} aria-hidden="true" />
      ))}
    </>
  );

  // "live" -> el contenedor del tilt es un <a> para que el click navegue
  // (los clicks en las zonas suben al enlace; el hover del tilt sigue intacto).
  if (project.status === "live" && project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover-3d group/tilt h-full cursor-pointer"
      >
        {inner}
      </a>
    );
  }

  // "soon" -> no navega, cursor normal
  return <div className="hover-3d group/tilt h-full cursor-default">{inner}</div>;
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