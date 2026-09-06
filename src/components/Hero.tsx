export const Hero = () => {
  return (
    <section id="inicio" className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
      {/* Columna de Texto */}
      <div className="md:w-1/2 relative">
        <span className="text-xs uppercase tracking-widest font-bold text-[#ff1b82] block mb-2">
          Sabor Tradicional Casero
        </span>
        <h1 className="text-4xl md:text-6xl font-['Playfair_Display',_serif] font-bold leading-[1.1] mb-6 text-[#4a252a]">
          Banquetes & Mesas con <br />
          el cariño de la <span className="italic text-[#ff1b82]">buena cocina.</span>
        </h1>
        <p className="text-base md:text-lg font-normal mb-8 max-w-md text-[#4a252a]/80 leading-relaxed">
          Una selección de bocadillos, antojitos y dulces elaborados artesanalmente en porciones cuidadas para acompañar tus reuniones más memorables.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-[#2c1518] text-white hover:bg-[#4a252a] px-6 py-3.5 rounded-full font-semibold transition-colors flex items-center gap-2 shadow-lg text-sm cursor-pointer">
            🍴 Explorar la Carta
          </button>
          <button className="bg-transparent border-2 border-[#4a252a] text-[#4a252a] hover:bg-[#4a252a] hover:text-white px-6 py-3.5 rounded-full font-semibold transition-colors flex items-center gap-2 text-sm cursor-pointer">
            🤍 Apartar Menú
          </button>
        </div>
      </div>

      {/* Columna de Imagen */}
      <div className="md:w-1/2 relative w-full flex justify-center">
        <img 
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Panes artesanales recién horneados" 
          className="rounded-[2.5rem] shadow-2xl object-cover h-[380px] w-full max-w-lg border-4 border-white relative z-10" 
        />
        <div className="absolute -bottom-4 -left-4 text-3xl z-20">🍃</div>
        <div className="absolute -top-4 -right-4 text-3xl z-20">💕</div>
      </div>
    </section>
  );
};