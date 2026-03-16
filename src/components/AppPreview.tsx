"use client";

import { ScrollReveal } from "./ui/scroll-reveal";

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
  return (
    <section
      id="diferencial"
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,165,74,0.04)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-ballion-gold mb-4">
            Por Que a Ballion É Diferente
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase">
            NÃO É APOSTA.{" "}
            <span className="text-gold-gradient">É HABILIDADE.</span>
          </h2>
        </ScrollReveal>

        {/* Desktop Table */}
        <ScrollReveal className="hidden md:block mb-16">
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
        </ScrollReveal>

        {/* Mobile Stacked Cards */}
        <div className="md:hidden space-y-4 mb-16">
          {comparisonData.map((row, i) => (
            <ScrollReveal key={row.label} delay={i * 0.1}>
              <div className="rounded-2xl bg-ballion-dark border border-ballion-border p-5">
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
            </ScrollReveal>
          ))}
        </div>

        {/* Differentiator Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="glass rounded-2xl hover:border-ballion-gold/30 transition-colors duration-300 p-6 sm:p-8 h-full text-center">
                {item.icon}
                <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-ballion-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
