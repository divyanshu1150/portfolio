import { useReveal } from "../hooks/useReveal";

const LEARNING_ITEMS = [
  { topic: "System Design", level: 70, color: "from-blue-500 to-cyan-500" },
  { topic: "Distributed Systems", level: 55, color: "from-violet-500 to-blue-500" },
  { topic: "AI / LLM Workflows", level: 80, color: "from-teal-500 to-green-500" },
  { topic: "Cloud Architecture", level: 50, color: "from-orange-500 to-yellow-500" },
];

export default function Learning() {
  const ref = useReveal();

  return (
    <section id="learning" className="py-20 border-b border-gray-800/50 relative z-10">
      <div className="max-w-5xl mx-auto px-6">

        <div ref={ref} className="reveal">
          <div className="text-center mb-10">
            <h2 className="section-title text-3xl font-bold">Currently Learning</h2>
            <p className="text-gray-500 mt-8">Progress in my current study areas.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            {LEARNING_ITEMS.map(({ topic, level, color }) => (
              <div key={topic} className="glow-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-white">{topic}</span>
                  <span className="text-sm text-gray-500">{level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${color} rounded-full`}
                    style={{ width: `${level}%`, transition: "width 1s ease" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
