"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { GoldButton } from "./ui/gold-button";

const navLinks = [
  { label: "Funcionalidades", href: "#features" },
  { label: "App", href: "#app-preview" },
  { label: "Comunidade", href: "#community" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-ballion-black/80 border-b border-ballion-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="font-[var(--font-heading)] text-2xl font-bold tracking-wider">
              <span className="text-white">BALL</span>
              <span className="text-ballion-gold">ION</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ballion-muted hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <GoldButton href="#download" className="text-sm px-6 py-2">
              Baixar App
            </GoldButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-ballion-black/95 backdrop-blur-md",
          isOpen ? "max-h-64" : "max-h-0"
        )}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ballion-muted hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <GoldButton href="#download" className="text-sm px-6 py-2 w-full">
            Baixar App
          </GoldButton>
        </div>
      </div>
    </nav>
  );
}
