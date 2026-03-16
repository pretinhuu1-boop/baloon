"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "./ui/split-text";

gsap.registerPlugin(ScrollTrigger);

const comparisonData = [
  {
    label: "Tipo",
    megaSena: "Pura sorte",
    pokerStars: "Precisa saber jogar poker",
    bets: "Precisa saber apostar",
    ballion: "Qualquer pessoa pode jogar",
  },
  {
    label: "Problema",
    megaSena: "Sem habilidade",
    pokerStars: "Curva de aprendizado alta",
    bets: "Altamente viciante",
    ballion: "Não vicia — é diversão real",
  },
  {
    label: "Risco",
    megaSena: "Sem diversão",
    pokerStars: "Complexo demais",
    bets: "Risco financeiro alto",
    ballion: "Habilidade física real",
  },
];

const differentiators = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 mx-auto mb-4">
        <circle cx="24" cy="24" r="16" stroke="#D4A54A" strokeWidth="2" />
        <ellipse cx="24" cy="24" rx="8" ry="16" stroke="#D4A54A" strokeWidth="1.5" />
        <path d="M8 24h32" stroke="#D4A54A" strokeWidth="1.5" />
        <path d="M10 16h28" stroke="#D4A54A" strokeWidth="1" opacity="0.5" />
        <path d="M10 32h28" stroke="#D4A54A" strokeWidth="1" opacity="0.5" />
        <path d="M24 8v32" stroke="#D4A54A" strokeWidth="1.5" />
      </svg>
    ),
    title: "Global",
    description:
      "Qualquer pessoa no mundo pode participar. Sem fronteiras.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 mx-auto mb-4">
        <path d="M24 8l2 6-5-4h6l-5 4 2-6z" stroke="#D4A54A" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 18l1.5 4.5-3.5-3h5l-4 3 1.5-4.5z" stroke="#D4A54A" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M36 18l1.5 4.5-3.5-3h5l-4 3 1.5-4.5z" stroke="#D4A54A" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16 30l1.5 4.5-3.5-3h5l-4 3 1.5-4.5z" stroke="#D4A54A" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M32 30l1.5 4.5-3.5-3h5l-4 3 1.5-4.5z" stroke="#D4A54A" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="5" stroke="#D4A54A" strokeWidth="2" />
        <path d="M21 23l2 2 4-4" stroke="#D4A54A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 19v-3M24 29v3M29 24h3M19 24h-3" stroke="#D4A54A" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
    title: "Diversão Real",
    description:
      "Não vicia. Vira meme, vira diversão, vira momento em família.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 mx-auto mb-4">
        <circle cx="16" cy="16" r="4" stroke="#D4A54A" strokeWidth="2" />
        <circle cx="32" cy="16" r="4" stroke="#D4A54A" strokeWidth="2" />
        <circle cx="24" cy="14" r="5" stroke="#D4A54A" strokeWidth="2" />
        <path d="M24 19v4" stroke="#D4A54A" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 26c0-2 1-4 2-4h16c1 0 2 2 2 4" stroke="#D4A54A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 34c0-3 2-6 8-6" stroke="#D4A54A" strokeWidth="2" strokeLinecap="round" />
        <path d="M40 34c0-3-2-6-8-6" stroke="#D4A54A" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 34v4M20 30v8M28 30v8M36 34v4" stroke="#D4A54A" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    title: "Para Todos",
    description:
      "O pai coloca o filho, as amigas se desafiam.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 mx-auto mb-4">
        <rect x="16" y="6" width="16" height="28" rx="3" stroke="#D4A54A" strokeWidth="2" />
        <path d="M16 30h16" stroke="#D4A54A" strokeWidth="1.5" />
        <path d="M16 10h16" stroke="#D4A54A" strokeWidth="1.5" />
        <circle cx="24" cy="33" r="1" fill="#D4A54A" />
        <path d="M34 18l4-3M34 22l6-1M34 26l4 3" stroke="#D4A54A" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 18l-4-3M14 22l-6-1M14 26l-4 3" stroke="#D4A54A" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 16l4 4-4 4" stroke="#D4A54A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      </svg>
    ),
    title: "Viraliza",
    description:
      "Cada tentativa vira conteúdo. Cada participante vira mídia orgânica.",
  },
];

const competitors = ["Mega Sena", "PokerStars", "Bets", "BALLION"] as const;

export function AppPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLSpanElement>(null);
  const slamRef = useRef<HTMLSpanElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const mobileCardsRef = useRef<HTMLDivElement>(null);
  const diffCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // --- Header animations ---
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Tag
      if (tagRef.current) {
        headerTl.fromTo(
          tagRef.current,
          { opacity: 0, y: 15, letterSpacing: "0.4em" },
          { opacity: 1, y: 0, letterSpacing: "0.15em", duration: 0.6 }
        );
      }

      // "NAO E APOSTA." chars
      if (headlineRef.current) {
        const headlineChars = headlineRef.current.querySelectorAll(".char");
        headerTl.fromTo(
          headlineChars,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.02, duration: 0.4 },
          "-=0.2"
        );
      }

      // "E HABILIDADE." slam
      if (slamRef.current) {
        const slamChars = slamRef.current.querySelectorAll(".char");
        headerTl.fromTo(
          slamChars,
          { scale: 3, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            ease: "power4.out",
            stagger: 0.04,
            duration: 0.7,
          },
          "-=0.1"
        );
      }

      // --- Desktop Table ---
      if (tableRef.current) {
        const tableTl = gsap.timeline({
          scrollTrigger: {
            trigger: tableRef.current,
            start: "top 75%",
            once: true,
          },
        });

        const thElements = tableRef.current.querySelectorAll("th");
        const trElements = tableRef.current.querySelectorAll("tbody tr");
        const ballionCells = tableRef.current.querySelectorAll(
          "tbody tr td:last-child"
        );

        tableTl.fromTo(
          thElements,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.4 }
        );

        tableTl.fromTo(
          trElements,
          { opacity: 0, x: 80, clipPath: "inset(0 100% 0 0)" },
          {
            opacity: 1,
            x: 0,
            clipPath: "inset(0 0% 0 0)",
            stagger: 0.15,
            duration: 0.6,
          },
          "-=0.2"
        );

        // Gold pulse on BALLION column after rows land
        tableTl.to(
          ballionCells,
          {
            boxShadow: "0 0 25px rgba(212,165,74,0.3)",
            repeat: 2,
            yoyo: true,
            duration: 0.4,
          },
          "+=1"
        );
      }

      // --- Mobile Stacked Cards ---
      if (mobileCardsRef.current) {
        const mobileCards =
          mobileCardsRef.current.querySelectorAll(".mobile-card");
        gsap.fromTo(
          mobileCards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: mobileCardsRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // --- Differentiator Cards ---
      if (diffCardsRef.current) {
        const cards = diffCardsRef.current.querySelectorAll(".diff-card");
        const icons = diffCardsRef.current.querySelectorAll(".diff-icon");

        const diffTl = gsap.timeline({
          scrollTrigger: {
            trigger: diffCardsRef.current,
            start: "top 75%",
            once: true,
          },
        });

        diffTl.fromTo(
          cards,
          { opacity: 0, scale: 0.8, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.6,
            ease: "back.out(1.4)",
          }
        );

        diffTl.fromTo(
          icons,
          { opacity: 0, rotateY: 180 },
          {
            opacity: 1,
            rotateY: 0,
            duration: 0.5,
            stagger: 0.12,
          },
          "-=0.3"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="diferencial"
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,165,74,0.04)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <p
            ref={tagRef}
            className="text-sm font-semibold uppercase tracking-widest text-ballion-gold mb-4"
            style={{ opacity: 0 }}
          >
            Por Que a Ballion É Diferente
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase">
            <SplitText ref={headlineRef}>NÃO É APOSTA.</SplitText>{" "}
            <SplitText
              ref={slamRef}
              className="text-ballion-gold"
            >
              É HABILIDADE.
            </SplitText>
          </h2>
        </div>

        {/* Desktop Table */}
        <div ref={tableRef} className="hidden md:block mb-16">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" aria-label="Comparativo entre plataformas">
              <thead>
                <tr>
                  <th className="p-4 text-left text-ballion-muted text-sm uppercase tracking-wider font-body font-normal" />
                  {competitors.map((name) => (
                    <th
                      key={name}
                      className={`p-4 text-center font-heading text-lg uppercase ${
                        name === "BALLION"
                          ? "text-ballion-gold border-t-2 border-x-2 border-ballion-gold/50 bg-ballion-gold/5 rounded-t-xl"
                          : "text-ballion-muted"
                      }`}
                    >
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, rowIdx) => (
                  <tr key={row.label}>
                    <td className="p-4 font-heading text-sm uppercase tracking-wider text-ballion-muted border-t border-ballion-border/30">
                      {row.label}
                    </td>
                    <td className="p-4 text-center text-ballion-muted/80 text-sm border-t border-ballion-border/30">
                      {row.megaSena}
                    </td>
                    <td className="p-4 text-center text-ballion-muted/80 text-sm border-t border-ballion-border/30">
                      {row.pokerStars}
                    </td>
                    <td className="p-4 text-center text-ballion-muted/80 text-sm border-t border-ballion-border/30">
                      {row.bets}
                    </td>
                    <td
                      className={`p-4 text-center text-white font-semibold text-sm border-t border-ballion-gold/20 border-x-2 border-ballion-gold/50 bg-ballion-gold/5 ${
                        rowIdx === comparisonData.length - 1
                          ? "border-b-2 border-ballion-gold/50 rounded-b-xl"
                          : ""
                      }`}
                    >
                      {row.ballion}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Stacked Cards */}
        <div ref={mobileCardsRef} className="md:hidden space-y-4 mb-16">
          {comparisonData.map((row) => (
            <div key={row.label} className="mobile-card rounded-2xl bg-ballion-dark border border-ballion-border p-5" style={{ opacity: 0 }}>
              <h4 className="font-heading text-sm uppercase tracking-wider text-ballion-muted mb-4">
                {row.label}
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-3">
                  <span className="text-ballion-muted/60 text-xs uppercase shrink-0 w-20">
                    Mega Sena
                  </span>
                  <span className="text-ballion-muted/80 text-sm text-right">
                    {row.megaSena}
                  </span>
                </div>
                <div className="flex justify-between items-start gap-3">
                  <span className="text-ballion-muted/60 text-xs uppercase shrink-0 w-20">
                    PokerStars
                  </span>
                  <span className="text-ballion-muted/80 text-sm text-right">
                    {row.pokerStars}
                  </span>
                </div>
                <div className="flex justify-between items-start gap-3">
                  <span className="text-ballion-muted/60 text-xs uppercase shrink-0 w-20">
                    Bets
                  </span>
                  <span className="text-ballion-muted/80 text-sm text-right">
                    {row.bets}
                  </span>
                </div>
                <div className="h-px bg-ballion-gold/20 my-2" />
                <div className="flex justify-between items-start gap-3">
                  <span className="text-ballion-gold text-xs uppercase font-bold shrink-0 w-20">
                    BALLION
                  </span>
                  <span className="text-white font-semibold text-sm text-right">
                    {row.ballion}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Differentiator Cards */}
        <div ref={diffCardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item) => (
            <div key={item.title} className="diff-card glass rounded-2xl hover:border-ballion-gold/30 transition-colors duration-300 p-6 sm:p-8 h-full text-center" style={{ opacity: 0 }}>
              <div className="diff-icon" style={{ opacity: 0 }}>
                {item.icon}
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-white mb-2">
                {item.title}
              </h3>
              <p className="text-ballion-muted text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
