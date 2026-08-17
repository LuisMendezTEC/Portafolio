import { useTranslation } from "../../i18n";
import { Container } from "../../../shared/components/ui/Container";
import { SITE_CONFIG } from "../../../shared/constants/siteConfig";

export function Hero() {
  const { t, language } = useTranslation();

  return (
    <section className="py-24 md:py-32">
      <Container>
        {/* Indicador tipo "status del sistema": elemento de firma visual del portafolio */}
        <div className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-soft">
          <span className="h-2 w-2 rounded-full bg-signal" aria-hidden="true" />
          {t("hero.eyebrow")}
        </div>

        <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          {t("hero.greeting")} {SITE_CONFIG.fullName}
        </h1>

        <p className="mt-3 font-mono text-sm text-accent">
          {SITE_CONFIG.role[language]} · {SITE_CONFIG.university}
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
          {t("hero.tagline")}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-surface transition-colors hover:bg-accent"
          >
            {t("hero.ctaPrimary")}
          </a>
          <a
            href="#contact"
            className="rounded-md border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            {t("hero.ctaSecondary")}
          </a>
        </div>
      </Container>
    </section>
  );
}
