'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "AI Study Companion",
    description: "An intelligent study assistant that uses NLP to generate flashcards and summaries from lecture notes. Built with Next.js and OpenAI API.",
    tags: ["Next.js", "OpenAI API", "Tailwind CSS", "PostgreSQL"],
    github: "#",
    demo: "#",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "EcoTrack",
    description: "A mobile-first web app to track personal carbon footprint and suggest eco-friendly habits. Gamified with leaderboards.",
    tags: ["React", "Firebase", "Chart.js", "PWA"],
    github: "#",
    demo: "#",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Hand Gesture Controller",
    description: "A Python application that uses computer vision to control system volume and media playback using hand gestures.",
    tags: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
    github: "#",
    demo: "#",
    color: "from-purple-500 to-pink-500"
  }
];

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
              <p className="text-gray-400 mb-4 h-24 overflow-hidden">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 bg-gray-800 rounded-md text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.github} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <Github size={18} /> Code
                </a>
                <a href={project.demo} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <ExternalLink size={18} /> Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
