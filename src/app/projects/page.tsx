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
      className="group relative bg-paper rounded-2xl overflow-hidden border border-line hover:bg-wash transition-colors flex flex-col"
    >
      <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-3 text-ink group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        {project.status && (
          <p className="mb-3 inline-flex w-fit items-center rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            {project.status}
          </p>
        )}
        <p className="text-muted mb-4 flex-grow">
          {project.shortDescription}
        </p>

        {/* WasteEasy Lite / coming-soon callout */}
        {project.comingSoon && (
          <div className="mb-4 flex items-start gap-2 rounded-xl border border-accent-2/25 bg-accent-2/10 px-4 py-3">
            <Sparkles size={15} className="mt-0.5 shrink-0 text-accent-2" />
            <p className="text-xs font-bold leading-relaxed text-accent-2">
              {project.comingSoon}
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-xs px-2 py-1 bg-wash border border-line rounded-md text-muted">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs px-2 py-1 bg-wash border border-line rounded-md text-muted">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center gap-2 text-accent hover:text-ink font-medium transition-colors mt-auto"
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
          <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-paper border border-line text-ink">
            {icon}
          </span>
          <h2 className="text-2xl font-semibold text-ink">{title}</h2>
        </div>
        <p className="text-muted text-sm ml-12">{subtitle}</p>
        <div className="mt-4 ml-12 h-px bg-gradient-to-r from-line to-transparent" />
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
    <main className="min-h-screen pt-24">
      <Navbar />
      <section className="py-16 sm:py-20 px-6 sm:px-8 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-editorial text-4xl sm:text-5xl mb-4 text-center text-ink"
        >
          My Projects & Work
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center text-muted mb-14 sm:mb-16 max-w-xl mx-auto"
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
