"use client";

import { cn } from "@/lib/utils";

interface GoldButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function GoldButton({
  children,
  variant = "primary",
  href,
  className,
  onClick,
}: GoldButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-base transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-ballion-gold-dark via-ballion-gold to-ballion-gold-light text-ballion-black hover:shadow-[0_0_30px_rgba(212,165,74,0.5)] hover:scale-105",
    ghost:
      "border border-ballion-gold/40 text-ballion-gold hover:bg-ballion-gold/10 hover:border-ballion-gold",
  };

  const styles = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
