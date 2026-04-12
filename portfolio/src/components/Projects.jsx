import { useRef, useState } from "react";
import { useStaggerReveal } from "../hooks/useReveal";
import { useReveal } from "../hooks/useReveal";
import { PROJECTS } from "../content";

function TiltCard({ children }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e) => {
    if (e.target.closest("a, button")) {
      setTransform("");
      return;
    }
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / cx;
    const dy = (y - cy) / cy;
    setTransform(`perspective(800px) rotateX(${-dy * 4}deg) rotateY(${dx * 4}deg) scale(1.01)`);
  };

  const handleMouseLeave = () => setTransform("");

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: "transform 0.15s ease" }}
      className="glow-card stagger-child reveal bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 cursor-default"
    >
      {children}
    </div>
  );
}

export default function Projects() {
  const titleRef = useReveal();
  const gridRef = useStaggerReveal();

  return (
    <section id="projects" className="py-20 border-b border-gray-800/50 relative z-10">
      <div className="max-w-5xl mx-auto px-6">

        <div ref={titleRef} className="reveal mb-10">
          <h2 className="section-title text-3xl font-bold">Projects</h2>
          <p className="text-gray-500 mt-8">Things I've built that actually ship.</p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <TiltCard key={p.title}>
              {/* Accent top bar */}
              <div className="h-0.5 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded mb-4" />

              <h3 className="text-xl font-semibold mb-2 text-white">{p.title}</h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs bg-blue-500/10 border border-blue-500/20 text-blue-300 px-2.5 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 flex-wrap">
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shimmer text-sm px-5 py-2 rounded-lg text-white font-medium relative z-10"
                  >
                    Live ↗
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm border border-white/20 px-5 py-2 rounded-lg text-gray-300 hover:border-blue-400 hover:text-white transition-all"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
