import { LanguageProvider } from "../features/i18n";
import { DocumentMetaProvider } from "./providers/DocumentMetaProvider";
import { Layout } from "../features/layout";
import { Hero, About } from "../features/about";
import { Skills } from "../features/skills";
import { Projects } from "../features/projects";
import { Contact } from "../features/contact";

export function App() {
  return (
    <LanguageProvider>
      <DocumentMetaProvider>
        <Layout>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Layout>
      </DocumentMetaProvider>
    </LanguageProvider>
  );
}
