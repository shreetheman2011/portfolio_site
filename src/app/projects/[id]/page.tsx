"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white pt-32 flex flex-col items-center">
        <Navbar />
        <h1 className="text-3xl font-bold mb-4">Project not found</h1>
        <Link href="/projects" className="text-blue-400 hover:underline">
          Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <Navbar />
      <article className="max-w-4xl mx-auto px-8 py-10">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className={`h-2 w-full bg-linear-to-r ${project.color} rounded-full mb-8`}
          />

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-4 mb-8">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Github size={18} /> Source Code
              </a>
            )}
            {project.mobileSourceCode && (
              <a
                href={project.mobileSourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-2 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Github size={18} /> Mobile Source Code
              </a>
            )}
            {project.webSourceCode && (
              <a
                href={project.webSourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Github size={18} /> Web Source Code
              </a>
            )}
            {project.backendSourceCode && (
              <a
                href={project.backendSourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Github size={18} /> Backend Source Code
              </a>
            )}
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
            >
              <ExternalLink size={18} /> Live {project.mobileApp && "Web"} Demo
            </a>
            {project.mobileApp && (
              <p className="flex items-center gap-2 px-4 py-2 bg-green-600 rounded-full hover:bg-green-700 transition-colors">
                This app is a mobile app. Demo is available on Play Store and
                App Store. NAAM has a web demo as well.
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-md text-sm text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-10 text-lg text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Overview
              </h2>
              <p>{project.fullDescription}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Key Features
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </section>

            {project.challenges && (
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Challenges & Solutions
                </h2>
                <p>{project.challenges}</p>
              </section>
            )}
          </div>
        </motion.div>
      </article>
    </main>
  );
}
