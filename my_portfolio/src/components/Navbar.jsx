import { Menu, X } from "lucide-react";
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
  const [activeSection, setActiveSection] = useState("#hero");

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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = navItems.map((item) => document.querySelector(item.href));
      const scrollY = window.scrollY + 80;
      sections.forEach((section, idx) => {
        if (section && scrollY >= section.offsetTop) {
          setActiveSection(navItems[idx].href);
        }
      });
    };
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

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl shadow-lg border-b border-white/20 dark:border-white/5 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6">

        {/* LOGO */}
        <button
          onClick={() => scrollToSection("#hero")}
          className="text-2xl font-bold text-blue-700 dark:text-blue-300"
        >
          Elip_folio.
        </button>

        {/* MENU DESKTOP — pill centré */}
        <div className="hidden md:flex items-center gap-1 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-2 py-1.5 border border-gray-200 dark:border-gray-700">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSection(item.href)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
                activeSection === item.href
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-gray-700"
              )}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* CTA DESKTOP */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:contact@eliphhaz.dev"
            className="px-4 py-2 text-sm font-medium rounded-full border border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-300"
          >
            Me contacter
          </a>
        </div>

        {/* MENU MOBILE */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          {/* DROPDOWN MOBILE */}
          <div
            className={cn(
              "absolute top-full right-4 mt-2 w-52 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-2 transition-all duration-300 origin-top-right",
              isMenuOpen
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-95 pointer-events-none"
            )}
          >
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  scrollToSection(item.href);
                  setIsMenuOpen(false);
                }}
                className={cn(
                  "w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                  activeSection === item.href
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

      </div>
    </nav>
  );
};
