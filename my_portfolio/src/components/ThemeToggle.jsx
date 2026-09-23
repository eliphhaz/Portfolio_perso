import { useEffect, useState } from "react";

const themes = [
  {
    key: "light",
    label: "Clair",
    icon: "fa-sun",
    bg: "bg-white",
    iconColor: "text-yellow-500",
    ring: "ring-yellow-300",
  },
  {
    key: "green",
    label: "Vert",
    icon: "fa-leaf",
    bg: "bg-[#B2D69C]",
    iconColor: "text-green-800",
    ring: "ring-green-400",
  },
  {
    key: "dark",
    label: "Sombre",
    icon: "fa-moon",
    bg: "bg-gray-900",
    iconColor: "text-blue-300",
    ring: "ring-blue-500",
  },
];

export const ThemeToggle = () => {
  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    // Si jamais visité → forcer light (blanc)
    if (!stored) {
      localStorage.setItem("theme", "light");
      // eslint-disable-next-line react-hooks/immutability
      applyTheme("light");
      setThemeIndex(0);
      return;
    }
    const idx = themes.findIndex((t) => t.key === stored);
    const initial = idx >= 0 ? idx : 0;
    setThemeIndex(initial);
    applyTheme(themes[initial].key);
  }, []);

  const applyTheme = (key) => {
    const root = document.documentElement;
    root.classList.remove("dark", "theme-green");
    if (key === "dark") root.classList.add("dark");
    if (key === "green") root.classList.add("theme-green");
    localStorage.setItem("theme", key);
  };

  const cycle = () => {
    setThemeIndex((prev) => {
      const next = (prev + 1) % themes.length;
      applyTheme(themes[next].key);
      return next;
    });
  };

  const current = themes[themeIndex];

  return (
    <button
      onClick={cycle}
      title={`Thème : ${current.label}`}
      className={`
        fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full shadow-lg
        flex items-center justify-center
        transition-all duration-300
        ring-2 ${current.ring} ${current.bg}
        hover:scale-110 focus:outline-none
        max-sm:hidden
      `}
    >
      <i className={`fa-solid ${current.icon} text-lg ${current.iconColor}`} />
    </button>
  );
};
