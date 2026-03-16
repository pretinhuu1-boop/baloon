"use client";

import Image from "next/image";
import { ScrollReveal } from "./ui/scroll-reveal";

const SoccerIcon = () => (
  <svg className="w-10 h-10 text-ballion-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>
);

const SeedlingIcon = () => (
  <svg className="w-10 h-10 text-ballion-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22V10" />
    <path d="M6 14c0-3.3 2.7-6 6-6" />
    <path d="M18 10c0-3.3-2.7-6-6-6" />
    <path d="M6 14c-2.2 0-4-1.8-4-4s1.8-4 4-4c.5 0 1 .1 1.5.3" />
    <path d="M18 10c2.2 0 4-1.8 4-4s-1.8-4-4-4c-.5 0-1 .1-1.5.3" />
  </svg>
);

const HandshakeIcon = () => (
  <svg className="w-10 h-10 text-ballion-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20.5 11.5L17 8l-4 1-3-3-6.5 6.5" />
    <path d="M3.5 14.5l3.5 3.5 2-2" />
    <path d="M14 17l2 2 4.5-4.5" />
    <path d="M9 13l2 2" />
    <path d="M11 15l2 2" />
  </svg>
);

const pillars = [
  {
    icon: <SoccerIcon />,
    title: "Futebol de Rua",
    description: "Valorizamos o jogo jogado em qualquer lugar, de qualquer jeito.",
  },
  {
    icon: <SeedlingIcon />,
    title: "Futebol de Base",
    description: "Ferramentas para jovens atletas desenvolverem seu potencial.",
  },
  {
    icon: <HandshakeIcon />,
    title: "Inclusão",
    description: "Tecnologia acessível, independente do nível socioeconômico.",
  },
];

export function CommunitySection() {
  return (
    <section id="community" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Community background image */}
      <Image
        src="/images/community.jpg"
        alt=""
        fill
        className="object-cover opacity-15"
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ballion-black/70 via-ballion-black/85 to-ballion-black z-[1]" />
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(26,71,42,0.12)_0%,_transparent_60%)] z-[2]" />

      <div className="relative z-[3] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="mb-6 flex justify-center">{pillar.icon}</div>
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
