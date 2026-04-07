import { SKILLS } from "../content";

export default function TechStack() {
  return (
    <section id="tech" className="py-20 border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Tech Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="bg-white/5 backdrop-blur-lg border border-white/10 px-4 py-2 rounded-lg border border-gray-700 text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}