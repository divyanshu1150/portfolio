import { SITE, NAV_ITEMS } from "../content";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/5 py-12 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold gradient-text mb-2">{SITE.name}</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Software Engineer at Deutsche Bank.<br />
              Building systems that scale.
            </p>
          </div>

          {/* Quick nav */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm text-gray-400 hover:text-white text-left transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Connect</p>
            <div className="flex gap-4">
              <a href={SITE.socials.github} target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors text-xl"><FaGithub /></a>
              <a href={SITE.socials.linkedin} target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition-colors text-xl"><FaLinkedin /></a>
              <a href={SITE.socials.youtubeChannel} target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-red-500 transition-colors text-xl"><FaYoutube /></a>
            </div>
            <a href={`mailto:${SITE.email}`}
              className="text-sm text-gray-500 hover:text-blue-400 transition-colors mt-3 block font-mono">
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p className="font-mono">
            Built with <span className="text-blue-500">React</span> + <span className="text-cyan-500">Tailwind</span> + <span className="text-violet-500">Framer Motion</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
