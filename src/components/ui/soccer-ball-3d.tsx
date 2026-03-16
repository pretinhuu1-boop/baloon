"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Environment } from "@react-three/drei";
import * as THREE from "three";
import type { Mesh, Group } from "three";

function PentagonPattern() {
  const texture = useMemo(() => {
    const size = 512;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d")!;

    // Base gold metallic
    const gradient = ctx.createRadialGradient(
      size / 2, size / 2, 0,
      size / 2, size / 2, size / 2
    );
    gradient.addColorStop(0, "#F5D78E");
    gradient.addColorStop(0.5, "#D4A54A");
    gradient.addColorStop(1, "#A67C2E");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    // Pentagon pattern lines
    ctx.strokeStyle = "rgba(26, 26, 26, 0.35)";
    ctx.lineWidth = 2;

    // Draw hexagonal/pentagon-like grid
    const cellSize = 80;
    for (let row = -1; row < size / cellSize + 1; row++) {
      for (let col = -1; col < size / cellSize + 1; col++) {
        const offsetX = row % 2 === 0 ? 0 : cellSize / 2;
        const cx = col * cellSize + offsetX;
        const cy = row * cellSize * 0.866;
        const r = cellSize * 0.45;

        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i - Math.PI / 6;
          const x = cx + r * Math.cos(angle);
          const y = cy + r * Math.sin(angle);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();

        // Fill alternating cells darker for pentagon effect
        if ((row + col) % 3 === 0) {
          ctx.fillStyle = "rgba(26, 26, 26, 0.2)";
          ctx.fill();
        }
      }
    }

    // Subtle seam lines
    ctx.strokeStyle = "rgba(166, 124, 46, 0.3)";
    ctx.lineWidth = 1;
    for (let i = 0; i < 8; i++) {
      const y = (size / 8) * i;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.bezierCurveTo(size * 0.3, y + 15, size * 0.7, y - 15, size, y);
      ctx.stroke();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    return tex;
  }, []);

  return texture;
}

function Ball() {
  const groupRef = useRef<Group>(null);
  const meshRef = useRef<Mesh>(null);
  const ringRef = useRef<Mesh>(null);
  const ring2Ref = useRef<Mesh>(null);
  const texture = PentagonPattern();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (!groupRef.current) return;

    // Gentle floating
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.15;

    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.25;
      meshRef.current.rotation.x = Math.sin(t * 0.15) * 0.08;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.12;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.08;
      ring2Ref.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main soccer ball — textured gold metallic */}
      <Sphere ref={meshRef} args={[1.5, 64, 64]}>
        <meshPhysicalMaterial
          map={texture}
          roughness={0.15}
          metalness={0.95}
          clearcoat={1}
          clearcoatRoughness={0.05}
          envMapIntensity={2}
          color="#D4A54A"
        />
      </Sphere>

      {/* Subtle emissive inner glow */}
      <Sphere args={[1.48, 32, 32]}>
        <meshBasicMaterial
          color="#D4A54A"
          transparent
          opacity={0.08}
        />
      </Sphere>

      {/* Gold orbit ring — slowly rotating */}
      <mesh ref={ringRef}>
        <torusGeometry args={[2.0, 0.02, 16, 120]} />
        <meshStandardMaterial
          color="#D4A54A"
          emissive="#D4A54A"
          emissiveIntensity={0.5}
          transparent
          opacity={0.7}
          metalness={1}
          roughness={0.2}
        />
      </mesh>

      {/* Second ring — tilted */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 5, 0, Math.PI / 7]}>
        <torusGeometry args={[2.1, 0.012, 16, 120]} />
        <meshStandardMaterial
          color="#F5D78E"
          emissive="#F5D78E"
          emissiveIntensity={0.3}
          transparent
          opacity={0.35}
          metalness={1}
          roughness={0.3}
        />
      </mesh>

      {/* Third ring — opposite tilt for depth */}
      <mesh rotation={[-Math.PI / 8, Math.PI / 4, 0]}>
        <torusGeometry args={[2.2, 0.008, 16, 120]} />
        <meshBasicMaterial color="#F5D78E" transparent opacity={0.15} />
      </mesh>

      {/* Lighting setup — multi-angle for metallic reflections */}
      <pointLight position={[5, 3, 5]} color="#F5D78E" intensity={20} distance={25} />
      <pointLight position={[-5, 4, 3]} color="#D4A54A" intensity={12} distance={20} />
      <pointLight position={[0, -4, 4]} color="#ffffff" intensity={5} distance={15} />
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 8, 5]} color="#ffffff" intensity={2.5} />
      <directionalLight position={[-2, -3, 4]} color="#D4A54A" intensity={1.5} />
    </group>
  );
}

export function SoccerBall3D({ className }: { className?: string }) {
  return (
    <div className={className} style={{ position: "relative", width: "100%", height: "100%" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          style={{ background: "transparent" }}
          dpr={[1, 2]}
          gl={{ alpha: true, antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
        >
          <Ball />
        </Canvas>
      </div>
    </div>
  );
}
