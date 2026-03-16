"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import dynamic from "next/dynamic";
import Image from "next/image";
import { GoldButton } from "./ui/gold-button";
import { ParticleBg } from "./ui/particle-bg";
import { ErrorBoundary } from "./ui/error-boundary";
import { SplitText } from "./ui/split-text";

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
          const chars = ref.current.querySelectorAll(".char");
          chars.forEach((c) => {
            (c as HTMLElement).style.opacity = "1";
            (c as HTMLElement).style.transform = "none";
          });
        }
      });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });

      const chars1 = line1Ref.current?.querySelectorAll(".char") || [];
      const chars2 = line2Ref.current?.querySelectorAll(".char") || [];
      const chars3 = line3Ref.current?.querySelectorAll(".char") || [];

      // Line 1: "UMA BOLA." — 3D rotate from below with perspective
      if (line1Ref.current) line1Ref.current.style.perspective = "600px";
      tl.fromTo(
        chars1,
        { opacity: 0, rotateX: 90, y: 20 },
        {
          opacity: 1, rotateX: 0, y: 0,
          duration: 0.5, ease: "power3.out",
          stagger: 0.03,
        }
      )
        // Line 2: "UM CELULAR." — drop from above with bounce
        .fromTo(
          chars2,
          { opacity: 0, y: -40, scaleY: 1.4 },
          {
            opacity: 1, y: 0, scaleY: 1,
            duration: 0.5, ease: "back.out(1.4)",
            stagger: 0.03,
          },
          "-=0.3"
        )
        // Line 3: "UM MILHÃO!" — scale explosion + gold glow
        .fromTo(
          chars3,
          { opacity: 0, scale: 0, rotateZ: -15 },
          {
            opacity: 1, scale: 1, rotateZ: 0,
            duration: 0.6, ease: "back.out(1.7)",
            stagger: 0.04,
          },
          "-=0.3"
        )
        // Gold glow pulse on line 3 after chars land
        .fromTo(
          line3Ref.current,
          { textShadow: "0 0 0px rgba(212,165,74,0)" },
          {
            textShadow: "0 0 30px rgba(212,165,74,0.6), 0 0 60px rgba(212,165,74,0.3)",
            duration: 0.8, ease: "power2.out",
            yoyo: true, repeat: 1,
          },
          "-=0.2"
        )
        // Subtitle
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.8"
        )
        // CTA buttons
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3"
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
              <SplitText
                ref={line1Ref}
                className="block text-white"
              >
                UMA BOLA.
              </SplitText>
              <SplitText
                ref={line2Ref}
                className="block text-white"
              >
                UM CELULAR.
              </SplitText>
              <SplitText
                ref={line3Ref}
                className="block text-ballion-gold"
              >
                UM MILHÃO!
              </SplitText>
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
          <div className="relative hidden lg:block h-[550px] overflow-visible">
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

            {/* Vignette fades — dissolve edges instead of hard clip */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-ballion-black to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ballion-black to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-ballion-black to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-ballion-black/60 to-transparent z-10 pointer-events-none" />
          </div>

        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ballion-black to-transparent z-[3] pointer-events-none" />
    </section>
  );
}
