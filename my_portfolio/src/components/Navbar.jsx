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

  // Initialisation du thème
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
      localStorage.setItem("theme", prefersDark ? "dark" : "light");
    }
  }, []);

  // Détection du scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu quand l'utilisateur scroll
  useEffect(() => {
    if (!isMenuOpen) return;
    const closeOnScroll = () => setIsMenuOpen(false);
    window.addEventListener("scroll", closeOnScroll);
    return () => window.removeEventListener("scroll", closeOnScroll);
  }, [isMenuOpen]);

  // Empêcher le scroll du body quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  // Scroll fluide
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  // Toggle thème
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const nextMode = !prev;
      document.documentElement.classList.toggle("dark", nextMode);
      localStorage.setItem("theme", nextMode ? "dark" : "light");
      return nextMode;
    });
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 shadow-md backdrop-blur-md py-3"
          : "bg-transparent dark:bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 relative">

        {/* LOGO */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#hero");
          }}
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          <span className="text-blue-700 dark:text-blue-300">Elip_folio.</span>
        </a>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex flex-1 justify-end items-center space-x-6">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSection(item.href)}
              className="relative text-gray-700/90 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300
                 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-600 dark:after:bg-blue-400
                 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </button>
          ))}

          {/* TOGGLE THEME DESKTOP */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full shadow-md bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
            )}
          </button>
        </div>

        {/* BOUTON MENU MOBILE */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-gray-700 dark:text-gray-300 p-2"
          aria-label="Ouvrir le menu"
        >
          <Menu size={28} />
        </button>

        {/* OVERLAY MOBILE */}
        <div
          className={cn(
            "fixed inset-0 z-40 md:hidden bg-white dark:bg-gray-900 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-300",
            isMenuOpen
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 translate-x-full pointer-events-none"
          )}
        >
          {/* BOUTON CROIX */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-gray-700 dark:text-gray-300 p-2"
            aria-label="Fermer le menu"
          >
            <X size={32} />
          </button>

          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                scrollToSection(item.href);
                setIsMenuOpen(false);
              }}
              className="text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 my-4 font-medium"
            >
              {item.name}
            </button>
          ))}

          {/* TOGGLE THEME MOBILE */}
          <button
            onClick={toggleTheme}
            className="absolute bottom-8 right-6 p-3 rounded-full shadow-md bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            {isDarkMode ? (
              <Sun className="h-6 w-6 text-yellow-400" />
            ) : (
              <Moon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
