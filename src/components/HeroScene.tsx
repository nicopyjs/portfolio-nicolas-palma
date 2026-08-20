"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const SERIES = [1.1, 1.8, 0.9, 2.3, 1.5, 2.0, 1.2, 1.7, 0.85];
const SPACING = 0.62;
const BASE_Y = -1.2;
const BASE_FOV = 42;

function ResponsiveCamera() {
  const { camera, size } = useThree();

  useEffect(() => {
    if (!(camera instanceof THREE.PerspectiveCamera)) return;
    const aspect = size.width / size.height;
    // Keep the base FOV for landscape/desktop; widen it on narrow
    // (portrait/mobile) viewports so the same chart width stays visible
    // instead of reading as a tight, cropped zoom.
    const referenceAspect = Math.min(aspect, 1);
    const targetHorizontalTan = Math.tan(THREE.MathUtils.degToRad(BASE_FOV) / 2);
    const fov = THREE.MathUtils.radToDeg(
      2 * Math.atan(targetHorizontalTan / referenceAspect)
    );
    camera.fov = Math.min(fov, 85);
    camera.position.z = aspect < 1 ? 6.4 : 5.6;
    camera.updateProjectionMatrix();
  }, [camera, size]);

  return null;
}

function DataChart() {
  const groupRef = useRef<THREE.Group>(null);
  const barsRef = useRef<(THREE.Mesh | null)[]>([]);
  const count = SERIES.length;
  const linePositions = useMemo(() => new Float32Array(count * 3), [count]);
  const lineGeometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    return geom;
  }, [linePositions]);
  const lineObject = useMemo(
    () =>
      new THREE.Line(
        lineGeometry,
        new THREE.LineBasicMaterial({ color: "#6be39b", transparent: true, opacity: 0.85 })
      ),
    [lineGeometry]
  );

  useFrame((state) => {
    const group = groupRef.current;
    if (group) {
      group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, state.pointer.x * 0.35, 0.04);
      group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, -state.pointer.y * 0.15 + 0.08, 0.04);
    }

    const t = state.clock.elapsedTime;
    barsRef.current.forEach((mesh, i) => {
      if (!mesh) return;
      const h = SERIES[i] + Math.sin(t * 0.6 + i * 0.9) * 0.18;
      mesh.scale.y = h;
      mesh.position.y = h / 2 + BASE_Y;

      const x = (i - (count - 1) / 2) * SPACING;
      linePositions[i * 3] = x;
      linePositions[i * 3 + 1] = h + BASE_Y + 0.18;
      linePositions[i * 3 + 2] = 0.42;
    });

    const attr = lineGeometry.getAttribute("position") as THREE.BufferAttribute;
    attr.needsUpdate = true;
  });

  return (
    <group ref={groupRef}>
      {SERIES.map((h, i) => {
        const x = (i - (count - 1) / 2) * SPACING;
        return (
          <mesh
            key={i}
            ref={(el) => {
              barsRef.current[i] = el;
            }}
            position={[x, h / 2 + BASE_Y, 0]}
          >
            <boxGeometry args={[0.34, 1, 0.34]} />
            <meshStandardMaterial
              color="#123321"
              emissive="#2f9e63"
              emissiveIntensity={0.85}
              roughness={0.35}
              metalness={0.25}
            />
          </mesh>
        );
      })}

      <primitive object={lineObject} />

      <mesh position={[0, BASE_Y, 0]}>
        <boxGeometry args={[count * SPACING + 0.4, 0.015, 0.015]} />
        <meshBasicMaterial color="#3c4a41" />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      camera={{ position: [0, 0.35, 5.6], fov: 42 }}
      className="!absolute inset-0"
    >
      <ResponsiveCamera />
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 4, 4]} intensity={70} color="#6be39b" />
      <pointLight position={[-4, -2, -3]} intensity={40} color="#2f9e63" />
      <DataChart />
      <Sparkles count={24} scale={[8, 4, 5]} size={1.6} speed={0.2} color="#8a9a8f" opacity={0.35} />
      <fog attach="fog" args={["#0a0f0c", 6.5, 11]} />
      <EffectComposer>
        <Bloom luminanceThreshold={0.25} luminanceSmoothing={0.85} intensity={0.6} mipmapBlur />
      </EffectComposer>
    </Canvas>
  );
}
