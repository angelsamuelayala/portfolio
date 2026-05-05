import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative px-6 star-bg pt-20">
      {/* Background ambient glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px]" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center max-w-4xl w-full"
      >
        <h1 className="text-6xl md:text-8xl font-serif mb-2 tracking-tight text-white leading-tight">
          Angel Samuel <br /> Ayala Gemio
        </h1>
        
        <div className="flex flex-col items-center mb-10">
          <p className="text-neon-blue font-bold tracking-[0.2em] text-sm md:text-base mb-1 uppercase">
            Ingeniería en Sistemas
          </p>
          <p className="text-white/60 font-medium tracking-[0.1em] text-xs md:text-sm uppercase mb-3">
            Desarrollador Full Stack
          </p>
          <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="glass rounded-2xl p-6 md:p-8 mb-8 text-left max-w-2xl mx-auto border-white/10"
        >
          <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-4">Resumen Rápido</p>
          <ul className="space-y-3 font-sans text-gray-200 text-base md:text-lg">
            <li className="flex items-start gap-2">
              <span className="text-gray-500">{'>'}</span>
              <span>JavaScript, .NET (C#), PHP, React y MySQL.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-500">{'>'}</span>
              <span>Arquitecturas SaaS, bases de datos y Scrum.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-500">{'>'}</span>
              <span>Soluciones escalables, modulares y de calidad.</span>
            </li>
          </ul>
        </motion.div>

        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Diseño productos web claros, útiles y bien estructurados, cuidando tanto la experiencia visual como la sólida lógica que los sostiene.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a 
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-neon-blue text-black font-bold hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,242,255,0.3)]"
          >
            Ver proyectos
          </motion.a>
          
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full glass text-white font-semibold hover:bg-white/5 transition-all duration-300"
          >
            Contacto
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
