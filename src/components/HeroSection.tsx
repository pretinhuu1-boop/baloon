"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import dynamic from "next/dynamic";
import Image from "next/image";
import { GoldButton } from "./ui/gold-button";
import { ParticleBg } from "./ui/particle-bg";

const SoccerBall3D = dynamic(
  () => import("./ui/soccer-ball-3d").then((mod) => ({ default: mod.SoccerBall3D })),
  { ssr: false }
);

export function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      // Make everything visible immediately
      [headlineRef, subtitleRef, ctaRef].forEach((ref) => {
        if (ref.current) ref.current.style.opacity = "1";
      });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.2"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Hero background image */}
      <Image
        src="/images/hero-ball.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-20"
        sizes="100vw"
      />

      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ballion-black/60 via-ballion-black/80 to-ballion-black z-[1]" />

      {/* Particles background */}
      <div className="relative z-[2]">
        <ParticleBg />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(26,71,42,0.15)_0%,_transparent_70%)] z-[2]" />

      <div className="relative z-[3] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="flex flex-col gap-6">
            <h1
              ref={headlineRef}
              className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] uppercase opacity-0"
            >
              <span className="text-white">Treine como nunca.</span>
              <br />
              <span className="text-gold-gradient">Evolua como sempre.</span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg sm:text-xl text-ballion-muted max-w-lg leading-relaxed opacity-0"
            >
              O KickTrak Pro transforma qualquer campo em seu centro de treino
              pessoal. Precisão, métricas e gamificação na palma da sua mão.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 opacity-0">
              <GoldButton href="#download">Baixar Grátis</GoldButton>
              <GoldButton href="#features" variant="ghost">
                Ver como funciona
              </GoldButton>
            </div>
          </div>

          {/* Right: 3D Ball */}
          <div className="relative h-[400px] lg:h-[500px]">
            <SoccerBall3D className="w-full h-full" />

            {/* Spotlight glow behind ball */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,165,74,0.15)_0%,_transparent_60%)] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
