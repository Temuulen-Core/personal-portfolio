import { useEffect, useState } from "react";

const roles = [
  "Junior Developer",
  "Frontend Developer",
  "React Enthusiast",
  "UI/UX Builder",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // mouse glow
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 60 : 100;

    const timeout = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (deleting && charIndex > 0) {
        setText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-[#0F0F0F] overflow-hidden">
      {/* MOVING GLOW (mouse follow) */}
      <div
        className="pointer-events-none fixed  w-[180px] h-[180px] bg-[#00FF94] opacity-40 blur-[80px] rounded-full"
        style={{
          left: mouse.x - 90,
          top: mouse.y - 90,
        }}
      />

      {/* STATIC GLOW */}
      <div className="absolute w-[400px] h-[200px] bg-[#00FF94] opacity-10 blur-[160px] rounded-full animate-pulse"></div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#00FF94_1px,transparent_1px)] [background-size:28px_28px]"></div>

      {/* CARD */}
      <div className="relative max-w-3xl w-full">
        <div
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14
                        shadow-[0_0_80px_rgba(0,0,0,0.6)]
                        transition-all duration-300
                        hover:scale-[1.03]
                        hover:border-[#00FF94]/40
                        hover:shadow-[0_0_80px_rgba(0,255,148,0.2)]"
        >
          {/* terminal */}
          <p className="text-[#00FF94] font-mono text-sm mb-6 tracking-widest">
            &gt; npm install Hello World@2.0.2.6
          </p>

          {/* name */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            I am <br />
            <span className="text-[#00FF94] transition-all duration-300 hover:tracking-widest cursor-default">
              Temuulen U.
            </span>
          </h1>

          {/* typing */}
          <h2 className="text-xl md:text-2xl text-gray-400 font-mono mb-8 h-8">
            {text}
            <span className="animate-pulse text-[#00FF94]">|</span>
          </h2>

          {/* description */}
          <p className="text-gray-500 text-lg max-w-xl leading-relaxed mb-10">
            I’m a passionate frontend developer with a love for crafting
            beautiful and functional web experiences. I specialize in React and
            have a knack for UI/UX design.
          </p>

          {/* buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group relative bg-[#00FF94] text-black font-semibold px-6 py-3 rounded-lg
                         transition-all duration-300
                         hover:scale-105
                         hover:shadow-[0_0_35px_rgba(0,255,148,0.4)]"
            >
              Check projects
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">
                →
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black/40 group-hover:w-full transition-all duration-300"></span>
            </a>

            <a
              href="#contact"
              className="border border-white/20 text-white px-6 py-3 rounded-lg
                         transition-all duration-300
                         hover:border-[#00FF94]
                         hover:text-[#00FF94]
                         hover:scale-105
                         hover:shadow-[0_0_25px_rgba(0,255,148,0.2)]"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
