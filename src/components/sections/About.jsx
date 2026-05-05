import React from 'react';
import { motion } from 'framer-motion';
import samImg from '../../assets/img/sam.jpeg';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-16"
      >
        <div className="inline-block text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Sobre Mí
          </h2>
          <div className="h-[3px] w-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"></div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 space-y-8 text-lg leading-relaxed"
        >
          <p>
            Soy <strong className="text-white">Angel Samuel Ayala Gemio</strong>. Cuento con una base técnica sólida y una motivación constante por diseñar ecosistemas digitales que resuelvan problemas complejos de manera eficiente.
          </p>
          <p>
            A lo largo de mi recorrido he desarrollado aplicaciones web, de escritorio e integraciones de inteligencia artificial, fortaleciendo habilidades en lógica de negocio, procesamiento de imágenes y la arquitectura de productos escalables.
          </p>
          <p>
            Me interesa crear soluciones funcionales y de alto rendimiento, siempre cuidando la integridad del código, la experiencia del usuario y la calidad técnica del resultado final.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative group mx-auto md:mx-0 max-w-sm"
        >
          {/* Decorative Background Elements */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-neon-blue/20 to-neon-purple/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
          
          <div className="relative glass rounded-2xl p-4 border-white/10 overflow-hidden">
            <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
              <img 
                src={samImg} 
                alt="Angel Samuel Ayala Gemio" 
                className="w-full h-full object-cover transition-all duration-700 scale-110 hover:scale-100"
              />
              <div className="absolute inset-0 bg-neon-blue/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>
          
          {/* Floating tech tags */}
          <div className="absolute -bottom-6 -right-6 glass px-4 py-2 rounded-lg border-white/10 text-neon-blue font-mono text-sm shadow-2xl">
            Full Stack
          </div>
          <div className="absolute -top-6 -left-6 glass px-4 py-2 rounded-lg border-white/10 text-neon-purple font-mono text-sm shadow-2xl">
            Sistemas
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
