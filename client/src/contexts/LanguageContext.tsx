import { createContext, useState, useContext, ReactNode } from "react";

type Language = "en" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (en: string, zh: string) => string;
}

// Initialize with default values to avoid undefined context
const defaultValue: LanguageContextType = {
  language: "en",
  setLanguage: () => {},
  t: (en) => en,
};

const LanguageContext = createContext<LanguageContextType>(defaultValue);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (en: string, zh: string): string => {
    return language === "en" ? en : zh;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  return context;
}
