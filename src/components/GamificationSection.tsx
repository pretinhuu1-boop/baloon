"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollReveal } from "./ui/scroll-reveal";

gsap.registerPlugin(ScrollTrigger);

function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR");
}

function AnimatedBRL({
  target,
  duration = 2,
  className,
}: {
  target: number;
  duration?: number;
  className?: string;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        if (prefersReduced) {
          setValue(target);
          return;
        }

        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration,
          ease: "power2.out",
          onUpdate: () => setValue(Math.round(obj.val)),
        });
      },
    });

    return () => trigger.kill();
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      R$ {formatBRL(value)}
    </span>
  );
}

const rankings = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M14 8h20v4l-3 10h-14L14 12V8z" stroke="#D4A54A" strokeWidth="2" strokeLinejoin="round" />
        <path d="M14 12H9c0 6 3 9 8 10" stroke="#D4A54A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M34 12h5c0 6-3 9-8 10" stroke="#D4A54A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 32h8" stroke="#D4A54A" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 36h12" stroke="#D4A54A" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 22v10" stroke="#D4A54A" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 14l1.5 3 3.5.5-2.5 2.5.5 3.5L24 22l-3 1.5.5-3.5L19 17.5l3.5-.5L24 14z" stroke="#D4A54A" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "RANKING MUNDIAL",
    description: "Top Players",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="10" y="12" width="28" height="26" rx="3" stroke="#D4A54A" strokeWidth="2" />
        <path d="M10 20h28" stroke="#D4A54A" strokeWidth="2" />
        <path d="M18 8v8M30 8v8" stroke="#D4A54A" strokeWidth="2" strokeLinecap="round" />
        <rect x="16" y="25" width="4" height="4" rx="0.5" stroke="#D4A54A" strokeWidth="1.5" />
        <rect x="22" y="25" width="4" height="4" rx="0.5" stroke="#D4A54A" strokeWidth="1.5" />
        <rect x="28" y="25" width="4" height="4" rx="0.5" stroke="#D4A54A" strokeWidth="1.5" />
        <rect x="16" y="31" width="4" height="4" rx="0.5" stroke="#D4A54A" strokeWidth="1.5" />
        <rect x="22" y="31" width="4" height="4" rx="0.5" stroke="#D4A54A" strokeWidth="1.5" />
        <path d="M20 27l-1.5 1.5L20 30" stroke="#D4A54A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      </svg>
    ),
    title: "RANKING SEMANAL",
    description: "Top Players da Semana",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M16 8L14 40h20L32 8H16z" stroke="#D4A54A" strokeWidth="2" strokeLinejoin="round" />
        <path d="M14 8h20" stroke="#D4A54A" strokeWidth="2" strokeLinecap="round" />
        <path d="M15 32h18" stroke="#D4A54A" strokeWidth="1.5" opacity="0.4" />
        <path d="M24 16l2.5 5h-5L24 16z" stroke="#D4A54A" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="24" cy="26" r="2" stroke="#D4A54A" strokeWidth="1.5" />
        <path d="M12 8v4M36 8v4" stroke="#D4A54A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24 8v-2" stroke="#D4A54A" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 4h4" stroke="#D4A54A" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "RANKING NACIONAL",
    description: "Os Melhores do País",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M24 6l4 8h8l-6 6 2 9-8-5-8 5 2-9-6-6h8l4-8z" stroke="#D4A54A" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="24" cy="20" r="3" stroke="#D4A54A" strokeWidth="1.5" />
        <path d="M10 38c2-4 6-6 14-6s12 2 14 6" stroke="#D4A54A" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 36l-2 4M34 36l2 4" stroke="#D4A54A" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    title: "RANKING HISTÓRICO",
    description: "All Time",
  },
];

export function GamificationSection() {
  return (
    <section
      id="premios"
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Stadium spotlight background */}
      <div className="absolute inset-0 stadium-light-left" />
      <div className="absolute inset-0 stadium-light-right" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,_rgba(212,165,74,0.06)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-ballion-gold mb-4">
            A Premiação
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase mb-4">
            CONCORRA A ATÉ
          </h2>
          <div className="text-5xl sm:text-7xl lg:text-9xl font-heading font-bold uppercase leading-none">
            <AnimatedBRL
              target={1000000}
              duration={2.5}
              className="text-gold-gradient"
            />
          </div>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lg sm:text-xl text-ballion-muted leading-relaxed">
            As premiações são financiadas pelo volume de participantes. Quanto
            mais gente participa, maiores os prêmios.
          </p>
        </ScrollReveal>

        {/* Rankings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {rankings.map((ranking, i) => (
            <ScrollReveal key={ranking.title} delay={i * 0.12}>
              <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-ballion-gold/60 via-ballion-gold-dark/30 to-ballion-gold/60">
                <div className="rounded-2xl bg-ballion-dark p-6 sm:p-8 h-full">
                  <div className="flex items-center gap-4">
                    {ranking.icon}
                    <div>
                      <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-white">
                        {ranking.title}
                      </h3>
                      <p className="text-ballion-muted text-sm sm:text-base">
                        {ranking.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* World Final */}
        <ScrollReveal>
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-ballion-gold/50 via-ballion-gold to-ballion-gold/50 max-w-3xl mx-auto">
            <div className="rounded-2xl bg-ballion-dark p-8 sm:p-12 text-center">
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,_rgba(212,165,74,0.08)_0%,_transparent_70%)]" />
              <div className="relative z-10">
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-gold-gradient mb-4">
                  BALLION WORLD FINAL
                </h3>
                <p className="text-ballion-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
                  Top jogadores competindo ao vivo. Streaming global para
                  milhões.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
