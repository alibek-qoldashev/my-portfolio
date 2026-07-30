import React from "react";

function About() {
  const stats = [
    { title: "1", desc: "Yillik frontend kursi", delay: "0" },
    { title: "5", desc: "Oylik internship", delay: "100" },
    { title: "HSK 2", desc: "Xitoy tili sertifikati", delay: "200" },
    { title: "EN", desc: "Ingliz tili (7 yoshdan)", delay: "300" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#07090e] flex flex-col justify-center px-6 md:px-20 py-24 overflow-hidden"
    >
      {/* Dark Ambient Liquid Glows (Fon neon yog'dulari) */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-cyan-900/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-950/20 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full z-10">
        {/* Header Section */}
        <div className="mb-10">
          <span
            data-aos="fade-down"
            className="inline-block px-4 py-1.5 mb-3 text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase rounded-full bg-cyan-500/10 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
            Men haqimda
          </span>
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Matn qismi (Dark Liquid Glass Card) */}
          <div
            data-aos="fade-right"
            className="p-8 rounded-3xl bg-slate-900/40 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col justify-center space-y-4 text-slate-300 leading-relaxed font-normal hover:border-white/20 transition-all duration-300"
          >
            {/* Ichki Shisha Yaltirashi */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-60 pointer-events-none" />

            <p className="relative z-10 text-base md:text-lg">
              Salom! Men{" "}
              <span className="text-white font-semibold">Alibek</span>,
              Toshkentda yashayman va frontend dasturlash bilan shug'ullanaman.
              Bolaligimdan kompyuter va texnologiyalarga qiziqib kelaman,
              hozirda esa cybersecurity va dasturlash yo'nalishida rivojlanishni
              maqsad qilganman.
            </p>
            <p className="relative z-10 text-base md:text-lg">
              1 yillik frontend dasturlash kursini tugatib sertifikat oldim,
              so'ngra 5 oylik amaliyot (internship) davomida real loyihalar
              ustida ishladim. Hozirda matematikani chuqurroq o'rganish ustida
              ishlayapman va kelajakda AQShda ta'lim olishni rejalashtiryapman.
            </p>
          </div>

          {/* Faktlar kartochkalari (Liquid Glass Grid) */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={item.delay}
                className="relative group p-6 rounded-3xl bg-slate-900/30 backdrop-blur-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:border-cyan-500/40 hover:bg-slate-800/50 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Gloss Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity pointer-events-none" />

                <p className="relative z-10 text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                  {item.title}
                </p>
                <p className="relative z-10 text-slate-400 text-sm mt-4 font-medium group-hover:text-slate-200 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
