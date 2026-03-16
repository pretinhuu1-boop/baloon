"use client";

import { useRef, useEffect, useState, useCallback } from "react";

interface FrameSequenceCanvasProps {
  frameCount: number;
  framePath: string;
  currentFrame: number;
  className?: string;
}

export function FrameSequenceCanvas({
  frameCount,
  framePath,
  currentFrame,
  className,
}: FrameSequenceCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [hasError, setHasError] = useState(false);

  const padNumber = useCallback(
    (num: number) => String(num).padStart(4, "0"),
    []
  );

  // Preload all frames
  useEffect(() => {
    const images: (HTMLImageElement | null)[] = new Array(frameCount).fill(null);
    let loaded = 0;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = `${framePath}/frame_${padNumber(i + 1)}.webp`;
      img.onload = () => {
        images[i] = img;
        loaded++;
        setLoadedCount(loaded);
      };
      img.onerror = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === frameCount && images.every((im) => im === null)) {
          setHasError(true);
        }
      };
    }

    imagesRef.current = images;

    return () => {
      imagesRef.current = [];
    };
  }, [frameCount, framePath, padNumber]);

  // Draw current frame
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const frameIndex = Math.min(
      Math.max(Math.round(currentFrame), 0),
      frameCount - 1
    );
    const img = imagesRef.current[frameIndex];

    if (img) {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    }
  }, [currentFrame, frameCount, loadedCount]);

  const progress = frameCount > 0 ? Math.round((loadedCount / frameCount) * 100) : 0;

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-ballion-black ${className || ""}`}>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-ballion-gold/10 flex items-center justify-center">
            <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
              <circle cx="24" cy="24" r="11" stroke="#D4A54A" strokeWidth="2" />
              <path d="M24 13v22M13 24h22" stroke="#D4A54A" strokeWidth="1.5" />
            </svg>
          </div>
          <p className="text-ballion-muted text-sm">Frames do vídeo não encontrados</p>
          <p className="text-ballion-muted/50 text-xs mt-1">Gere o vídeo via Google Flow e extraia os frames</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className || ""}`}>
      {progress < 100 && (
        <div className="absolute inset-0 flex items-center justify-center bg-ballion-black z-10">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 relative">
              <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="rgba(212,165,74,0.15)"
                  strokeWidth="3"
                  fill="none"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="#D4A54A"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 36}`}
                  strokeDashoffset={`${2 * Math.PI * 36 * (1 - progress / 100)}`}
                  className="transition-[stroke-dashoffset] duration-300"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-ballion-gold font-heading text-lg">
                {progress}%
              </span>
            </div>
            <p className="text-ballion-muted text-sm">Carregando experiência...</p>
          </div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
        style={{ display: progress < 100 ? "none" : "block" }}
      />
    </div>
  );
}
