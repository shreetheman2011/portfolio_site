'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Mic, BookOpen, Sparkles } from 'lucide-react';
import { featuredProjects, contentProjects, publicationProjects } from '@/data/projects';
import type { Project } from '@/data/projects';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      viewport={{ once: true }}
      className="group relative bg-paper rounded-2xl overflow-hidden border border-line hover:bg-wash transition-colors flex flex-col"
    >
      <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-semibold mb-3 text-ink group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        {project.status && (
          <p className="mb-3 inline-flex self-start rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            {project.status}
          </p>
        )}
        <p className="text-muted mb-4 flex-1">
          {project.shortDescription}
        </p>

        {/* Coming Soon callout */}
        {project.comingSoon && (
          <div className="mb-4 flex items-start gap-2 rounded-xl border border-accent-2/25 bg-accent-2/10 px-4 py-3">
            <Sparkles size={16} className="mt-0.5 shrink-0 text-accent-2" />
            <p className="text-xs font-bold leading-relaxed text-accent-2">
              {project.comingSoon}
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 4).map(tag => (
            <span key={tag} className="text-xs px-2 py-1 bg-wash border border-line rounded-md text-muted">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.github && (
            <a href={project.github} className="flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors">
              <Github size={18} /> Code
            </a>
          )}
          {project.mobileSourceCode && (
            <a href={project.mobileSourceCode} className="flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors">
              <Github size={18} /> Mobile
            </a>
          )}
          {project.demo && project.demo !== '#' && (
            <a href={project.demo} className="flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors">
              <ExternalLink size={18} /> {project.demoLabel ?? 'Demo'}
            </a>
          )}
          {project.demo === '#' && project.demoLabel && (
            <span className="flex items-center gap-2 text-sm text-muted/70 cursor-default select-none">
              <ExternalLink size={18} /> {project.demoLabel}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function SectionHeader({
  icon,
  title,
  subtitle,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-paper border border-line text-ink">
          {icon}
        </span>
        <h3 className="text-2xl font-semibold text-ink">{title}</h3>
      </div>
      <p className="text-muted text-sm ml-12">{subtitle}</p>
      <div className="mt-4 ml-12 h-px bg-gradient-to-r from-line to-transparent" />
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Main heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-editorial text-4xl sm:text-5xl mb-4 text-center text-ink"
      >
        Projects & Work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className="text-center text-muted mb-16 max-w-xl mx-auto"
      >
        A collection of apps, content, and writing across different disciplines.
      </motion.p>

      {/* ── Featured Projects ── */}
      <div className="mb-20">
        <SectionHeader
          icon={<ExternalLink size={18} />}
          title="Featured Projects"
          subtitle="Apps and platforms I've designed, built, and shipped."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* ── Content & Media ── */}
      <div className="mb-20">
        <SectionHeader
          icon={<Mic size={18} />}
          title="Content & Media"
          subtitle="Podcasts, videos, and creative content I produce."
          delay={0.05}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* ── Publications ── */}
      <div>
        <SectionHeader
          icon={<BookOpen size={18} />}
          title="Publications"
          subtitle="Books I've written — fiction and technical."
          delay={0.05}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {publicationProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
