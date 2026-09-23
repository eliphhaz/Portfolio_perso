import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { useState, useEffect } from "react";
import { useLang } from "../context/LanguageContext";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const { t, lang, toggleLang } = useLang();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navItems = [
    { name: t.nav.home, href: "#hero" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const scrollY = window.scrollY + 80;
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section && scrollY >= section.offsetTop) setActiveSection(item.href);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems, t]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const close = () => setIsMenuOpen(false);
    window.addEventListener("scroll", close);
    return () => window.removeEventListener("scroll", close);
  }, [isMenuOpen]);

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500",
      isScrolled
        ? "bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl shadow-lg border-b border-white/20 dark:border-white/5 py-3"
        : "bg-transparent py-5"
    )}>
      <div className="container mx-auto flex items-center justify-between px-6">

        {/* LOGO */}
        <button onClick={() => scrollToSection("#hero")} className="text-2xl font-bold text-blue-700 dark:text-blue-300">
          Elip_folio.
        </button>

        {/* MENU DESKTOP */}
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

        {/* DROITE DESKTOP : lang + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Bouton langue */}
          <button
            onClick={toggleLang}
            className="px-3 py-1.5 text-sm font-semibold rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <a
            href="mailto:eliphaz.guetin@epitech.eu"
            className="px-4 py-2 text-sm font-medium rounded-full border border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-300"
          >
            {t.nav.cta}
          </a>
        </div>

        {/* MENU MOBILE */}
        <div className="md:hidden flex items-center gap-2">
          {/* Bouton langue mobile */}
          <button
            onClick={toggleLang}
            className="px-2.5 py-1 text-xs font-semibold rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          {/* DROPDOWN */}
          <div className={cn(
            "absolute top-full right-4 mt-2 w-52 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-2 transition-all duration-300 origin-top-right",
            isMenuOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
          )}>
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => { scrollToSection(item.href); setIsMenuOpen(false); }}
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
