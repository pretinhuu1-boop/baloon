"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FrameSequenceCanvas } from "./ui/frame-sequence-canvas";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 241;
const FRAME_PATH = "/frames";

const overlayTexts = [
  { start: 0, end: 0.2, title: "ACERTE O TRAVESSÃO", subtitle: "Posicione a bola. Mire. Chute." },
  { start: 0.25, end: 0.45, title: "GRAVE PELO CELULAR", subtitle: "O app valida cada tentativa com IA." },
  { start: 0.5, end: 0.7, title: "ENTRE NO RANKING", subtitle: "Seu resultado entra no ranking global." },
  { start: 0.75, end: 0.95, title: "CONCORRA A R$ 1 MILHÃO", subtitle: "Os melhores levam os prêmios." },
];

function TextOverlays({ scrollProgress, hasFrames }: { scrollProgress: number; hasFrames: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <div className="text-center max-w-4xl px-4 sm:px-6">
        {overlayTexts.map((text) => {
          const isVisible =
            scrollProgress >= text.start && scrollProgress <= text.end;
          const localProgress =
            text.end > text.start
              ? (scrollProgress - text.start) / (text.end - text.start)
              : 0;
          const fadeIn = Math.min(localProgress / 0.2, 1);
          const fadeOut = Math.min((1 - localProgress) / 0.2, 1);
          const opacity = isVisible ? Math.min(fadeIn, fadeOut) : 0;

          return (
            <div
              key={text.title}
              className="absolute inset-0 flex flex-col items-center justify-center transition-none"
              style={{
                opacity,
                transform: `translateY(${isVisible ? 0 : 20}px)`,
                pointerEvents: isVisible ? "auto" : "none",
              }}
            >
              <h2
                className={`font-heading text-4xl sm:text-6xl lg:text-8xl font-bold uppercase text-white mb-4 leading-none${
                  hasFrames ? " drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]" : ""
                }`}
              >
                {text.title}
              </h2>
              <p
                className={
                  hasFrames
                    ? "text-white/80 text-lg sm:text-xl max-w-xl drop-shadow-[0_1px_10px_rgba(0,0,0,0.6)]"
                    : "text-ballion-muted text-lg sm:text-xl max-w-xl"
                }
              >
                {text.subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProgressBar({ scrollProgress }: { scrollProgress: number }) {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
      <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-ballion-gold rounded-full transition-none"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </div>
  );
}

function ScrollHint({ scrollProgress, hasFrames }: { scrollProgress: number; hasFrames: boolean }) {
  return (
    <div
      className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 transition-opacity duration-500"
      style={{ opacity: scrollProgress < 0.05 ? 1 : 0 }}
    >
      <div className={`flex flex-col items-center gap-2 ${hasFrames ? "text-white/40" : "text-ballion-muted/60"}`}>
        <span className="text-xs uppercase tracking-widest">Role para baixo</span>
        <svg
          className="w-4 h-4 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}

function DemoBackground({ scrollProgress }: { scrollProgress: number }) {
  return (
    <div className="absolute inset-0 bg-ballion-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,165,74,0.12)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 stadium-light-left opacity-60" />
      <div className="absolute inset-0 stadium-light-right opacity-60" />

      {/* Animated gold line — represents the crossbar */}
      <div className="absolute top-[35%] left-[10%] right-[10%] h-[2px]">
        <div
          className="h-full bg-gradient-to-r from-transparent via-ballion-gold to-transparent transition-opacity duration-700"
          style={{ opacity: scrollProgress > 0.05 ? 1 : 0 }}
        />
      </div>

      {/* Vertical goalposts */}
      <div
        className="absolute top-[35%] left-[10%] w-[2px] bg-gradient-to-b from-ballion-gold to-transparent transition-all duration-700"
        style={{
          height: scrollProgress > 0.05 ? "40%" : "0%",
          opacity: scrollProgress > 0.05 ? 0.6 : 0,
        }}
      />
      <div
        className="absolute top-[35%] right-[10%] w-[2px] bg-gradient-to-b from-ballion-gold to-transparent transition-all duration-700"
        style={{
          height: scrollProgress > 0.05 ? "40%" : "0%",
          opacity: scrollProgress > 0.05 ? 0.6 : 0,
        }}
      />

      {/* Animated ball trajectory */}
      <div
        className="absolute w-4 h-4 rounded-full bg-ballion-gold shadow-[0_0_20px_rgba(212,165,74,0.8)] transition-all duration-100"
        style={{
          left: `${15 + scrollProgress * 70}%`,
          top: `${70 - Math.sin(scrollProgress * Math.PI) * 40}%`,
          opacity: scrollProgress > 0.02 && scrollProgress < 0.98 ? 1 : 0,
          transform: `scale(${0.8 + scrollProgress * 0.5})`,
        }}
      />
    </div>
  );
}

function FramesBackground({ currentFrame }: { currentFrame: number }) {
  return (
    <>
      <FrameSequenceCanvas
        frameCount={FRAME_COUNT}
        framePath={FRAME_PATH}
        currentFrame={currentFrame}
        className="absolute inset-0 w-full h-full"
      />
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ballion-black/30 via-transparent to-ballion-black/60 z-[1]" />
    </>
  );
}

export function ScrollVideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [framesExist, setFramesExist] = useState(true);

  // Check if frames exist
  useEffect(() => {
    const testImg = new Image();
    testImg.src = `${FRAME_PATH}/frame_0001.webp`;
    testImg.onerror = () => setFramesExist(false);
  }, []);

  // GSAP ScrollTrigger to scrub through frames
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          setScrollProgress(progress);
          setCurrentFrame(Math.floor(progress * (FRAME_COUNT - 1)));
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="desafio"
      className="relative"
      style={{ height: "400vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {framesExist ? (
          <FramesBackground currentFrame={currentFrame} />
        ) : (
          <DemoBackground scrollProgress={scrollProgress} />
        )}

        <TextOverlays scrollProgress={scrollProgress} hasFrames={framesExist} />
        <ProgressBar scrollProgress={scrollProgress} />
        <ScrollHint scrollProgress={scrollProgress} hasFrames={framesExist} />
      </div>
    </section>
  );
}
