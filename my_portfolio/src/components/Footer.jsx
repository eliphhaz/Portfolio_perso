
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Github } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import { useLang } from "../context/LanguageContext";

export const Footer = () => {
  const ref = useReveal();
  const { t } = useLang();

  const scrollToTop = () => {
    document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" });
  };

  const socials = [
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/n-doa-eliphaz-guetin-b0291835b/" },
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/eliphaz.guetin.7/" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/elip_haz/" },
    { icon: <Github size={20} />, href: "https://github.com/eliphhaz" },
  ];

  const contacts = [
    { icon: <Mail size={18} className="text-blue-600 dark:text-blue-400" />, label: "eliphaz.guetin@epitech.eu", href: "mailto:eliphaz.guetin@epitech.eu" },
    { icon: <Phone size={18} className="text-blue-600 dark:text-blue-400" />, label: "+225 0151322936", href: "tel:+2250151322936" },
    { icon: <MapPin size={18} className="text-blue-600 dark:text-blue-400" />, label: "Abidjan, Côte d'Ivoire", href: null },
  ];

  return (
    <footer ref={ref} className="reveal-up py-12 px-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-12 flex flex-col items-center justify-center text-center gap-6">

      <div className="flex flex-col sm:flex-row sm:space-x-12 gap-4 justify-center">
        {contacts.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            {item.icon}
            {item.href
              ? <a href={item.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{item.label}</a>
              : <span>{item.label}</span>
            }
          </div>
        ))}
      </div>

      <div className="flex space-x-3">
        {socials.map((s, i) => (
          <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
            className="icon-hover w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-300">
            {s.icon}
          </a>
        ))}
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} ElipFolio — {t.footer.copy}
      </p>

      <button
        onClick={scrollToTop}
        className="btn-hover p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 flex items-center justify-center"
        aria-label="Remonter en haut"
      >
        <ArrowUp size={18} />
      </button>

    </footer>
  );
};
