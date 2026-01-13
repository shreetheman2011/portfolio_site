"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Html,
  Image as DreiImage,
} from "@react-three/drei";
import * as THREE from "three";

export default function FloatingShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        scale={hovered ? 2.2 : 2}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <icosahedronGeometry args={[1, 15]} />
        <MeshDistortMaterial
          color={hovered ? "#8b5cf6" : "#3b82f6"}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
        />
      </mesh>

      <DreiImage
        url="/images/picOfMe.png"
        position={[-2.2, 1.2, 0]}
        scale={[1.6, 1.6]}
        setRotationFromEuler={new THREE.Euler(0, 0, Math.PI)}
      />

      <Html
        position={[2.5, 1.5, 0]}
        center
        distanceFactor={6}
        style={{ pointerEvents: "none" }}
      >
        <div className="relative bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-2xl rounded-bl-none shadow-[0_0_15px_rgba(59,130,246,0.5)] border border-blue-200 animate-pulse">
          <p className="font-bold text-sm whitespace-nowrap flex items-center gap-2">
            A big ol' blob 😁
          </p>
          {/* Speech bubble arrow */}
          {/* <div className="absolute -bottom-2 left-0 w-4 h-4 bg-white/90 transform rotate-45 border-r border-b border-blue-200"></div> */}
        </div>
      </Html>
    </Float>
  );
}
