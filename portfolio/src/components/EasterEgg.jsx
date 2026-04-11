import { useKonami } from "../hooks/useKonami";

const CONFETTI_COLORS = ["#3b82f6", "#06b6d4", "#8b5cf6", "#34d399", "#f59e0b", "#ef4444"];

function Particle({ i }) {
  const style = {
    position: "fixed",
    left: `${Math.random() * 100}vw`,
    top: "-20px",
    width: `${Math.random() * 8 + 4}px`,
    height: `${Math.random() * 8 + 4}px`,
    background: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    borderRadius: Math.random() > 0.5 ? "50%" : "2px",
    animation: `confetti-fall ${Math.random() * 2 + 2}s linear ${Math.random() * 1}s forwards`,
    zIndex: 9998,
    pointerEvents: "none",
  };
  return <div style={style} />;
}

export default function EasterEgg() {
  const triggered = useKonami();

  if (!triggered) return null;

  return (
    <>
      {/* Confetti particles */}
      {Array.from({ length: 80 }, (_, i) => <Particle key={i} i={i} />)}

      {/* Toast message */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9998] text-center pointer-events-none"
        style={{ animation: "scale-in 0.3s ease forwards" }}
      >
        <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-6 shadow-2xl">
          <p className="text-4xl mb-3">🎮</p>
          <p className="text-white font-bold text-xl mb-1">Konami Code!</p>
          <p className="text-gray-400 text-sm">You found the easter egg 🥚</p>
          <p className="text-blue-400 text-xs mt-2 font-mono">↑↑↓↓←→←→BA</p>
        </div>
      </div>

      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </>
  );
}
