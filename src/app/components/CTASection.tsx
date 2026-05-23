export function CTASection() {
  return (
    <section id="contacto" className="relative bg-black py-32 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#78B803]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#78B803]/8 rounded-full blur-[100px]" />
      </div>

      <div className="reveal relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 text-[#78B803] text-xs tracking-[0.3em] uppercase border border-[#78B803]/20 px-4 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 bg-[#78B803] rounded-full animate-pulse" />
          Empecemos
        </div>

        <h2 className="text-5xl md:text-7xl font-black font-grandis-extended uppercase tracking-tighter leading-[0.88] mb-8">
          <span className="text-white">¿Listo para iniciar</span>
          <br />
          <span className="text-[#78B803]">tu Proyecto?</span>
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Colaboremos para crear algo extraordinario. Estamos aquí para convertir tu visión en resultados tangibles y
          duraderos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
           
            className="group bg-[#78B803] text-black font-black px-12 py-5 rounded-full text-sm uppercase tracking-widest hover:bg-white transition-all duration-300 hover:scale-105"
          >
            Solicitar Presupuesto →
          </a>
          <a
            href="https://wa.me/+51931794568?text=Hola, me interesa tu servicio de diseño gráfico."
            target="_blank"
            rel="noreferrer"
            className="border border-white/20 text-white font-medium px-12 py-5 rounded-full text-sm uppercase tracking-widest hover:border-[#78B803] hover:text-[#78B803] transition-all duration-300"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
