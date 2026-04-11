import { useReveal } from "../hooks/useReveal";
import { SITE } from "../content";

const HIGHLIGHTS = [
  { icon: "⚡", title: "Prompt Engineering", desc: "Advanced prompting techniques for better AI outputs" },
  { icon: "🔄", title: "Automation", desc: "AI-powered automation workflows and tools" },
  { icon: "🎬", title: "Content Creation", desc: "Creating engaging AI-generated videos and stories" },
];

export default function YouTube() {
  const ref = useReveal();

  return (
    <section id="youtube" className="py-20 border-b border-gray-800/50 relative z-10">
      <div className="max-w-5xl mx-auto px-6">

        <div ref={ref} className="reveal">
          <div className="text-center mb-10">
            <h2 className="section-title text-3xl font-bold">YouTube & AI Content</h2>
            <p className="text-gray-400 mt-8 max-w-2xl mx-auto">
              I create AI-driven content focused on prompting techniques, automation workflows,
              and building practical AI applications.
            </p>
          </div>

          <div className="glow-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
            {/* Channel branding */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-2xl shadow-lg shadow-red-500/30">
                ▶
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">SmartRasoi AI</h3>
                <p className="text-gray-400 text-sm">Exploring AI in real-world use cases</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {HIGHLIGHTS.map(({ icon, title, desc }) => (
                <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-2xl mb-2">{icon}</p>
                  <p className="text-white font-semibold text-sm mb-1">{title}</p>
                  <p className="text-xs text-gray-400">{desc}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">
              <a
                href={SITE.socials.youtubeChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer px-6 py-2.5 rounded-xl text-white font-semibold text-sm relative z-10 shadow-lg shadow-blue-500/20"
                style={{ background: "linear-gradient(135deg, #ef4444, #f97316)" }}
              >
                ▶ Visit Channel
              </a>
              <a
                href={SITE.socials.youtubeVideos}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl text-gray-300 text-sm border border-white/20 hover:border-white/40 hover:text-white transition-all"
              >
                View Videos →
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
