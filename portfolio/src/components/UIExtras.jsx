import { useEffect, useState, useRef } from "react";

/** Thin gradient progress bar at the very top */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setProgress((scrollTop / (scrollHeight - clientHeight)) * 100);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[100] pointer-events-none">
      <div className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 transition-[width] duration-75"
        style={{ width: `${progress}%` }} />
    </div>
  );
}

/** Back-to-top button */
function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-8 right-6 z-50 w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-blue-500/30 hover:border-blue-400/50 hover:scale-110 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 12V4M8 4L4 8M8 4L12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

/** Cursor spotlight — radial light that follows mouse */
function CursorSpotlight() {
  const [pos, setPos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{
        background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(59,130,246,0.05) 0%, transparent 70%)`,
        transition: "background 0.1s ease",
      }}
    />
  );
}

/** Custom glowing cursor */
function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const target = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf;
    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
      const el = document.elementFromPoint(e.clientX, e.clientY);
      setHovering(!!el?.closest("a, button, [role=button]"));
    };
    const animate = () => {
      setTrail((prev) => ({
        x: prev.x + (target.current.x - prev.x) * 0.1,
        y: prev.y + (target.current.y - prev.y) * 0.1,
      }));
      raf = requestAnimationFrame(animate);
    };
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      <div className="fixed pointer-events-none z-[9999] rounded-full mix-blend-screen"
        style={{
          left: trail.x - (hovering ? 24 : 20),
          top: trail.y - (hovering ? 24 : 20),
          width: hovering ? 48 : 40,
          height: hovering ? 48 : 40,
          background: `radial-gradient(circle, rgba(${clicking ? "6,182,212" : "96,165,250"},0.35) 0%, transparent 70%)`,
          border: hovering ? "1px solid rgba(96,165,250,0.4)" : "none",
          transform: `scale(${clicking ? 0.8 : 1})`,
          transition: "width 0.2s, height 0.2s, left 0.0s, top 0.0s, transform 0.15s",
        }}
      />
      <div className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          left: pos.x - 3,
          top: pos.y - 3,
          width: 6,
          height: 6,
          background: clicking ? "#06b6d4" : "#60a5fa",
          boxShadow: `0 0 6px ${clicking ? "#06b6d4" : "#60a5fa"}`,
          transition: "background 0.1s, box-shadow 0.1s",
        }}
      />
    </>
  );
}

export default function UIExtras() {
  return (
    <>
      <ScrollProgress />
      <BackToTop />
      <CursorSpotlight />
      <CustomCursor />
    </>
  );
}
