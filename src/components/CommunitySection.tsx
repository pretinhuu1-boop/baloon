"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "./ui/split-text";

gsap.registerPlugin(ScrollTrigger);

const SoccerBallIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-12 h-12"
    fill="none"
    stroke="#D4A54A"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="24" cy="24" r="20" />
    <polygon points="24,10 28.5,17 19.5,17" />
    <polygon points="36,20 33,28 38,26" />
    <polygon points="12,20 10,26 15,28" />
    <polygon points="18,36 24,38 30,36" />
    <line x1="24" y1="10" x2="24" y2="4" />
    <line x1="36" y1="20" x2="41" y2="16" />
    <line x1="12" y1="20" x2="7" y2="16" />
    <line x1="18" y1="36" x2="13" y2="41" />
    <line x1="30" y1="36" x2="35" y2="41" />
    <line x1="19.5" y1="17" x2="15" y2="28" />
    <line x1="28.5" y1="17" x2="33" y2="28" />
    <line x1="15" y1="28" x2="18" y2="36" />
    <line x1="33" y1="28" x2="30" y2="36" />
    <line x1="19.5" y1="17" x2="28.5" y2="17" />
    <line x1="15" y1="28" x2="33" y2="28" />
    <line x1="18" y1="36" x2="30" y2="36" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-12 h-12"
    fill="none"
    stroke="#D4A54A"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="12" y="4" width="24" height="40" rx="4" />
    <line x1="18" y1="8" x2="30" y2="8" />
    <circle cx="24" cy="24" r="6" />
    <circle cx="24" cy="24" r="2.5" fill="#D4A54A" stroke="none" />
    <circle cx="24" cy="40" r="1.5" fill="#D4A54A" stroke="none" />
  </svg>
);

const GoalIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-12 h-12"
    fill="none"
    stroke="#D4A54A"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" y1="12" x2="44" y2="12" />
    <line x1="8" y1="12" x2="8" y2="44" />
    <line x1="40" y1="12" x2="40" y2="44" />
    <line x1="8" y1="12" x2="4" y2="6" />
    <line x1="40" y1="12" x2="44" y2="6" />
    <line x1="8" y1="20" x2="40" y2="20" />
    <line x1="8" y1="28" x2="40" y2="28" />
    <line x1="8" y1="36" x2="40" y2="36" />
    <line x1="18" y1="12" x2="18" y2="44" />
    <line x1="28" y1="12" x2="28" y2="44" />
  </svg>
);

const items = [
  {
    icon: <SoccerBallIcon />,
    title: "1 Bola",
    subtitle: "Qualquer bola. De qualquer marca. De qualquer lugar do mundo.",
  },
  {
    icon: <PhoneIcon />,
    title: "1 Celular",
    subtitle: "O mesmo que você já tem no bolso. É tudo que precisa pra filmar.",
  },
  {
    icon: <GoalIcon />,
    title: "1 Gol",
    subtitle: "Campo, praia, quintal. Qualquer trave. O mundo inteiro é sua arena.",
  },
];

export function CommunitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const noteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // --- Background Parallax ---
      if (imageWrapperRef.current) {
        gsap.fromTo(
          imageWrapperRef.current,
          { y: "0%" },
          {
            y: "-15%",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          }
        );
      }

      // --- Header ---
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Tag
      if (tagRef.current) {
        headerTl.fromTo(
          tagRef.current,
          { opacity: 0, letterSpacing: "0.4em" },
          { opacity: 1, letterSpacing: "0.15em", duration: 0.6 }
        );
      }

      // Headline chars with 3D rotateX
      if (headlineRef.current) {
        const chars = headlineRef.current.querySelectorAll(".char");
        headerTl.fromTo(
          chars,
          { opacity: 0, y: 40, rotateX: -60 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            stagger: 0.02,
            duration: 0.5,
          },
          "-=0.2"
        );
      }

      // --- Subtitle ---
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30, filter: "blur(4px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            scrollTrigger: {
              trigger: subtitleRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // --- Cards with 3D flip ---
      if (cardsContainerRef.current) {
        const cards = cardsContainerRef.current.querySelectorAll(".community-card");
        const icons = cardsContainerRef.current.querySelectorAll(".community-icon");

        const cardsTl = gsap.timeline({
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top 70%",
            once: true,
          },
        });

        cardsTl.fromTo(
          cards,
          { opacity: 0, y: 120, rotateX: -35, scale: 0.85 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
          }
        );

        cardsTl.fromTo(
          icons,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            ease: "back.out(2)",
            duration: 0.5,
            stagger: 0.2,
          },
          "-=0.3"
        );
      }

      // --- Note ---
      if (noteRef.current) {
        gsap.fromTo(
          noteRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: noteRef.current,
              start: "top 85%",
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
      id="acessibilidade"
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Background image with parallax wrapper */}
      <div
        ref={imageWrapperRef}
        className="absolute inset-0 overflow-hidden"
        style={{ height: "120%" }}
      >
        <Image
          src="/images/community.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
      </div>
      {/* Dark overlay - reduced opacity for more visual richness */}
      <div className="absolute inset-0 bg-ballion-black/70 z-[1]" />
      {/* Subtle gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-ballion-black/40 via-transparent to-ballion-black/90 z-[2]" />

      <div className="relative z-[3] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-8" style={{ perspective: "800px" }}>
          <p
            ref={tagRef}
            className="text-sm font-semibold uppercase tracking-widest text-ballion-gold mb-4"
            style={{ opacity: 0 }}
          >
            Acessibilidade Total
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase mb-6">
            <SplitText ref={headlineRef}>TUDO QUE VOCÊ PRECISA</SplitText>
          </h2>
        </div>

        {/* Subtitle */}
        <div ref={subtitleRef} className="text-center max-w-3xl mx-auto mb-16" style={{ opacity: 0 }}>
          <p className="text-lg sm:text-xl text-ballion-muted leading-relaxed">
            Sem estrutura oficial. Sem equipamento caro. Sem regras complicadas.
            O mundo inteiro é sua arena.
          </p>
        </div>

        {/* Three glass cards */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mb-10"
          style={{ perspective: "1000px" }}
        >
          {items.map((item) => (
            <div
              key={item.title}
              className="community-card glass rounded-2xl p-8 text-center hover:border-ballion-gold/30 transition-colors duration-300 h-full"
              style={{ opacity: 0 }}
            >
              <div className="community-icon flex justify-center mb-5" style={{ opacity: 0 }}>
                {item.icon}
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white mb-3">
                {item.title}
              </h3>
              <p className="text-ballion-muted text-sm leading-relaxed">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div ref={noteRef} className="text-center" style={{ opacity: 0 }}>
          <p className="text-sm text-ballion-muted/70">
            + conexão à internet para enviar o vídeo
          </p>
        </div>
      </div>
    </section>
  );
}
