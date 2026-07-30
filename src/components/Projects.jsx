import { useState } from "react";
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
    shortDescription: "Yangi loyiha ustida ishlanmoqda.",
    description: "",
    tech: [],
    image: null,
    link: null,
  },
  {
    title: "Tez orada",
    shortDescription: "Yangi loyiha ustida ishlanmoqda.",
    description: "",
    tech: [],
    image: null,
    link: null,
  },
];

function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="min-h-screen px-6 md:px-20 py-24">
      <div className="max-w-5xl mx-auto">
        <p
          data-aos="fade-down"
          className="text-blue-500 dark:text-blue-400 font-mono mb-2"
        >
          Loyihalarim
        </p>
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white"
        >
          Projects
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const isEmpty = !project.image;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={() => !isEmpty && setSelected(project)}
                className={`bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden transition group ${
                  isEmpty
                    ? "opacity-50 cursor-default"
                    : "cursor-pointer hover:border-blue-500 dark:hover:border-blue-500 hover:-translate-y-1"
                }`}
              >
                <div className="h-32 bg-gray-200 dark:bg-gray-800 overflow-hidden flex items-center justify-center">
                  {isEmpty ? (
                    <span className="text-gray-400 dark:text-gray-600 text-sm">
                      Tez orada
                    </span>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  )}
                </div>

                <div className="p-4">
                  <h3 className="text-base font-bold mb-1 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden"
          >
            <div className="h-56 bg-gray-200 dark:bg-gray-800">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selected.title}
                </h3>
                <button
                  onClick={() => setSelected(null)}
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white text-2xl leading-none transition"
                  aria-label="Yopish"
                >
                  &times;
                </button>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                {selected.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selected.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-500/10 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition"
              >
                Saytga o'tish →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
