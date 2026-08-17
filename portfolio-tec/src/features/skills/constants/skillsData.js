/**
 * Datos de habilidades agrupadas por área.
 * "label" es bilingüe porque es contenido de dominio (no UI genérica),
 * así que vive junto al dato en vez de en el diccionario de i18n.
 */
export const SKILLS_DATA = Object.freeze([
  {
    id: "backend",
    label: { es: "Backend", en: "Backend" },
    items: ["Go", "FastAPI", "Python", "Node.js"],
  },
  {
    id: "frontend",
    label: { es: "Frontend", en: "Frontend" },
    items: ["React", "Next.js", "JavaScript", "TypeScript"],
  },
  {
    id: "databases",
    label: { es: "Bases de datos", en: "Databases" },
    items: ["PostgreSQL", "MySQL", "Modelado relacional"],
  },
  {
    id: "systems",
    label: { es: "Sistemas y DevOps", en: "Systems & DevOps" },
    items: ["Docker", "Linux", "Git"],
  },
  {
    id: "ai",
    label: { es: "Arquitecturas de IA", en: "AI Architectures" },
    items: ["APIs de LLMs", "Pipelines de datos", "TensorFlow (Deep Learning)"],
  },
]);
