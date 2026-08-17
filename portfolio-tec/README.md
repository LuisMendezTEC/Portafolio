# Portafolio — Ingeniería en Computación (TEC)

Portafolio profesional en React + Vite + Tailwind, con arquitectura *feature-based*
y soporte bilingüe (ES/EN) desde una capa de i18n propia y ligera.

## Cómo correrlo

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # genera dist/ para producción
```

## Antes de publicarlo — edita SOLO estos archivos

| Qué cambiar | Dónde |
|---|---|
| Nombre, universidad, links de GitHub/LinkedIn/correo, CV | `src/shared/constants/siteConfig.js` |
| Textos de la interfaz (nav, hero, secciones) en ES/EN | `src/features/i18n/dictionaries/es.js` y `en.js` |
| Tarjetas de habilidades | `src/features/skills/constants/skillsData.js` |
| Proyectos destacados | `src/features/projects/constants/projectsData.js` |
| Colores y tipografías (design tokens) | `tailwind.config.js` |

No deberías necesitar tocar ningún componente `.jsx` solo para actualizar contenido.

## Arquitectura

```
src/
  app/            # Composición: App.jsx arma providers + Layout + secciones
  features/       # Un dominio de negocio por carpeta, autocontenido
    i18n/         # Idioma activo, diccionarios, hook useTranslation()
    layout/       # Navbar, Footer, Layout (cascarón de página)
    about/        # Hero + "Sobre mí"
    skills/       # Sección de habilidades + su data
    projects/     # Sección de proyectos + su data
    contact/      # Sección de contacto
  shared/         # Reutilizable entre features, sin lógica de negocio propia
    components/ui/  # Piezas visuales genéricas (Container, futuros Button, etc.)
    constants/       # siteConfig.js (datos personales) y uiConstants.js (números con nombre)
    styles/          # globals.css
```

**Regla de oro:** cada feature expone su API pública a través de un `index.js`
(barrel export). El resto de la app importa desde `features/nombre-feature`,
nunca desde `features/nombre-feature/components/ArchivoInterno.jsx`. Eso es lo
que te deja mover o refactorizar el interior de una feature sin romper nada afuera.

## Cómo agregar una sección nueva

1. Crear `src/features/mi-seccion/components/MiSeccion.jsx`.
2. Si tiene datos propios (como projects o skills), agregar `constants/miSeccionData.js`.
3. Agregar sus textos de UI a `es.js` y `en.js` bajo una clave nueva, ej. `miSeccion.titulo`.
4. Exportar el componente desde `features/mi-seccion/index.js`.
5. Importarlo en `App.jsx` y, si aparece en el nav, agregar una entrada en
   `features/layout/constants/navLinks.js`.

## Cómo agregar un idioma nuevo (ej. portugués)

1. Crear `src/features/i18n/dictionaries/pt.js` con la misma forma exacta que `es.js`.
2. Registrarlo en `dictionaries/index.js` y en `constants/languages.js`
   (`LANGUAGES.PT` + agregarlo a `LANGUAGE_OPTIONS`).
3. Nada más cambia: `useTranslation()` y el selector de idioma ya lo recogen solos.
