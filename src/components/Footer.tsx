export const Footer = () => (
  <footer className="bg-[#ba7c82] text-white py-12 px-6 rounded-t-[3rem]">
    <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
      <div className="text-center md:text-left">
        <div className="text-3xl mb-2">👵👧</div>
        <span className="font-['Playfair_Display',_serif] text-2xl font-bold block">El Recetario</span>
        <span className="italic font-light text-lg opacity-90">de la Abuela</span>
      </div>
      <div className="flex flex-col items-center md:items-end gap-4">
        <nav className="flex flex-wrap justify-center gap-6 text-xs font-medium">
          <a href="#inicio" className="hover:text-[#ff1b82] transition-colors">Inicio</a>
          <a href="#recetas" className="hover:text-[#ff1b82] transition-colors">Nuestras Recetas</a>
          <a href="#pedidos" className="hover:text-[#ff1b82] transition-colors">Pedidos Especiales</a>
          <a href="#nosotros" className="hover:text-[#ff1b82] transition-colors">Sobre Nosotros</a>
        </nav>
        <div className="flex flex-col sm:flex-row gap-4 text-xs opacity-90">
          <a href="#" className="hover:text-white flex items-center gap-1">📸 @elrecetariodelaabuela</a>
          <a href="#" className="hover:text-white flex items-center gap-1">✉️ hola@elrecetariodelaabuela.mx</a>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/20 text-center text-[11px] opacity-75">
      © {new Date().getFullYear()} El Recetario de la Abuela. Cocina honesta, banquetes entrañables y recuerdos de sobremesa.
    </div>
  </footer>
);