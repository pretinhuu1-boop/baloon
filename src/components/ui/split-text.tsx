"use client";

import { forwardRef } from "react";

interface SplitTextProps {
  children: string;
  className?: string;
  style?: React.CSSProperties;
  mode?: "char" | "word";
}

export const SplitText = forwardRef<HTMLSpanElement, SplitTextProps>(
  function SplitText({ children, className, style, mode = "char" }, ref) {
    if (mode === "word") {
      const words = children.split(" ");

      return (
        <span ref={ref} className={className} style={style} aria-label={children}>
          {words.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="word"
              style={{
                display: "inline-block",
                willChange: "transform, opacity",
              }}
              aria-hidden="true"
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </span>
          ))}
        </span>
      );
    }

    const chars = children.split("");

    return (
      <span ref={ref} className={className} style={style} aria-label={children}>
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
