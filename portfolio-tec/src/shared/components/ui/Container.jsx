/**
 * Envoltorio de ancho máximo + padding lateral consistente.
 * Cualquier sección que necesite alinearse al mismo grid usa esto
 * en vez de repetir "max-w-content mx-auto px-*" por su cuenta.
 */
export function Container({ as: Tag = "div", className = "", children }) {
  return (
    <Tag className={`mx-auto w-full max-w-content px-6 lg:px-10 ${className}`}>
      {children}
    </Tag>
  );
}
