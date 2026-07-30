import { useNavigate, useLocation } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <footer className="relative bg-[#07090e] px-6 md:px-20 pb-12 pt-8 overflow-hidden">
      {/* Dark Ambient Liquid Glow (Pastki fon nur effekti) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Dark Liquid Glass Box */}
      <div className="max-w-6xl mx-auto rounded-3xl bg-slate-900/40 backdrop-blur-2xl border border-white/10 p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative z-10">
        {/* Ichki Shisha Yaltirashi */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-slate-400 text-sm font-light text-center md:text-left">
            © {year} <span className="text-white font-medium">Alibek</span>.
            Barcha huquqlar himoyalangan.
          </p>

          {/* Quick Navigation Links */}
          <div className="flex items-center gap-6 text-sm font-medium">
            <a
              href="#hero"
              onClick={scrollToSection("hero")}
              className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)] cursor-pointer"
            >
              Home
            </a>
            <a
              href="#projects"
              onClick={scrollToSection("projects")}
              className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)] cursor-pointer"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={scrollToSection("contact")}
              className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)] cursor-pointer"
            >
              Contact
            </a>
          </div>

          {/* Social Links (Glass Pill Buttons) */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/alibek-qoldashev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-slate-800/40 backdrop-blur-md border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800/70 hover:scale-105 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/alibek-qo-ldoshev-915ab8372/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-slate-800/40 backdrop-blur-md border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800/70 hover:scale-105 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://t.me/ullugbekvc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-slate-800/40 backdrop-blur-md border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800/70 hover:scale-105 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
