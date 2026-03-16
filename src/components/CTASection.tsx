"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "./ui/split-text";

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const burstRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      [line1Ref, line2Ref, subtitleRef, formRef, footerRef].forEach((ref) => {
        if (ref.current) {
          ref.current.style.opacity = "1";
          ref.current.style.transform = "none";
          const spans = ref.current.querySelectorAll(".word, .char");
          spans.forEach((s) => {
            (s as HTMLElement).style.opacity = "1";
            (s as HTMLElement).style.transform = "none";
          });
        }
      });
      if (burstRef.current) burstRef.current.style.opacity = "0";
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          once: true,
        },
      });

      // Line 1: "UMA BOLA. UM CELULAR." — collision from opposite sides
      if (line1Ref.current) {
        const words = line1Ref.current.querySelectorAll(".word");
        // First half: "UMA" "BOLA." (indices 0, 1) — from left
        const firstHalf = Array.from(words).slice(0, 2);
        // Second half: "UM" "CELULAR." (indices 2, 3) — from right
        const secondHalf = Array.from(words).slice(2);

        gsap.set(words, { opacity: 0 });

        tl.fromTo(
          firstHalf,
          { x: -200, opacity: 0 },
          { x: 0, opacity: 1, ease: "power4.out", duration: 0.8 },
          0
        ).fromTo(
          secondHalf,
          { x: 200, opacity: 0 },
          { x: 0, opacity: 1, ease: "power4.out", duration: 0.8 },
          0
        );
      }

      // Line 2: "UM MILHAO." — explosion from center
      if (line2Ref.current) {
        const chars = line2Ref.current.querySelectorAll(".char");
        gsap.set(chars, { opacity: 0, scale: 0 });

        tl.fromTo(
          chars,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            stagger: 0.03,
            ease: "back.out(2)",
            duration: 0.6,
          },
          0.5
        );

        // Gold textShadow pulse after chars land
        const charsDuration = 0.6 + 0.03 * chars.length;
        tl.fromTo(
          chars,
          { textShadow: "0 0 0px rgba(212,165,74,0)" },
          {
            textShadow: "0 0 30px rgba(212,165,74,0.6), 0 0 60px rgba(212,165,74,0.3)",
            yoyo: true,
            repeat: 1,
            duration: 0.8,
          },
          0.5 + charsDuration
        );

        // Gold radial burst behind text
        if (burstRef.current) {
          gsap.set(burstRef.current, { scale: 0, opacity: 0 });
          tl.fromTo(
            burstRef.current,
            { scale: 0, opacity: 0.6 },
            { scale: 3, opacity: 0, duration: 1, ease: "power2.out" },
            0.5 + charsDuration * 0.5
          );
        }
      }

      // Subtitle
      if (subtitleRef.current) {
        gsap.set(subtitleRef.current, { opacity: 0, y: 40, filter: "blur(4px)" });
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 40, filter: "blur(4px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6 },
          1.2
        );
      }

      // Form
      if (formRef.current) {
        gsap.set(formRef.current, { opacity: 0, y: 60, scale: 0.95 });
        tl.fromTo(
          formRef.current,
          { opacity: 0, y: 60, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7 },
          1.5
        );
      }

      // Footer texts
      if (footerRef.current) {
        gsap.set(footerRef.current, { opacity: 0, y: 20 });
        tl.fromTo(
          footerRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          1.8
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="participar"
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Stadium spotlight background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,165,74,0.1)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 stadium-light-left" />
      <div className="absolute inset-0 stadium-light-right" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(212,165,74,0.06)_0%,_transparent_40%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline — Line 1: Collision */}
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase mb-2 leading-tight">
          <SplitText ref={line1Ref} mode="word">
            UMA BOLA. UM CELULAR.
          </SplitText>
        </h2>

        {/* Headline — Line 2: Explosion */}
        <div className="relative inline-block mb-8">
          {/* Gold radial burst — positioned behind text */}
          <div
            ref={burstRef}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(212,165,74,0.4) 0%, rgba(212,165,74,0.1) 40%, transparent 70%)",
              borderRadius: "50%",
              transform: "scale(0)",
              opacity: 0,
            }}
          />
          <p className="font-heading text-5xl sm:text-6xl lg:text-8xl font-bold uppercase text-ballion-gold leading-none relative z-10">
            <SplitText ref={line2Ref}>
              UM MILHAO.
            </SplitText>
          </p>
        </div>

        {/* Subtitle */}
        <div className="max-w-2xl mx-auto mb-12">
          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl text-ballion-muted leading-relaxed"
          >
            O mundo inteiro é sua arena. Não importa onde você está — se tem uma
            bola e um celular, você pode concorrer a R$ 1 milhão.
          </p>
        </div>

        {/* Email Form */}
        <div ref={formRef} className="max-w-lg mx-auto mb-8">
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
        </div>

        {/* Small texts */}
        <div ref={footerRef}>
          <p className="text-xs text-ballion-muted/60 mb-3">
            Plataforma em desenvolvimento. Cadastre-se para ser avisado do
            lançamento.
          </p>
          <p className="text-xs text-ballion-gold/60 font-medium">
            Não é aposta. É performance real validada por tecnologia.
          </p>
        </div>
      </div>
    </section>
  );
}
