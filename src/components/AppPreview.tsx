"use client";

import { useState } from "react";
import { ScrollReveal } from "./ui/scroll-reveal";
import { cn } from "@/lib/utils";

const slides = [
  {
    title: "Treino de Precisão",
    description: "Configure seus drills e comece a treinar",
    color: "from-ballion-gold/20",
  },
  {
    title: "Métricas ao Vivo",
    description: "Acompanhe sua performance em tempo real",
    color: "from-ballion-green/20",
  },
  {
    title: "Conquistas",
    description: "Desbloqueie troféus e ganhe Ballion Coins",
    color: "from-ballion-gold/20",
  },
  {
    title: "Comunidade",
    description: "Conecte-se com outros jogadores",
    color: "from-ballion-green/20",
  },
];

export function AppPreview() {
  const [active, setActive] = useState(0);

  return (
    <section id="app-preview" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-ballion-gold mb-4">
            Preview
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase">
            Veja o KickTrak Pro{" "}
            <span className="text-gold-gradient">em ação</span>
          </h2>
        </ScrollReveal>

        {/* Phone carousel */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 mb-12">
          {slides.map((slide, i) => (
            <button
              key={slide.title}
              onClick={() => setActive(i)}
              className={cn(
                "relative w-48 sm:w-56 h-80 sm:h-96 rounded-3xl border-2 transition-all duration-500 overflow-hidden",
                i === active
                  ? "scale-110 border-ballion-gold shadow-[0_0_40px_rgba(212,165,74,0.3)] z-10"
                  : "scale-90 opacity-50 border-ballion-border hover:opacity-70"
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-b to-ballion-dark",
                  slide.color
                )}
              />
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-ballion-black/50 border border-ballion-border flex items-center justify-center mb-4">
                  <span className="text-ballion-gold font-[var(--font-heading)] text-xl font-bold">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-[var(--font-heading)] text-sm font-bold uppercase mb-2 text-white">
                  {slide.title}
                </h3>
                <p className="text-xs text-ballion-muted">{slide.description}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                i === active
                  ? "bg-ballion-gold w-8"
                  : "bg-ballion-border hover:bg-ballion-muted"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
