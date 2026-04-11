import { useEffect, useState } from "react";

export default function LoadingScreen({ onDone }) {
  const [phase, setPhase] = useState("enter"); // enter → hold → exit

  useEffect(() => {
    // Already shown this session? Skip immediately.
    if (sessionStorage.getItem("loaded")) {
      onDone();
      return;
    }
    const t1 = setTimeout(() => setPhase("hold"), 400);
    const t2 = setTimeout(() => setPhase("exit"), 1800);
    const t3 = setTimeout(() => {
      sessionStorage.setItem("loaded", "1");
      onDone();
    }, 2400);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617] transition-opacity duration-500"
      style={{ opacity: phase === "exit" ? 0 : 1, pointerEvents: phase === "exit" ? "none" : "all" }}
    >
      {/* Radial glow backdrop */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
            animation: "pulse-glow 2s ease-in-out infinite",
          }}
        />
      </div>

      {/* Initials monogram */}
      <div
        className="relative flex flex-col items-center gap-6"
        style={{
          opacity: phase === "enter" ? 0 : 1,
          transform: phase === "enter" ? "scale(0.8)" : "scale(1)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        {/* DA monogram */}
        <div
          className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl font-black relative"
          style={{
            background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
            boxShadow: "0 0 60px rgba(59,130,246,0.5), 0 0 120px rgba(6,182,212,0.2)",
          }}
        >
          DA
          {/* Spinning border */}
          <div
            className="absolute -inset-1 rounded-2xl opacity-60"
            style={{
              background: "conic-gradient(from 0deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6)",
              animation: "spin-slow 2s linear infinite",
              zIndex: -1,
              borderRadius: "inherit",
            }}
          />
          <div className="absolute -inset-0.5 rounded-2xl bg-[#020617]" style={{ zIndex: -1 }} />
        </div>

        <p className="text-white font-mono text-sm tracking-[0.3em] uppercase text-gray-400">
          Divyanshu Agarwal
        </p>

        {/* Loading bar */}
        <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
            style={{
              width: phase === "hold" || phase === "exit" ? "100%" : "0%",
              transition: "width 1.2s ease",
            }}
          />
        </div>
      </div>
    </div>
  );
}
