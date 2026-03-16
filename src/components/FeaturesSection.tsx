"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "./ui/split-text";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Cadastre-se",
    description:
      "Crie sua conta na BALLION em segundos. Rápido, simples e seguro.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Compre sua Tentativa",
    description:
      "Pague o buy-in para entrar no desafio. Cada tentativa dá direito a 15 chutes.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Grave seu Desafio",
    description:
      "Abra o app, pressione START e grave seus 15 chutes no travessão. A IA valida tudo.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Entre no Ranking",
    description:
      "Seu resultado entra no ranking global. Os melhores levam os prêmios milionários.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-5.54 0" />
      </svg>
    ),
  },
];

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerTagRef = useRef<HTMLSpanElement>(null);
  const headerComoRef = useRef<HTMLSpanElement>(null);
  const headerFuncionaRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      // Make everything visible instantly
      [headerTagRef, headerComoRef, headerFuncionaRef].forEach((ref) => {
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
      if (lineRef.current) lineRef.current.style.transform = "scaleX(1)";
      cardsRef.current.forEach((card) => {
        if (card) {
          card.style.opacity = "1";
          card.style.transform = "none";
        }
      });
      return;
    }

    const ctx = gsap.context(() => {
      // === HEADER ANIMATIONS ===
      // "PASSO A PASSO" tag — fade up with letter spacing expansion
      const tagChars = headerTagRef.current?.querySelectorAll(".char") || [];
      gsap.fromTo(
        tagChars,
        { opacity: 0, y: 15, letterSpacing: "0em" },
        {
          opacity: 1, y: 0, letterSpacing: "0.2em",
          duration: 0.6, ease: "power3.out",
          stagger: 0.02,
          scrollTrigger: {
            trigger: headerTagRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // "COMO" — chars sweep in from left with rotation
      const comoChars = headerComoRef.current?.querySelectorAll(".char") || [];
      gsap.fromTo(
        comoChars,
        { opacity: 0, x: -30, rotateY: -45 },
        {
          opacity: 1, x: 0, rotateY: 0,
          duration: 0.7, ease: "power3.out",
          stagger: 0.04,
          scrollTrigger: {
            trigger: headerComoRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      // "FUNCIONA" — chars explode in from right with gold glow buildup
      const funcionaChars = headerFuncionaRef.current?.querySelectorAll(".char") || [];
      gsap.fromTo(
        funcionaChars,
        { opacity: 0, x: 40, scale: 0.5, rotateZ: 10 },
        {
          opacity: 1, x: 0, scale: 1, rotateZ: 0,
          duration: 0.7, ease: "back.out(1.4)",
          stagger: 0.04,
          scrollTrigger: {
            trigger: headerFuncionaRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      // Gold glow pulse after FUNCIONA lands
      if (headerFuncionaRef.current) {
        gsap.fromTo(
          headerFuncionaRef.current,
          { textShadow: "0 0 0px rgba(212,165,74,0)" },
          {
            textShadow: "0 0 20px rgba(212,165,74,0.5), 0 0 40px rgba(212,165,74,0.2)",
            duration: 0.8, ease: "power2.out",
            yoyo: true, repeat: 1,
            scrollTrigger: {
              trigger: headerFuncionaRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // === CONNECTING LINE — progressive draw ===
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: lineRef.current,
              start: "top 75%",
              end: "top 30%",
              scrub: 1,
            },
          }
        );
      }

      // === CARDS — staggered entrance with 3D depth ===
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        const numberEl = card.querySelector(".step-number");
        const iconEl = card.querySelector(".step-icon");
        const titleEl = card.querySelector(".step-title");
        const descEl = card.querySelector(".step-desc");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        // Card container — slide up with perspective tilt
        tl.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            rotateX: 8,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            delay: i * 0.1,
          }
        );

        // Number — dramatic scale-up with parallax offset
        if (numberEl) {
          tl.fromTo(
            numberEl,
            { opacity: 0, scale: 2.5, y: -20 },
            {
              opacity: 1, scale: 1, y: 0,
              duration: 0.6, ease: "back.out(1.6)",
            },
            "-=0.5"
          );
        }

        // Icon — rotate in from side
        if (iconEl) {
          tl.fromTo(
            iconEl,
            { opacity: 0, scale: 0, rotateZ: -90 },
            {
              opacity: 1, scale: 1, rotateZ: 0,
              duration: 0.5, ease: "back.out(2)",
            },
            "-=0.4"
          );
        }

        // Title — slide in from left
        if (titleEl) {
          tl.fromTo(
            titleEl,
            { opacity: 0, x: -25, filter: "blur(4px)" },
            {
              opacity: 1, x: 0, filter: "blur(0px)",
              duration: 0.5, ease: "power3.out",
            },
            "-=0.3"
          );
        }

        // Description — fade in with slight upward drift
        if (descEl) {
          tl.fromTo(
            descEl,
            { opacity: 0, y: 15 },
            {
              opacity: 1, y: 0,
              duration: 0.5, ease: "power2.out",
            },
            "-=0.2"
          );
        }
      });

      // === ARROW CONNECTORS — fade in after cards ===
      const arrows = section.querySelectorAll(".step-arrow");
      arrows.forEach((arrow, i) => {
        gsap.fromTo(
          arrow,
          { opacity: 0, x: -10 },
          {
            opacity: 1, x: 0,
            duration: 0.4,
            delay: 0.3 + i * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: arrow,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="como-funciona"
      className="py-24 sm:py-32 relative"
      style={{ perspective: "1200px" }}
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(212,165,74,0.04)_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header — kinetic split text */}
        <div className="text-center mb-20">
          <p className="mb-4">
            <SplitText
              ref={headerTagRef}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-ballion-gold font-body opacity-0"
            >
              PASSO A PASSO
            </SplitText>
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase">
            <SplitText
              ref={headerComoRef}
              className="inline-block text-white opacity-0"
              style={{ perspective: "400px" }}
            >
              COMO
            </SplitText>
            {" "}
            <SplitText
              ref={headerFuncionaRef}
              className="inline-block text-ballion-gold opacity-0"
            >
              FUNCIONA
            </SplitText>
          </h2>
        </div>

        {/* Steps grid with connecting lines */}
        <div className="relative">
          {/* Horizontal connecting line — desktop only — now animated */}
          <div className="hidden lg:block absolute top-[72px] left-[12.5%] right-[12.5%] h-px z-0">
            <div
              ref={lineRef}
              className="w-full h-full bg-gradient-to-r from-ballion-gold/0 via-ballion-gold/30 to-ballion-gold/0"
              style={{ transformOrigin: "left center", transform: "scaleX(0)" }}
            />
          </div>

          {/* Vertical connecting line — mobile/tablet only */}
          <div className="lg:hidden absolute top-0 bottom-0 left-8 md:left-1/2 md:-translate-x-px w-px z-0">
            <div className="w-full h-full bg-gradient-to-b from-ballion-gold/0 via-ballion-gold/20 to-ballion-gold/0" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-[1]">
            {steps.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => { cardsRef.current[i] = el; }}
                className="group relative glass rounded-2xl p-8 hover:border-ballion-gold/40 transition-all duration-500 h-full opacity-0"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Gold top accent line on hover */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-ballion-gold/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Step number */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="step-number font-heading text-5xl font-bold text-ballion-gold leading-none">
                    {step.number}
                  </span>
                  <div className="step-icon w-10 h-10 rounded-xl bg-ballion-gold/10 border border-ballion-gold/20 flex items-center justify-center text-ballion-gold group-hover:bg-ballion-gold/20 transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>

                {/* Step content */}
                <h3 className="step-title font-heading text-xl font-bold uppercase mb-3 text-white group-hover:text-ballion-gold transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="step-desc font-body text-ballion-muted leading-relaxed text-sm">
                  {step.description}
                </p>

                {/* Arrow indicator to next step — not on last */}
                {i < steps.length - 1 && (
                  <div className="step-arrow hidden lg:flex absolute -right-5 top-[68px] w-10 h-10 items-center justify-center z-10 opacity-0">
                    <svg
                      className="w-5 h-5 text-ballion-gold/40"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
