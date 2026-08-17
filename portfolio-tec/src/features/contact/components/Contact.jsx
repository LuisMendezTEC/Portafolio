import { useTranslation } from "../../i18n";
import { Container } from "../../../shared/components/ui/Container";
import { SITE_CONFIG } from "../../../shared/constants/siteConfig";

export function Contact() {
  const { t } = useTranslation();

  const contactLinks = [
    { label: t("contact.emailLabel"), href: `mailto:${SITE_CONFIG.links.email}` },
    { label: t("contact.linkedinLabel"), href: SITE_CONFIG.links.linkedin },
    { label: t("contact.githubLabel"), href: SITE_CONFIG.links.github },
  ];

  return (
    <section id="contact" className="scroll-mt-header bg-surface-alt py-20">
      <Container>
        <h2 className="font-display text-2xl font-semibold text-ink">
          {t("contact.title")}
        </h2>
        <p className="mt-2 max-w-xl text-ink-soft">{t("contact.subtitle")}</p>

        <ul className="mt-6 flex flex-wrap gap-6">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-mono text-sm text-accent hover:text-accent-ink"
              >
                {link.label} →
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
