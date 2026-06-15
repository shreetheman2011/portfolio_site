"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 px-6 sm:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="font-editorial text-4xl sm:text-5xl mb-10 text-center text-ink">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              Hi! I’m Shree Manickaraja. I have a strong
              interest in understanding how software and computers work at a
              deeper level. I began my journey with simple scripts and gradually
              made it to building full-stack applications, exploring system
              behavior, and tinkering with machine learning and AI concepts.
            </p>
            <p>
              I enjoy turning ideas into real projects that can help people in their daily lives and using code to
              solve real-world problems. I’m especially interested in software
              engineering and applied machine learning, and I’m always motivated
              to learn new technologies and improve my technical skills through
              hands-on work.
            </p>
            <p>
              I’m currently seeking internship opportunities where I can
              make an impact, learn from experienced engineers, and
              continue growing as a developer. Outside of coding, I participate
              in hackathons, stay up to date with emerging technologies, and
              experiment with game development and other creative programming
              projects.
            </p>
          </div>
          <div>
            <div className="flex justify-center mb-8">
              <Image
                src="/images/picOfMe.png"
                alt="Shree Manickaraja"
                width={200}
                height={200}
                className="rounded-2xl ring-1 ring-line shadow-[0_14px_50px_rgba(0,0,0,0.12)]"
              />
            </div>
            <div className="bg-paper/80 p-8 rounded-2xl border border-line hover:bg-wash transition-colors">
              <h3 className="font-editorial text-2xl font-semibold mb-4 text-ink">
                Education
              </h3>
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-accent">
                  High School
                </h4>
                <p className="text-muted">Expected Graduation: 2029</p>
                <p className="text-muted text-sm mt-1">
                  Relevant Coursework: Algebra 2, AP Computer Science
                </p>

                <p className="text-muted text-sm mt-1">
                  Relevant Extracurriculars: FRC Robotics Programming Team(as
                  well as Drive Coach)
                </p>
                <p className="text-accent-2 text-sm mt-1">GPA: 4.0</p>
              </div>
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-accent">
                  Middle School
                </h4>
                <p className="text-muted">Graduated: 2025</p>
                <p className="text-muted text-sm mt-1">
                  Relevant Coursework: Pre-Algebra, Algebra 1
                </p>
                <p className="text-muted text-sm mt-1">
                  Relevant Extracurriculars: Girls Who Code
                </p>
              </div>
              <p className="text-accent-2 text-sm mt-1">GPA: 4.0</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
