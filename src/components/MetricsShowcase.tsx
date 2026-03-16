"use client";

import { ScrollReveal } from "./ui/scroll-reveal";
import { AnimatedCounter } from "./ui/animated-counter";

const metrics = [
  { value: 92, suffix: "%", label: "PRECISÃO MÉDIA" },
  { value: 11, suffix: "/15", label: "PONTUAÇÃO" },
  { value: 20, suffix: "m", label: "DISTÂNCIA DO ALVO" },
];

export function MetricsShowcase() {
  return (
    <section className="py-24 sm:py-32 relative">
      {/* Subtle green gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(26,71,42,0.1)_0%,_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-ballion-gold mb-4">
            Resultados Reais
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase">
            Seus números,{" "}
            <span className="text-gold-gradient">sua evolução</span>
          </h2>
        </ScrollReveal>

        {/* Metrics grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, i) => (
            <ScrollReveal key={metric.label} delay={i * 0.15}>
              <div className="text-center p-8 rounded-2xl bg-ballion-dark border border-ballion-border">
                <div className="font-[var(--font-heading)] text-5xl sm:text-6xl font-bold text-gold-gradient mb-2">
                  <AnimatedCounter
                    target={metric.value}
                    suffix={metric.suffix}
                  />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-ballion-muted">
                  {metric.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center">
          <p className="text-lg text-ballion-muted max-w-2xl mx-auto leading-relaxed">
            Cada chute conta. O KickTrak Pro registra sua precisão em tempo real
            e mostra exatamente onde você precisa melhorar.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
