import {
  SiCplusplus, SiPython, SiReact, SiSpring,
  SiSelenium, SiDocker, SiGit, SiPostgresql, SiLinux,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { useReveal, useStaggerReveal } from "../hooks/useReveal";
import { SKILLS } from "../content";

const ICON_MAP = {
  Java: <FaJava />,
  "C++": <SiCplusplus />,
  Python: <SiPython />,
  React: <SiReact />,
  "Spring Boot": <SiSpring />,
  Selenium: <SiSelenium />,
  Docker: <SiDocker />,
  Git: <SiGit />,
  PostgreSQL: <SiPostgresql />,
  Linux: <SiLinux />,
};

const ALL_SKILLS = [
  ...SKILLS,
  "Docker", "Git", "PostgreSQL", "Linux",
];

export default function TechStack() {
  const titleRef = useReveal();
  const pillsRef = useStaggerReveal();

  return (
    <section id="tech" className="py-20 border-b border-gray-800/50 relative z-10">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <div ref={titleRef} className="reveal mb-10">
          <h2 className="section-title text-3xl font-bold">Tech Stack</h2>
          <p className="text-gray-500 mt-8">Tools I reach for when building things.</p>
        </div>

        <div ref={pillsRef} className="flex flex-wrap justify-center gap-3 mt-4">
          {ALL_SKILLS.map((skill) => (
            <span
              key={skill}
              className="tech-pill stagger-child reveal flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 px-4 py-2.5 rounded-xl text-sm font-medium cursor-default"
            >
              {ICON_MAP[skill] && (
                <span className="text-blue-400 text-base">{ICON_MAP[skill]}</span>
              )}
              {skill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
