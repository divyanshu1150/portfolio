export default function Stats() {
  return (
    <section className="py-20 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-12 text-center">
          Activity & Stats
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* GitHub Heatmap */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl border border-gray-700">
            <h3 className="text-lg font-semibold mb-4 text-center">
              GitHub Activity
            </h3>
            <img
              src="https://ghchart.rshah.org/divyanshu1150"
              alt="GitHub Contributions"
              className="mx-auto"
            />
          </div>

          {/* GitHub Stats */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl border border-gray-700">
            <h3 className="text-lg font-semibold mb-4 text-center">
              GitHub Stats
            </h3>
            <img
              src="https://github-readme-stats.vercel.app/api?username=divyanshu1150&show_icons=true&theme=tokyonight"
              alt="GitHub Stats"
              className="mx-auto"
            />
          </div>

          {/* LeetCode */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl border border-gray-700">
            <h3 className="text-lg font-semibold mb-4 text-center">
              LeetCode
            </h3>
            <img
              src="https://leetcard.jacoblin.cool/divyanshu1150?theme=dark&ext=heatmap"
              alt="LeetCode Stats"
              className="mx-auto"
            />
          </div>

          {/* Codeforces */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl border border-gray-700">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Codeforces
            </h3>
            <img
              src="https://codeforces-readme-stats.vercel.app/api/card?username=divyanshu1150&theme=dark"
              alt="Codeforces Stats"
              className="mx-auto"
            />
          </div>

        </div>

      </div>
    </section>
  );
}