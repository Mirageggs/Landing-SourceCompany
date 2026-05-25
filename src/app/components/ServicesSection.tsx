const services = [
  {
    num: "01",
    title: "Diseño Gráfico",
    icon: "✦",
    desc: "Branding e Identidad Corporativa, Diseño de Publicaciones y Flyers, Diseño de Interfaces de Usuario (UI).",
    span: "md:col-span-2",
  },
  {
    num: "02",
    title: "Producción Audiovisual",
    icon: "◈",
    desc: "Producción y Edición de Videos, Animación y Motion Graphics, Fotografía Profesional.",
    span: "",
  },
  {
    num: "03",
    title: "Desarrollo de Software",
    icon: "⟨/⟩",
    desc: "Aplicaciones Web y Móviles, Desarrollo de Software a Medida, Soluciones en Seguridad Informática.",
    span: "",
  },
  {
    num: "04",
    title: "Diseño UI/UX",
    icon: "⬡",
    desc: "Interfaces inmersivas y sistemas de diseño escalables para experiencias digitales excepcionales.",
    span: "md:col-span-2",
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 sm:py-28 md:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="reveal mb-12 sm:mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-grandis-extended tracking-tighter uppercase leading-[0.9] md:leading-[0.88]">
            Impulsamos <br /> <span className="text-[#78B803]">tu Marca</span>
          </h2>
          <p className="text-gray-500 max-w-xs text-sm leading-relaxed md:text-right">
            Con soluciones creativas y efectivas para destacarte en un mercado competitivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`reveal group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#78B803]/40 transition-all duration-500 overflow-hidden min-h-[200px] sm:min-h-[220px] ${service.span}`}
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-start justify-between mb-6 sm:mb-8">
                <span className="text-2xl sm:text-3xl text-[#78B803]/40 group-hover:text-[#78B803] transition-colors duration-500">
                  {service.icon}
                </span>
                <span className="text-xs text-gray-700 font-mono">{service.num}</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#78B803]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
