import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { useLang } from "../context/LanguageContext";

const allSkills = [
  { name: "HTML/CSS",     level: 90, category: "frontend", icon: "fa-brands fa-html5",       iconColor: "text-orange-500",  glow: "rgba(249,115,22,0.35)" },
  { name: "JavaScript",  level: 90, category: "frontend", icon: "fa-brands fa-js",           iconColor: "text-yellow-400",  glow: "rgba(250,204,21,0.35)" },
  { name: "React",       level: 90, category: "frontend", icon: "fa-brands fa-react",        iconColor: "text-cyan-400",    glow: "rgba(34,211,238,0.35)" },
  { name: "React Native",level: 92, category: "frontend", icon: "fa-brands fa-react",        iconColor: "text-cyan-500",    glow: "rgba(6,182,212,0.35)"  },
  { name: "TypeScript",  level: 85, category: "frontend", icon: "fa-brands fa-js",           iconColor: "text-blue-500",    glow: "rgba(59,130,246,0.35)" },
  { name: "Tailwind CSS",level: 80, category: "frontend", icon: "fa-brands fa-css3-alt",     iconColor: "text-teal-400",    glow: "rgba(45,212,191,0.35)" },
  { name: "Next.js",     level: 90, category: "frontend", icon: "fa-brands fa-node-js",      iconColor: "text-gray-700",    glow: "rgba(107,114,128,0.3)" },
  { name: "Python",      level: 80, category: "backend",  icon: "fa-brands fa-python",       iconColor: "text-blue-400",    glow: "rgba(96,165,250,0.35)" },
  { name: "Django",      level: 85, category: "backend",  icon: "fa-brands fa-python",       iconColor: "text-green-700",   glow: "rgba(21,128,61,0.35)"  },
  { name: "Flask",       level: 90, category: "backend",  icon: "fa-solid fa-flask",         iconColor: "text-gray-600",    glow: "rgba(75,85,99,0.3)"    },
  { name: "FastAPI",     level: 87, category: "backend",  icon: "fa-solid fa-bolt",          iconColor: "text-green-500",   glow: "rgba(34,197,94,0.35)"  },
  { name: "Nest.js",     level: 80, category: "backend",  icon: "fa-brands fa-node-js",      iconColor: "text-red-500",     glow: "rgba(239,68,68,0.35)"  },
  { name: "Node.js",     level: 90, category: "backend",  icon: "fa-brands fa-node-js",      iconColor: "text-green-600",   glow: "rgba(22,163,74,0.35)"  },
  { name: "Express",     level: 85, category: "backend",  icon: "fa-brands fa-node-js",      iconColor: "text-gray-500",    glow: "rgba(107,114,128,0.3)" },
  { name: "Laravel",     level: 85, category: "backend",  icon: "fa-brands fa-laravel",      iconColor: "text-red-500",     glow: "rgba(239,68,68,0.35)"  },
  { name: "MongoDB",     level: 90, category: "backend",  icon: "fa-solid fa-database",      iconColor: "text-green-500",   glow: "rgba(34,197,94,0.35)"  },
  { name: "PostgreSQL",  level: 75, category: "backend",  icon: "fa-solid fa-database",      iconColor: "text-blue-600",    glow: "rgba(37,99,235,0.35)"  },
  { name: "MySQL",       level: 90, category: "backend",  icon: "fa-solid fa-database",      iconColor: "text-orange-400",  glow: "rgba(251,146,60,0.35)" },
  { name: "Prisma",      level: 90, category: "backend",  icon: "fa-solid fa-layer-group",   iconColor: "text-indigo-500",  glow: "rgba(99,102,241,0.35)" },
  { name: "GraphQL",     level: 80, category: "backend",  icon: "fa-solid fa-circle-nodes",  iconColor: "text-pink-500",    glow: "rgba(236,72,153,0.35)" },
  { name: "Git/GitHub",  level: 90, category: "Outils",   icon: "fa-brands fa-github",       iconColor: "text-gray-700",    glow: "rgba(107,114,128,0.3)" },
  { name: "Docker",      level: 70, category: "Outils",   icon: "fa-brands fa-docker",       iconColor: "text-blue-500",    glow: "rgba(59,130,246,0.35)" },
  { name: "Figma",       level: 85, category: "Outils",   icon: "fa-brands fa-figma",        iconColor: "text-pink-400",    glow: "rgba(244,114,182,0.35)"},
  { name: "VS Code",     level: 95, category: "Outils",   icon: "fa-solid fa-code",          iconColor: "text-blue-500",    glow: "rgba(59,130,246,0.35)" },
];

export const SkillsSection = () => {
  const { t, lang } = useLang();
  const s = t.skills;
  const categories = s.categories;

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // Réinitialise quand la langue change
  useEffect(() => {
    setActiveCategory(categories[0]);
  }, [lang]);
  const [visibleSkills, setVisibleSkills] = useState([]);

  // Index 0 = "tout", les autres mappent vers les catégories des skills
  // FR: ["complètes","frontend","backend","Outils"] → skill.category: frontend/backend/Outils
  // EN: ["all","frontend","backend","Tools"] → skill.category: frontend/backend/Outils
  const categoryKeys = ["frontend", "backend", "Outils"];

  const filteredSkills = allSkills.filter((skill) => {
    if (activeCategory === categories[0]) return true; // "tout" / "all"
    const idx = categories.indexOf(activeCategory);
    return skill.category === categoryKeys[idx - 1];
  });

  useEffect(() => {
    setVisibleSkills([]);
    const timeout = setTimeout(() => {
      setVisibleSkills(filteredSkills.map((skill) => skill.name));
    }, 100);
    return () => clearTimeout(timeout);
  }, [activeCategory]);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector("#skills");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        section.classList.add("animate-fade-in-slide-up");
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="skills"
      className="pt-12 py-24 pb-12 px-4 relative bg-gray-100/30 dark:bg-gray-900/30 transition-all duration-500"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {s.title} <span className="text-blue-600">{s.title_highlight}</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => {
                setActiveCategory(category);
                document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize hover:scale-105",
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className={cn(
                "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-2 hover:scale-105 group",
                visibleSkills.includes(skill.name)
                  ? "opacity-100 animate-fade-in-slide-up"
                  : "opacity-0 translate-y-8"
              )}
              style={{
                animationDelay: `${key * 100}ms`,
                "--glow": skill.glow,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 0 0 2px ${skill.glow}, 0 8px 30px ${skill.glow}`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <i className={`${skill.icon} text-2xl ${skill.iconColor}`} />
                <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                  {skill.name}
                </h3>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full origin-left transition-all duration-1000 ease-in-out"
                  style={{
                    width: visibleSkills.includes(skill.name) ? skill.level + "%" : "0%",
                  }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-gray-600 dark:text-gray-300">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
