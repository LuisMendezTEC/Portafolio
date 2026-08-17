import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { DICTIONARIES } from "./dictionaries";

/**
 * Busca una clave anidada tipo "nav.about" dentro de un diccionario.
 * Si no la encuentra, devuelve la propia clave para que el faltante
 * sea visible en pantalla en vez de romper el render.
 */
function resolveKey(dictionary, key) {
  const value = key
    .split(".")
    .reduce((node, segment) => node?.[segment], dictionary);

  if (value === undefined) {
    if (import.meta.env.DEV) {
      console.warn(`[i18n] Falta la clave de traducción: "${key}"`);
    }
    return key;
  }

  return value;
}

export function useTranslation() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useTranslation debe usarse dentro de un <LanguageProvider>"
    );
  }

  const { language, setLanguage, toggleLanguage } = context;
  const dictionary = DICTIONARIES[language];

  const t = (key) => resolveKey(dictionary, key);

  return { t, language, setLanguage, toggleLanguage };
}
