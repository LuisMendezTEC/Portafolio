import { useTranslation } from "../../i18n";
import { Container } from "../../../shared/components/ui/Container";
import { SKILLS_DATA } from "../constants/skillsData";

export function Skills() {
  const { t, language } = useTranslation();

  return (
    <section id="skills" className="scroll-mt-header bg-surface-alt py-20">
      <Container>
        <h2 className="font-display text-2xl font-semibold text-ink">
          {t("skills.title")}
        </h2>
        <p className="mt-2 text-ink-soft">{t("skills.subtitle")}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {SKILLS_DATA.map((group) => (
            <div key={group.id} className="rounded-md border border-line bg-surface p-4">
              <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">
                {group.label[language]}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-line px-2 py-1 font-mono text-xs text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
