export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 bg-[#0F0F0F] relative"
    >
      {/* background glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#00FF94] opacity-10 blur-[140px] rounded-full" />

      {/* CARD */}
      <div className="relative max-w-4xl w-full">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 md:p-14 shadow-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,148,0.15)] hover:border-[#00FF94]/30">
          {/* CARD HEADER (Contact Me inside card) */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF94] to-cyan-400">
                Me
              </span>
            </h2>

            <p className="text-gray-400 mt-3">
              Let’s build something amazing together
            </p>

            {/* small glow line */}
            <div className="mt-6 mx-auto w-24 h-[2px] bg-gradient-to-r from-transparent via-[#00FF94] to-transparent"></div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT INFO */}
            <div className="space-y-6">
              <div>
                <p className="text-[#00FF94] font-mono text-sm">Email</p>
                <p className="text-white">u.temuulen0409@gmail.com</p>
              </div>

              <div>
                <p className="text-[#00FF94] font-mono text-sm">Location</p>
                <p className="text-white">Dublin, Ireland</p>
              </div>

              <div>
                <p className="text-[#00FF94] font-mono text-sm">Social</p>
                <p className="text-white">GitHub / LinkedIn</p>
              </div>
            </div>

            {/* RIGHT FORM */}
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full bg-black/30 border border-white/10 px-4 py-3 rounded-lg text-white
                           focus:outline-none focus:border-[#00FF94] transition"
              />

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="w-full bg-black/30 border border-white/10 px-4 py-3 rounded-lg text-white
                           focus:outline-none focus:border-[#00FF94] transition"
              />

              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                rows="5"
                className="w-full bg-black/30 border border-white/10 px-4 py-3 rounded-lg text-white
                           focus:outline-none focus:border-[#00FF94] transition"
              />

              <button
                type="submit"
                className="w-full bg-[#00FF94] text-black font-semibold py-3 rounded-lg
                           hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(0,255,148,0.4)]
                           transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* footer */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          © 2026 Temuulen Undrakh — Built with React & Tailwind
        </p>
      </div>
    </section>
  );
}
