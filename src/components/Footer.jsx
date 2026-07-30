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
    <footer className="border-t border-gray-200 dark:border-gray-800 px-6 md:px-20 py-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 dark:text-gray-500 text-sm">
          © {year} Alibek. Barcha huquqlar himoyalangan.
        </p>

        <div className="flex gap-6 text-gray-600 dark:text-gray-400 text-sm">
          <a
            href="#hero"
            onClick={scrollToSection("hero")}
            className="hover:text-gray-900 dark:hover:text-white transition cursor-pointer"
          >
            Home
          </a>
          <a
            href="#projects"
            onClick={scrollToSection("projects")}
            className="hover:text-gray-900 dark:hover:text-white transition cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={scrollToSection("contact")}
            className="hover:text-gray-900 dark:hover:text-white transition cursor-pointer"
          >
            Contact
          </a>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/alibek-qoldashev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/alibek-qo-ldoshev-915ab8372/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="https://t.me/ullugbekvc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
          >
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
