import { menuPillarsData } from '../data/menuData';

export const Menu = () => (
  <section id="recetas" className="bg-white py-16 px-6 rounded-t-[3rem] shadow-[0_-15px_30px_rgba(74,37,42,0.03)] mt-8">
    <div className="max-w-7xl mx-auto text-center mb-12">
      <span className="text-xs font-bold uppercase tracking-widest text-[#4a252a]/60">Tiempos del Banquete</span>
      <h2 className="font-['Playfair_Display',_serif] text-3xl md:text-4xl font-bold text-[#4a252a] mt-1">
        Nuestra Carta Familiar
      </h2>
      <p className="text-sm text-[#4a252a]/70 mt-2">Cuatro propuestas diseñadas para disfrutarse a fuego lento en tu celebración.</p>
    </div>

    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {menuPillarsData.map((pillar) => (
        <div key={pillar.id} className="bg-[#fffbf9] rounded-2xl p-6 shadow-sm border border-[#4a252a]/10 flex flex-col">
          <span className="text-[10px] font-bold text-[#ff1b82] uppercase tracking-widest mb-2 block">{pillar.tag}</span>
          <h3 className="font-['Playfair_Display',_serif] text-2xl font-bold mb-3 text-[#4a252a]">{pillar.title}</h3>
          <p className="text-xs text-[#4a252a]/80 mb-6 leading-relaxed flex-grow">
            {pillar.description}
          </p>
          <ul className="space-y-4 mb-8 border-t border-[#4a252a]/10 pt-4">
            {pillar.items.map((item, index) => (
              <li key={index} className="flex gap-2 items-start text-xs">
                <span className="text-[#ff1b82] font-bold mt-0.5">•</span>
                <div>
                  <strong className="text-[#4a252a]">{item.name}</strong> 
                  <span className="block text-[#4a252a]/70 italic mt-0.5">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
          <button className="w-full bg-[#ff1b82] hover:bg-[#ff5aa4] text-white py-2.5 rounded-xl text-xs font-semibold transition-colors mt-auto shadow-sm cursor-pointer">
            {pillar.ctaText}
          </button>
        </div>
      ))}
    </div>
  </section>
);