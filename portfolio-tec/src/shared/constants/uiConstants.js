/**
 * Cualquier número que controle layout o comportamiento vive aquí,
 * con nombre. Nada de "72px" o "768" sueltos dentro de un componente.
 * Debe mantenerse en sync con los valores equivalentes de tailwind.config.js.
 */
export const UI_CONSTANTS = Object.freeze({
  HEADER_HEIGHT_PX: 72,
  CONTENT_MAX_WIDTH_PX: 1200,
  SCROLL_OFFSET_PX: 88, // header height + margen, usado al hacer scroll a una sección
  MOBILE_BREAKPOINT_PX: 768, // debajo de esto, el navbar colapsa
});

export const STORAGE_KEYS = Object.freeze({
  LANGUAGE: "portfolio_tec_lang",
});
