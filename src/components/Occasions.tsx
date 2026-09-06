import { occasionsData } from '../data/menuData';

export const Occasions = () => (
  <section className="max-w-5xl mx-auto px-6 py-8">
    <div className="text-center mb-6">
      <span className="text-[11px] font-bold tracking-widest uppercase text-[#4a252a]/60">Ocasiones Especiales</span>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {occasionsData.map((occasion) => (
        <div key={occasion.id} className="bg-white rounded-2xl p-5 shadow-sm border border-[#4a252a]/10 hover:-translate-y-1 transition-all cursor-pointer text-center flex flex-col items-center justify-center">
          <div className="text-3xl mb-2">{occasion.icon}</div>
          <h4 className="font-bold text-xs tracking-wider uppercase text-[#4a252a] mb-1">{occasion.title}</h4>
          <p className="text-xs text-[#4a252a]/70">{occasion.subtitle}</p>
        </div>
      ))}
    </div>
  </section>
);