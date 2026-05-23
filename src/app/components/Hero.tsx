import { useEffect, useRef } from "react";

export function Hero() {
  const wordRefs = useRef<HTMLSpanElement[]>([]);
  let wordIndex = 0;

  useEffect(() => {
    wordRefs.current.forEach((node, i) => {
      if (!node) return;
      node.style.opacity = "0";
      node.style.transform = "translateY(80px)";
      node.style.transition = `opacity 1s cubic-bezier(0.16,1,0.3,1) ${0.08 * i}s, transform 1s cubic-bezier(0.16,1,0.3,1) ${0.08 * i}s`;
      window.setTimeout(() => {
        node.style.opacity = "1";
        node.style.transform = "translateY(0)";
      }, 100);
    });
  }, []);

  const renderWord = (word: string, accent = false) => {
    const idx = wordIndex++;
    return (
      <span
        key={`${word}-${idx}`}
        ref={(el) => {
          if (el) wordRefs.current[idx] = el;
        }}
        className={`inline-block mr-[0.25em] ${accent ? "text-[#78B803]" : ""}`}
      >
        {word}
      </span>
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white pt-20 group">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[70vw] h-[70vw] bg-[#78B803]/5 rounded-full blur-[150px] animate-pulse-green" />
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-white/3 rounded-full blur-[120px]" />
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#78B803 1px, transparent 1px), linear-gradient(90deg, #78B803 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="overflow-hidden mb-2">
          <div
            className="text-xs tracking-[0.4em] text-[#78B803] uppercase mb-8 opacity-0"
            style={{ animation: "fadeInUp 1s 0.2s forwards" }}
          >
            SOURCE COMPANY STUDIOS
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-[100px] font-black font-grandis-extended leading-[0.88] tracking-tighter uppercase mb-10">
          <div className="overflow-hidden leading-none mb-2">
            {"Creamos el futuro".split(" ").map((w) => renderWord(w))}
          </div>
          <div className="overflow-hidden leading-none mb-2">
            {"de la imagen".split(" ").map((w) => renderWord(w, true))}
          </div>
          <div className="overflow-hidden leading-none">
            {"y el código".split(" ").map((w) => renderWord(w))}
          </div>
        </h1>

        <p
          className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto tracking-wide font-light mb-12 opacity-0"
          style={{ animation: "fadeInUp 1s 1s forwards" }}
        >
          Diseño ultra-premium y desarrollo tecnológico de alto rendimiento para marcas que lideran el mercado.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0"
          style={{ animation: "fadeInUp 1s 1.2s forwards" }}
        >
          <a
            href="#contacto"
            className="group bg-[#78B803] text-black font-bold px-10 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-white transition-all duration-300 hover:scale-105"
          >
            Iniciar Proyecto →
          </a>
          <a
            href="#portafolio"
            className="border border-white/20 text-white font-medium px-10 py-4 rounded-full uppercase tracking-widest text-sm hover:border-[#78B803] hover:text-[#78B803] transition-all duration-300"
          >
            Ver Portafolio
          </a>
        </div>

        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
          style={{ animation: "fadeInUp 1s 1.5s forwards" }}
        >
          <span className="text-xs tracking-widest text-gray-600 uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#78B803] to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
