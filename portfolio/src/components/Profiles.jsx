import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodeforces, SiCodechef, SiLeetcode } from "react-icons/si";
import { useReveal, useStaggerReveal } from "../hooks/useReveal";
import { PROFILE_LINKS } from "../content";

const icons = {
  linkedin: <FaLinkedin className="text-xl" />,
  github: <FaGithub className="text-xl" />,
  leetcode: <SiLeetcode className="text-xl" />,
  codeforces: <SiCodeforces className="text-xl" />,
  codechef: <SiCodechef className="text-xl" />,
};

const colors = {
  linkedin: "hover:border-blue-500/60 hover:bg-blue-500/10 hover:text-blue-400",
  github: "hover:border-gray-400/60 hover:bg-gray-400/10 hover:text-gray-200",
  leetcode: "hover:border-orange-400/60 hover:bg-orange-400/10 hover:text-orange-400",
  codeforces: "hover:border-blue-400/60 hover:bg-blue-400/10 hover:text-blue-300",
  codechef: "hover:border-amber-400/60 hover:bg-amber-400/10 hover:text-amber-400",
};

export default function Profiles() {
  const titleRef = useReveal();
  const gridRef = useStaggerReveal();

  return (
    <section id="profiles" className="py-20 border-b border-gray-800/50 relative z-10">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <div ref={titleRef} className="reveal mb-10">
          <h2 className="section-title text-3xl font-bold">Profiles</h2>
          <p className="text-gray-500 mt-8">Find me across the web.</p>
        </div>

        <div ref={gridRef} className="flex flex-wrap justify-center gap-4">
          {PROFILE_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`stagger-child reveal flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-3.5 rounded-xl text-gray-400 transition-all duration-300 ${colors[link.icon]}`}
            >
              {icons[link.icon]}
              <span className="font-medium">{link.name}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
