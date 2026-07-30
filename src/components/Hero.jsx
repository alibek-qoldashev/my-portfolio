import { Link } from "react-router-dom";

function Hero() {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20"
    >
      <p
        data-aos="fade-down"
        className="text-blue-500 dark:text-blue-400 font-mono mb-4"
      >
        Salom, men
      </p>

      <h1
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
      >
        Qo'ldoshev Alibek
      </h1>

      <h2
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-2xl md:text-3xl text-gray-500 dark:text-gray-400 font-medium mb-6"
      >
        Frontend Developer
      </h2>

      <p
        data-aos="fade-up"
        data-aos-delay="300"
        className="max-w-xl text-gray-500 dark:text-gray-400 mb-10 leading-relaxed"
      >
        React va Tailwind CSS bilan zamonaviy, tez va chiroyli veb-saytlar
        yarataman...
      </p>

      <div data-aos="fade-up" data-aos-delay="400" className="flex gap-4">
        {" "}
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition text-white"
        >
          CV
        </a>
        <a
          href="#contact"
          onClick={scrollToContact}
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-gray-500 dark:hover:border-gray-400 text-gray-900 dark:text-white rounded-lg font-medium transition cursor-pointer"
        >
          Bog'lanish
        </a>
      </div>
    </section>
  );
}

export default Hero;
