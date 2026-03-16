"use client";

import { ScrollReveal } from "./ui/scroll-reveal";

const steps = [
  {
    number: "01",
    title: "Cadastre-se",
    description:
      "Crie sua conta na BALLION em segundos. Rápido, simples e seguro.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Compre sua Tentativa",
    description:
      "Pague o buy-in para entrar no desafio. Cada tentativa dá direito a 15 chutes.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Grave seu Desafio",
    description:
      "Abra o app, pressione START e grave seus 15 chutes no travessão. A IA valida tudo.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Entre no Ranking",
    description:
      "Seu resultado entra no ranking global. Os melhores levam os prêmios milionários.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-5.54 0" />
      </svg>
    ),
  },
];

export function FeaturesSection() {
  return (
    <section id="como-funciona" className="py-24 sm:py-32 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(212,165,74,0.04)_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ballion-gold mb-4 font-body">
            PASSO A PASSO
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase">
            COMO{" "}
            <span className="text-gold-gradient">FUNCIONA</span>
          </h2>
        </ScrollReveal>

        {/* Steps grid with connecting lines */}
        <div className="relative">
          {/* Horizontal connecting line — desktop only */}
          <div className="hidden lg:block absolute top-[72px] left-[12.5%] right-[12.5%] h-px z-0">
            <div className="w-full h-full bg-gradient-to-r from-ballion-gold/0 via-ballion-gold/30 to-ballion-gold/0" />
          </div>

          {/* Vertical connecting line — mobile/tablet only */}
          <div className="lg:hidden absolute top-0 bottom-0 left-8 md:left-1/2 md:-translate-x-px w-px z-0">
            <div className="w-full h-full bg-gradient-to-b from-ballion-gold/0 via-ballion-gold/20 to-ballion-gold/0" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-[1]">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.15}>
                <div className="group relative glass rounded-2xl p-8 hover:border-ballion-gold/40 transition-all duration-500 h-full">
                  {/* Gold top accent line on hover */}
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-ballion-gold/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Step number */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-heading text-5xl font-bold text-gold-gradient leading-none">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-ballion-gold/10 border border-ballion-gold/20 flex items-center justify-center text-ballion-gold group-hover:bg-ballion-gold/20 transition-colors duration-300">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step content */}
                  <h3 className="font-heading text-xl font-bold uppercase mb-3 text-white group-hover:text-ballion-gold transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="font-body text-ballion-muted leading-relaxed text-sm">
                    {step.description}
                  </p>

                  {/* Arrow indicator to next step — not on last */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-5 top-[68px] w-10 h-10 items-center justify-center z-10">
                      <svg
                        className="w-5 h-5 text-ballion-gold/40"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
