"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "HTML/CSS/JS", "SQL"],
  },
  {
    category: "Web/App Development",
    items: [
      "React",
      "React Native",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "HTML/CSS",
      "Vite",
      "Firebase",
      "Expo",
      "Socket.io",
      "RESTful APIs",
      "Express.js",
      "PostgreSQL",
    ],
  },
  {
    category: "AI / ML",
    items: [
      "Scikit-learn",
      "OpenCV",
      "Pandas",
      "Numpy",
      "Matplotlib",
      "TensorFlow",
    ],
  },
  {
    category: "Tools & Others",
    items: [
      "Git(hub)",
      "VS Code",
      "Figma",
      "MongoDB",
      "Prisma",
      "NeonDB",
      "Postgres SQL",
      "Replit",
      "Vercel",
      "Render",
      "Postman",
    ],
  },
  {
    category: "Soft Skills",
    items: [
      "Communication",
      "Teamwork",
      "Problem-solving",
      "Time Management",
      "Adaptability",
      "Creativity",
      "Leadership",
      "Collaboration",
      "Resilience",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-8 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          Technical Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
