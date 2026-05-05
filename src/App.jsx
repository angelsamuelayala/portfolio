import React from 'react';
import ParticleBackground from './components/ui/ParticleBackground';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-dark-bg text-white">
      <ParticleBackground />
      
      {/* Content wrapper to ensure it stays above background */}
      <div className="relative z-10">
        {/* Floating Navbar */}
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <div className="glass rounded-full px-6 py-3 flex justify-between items-center border-white/10 shadow-2xl backdrop-blur-xl bg-dark-bg/60">
          {/* Brand/Identity */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 group-hover:border-neon-blue transition-colors">
              <img src="img/sam.jpeg" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <span className="text-white font-serif font-bold text-lg hidden sm:block">
              Angel Samuel Ayala Gemio
            </span>
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex gap-8 font-sans text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-neon-blue transition-colors">Sobre mí</a>
            <a href="#skills" className="hover:text-neon-blue transition-colors">Habilidades</a>
            <a href="#projects" className="hover:text-neon-blue transition-colors">Proyectos</a>
            <a href="#contact" className="hover:text-neon-blue transition-colors">Contacto</a>
          </div>


        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      </div>
    </div>
  );
}

export default App;
