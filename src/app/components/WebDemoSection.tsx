import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: "⬡",
    title: "Diseño Responsive",
    desc: "Cada proyecto se adapta perfectamente a cualquier dispositivo, desde móviles hasta pantallas ultra-wide.",
  },
  {
    icon: "✦",
    title: "Alto Rendimiento",
    desc: "Arquitecturas optimizadas para velocidades de carga récord, con puntuaciones Lighthouse por encima del 95.",
  },
  {
    icon: "◈",
    title: "Desarrollo a Medida",
    desc: "Sin templates ni atajos. Código limpio, escalable y pensado para crecer junto al negocio del cliente.",
  },
];

export function WebDemoSection() {
  const [videoSrc, setVideoSrc] = useState("");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoSrc("/demo-web.mp4");
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="demo-web"
      className="py-20 sm:py-28 md:py-32 bg-[#050505] text-white border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Encabezado */}
        <div className="reveal mb-16 sm:mb-20 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-3 text-[#78B803] text-[10px] sm:text-xs tracking-[0.3em] uppercase border border-[#78B803]/20 px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8">
              <span className="w-1.5 h-1.5 bg-[#78B803] rounded-full animate-pulse" />
              Desarrollo Web
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-grandis-extended tracking-tighter uppercase leading-[0.9] md:leading-[0.88]">
              Software que <br />
              <span className="text-[#78B803]">Hace la Diferencia</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs text-sm leading-relaxed md:text-right">
            Soluciones web construidas desde cero que convierten visitantes en clientes y proyectos en negocios exitosos.
          </p>
        </div>

        {/* Dos columnas — mockup izquierda, características derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Izquierda: mockup de navegador */}
          <div className="reveal flex justify-center order-1">
            <div className="relative w-full max-w-[540px]">
              {/* Resplandor ambiental */}
              <div
                className="absolute -inset-10 bg-[#78B803]/5 blur-[90px] rounded-2xl pointer-events-none animate-pulse-green"
                aria-hidden="true"
              />

              {/* Carcasa del navegador */}
              <div className="relative rounded-2xl bg-[#0d0d0d] border border-white/10 overflow-hidden shadow-2xl shadow-black/70">
                {/* Barra de herramientas del navegador */}
                <div className="flex items-center gap-3 px-4 py-3 bg-[#111111] border-b border-white/5">
                  {/* Botones de ventana */}
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]/70" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]/70" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]/70" />
                  </div>

                  {/* Barra de URL */}
                  <div className="flex-1 flex items-center gap-2 bg-[#0a0a0a] border border-white/5 rounded-md px-3 py-1.5 min-w-0">
                    <svg
                      className="w-3 h-3 text-gray-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <span className="text-[10px] text-gray-500 font-mono truncate">
                      sourcestudio.com
                    </span>
                  </div>
                </div>

                {/* Área de contenido / pantalla */}
                <div className="relative aspect-video bg-black overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    {videoSrc && <source src={videoSrc} type="video/mp4" />}
                  </video>
                  {/* Reflejo sutil */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Base / sombra de profundidad */}
              <div
                className="absolute -bottom-3 left-6 right-6 h-3 bg-black/60 blur-md rounded-full"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Derecha: características */}
          <div className="space-y-8 sm:space-y-10 order-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="reveal flex gap-5 group"
                style={{ transitionDelay: `${0.12 * index}s` }}
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-black border border-white/5 group-hover:border-[#78B803]/30 flex items-center justify-center text-[#78B803]/50 group-hover:text-[#78B803] transition-all duration-500 text-xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black uppercase tracking-wider text-white mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}

            <div className="reveal pt-4 pl-16 border-t border-white/5" style={{ transitionDelay: "0.4s" }}>
              <p className="text-[10px] sm:text-xs text-gray-600 tracking-widest uppercase">
                Construido con React, TypeScript y las mejores prácticas del mercado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
