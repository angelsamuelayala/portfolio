import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-6xl mx-auto text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <span className="px-4 py-1 rounded-full glass text-neon-blue font-mono text-xs mb-8 border-white/5">
          Contacto
        </span>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Construyamos algo útil
        </h2>
        
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Estoy disponible para colaborar en proyectos web, mejoras de interfaces y nuevas ideas digitales.
        </p>

        <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-3xl relative group">
          {/* Neon Blue Background Gradient Card */}
          <div className="absolute inset-0 bg-neon-blue/5 blur-[100px] group-hover:bg-neon-purple/10 transition-all duration-1000"></div>
          <div className="relative bg-gradient-to-r from-neon-blue/20 to-dark-surface/40 p-10 md:p-16 text-left border border-white/5 backdrop-blur-md">
            <p className="text-gray-200 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
              Si quieres conversar sobre una oportunidad, una colaboración o una mejora para tu producto, será un gusto hablar contigo.
            </p>
            
            <div className="space-y-4 mb-12">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-gray-400 font-medium">Correo:</span>
                <span className="text-white text-2xl md:text-3xl font-bold break-all hover:text-neon-blue transition-colors cursor-pointer">angel.samuel121001@gmail.com</span>
              </div>
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-gray-400 font-medium">Celular:</span>
                <span className="text-white text-2xl md:text-3xl font-bold">+591 65022350</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://www.linkedin.com/in/angel-samuel-ayala-gemio-006b5b34a"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-full glass border-white/10 text-white font-medium hover:bg-white/5 transition-all"
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/angelsamuelayala"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-full glass border-white/10 text-white font-medium hover:bg-white/5 transition-all"
              >
                GitHub
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
      
      <div className="mt-32 text-gray-600 font-mono text-xs pb-8 uppercase tracking-widest">
        <p>© {new Date().getFullYear()} Angel Samuel Ayala Gemio</p>
      </div>
    </section>
  );
};

export default Contact;
