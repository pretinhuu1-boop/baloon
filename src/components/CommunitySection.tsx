"use client";

import { ScrollReveal } from "./ui/scroll-reveal";

const pillars = [
  {
    icon: "⚽",
    title: "Futebol de Rua",
    description: "Valorizamos o jogo jogado em qualquer lugar, de qualquer jeito.",
  },
  {
    icon: "🌱",
    title: "Futebol de Base",
    description: "Ferramentas para jovens atletas desenvolverem seu potencial.",
  },
  {
    icon: "🤝",
    title: "Inclusão",
    description: "Tecnologia acessível, independente do nível socioeconômico.",
  },
];

export function CommunitySection() {
  return (
    <section id="community" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(26,71,42,0.12)_0%,_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-ballion-gold mb-4">
            Comunidade
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase">
            Nascido nas ruas.{" "}
            <span className="text-gold-gradient">Feito para todos.</span>
          </h2>
        </ScrollReveal>

        {/* Manifesto */}
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-lg sm:text-xl text-ballion-muted leading-relaxed">
            A Ballion acredita que o talento nasce em qualquer lugar — nos campos
            de várzea, nas quadras de comunidade, nas ruas. Nossa tecnologia
            existe para potencializar esse talento, tornando ferramentas
            profissionais acessíveis para todos.
          </p>
        </ScrollReveal>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.15}>
              <div className="text-center p-8">
                <div className="text-5xl mb-6">{pillar.icon}</div>
                <h3 className="font-[var(--font-heading)] text-xl font-bold uppercase mb-3">
                  {pillar.title}
                </h3>
                <p className="text-ballion-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
