import React from "react";
import { FaCss3Alt } from "react-icons/fa"; // CSS3 uchun FontAwesome ikonkasini import qilamiz
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGithub,
  SiSupabase,
  SiVercel,
  SiClerk,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    level: 90,
    category: "Frontend",
    Icon: SiHtml5,
    color: "text-orange-500",
  },
  {
    name: "CSS3",
    level: 85,
    category: "Frontend",
    Icon: FaCss3Alt,
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    level: 80,
    category: "Language",
    Icon: SiJavascript,
    color: "text-yellow-400",
  },
  {
    name: "React",
    level: 75,
    category: "Frontend",
    Icon: SiReact,
    color: "text-cyan-400",
  },
  {
    name: "Tailwind CSS",
    level: 80,
    category: "Frontend",
    Icon: SiTailwindcss,
    color: "text-sky-400",
  },
  {
    name: "Git & GitHub",
    level: 70,
    category: "DevOps & Tools",
    Icon: SiGithub,
    color: "text-purple-400",
  },
  {
    name: "Supabase (SQL)",
    level: 60,
    category: "Database & Backend",
    Icon: SiSupabase,
    color: "text-emerald-400",
  },
  {
    name: "Clerk",
    level: 60,
    category: "Authentication",
    Icon: SiClerk,
    color: "text-indigo-400",
  },
  {
    name: "Vercel",
    level: 70,
    category: "Deployment",
    Icon: SiVercel,
    color: "text-slate-100",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-[#07090e] flex flex-col justify-center px-6 md:px-20 py-24 overflow-hidden"
    >
      {/* Dark Ambient Liquid Glows (Fon neon yog'dulari) */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-900/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-950/20 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full z-10">
        {/* Header Section */}
        <div className="mb-12">
          <span
            data-aos="fade-down"
            className="inline-block px-4 py-1.5 mb-3 text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase rounded-full bg-cyan-500/10 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
            Ko'nikmalarim
          </span>
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
        </div>

        {/* Liquid Glass Cards Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.Icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 60}
                className="group relative p-6 rounded-3xl bg-slate-900/40 backdrop-blur-2xl border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:border-cyan-500/40 hover:bg-slate-800/50 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] transition-all duration-300 overflow-hidden flex flex-col justify-between gap-6"
              >
                {/* Shisha usti yaltirashi (Glass Gloss) */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-30 group-hover:opacity-70 transition-opacity pointer-events-none" />

                {/* Card Top: Icon & Category Badge */}
                <div className="flex justify-between items-start relative z-10">
                  <div
                    className={`p-3.5 rounded-2xl bg-slate-800/60 backdrop-blur-md border border-white/10 ${skill.color} group-hover:scale-110 transition-transform duration-300 shadow-md`}
                  >
                    <IconComponent
                      size={30}
                      className="drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                    />
                  </div>

                  {/* Soha / Category Pill */}
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide text-slate-300 bg-white/5 border border-white/10 backdrop-blur-md">
                    {skill.category}
                  </span>
                </div>

                {/* Card Body: Name & Percentage */}
                <div className="relative z-10">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="font-mono text-cyan-400 font-extrabold text-base px-2 py-0.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Liquid Progress Bar */}
                  <div className="w-full h-2.5 bg-slate-950/80 rounded-full p-0.5 overflow-hidden border border-white/5 shadow-inner mt-3">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(6,182,212,0.5)] group-hover:brightness-125"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
