import { createContext, useCallback, useMemo, useState } from "react";
import { DEFAULT_LANGUAGE, LANGUAGES } from "./constants/languages";
import { STORAGE_KEYS } from "../../shared/constants/uiConstants";

export const LanguageContext = createContext(null);

function readInitialLanguage() {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;

  const stored = window.localStorage.getItem(STORAGE_KEYS.LANGUAGE);
  if (stored && Object.values(LANGUAGES).includes(stored)) return stored;

  // Si no hay preferencia guardada, respeta el idioma del navegador cuando es soportado
  const browserLang = window.navigator.language?.slice(0, 2);
  if (browserLang && Object.values(LANGUAGES).includes(browserLang)) {
    return browserLang;
  }

  return DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(readInitialLanguage);

  const setLanguage = useCallback((nextLanguage) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEYS.LANGUAGE, nextLanguage);
    document.documentElement.lang = nextLanguage;
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === LANGUAGES.ES ? LANGUAGES.EN : LANGUAGES.ES);
  }, [language, setLanguage]);

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage }),
    [language, setLanguage, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
