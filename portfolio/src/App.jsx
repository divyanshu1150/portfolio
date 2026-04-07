import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Profiles from "./components/Profiles";
import Contact from "./components/Contact";
import Stats from "./components/Stats";
import YouTube from "./components/YouTube";

export default function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <YouTube />
      <Experience />
      <Stats />
      <Profiles />
      <Contact />
    </>
  );
}