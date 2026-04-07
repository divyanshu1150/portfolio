const projects = [
  {
    title: "Instagram Automation Bot",
    desc: "Automated content creation and posting using Python & Selenium.",
  },
  {
    title: "JSON Diff Tool",
    desc: "Web tool for comparing JSON with SEO optimization.",
  },
  {
    title: "PDF Unlocker",
    desc: "Simple tool to unlock PDFs with focus on monetization.",
    link: "https://pdf.divyanshuagarwal.com",
  },
  {
    title: "Financial Tools",
    desc: "Collection of financial calculators and utilities.",
    link: "https://finance.divyanshuagarwal.com",
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
              className="p-6 border rounded-xl hover:bg-gray-800 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400">{p.desc}</p>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-400 hover:underline"
                >
                  View Live →
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}