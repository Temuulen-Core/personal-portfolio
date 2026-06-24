const projects = [
  {
    title: "Portfolio Website",
    description: "React + Tailwind ашиглан хийсэн personal portfolio UI.",
    tech: ["React", "Tailwind", "Vite"],
    link: "https://coupsoft.vercel.app",
  },
  {
    title: "Todo App",
    description: "CRUD үйлдэлтэй simple todo application.",
    tech: ["React", "LocalStorage", "Vite", "Tailwind"],
    link: "https://coupsoft-todo.vercel.app",
  },
  {
    title: "Weather App",
    description: "API ашиглан realtime weather мэдээлэл харуулна.",
    tech: ["React", "API"],
    link: "https://your-weather-app.vercel.app",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative max-w-6xl mx-auto px-6 py-28 text-white"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00FF94]/10 blur-[140px] rounded-full"></div>
      </div>

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
        My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF94] to-emerald-400">
          Projects
        </span>
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-full w-full cursor-pointer p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-white/5"
          >
            {/* Inner card */}
            <div
              className="h-full rounded-2xl bg-[#0b0f14]/80 backdrop-blur-xl p-6
                         transition-all duration-300
                         hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,255,148,0.15)]"
            >
              {/* Glow line top */}
              <div className="h-[2px] w-0 bg-[#00FF94] group-hover:w-full transition-all duration-300 mb-5"></div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#00FF94] transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full
                               bg-white/5 border border-white/10
                               text-gray-300
                               group-hover:border-[#00FF94]/40 group-hover:text-[#00FF94]
                               transition"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* bottom glow */}
              <div className="mt-6 h-[1px] w-0 bg-gradient-to-r from-transparent via-[#00FF94] to-transparent group-hover:w-full transition-all duration-500"></div>
            </div>
          </a>
        ))}
      </div>

      {/* Premium Divider */}
      <div className="relative mt-28 flex items-center justify-center">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-[#00FF94]/30"></div>

        <div className="relative mx-6 flex items-center justify-center">
          <div className="absolute w-16 h-16 bg-[#00FF94]/20 blur-2xl rounded-full"></div>

          <div
            className="w-5 h-5 rotate-45 rounded-[4px]
                 border border-[#00FF94]/50
                 bg-[#0b0f14]
                 shadow-[0_0_25px_rgba(0,255,148,0.35)]"
          />
        </div>

        <div className="h-[1px] w-full bg-gradient-to-l from-transparent via-white/10 to-[#00FF94]/30"></div>
      </div>
    </section>
  );
}
