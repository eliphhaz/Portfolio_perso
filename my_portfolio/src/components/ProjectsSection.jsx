import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "Une belle landing page utilisant React et Tailwind.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Orbit Analytics Dashboard",
    description:
      "Tableau de bord interactif avec visualisation de données et filtrage.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Plateforme E-commerce",
    description:
      "Plateforme e-commerce complète avec authentification et paiement.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100 animate-fade-in">
          Projets <span className="text-blue-600 dark:text-blue-400">phares</span>
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-delay-1">
          Voici quelques-uns de mes projets récents. Chaque projet a été conçu avec soin, en accordant une attention particulière aux détails, à la performance et à l’expérience utilisateur.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md dark:shadow-gray-700 hover:shadow-lg dark:hover:shadow-gray-600 transition-shadow duration-300 animate-fade-in-slide-up"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-gray-700/80 dark:text-gray-300/80 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-gray-700/80 dark:text-gray-300/80 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300"
            target="_blank"
            href="https://github.com/eliphhaz"
          >
            Voir mon GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
