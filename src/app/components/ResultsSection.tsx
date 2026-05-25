const metrics = [
  { metric: "100%", label: "Satisfacción del Cliente", desc: "Clientes satisfechos con nuestro trabajo" },
  { metric: "100+", label: "Empresas Aliadas", desc: "Marcas que confían en nosotros" },
  { metric: "500+", label: "Proyectos Entregados", desc: "Proyectos completados exitosamente" },
  { metric: "5+", label: "Años de Experiencia", desc: "De trayectoria en la industria" },
];

export function ResultsSection() {
  return (
    <section id="resultados" className="py-16 sm:py-20 md:py-24 bg-[#050505] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="reveal text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black font-grandis-extended uppercase tracking-tighter">
            Nuestros <span className="text-[#78B803]">Resultados</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="reveal group text-center p-5 sm:p-8 rounded-2xl bg-black border border-white/5 hover:border-[#78B803]/20 transition-all duration-500"
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <div className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-2 group-hover:text-[#78B803] transition-colors duration-500">
                {item.metric}
              </div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#78B803] mb-1">
                {item.label}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-600">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
