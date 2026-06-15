'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Mic, BookOpen, Sparkles } from 'lucide-react';
import Navbar from '@/components/ui/Navbar';
import { featuredProjects, contentProjects, publicationProjects } from '@/data/projects';
import type { Project } from '@/data/projects';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
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
        {project.status && (
          <p className="mb-3 inline-flex w-fit items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-200">
            {project.status}
          </p>
        )}
        <p className="text-gray-400 mb-4 flex-grow">
          {project.shortDescription}
        </p>

        {/* WasteEasy Lite / coming-soon callout */}
        {project.comingSoon && (
          <div className="mb-4 flex items-start gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3">
            <Sparkles size={15} className="mt-0.5 shrink-0 text-emerald-400" />
            <p className="text-xs font-bold leading-relaxed text-emerald-300">
              {project.comingSoon}
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-xs px-2 py-1 bg-gray-800 rounded-md text-gray-300">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs px-2 py-1 bg-gray-800 rounded-md text-gray-300">
              +{project.tags.length - 3}
            </span>
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
  );
}

function CategorySection({
  icon,
  title,
  subtitle,
  projects,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  projects: Project[];
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="mb-20"
    >
      {/* Section header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gray-900 border border-gray-700 text-white">
            {icon}
          </span>
          <h2 className="text-2xl font-bold text-white">{title}</h2>
        </div>
        <p className="text-gray-500 text-sm ml-12">{subtitle}</p>
        <div className="mt-4 ml-12 h-px bg-gradient-to-r from-gray-700 to-transparent" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <Navbar />
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4 text-center text-white"
        >
          My Projects & Work
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-500 mb-16 max-w-xl mx-auto"
        >
          A collection of apps, content, and writing across different disciplines.
        </motion.p>

        <CategorySection
          icon={<ExternalLink size={18} />}
          title="Featured Projects"
          subtitle="Apps and platforms I've designed, built, and shipped."
          projects={featuredProjects}
          delay={0.15}
        />

        <CategorySection
          icon={<Mic size={18} />}
          title="Content & Media"
          subtitle="Podcasts, videos, and creative content I produce."
          projects={contentProjects}
          delay={0.2}
        />

        <CategorySection
          icon={<BookOpen size={18} />}
          title="Publications"
          subtitle="Books I've written — fiction and technical."
          projects={publicationProjects}
          delay={0.25}
        />
      </section>
    </main>
  );
}
