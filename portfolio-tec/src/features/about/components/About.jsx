import { useTranslation } from "../../i18n";
import { Container } from "../../../shared/components/ui/Container";

// Sección "stub": sigue el mismo patrón que Navbar (texto vía t()).
// Próximo paso: reemplazar el párrafo único por el contenido final
// y, si crece, mover el texto largo a about/constants/aboutContent.js.
export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="scroll-mt-header py-20">
      <Container>
        <h2 className="font-display text-2xl font-semibold text-ink">
          {t("about.title")}
        </h2>
        <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-ink-soft">
          {t("about.body")}
        </p>
      </Container>
    </section>
  );
}
