import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { useRef, useEffect } from "react";
import { useLang } from "../context/LanguageContext";
import portfolioImage from "../assets/portfolio.png";
import Portfolio2Image from "../assets/portfolio2.png";
import YobaloImage    from "../assets/Yobalo.png";
import SerenaImage    from "../assets/serena.png";
import GarageImage    from "../assets/garage.png";
import CoumbassaImage from "../assets/coumbassa.png";

const projects = [
  { id: 1, title: "Portfolio",             description: "Portfolio personnel moderne et réactif.",                                                                                                                            image: portfolioImage,  tags: ["React", "TailwindCSS"],    demoUrl: "https://porfolioperso.vercel.app/",   githubUrl: "https://github.com/eliphhaz/Portfolio_perso" },
  { id: 2, title: "Portfolio JFAE",        description: "Portfolio personnel moderne et réactif.",                                                                                                                            image: Portfolio2Image, tags: ["React", "TailwindCSS"],    demoUrl: "https://jfaeportfolio.vercel.app/",   githubUrl: "#" },
  { id: 3, title: "Site Yobalo",           description: "Yobalo est né d'une idée simple : la livraison de proximité doit être un service de confiance, chaleureux et solidaire.",                                           image: YobaloImage,     tags: ["WordPress"],              demoUrl: "https://yobalo.com/",                 githubUrl: "#" },
  { id: 3, title: "SERENA+",               description: "Site vitrine haut de gamme pour SERENA+, service d'accompagnement à domicile des personnes dépendantes à Abidjan.",                                                 image: SerenaImage,    tags: ["Nuxt 3", "Vue 3", "CSS"], demoUrl: "https://serena.cigal.africa",          githubUrl: "#" },
  { id: 4, title: "Garage Auto Leader CI", description: "Site vitrine pour un centre d'expertise multimarque basé en Côte d'Ivoire, avec gestion de devis et solutions pro.",                                                image: GarageImage,    tags: ["HTML", "CSS"],            demoUrl: "https://gal.africa",                  githubUrl: "#" },
  { id: 5, title: "Coumbassa & Sanden",    description: "Site corporate pour Coumbassa & Sanden Group, partenaire de confiance pour le conseil, la finance et la technologie.",                                              image: CoumbassaImage, tags: ["Nuxt.js"],                demoUrl: "https://coumbassa-sanden.com",         githubUrl: "#" },
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("revealed"); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="reveal-up card-hover group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md dark:shadow-gray-700"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="h-48 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* overlay au hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-black transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 text-xs font-medium border rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>

        <div className="flex space-x-3">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
            className="icon-hover text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            <ExternalLink size={20} />
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="icon-hover text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            <Github size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  const { t } = useLang();
  const p = t.projects;
  const titleRef = useReveal();
  const subRef   = useReveal();
  const btnRef   = useReveal();

  return (
    <section id="projects" className="pt-12 py-24 pb-12 px-4 relative bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto max-w-5xl">

        <h2 ref={titleRef} className="reveal-up text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
          {p.title} <span className="text-blue-600 dark:text-blue-400">{p.title_highlight}</span>
        </h2>

        <p ref={subRef} className="reveal-fade text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          {p.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div ref={btnRef} className="reveal-up text-center mt-12">
          <a
            className="btn-hover inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-500/30"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/eliphhaz"
          >
            {p.cta} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
