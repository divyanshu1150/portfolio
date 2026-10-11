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

const CATEGORY_META = {
  delivered: {
    label: "Client Delivered",
    badge: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400",
    bar: "from-emerald-500 to-teal-400",
  },
  "client-demo": {
    label: "Client Delivered",
    badge: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400",
    bar: "from-emerald-500 to-teal-400",
  },
};

function ProjectCard({ p }) {
  const meta = CATEGORY_META[p.category];
  return (
    <TiltCard key={p.title}>
      <div className="flex items-start justify-between mb-4 gap-2">
        <div className={`h-0.5 w-12 bg-gradient-to-r ${meta ? meta.bar : "from-blue-500 to-cyan-500"} rounded mt-3`} />
        {meta && (
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${meta.badge} whitespace-nowrap`}>
            {meta.label}
          </span>
        )}
      </div>

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
  );
}

export default function Projects() {
  const titleRef = useReveal();
  const deliveredRef = useStaggerReveal();
  const demoRef = useStaggerReveal();

  const delivered = PROJECTS.filter((p) => p.category === "delivered");
  const clientDemo = PROJECTS.filter((p) => p.category === "client-demo");

  return (
    <section id="projects" className="py-20 border-b border-gray-800/50 relative z-10">
      <div className="max-w-5xl mx-auto px-6">

        <div ref={titleRef} className="reveal mb-10">
          <h2 className="section-title text-3xl font-bold">Projects</h2>
          <p className="text-gray-500 mt-8">Things I've built that actually ship.</p>
        </div>

        {/* Client Delivered */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Client Delivered</span>
            <div className="flex-1 h-px bg-emerald-500/20" />
          </div>
          <div ref={deliveredRef} className="grid md:grid-cols-2 gap-6">
            {delivered.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </div>

        {/* Client Delivered · Demo Versions */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Client Delivered · Demo</span>
            <div className="flex-1 h-px bg-emerald-500/20" />
          </div>
          <p className="text-xs text-gray-600 mb-6">Delivered to real clients — links below are privacy-safe demo versions.</p>
          <div ref={demoRef} className="grid md:grid-cols-2 gap-6">
            {clientDemo.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
