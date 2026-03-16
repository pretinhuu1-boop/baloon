"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(false);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => setIsVisible(false),
    });

    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
    )
      .to(logoRef.current, {
        opacity: 0,
        scale: 1.1,
        duration: 0.4,
        ease: "power2.in",
        delay: 0.4,
      })
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 0.6,
        ease: "power3.inOut",
      });
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-ballion-black flex items-center justify-center"
    >
      <div ref={logoRef} className="text-center">
        <h1 className="font-heading text-5xl md:text-7xl tracking-wider">
          <span className="text-white">BALL</span>
          <span className="text-ballion-gold">ION</span>
        </h1>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-ballion-gold to-transparent mx-auto mt-4" />
      </div>
    </div>
  );
}
