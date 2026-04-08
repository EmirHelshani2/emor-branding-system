import React, { createContext, useContext, useState, useCallback } from "react";

type Language = "al" | "en";

interface LanguageContextType {
  lang: Language;
  toggle: () => void;
  t: (al: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("al");

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "al" ? "en" : "al"));
  }, []);

  const t = useCallback(
    (al: string, en: string) => (lang === "al" ? al : en),
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
