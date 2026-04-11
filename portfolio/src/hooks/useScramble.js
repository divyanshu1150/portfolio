import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

/**
 * Scrambles text character-by-character, then resolves to the target string.
 * @param {string} target - Final text to display
 * @param {number} delay - ms before animation starts
 */
export function useScramble(target, delay = 0) {
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    let frame = 0;
    let raf;
    let started = false;
    const TOTAL_FRAMES = 30;

    const start = () => {
      started = true;
      const animate = () => {
        frame++;
        const progress = frame / TOTAL_FRAMES;
        const resolvedChars = Math.floor(progress * target.length);

        setDisplay(
          target
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < resolvedChars) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (frame < TOTAL_FRAMES) {
          raf = requestAnimationFrame(animate);
        } else {
          setDisplay(target);
        }
      };
      raf = requestAnimationFrame(animate);
    };

    const timer = setTimeout(start, delay);
    return () => {
      clearTimeout(timer);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [target, delay]);

  return display;
}
