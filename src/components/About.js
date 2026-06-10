import { useEffect, useState } from "react";

const statsData = [
  { value: 12, suffix: "+", label: "Дууссан проект" },
  { value: 2, suffix: " жил", label: "Туршлага" },
  { value: 10, suffix: "+", label: "Технологи" },
  { value: 500, suffix: "+", label: "GitHub commit" },
];

// ================= CUSTOM HOOK =================
function useCount(target, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);

    const interval = setInterval(() => {
      start += increment;

      if (start >= target) {
        start = target;
        clearInterval(interval);
      }

      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(interval);
  }, [target, duration]);

  return count;
}

// ================= STAT CARD =================
function StatCard({ stat }) {
  const count = useCount(stat.value);

  return (
    <div
      className="group relative bg-white/5 backdrop-blur-xl border border-white/10
                 rounded-2xl p-6 overflow-hidden
                 transition-all duration-300
                 hover:scale-[1.06]
                 hover:border-[#00FF94]/40
                 hover:shadow-[0_0_45px_rgba(0,255,148,0.15)]"
    >
      {/* glow sweep */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-[#00FF94]/10 to-transparent" />

      <p className="relative text-4xl font-bold text-[#00FF94] mb-1">
        {count}
        {stat.suffix}
      </p>

      <p className="relative text-gray-400 text-sm group-hover:text-gray-200 transition-colors">
        {stat.label}
      </p>

      {/* underline animation */}
      <div className="mt-3 h-[1px] w-0 bg-[#00FF94] group-hover:w-full transition-all duration-300" />
    </div>
  );
}

// ================= MAIN COMPONENT =================
export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 bg-[#070707] overflow-hidden"
    >
      {/* 🌌 cinematic glow */}
      <div className="absolute w-[700px] h-[700px] bg-[#00FF94] opacity-[0.04] blur-[220px] rounded-full top-0 left-1/2 -translate-x-1/2" />

      {/* floating orbs */}
      <div className="absolute top-24 left-12 w-28 h-28 bg-[#00FF94] opacity-10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-24 right-16 w-36 h-36 bg-[#00FF94] opacity-10 rounded-full blur-3xl animate-bounce" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* ================= LEFT ================= */}
        <div className="grid grid-cols-2 gap-6">
          {statsData.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>

        {/* ================= RIGHT ================= */}
        <div className="relative">
          <p className="text-[#00FF94] font-mono text-sm mb-4 tracking-widest">
            ABOUT ME
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Би хэн бэ?
          </h2>

          {/* glass panel */}
          <div
            className="bg-white/5 backdrop-blur-2xl border border-white/10
                       rounded-2xl p-7 mb-7
                       transition-all duration-300
                       hover:border-[#00FF94]/30
                       hover:shadow-[0_0_40px_rgba(0,255,148,0.12)]"
          >
            <p className="text-gray-400 leading-relaxed mb-4">
              Би вэб хөгжүүлэлтэд дуртай developer. React, JavaScript, Tailwind
              CSS ашиглан цэвэр, хурдан, modern UI бүтээдэг.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Би open-source project дээр ажиллаж, шинэ технологи байнга
              судалдаг.
            </p>
          </div>

          {/* button */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-[#00FF94] font-mono text-sm
                       border border-[#00FF94]/30 px-6 py-3 rounded-lg
                       transition-all duration-300
                       hover:bg-[#00FF94]/10
                       hover:scale-105
                       hover:shadow-[0_0_35px_rgba(0,255,148,0.2)]"
          >
            Download CV
            <span className="group-hover:translate-y-1 transition-transform">
              ↓
            </span>
          </a>
        </div>
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
