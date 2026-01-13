'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/ui/Navbar';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <Navbar />
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          My Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all flex flex-col"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-gray-800 rounded-md text-gray-300">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                     <span className="text-xs px-2 py-1 bg-gray-800 rounded-md text-gray-300">+{project.tags.length - 3}</span>
                  )}
                </div>
                <Link 
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors mt-auto"
                >
                  View Details <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
