export const ContactCTA = () => (
  <section id="contacto" className="bg-white py-16 px-6 border-t border-[#4a252a]/5">
    <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">
      <div className="text-7xl">👩‍🍳</div>
      <div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff1b82]">Fechas Disponibles</span>
        <h2 className="text-3xl font-['Playfair_Display',_serif] font-bold mb-2 text-[#4a252a]">¿Apartamos la fecha de tu evento?</h2>
        <p className="text-xs md:text-sm mb-6 max-w-md text-[#4a252a]/80 leading-relaxed">
          Cuéntanos el día de tu reunión y la cantidad estimada de invitados. Elaboramos una cotización y degustación sin compromiso.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <button className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-full font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-md">
            💬 WhatsApp Directo
          </button>
          <button className="bg-[#ff1b82] hover:bg-[#ff5aa4] text-white px-6 py-3 rounded-full font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-md">
            📞 Llamar a Cocina
          </button>
        </div>
        <p className="text-[11px] font-semibold mt-6 text-[#4a252a]/70">
          +52 33 1234 5678 • CDMX y Área Metropolitana • <span className="italic font-normal">Cocina con Reserva Previa</span>
        </p>
      </div>
    </div>
  </section>
);