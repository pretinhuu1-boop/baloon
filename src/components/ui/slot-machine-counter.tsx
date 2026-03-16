"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SlotMachineCounterProps {
  target: number;
  prefix?: string;
  className?: string;
}

/**
 * Formats a number into Brazilian format chars, e.g. 1000000 -> ["1",".","0","0","0",".","0","0","0"]
 */
function formatBRLChars(n: number): string[] {
  return n.toLocaleString("pt-BR").split("");
}

const DIGIT_HEIGHT = 1; // 1em per digit cell

export function SlotMachineCounter({
  target,
  prefix = "R$ ",
  className,
}: SlotMachineCounterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shockwaveRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const formatted = formatBRLChars(target);
  const prefixChars = prefix.split("");

  // Separate digits from separators
  const displayChars = [...prefixChars, ...formatted];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      // Show final state immediately
      const strips = container.querySelectorAll<HTMLDivElement>("[data-digit-strip]");
      strips.forEach((strip) => {
        const targetDigit = parseInt(strip.dataset.targetDigit || "0", 10);
        strip.style.transform = `translateY(-${targetDigit * DIGIT_HEIGHT}em)`;
      });
      return;
    }

    const ctx = gsap.context(() => {
      const strips = container.querySelectorAll<HTMLDivElement>("[data-digit-strip]");
      const digitCount = strips.length;

      // Set initial state: all strips at a random high position (spinning)
      strips.forEach((strip) => {
        gsap.set(strip, { y: "-20em" });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 60%",
          once: true,
        },
        onComplete: () => {
          // Gold shockwave after last digit
          if (shockwaveRef.current) {
            gsap.fromTo(
              shockwaveRef.current,
              { scale: 0, opacity: 0.8 },
              {
                scale: 3,
                opacity: 0,
                duration: 0.6,
                ease: "power2.out",
              }
            );
          }
        },
      });

      strips.forEach((strip, i) => {
        const targetDigit = parseInt(strip.dataset.targetDigit || "0", 10);
        const targetY = -targetDigit * DIGIT_HEIGHT;

        // Each digit spins then lands. Left to right: 0.5s to 2.5s delay spread
        const delay = 0.5 + (i / Math.max(digitCount - 1, 1)) * 2;

        // Pre-spin: continuous fast rotation
        const spinTween = gsap.to(strip, {
          y: "-=40em",
          duration: delay,
          ease: "none",
          modifiers: {
            y: gsap.utils.unitize((val) => {
              // Loop within 0-10 digits range
              const v = parseFloat(val);
              return ((v % (10 * DIGIT_HEIGHT)) - 10 * DIGIT_HEIGHT) % (10 * DIGIT_HEIGHT);
            }, "em"),
          },
        });

        tl.add(spinTween, 0);

        // Landing: snap to target digit with bounce
        tl.to(
          strip,
          {
            y: `${targetY}em`,
            duration: 0.5,
            ease: "back.out(1.7)",
            overwrite: true,
          },
          delay
        );
      });
    }, container);

    return () => ctx.revert();
  }, [target]);

  return (
    <div ref={containerRef} className={`relative inline-flex items-center ${className || ""}`}>
      {displayChars.map((char, i) => {
        const isDigit = /^\d$/.test(char);

        if (!isDigit) {
          // Static character (prefix chars, dots, spaces)
          return (
            <span
              key={`static-${i}`}
              className="inline-block"
              style={{ lineHeight: `${DIGIT_HEIGHT}em` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          );
        }

        // Animated digit strip
        const digitValue = parseInt(char, 10);
        return (
          <span
            key={`digit-${i}`}
            className="inline-block overflow-hidden"
            style={{ height: `${DIGIT_HEIGHT}em`, lineHeight: `${DIGIT_HEIGHT}em` }}
          >
            <div
              data-digit-strip=""
              data-target-digit={digitValue}
              style={{ willChange: "transform" }}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
                <div
                  key={d}
                  style={{
                    height: `${DIGIT_HEIGHT}em`,
                    lineHeight: `${DIGIT_HEIGHT}em`,
                  }}
                >
                  {d}
                </div>
              ))}
            </div>
          </span>
        );
      })}

      {/* Gold shockwave */}
      <div
        ref={shockwaveRef}
        className="absolute inset-0 pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(212,165,74,0.4) 0%, rgba(212,165,74,0) 70%)",
          transform: "scale(0)",
          opacity: 0,
        }}
      />
    </div>
  );
}
