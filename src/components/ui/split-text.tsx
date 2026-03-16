"use client";

import { forwardRef } from "react";

interface SplitTextProps {
  children: string;
  className?: string;
}

export const SplitText = forwardRef<HTMLSpanElement, SplitTextProps>(
  function SplitText({ children, className }, ref) {
    const chars = children.split("");

    return (
      <span ref={ref} className={className} aria-label={children}>
        {chars.map((char, i) => (
          <span
            key={`${char}-${i}`}
            className="char"
            style={{
              display: "inline-block",
              willChange: "transform, opacity",
            }}
            aria-hidden="true"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    );
  }
);
