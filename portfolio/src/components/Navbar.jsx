import { useState, useEffect } from "react";
import { NAV_ITEMS, SITE } from "../content";

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-lg font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded group"
        >
          <span className="gradient-text">{SITE.name.split(" ")[0]}</span>
          <span className="text-gray-400"> {SITE.name.split(" ")[1]}</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-1 items-center">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                active === item.id
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {active === item.id && (
                <span className="absolute inset-0 bg-white/10 rounded-lg" />
              )}
              <span className="relative">{item.name}</span>
              {active === item.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400" />
              )}
            </button>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 btn-shimmer px-5 py-2 rounded-lg text-sm font-semibold text-white relative z-10"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden text-white w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-lg border border-white/10 backdrop-blur-sm ${open ? "hamburger-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="hamburger-bar bar-1" />
          <span className="hamburger-bar bar-2" />
          <span className="hamburger-bar bar-3" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          id="mobile-nav"
          className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10 px-6 py-4 space-y-1"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all ${
                active === item.id
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.name}
            </button>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block btn-shimmer px-4 py-2.5 rounded-lg text-sm font-semibold text-white text-center mt-3 relative z-10"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
