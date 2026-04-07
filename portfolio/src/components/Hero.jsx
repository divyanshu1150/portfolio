import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="home" className="pt-24 min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6">

      {/* IMAGE */}
      <div>
        <img
          src={profile}
          alt="Divyanshu Agarwal"
          className="w-64 h-64 object-cover rounded-full border-4 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.5)]"
        />
      </div>

      {/* TEXT */}
      <div className="text-center md:text-left max-w-xl">
<h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
  Divyanshu Agarwal
</h1>

<h2 className="text-xl text-gray-400 mb-6">
  Software Engineer @ Deutsche Bank
</h2>

        <p className="text-lg text-gray-300 mb-8">
          Building automation systems & scalable backend solutions.
        </p>

        <div className="flex gap-4 justify-center md:justify-start">
          <a href="#projects" className="bg-blue-500 px-6 py-2 rounded-lg">
            View Projects
          </a>
          <a href="#contact" className="border px-6 py-2 rounded-lg">
            Contact
          </a>
        </div>
      </div>

    </section>
  );
}