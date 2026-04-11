import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Now from "./components/Now";
import Impact from "./components/Impact";
import Projects from "./components/Projects";
import YouTube from "./components/YouTube";
import TechStack from "./components/TechStack";
import Learning from "./components/Learning";
import Experience from "./components/Experience";
import Stats from "./components/Stats";
import Profiles from "./components/Profiles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleCanvas from "./components/ParticleCanvas";
import UIExtras from "./components/UIExtras";
import LoadingScreen from "./components/LoadingScreen";
import EasterEgg from "./components/EasterEgg";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}

      {/* Backgrounds */}
      <div className="aurora-container">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
        <div className="aurora-blob aurora-blob-4" />
      </div>
      <div className="grid-overlay" />
      <div className="noise-overlay" />
      <ParticleCanvas />

      <UIExtras />
      <EasterEgg />

      {/* Content */}
      <div
        className="relative z-10 transition-opacity duration-500"
        style={{ opacity: loaded ? 1 : 0 }}
      >
        <Navbar />
        <Hero />
        <About />
        <Now />
        <Impact />
        <Projects />
        <YouTube />
        <TechStack />
        <Learning />
        <Experience />
        <Stats />
        <Profiles />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
