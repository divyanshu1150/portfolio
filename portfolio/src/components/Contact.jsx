export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-6">
          Contact
        </h2>

        <p className="text-gray-400 mb-8">
          Feel free to reach out for opportunities, collaborations, or just a quick chat.
        </p>

        {/* Email Button */}
        <a
          href="mailto:divyanshu1150@gmail.com"
          className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2 rounded-lg hover:scale-105 transition"
        >
          📩 Email Me
        </a>

        {/* Email Display */}
        <p className="mt-6 text-gray-400">
          divyanshu1150@gmail.com
        </p>

      </div>
    </section>
  );
}