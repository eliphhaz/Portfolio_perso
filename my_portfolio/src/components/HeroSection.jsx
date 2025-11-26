import { ArrowDown } from "lucide-react";
import PhotoHero from "../assets/Eliphaz.jpeg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative z-20 min-h-screen flex flex-col md:flex-row items-center px-4 pt-28 md:pt-0 bg-gradient-to-b from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">

        {/* Colonne gauche : Photo */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 w-64 h-72 md:w-96 md:h-[28rem] rounded-[50%/40%]  dark:border-gray-300 transition-transform duration-500 scale-95 group-hover:scale-105" />
            <img
              src={PhotoHero}
              alt="Eliphaz Guetin"
              className="w-60 h-72 md:w-80 md:h-96 object-cover rounded-[40%/40%] shadow-lg transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Colonne droite : Texte */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="block animate-fade-in-slide-up">Salut, Je suis</span>
            <span className="text-blue-600 animate-fade-in-slide-up-delay-1 ml-1">Eliphaz</span>
            <span className="ml-2 text-purple-600 animate-fade-in-slide-up-delay-2">GUETIN</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0 animate-fade-in-delay-3">
            Je crée des applications web de bout en bout avec des technologies modernes.
          </p>

          <div className="pt-4 animate-fade-in-delay-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 hover:scale-105 transform transition-all duration-300 shadow-lg"
            >
              Voir mes projets
            </a>
          </div>

          {/* Scroll Indicator – intégré après le bouton */}
          <div className="mt-6 md:absolute md:bottom-8 md:left-1/2 md:transform md:-translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-gray-600 dark:text-gray-300 mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
      </div>
    </section>
  );
};
