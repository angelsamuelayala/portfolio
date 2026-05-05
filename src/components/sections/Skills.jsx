import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import Card from '../ui/Card';

const skillCategories = [
  {
    title: "Lenguajes & Core",
    icon: "code",
    skills: ["JavaScript (ES6+)", "TypeScript", "C# (.NET 8.0)", "PHP", "SQL"]
  },
  {
    title: "Frontend Ecosystem",
    icon: "layout",
    skills: ["React", "Tailwind CSS", "Framer Motion", "Vite", "Lucide Icons", "HTML5/CSS3"]
  },
  {
    title: "Backend & Escritorio",
    icon: "server",
    skills: [".NET Core", "ASP.NET Web API", "WinForms", "MaterialSkin.NET", "Node.js"]
  },
  {
    title: "IA & Computer Vision",
    icon: "cpu",
    skills: ["Emgu.CV (OpenCV)", "Dlib (Landmarks)", "Face Embeddings", "Haarcascades", "ResNet Models"]
  },
  {
    title: "Bases de Datos & Tools",
    icon: "database",
    skills: ["MySQL", "SQL Server", "Relational Design", "Newtonsoft.Json", "Git/GitHub"]
  },
  {
    title: "Metodologías de Desarrollo",
    icon: "users",
    skills: ["Scrum (Agile)", "Clean Architecture", "Calidad de Software (McCall)", "Puntos de Función"]
  }
];

const Skills = () => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const containerRef = useRef(null);

  // Duplicamos las categorías para el efecto infinito
  const displayCategories = [...skillCategories, ...skillCategories, ...skillCategories];

  const startAnimation = () => {
    controls.start({
      x: "-33.33%",
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      },
    });
  };

  useEffect(() => {
    if (!isPaused) {
      startAnimation();
    } else {
      controls.stop();
    }
  }, [isPaused, controls]);

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-1/2 -left-20 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-16 text-center px-6"
      >
        <div className="inline-block text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Habilidades Tecnológicas
          </h2>
          <div className="h-[3px] w-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"></div>
        </div>
        <p className="text-gray-400 max-w-2xl mt-6">
          Un desglose completo de las herramientas y metodologías que domino para construir soluciones de software de alta calidad.
        </p>
      </motion.div>

      {/* Main Container with Limited Width and Fade Edges */}
      <div className="max-w-7xl mx-auto px-4 relative overflow-hidden">
        {/* Fading Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-dark-bg via-dark-bg/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-dark-bg via-dark-bg/50 to-transparent z-10 pointer-events-none" />

        {/* Carousel Content */}
        <div 
          className="relative flex py-4 cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            ref={containerRef}
            drag="x"
            dragConstraints={{ left: -2000, right: 0 }}
            animate={controls}
            style={{ x }}
            onDragStart={() => setIsPaused(true)}
            onDragEnd={() => setIsPaused(false)}
            className="flex gap-6 flex-nowrap"
          >
            {displayCategories.map((category, idx) => (
              <div key={`${category.title}-${idx}`} className="w-[280px] md:w-[350px] shrink-0 select-none">
                <Card className="h-full border-l border-white/5 hover:border-neon-blue/30 transition-colors group">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-neon-blue"></div>
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center text-gray-400 group/item">
                        <span className="text-neon-purple mr-2 text-sm opacity-50 group-hover/item:opacity-100 transition-opacity">▹</span> 
                        <span className="group-hover/item:text-white transition-colors text-sm">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
