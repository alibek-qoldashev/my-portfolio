function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-24"
    >
      <div className="max-w-4xl mx-auto w-full">
        <p
          data-aos="fade-down"
          className="text-blue-500 dark:text-blue-400 font-mono mb-2"
        >
          Men haqimda
        </p>
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white"
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Matn qismi */}
          <div
            data-aos="fade-right"
            className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-4"
          >
            <p>
              Salom! Men Alibek, Toshkentda yashayman va frontend dasturlash
              bilan shug'ullanaman. Bolaligimdan kompyuter va texnologiyalarga
              qiziqib kelaman, hozirda esa cybersecurity va dasturlash
              yo'nalishida rivojlanishni maqsad qilganman.
            </p>
            <p>
              1 yillik frontend dasturlash kursini tugatib sertifikat oldim,
              so'ngra 5 oylik amaliyot (internship) davomida real loyihalar
              ustida ishladim. Hozirda matematikani chuqurroq o'rganish ustida
              ishlayapman va kelajakda AQShda ta'lim olishni rejalashtiryapman.
            </p>
          </div>

          {/* Faktlar kartochkasi */}
          <div className="grid grid-cols-2 gap-4">
            <div
              data-aos="zoom-in"
              data-aos-delay="0"
              className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5"
            >
              <p className="text-2xl font-bold text-blue-500 dark:text-blue-400">
                1
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Yillik frontend kursi
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5"
            >
              <p className="text-2xl font-bold text-blue-500 dark:text-blue-400">
                5
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Oylik internship
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5"
            >
              <p className="text-2xl font-bold text-blue-500 dark:text-blue-400">
                HSK 2
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Xitoy tili sertifikati
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5"
            >
              <p className="text-2xl font-bold text-blue-500 dark:text-blue-400">
                EN
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Ingliz tili (7 yoshdan)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
