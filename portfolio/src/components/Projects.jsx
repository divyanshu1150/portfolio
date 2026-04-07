const projects = [
  {
    title: "Instagram Automation Bot",
    desc: "Automated content creation and posting using Python & Selenium.",
    tech: ["Python", "Selenium"],
    github: "https://github.com/divyanshu1150",
  },
  {
    title: "JSON Diff Tool",
    desc: "Web tool for comparing JSON with SEO optimization.",
    tech: ["React", "JavaScript"],
    github: "https://github.com/divyanshu1150",
  },
  {
    title: "PDF Unlocker",
    desc: "Simple tool to unlock PDFs with focus on monetization.",
    tech: ["React", "Backend"],
    link: "https://pdf.divyanshuagarwal.com",
    github: "https://github.com/divyanshu1150/pdf-unlocker",
  },
  {
    title: "Financial Tools",
    desc: "Collection of financial calculators and utilities.",
    tech: ["React", "Finance"],
    link: "https://finance.divyanshuagarwal.com",
    github: "https://github.com/divyanshu1150/tools",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10 text-center md:text-left">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="p-6 border border-gray-700 rounded-xl 
                         bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-gray-800 
                         hover:scale-[1.02] transition duration-300"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>

              {/* Description */}
              <p className="text-gray-400 mb-4">{p.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-800 px-2 py-1 rounded-md text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 flex-wrap">
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2 rounded-lg hover:scale-105 transition"
                  >
                    🚀 Live
                  </a>
                )}

                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-600 px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition"
                  >
                    💻 GitHub
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}