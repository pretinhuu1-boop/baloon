"use client";

import { useState } from "react";

const navLinks = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Desafio", href: "#metricas" },
  { label: "Prêmios", href: "#premios" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ballion-black/80 backdrop-blur-md border-b border-ballion-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-heading text-2xl tracking-wider">
          <span className="text-white">BALL</span>
          <span className="text-ballion-gold">ION</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-ballion-muted text-sm hover:text-ballion-gold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ballion-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ballion-black rounded"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#participar"
            className="bg-gradient-to-r from-ballion-gold-dark to-ballion-gold text-ballion-black font-bold text-sm px-5 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(212,165,74,0.4)] transition-shadow duration-300"
          >
            PARTICIPAR
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-3 text-white"
          aria-label="Menu de navegação"
          aria-expanded={isOpen}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-4 bg-ballion-black/95 backdrop-blur-md">
          <ul className="space-y-1 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block min-h-[44px] flex items-center text-ballion-muted hover:text-ballion-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ballion-gold rounded"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#participar"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-gradient-to-r from-ballion-gold-dark to-ballion-gold text-ballion-black font-bold text-sm px-5 py-3 rounded-full mt-2"
          >
            PARTICIPAR
          </a>
        </div>
      </div>
    </nav>
  );
}
