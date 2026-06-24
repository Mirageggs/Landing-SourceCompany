import { useEffect, useRef, useState } from "react";

/**
 * "Software que Hace la Diferencia" — portafolio de despliegues reales.
 *
 * Estrategia visual + rendimiento:
 *  - Capa base: una captura (screenshot) por proyecto, siempre visible, con
 *    crossfade. Carga rápido y sirve de respaldo si el iframe falla.
 *  - Capa "en vivo": SOLO el proyecto activo que sea público monta un <iframe>
 *    del despliegue real, escalado como escritorio y sin captura de clicks
 *    (pointer-events-none) para no atrapar el scroll.
 *  - Botón "Abrir en vivo" redirige al despliegue (ideal para repos privados).
 *  - Carga diferida + fallback accesible si el usuario prefiere menos movimiento.
 *
 * Nota sobre iframes: solo funcionan con sitios que permiten ser embebidos.
 * Tus propios despliegues en Vercel lo permiten salvo que configures
 * X-Frame-Options/CSP frame-ancestors para bloquearlo.
 */

const BASE_W = 1440; // ancho lógico de escritorio para el iframe (se escala)

type Tech = { name: string; color: string };

type Project = {
  category: string;
  title: string;
  url: string;        // texto de la barra de direcciones
  desc: string;
  tech: Tech[];
  poster: string;     // captura, siempre visible
  live?: string;      // URL para el iframe en vivo (omitir si tiene login/privado)
  liveUrl: string;    // a dónde lleva "Abrir en vivo"
  note?: string;      // aclaración (ej. "Acceso con demo")
};

const TS = { name: "TypeScript", color: "#3178c6" };
const HTML = { name: "HTML", color: "#e34c26" };

const projects: Project[] = [
  {
    category: "ERP / Software",
    title: "ERP Renzo's Pizza",
    url: "erp.renzospizza.vercel.app",
    desc:
      "Sistema de gestión integral para la pizzería: pedidos, inventario, caja y reportes en tiempo real. Mi proyecto más completo.",
    tech: [TS],
    poster: "/portfolio/erp-renzospizza.jpg",
    // sin `live`: está detrás de login, mostramos captura del dashboard
    liveUrl: "https://erp-renzospizza.vercel.app",
    note: "Acceso con cuenta demo",
  },
  {
    category: "ERP / Software",
    title: "Renzo's Pizza QR",
    url: "qr.renzospizza.vercel.app",
    desc: "Carta digital accesible por código QR desde la mesa, con menú siempre actualizado.",
    tech: [HTML],
    poster: "/portfolio/renzospizza-qr.jpg",
    live: "https://renzos-pizza-qr.vercel.app",
    liveUrl: "https://renzos-pizza-qr.vercel.app",
  },
  {
    category: "Web Corporativa",
    title: "Source Company",
    url: "landing-source-company.vercel.app",
    desc: "Landing corporativa enfocada en presentar servicios y convertir visitantes en clientes. Este mismo sitio.",
    tech: [HTML],
    poster: "/portfolio/source-landing.jpg",
    live: "https://landing-source-company.vercel.app",
    liveUrl: "https://landing-source-company.vercel.app",
  },
];

export function WebDemoSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [scale, setScale] = useState(0.3);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Cargar contenido cuando la sección entra al viewport.
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Calcular escala del iframe según el ancho real de la pantalla del mockup.
  useEffect(() => {
    const el = screenRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setScale(el.clientWidth / BASE_W));
    ro.observe(el);
    return () => ro.disconnect();
  }, [loaded]);

  // Índice activo según el scroll.
  useEffect(() => {
    if (reduceMotion) return;
    const el = wrapperRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const scrollable = rect.height - window.innerHeight;
        if (scrollable <= 0) return;
        const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);
        const idx = Math.min(Math.floor(progress * projects.length), projects.length - 1);
        setActive((prev) => (prev === idx ? prev : idx));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [reduceMotion]);

  const current = projects[active];

  // ---- Fallback accesible ----
  if (reduceMotion) {
    return (
      <section id="demo-web" className="py-20 sm:py-28 md:py-32 bg-[#050505] text-white border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-16">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-grandis-extended tracking-tighter uppercase leading-[0.9]">
            Software que <span className="text-[#78B803]">Hace la Diferencia</span>
          </h2>
          {projects.map((p, i) => (
            <div key={i} className="space-y-3">
              <span className="text-[#78B803] text-xs font-bold tracking-widest uppercase">{p.category}</span>
              <h3 className="text-xl font-black uppercase">{p.title}</h3>
              <img src={loaded ? p.poster : undefined} alt={p.title} loading="lazy" className="w-full rounded-xl bg-black" />
              <p className="text-gray-500 text-sm">{p.desc}</p>
              <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-[#78B803] text-xs font-bold uppercase tracking-widest">
                Abrir en vivo →
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // ---- Scroll pinado ----
  return (
    <div
      ref={wrapperRef}
      id="demo-web"
      className="relative bg-[#050505] text-white border-t border-white/5"
      style={{ height: `${projects.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Izquierda: mockup de navegador */}
            <div className="order-1">
              <div className="relative w-full max-w-[540px] mx-auto">
                <div className="absolute -inset-10 bg-[#78B803]/5 blur-[90px] rounded-2xl pointer-events-none animate-pulse-green" aria-hidden="true" />
                <div className="relative rounded-2xl bg-[#0d0d0d] border border-white/10 overflow-hidden shadow-2xl shadow-black/70">
                  {/* Barra del navegador */}
                  <div className="flex items-center gap-3 px-4 py-3 bg-[#111111] border-b border-white/5">
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]/70" />
                      <div className="w-3 h-3 rounded-full bg-[#febc2e]/70" />
                      <div className="w-3 h-3 rounded-full bg-[#28c840]/70" />
                    </div>
                    <div className="flex-1 flex items-center gap-2 bg-[#0a0a0a] border border-white/5 rounded-md px-3 py-1.5 min-w-0">
                      <svg className="w-3 h-3 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="text-[10px] text-gray-500 font-mono truncate">{current.url}</span>
                    </div>
                  </div>

                  {/* Pantalla */}
                  <div ref={screenRef} className="relative aspect-video bg-black overflow-hidden">
                    {/* Capa base: capturas (crossfade) */}
                    {projects.map((p, i) => (
                      <img
                        key={i}
                        src={loaded ? p.poster : undefined}
                        alt={p.title}
                        loading="lazy"
                        decoding="async"
                        className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${
                          i === active ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    ))}

                    {/* Capa en vivo: solo el activo, si es público */}
                    {loaded && current.live && (
                      <iframe
                        key={current.live}
                        src={current.live}
                        title={current.title}
                        loading="lazy"
                        className="absolute top-0 left-0 origin-top-left pointer-events-none border-0"
                        style={{
                          width: BASE_W,
                          height: BASE_W * (9 / 16),
                          transform: `scale(${scale})`,
                        }}
                      />
                    )}

                    {/* Indicador "en vivo" */}
                    {current.live && (
                      <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#78B803] animate-pulse" />
                        <span className="text-[9px] font-bold tracking-widest uppercase text-white/80">En vivo</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="absolute -bottom-3 left-6 right-6 h-3 bg-black/60 blur-md rounded-full" aria-hidden="true" />
              </div>
            </div>

            {/* Derecha: info del proyecto activo */}
            <div className="order-2">
              <div className="inline-flex items-center gap-3 text-[#78B803] text-[10px] sm:text-xs tracking-[0.3em] uppercase border border-[#78B803]/20 px-3 sm:px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-[#78B803] rounded-full animate-pulse" />
                Desarrollo Web
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-grandis-extended tracking-tighter uppercase leading-[0.9] md:leading-[0.88] mb-8">
                Software que <br />
                <span className="text-[#78B803]">Hace la Diferencia</span>
              </h2>

              <div className="relative min-h-[230px]">
                {projects.map((p, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      i === active ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <span className="text-[#78B803] text-xs font-bold tracking-widest uppercase mb-2 block">
                      {p.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-3">{p.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-5">{p.desc}</p>

                    <div className="flex items-center gap-4 flex-wrap mb-6">
                      {p.tech.map((t) => (
                        <span key={t.name} className="inline-flex items-center gap-2 text-xs text-gray-400">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ background: t.color }} />
                          {t.name}
                        </span>
                      ))}
                      {p.note && <span className="text-xs text-gray-600 italic">{p.note}</span>}
                    </div>

                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black bg-[#78B803] hover:bg-[#8fd60a] rounded-full px-5 py-3 transition-colors"
                    >
                      Abrir en vivo
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 mt-10">
                {projects.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === active ? "w-10 bg-[#78B803]" : "w-4 bg-white/15"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}