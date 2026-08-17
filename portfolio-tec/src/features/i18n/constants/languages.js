export const LANGUAGES = Object.freeze({
  ES: "es",
  EN: "en",
});

export const DEFAULT_LANGUAGE = LANGUAGES.ES;

// Metadata para renderizar el selector de idioma sin strings sueltos en el componente
export const LANGUAGE_OPTIONS = [
  { code: LANGUAGES.ES, label: "ES" },
  { code: LANGUAGES.EN, label: "EN" },
];
