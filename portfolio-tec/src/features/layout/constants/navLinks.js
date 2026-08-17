/**
 * Cada entrada conecta un id de sección (usado para el anchor scroll)
 * con su clave de traducción. Agregar una sección nueva a la navegación
 * es agregar una línea acá — ningún componente debe tener un <a> suelto.
 */
export const NAV_LINKS = Object.freeze([
  { id: "about", translationKey: "nav.about" },
  { id: "skills", translationKey: "nav.skills" },
  { id: "projects", translationKey: "nav.projects" },
  { id: "contact", translationKey: "nav.contact" },
]);
