"use client";

import Image from "next/image";
import { ScrollReveal } from "./ui/scroll-reveal";

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
  return (
    <section
      id="acessibilidade"
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/community.png"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        priority={false}
      />
      {/* Dark overlay - reduced opacity for more visual richness */}
      <div className="absolute inset-0 bg-ballion-black/70 z-[1]" />
      {/* Subtle gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-ballion-black/40 via-transparent to-ballion-black/90 z-[2]" />

      <div className="relative z-[3] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-ballion-gold mb-4">
            Acessibilidade Total
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase mb-6">
            TUDO QUE VOCÊ PRECISA
          </h2>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lg sm:text-xl text-ballion-muted leading-relaxed">
            Sem estrutura oficial. Sem equipamento caro. Sem regras complicadas.
            O mundo inteiro é sua arena.
          </p>
        </ScrollReveal>

        {/* Three glass cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.15}>
              <div className="glass rounded-2xl p-8 text-center hover:border-ballion-gold/30 transition-colors duration-300 h-full">
                <div className="flex justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-ballion-muted text-sm leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Note */}
        <ScrollReveal className="text-center">
          <p className="text-sm text-ballion-muted/70">
            + conexão à internet para enviar o vídeo
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
