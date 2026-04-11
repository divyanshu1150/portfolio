import { useEffect, useState } from "react";

const SEQUENCE = [
  "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
  "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
  "b","a"
];

export function useKonami() {
  const [triggered, setTriggered] = useState(false);
  const [pos, setPos] = useState(0);

  useEffect(() => {
    const onKey = (e) => {
      setPos((prev) => {
        if (e.key === SEQUENCE[prev]) {
          const next = prev + 1;
          if (next === SEQUENCE.length) {
            setTriggered(true);
            setTimeout(() => setTriggered(false), 4000);
            return 0;
          }
          return next;
        }
        return e.key === SEQUENCE[0] ? 1 : 0;
      });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return triggered;
}
