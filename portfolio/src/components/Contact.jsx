import { useReveal } from "../hooks/useReveal";
import { SITE } from "../content";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-3xl mx-auto px-6 text-center">

        <div ref={ref} className="reveal">
          {/* Glow orb */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-96 h-96 rounded-full opacity-10"
              style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }} />
          </div>

          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4">&gt; Let's Connect</p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 gradient-text">
            Get In Touch
          </h2>

          <p className="text-gray-400 mb-10 text-lg leading-relaxed max-w-xl mx-auto">
            Open to new opportunities, collaborations, or just a good technical conversation.
            My inbox is always open.
          </p>

          <a
            href={`mailto:${SITE.email}`}
            className="btn-shimmer inline-block px-10 py-4 rounded-2xl font-bold text-white text-lg relative z-10 shadow-2xl shadow-blue-500/30 mb-10"
          >
            Say Hello →
          </a>

          <p className="text-gray-600 text-sm mb-6">{SITE.email}</p>

          <div className="flex justify-center gap-6 text-gray-500">
            <a href={SITE.socials.github} target="_blank" rel="noopener noreferrer"
              className="hover:text-white transition-colors text-2xl">
              <FaGithub />
            </a>
            <a href={SITE.socials.linkedin} target="_blank" rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors text-2xl">
              <FaLinkedin />
            </a>
            <a href={SITE.socials.youtubeChannel} target="_blank" rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors text-2xl">
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
