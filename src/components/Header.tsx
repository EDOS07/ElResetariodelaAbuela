import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center border-b border-[#4a252a]/10 bg-[#fbe8ea]/90 backdrop-blur-md sticky top-0 z-50">
      {/* Logotipo e Identidad */}
      <div className="flex items-center gap-3">
        <div className="text-3xl">👵👧</div>
        <div>
          <span className="font-['Playfair_Display',_serif] text-xl md:text-2xl uppercase tracking-wider font-extrabold text-[#4a252a] block leading-none">
            EL RECETARIO <br/><span className="italic lowercase font-normal text-[#d6006c]">de la abuela</span>
          </span>
          <span className="block text-[11px] font-medium text-[#4a252a]/70 mt-1">
            hecho con amor
          </span>
        </div>
      </div>
      
      {/* Navegación principal para Escritorio */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        
        <a href="#recetas" className="hover:text-[#d6006c] transition-colors">
          Carta
        </a>
        <a href="#pedidos" className="hover:text-[#d6006c] transition-colors">
          Paquetes Especiales
        </a>
        <a href="#nosotros" className="hover:text-[#d6006c] transition-colors">
          Sobre Nosotros
        </a>        
      </nav>

      {/* Botón de Acción Directa & Hamburguesa (Móvil) */}
      <div className="flex items-center gap-3">
        <a 
          href="#contacto" 
          className="bg-[#d6006c] hover:bg-[#b00057] text-white px-4 md:px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-colors shadow-md flex items-center gap-2"
        >
          📅 Cotizar Fecha
        </a>

        {/* Botón Menú Hamburguesa */}
        <button 
          onClick={toggleMenu}
          aria-label="Abrir menú de navegación"
          className="md:hidden text-2xl text-[#4a252a] focus:outline-none cursor-pointer p-1"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Menú Desplegable Responsivo para Móviles */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#fbe8ea] border-b border-[#4a252a]/10 shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden animate-fadeIn">
          <a 
            href="#inicio" 
            onClick={() => setIsOpen(false)}
            className="text-base font-medium hover:text-[#d6006c] transition-colors py-2 border-b border-[#4a252a]/5"
          >
            Inicio
          </a>
          <a 
            href="#recetas" 
            onClick={() => setIsOpen(false)}
            className="text-base font-medium hover:text-[#d6006c] transition-colors py-2 border-b border-[#4a252a]/5"
          >
            Nuestras Recetas
          </a>
          <a 
            href="#pedidos" 
            onClick={() => setIsOpen(false)}
            className="text-base font-medium hover:text-[#d6006c] transition-colors py-2 border-b border-[#4a252a]/5"
          >
            Pedidos Especiales
          </a>
          <a 
            href="#nosotros" 
            onClick={() => setIsOpen(false)}
            className="text-base font-medium hover:text-[#d6006c] transition-colors py-2 border-b border-[#4a252a]/5"
          >
            Sobre Nosotros
          </a>
          <div className="flex items-center justify-between pt-2">
            <span className="text-sm font-medium">Ver carrito</span>
            <button aria-label="Carrito de compras" className="text-xl hover:text-[#d6006c] transition-colors cursor-pointer">
              🛒
            </button>
          </div>
        </div>
      )}
    </header>
  );
};