import { useReveal } from "../hooks/useReveal";

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" className="py-20 border-b border-gray-800/50 relative z-10">
      <div className="max-w-5xl mx-auto px-6">

        <div ref={ref} className="reveal">
          <h2 className="section-title text-3xl font-bold mb-10">Experience</h2>

          <div className="mt-8 relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-transparent" />

            <div className="pl-16 relative">
              {/* Timeline dot */}
              <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]" />

              <div className="glow-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Software Engineer (SDE-2)</h3>
                    <p className="text-blue-400 font-medium mt-1">Deutsche Bank</p>
                  </div>
                  <span className="text-xs bg-blue-500/10 border border-blue-500/20 text-blue-300 px-3 py-1.5 rounded-full">
                    2022 – Present
                  </span>
                </div>

                <ul className="space-y-2 text-gray-300 text-sm">
                  {[
                    "Built and maintained high-performance backend systems using Java & Spring Boot",
                    "Developed automation tools with Python & Selenium, reducing manual effort by 80%",
                    "Worked on React-based frontend features for internal banking dashboards",
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
