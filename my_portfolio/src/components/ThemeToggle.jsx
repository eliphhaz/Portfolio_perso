import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialisation du thème au chargement
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

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const nextMode = !prev;
      document.documentElement.classList.toggle("dark", nextMode);
      localStorage.setItem("theme", nextMode ? "dark" : "light");
      return nextMode;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed bottom-5 right-5 z-50 p-3 rounded-full shadow-md transition-colors duration-300",
        "bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700",
        "flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500",
        "max-sm:hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-400 transition-colors duration-300" />
      ) : (
        <Moon className="h-6 w-6 text-gray-800 dark:text-gray-200 transition-colors duration-300" />
      )}
    </button>
  );
};
