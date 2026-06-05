import { createContext, useContext, useState } from "react";
import { translations } from "../i18n/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "fr");

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === "fr" ? "en" : "fr";
      localStorage.setItem("lang", next);
      return next;
    });
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
