"use client";

import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

export default function AboutScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      camera={{ position: [0, 0, 6], fov: 45 }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 3, 3]} intensity={40} color="#6be39b" />
      <pointLight position={[-3, -2, -2]} intensity={25} color="#2f9e63" />

      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh position={[-3.4, 1.5, -1]}>
          <icosahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial
            color="#123321"
            emissive="#2f9e63"
            emissiveIntensity={0.7}
            roughness={0.4}
            metalness={0.2}
            wireframe
          />
        </mesh>
      </Float>

      <Float speed={1.1} rotationIntensity={0.4} floatIntensity={1.6}>
        <mesh position={[3.6, -1.3, -2]}>
          <torusGeometry args={[0.5, 0.16, 16, 64]} />
          <meshStandardMaterial
            color="#123321"
            emissive="#6be39b"
            emissiveIntensity={0.55}
            roughness={0.5}
            metalness={0.15}
          />
        </mesh>
      </Float>

      <Float speed={0.9} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[2.7, 2.2, -3]}>
          <octahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial
            color="#123321"
            emissive="#2f9e63"
            emissiveIntensity={0.6}
            roughness={0.4}
            metalness={0.2}
            wireframe
          />
        </mesh>
      </Float>
    </Canvas>
  );
}
