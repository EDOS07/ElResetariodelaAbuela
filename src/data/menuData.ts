export interface Occasion {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
}

export interface MenuItem {
  name: string;
  desc: string;
}

export interface MenuPillar {
  id: string;
  tag: string;
  title: string;
  description: string;
  items: MenuItem[];
  ctaText: string;
}

export const occasionsData: Occasion[] = [
  { id: 'bodas', icon: '💒', title: 'BODAS', subtitle: 'Mesa dulce & gala' },
  { id: 'cumpleanos', icon: '🎂', title: 'CUMPLEAÑOS', subtitle: 'Barra botanera viva' },
  { id: 'cocteles', icon: '🍸', title: 'COCTELES', subtitle: 'Bocadillos brioche' },
  { id: 'familiares', icon: '🏡', title: 'FAMILIARES', subtitle: 'Guisados de comal' },
];

export const menuPillarsData: MenuPillar[] = [
  {
    id: 'besos-azucar',
    tag: 'TIEMPO I • MESA DE DULCES',
    title: 'BesosAzucar',
    description: 'Mesas de postres artesanales con delicada confitería, perfecta para el brindis y la sobremesa de los invitados.',
    items: [
      { name: 'Tartas de frutas', desc: 'Crema pastelera de vainilla' },
      { name: 'Macarons artesanos', desc: 'Sabores florales y frutales' },
      { name: 'Merengues horneados', desc: 'Toque crocante y cacao' },
    ],
    ctaText: 'Cotizar BesosAzucar →',
  },
  {
    id: 'munchies',
    tag: 'TIEMPO II • BARRA BOTANERA',
    title: 'Munchies',
    description: 'Estación viva de antojitos tradicionales combinando ingredientes frescos y el toque picosito chilango.',
    items: [
      { name: 'Esquites al epazote', desc: 'Queso cotija y limoncito' },
      { name: 'Pepinos locos', desc: 'Con chamoy y fruta picada' },
      { name: 'Vasitos de frutita', desc: 'Sandía, jícama, pepino' },
    ],
    ctaText: 'Cotizar Munchies →',
  },
  {
    id: 'picatodo',
    tag: 'TIEMPO III • APERITIVOS',
    title: 'PicaTodo',
    description: 'Bocados salados irresistibles. Creados para abrir el apetito con sabores de herencia familiar.',
    items: [
      { name: 'Mini hamburguesas', desc: 'Pan brioche artesanal' },
      { name: 'Tostaditas minis', desc: 'Ceviche fresco de mariscos' },
      { name: 'Chapulines tostados', desc: 'Sazonados al ajillo' },
    ],
    ctaText: 'Cotizar PicaTodo →',
  },
  {
    id: 'apapacho',
    tag: 'TIEMPO IV • RECUERDOS',
    title: 'Apapacho',
    description: 'El sabor del hogar para llevar. Productos empacados a mano para agradecer la compañía.',
    items: [
      { name: 'Salsa macha', desc: 'Receta tradicional' },
      { name: 'Jalea mango habanero', desc: 'Dulce y picante' },
      { name: 'Chocolate de abuela', desc: 'Alto porcentaje en cacao' },
    ],
    ctaText: 'Cotizar Apapacho →',
  },
];