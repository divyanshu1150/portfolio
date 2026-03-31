import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodeforces, SiCodechef, SiLeetcode } from "react-icons/si";

export default function Profiles() {
  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/divyanshu-agarwal/",
      icon: <FaLinkedin />,
    },
    {
      name: "GitHub",
      url: "https://github.com/divyanshu1150",
      icon: <FaGithub />,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/divyanshu1150/",
      icon: <SiLeetcode />,
    },
    {
      name: "Codeforces",
      url: "https://codeforces.com/profile/divyanshu1150",
      icon: <SiCodeforces />,
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/divyanshu1150",
      icon: <SiCodechef />,
    },
  ];

  return (
    <section className="py-20 border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Profiles
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border px-6 py-3 rounded-lg 
                         hover:bg-blue-500 hover:scale-105 
                         transition duration-200"
            >
              <span className="text-xl">{link.icon}</span>
              <span className="font-medium">{link.name}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}