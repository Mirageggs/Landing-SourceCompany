import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: "◈",
    title: "Producción Profesional",
    desc: "Grabación y edición con equipos de última generación para lograr resultados de nivel cinematográfico.",
  },
  {
    icon: "✦",
    title: "Motion Graphics",
    desc: "Animaciones y gráficos en movimiento que refuerzan la identidad de marca y capturan la atención.",
  },
  {
    icon: "⟨/⟩",
    title: "Contenido Estratégico",
    desc: "Cada pieza audiovisual pensada para comunicar, emocionar y convertir en el canal correcto.",
  },
];

export function DemoSection() {
  const [videoSrc, setVideoSrc] = useState("");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoSrc("/demo.mp4");
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
      id="demo"
      className="py-20 sm:py-28 md:py-32 bg-black text-white border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Encabezado */}
        <div className="reveal mb-16 sm:mb-20 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-3 text-[#78B803] text-[10px] sm:text-xs tracking-[0.3em] uppercase border border-[#78B803]/20 px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8">
              <span className="w-1.5 h-1.5 bg-[#78B803] rounded-full animate-pulse" />
              Producción Audiovisual
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-grandis-extended tracking-tighter uppercase leading-[0.9] md:leading-[0.88]">
              Tus Ideas <br />
              <span className="text-[#78B803]">En Movimiento</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs text-sm leading-relaxed md:text-right">
            Experiencias audiovisuales de alto impacto que combinan creatividad, técnica y narrativa al máximo nivel.
          </p>
        </div>

        {/* Dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Izquierda: características */}
          <div className="space-y-8 sm:space-y-10 order-2 lg:order-1">
            {features.map((feature, index) => (
              <div
                key={index}
                className="reveal flex gap-5 group"
                style={{ transitionDelay: `${0.12 * index}s` }}
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#0a0a0a] border border-white/5 group-hover:border-[#78B803]/30 flex items-center justify-center text-[#78B803]/50 group-hover:text-[#78B803] transition-all duration-500 text-xl">
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
                Fotografía, video y animación para marcas que quieren destacar
              </p>
            </div>
          </div>

          {/* Derecha: mockup de teléfono */}
          <div className="reveal flex justify-center order-1 lg:order-2">
            <div className="relative">
              {/* Resplandor ambiental */}
              <div
                className="absolute -inset-12 bg-[#78B803]/5 blur-[80px] rounded-full pointer-events-none animate-pulse-green"
                aria-hidden="true"
              />

              {/* Carcasa del teléfono */}
              <div className="relative w-[250px] sm:w-[280px] md:w-[300px] rounded-[3.2rem] bg-[#0d0d0d] border border-white/10 p-[10px] shadow-2xl shadow-black/70">
                {/* Dynamic island */}
                <div className="flex justify-center pt-2 pb-2.5">
                  <div className="w-[88px] h-[26px] bg-black rounded-full flex items-center justify-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-[#1c1c1e] border border-white/10" />
                    <div className="w-[30px] h-[10px] rounded-full bg-[#1c1c1e] border border-white/10" />
                  </div>
                </div>

                {/* Pantalla */}
                <div className="relative rounded-[2.5rem] overflow-hidden bg-black aspect-[9/19.5]">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    {videoSrc && <source src={videoSrc} type="video/mp4" />}
                  </video>
                  {/* Reflejo sutil de pantalla */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                {/* Indicador home */}
                <div className="flex justify-center pt-2.5 pb-1">
                  <div className="w-[90px] h-[4px] bg-white/15 rounded-full" />
                </div>
              </div>

              {/* Botones laterales izquierda */}
              <div className="absolute left-[-3px] top-[96px] w-[3px] h-7 bg-white/10 rounded-l-sm" aria-hidden="true" />
              <div className="absolute left-[-3px] top-[136px] w-[3px] h-11 bg-white/10 rounded-l-sm" aria-hidden="true" />
              <div className="absolute left-[-3px] top-[160px] w-[3px] h-11 bg-white/10 rounded-l-sm" aria-hidden="true" />
              {/* Botón lateral derecha */}
              <div className="absolute right-[-3px] top-[112px] w-[3px] h-16 bg-white/10 rounded-r-sm" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
