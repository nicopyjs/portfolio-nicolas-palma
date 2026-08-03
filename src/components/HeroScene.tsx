"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function Core() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.08;
    meshRef.current.rotation.y += delta * 0.12;

    const targetX = state.pointer.y * 0.25;
    const targetY = state.pointer.x * 0.35;
    setPointer((prev) => ({
      x: THREE.MathUtils.lerp(prev.x, targetX, 0.04),
      y: THREE.MathUtils.lerp(prev.y, targetY, 0.04),
    }));
    meshRef.current.rotation.x += pointer.x * delta;
    meshRef.current.rotation.y += pointer.y * delta;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.6, 4]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          emissive="#22d3ee"
          emissiveIntensity={0.15}
          distort={0.42}
          speed={1.6}
          roughness={0.15}
          metalness={0.6}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
}

function WireCore() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y -= delta * 0.06;
    ref.current.rotation.z += delta * 0.03;
  });
  return (
    <mesh ref={ref} scale={2.35}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.12} />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={80} color="#22d3ee" />
      <pointLight position={[-5, -3, -5]} intensity={60} color="#8b5cf6" />
      <Core />
      <WireCore />
      <Sparkles count={90} scale={[9, 6, 6]} size={2.2} speed={0.25} color="#9494b8" opacity={0.6} />
      <fog attach="fog" args={["#05050a", 6, 11]} />
    </Canvas>
  );
}
