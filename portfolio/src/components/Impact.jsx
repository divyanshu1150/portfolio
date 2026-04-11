import { useReveal } from "../hooks/useReveal";
import { useCounter } from "../hooks/useCounter";

const STATS = [
  { end: 2, suffix: "+", label: "Years Experience", color: "from-blue-500 to-cyan-500" },
  { end: 5, suffix: "+", label: "Projects Built", color: "from-cyan-500 to-teal-500" },
  { end: 300, suffix: "+", label: "Problems Solved", color: "from-violet-500 to-blue-500" },
  { end: 3, suffix: "+", label: "Live Tools", color: "from-teal-500 to-green-500" },
  { end: 1, suffix: "", label: "YouTube Channel", color: "from-red-500 to-orange-500" },
  { end: 0, suffix: "∞", label: "Things to Build", color: "from-pink-500 to-violet-500" },
];

function CounterStat({ end, suffix, label, color }) {
  const { count, ref } = useCounter(end, 1600);
  const display = end === 0 ? "∞" : `${count}${suffix}`;

  return (
    <div ref={ref} className="glow-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
      <p className={`text-4xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2 tabular-nums`}>
        {display}
      </p>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
}

export default function Impact() {
  const titleRef = useReveal();

  return (
    <section id="impact" className="py-20 border-b border-gray-800/50 relative z-10">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <div ref={titleRef} className="reveal mb-10">
          <h2 className="section-title text-3xl font-bold">Impact</h2>
          <p className="text-gray-500 mt-8">Numbers that matter.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {STATS.map((s) => (
            <CounterStat key={s.label} {...s} />
          ))}
        </div>

      </div>
    </section>
  );
}
