"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const faqs = [
  {
    question: "Qualquer pessoa pode participar?",
    answer:
      "Sim! Qualquer pessoa, em qualquer lugar do mundo, pode participar. Tudo que você precisa é de uma bola, um celular com o app BALLION e um gol com travessão.",
  },
  {
    question: "Quanto custa para participar?",
    answer:
      "O buy-in varia de R$ 5 a R$ 500 por tentativa, dependendo do desafio e da temporada. Cada tentativa dá direito a 15 chutes.",
  },
  {
    question: "Como funciona a validação por IA?",
    answer:
      "A inteligência artificial analisa o vídeo gravado pelo app, verificando distância, trajetória da bola, ponto de contato com o travessão e rebote. Tudo é automático e auditado para garantir justiça.",
  },
  {
    question: "Posso jogar em qualquer campo?",
    answer:
      "Sim! Campo de terra, grama, quadra de cimento — qualquer lugar com um gol regulamentar serve. O chute deve ser feito a pelo menos 20 metros do gol.",
  },
  {
    question: "O que acontece se a bola raspar no travessão?",
    answer:
      "Só pontua se a bola acertar o travessão e voltar para dentro do campo. Essa é a regra anti-discussão — sem dúvidas, sem polêmicas. A IA valida automaticamente.",
  },
  {
    question: "Posso colocar meu filho para jogar?",
    answer:
      "Claro! A BALLION é para todas as idades. O pai pode gravar o filho tentando, as amigas se desafiam, o vizinho grava e posta. É diversão para toda a família.",
  },
  {
    question: "Isso é aposta?",
    answer:
      "Não! A BALLION é uma plataforma de entretenimento competitivo baseada em habilidade física real. Diferente de apostas, aqui o resultado depende 100% da sua performance, não de sorte.",
  },
  {
    question: "Como funcionam os rankings?",
    answer:
      "Existem 4 rankings: Semanal (melhores da semana), Nacional (melhores do país), Mundial (top players global) e Histórico (Hall da Fama permanente). Os melhores de cada ranking recebem premiações.",
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
          className={`text-ballion-gold text-2xl font-light shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] pb-5" : "max-h-0"
        }`}
      >
        <p className="text-ballion-muted text-sm md:text-base leading-relaxed px-2">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-ballion-gold mb-4">
              Dúvidas Frequentes
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white mt-3">
              PERGUNTAS FREQUENTES
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <ScrollReveal delay={0.2}>
            <div className="border-t border-ballion-border">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
