import { useState } from "react";

const links = ["Home", "About", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0F0F0F]/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-[#00FF94] font-mono font-bold text-lg transition-all duration-300 hover:scale-110 hover:text-white hover:cursor-pointer hover:drop-shadow-[0_0_10px_#00FF94]">
          &lt;CoupSoft /&gt;
        </span>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-gray-400 text-sm hover:text-[#00FF94] transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          <span className="font-mono text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[#0F0F0F] border-t border-white/10 px-6 py-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block py-2 text-gray-400 hover:text-[#00FF94] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
