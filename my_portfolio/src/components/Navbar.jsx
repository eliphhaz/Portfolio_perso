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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour scroll fluide
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault(); // Empêche le jump instantané
            const target = document.querySelector("#hero");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center"
        >
          <span className="text-blue-700 dark:text-blue-300 mr-1">Elip_folio.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-end space-x-8">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSection(item.href)}
              className="relative text-gray-700/90 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300
                 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-600 dark:after:bg-blue-400
                 after:transition-all after:duration-300 hover:after:w-full hover:scale-105"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-300 p-2 z-50"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 z-40 md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 transform",
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
              className="text-2xl text-gray-700/90 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 my-4"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
