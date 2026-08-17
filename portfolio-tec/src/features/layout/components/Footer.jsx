import { useTranslation } from "../../i18n";
import { SITE_CONFIG } from "../../../shared/constants/siteConfig";
import { Container } from "../../../shared/components/ui/Container";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface-alt">
      <Container className="flex flex-col items-center gap-2 py-8 text-center font-mono text-xs text-ink-soft md:flex-row md:justify-between md:text-left">
        <p>
          © {currentYear} {SITE_CONFIG.fullName}. {t("footer.rights")}
        </p>
        <p>{t("footer.builtWith")}</p>
      </Container>
    </footer>
  );
}
