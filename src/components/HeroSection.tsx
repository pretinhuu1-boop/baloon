"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import dynamic from "next/dynamic";
import Image from "next/image";
import { GoldButton } from "./ui/gold-button";
import { ParticleBg } from "./ui/particle-bg";
import { ErrorBoundary } from "./ui/error-boundary";

const SoccerBall3D = dynamic(
  () => import("./ui/soccer-ball-3d").then((mod) => ({ default: mod.SoccerBall3D })),
  { ssr: false }
);

export function HeroSection() {
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      [line1Ref, line2Ref, line3Ref, subtitleRef, ctaRef].forEach((ref) => {
        if (ref.current) {
          ref.current.style.opacity = "1";
          ref.current.style.transform = "none";
        }
      });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });

      tl.fromTo(
        line1Ref.current,
        { opacity: 0, y: 60, skewY: 3 },
        { opacity: 1, y: 0, skewY: 0, duration: 0.7, ease: "power3.out" }
      )
        .fromTo(
          line2Ref.current,
          { opacity: 0, y: 60, skewY: 3 },
          { opacity: 1, y: 0, skewY: 0, duration: 0.7, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          line3Ref.current,
          { opacity: 0, y: 60, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.4)" },
          "-=0.35"
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
      {/* Hero background video — cinematic crossbar challenge */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-ball.png"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/videos/hero-crossbar-web.mp4" type="video/mp4" />
      </video>

      {/* Fallback static image for no-video support */}
      <noscript>
        <Image
          src="/images/hero-ball.png"
          alt=""
          fill
          className="object-cover opacity-15"
          sizes="100vw"
        />
      </noscript>

      {/* Dark overlay gradients for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ballion-black/70 via-ballion-black/85 to-ballion-black z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-ballion-black/60 via-transparent to-ballion-black/60 z-[1]" />

      {/* Stadium spotlight effects — golden radial gradients in upper corners */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_top_left,_rgba(212,165,74,0.12)_0%,_transparent_60%)] z-[2] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_top_right,_rgba(212,165,74,0.10)_0%,_transparent_60%)] z-[2] pointer-events-none" />

      {/* Particles background */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <ParticleBg />
      </div>

      {/* Content */}
      <div className="relative z-[3] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col gap-6">
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] uppercase">
              <span
                ref={line1Ref}
                className="block text-white opacity-0"
              >
                UMA BOLA.
              </span>
              <span
                ref={line2Ref}
                className="block text-white opacity-0"
              >
                UM CELULAR.
              </span>
              <span
                ref={line3Ref}
                className="block text-gold-gradient opacity-0"
              >
                UM MILHÃO!
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="font-body text-lg sm:text-xl text-ballion-muted max-w-xl leading-relaxed opacity-0"
            >
              Acerte o travessão, grave pelo celular e concorra a prêmios de até
              R$&nbsp;1.000.000. Qualquer pessoa, em qualquer lugar do mundo.
            </p>

            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 opacity-0"
            >
              <GoldButton href="#como-funciona">
                SAIBA COMO FUNCIONA
              </GoldButton>
              <GoldButton href="#desafio" variant="ghost">
                VER O DESAFIO
              </GoldButton>
            </div>
          </div>

          {/* Right: 3D Ball — desktop only */}
          <div className="relative hidden lg:block h-[500px]">
            <ErrorBoundary
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-ballion-gold/30 to-ballion-gold/5 animate-glow-pulse" />
                </div>
              }
            >
              <SoccerBall3D className="w-full h-full" />
            </ErrorBoundary>

            {/* Spotlight glow behind ball */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,165,74,0.18)_0%,_transparent_55%)] pointer-events-none" />
          </div>

        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ballion-black to-transparent z-[3] pointer-events-none" />
    </section>
  );
}
