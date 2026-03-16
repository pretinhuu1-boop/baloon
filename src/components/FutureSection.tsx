"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "./ui/split-text";

gsap.registerPlugin(ScrollTrigger);

const sports = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="11" stroke="#D4A54A" strokeWidth="2" />
        <path d="M24 13v22M13 24h22" stroke="#D4A54A" strokeWidth="1.5" />
        <path d="M16 16l16 16M32 16L16 32" stroke="#D4A54A" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
    title: "BASQUETE",
    description: "Arremessos de longa dist\u00e2ncia validados por IA.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <ellipse cx="24" cy="24" rx="10" ry="14" stroke="#D4A54A" strokeWidth="2" transform="rotate(-30 24 24)" />
        <line x1="24" y1="8" x2="24" y2="40" stroke="#D4A54A" strokeWidth="1.5" />
        <line x1="14" y1="14" x2="34" y2="34" stroke="#D4A54A" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
    title: "T\u00caNIS",
    description: "Acertar o alvo na quadra com precis\u00e3o.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="36" r="3" fill="#D4A54A" />
        <line x1="24" y1="33" x2="24" y2="10" stroke="#D4A54A" strokeWidth="2" />
        <path d="M24 10l8 4v6l-8-4" fill="#34D399" opacity="0.6" />
      </svg>
    ),
    title: "GOLF",
    description: "Hole-in-one challenge.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="14" stroke="#D4A54A" strokeWidth="2" />
        <circle cx="24" cy="24" r="9" stroke="#D4A54A" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="4" fill="#D4A54A" />
      </svg>
    ),
    title: "PRECIS\u00c3O",
    description: "Qualquer esporte de mira.",
  },
];

export function FutureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLSpanElement>(null);
  const titleAlemRef = useRef<HTMLSpanElement>(null);
  const titleFutebolRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      // Make all hidden elements visible immediately
      if (tagRef.current) {
        tagRef.current.style.opacity = "1";
        tagRef.current.style.transform = "none";
      }
      if (titleAlemRef.current) {
        titleAlemRef.current.style.opacity = "1";
        const chars = titleAlemRef.current.querySelectorAll(".char");
        chars.forEach((c) => {
          (c as HTMLElement).style.opacity = "1";
          (c as HTMLElement).style.transform = "none";
        });
      }
      if (titleFutebolRef.current) {
        titleFutebolRef.current.style.opacity = "1";
        const chars = titleFutebolRef.current.querySelectorAll(".char");
        chars.forEach((c) => {
          (c as HTMLElement).style.opacity = "1";
          (c as HTMLElement).style.transform = "none";
        });
      }
      if (subtitleRef.current) {
        subtitleRef.current.style.opacity = "1";
        subtitleRef.current.style.transform = "none";
      }
      cardRefs.current.forEach((card) => {
        if (card) {
          card.style.opacity = "1";
          card.style.transform = "none";
        }
      });
      if (taglineRef.current) {
        taglineRef.current.style.opacity = "1";
        taglineRef.current.style.transform = "none";
      }
      return;
    }

    const ctx = gsap.context(() => {
      // Header animations
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Tag: letter spacing animation
      if (tagRef.current) {
        headerTl.fromTo(
          tagRef.current,
          { opacity: 0, letterSpacing: "0.4em" },
          { opacity: 1, letterSpacing: "0.15em", duration: 0.6 }
        );
      }

      // "AL\u00c9M DO": SplitText char fade
      if (titleAlemRef.current) {
        const alemChars = titleAlemRef.current.querySelectorAll(".char");
        headerTl.fromTo(
          alemChars,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.03, duration: 0.4 },
          "-=0.2"
        );
      }

      // "FUTEBOL": SplitText chars slide from right with tilt
      if (titleFutebolRef.current) {
        const futebolChars = titleFutebolRef.current.querySelectorAll(".char");
        headerTl.fromTo(
          futebolChars,
          { opacity: 0, x: 50, rotateZ: 10 },
          { opacity: 1, x: 0, rotateZ: 0, stagger: 0.04, duration: 0.5, ease: "back.out(1.4)" },
          "-=0.2"
        );
      }

      // Subtitle fade up
      if (subtitleRef.current) {
        headerTl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.2"
        );
      }

      // Card orbit entrances
      const orbits = [
        { x: -250, y: -60, rotateY: 35 },
        { x: 250, y: -60, rotateY: -35 },
        { x: -250, y: 60, rotateY: 35 },
        { x: 250, y: 60, rotateY: -35 },
      ];

      const validCards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

      if (validCards.length > 0) {
        const cardsTl = gsap.timeline({
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top 70%",
            once: true,
          },
        });

        validCards.forEach((card, i) => {
          const orbit = orbits[i] || orbits[0];
          cardsTl.fromTo(
            card,
            { x: orbit.x, y: orbit.y, rotateY: orbit.rotateY, opacity: 0, scale: 0.8 },
            { x: 0, y: 0, rotateY: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
            i * 0.15
          );

          // SVG stroke draw after card lands
          const paths = card.querySelectorAll(".sport-icon path, .sport-icon line, .sport-icon circle, .sport-icon ellipse");
          paths.forEach((path) => {
            const el = path as SVGGeometryElement;
            if (typeof el.getTotalLength === "function") {
              const totalLength = el.getTotalLength();
              gsap.set(el, { strokeDasharray: totalLength, strokeDashoffset: totalLength });
              cardsTl.to(
                el,
                { strokeDashoffset: 0, duration: 0.6, ease: "power2.out" },
                (i * 0.15) + 0.5
              );
            }
          });
        });
      }

      // Bottom tagline
      if (taglineRef.current) {
        gsap.fromTo(
          taglineRef.current,
          { opacity: 0, y: 30, letterSpacing: "0.3em" },
          {
            opacity: 1,
            y: 0,
            letterSpacing: "0.05em",
            duration: 0.8,
            scrollTrigger: {
              trigger: taglineRef.current,
              start: "top 60%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="futuro"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 stadium-light-center pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <span
            ref={tagRef}
            className="text-sm font-semibold uppercase tracking-widest text-ballion-gold mb-4 inline-block"
            style={{ opacity: 0 }}
          >
            Visão de Futuro
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white mt-3">
            <SplitText ref={titleAlemRef} style={{ opacity: 0 }}>
              {"AL\u00c9M DO "}
            </SplitText>
            <SplitText ref={titleFutebolRef} className="text-ballion-gold" style={{ opacity: 0 }}>
              FUTEBOL
            </SplitText>
          </h2>
          <p
            ref={subtitleRef}
            className="text-ballion-muted text-lg mt-4 max-w-2xl mx-auto"
            style={{ opacity: 0 }}
          >
            A BALLION não é só futebol. É uma plataforma global de desafios
            esportivos. Sempre seguindo o conceito:{" "}
            <span className="text-white font-semibold">
              Uma bola. Um celular. Um milhão.
            </span>
          </p>
        </div>

        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ perspective: 1200, transformStyle: "preserve-3d" }}
        >
          {sports.map((sport, index) => (
            <div
              key={sport.title}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="group relative glass rounded-2xl p-6 text-center hover:border-ballion-gold/40 transition-colors duration-300"
              style={{ opacity: 0 }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ballion-gold/0 to-transparent group-hover:via-ballion-gold/60 transition-all duration-500" />

              <div className="sport-icon flex justify-center mb-4">{sport.icon}</div>
              <h3 className="font-heading text-2xl text-white mb-2">
                {sport.title}
              </h3>
              <p className="text-ballion-muted text-sm">{sport.description}</p>
            </div>
          ))}
        </div>

        <p
          ref={taglineRef}
          className="text-center text-ballion-gold mt-12 text-lg font-medium"
          style={{ opacity: 0 }}
        >
          Cada novo esporte = novo mercado + novo público + nova receita
        </p>
      </div>
    </section>
  );
}
