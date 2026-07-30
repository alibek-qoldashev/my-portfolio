import { Link } from "react-router-dom";
import { VscVscode } from "react-icons/vsc";
import {
  SiReact,
  SiPython,
  SiSupabase,
  SiMysql,
  SiSwagger,
} from "react-icons/si";

const floatingIcons = [
  {
    Icon: SiMysql,
    color: "text-blue-400",
    top: "10%",
    left: "12%",
    animation: "animate-float-1",
  },
  {
    Icon: SiSupabase,
    color: "text-emerald-400",
    top: "15%",
    left: "65%",
    animation: "animate-float-2",
  },
  {
    Icon: SiSwagger,
    color: "text-emerald-500",
    top: "45%",
    left: "75%",
    animation: "animate-float-3",
  },
  {
    Icon: SiReact,
    color: "text-cyan-400",
    top: "48%",
    left: "10%",
    animation: "animate-float-2",
  },
  {
    Icon: VscVscode,
    color: "text-blue-500",
    top: "72%",
    left: "38%",
    animation: "animate-float-1",
  },
  {
    Icon: SiPython,
    color: "text-yellow-400",
    top: "75%",
    left: "72%",
    animation: "animate-float-3",
  },
];

function Hero() {
  return (
    <section className="relative min-h-screen bg-[#07090e] flex items-center justify-center px-8 pt-24 overflow-hidden">
      {/* Dark Ambient Liquid Glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-950/30 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        
        {/* Chap Tomon: Text Box */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="flex-1 max-w-lg p-8 rounded-3xl bg-slate-900/40 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        >
          <span
            data-aos="fade-down"
            data-aos-delay="200"
            className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-cyan-400 uppercase rounded-full bg-cyan-500/10 border border-cyan-500/20"
          >
            Available for Projects
          </span>

          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Alibek
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed font-normal"
          >
            A passionate web developer crafting clean, functional, and
            user-friendly digital experiences.
          </p>

          <div data-aos="fade-up" data-aos-delay="500">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700/80 text-white font-medium border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* O'ng Tomon: Liquid Glass Container with Floating Icons */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="flex-1 w-full max-w-md h-[400px] relative rounded-3xl bg-slate-900/30 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
        >
          {/* Ichki Shisha Yaltirashi */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-60 pointer-events-none" />

          {/* Liquid Floating Icons */}
          {floatingIcons.map(({ Icon, color, top, left, animation }, i) => (
            <div
              key={i}
              className={`absolute p-4 rounded-2xl bg-slate-800/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.6)] hover:border-cyan-500/50 hover:bg-slate-800/70 hover:scale-125 transition-all duration-300 cursor-pointer ${color} ${animation}`}
              style={{ top, left }}
            >
              <Icon
                size={34}
                className="drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;