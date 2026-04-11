import { useReveal } from "../hooks/useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="py-20 border-b border-gray-800/50 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} className="reveal">

          <h2 className="section-title text-3xl font-bold mb-10">About Me</h2>

          <div className="grid md:grid-cols-2 gap-10 items-start mt-8">
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                I'm <span className="text-blue-400 font-semibold">Divyanshu Agarwal</span>, a Software Engineer at{" "}
                <span className="text-cyan-400 font-semibold">Deutsche Bank</span> with 2+ years of experience
                building backend systems and automation tools.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I focus on building real-world tools, exploring AI-driven workflows, and improving
                system design skills to build scalable applications.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My goal is to create impactful products that combine development, automation,
                and intelligent systems.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Company", value: "Deutsche Bank" },
                { label: "Role", value: "SDE-2" },
                { label: "Focus", value: "Backend + AI" },
                { label: "Location", value: "India" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="glow-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4"
                >
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-white font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
