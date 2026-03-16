"use client";

import { useState } from "react";
import { ScrollReveal } from "./ui/scroll-reveal";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <section
      id="participar"
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Stadium spotlight background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,165,74,0.1)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 stadium-light-left" />
      <div className="absolute inset-0 stadium-light-right" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(212,165,74,0.06)_0%,_transparent_40%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <ScrollReveal>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase mb-2 leading-tight">
            UMA BOLA. UM CELULAR.
          </h2>
          <p className="font-heading text-5xl sm:text-6xl lg:text-8xl font-bold uppercase text-gold-gradient mb-8 leading-none">
            UM MILHÃO.
          </p>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal className="max-w-2xl mx-auto mb-12">
          <p className="text-lg sm:text-xl text-ballion-muted leading-relaxed">
            O mundo inteiro é sua arena. Não importa onde você está — se tem uma
            bola e um celular, você pode concorrer a R$ 1 milhão.
          </p>
        </ScrollReveal>

        {/* Email Form */}
        <ScrollReveal className="max-w-lg mx-auto mb-8">
          {submitted ? (
            <div className="rounded-2xl bg-ballion-dark border border-ballion-gold/30 p-8">
              <span className="text-4xl block mb-3" role="img" aria-label="Sucesso">
                ✅
              </span>
              <p className="text-white font-heading text-xl uppercase font-bold mb-2">
                Cadastro realizado!
              </p>
              <p className="text-ballion-muted text-sm">
                Você será avisado assim que a plataforma for lançada.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="cta-email" className="sr-only">
                Seu melhor e-mail
              </label>
              <input
                id="cta-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="flex-1 min-h-[52px] px-5 py-3 rounded-full bg-ballion-dark border border-ballion-border text-white placeholder:text-ballion-muted/60 focus:outline-none focus:border-ballion-gold focus:ring-1 focus:ring-ballion-gold/50 transition-colors duration-300 text-base"
              />
              <button
                type="submit"
                className="min-h-[52px] px-8 py-3 rounded-full bg-gradient-to-r from-ballion-gold-dark via-ballion-gold to-ballion-gold-light text-ballion-black font-bold uppercase text-sm tracking-wider hover:shadow-[0_0_30px_rgba(212,165,74,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                QUERO PARTICIPAR
              </button>
            </form>
          )}
        </ScrollReveal>

        {/* Small texts */}
        <ScrollReveal>
          <p className="text-xs text-ballion-muted/60 mb-3">
            Plataforma em desenvolvimento. Cadastre-se para ser avisado do
            lançamento.
          </p>
          <p className="text-xs text-ballion-gold/60 font-medium">
            Não é aposta. É performance real validada por tecnologia.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
