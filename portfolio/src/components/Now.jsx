import { useReveal, useStaggerReveal } from "../hooks/useReveal";

const ITEMS = [
  {
    icon: "🤖",
    title: "AI Automation",
    desc: "Building AI-powered workflows for content creation and automation using LLMs and Python pipelines.",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
  },
  {
    icon: "🛠️",
    title: "Web Tools",
    desc: "Developing SEO-driven utility tools like JSON diff, PDF unlocker, and financial calculators.",
    color: "from-violet-500/20 to-blue-500/20",
    border: "border-violet-500/30",
  },
  {
    icon: "📐",
    title: "System Design",
    desc: "Learning scalable architectures, distributed systems, and backend design patterns.",
    color: "from-teal-500/20 to-green-500/20",
    border: "border-teal-500/30",
  },
];

export default function Now() {
  const titleRef = useReveal();
  const gridRef = useStaggerReveal();

  return (
    <section id="now" className="py-20 border-b border-gray-800/50 relative z-10">
      <div className="max-w-5xl mx-auto px-6">

        <div ref={titleRef} className="reveal text-center mb-10">
          <h2 className="section-title text-3xl font-bold">What I'm Building</h2>
          <p className="text-gray-500 mt-8">Current focus areas.</p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-6">
          {ITEMS.map(({ icon, title, desc, color, border }) => (
            <div
              key={title}
              className={`stagger-child reveal glow-card bg-gradient-to-br ${color} backdrop-blur-sm border ${border} rounded-2xl p-6`}
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="font-semibold text-white mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
