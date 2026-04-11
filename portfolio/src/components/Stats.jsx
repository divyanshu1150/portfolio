import { useReveal, useStaggerReveal } from "../hooks/useReveal";
import { SITE } from "../content";

export default function Stats() {
  const titleRef = useReveal();
  const gridRef = useStaggerReveal();

  return (
    <section id="stats" className="py-20 border-b border-gray-800/50 relative z-10">
      <div className="max-w-6xl mx-auto px-6">

        <div ref={titleRef} className="reveal text-center mb-12">
          <h2 className="section-title text-3xl font-bold">Activity & Stats</h2>
          <p className="text-gray-500 mt-8">My coding activity across platforms.</p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "GitHub Activity",
              src: `https://ghchart.rshah.org/${SITE.githubUsername}`,
              alt: "GitHub Contributions",
            },
            {
              title: "GitHub Stats",
              src: `https://github-readme-stats.vercel.app/api?username=${SITE.githubUsername}&show_icons=true&theme=tokyonight&bg_color=00000000&hide_border=true`,
              alt: "GitHub Stats",
            },
            {
              title: "LeetCode",
              src: `https://leetcard.jacoblin.cool/${SITE.githubUsername}?theme=dark&ext=heatmap`,
              alt: "LeetCode Stats",
            },
            {
              title: "Codeforces",
              src: `https://codeforces-readme-stats.vercel.app/api/card?username=${SITE.githubUsername}&theme=dark`,
              alt: "Codeforces Stats",
            },
          ].map(({ title, src, alt }) => (
            <div
              key={title}
              className="stagger-child reveal glow-card bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl"
            >
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
                {title}
              </h3>
              <img
                src={src}
                alt={alt}
                className="mx-auto max-w-full rounded-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
