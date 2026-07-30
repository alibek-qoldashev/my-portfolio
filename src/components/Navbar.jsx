import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const location = useLocation();
  const [dark, setDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false); // Mobile menyu holati

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50">
      <nav className="flex justify-between items-center px-6 py-3 rounded-full bg-slate-950/60 backdrop-blur-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300">
        {/* Dark Liquid Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="relative px-5 py-2 rounded-full bg-slate-800/50 backdrop-blur-md text-white font-bold text-sm tracking-wide border border-white/10 shadow-inner hover:bg-slate-700/60 hover:border-cyan-500/40 transition duration-300"
        >
          Alibek
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping" />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-2 p-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/5">
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.25)] border border-cyan-500/30"
                    : "text-slate-400 hover:text-slate-100 hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Action Buttons (Theme Toggle + Hamburger) */}
        <div className="flex items-center gap-3">
          {/* Theme Button */}
          <button
            onClick={() => setDark(!dark)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 backdrop-blur-md border border-white/10 text-yellow-400 hover:bg-slate-700/60 transition-all duration-300 active:scale-95"
          >
            {dark ? (
              <Moon
                size={18}
                className="drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]"
              />
            ) : (
              <Sun
                size={18}
                className="drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]"
              />
            )}
          </button>

          {/* Hamburger Button (Faqat mobil qurilmada ko'rinadi) */}
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

      {/* Mobile Liquid Glass Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 p-4 rounded-3xl bg-slate-950/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-2">
            {links.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)} // Bosilganda menyuni yopadi
                  className={`px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.25)] border border-cyan-500/30"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
