import { useEffect, useRef, useState } from "react";

type Slide = {
  title: string;
  category: string;
  desc: string;
  src: string;
  poster: string;
};

const slides: Slide[] = [
  {
    title: "Producción Profesional",
    category: "Reel Corporativo",
    desc: "Grabación y edición con equipos de última generación para resultados de nivel cinematográfico.",
    src: "/videos/Reel_fn_1.mp4",
    poster: "/posters/Reel_fn_1.jpg",
  },
  {
    title: "Motion Graphics",
    category: "Spot Publicitario",
    desc: "Animaciones y gráficos en movimiento que refuerzan la identidad de marca y capturan la atención.",
    src: "/videos/Reel_fn_2.mp4",
    poster: "/posters/Reel_fn_2.jpg",
  },
  {
    title: "Contenido Estratégico",
    category: "Video Institucional",
    desc: "Cada pieza audiovisual pensada para comunicar, emocionar y convertir en el canal correcto.",
    src: "/videos/Reel_fn_3.mp4",
    poster: "/posters/Reel_fn_3.jpg",
  },
  {
    title: "Redes Sociales",
    category: "Campaña Social",
    desc: "Formatos verticales de alto impacto, optimizados para Reels, TikTok y Shorts.",
    src: "/videos/Reel_fn_4.mp4",
    poster: "/posters/Reel_fn_4.jpg",
  },
];

export function DemoSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [muted, setMuted] = useState(true);
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

  useEffect(() => {
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
        const idx = Math.min(Math.floor(progress * slides.length), slides.length - 1);
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
  }, []);

  useEffect(() => {
    if (!loaded) return;
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === active) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [active, loaded]);

  return (
    <div
      ref={wrapperRef}
      id="demo"
      className="relative bg-black text-white border-t border-white/5"
      style={{ height: `${slides.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Izquierda: texto */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 text-[#78B803] text-[10px] sm:text-xs tracking-[0.3em] uppercase border border-[#78B803]/20 px-3 sm:px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-[#78B803] rounded-full animate-pulse" />
                Producción Audiovisual
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-grandis-extended tracking-tighter uppercase leading-[0.9] md:leading-[0.88] mb-8">
                Tus Ideas <br />
                <span className="text-[#78B803]">En Movimiento</span>
              </h2>

              <div className="relative min-h-[120px]">
                {slides.map((s, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      i === active ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <span className="text-[#78B803] text-xs font-bold tracking-widest uppercase mb-2 block">
                      {s.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-wider text-white mb-2">
                      {s.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-md">{s.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 mt-10">
                {slides.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === active ? "w-10 bg-[#78B803]" : "w-4 bg-white/15"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Derecha: mockup de teléfono */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative">
                <div
                  className="absolute -inset-12 bg-[#78B803]/5 blur-[80px] rounded-full pointer-events-none animate-pulse-green"
                  aria-hidden="true"
                />
                <div className="relative w-[250px] sm:w-[280px] md:w-[300px] rounded-[3.2rem] bg-[#0d0d0d] border border-white/10 p-[10px] shadow-2xl shadow-black/70">
                  <div className="flex justify-center pt-2 pb-2.5">
                    <div className="w-[88px] h-[26px] bg-black rounded-full flex items-center justify-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#1c1c1e] border border-white/10" />
                      <div className="w-[30px] h-[10px] rounded-full bg-[#1c1c1e] border border-white/10" />
                    </div>
                  </div>

                  <div className="relative rounded-[2.5rem] overflow-hidden bg-black aspect-[9/19.5]">
                    {slides.map((s, i) => (
                      <video
                        key={i}
                        ref={(node) => {
                          videoRefs.current[i] = node;
                        }}
                        src={loaded ? s.src : undefined}
                        poster={s.poster}
                        muted={muted}
                        loop
                        playsInline
                        preload={i === active ? "auto" : "metadata"}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                          i === active ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    ))}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none"
                      aria-hidden="true"
                    />
                    {/* Botones de control */}
                    <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                    {/* Pantalla completa */}
                    <button
                      type="button"
                      onClick={() => {
                        const video = videoRefs.current[active];
                        if (!video) return;
                        if (video.requestFullscreen) video.requestFullscreen();
                      }}
                      aria-label="Ver en pantalla completa"
                      className="w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                      </svg>
                    </button>
                    {/* Sonido */}
                    <button
                      type="button"
                      onClick={() => setMuted((m) => !m)}
                      aria-label={muted ? "Activar sonido" : "Silenciar"}
                      className="w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                    >
                      {muted ? (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                          <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 18L19 19.27 20.27 18 5.27 3 4.27 3zM12 4 9.91 6.09 12 8.18V4z"/>
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                        </svg>
                      )}
                    </button>
                    </div>
                  </div>

                  <div className="flex justify-center pt-2.5 pb-1">
                    <div className="w-[90px] h-[4px] bg-white/15 rounded-full" />
                  </div>
                </div>

                <div className="absolute left-[-3px] top-[96px] w-[3px] h-7 bg-white/10 rounded-l-sm" aria-hidden="true" />
                <div className="absolute left-[-3px] top-[136px] w-[3px] h-11 bg-white/10 rounded-l-sm" aria-hidden="true" />
                <div className="absolute left-[-3px] top-[160px] w-[3px] h-11 bg-white/10 rounded-l-sm" aria-hidden="true" />
                <div className="absolute right-[-3px] top-[112px] w-[3px] h-16 bg-white/10 rounded-r-sm" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
