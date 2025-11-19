import { Briefcase, Code, User } from "lucide-react";
import CV from "../assets/cv.pdf";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100 animate-fade-in">
          À propos de <span className="text-blue-600 dark:text-blue-400">moi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texte / Description */}
          <div className="space-y-6 animate-fade-in-slide-up">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Développeur Web Fullstack & Créateur Tech
            </h3>

            <p className="text-gray-700 dark:text-gray-300">
              Jeune passionné de développement web, je conçois des applications performantes, accessibles et réactives grâce aux technologies modernes.
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              Je m’investis dans la création de solutions élégantes à des problèmes complexes et continue d’explorer de nouvelles technologies pour rester à la pointe du web en constante évolution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-2 rounded-full bg-blue-600 text-white dark:text-gray-100 font-medium hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors duration-300 text-center"
              >
                Me contacter
              </a>

              <a
                href={CV}
                download={"CV"}
                className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 dark:hover:bg-blue-400/20 transition-colors duration-300 text-center"
              >
                Télécharger CV
              </a>
            </div>
          </div>

          {/* Cartes / Compétences */}
          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-slide-up delay-100 bg-gray-100 dark:bg-gray-800">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                  <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Développement Web</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Création de sites et applications web réactives avec des frameworks modernes.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-slide-up delay-200 bg-gray-100 dark:bg-gray-800">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                  <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">UI/UX Design</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Conception d'interfaces intuitives et expériences utilisateur fluides.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-slide-up delay-300 bg-gray-100 dark:bg-gray-800">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                  <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Gestion de projet</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Pilotage de projets de la conception à la livraison en suivant les méthodes agiles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
