import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

const skills = [
  { name: "HTML/CSS",     level: 90, category: "frontend", icon: "fa-brands fa-html5",       iconColor: "text-orange-500" },
  { name: "JavaScript",  level: 90, category: "frontend", icon: "fa-brands fa-js",           iconColor: "text-yellow-400" },
  { name: "React",       level: 90, category: "frontend", icon: "fa-brands fa-react",        iconColor: "text-cyan-400" },
  { name: "React Native",level: 92, category: "frontend", icon: "fa-brands fa-react",        iconColor: "text-cyan-500" },
  { name: "TypeScript",  level: 85, category: "frontend", icon: "fa-brands fa-js",           iconColor: "text-blue-500" },
  { name: "Tailwind CSS",level: 80, category: "frontend", icon: "fa-brands fa-css3-alt",     iconColor: "text-teal-400" },
  { name: "Next.js",     level: 90, category: "frontend", icon: "fa-brands fa-node-js",      iconColor: "text-gray-800 dark:text-gray-100" },
  { name: "Python",      level: 80, category: "backend",  icon: "fa-brands fa-python",       iconColor: "text-blue-400" },
  { name: "Django",      level: 85, category: "backend",  icon: "fa-brands fa-python",       iconColor: "text-green-700" },
  { name: "Flask",       level: 90, category: "backend",  icon: "fa-solid fa-flask",         iconColor: "text-gray-600" },
  { name: "FastAPI",     level: 87, category: "backend",  icon: "fa-solid fa-bolt",          iconColor: "text-green-500" },
  { name: "Nest.js",     level: 80, category: "backend",  icon: "fa-brands fa-node-js",      iconColor: "text-red-500" },
  { name: "Node.js",     level: 90, category: "backend",  icon: "fa-brands fa-node-js",      iconColor: "text-green-600" },
  { name: "Express",     level: 85, category: "backend",  icon: "fa-brands fa-node-js",      iconColor: "text-gray-500" },
  { name: "Laravel",     level: 85, category: "backend",  icon: "fa-brands fa-laravel",      iconColor: "text-red-500" },
  { name: "MongoDB",     level: 90, category: "backend",  icon: "fa-solid fa-database",      iconColor: "text-green-500" },
  { name: "PostgreSQL",  level: 75, category: "backend",  icon: "fa-solid fa-database",      iconColor: "text-blue-600" },
  { name: "MySQL",       level: 90, category: "backend",  icon: "fa-solid fa-database",      iconColor: "text-orange-400" },
  { name: "Prisma",      level: 90, category: "backend",  icon: "fa-solid fa-layer-group",   iconColor: "text-indigo-500" },
  { name: "GraphQL",     level: 80, category: "backend",  icon: "fa-solid fa-circle-nodes",  iconColor: "text-pink-500" },
  { name: "Git/GitHub",  level: 90, category: "Outils",   icon: "fa-brands fa-github",       iconColor: "text-gray-800 dark:text-gray-100" },
  { name: "Docker",      level: 70, category: "Outils",   icon: "fa-brands fa-docker",       iconColor: "text-blue-500" },
  { name: "Figma",       level: 85, category: "Outils",   icon: "fa-brands fa-figma",        iconColor: "text-pink-400" },
  { name: "VS Code",     level: 95, category: "Outils",   icon: "fa-solid fa-code",          iconColor: "text-blue-500" },
];

const categories = ["complètes", "frontend", "backend", "Outils"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("complètes");
  const [visibleSkills, setVisibleSkills] = useState([]);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "complètes" || skill.category === activeCategory
  );

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
      className="py-24 pb-12 px-4 relative bg-gray-100/30 dark:bg-gray-900/30 transition-all duration-500"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mes <span className="text-blue-600">Compétences</span>
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
                "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105",
                visibleSkills.includes(skill.name)
                  ? "opacity-100 animate-fade-in-slide-up"
                  : "opacity-0 translate-y-8"
              )}
              style={{ animationDelay: `${key * 100}ms` }}
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
