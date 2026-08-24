/**
 * Datos personales y enlaces externos del portafolio.
 *
 * Este es el ÚNICO archivo que debés editar para poner tu información real.
 * Ningún componente debe tener un enlace o dato de contacto escrito
 * directamente: siempre se importa desde acá.
 */
export const SITE_CONFIG = Object.freeze({
  // TODO: reemplazar con tus datos reales
  fullName: "Luis Méndez",
  shortName: "LuisMendezTEC",
  role: {
    es: "Estudiante de Ingeniería en Computación",
    en: "Computer Engineering Student",
  },
  university: "Tecnológico de Costa Rica (TEC)",
  location: "Costa Rica",

  // TODO: reemplazar con tus URLs reales
  links: {
    github: "https://github.com/LuisMendezTEC",
    linkedin:
      "https://www.linkedin.com/in/luis-andr%C3%A9s-m%C3%A9ndez-689248265/",
    email: "cluisandres486@gmail.com",
    resumePdf: "/cv-luis-mendez.pdf",
    resumePdfEn: "/CV_LuisMendez_EN.pdf",
  },

  // Se usa en <title> / meta description por idioma (ver features/i18n)
  seo: {
    es: {
      title: "Luis Méndez · Ingeniería en Computación · TEC",
      description:
        "Portafolio de Luis Méndez, estudiante de Ingeniería en Computación en el TEC, enfocado en backend, bases de datos y arquitecturas de IA.",
    },
    en: {
      title: "Luis Méndez · Computer Engineering · TEC",
      description:
        "Portfolio of Luis Méndez, Computer Engineering student at TEC, focused on backend systems, databases, and AI architectures.",
    },
  },
});
