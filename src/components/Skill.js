const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["JavaScript", "HTML", "CSS"],
  },
  {
    category: "Libraries & Frameworks",
    skills: ["React", "Tailwind CSS"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "Firebase"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative max-w-7xl mx-auto px-6 py-28 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00FF94]/10 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[140px] rounded-full"></div>
      </div>

      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF94] to-cyan-400">
            Skills
          </span>
        </h2>

        <p className="text-gray-400 mt-4 text-lg">Technologies I work with</p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {skillCategories.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-[30px] p-[1px]
                       bg-gradient-to-br
                       from-white/10 via-white/5 to-transparent
                       hover:from-[#00FF94]/60
                       hover:via-emerald-400/30
                       transition-all duration-500"
          >
            {/* Card */}
            <div
              className="relative h-full rounded-[30px]
                         bg-[#0b0f14]/80 backdrop-blur-2xl
                         border border-white/10
                         p-8 overflow-hidden
                         transition duration-500
                         hover:-translate-y-3
                         hover:shadow-[0_30px_80px_rgba(0,255,148,0.18)]"
            >
              {/* Glow effect */}
              <div
                className="absolute -top-20 -right-20
                           w-40 h-40 rounded-full
                           bg-[#00FF94]/10 blur-[70px]
                           opacity-0 group-hover:opacity-100
                           transition duration-700"
              />

              {/* Top line */}
              <div
                className="absolute top-0 left-0 h-[3px] w-0
                           bg-gradient-to-r
                           from-[#00FF94] to-cyan-400
                           group-hover:w-full
                           transition-all duration-700"
              />

              {/* Category */}
              <h3
                className="text-2xl font-bold mb-8
                           text-white group-hover:text-[#00FF94]
                           transition"
              >
                {item.category}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {item.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full
                               text-sm font-medium
                               bg-white/5 border border-white/10
                               text-gray-300
                               transition duration-300
                               hover:border-[#00FF94]/50
                               hover:text-[#00FF94]
                               hover:bg-[#00FF94]/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bottom glow line */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2
                           h-[2px] w-0
                           bg-gradient-to-r
                           from-transparent via-[#00FF94] to-transparent
                           group-hover:w-[80%]
                           transition-all duration-700"
              />
            </div>
          </div>
        ))}
      </div>
      {/* Premium Divider */}
      <div className="relative mt-28 flex items-center justify-center">
        {/* Left line */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-[#00FF94]/30"></div>

        {/* Center Glow Orb */}
        <div className="relative mx-6 flex items-center justify-center">
          <div className="absolute w-16 h-16 bg-[#00FF94]/20 blur-2xl rounded-full"></div>

          <div
            className="w-5 h-5 rotate-45 rounded-[4px]
                 border border-[#00FF94]/50
                 bg-[#0b0f14]
                 shadow-[0_0_25px_rgba(0,255,148,0.35)]"
          />
        </div>

        {/* Right line */}
        <div className="h-[1px] w-full bg-gradient-to-l from-transparent via-white/10 to-[#00FF94]/30"></div>
      </div>
    </section>
  );
}
