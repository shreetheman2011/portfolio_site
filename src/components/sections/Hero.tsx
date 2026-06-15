"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import FloatingShape from "@/components/canvas/FloatingShape";

const BIRTH_MONTH = 3; // March
const BIRTH_DAY = 11;

function calculateAge(now: Date, birthYear: number) {
  const monthIndex = BIRTH_MONTH - 1; // JS months are 0-indexed
  let age = now.getFullYear() - birthYear;

  const hadBirthdayThisYear =
    now.getMonth() > monthIndex ||
    (now.getMonth() === monthIndex && now.getDate() >= BIRTH_DAY);

  if (!hadBirthdayThisYear) age -= 1;

  return age;
}

export default function Hero() {
  const birthYear = 2011;
  const [age, setAge] = useState<number>(() =>
    calculateAge(new Date(), birthYear),
  );

  useEffect(() => {
    if (!birthYear) return;

    let t: number | null = null;

    const scheduleNextMidnightTick = () => {
      const now = new Date();
      const nextMidnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        0,
        0,
        1,
        0,
      );

      const ms = nextMidnight.getTime() - now.getTime();

      t = window.setTimeout(() => {
        setAge(calculateAge(new Date(), birthYear));
        scheduleNextMidnightTick();
      }, ms);
    };

    scheduleNextMidnightTick();

    return () => {
      if (t !== null) window.clearTimeout(t);
    };
  }, [birthYear]);

  return (
    <section className="relative w-full min-h-[100svh] pt-28 sm:pt-32 flex flex-col md:flex-row items-stretch overflow-hidden">
      {/* Subtle divider line */}
      <div className="pointer-events-none absolute inset-x-0 top-[96px] h-px bg-line" />

      {/* Text Content */}
      <div className="relative z-10 w-full md:w-[52%] px-6 sm:px-10 md:px-16 py-10 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.22em] text-muted">
            Portfolio
          </p>

          <h1 className="mt-4 font-editorial text-5xl sm:text-6xl md:text-7xl leading-[0.94] text-ink">
            Shree
            <br />
            Manickaraja<span className="text-accent">.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted max-w-xl leading-relaxed">
            Building helpful, human-first software across data science, AI/ML, and
            full-stack development.
          </p>

          <p className="mt-3 text-sm text-muted">
            Age{" "}
            <span className="text-ink font-semibold text-base sm:text-lg">
              {age}
            </span>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-paper font-semibold hover:bg-ink/90 transition-colors"
            >
              View work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-line bg-paper px-6 py-3 text-ink font-semibold hover:bg-wash transition-colors"
            >
              Say hello
            </Link>
            <span className="inline-flex items-center rounded-full border border-line bg-paper px-4 py-3 text-sm text-muted">
              Currently open to internships
            </span>
          </div>
        </motion.div>
      </div>

      {/* 3D Scene (kept, but treated like an editorial "photo") */}
      <div className="relative w-full md:w-[48%] min-h-[40svh] md:min-h-0">
        <div className="absolute inset-0 border-l border-line hidden md:block" />
        <div className="absolute inset-0 opacity-70">
          <Canvas className="w-full h-full">
            <ambientLight intensity={0.55} />
            <directionalLight position={[8, 10, 4]} intensity={1.1} />
            <FloatingShape />
            <Environment preset="sunset" />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}

