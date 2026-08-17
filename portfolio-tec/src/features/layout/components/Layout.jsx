import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

/**
 * Cascarón estructural de la página: header fijo + contenido + footer.
 * "pt-header" compensa la altura del Navbar (fixed) para que la primera
 * sección no quede tapada debajo de él.
 */
export function Layout({ children }) {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-header">{children}</main>
      <Footer />
    </div>
  );
}
