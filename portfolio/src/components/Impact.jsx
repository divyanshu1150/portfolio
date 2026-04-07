export default function Impact() {
  return (
    <section className="py-20 border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Impact
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl border border-gray-700">
            <p className="text-3xl font-bold text-blue-400">5+</p>
            <p className="text-gray-400">Projects Built</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl border border-gray-700">
            <p className="text-3xl font-bold text-blue-400">300+</p>
            <p className="text-gray-400">Problems Solved</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl border border-gray-700">
            <p className="text-3xl font-bold text-blue-400">3+</p>
            <p className="text-gray-400">Live Tools</p>
          </div>

        </div>

      </div>
    </section>
  );
}