export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 sm:py-28 md:py-32 bg-black text-white overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
        <div className="reveal space-y-6 sm:space-y-8 md:space-y-10">
          <div className="inline-flex items-center gap-3 text-[#78B803] text-[10px] sm:text-xs tracking-[0.3em] uppercase border border-[#78B803]/20 px-3 sm:px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 bg-[#78B803] rounded-full animate-pulse" />
            ¿Quiénes Somos?
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-grandis-extended tracking-tighter uppercase leading-[0.9] md:leading-[0.88]">
            Fuente de <br />{" "}
            <span className="text-[#78B803]">Creatividad</span> <br /> e Innovación
          </h2>

          <p className="text-base sm:text-lg text-gray-400 max-w-lg leading-relaxed">
            En <strong className="text-white">SOURCE COMPANY ESTUDIOS</strong>, somos una fuente de creatividad e
            innovación dedicada a proporcionar soluciones integrales en diseño gráfico, desarrollo de software y
            producción audiovisual.
          </p>

          <p className="text-base sm:text-lg text-gray-500 max-w-lg leading-relaxed">
            Desde nuestros inicios, hemos mantenido un compromiso firme con la excelencia y la satisfacción del cliente,
            trabajando para transformar ideas en realidades visuales y tecnológicas que impacten y perduren.
          </p>

          <div className="grid grid-cols-1 gap-6 pt-4">
            <div className="pl-5 sm:pl-6 border-l-2 border-[#78B803]">
              <h4 className="text-xs sm:text-sm font-bold tracking-widest text-[#78B803] uppercase mb-2">Nuestra Misión</h4>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Somos aliados estratégicos de nuestros clientes, brindándoles herramientas y servicios que potencian sus
                proyectos y les permiten destacarse en un mercado competitivo.
              </p>
            </div>
            <div className="pl-5 sm:pl-6 border-l-2 border-white/10">
              <h4 className="text-xs sm:text-sm font-bold tracking-widest text-gray-400 uppercase mb-2">Nuestra Visión</h4>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                Ser líderes en la industria creativa y tecnológica, reconocidos por nuestra capacidad de innovar. El
                futuro pertenece a aquellos que se atreven a soñar y a crear.
              </p>
            </div>
          </div>
        </div>

        <div className="reveal relative h-[380px] sm:h-[500px] md:h-[700px] rounded-2xl sm:rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Source Team"
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8">
            <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <p className="text-base sm:text-lg md:text-xl font-medium italic text-gray-200 leading-snug">
                "Creemos que el futuro pertenece a aquellos que se atreven a soñar y a crear."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
