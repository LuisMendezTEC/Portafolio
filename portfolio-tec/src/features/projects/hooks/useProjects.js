import { useMemo } from "react";
import { useTranslation } from "../../i18n";
import { PROJECTS_DATA, PROJECT_LINK_LABELS } from "../constants/projectsData";

export function useProjects() {
  const { language } = useTranslation();

  const getProjectStack = (stack) => {
    if (Array.isArray(stack)) {
      return stack;
    }

    return stack?.[language] ?? [];
  };

  const getProjectLinkLabel = (project) => {
    const projectType = project.urlType ?? "github";
    const labels = PROJECT_LINK_LABELS[language] ?? PROJECT_LINK_LABELS.es;

    return labels[projectType] ?? labels.github;
  };

  const projects = useMemo(() => PROJECTS_DATA, []);

  return {
    projects,
    language,
    getProjectStack,
    getProjectLinkLabel,
  };
}
