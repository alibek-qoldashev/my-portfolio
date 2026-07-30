import { useState } from "react";
import { X, ExternalLink, Sparkles, Clock, Layers } from "lucide-react";
import quantum_img from "../assets/img/quantum-img.png";

const projects = [
  {
    title: "Quantum AI",
    shortDescription:
      "AI chat platformasi — streaming javoblar va 3 xil model.",
    description:
      "Zamonaviy AI chat platformasi — real-time streaming javoblar, uch xil model (Feng — tez, Ling — standart, Long — kuchli mantiq), Google orqali kirish (Clerk Auth), kod bloklarida syntax highlighting va nusxa olish tugmasi, matematik formulalar uchun KaTeX render. Dasturchilar, talabalar va aniq fanlar vakillari uchun mo'ljallangan.",
    tech: ["React", "Vite", "Clerk Auth", "KaTeX"],
    image: quantum_img,
    link: "#",
  },
  {
    title: "Tez orada",
    shortDescription: "Yangi loyiha ustida ishlanmoqda...",
    description: "",
    tech: [],
    image: null,
    link: null,
  },
  {
    title: "Tez orada",
    shortDescription: "Yangi loyiha ustida ishlanmoqda...",
    description: "",
    tech: [],
    image: null,
    link: null,
  },
];

function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#07090e] flex flex-col justify-center px-6 md:px-20 py-24 overflow-hidden"
    >
      {/* Dark Ambient Liquid Glows (Fon neon yog'dulari) */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-900/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-indigo-950/25 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full z-10">
        {/* Header Section */}
        <div className="mb-12">
          <span
            data-aos="fade-down"
            className="inline-block px-4 py-1.5 mb-3 text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase rounded-full bg-cyan-500/10 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
            Loyihalarim
          </span>
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const isEmpty = !project.image;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={() => !isEmpty && setSelected(project)}
                className={`group relative rounded-3xl bg-slate-900/40 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.7)] overflow-hidden transition-all duration-300 ${
                  isEmpty
                    ? "opacity-50 border-dashed border-white/10 cursor-default"
                    : "cursor-pointer hover:border-cyan-500/40 hover:bg-slate-800/50 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)]"
                }`}
              >
                {/* Shisha Ustki Yaltirashi */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-30 group-hover:opacity-70 transition-opacity pointer-events-none z-10" />

                {/* Card Image / Placeholder Header */}
                <div className="h-48 bg-slate-950/60 relative overflow-hidden flex items-center justify-center border-b border-white/5">
                  {isEmpty ? (
                    <div className="flex flex-col items-center gap-2 text-slate-500 font-mono text-sm">
                      <Clock
                        size={28}
                        className="animate-pulse text-slate-600"
                      />
                      <span>Tez orada</span>
                    </div>
                  ) : (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                    </>
                  )}
                </div>

                {/* Card Content Body */}
                <div className="p-6 relative z-20 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                        {project.title}
                        {!isEmpty && (
                          <Sparkles size={16} className="text-cyan-400" />
                        )}
                      </h3>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 font-light mb-4">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Tech Tags preview */}
                  {!isEmpty && project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-full text-cyan-300 bg-cyan-500/10 border border-cyan-500/20"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full text-slate-400 bg-white/5 border border-white/10">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Liquid Glass Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelected(null)}
        >
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            onClick={(e) => e.stopPropagation()}
            className="relative bg-slate-900/90 backdrop-blur-2xl border border-white/15 rounded-3xl max-w-xl w-full shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Modal Image Header */}
            <div className="relative h-64 bg-slate-950 overflow-hidden">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/20 text-slate-300 hover:text-white hover:bg-slate-800 transition flex items-center justify-center cursor-pointer shadow-lg"
                aria-label="Yopish"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-2xl font-extrabold text-white flex items-center gap-2">
                  {selected.title}
                  <Sparkles size={20} className="text-cyan-400" />
                </h3>
              </div>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-light">
                {selected.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="mb-8">
                <p className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Layers size={14} className="text-cyan-400" /> Texnologiyalar:
                </p>
                <div className="flex flex-wrap gap-2">
                  {selected.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 px-3 py-1 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.1)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-[0_0_25px_rgba(6,182,212,0.3)] border border-white/20 hover:scale-[1.01] active:scale-95 transition-all duration-300"
              >
                <span>Saytga o'tish</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
