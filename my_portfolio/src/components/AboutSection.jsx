import { Briefcase, Code, User } from "lucide-react";
import CV from "../assets/CV_Eliphaz_GUETIN_DEV_FULLSTACK_JUNIOR.pdf";
import { useReveal } from "../hooks/useReveal";
import { useLang } from "../context/LanguageContext";

export const AboutSection = () => {
  const { t } = useLang();
  const a = t.about;

  const titleRef = useReveal();
  const textRef  = useReveal();
  const card1Ref = useReveal();
  const card2Ref = useReveal();
  const card3Ref = useReveal();

  const cardIcons = [
    <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
  ];
  const cardRefs = [card1Ref, card2Ref, card3Ref];
  const cardDelays = ["delay-100", "delay-200", "delay-300"];

  return (
    <section id="about" className="py-24 pb-12 px-4 relative bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto max-w-5xl">

        <h2 ref={titleRef} className="reveal-up text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">
          {a.title} <span className="text-blue-600 dark:text-blue-400">{a.title_highlight}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="reveal-left space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{a.role}</h3>
            <p className="text-gray-700 dark:text-gray-300">{a.p1}</p>
            <p className="text-gray-700 dark:text-gray-300">{a.p2}</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-hover px-6 py-2 rounded-full bg-blue-600 text-white font-medium text-center">
                {a.cta_contact}
              </button>
              <a href={CV} download="CV_Eliphaz_GUETIN_DEV_FULLSTACK_JUNIOR"
                className="btn-hover px-6 py-2 rounded-full border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 transition-colors duration-300 text-center">
                {a.cta_cv}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {a.cards.map((card, i) => (
              <div key={i} ref={cardRefs[i]} className={`reveal-right ${cardDelays[i]} card-hover p-6 border rounded-xl shadow-md bg-gray-100 dark:bg-gray-800`}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 shrink-0">{cardIcons[i]}</div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{card.title}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{card.desc}</p>
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
