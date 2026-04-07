import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "YouTube", id: "youtube" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-xl border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-lg font-bold cursor-pointer"
            onClick={() => scrollToSection("home")}>
          Divyanshu
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:text-white transition"
            >
              {item.name}
            </button>
          ))}

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2 rounded-lg hover:scale-105 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/5 backdrop-blur-lg border border-white/10 border-t border-gray-800 px-6 py-4 space-y-4">

          {navItems.map((item, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left text-gray-300 hover:text-white"
            >
              {item.name}
            </button>
          ))}

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2 rounded-lg hover:scale-105 transition"
          >
            Resume
          </a>

        </div>
      )}
    </nav>
  );
}