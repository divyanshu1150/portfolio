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
          className="inline-block bg-blue-500 px-8 py-3 rounded-xl text-lg font-medium 
                     hover:bg-blue-600 hover:scale-105 transition duration-200"
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