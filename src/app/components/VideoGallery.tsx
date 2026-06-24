import { useEffect, useState, useCallback } from "react";

/**
 * Galería de videos para Source Company.
 *
 * Estrategia de rendimiento ("facade"):
 *  - En la carga inicial NO se descarga ningún video, solo las imágenes poster.
 *  - El <video> o <iframe> se monta SÓLO al hacer click, dentro del lightbox.
 *  - Al cerrar el lightbox el reproductor se desmonta y libera memoria/red.
 *
 * Cada item acepta UNA de dos fuentes:
 *  - `src`      -> archivo MP4 (propio o en CDN). Se reproduce con <video> nativo.
 *  - `embedUrl` -> URL de embed de Mux / Bunny Stream / YouTube / Vimeo (<iframe>).
 *
 * Recomendación: usa `embedUrl` con un servicio de streaming para producción.
 */

type VideoItem = {
  id: number;
  title: string;
  category: string;
  poster: string;          // imagen estática (frame del video), liviana
  src?: string;            // MP4 directo (opcional)
  embedUrl?: string;       // iframe de Mux/Bunny/YouTube/Vimeo (opcional)
  tall?: boolean;          // ocupa doble alto en el grid (destacado)
};

const videos: VideoItem[] = [
  {
    id: 1,
    title: "REEL CORPORATIVO",
    category: "Producción Audiovisual",
    poster: "/posters/reel-corporativo.jpg",
    embedUrl: "https://iframe.mediadelivery.net/embed/XXXX/VIDEO_ID", // ej. Bunny Stream
    tall: true,
  },
  {
    id: 2,
    title: "SPOT PUBLICITARIO",
    category: "Motion Graphics",
    poster: "/posters/spot.jpg",
    src: "/videos/spot.mp4", // ejemplo con MP4 propio
  },
  {
    id: 3,
    title: "VIDEO INSTITUCIONAL",
    category: "Contenido Estratégico",
    poster: "/posters/institucional.jpg",
    embedUrl: "https://player.vimeo.com/video/VIDEO_ID",
  },
  {
    id: 4,
    title: "CAMPAÑA SOCIAL",
    category: "Redes Sociales",
    poster: "/posters/campana.jpg",
    src: "/videos/campana.mp4",
  },
];

export function VideoGallery() {
  const [active, setActive] = useState<VideoItem | null>(null);

  const close = useCallback(() => setActive(null), []);

  // Cerrar con tecla Escape y bloquear el scroll del body mientras está abierto.
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, close]);

  return (
    <section
      id="videos"
      className="py-20 sm:py-28 md:py-32 bg-black text-white border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
        {/* Encabezado */}
        <div className="reveal mb-12 sm:mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-3 text-[#78B803] text-[10px] sm:text-xs tracking-[0.3em] uppercase border border-[#78B803]/20 px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8">
              <span className="w-1.5 h-1.5 bg-[#78B803] rounded-full animate-pulse" />
              Galería de Video
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-grandis-extended tracking-tighter uppercase leading-[0.9] md:leading-[0.88]">
              Nuestro <span className="text-[#78B803]">Trabajo</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs text-sm leading-relaxed md:text-right">
            Una selección de piezas audiovisuales producidas para nuestras marcas. Haz click para reproducir.
          </p>
        </div>

        {/* Grid de miniaturas (NO cargan video todavía) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {videos.map((video) => (
            <button
              key={video.id}
              type="button"
              onClick={() => setActive(video)}
              aria-label={`Reproducir ${video.title}`}
              className={`reveal group relative overflow-hidden rounded-2xl cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#78B803] ${
                video.tall ? "lg:row-span-2 min-h-[300px] lg:min-h-[616px]" : "min-h-[300px]"
              }`}
            >
              {/* Poster: imagen estática y liviana, con lazy loading nativo */}
              <img
                src={video.poster}
                alt={video.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
              />

              {/* Degradado para legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Botón de play */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex items-center justify-center w-16 h-16 rounded-full bg-[#78B803]/90 text-black scale-90 group-hover:scale-100 transition-transform duration-500 shadow-lg shadow-[#78B803]/30">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-1" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </div>

              {/* Texto */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[#78B803] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-2 block">
                  {video.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight uppercase">{video.title}</h3>
              </div>

              <div className="absolute inset-0 border border-[#78B803]/0 group-hover:border-[#78B803]/20 rounded-2xl transition-all duration-500" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox: el reproductor sólo existe cuando hay un video activo */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar"
            className="absolute top-5 right-5 w-11 h-11 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-[#78B803]/40 transition-colors flex items-center justify-center text-white/70 hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5" aria-hidden="true">
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          {/* Detenemos la propagación para que el click sobre el video no cierre el modal */}
          <div
            className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden bg-black shadow-2xl shadow-black/80 ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {active.embedUrl ? (
              <iframe
                src={`${active.embedUrl}?autoplay=1`}
                title={active.title}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                src={active.src}
                poster={active.poster}
                controls
                autoPlay
                playsInline
                className="absolute inset-0 w-full h-full object-contain bg-black"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
