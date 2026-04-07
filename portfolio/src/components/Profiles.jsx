import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodeforces, SiCodechef, SiLeetcode } from "react-icons/si";
import { PROFILE_LINKS } from "../content";

export default function Profiles() {
  const icons = {
    linkedin: <FaLinkedin />,
    github: <FaGithub />,
    leetcode: <SiLeetcode />,
    codeforces: <SiCodeforces />,
    codechef: <SiCodechef />,
  };

  return (
    <section id="profiles" className="py-20 border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Profiles
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {PROFILE_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border px-6 py-3 rounded-lg 
                         hover:bg-blue-500 hover:scale-105 
                         transition duration-200"
            >
              <span className="text-xl">{icons[link.icon]}</span>
              <span className="font-medium">{link.name}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}