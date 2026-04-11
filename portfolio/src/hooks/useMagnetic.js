import { useRef, useEffect } from "react";

/**
 * Attach to a button/link — it magnetically attracts toward the cursor.
 * @param {number} strength - pull strength (default 0.4)
 */
export function useMagnetic(strength = 0.4) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
    };

    const onLeave = () => {
      el.style.transform = "";
      el.style.transition = "transform 0.5s cubic-bezier(0.23,1,0.32,1)";
      setTimeout(() => { el.style.transition = ""; }, 500);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return ref;
}
