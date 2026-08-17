import { useTranslation } from "../../i18n";
import { Container } from "../../../shared/components/ui/Container";
import { PROJECTS_DATA } from "../constants/projectsData";
import { SITE_CONFIG } from "../../../shared/constants/siteConfig";

export function Projects() {
  const { t, language } = useTranslation();

  const getProjectStack = (stack) => {
    if (Array.isArray(stack)) {
      return stack;
    }

    return stack?.[language] ?? [];
  };

  return (
    <section id="projects" className="scroll-mt-header py-20">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              {t("projects.title")}
            </h2>
            <p className="mt-2 text-ink-soft">{t("projects.subtitle")}</p>
          </div>
          <a
            href={SITE_CONFIG.links.github}
            className="hidden font-mono text-sm text-accent hover:text-accent-ink md:inline"
          >
            {t("projects.viewAllOnGithub")} →
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {PROJECTS_DATA.map((project) => (
            <article
              key={project.id}
              className="rounded-md border border-line p-6"
            >
              <h3 className="font-display text-lg font-semibold text-ink">
                {project.name}
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                {project.description[language]}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {getProjectStack(project.stack).map((tech) => (
                  <span key={tech} className="font-mono text-xs text-ink-soft">
                    #{tech}
                  </span>
                ))}
              </div>
              <a
                href={project.repoUrl}
                className="mt-4 inline-block font-mono text-sm text-accent hover:text-accent-ink"
              >
                {t("projects.viewRepo")} →
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
