import { SITE } from "../content";

export default function YouTube() {
  return (
    <section id="youtube" className="py-20 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">
          YouTube & AI Content
        </h2>

        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          I create AI-driven content focused on prompting techniques, automation workflows,
          and building practical AI applications.
        </p>

        {/* Main Card */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl border border-gray-700">

          {/* Channel Info */}
          <h3 className="text-2xl font-semibold mb-2">
            SmartRasoi AI
          </h3>

          <p className="text-gray-400 mb-6">
            Exploring the power of AI in real-world use cases — from prompt engineering
            to automated content generation and AI-driven storytelling.
          </p>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">

            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-blue-400 font-bold text-lg">
                Prompt Engineering
              </p>
              <p className="text-sm text-gray-400">
                Advanced prompting techniques for better AI outputs
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-blue-400 font-bold text-lg">
                Automation
              </p>
              <p className="text-sm text-gray-400">
                AI-powered automation workflows and tools
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-blue-400 font-bold text-lg">
                Content Creation
              </p>
              <p className="text-sm text-gray-400">
                Creating engaging AI-generated videos and stories
              </p>
            </div>

          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">

            <a
              href={SITE.socials.youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 px-6 py-2 rounded-lg hover:bg-red-600 transition"
            >
              ▶ Visit Channel
            </a>

            <a
              href={SITE.socials.youtubeVideos}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 px-6 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              📺 View Videos
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}