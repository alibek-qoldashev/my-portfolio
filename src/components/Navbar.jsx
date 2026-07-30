import { Link, useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
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
    <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md z-50 transition-colors">
      <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
        Alibek
      </Link>

      <div className="flex items-center gap-8">
        <ul className="hidden md:flex gap-8 text-gray-600 dark:text-gray-300">
          <li>
            <a
              href="#hero"
              onClick={scrollToSection("hero")}
              className="hover:text-gray-900 dark:hover:text-white transition cursor-pointer"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={scrollToSection("about")}
              className="hover:text-gray-900 dark:hover:text-white transition cursor-pointer"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={scrollToSection("skills")}
              className="hover:text-gray-900 dark:hover:text-white transition cursor-pointer"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={scrollToSection("projects")}
              className="hover:text-gray-900 dark:hover:text-white transition cursor-pointer"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={scrollToSection("contact")}
              className="hover:text-gray-900 dark:hover:text-white transition cursor-pointer"
            >
              Contact
            </a>
          </li>
        </ul>

        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
