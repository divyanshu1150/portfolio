import { useReveal } from "../hooks/useReveal";

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" className="py-20 border-b border-gray-800/50 relative z-10">
      <div className="max-w-5xl mx-auto px-6">

        <div ref={ref} className="reveal">
          <h2 className="section-title text-3xl font-bold mb-10">Experience</h2>

          <div className="mt-8 relative flex flex-col gap-8">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-transparent" />

            {/* Nomura */}
            <div className="pl-16 relative">
              <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
              <div className="glow-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Associate — Senior Software Engineer</h3>
                    <p className="text-blue-400 font-medium mt-1">Nomura, Mumbai</p>
                  </div>
                  <span className="text-xs bg-blue-500/10 border border-blue-500/20 text-blue-300 px-3 py-1.5 rounded-full">
                    Sep 2026 – Present
                  </span>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {[
                    "Supporting the data platform team that ingests raw data and normalizes it centrally for downstream consumers.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-0.5">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Deutsche Bank */}
            <div className="pl-16 relative">
              <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-white/20 border border-white/30" />
              <div className="glow-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Associate — SDE II</h3>
                    <p className="text-blue-400 font-medium mt-1">Deutsche Bank, Pune</p>
                  </div>
                  <span className="text-xs bg-blue-500/10 border border-blue-500/20 text-blue-300 px-3 py-1.5 rounded-full">
                    Jul 2023 – Sep 2026
                  </span>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {[
                    "Modernized legacy trading, fee management, and trade replay workflows (Java, Spring Boot, React), scaling capacity 20x — from 50 to 1,000 trades.",
                    "Automated enterprise holiday calendar pipelines for 100+ countries using Control-M, shell scripting, and database workflows.",
                    "Engineered regression frameworks using Java and Spring Boot to validate backend services during the On-Prem to GCP migration.",
                    "Resolved critical OutOfMemoryError bottlenecks and production issues across UI, backend, and synchronization systems.",
                    "Received Individual Excellence Award (H1 2025) for high-impact contributions. Mentored junior engineers and interns.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-0.5">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
