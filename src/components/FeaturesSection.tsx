"use client";

import { ScrollReveal } from "./ui/scroll-reveal";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
        <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeWidth={1.5} d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
    title: "Treinos Inteligentes",
    description:
      "Configure drills personalizados, defina distância e número de chutes. Treine do seu jeito, no seu ritmo.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v18h18" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l4-4 4 4 5-5" />
      </svg>
    ),
    title: "Métricas em Tempo Real",
    description:
      "Acompanhe precisão, pontuação e evolução a cada sessão. Dados que fazem a diferença no seu jogo.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
    title: "Grave e Revise",
    description:
      "Grave suas sessões e revise para melhorar sua técnica. Sua galeria de evolução pessoal.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-ballion-gold mb-4">
            Como Funciona
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase">
            Seu treino,{" "}
            <span className="text-gold-gradient">reinventado</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.15}>
              <div className="group relative bg-ballion-dark border border-ballion-border rounded-2xl p-8 hover:border-ballion-gold/30 transition-all duration-500">
                {/* Gold top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-ballion-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="text-ballion-gold mb-6">{feature.icon}</div>
                <h3 className="font-[var(--font-heading)] text-xl font-bold uppercase mb-3">
                  {feature.title}
                </h3>
                <p className="text-ballion-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
