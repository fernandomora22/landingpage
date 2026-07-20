import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Process from './components/Process.tsx';
import Benefits from './components/Benefits.tsx';
import Pricing from './components/Pricing.tsx';
import Renders from './components/Renders.tsx';
import FinalCTA from './components/FinalCTA.tsx';
import Footer from './components/Footer.tsx';
import WhatsAppFloat from './components/WhatsAppFloat.tsx';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-cream">
      <Navbar />
      <main>
        <Hero />
        <Process />
        <Benefits />
        <Pricing />
        <Renders />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
