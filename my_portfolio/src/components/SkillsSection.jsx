import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

const skills = [
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "React-native", level: 92, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Python", level: 80, category: "backend" },
  { name: "Django", level: 85, category: "backend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  { name: "Next.js", level: 90, category: "frontend" },
  { name: "Nest.js", level: 80, category: "backend" },
  { name: "Node.js", level: 90, category: "backend" },
  { name: "Express", level: 85, category: "backend" },
  { name: "Laravel", level: 85, category: "backend" },
  { name: "MongoDB", level: 90, category: "backend" },
  { name: "PostgreSQL", level: 75, category: "backend" },
  { name: "MySQL", level: 90, category: "backend" },
  { name: "Prisma", level: 90, category: "backend" },
  { name: "GraphQL", level: 80, category: "backend" },
  { name: "Git/GitHub", level: 90, category: "Outils" },
  { name: "Docker", level: 70, category: "Outils" },
  { name: "Figma", level: 85, category: "Outils" },
  { name: "VS Code", level: 95, category: "Outils" },
];

const categories = ["complètes", "frontend", "backend", "Outils"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("complètes");
  const [visibleSkills, setVisibleSkills] = useState([]);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "complètes" || skill.category === activeCategory
  );

  // Animation d'apparition progressive
  useEffect(() => {
    setVisibleSkills([]);
    const timeout = setTimeout(() => {
      setVisibleSkills(filteredSkills.map((skill) => skill.name));
    }, 100);
    return () => clearTimeout(timeout);
  }, [activeCategory]);

  // Animation au scroll vers la section
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
    handleScroll(); // au chargement
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-gray-100/30 dark:bg-gray-900/30 transition-all duration-500"
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
                // Scroll fluide vers la section
                const section = document.querySelector("#skills");
                section?.scrollIntoView({ behavior: "smooth", block: "start" });
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
              <div className="text-left mb-4">
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
