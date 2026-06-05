import { ArrowDown } from "lucide-react";
import PhotoHero from "../assets/Eliphaz.jpeg";
import { useLang } from "../context/LanguageContext";

export const HeroSection = () => {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section
      id="hero"
      className="relative z-20 min-h-screen flex flex-col md:flex-row items-center px-4 pt-28 md:pt-24 bg-gradient-to-b from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Photo */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative group animate-float">
            <div className="absolute -inset-4 rounded-[50%/40%] bg-gradient-to-tr from-blue-400/30 to-purple-400/20 blur-xl animate-pulse-glow" />
            <div className="absolute -inset-1 rounded-[42%/40%] border-2 border-blue-400/40 dark:border-blue-500/30 animate-spin" style={{ animationDuration: "12s" }} />
            <img src={PhotoHero} alt="Eliphaz Guetin" className="relative w-60 h-72 md:w-80 md:h-96 object-cover rounded-[40%/40%] shadow-2xl transition-transform duration-500 group-hover:scale-105" />
          </div>
        </div>

        {/* Texte */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 text-sm font-medium animate-slide-down mb-2">
            {h.badge}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="block animate-fade-in-slide-up">{h.greeting}</span>
            <span className="text-blue-600 dark:text-blue-400 animate-fade-in-slide-up-delay-1 ml-1">Eliphaz</span>
            <span className="ml-2 text-purple-600 dark:text-purple-400 animate-fade-in-slide-up-delay-2">GUETIN</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0 animate-fade-in-delay-3">
            {h.subtitle}
          </p>

          <div className="grid grid-cols-3 w-full gap-2 animate-fade-in-delay-4">
            {h.stats.map((stat, i) => (
              <div key={i} className="text-center py-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start animate-fade-in-delay-4">
            <a href="#projects" onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-hover px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow-lg shadow-blue-500/30">
              {h.cta_projects}
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-hover px-6 py-3 rounded-full border border-blue-600 text-blue-600 dark:text-blue-400 font-medium">
              {h.cta_contact}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-70">
        <span className="text-xs text-gray-500 dark:text-gray-400 tracking-widest uppercase">{h.scroll}</span>
        <ArrowDown className="h-4 w-4 text-blue-600 dark:text-blue-400" />
      </div>
    </section>
  );
};
