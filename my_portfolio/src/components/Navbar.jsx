import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "../lib/utils";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Accueil", href: "#hero" },
  { name: "À propos", href: "#about" },
  { name: "Compétences", href: "#skills" },
  { name: "Mes Projets", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefers);
      document.documentElement.classList.toggle("dark", prefers);
      localStorage.setItem("theme", prefers ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const close = () => setIsMenuOpen(false);
    window.addEventListener("scroll", close);
    return () => window.removeEventListener("scroll", close);
  }, [isMenuOpen]);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 shadow-md backdrop-blur-md py-3"
            : "bg-transparent dark:bg-transparent py-5"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* LOGO */}
          <button
            onClick={() => scrollToSection("#hero")}
            className="text-2xl font-bold text-blue-600 dark:text-blue-400"
          >
            <span className="text-blue-700 dark:text-blue-300">Elip_folio.</span>
          </button>

          {/* MENU — DESKTOP */}
          <div className="hidden md:flex flex-1 justify-end space-x-8">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item.href)}
                className="
                  text-gray-700 dark:text-gray-300 
                  hover:text-blue-600 dark:hover:text-blue-400 
                  transition relative
                  after:content-[''] after:block after:w-0 after:h-[2px]
                  after:bg-blue-600 dark:after:bg-blue-400
                  after:transition-all hover:after:w-full
                "
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* MENU MOBILE — BOUTON ARRONDI */}
          <div className="md:hidden relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "inline-flex items-center justify-center font-medium text-sm px-5 py-2.5 shadow-md border border-transparent transition-colors rounded-full",
                isDarkMode
                  ? "text-white bg-gray-800 hover:bg-gray-700"
                  : "text-gray-900 bg-gradient-to-r from-green-300 to-blue-300 hover:from-green-200 hover:to-blue-200"
              )}
            >
              Menu
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>

            {/* DROPDOWN MOBILE */}
            <div
              className={cn(
                "absolute right-0 mt-2 w-44 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg p-2 transition-all duration-300",
                isMenuOpen
                  ? "opacity-100 pointer-events-auto translate-y-0"
                  : "opacity-0 pointer-events-none -translate-y-2"
              )}
            >
              {navItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    scrollToSection(item.href);
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* TOGGLE THEME FIXE — TEXTE VISIBLE EN MODE CLAIR */}
      <button
        onClick={toggleTheme}
        className={cn(
          "fixed bottom-8 right-6 p-3 rounded-full shadow-lg transition duration-300 z-50",
          isDarkMode
            ? "bg-gray-900 hover:bg-gray-800"
            : "bg-gradient-to-r from-green-400 to-blue-300 hover:from-green-300 hover:to-blue-200"
        )}
      >
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-400" />
        ) : (
          <Moon className="h-6 w-6 text-gray-900" /> // FIX : reste visible sur fond clair
        )}
      </button>
    </>
  );
};
