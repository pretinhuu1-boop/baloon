"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "./ui/split-text";

gsap.registerPlugin(ScrollTrigger);

const challengeFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "15 Chutes Consecutivos",
    description:
      "Você tem 15 tentativas para acertar o travessão. Quanto mais acertos, melhor sua posição no ranking.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
    title: "Distância Mínima: 20m",
    description:
      "O chute deve ser de fora da grande área — aproximadamente 20,15 metros do gol.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "Regra Anti-Discussão",
    description:
      "Só pontua se a bola acertar o travessão e voltar para dentro do campo. Sem dúvidas, sem polêmicas.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Validação por IA",
    description:
      "A inteligência artificial analisa distância, trajetória, contato e rebote. Tudo automático e auditado.",
  },
];

export function MetricsShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLParagraphElement>(null);
  const headerWhiteRef = useRef<HTMLSpanElement>(null);
  const headerGoldRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const mockupContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      [tagRef, subtitleRef].forEach((ref) => {
        if (ref.current) {
          ref.current.style.opacity = "1";
          ref.current.style.transform = "none";
        }
      });
      [headerWhiteRef, headerGoldRef].forEach((ref) => {
        if (ref.current) {
          ref.current.style.opacity = "1";
          const chars = ref.current.querySelectorAll(".char");
          chars.forEach((c) => {
            (c as HTMLElement).style.opacity = "1";
            (c as HTMLElement).style.transform = "none";
          });
        }
      });
      if (cardsContainerRef.current) {
        const cards = cardsContainerRef.current.querySelectorAll(".feature-card");
        cards.forEach((c) => {
          (c as HTMLElement).style.opacity = "1";
          (c as HTMLElement).style.transform = "none";
        });
      }
      if (mockupContainerRef.current) {
        mockupContainerRef.current.style.opacity = "1";
        mockupContainerRef.current.style.transform = "none";
      }
      return;
    }

    const ctx = gsap.context(() => {
      // --- HEADER ANIMATIONS (scrubbed) ---
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      });

      // Tag "O DESAFIO" — letterSpacing + fade
      if (tagRef.current) {
        gsap.set(tagRef.current, { opacity: 0, letterSpacing: "0.5em" });
        headerTl.fromTo(
          tagRef.current,
          { opacity: 0, letterSpacing: "0.5em" },
          { opacity: 1, letterSpacing: "0.2em" },
          0
        );
      }

      // Header chars — rotateX flip
      if (headerWhiteRef.current) {
        const whiteChars = headerWhiteRef.current.querySelectorAll(".char");
        gsap.set(whiteChars, { opacity: 0, rotateX: 90 });
        headerTl.fromTo(
          whiteChars,
          { opacity: 0, rotateX: 90 },
          { opacity: 1, rotateX: 0, stagger: 0.02 },
          0.1
        );
      }

      if (headerGoldRef.current) {
        const goldChars = headerGoldRef.current.querySelectorAll(".char");
        gsap.set(goldChars, { opacity: 0, rotateX: 90 });
        headerTl.fromTo(
          goldChars,
          { opacity: 0, rotateX: 90 },
          { opacity: 1, rotateX: 0, stagger: 0.02 },
          0.2
        );
      }

      // Subtitle — fade + blur
      if (subtitleRef.current) {
        gsap.set(subtitleRef.current, { opacity: 0, y: 20, filter: "blur(4px)" });
        headerTl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20, filter: "blur(4px)" },
          { opacity: 1, y: 0, filter: "blur(0px)" },
          0.4
        );
      }

      // --- FEATURE CARDS (scrubbed) ---
      if (cardsContainerRef.current) {
        const cards = cardsContainerRef.current.querySelectorAll(".feature-card");
        const accents = cardsContainerRef.current.querySelectorAll(".card-accent");
        const icons = cardsContainerRef.current.querySelectorAll(".card-icon");

        gsap.set(cards, { x: -120, rotateY: -25, scale: 0.85, opacity: 0 });
        gsap.set(accents, { scaleY: 0, transformOrigin: "top" });
        gsap.set(icons, { rotateZ: -180, opacity: 0 });

        const cardsTl = gsap.timeline({
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        });

        cardsTl.fromTo(
          cards,
          { x: -120, rotateY: -25, scale: 0.85, opacity: 0 },
          {
            x: 0,
            rotateY: 0,
            scale: 1,
            opacity: 1,
            stagger: 0.15,
          },
          0
        );

        // Gold accent lines — after cards land
        cardsTl.fromTo(
          accents,
          { scaleY: 0 },
          { scaleY: 1, stagger: 0.15 },
          0.4
        );

        // Icon spin-in
        cardsTl.fromTo(
          icons,
          { rotateZ: -180, opacity: 0 },
          { rotateZ: 0, opacity: 1, stagger: 0.15 },
          0.2
        );
      }

      // --- APP MOCKUP (independent scrub) ---
      if (mockupContainerRef.current) {
        const glowLayer1 = mockupContainerRef.current.querySelector(".glow-layer-1");
        const glowLayer2 = mockupContainerRef.current.querySelector(".glow-layer-2");
        const glowLayer3 = mockupContainerRef.current.querySelector(".glow-layer-3");

        gsap.set(mockupContainerRef.current, { y: 150, opacity: 0, scale: 0.9 });
        if (glowLayer1) gsap.set(glowLayer1, { opacity: 0 });
        if (glowLayer2) gsap.set(glowLayer2, { opacity: 0 });
        if (glowLayer3) gsap.set(glowLayer3, { opacity: 0 });

        const mockupTl = gsap.timeline({
          scrollTrigger: {
            trigger: mockupContainerRef.current,
            start: "top 85%",
            end: "top 25%",
            scrub: 1.5,
          },
        });

        mockupTl.fromTo(
          mockupContainerRef.current,
          { y: 150, opacity: 0, scale: 0.9 },
          { y: -30, opacity: 1, scale: 1 },
          0
        );

        // Glow layers 1-3: lights turning on
        if (glowLayer1) {
          mockupTl.fromTo(glowLayer1, { opacity: 0 }, { opacity: 1 }, 0.3);
        }
        if (glowLayer2) {
          mockupTl.fromTo(glowLayer2, { opacity: 0 }, { opacity: 1 }, 0.5);
        }
        if (glowLayer3) {
          mockupTl.fromTo(glowLayer3, { opacity: 0 }, { opacity: 1 }, 0.7);
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="desafio"
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Preserve metricas id for backwards compat */}
      <div id="metricas" className="absolute top-0" />

      {/* Subtle radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,165,74,0.05)_0%,_transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(26,71,42,0.08)_0%,_transparent_50%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            ref={tagRef}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-ballion-gold mb-4 font-body"
          >
            O DESAFIO
          </p>
          <h2
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase mb-6"
            style={{ perspective: "1200px" }}
          >
            <SplitText ref={headerWhiteRef} style={{ display: "inline" }}>
              DESAFIO DAS
            </SplitText>{" "}
            <SplitText
              ref={headerGoldRef}
              className="text-ballion-gold"
              style={{ display: "inline" }}
            >
              15 BOLAS
            </SplitText>
          </h2>
          <p
            ref={subtitleRef}
            className="font-body text-lg text-ballion-muted max-w-3xl mx-auto leading-relaxed"
          >
            O primeiro desafio da BALLION é simples de entender e difícil de
            dominar: acerte o travessão o máximo de vezes em 15 chutes.
          </p>
        </div>

        {/* 2-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Feature cards */}
          <div
            ref={cardsContainerRef}
            className="flex flex-col gap-5"
            style={{ perspective: "1200px" }}
          >
            {challengeFeatures.map((feature) => (
              <div
                key={feature.title}
                className="feature-card group relative glass rounded-2xl p-6 hover:border-ballion-gold/30 transition-all duration-500"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Gold left accent */}
                <div className="card-accent absolute left-0 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-ballion-gold/40 to-transparent" />

                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="card-icon shrink-0 w-11 h-11 rounded-xl bg-ballion-gold/10 border border-ballion-gold/20 flex items-center justify-center text-ballion-gold group-hover:bg-ballion-gold/20 group-hover:border-ballion-gold/40 transition-all duration-300">
                    {feature.icon}
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <h3 className="font-heading text-lg font-bold uppercase mb-1.5 text-white group-hover:text-ballion-gold transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="font-body text-sm text-ballion-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: App mockup with layered polish */}
          <div ref={mockupContainerRef} className="flex justify-center items-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] mx-auto">

              {/* Layer 1: Deep ambient glow */}
              <div className="glow-layer-1 absolute -inset-16 bg-[radial-gradient(ellipse_at_center,_rgba(212,165,74,0.12)_0%,_rgba(212,165,74,0.04)_40%,_transparent_70%)] pointer-events-none blur-3xl" />

              {/* Layer 2: Concentrated spotlight */}
              <div className="glow-layer-2 absolute inset-0 -inset-y-8 bg-[radial-gradient(ellipse_at_center,_rgba(212,165,74,0.18)_0%,_transparent_60%)] pointer-events-none blur-2xl" />

              {/* Layer 3: Top-down stadium light spill */}
              <div className="glow-layer-3 absolute -top-20 left-1/2 -translate-x-1/2 w-[200%] h-32 bg-[radial-gradient(ellipse_at_center,_rgba(212,165,74,0.08)_0%,_transparent_70%)] pointer-events-none blur-xl" />

              {/* Layer 4: The actual mockup image */}
              <div className="relative z-10">
                <Image
                  src="/images/app-mockup-cropped.png"
                  alt="BALLION App — Desafio das 15 Bolas"
                  width={1400}
                  height={1536}
                  loading="eager"
                  className="w-full h-auto"
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 380px, 420px"
                />
              </div>

              {/* Layer 5: Top edge fade */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-ballion-black via-ballion-black/60 to-transparent z-20 pointer-events-none" />

              {/* Layer 6: Bottom edge fade */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ballion-black via-ballion-black/60 to-transparent z-20 pointer-events-none" />

              {/* Layer 7: Left edge fade */}
              <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-ballion-black/50 to-transparent z-20 pointer-events-none" />

              {/* Layer 8: Specular highlight */}
              <div className="absolute top-[8%] right-[18%] w-px h-[30%] bg-gradient-to-b from-transparent via-white/10 to-transparent z-20 pointer-events-none" />

              {/* Layer 9: Floor reflection */}
              <div className="absolute -bottom-8 left-[15%] right-[15%] h-8 bg-[radial-gradient(ellipse_at_top,_rgba(212,165,74,0.08)_0%,_transparent_80%)] pointer-events-none blur-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
