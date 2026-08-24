import { useState } from "react";
import { useTranslation, LANGUAGE_OPTIONS } from "../../i18n";
import { NAV_LINKS } from "../constants/navLinks";
import { SITE_CONFIG } from "../../../shared/constants/siteConfig";
import { Container } from "../../../shared/components/ui/Container";

export function Navbar() {
  const { t, language, setLanguage } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-header border-b border-line bg-surface/90 backdrop-blur">
      <Container className="flex h-full items-center justify-between">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          {SITE_CONFIG.shortName}
          <span className="text-accent">.</span>
        </a>

        {/* Navegación desktop */}
        <nav aria-label="Secciones del portafolio" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="font-mono text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  {t(link.translationKey)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitch language={language} onChange={setLanguage} />
          <a
            href={
              language === "en"
                ? SITE_CONFIG.links.resumePdfEn
                : SITE_CONFIG.links.resumePdf
            }
            className="rounded-md bg-ink px-4 py-2 text-sm font-medium text-surface transition-colors hover:bg-accent"
            download
          >
            {t("nav.resume")}
          </a>
        </div>

        {/* Botón de menú, solo visible debajo del breakpoint móvil */}
        <button
          type="button"
          className="flex items-center justify-center rounded-md border border-line p-2 md:hidden"
          aria-expanded={isMobileMenuOpen}
          aria-label="Abrir menú de navegación"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          <MenuIcon isOpen={isMobileMenuOpen} />
        </button>
      </Container>

      {isMobileMenuOpen && (
        <MobileMenu
          language={language}
          onLanguageChange={setLanguage}
          onNavigate={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}

function LanguageSwitch({ language, onChange }) {
  return (
    <div
      role="group"
      aria-label="Selector de idioma"
      className="flex items-center rounded-md border border-line font-mono text-xs"
    >
      {LANGUAGE_OPTIONS.map((option) => (
        <button
          key={option.code}
          type="button"
          onClick={() => onChange(option.code)}
          aria-pressed={language === option.code}
          className={`px-2.5 py-1.5 transition-colors ${
            language === option.code
              ? "bg-ink text-surface"
              : "text-ink-soft hover:text-ink"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function MobileMenu({ language, onLanguageChange, onNavigate }) {
  const { t } = useTranslation();

  return (
    <div className="border-t border-line bg-surface md:hidden">
      <Container as="nav" className="flex flex-col gap-4 py-6">
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={onNavigate}
            className="font-mono text-sm text-ink-soft hover:text-ink"
          >
            {t(link.translationKey)}
          </a>
        ))}
        <LanguageSwitch language={language} onChange={onLanguageChange} />
      </Container>
    </div>
  );
}

function MenuIcon({ isOpen }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      {isOpen ? (
        <path
          d="M5 5l10 10M15 5L5 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M3 6h14M3 10h14M3 14h14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
