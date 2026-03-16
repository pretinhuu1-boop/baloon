"use client";

import { ScrollReveal } from "./ui/scroll-reveal";

const gamificationFeatures = [
  {
    icon: "🏆",
    title: "Troféus Ballion",
    description: "Desbloqueie conquistas por marcos de desempenho. Cada troféu conta sua história.",
  },
  {
    icon: "🪙",
    title: "Ballion Coins",
    description: "Ganhe moedas completando treinos e batendo metas. Sua dedicação vale ouro.",
  },
  {
    icon: "📈",
    title: "Sistema de Progressão",
    description: "Suba de nível e mostre sua evolução. Do iniciante ao profissional.",
  },
];

export function GamificationSection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-ballion-gold mb-4">
            Gamificação
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase">
            Conquiste. Evolua.{" "}
            <span className="text-gold-gradient">Domine.</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Trophy visual */}
          <ScrollReveal direction="left">
            <div className="relative flex items-center justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-ballion-gold/20 to-transparent flex items-center justify-center animate-glow-pulse">
                <div className="text-8xl sm:text-9xl">🏆</div>
              </div>
              {/* Floating coins */}
              <div className="absolute top-4 right-8 text-4xl animate-bounce" style={{ animationDelay: "0.5s" }}>
                🪙
              </div>
              <div className="absolute bottom-8 left-4 text-3xl animate-bounce" style={{ animationDelay: "1s" }}>
                🪙
              </div>
              <div className="absolute top-1/2 right-0 text-2xl animate-bounce" style={{ animationDelay: "1.5s" }}>
                🪙
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Feature list */}
          <div className="flex flex-col gap-8">
            {gamificationFeatures.map((feature, i) => (
              <ScrollReveal key={feature.title} direction="right" delay={i * 0.15}>
                <div className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-ballion-dark border border-ballion-border flex items-center justify-center text-2xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-[var(--font-heading)] text-lg font-bold uppercase mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-ballion-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
