'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center text-white"
      >
        Featured Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all"
          >
            <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              {project.status && (
                <p className="mb-3 inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-200">
                  {project.status}
                </p>
              )}
              <p className="text-gray-400 mb-4 h-24 overflow-hidden">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.slice(0, 4).map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 bg-gray-800 rounded-md text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                    <Github size={18} /> Code
                  </a>
                )}
                <a href={project.demo} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <ExternalLink size={18} /> {project.demoLabel ?? 'Demo'}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
