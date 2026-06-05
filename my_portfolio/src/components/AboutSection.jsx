import { Briefcase, Code, User } from "lucide-react";
import CV from "../assets/CV_Eliphaz_GUETIN_DEV_FULLSTACK_JUNIOR.pdf";
import { useReveal } from "../hooks/useReveal";

export const AboutSection = () => {
  const titleRef   = useReveal();
  const textRef    = useReveal();
  const card1Ref   = useReveal();
  const card2Ref   = useReveal();
  const card3Ref   = useReveal();

  return (
    <section id="about" className="py-24 px-4 relative bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto max-w-5xl">

        <h2 ref={titleRef} className="reveal-up text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">
          À propos de <span className="text-blue-600 dark:text-blue-400">moi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Texte */}
          <div ref={textRef} className="reveal-left space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Développeur Web Fullstack & Créateur Tech
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Jeune passionné de développement web, je conçois des applications performantes, accessibles et réactives grâce aux technologies modernes.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Je m'investis dans la création de solutions élégantes à des problèmes complexes et continue d'explorer de nouvelles technologies pour rester à la pointe du web en constante évolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-hover px-6 py-2 rounded-full bg-blue-600 text-white font-medium text-center"
              >
                Me contacter
              </button>
              <a
                href={CV}
                download="CV_Eliphaz_GUETIN_DEV_FULLSTACK_JUNIOR"
                className="btn-hover px-6 py-2 rounded-full border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 transition-colors duration-300 text-center"
              >
                Télécharger CV
              </a>
            </div>
          </div>

          {/* Cartes */}
          <div className="grid grid-cols-1 gap-6">
            {[
              { ref: card1Ref, delay: "delay-100", icon: <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />, title: "Développement Web", desc: "Création de sites et applications web réactives avec des frameworks modernes." },
              { ref: card2Ref, delay: "delay-200", icon: <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />, title: "UI/UX Design", desc: "Conception d'interfaces intuitives et expériences utilisateur fluides." },
              { ref: card3Ref, delay: "delay-300", icon: <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />, title: "Gestion de projet", desc: "Pilotage de projets de la conception à la livraison en suivant les méthodes agiles." },
            ].map((item, i) => (
              <div
                key={i}
                ref={item.ref}
                className={`reveal-right ${item.delay} card-hover p-6 border rounded-xl shadow-md bg-gray-100 dark:bg-gray-800`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 shrink-0">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{item.title}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
