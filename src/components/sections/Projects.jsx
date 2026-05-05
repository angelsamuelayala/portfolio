import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { Globe, Code } from 'lucide-react';
import projectData from '../../../projects.json';

const projectLinks = {
  "fotomaster": { github: "https://github.com/angelsamuelayala/fotomaster" },
  "wally-champions": { github: "https://github.com/angelsamuelayala/examengrado1" }
};

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectData.projects || []);
  }, []);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-16"
      >
        <div className="inline-block text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Proyectos
          </h2>
          <div className="h-[3px] w-full bg-gradient-to-r from-neon-pink to-neon-purple rounded-full"></div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => {
          const links = projectLinks[project.id] || {};
          
          return (
            <Card key={project.id} delay={idx * 0.1} className="flex flex-col h-full border-b-2 border-b-neon-blue/50">
              <div className="flex justify-between items-start mb-4">
                <p className="text-neon-blue font-mono text-sm">{project.category}</p>
                <div className="flex gap-4">
                  {links.github && (
                    <a href={links.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-neon-purple transition-colors">
                      <Code size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 hover:text-neon-blue transition-colors cursor-pointer">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-6 flex-grow">
                {project.description}
              </p>
              
              <ul className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-white/5">
                {project.technologies.map((tech, tIdx) => (
                  <li key={tIdx} className="text-sm font-mono text-gray-500">
                    {tech}
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
