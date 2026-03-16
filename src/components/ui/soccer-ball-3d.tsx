"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import type { Mesh } from "three";

function Ball() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
  });

  return (
    <group>
      {/* Main ball */}
      <Sphere ref={meshRef} args={[1.5, 64, 64]}>
        <MeshDistortMaterial
          color="#1a1a1a"
          roughness={0.3}
          metalness={0.8}
          distort={0.05}
          speed={2}
        />
      </Sphere>

      {/* Gold ring / glow */}
      <mesh>
        <torusGeometry args={[2, 0.02, 16, 100]} />
        <meshBasicMaterial color="#D4A54A" transparent opacity={0.6} />
      </mesh>

      {/* Gold accent light */}
      <pointLight position={[3, 3, 3]} color="#D4A54A" intensity={2} />
      <pointLight position={[-3, -1, 2]} color="#34D399" intensity={0.5} />
      <ambientLight intensity={0.3} />
    </group>
  );
}

export function SoccerBall3D({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        <Ball />
      </Canvas>
    </div>
  );
}
