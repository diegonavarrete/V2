import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Journey } from './components/Journey';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Resources } from './components/Resources';
import { Footer } from './components/Footer';
import { GuiaTDAH } from './pages/GuiaTDAH';
import { Articulos } from './pages/Articulos';
import { ArticuloDetalle } from './pages/ArticuloDetalle';
import { Herramientas } from './pages/Herramientas';

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Journey />
        <Process />
        <Pricing />
        <Testimonials />
        <Resources />
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guia-tdah" element={<GuiaTDAH />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/articulos/:id" element={<ArticuloDetalle />} />
          <Route path="/herramientas" element={<Herramientas />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;