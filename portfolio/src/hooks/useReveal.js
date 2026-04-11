import { useEffect, useRef } from "react";

/**
 * Returns a ref to attach to a container element.
 * When the element scrolls into view, it gets the "visible" class added,
 * which triggers CSS reveal transitions defined in index.css.
 */
export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          // Also add visible to all .section-title children
          el.querySelectorAll(".section-title").forEach((t) => t.classList.add("visible"));
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px", ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * Attach to a container — each direct child with class "stagger-child"
 * gets revealed with a delay based on its index.
 */
export function useStaggerReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = container.querySelectorAll(".stagger-child");
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.1}s`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child) => child.classList.add("visible"));
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return ref;
}
