import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle"; // yo'lni moslang

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50">
      <nav className="flex justify-between items-center px-6 py-3 rounded-full bg-slate-950/60 backdrop-blur-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300">
        {/* ... Logo va Desktop Links o'zgarishsiz ... */}

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 backdrop-blur-md border border-white/10 text-slate-200 hover:text-white hover:bg-slate-700/60 transition-all duration-300 active:scale-95"
          >
            {isOpen ? (
              <X size={20} className="text-cyan-400" />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </nav>
      {/* ... qolgani o'zgarishsiz ... */}
    </header>
  );
}
