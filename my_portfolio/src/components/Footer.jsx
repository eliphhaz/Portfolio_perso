import { ArrowUp, Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Github } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    const heroSection = document.querySelector("#hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 px-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-12 flex flex-col items-center justify-center text-center gap-6">
      
      {/* Info Contact */}
      <div className="flex flex-col sm:flex-row sm:space-x-12 gap-4 justify-center">
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <Mail size={20} className="text-blue-600 dark:text-blue-400" />
          <a href="mailto:eliphaz.guetin@epitech.eu" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            eliphaz.guetin@epitech.eu
          </a>
        </div>

        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <Phone size={20} className="text-blue-600 dark:text-blue-400" />
          <a href="tel:+2250102030405" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            +225 0102030405
          </a>
        </div>

        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <MapPin size={20} className="text-blue-600 dark:text-blue-400" />
          <span>Abidjan, Côte d'Ivoire</span>
        </div>
      </div>

      {/* Réseaux sociaux */}
      <div className="flex space-x-4 justify-center text-gray-700 dark:text-gray-300">
        <a href="https://www.linkedin.com/in/n-doa-eliphaz-guetin-b0291835b/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="https://www.facebook.com/eliphaz.guetin.7/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <Facebook size={24} />
        </a>
        <a href="https://www.instagram.com/elip_haz/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <Instagram size={24} />
        </a>
        <a href="https://github.com/eliphhaz" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <Github size={24} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-600 dark:text-gray-300">
        &copy; {new Date().getFullYear()} ElipFolio. Tous droits réservés.
      </p>

      {/* Bouton Remonter */}
      <button
        onClick={scrollToTop}
        className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center justify-center"
        aria-label="Remonter en haut"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};
