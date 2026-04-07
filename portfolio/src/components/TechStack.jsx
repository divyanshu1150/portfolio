export default function TechStack() {
  const skills = [
    "Java",
    "C++",
    "Python",
    "React",
    "Spring Boot",
    "Selenium",
    "System Design",
  ];

  return (
    <section className="py-20 border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Tech Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <span
              key={i}
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