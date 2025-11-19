import { ArrowDown } from "lucide-react";
import PhotoHero from "../assets/eliphaz.jpeg"; // remplace par ta photo

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative z-20 min-h-screen flex items-center px-4 bg-gradient-to-b from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">

        {/* Colonne gauche : Photo */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-center">
          <div className="relative group">
            {/* Cadre ovale allongé */}
            <div className="absolute inset-0 w-80 h-96 md:w-96 md:h-[28rem] rounded-[50%/40%] border-4 border-white-600 dark:border-white-400
                    transition-transform duration-500 transform scale-95 group-hover:scale-105 animate-fade-in-slide-up">
            </div>

            {/* Image */}
            <img
              src={PhotoHero}
              alt="Eliphaz Guetin"
              className="w-72 h-80 md:w-80 md:h-96 object-cover rounded-[40%/40%] shadow-lg
                 transition-transform duration-500 group-hover:scale-105 animate-fade-in-slide-up"
            />
          </div>
        </div>



        {/* Colonne droite : Texte */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-100 translate-y-4 animate-fade-in-slide-up">
              Salut, Je suis
            </span>
            <span className="text-blue-600 opacity-100 translate-y-4 animate-fade-in-slide-up-delay-1 ml-1">
              Eliphaz
            </span>
            <span className="ml-2 opacity-100 translate-y-4 animate-fade-in-slide-up-delay-2 text-purple-600">
              GUETIN
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0 opacity-100 animate-fade-in-delay-3">
            Je crée des applications web de bout en bout avec des technologies modernes.
            Des interfaces front-end élégantes aux systèmes back-end robustes, je développe
            des solutions à la fois fonctionnelles et intuitives.
          </p>

          <div className="pt-4 opacity-100 animate-fade-in-delay-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#projects");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium 
               hover:bg-blue-700 hover:scale-105 transform transition-all duration-300 ease-in-out
               shadow-lg hover:shadow-xl"
            >
              Voir mes projets
            </a>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-600 dark:text-gray-300 mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-blue-600 dark:text-blue-400" />
      </div>
    </section>
  );
};
