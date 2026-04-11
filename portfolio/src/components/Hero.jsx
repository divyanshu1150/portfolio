import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import { SITE } from "../content";
import { useScramble } from "../hooks/useScramble";
import { useMagnetic } from "../hooks/useMagnetic";

const ROLES = [
  "Software Engineer @ Deutsche Bank",
  "Backend Systems Builder",
  "Automation Enthusiast",
  "Open Source Contributor",
];

const TECH_ORBIT = [
  { icon: "☕", label: "Java", angle: 0 },
  { icon: "⚛️", label: "React", angle: 60 },
  { icon: "🐍", label: "Python", angle: 120 },
  { icon: "🍃", label: "Spring", angle: 180 },
  { icon: "🐳", label: "Docker", angle: 240 },
  { icon: "⚡", label: "AI", angle: 300 },
];

function useTypewriter(texts, speed = 60, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    let timer;
    if (!deleting && display === current) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && display === "") {
      setDeleting(false);
      setIdx((i) => (i + 1) % texts.length);
    } else {
      timer = setTimeout(() => {
        setDisplay(deleting
          ? current.slice(0, display.length - 1)
          : current.slice(0, display.length + 1)
        );
      }, deleting ? speed / 2 : speed);
    }
    return () => clearTimeout(timer);
  }, [display, deleting, idx, texts, speed, pause]);

  return display;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function OrbitingIcons() {
  const RADIUS = 155;
  return (
    <div className="absolute inset-0 pointer-events-none">
      {TECH_ORBIT.map(({ icon, label, angle }, i) => (
        <div
          key={label}
          className="absolute"
          style={{
            left: "50%",
            top: "50%",
            animation: `spin-slow ${18 + i * 2}s linear infinite ${i % 2 === 0 ? "" : "reverse"}`,
            width: 0,
            height: 0,
          }}
        >
          <div
            style={{
              transform: `rotate(${angle}deg) translateX(${RADIUS}px) rotate(-${angle}deg)`,
              animation: `spin-slow ${18 + i * 2}s linear infinite ${i % 2 === 0 ? "reverse" : ""}`,
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-base hover:bg-blue-500/20 hover:border-blue-400/40 transition-colors"
              title={label}
              style={{ transform: "translate(-50%, -50%)" }}
            >
              {icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const role = useTypewriter(ROLES);
  const scrambledName = useScramble(SITE.name, 600);
  const magProjects = useMagnetic(0.35);
  const magContact = useMagnetic(0.35);
  const magResume = useMagnetic(0.35);

  return (
    <section id="home" className="relative pt-24 min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-6 z-10">

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)" }} />
      </div>

      {/* Profile + orbiting icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        className="relative flex-shrink-0"
        style={{ width: 320, height: 320 }}
      >
        <OrbitingIcons />

        {/* Spinning gradient ring */}
        <div className="absolute"
          style={{
            left: "50%", top: "50%",
            transform: "translate(-50%, -50%)",
            width: 272, height: 272,
          }}
        >
          <div className="absolute -inset-3 rounded-full"
            style={{
              background: "conic-gradient(from 0deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6)",
              animation: "spin-slow 4s linear infinite",
              borderRadius: "50%",
            }}
          />
          <div className="absolute -inset-2 rounded-full bg-[#020617]" />
          <img
            src={profile}
            alt="Divyanshu Agarwal"
            className="profile-ring relative w-full h-full object-cover rounded-full border-4 border-transparent z-10"
            style={{ boxShadow: "0 0 40px rgba(59,130,246,0.5)" }}
          />
        </div>

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
          className="absolute z-20"
          style={{ bottom: 30, right: 10, animation: "float 3s ease-in-out infinite" }}
        >
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            SDE-2 @ DB
          </div>
        </motion.div>

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
          className="absolute z-20"
          style={{ top: 30, right: 5 }}
        >
          <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border border-green-500/30 text-green-400 text-xs font-medium px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-400" style={{ animation: "pulse-glow 2s ease-in-out infinite" }} />
            Open to work
          </div>
        </motion.div>
      </motion.div>

      {/* Text */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center md:text-left max-w-xl"
      >
        <motion.p variants={itemVariants} className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-2">
          &gt; Hello World
        </motion.p>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight font-mono">
          <span className="gradient-text">{scrambledName}</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="text-xl text-gray-300 mb-6 h-8 font-mono">
          <span>{role}</span>
          <span className="typewriter-cursor" />
        </motion.div>

        <motion.p variants={itemVariants} className="text-lg text-gray-400 mb-10 leading-relaxed">
          {SITE.tagline}
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center md:justify-start flex-wrap">
          <a ref={magProjects} href="#projects"
            className="btn-shimmer px-7 py-3 rounded-xl font-semibold text-white relative z-10 shadow-lg shadow-blue-500/25 inline-block">
            View Projects
          </a>
          <a ref={magContact} href="#contact"
            className="relative px-7 py-3 rounded-xl font-semibold text-white border border-white/20 backdrop-blur-sm hover:border-blue-400 hover:bg-white/5 transition-all duration-300 inline-block">
            Contact Me
          </a>
          <a ref={magResume} href="/resume.pdf" target="_blank" rel="noopener noreferrer"
            className="px-7 py-3 rounded-xl font-semibold text-blue-400 border border-blue-400/40 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 inline-block">
            Resume ↗
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 flex gap-4 justify-center md:justify-start">
          {[
            { label: "GitHub", href: SITE.socials.github },
            { label: "LinkedIn", href: SITE.socials.linkedin },
            { label: "LeetCode", href: SITE.socials.leetcode },
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-blue-400 transition-colors duration-200 font-mono">
              {s.label} →
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-600 font-mono tracking-widest uppercase">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-blue-500/50 to-transparent" />
      </motion.div>
    </section>
  );
}
