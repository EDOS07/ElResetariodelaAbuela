import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Occasions } from './components/Occasions';
import { Menu } from './components/Menu';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#fbe8ea] font-['Inter',_sans-serif] text-[#4a252a] antialiased selection:bg-[#ff1b82] selection:text-white min-h-screen">
      <Header />
      <Hero />
      <Occasions />
      <Menu />
      <ContactCTA />
      <Footer />
    </div>
  );
}