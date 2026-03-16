"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "./ui/split-text";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "Qualquer pessoa pode participar?",
    answer:
      "Sim! Qualquer pessoa, em qualquer lugar do mundo, pode participar. Tudo que voc\u00ea precisa \u00e9 de uma bola, um celular com o app BALLION e um gol com travess\u00e3o.",
  },
  {
    question: "Quanto custa para participar?",
    answer:
      "O buy-in varia de R$ 5 a R$ 500 por tentativa, dependendo do desafio e da temporada. Cada tentativa d\u00e1 direito a 15 chutes.",
  },
  {
    question: "Como funciona a valida\u00e7\u00e3o por IA?",
    answer:
      "A intelig\u00eancia artificial analisa o v\u00eddeo gravado pelo app, verificando dist\u00e2ncia, trajet\u00f3ria da bola, ponto de contato com o travess\u00e3o e rebote. Tudo \u00e9 autom\u00e1tico e auditado para garantir justi\u00e7a.",
  },
  {
    question: "Posso jogar em qualquer campo?",
    answer:
      "Sim! Campo de terra, grama, quadra de cimento \u2014 qualquer lugar com um gol regulamentar serve. O chute deve ser feito a pelo menos 20 metros do gol.",
  },
  {
    question: "O que acontece se a bola raspar no travess\u00e3o?",
    answer:
      "S\u00f3 pontua se a bola acertar o travess\u00e3o e voltar para dentro do campo. Essa \u00e9 a regra anti-discuss\u00e3o \u2014 sem d\u00favidas, sem pol\u00eamicas. A IA valida automaticamente.",
  },
  {
    question: "Posso colocar meu filho para jogar?",
    answer:
      "Claro! A BALLION \u00e9 para todas as idades. O pai pode gravar o filho tentando, as amigas se desafiam, o vizinho grava e posta. \u00c9 divers\u00e3o para toda a fam\u00edlia.",
  },
  {
    question: "Isso \u00e9 aposta?",
    answer:
      "N\u00e3o! A BALLION \u00e9 uma plataforma de entretenimento competitivo baseada em habilidade f\u00edsica real. Diferente de apostas, aqui o resultado depende 100% da sua performance, n\u00e3o de sorte.",
  },
  {
    question: "Como funcionam os rankings?",
    answer:
      "Existem 4 rankings: Semanal (melhores da semana), Nacional (melhores do pa\u00eds), Mundial (top players global) e Hist\u00f3rico (Hall da Fama permanente). Os melhores de cada ranking recebem premia\u00e7\u00f5es.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    const icon = iconRef.current;
    if (!content || !icon) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      content.style.height = isOpen ? "auto" : "0px";
      content.style.overflow = isOpen ? "visible" : "hidden";
      icon.style.transform = isOpen ? "rotate(45deg)" : "rotate(0deg)";
      return;
    }

    if (isOpen) {
      gsap.to(content, {
        height: "auto",
        duration: 0.4,
        ease: "power2.out",
        onStart: () => { content.style.overflow = "hidden"; },
        onComplete: () => { content.style.overflow = "visible"; },
      });
      gsap.to(icon, { rotation: 45, duration: 0.3 });
    } else {
      gsap.to(content, {
        height: 0,
        duration: 0.3,
        ease: "power2.in",
        onStart: () => { content.style.overflow = "hidden"; },
      });
      gsap.to(icon, { rotation: 0, duration: 0.3 });
    }
  }, [isOpen]);

  return (
    <div className="border-b border-ballion-border">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-2 text-left min-h-[56px] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ballion-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ballion-black rounded-lg"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Fechar resposta" : "Ver resposta"}
      >
        <span className="text-white text-base md:text-lg font-medium pr-4 group-hover:text-ballion-gold transition-colors">
          {question}
        </span>
        <span
          ref={iconRef}
          className="text-ballion-gold text-2xl font-light shrink-0"
        >
          +
        </span>
      </button>
      <div
        ref={contentRef}
        style={{ height: 0, overflow: "hidden" }}
      >
        <p className="text-ballion-muted text-sm md:text-base leading-relaxed px-2 pb-5">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const faqContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Header animations
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          once: true,
        },
      });

      if (tagRef.current) {
        headerTl.fromTo(
          tagRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 }
        );
      }

      if (titleRef.current) {
        const titleChars = titleRef.current.querySelectorAll(".char");
        headerTl.fromTo(
          titleChars,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.02, duration: 0.4 },
          "-=0.2"
        );
      }

      // FAQ items — line wipe stagger
      const validItems = itemRefs.current.filter(Boolean) as HTMLDivElement[];
      const validLines = lineRefs.current.filter(Boolean) as HTMLDivElement[];

      if (validItems.length > 0) {
        const faqTl = gsap.timeline({
          scrollTrigger: {
            trigger: faqContainerRef.current,
            start: "top 70%",
            once: true,
          },
        });

        faqTl.fromTo(
          validItems,
          { opacity: 0, x: 60, clipPath: "inset(0 100% 0 0)" },
          {
            opacity: 1,
            x: 0,
            clipPath: "inset(0 0% 0 0)",
            stagger: 0.1,
            duration: 0.5,
            ease: "power3.out",
          }
        );

        if (validLines.length > 0) {
          faqTl.fromTo(
            validLines,
            { scaleX: 0 },
            { scaleX: 1, stagger: 0.1, duration: 0.4, ease: "power2.out" },
            "-=0.4"
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-12">
          <span
            ref={tagRef}
            className="text-sm font-semibold uppercase tracking-widest text-ballion-gold mb-4 inline-block"
            style={{ opacity: 0 }}
          >
            D\u00favidas Frequentes
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white mt-3">
            <SplitText ref={titleRef} style={{ opacity: 0 }}>
              PERGUNTAS FREQUENTES
            </SplitText>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div ref={faqContainerRef} className="border-t border-ballion-border">
            {faqs.map((faq, index) => (
              <div
                key={index}
                ref={(el) => { itemRefs.current[index] = el; }}
                className="relative"
                style={{ opacity: 0 }}
              >
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
                <div
                  ref={(el) => { lineRefs.current[index] = el; }}
                  className="faq-line"
                  style={{
                    height: 1,
                    background: "rgba(212, 165, 74, 0.3)",
                    transformOrigin: "left center",
                    transform: "scaleX(0)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
