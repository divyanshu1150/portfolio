export default function Now() {
  return (
    <section id="now" className="py-20 border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10 text-center">
          What I'm Building
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl border border-gray-700">
            <h3 className="font-semibold mb-2">AI Automation</h3>
            <p className="text-gray-400 text-sm">
              Building AI-powered workflows for content creation and automation.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl border border-gray-700">
            <h3 className="font-semibold mb-2">Web Tools</h3>
            <p className="text-gray-400 text-sm">
              Developing SEO-driven utility tools like JSON diff and PDF unlocker.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl border border-gray-700">
            <h3 className="font-semibold mb-2">System Design</h3>
            <p className="text-gray-400 text-sm">
              Learning scalable architectures and backend design principles.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}