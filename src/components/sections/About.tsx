"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-gray-300">
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
                className="rounded-xl ring-4 ring-blue-500/40 shadow-xl"
              />
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Education
              </h3>
              <div className="mb-4">
                <h4 className="text-xl font-medium text-blue-400">
                  High School
                </h4>
                <p className="text-gray-400">Expected Graduation: 2029</p>
                <p className="text-gray-500 text-sm mt-1">
                  Relevant Coursework: Algebra 2, AP Computer Science
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  Relevant Extracurriculars: FRC Robotics Programming Team(as
                  well as Drive Coach)
                </p>
                <p className="text-green-500 text-sm mt-1">GPA: 4.0</p>
              </div>
              <div className="mb-4">
                <h4 className="text-xl font-medium text-blue-400">
                  Middle School
                </h4>
                <p className="text-gray-400">Graduated: 2025</p>
                <p className="text-gray-500 text-sm mt-1">
                  Relevant Coursework: Pre-Algebra, Algebra 1
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Relevant Extracurriculars: Girls Who Code
                </p>
              </div>
              <p className="text-green-500 text-sm mt-1">GPA: 4.0</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
