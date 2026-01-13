"use client";

import Link from "next/link";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import FloatingShape from "@/components/canvas/FloatingShape";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden">
      {/* Text Content */}
      <div className="z-10 w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Shree Manickaraja
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Aspiring Computer Scientist & <br /> AI/ML Enthusiast
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-lg">
            High school student passionate about building innovative apps and
            exploring the frontiers of Artificial Intelligence.
          </p>
          <div className="flex gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-gray-600 hover:border-gray-400 rounded-full font-semibold transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0 md:relative md:w-1/2 h-full z-0 opacity-50 md:opacity-100">
        <Canvas className="w-full h-full">
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <FloatingShape />
          <Environment preset="city" />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </section>
  );
}
