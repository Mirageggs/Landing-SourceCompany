export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 md:py-40 bg-black text-white flex items-center justify-center border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#78B803]/50 to-transparent" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#78B803]/3 rounded-full blur-[150px]" />
      </div>

      <div className="reveal max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="text-5xl sm:text-6xl text-[#78B803]/30 font-black mb-6 sm:mb-8 leading-none">"</div>

        <blockquote className="text-lg sm:text-2xl md:text-4xl font-medium italic tracking-tight leading-snug mb-8 sm:mb-12 text-gray-300">
          Source no solo construyó nuestra plataforma; redefinió cómo nuestra marca es percibida a nivel global. El
          nivel de detalle es simplemente inigualable.
        </blockquote>

        <div className="flex flex-col items-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden mb-4 border-2 border-[#78B803] bg-gray-900">
            <img
              src="https://images.unsplash.com/photo-1609062757924-6c2d01b3b422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
              alt="Client"
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <h4 className="text-sm sm:text-base font-black uppercase tracking-widest text-[#78B803]">Elena Rostova</h4>
          <p className="text-[10px] sm:text-xs text-gray-600 uppercase tracking-widest mt-1">CEO, Vanguard Spaces</p>
        </div>
      </div>
    </section>
  );
}
