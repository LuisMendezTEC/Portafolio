import { useEffect } from "react";
import { useTranslation } from "../../features/i18n";
import { SITE_CONFIG } from "../../shared/constants/siteConfig";

/**
 * No renderiza nada visible: solo mantiene document.title y la meta
 * description en sync con el idioma activo. Vive en app/providers porque
 * orquesta un efecto a nivel de documento, no de una sola feature.
 */
export function DocumentMetaProvider({ children }) {
  const { language } = useTranslation();

  useEffect(() => {
    const seo = SITE_CONFIG.seo[language];
    document.title = seo.title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", seo.description);
  }, [language]);

  return children;
}
