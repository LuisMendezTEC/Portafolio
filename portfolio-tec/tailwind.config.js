/**
 * Design tokens del portafolio.
 *
 * Esta es la ÚNICA fuente de verdad para color y tipografía.
 * Ningún componente debe usar un hex/color literal: siempre a través
 * de estas clases semánticas (bg-surface, text-ink, text-accent, etc).
 *
 * Paleta — "bitácora de sistemas": neutros fríos casi blancos, tinta
 * casi-negra para contraste alto, un azul técnico como acento de acción
 * y un verde de "estado" reservado para la señal de disponibilidad.
 */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#F8FAFC", // fondo principal
        "surface-alt": "#EEF2F6", // fondo de secciones alternas
        ink: "#10151C", // texto principal / headings
        "ink-soft": "#4A5568", // texto secundario
        accent: "#2F6FEB", // acción primaria / enlaces
        "accent-ink": "#1B4FC4", // hover / estados activos del acento
        line: "#DCE3EA", // bordes y separadores sutiles
        signal: "#16A34A", // indicador de disponibilidad (status dot)
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"], // titulares
        sans: ["'Inter'", "sans-serif"], // cuerpo de texto
        mono: ["'JetBrains Mono'", "monospace"], // etiquetas, tags de stack, meta-info
      },
      maxWidth: {
        content: "1200px", // ancho máximo de contenido, ver shared/constants/uiConstants
      },
      spacing: {
        header: "72px", // alto del navbar fijo, debe calzar con UI_CONSTANTS.HEADER_HEIGHT_PX
      },
    },
  },
  plugins: [],
};
