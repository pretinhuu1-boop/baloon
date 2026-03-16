"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

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
    description: "Arremessos de longa distância validados por IA.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <ellipse cx="24" cy="24" rx="10" ry="14" stroke="#D4A54A" strokeWidth="2" transform="rotate(-30 24 24)" />
        <line x1="24" y1="8" x2="24" y2="40" stroke="#D4A54A" strokeWidth="1.5" />
        <line x1="14" y1="14" x2="34" y2="34" stroke="#D4A54A" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
    title: "TÊNIS",
    description: "Acertar o alvo na quadra com precisão.",
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
    title: "PRECISÃO",
    description: "Qualquer esporte de mira.",
  },
];

export function FutureSection() {
  return (
    <section id="futuro" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 stadium-light-center pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-ballion-gold mb-4">
              Visão de Futuro
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white mt-3">
              ALÉM DO FUTEBOL
            </h2>
            <p className="text-ballion-muted text-lg mt-4 max-w-2xl mx-auto">
              A BALLION não é só futebol. É uma plataforma global de desafios
              esportivos. Sempre seguindo o conceito:{" "}
              <span className="text-white font-semibold">
                Uma bola. Um celular. Um milhão.
              </span>
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sports.map((sport, index) => (
            <ScrollReveal key={sport.title} delay={index * 0.1}>
              <div className="group relative glass rounded-2xl p-6 text-center hover:border-ballion-gold/40 transition-colors duration-300">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ballion-gold/0 to-transparent group-hover:via-ballion-gold/60 transition-all duration-500" />

                <div className="flex justify-center mb-4">{sport.icon}</div>
                <h3 className="font-heading text-2xl text-white mb-2">
                  {sport.title}
                </h3>
                <p className="text-ballion-muted text-sm">{sport.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <p className="text-center text-ballion-gold mt-12 text-lg font-medium">
            Cada novo esporte = novo mercado + novo público + nova receita
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
