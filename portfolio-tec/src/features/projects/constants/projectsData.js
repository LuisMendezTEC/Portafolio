/**
 * Repositorios destacados. "description" es bilingüe por la misma razón
 * que en skillsData.js. Actualizar acá cuando agregues o cambies un proyecto.
 */
export const PROJECTS_DATA = Object.freeze([
  {
    id: "dynamic-db-diagrams",
    name: "DynamicDBDiagrams",
    description: {
      es: "DynamicDBDiagrams es una herramienta web diseñada para simplificar y automatizar la visualización de estructuras de bases de datos. El sistema extrae los metadatos (tablas, columnas, claves primarias, relaciones, etc.) directamente del esquema de información de una base de datos relacional y genera automáticamente un diagrama UML.",
      en: "DynamicDBDiagrams is a web tool designed to simplify and automate the visualization of database structures. The system extracts metadata (tables, columns, primary keys, relationships, etc.) directly from the information schema of a relational database and automatically generates a UML diagram.",
    },
    stack: {
      es: ["Python (FastaApi framework), JavaScript, CSS (React framework)"],
      en: ["Python (FastaApi framework), JavaScript, CSS (React framework)"],
    },
    repoUrl: "https://github.com/rooseveltalej/DynamicDBDiagrams",
  },
  {
    id: "niddo",
    name: "Niddo",
    description: {
      es: "Descripción pendiente por completar.",
      en: "Description pending.",
    },
    stack: {
      es: ["Tecnologías por definir"],
      en: ["Technologies to be defined"],
    },
    repoUrl: "https://github.com/SMatey/Niddo",
  },
  {
    id: "digital-wallet",
    name: "digital_wallet",
    description: {
      es: "Este proyecto es un sistema de pago electrónico distribuido diseñado para gestionar transacciones de manera eficiente y segura. La solución utiliza una arquitectura de nodos locales y un nodo central para mejorar la resiliencia, reducir la latencia y aumentar la escalabilidad.",
      en: "This project is a distributed electronic payment system designed to manage transactions efficiently and securely. The solution uses an architecture of local nodes and a central node to improve resilience, reduce latency, and increase scalability.",
    },
    stack: {
      es: [
        "Python (FastApi framework), TypeScript, JavaScript, (React framework)",
      ],
      en: [
        "Python (FastApi framework), TypeScript, JavaScript, (React framework)",
      ],
    },
    repoUrl: "https://github.com/rooseveltalej/digital_wallet",
  },
  {
    id: "machine-learning-mediaplatform",
    name: "machine-learning-mediaplatform",
    description: {
      es: "El sistema es una plataforma distribuida que recibe casos de análisis forense digital compuestos por archivos de mensajería (textos exportados, imágenes, audios) y los procesa de forma concurrente y asíncrona mediante workers especializados. El resultado es un reporte consolidado con hallazgos clasificados por tipo, nivel de riesgo y evidencia asociada.",
      en: "The system is a distributed platform that receives digital forensic analysis cases consisting of messaging files (exported texts, images, audio) and processes them concurrently and asynchronously using specialized personnel. The result is a consolidated report with findings classified by type, risk level, and associated evidence.",
    },
    stack: {
      es: ["Go, JavaScript, CSS, Docker y Redis"],
      en: ["Go, JavaScript, CSS, Docker and Redis"],
    },
    repoUrl: "https://github.com/LuisMendezTEC/machine-learning-mediaplatform",
  },
  {
    id: "pet-health-tracker-backend",
    name: "PetHealthTracker-backend",
    description: {
      es: "Módulo backend de proyecto mobile de SaaS para veterinarias, conexión entre capa frontend y base de datos supabase",
      en: "Backend module for a SaaS mobile project for veterinary clinics, connection between the frontend layer and the Supabase database",
    },
    stack: {
      es: ["Python (FastApi) y Postgresql"],
      en: ["Python (FastApi) and Postgresql"],
    },
    repoUrl: "https://github.com/LuisMendezTEC/PetHealthTracker-backend",
  },
  {
    id: "pet-health-tracker-mobile",
    name: "PetHealthTracker-mobile",
    description: {
      es: "Módulo frontend de proyecto mobile para SaaS para veterinarias.",
      en: "Frontend module for a SaaS mobile project for veterinary clinics.",
    },
    stack: {
      es: ["TypeScript, CSS y React Framework"],
      en: ["TypeScript, CSS and React Framework"],
    },
    repoUrl: "https://github.com/LuisMendezTEC/PetHealthTracker-mobile",
  },
  {
    id: "deep-learning-backend",
    name: "deep-learning-backend",
    description: {
      es: "Repositorio backend unificado que implementa una arquitectura de microservicios lógicos mediante FastAPI, diseñado para la exposición, gestión e inferencia de modelos de Deep Learning de alta demanda computacional desarrollados en TensorFlow. El sistema centraliza dos canalizaciones (pipelines) críticas de Inteligencia Artificial: procesamiento de señales de voz y segmentación avanzada de imágenes médicas por Resonancia Magnética (MRI).",
      en: "A unified backend repository that implements a logical microservices architecture using FastAPI, designed for the exposure, management, and inference of computationally intensive Deep Learning models developed in TensorFlow. The system centralizes two critical Artificial Intelligence pipelines: speech signal processing and advanced segmentation of medical Magnetic Resonance Imaging (MRI).",
    },
    stack: {
      es: ["FastApi y TensorFlow"],
      en: ["FastApi and TensorFlow"],
    },
    repoUrl: "https://github.com/LuisMendezTEC/deep-learning-backend",
  },
  {
    id: "atlas-flow",
    name: "Atlas Flow",
    description: {
      es: "SaaS para administración de múltiples gimnasios.",
      en: "Multi-gym SaaS administration platform.",
    },
    stack: {
      es: ["JavaScript/TypeScript, CSS y React"],
      en: ["JavaScript/TypeScript, CSS and React"],
    },
    repoUrl: "https://github.com/daniel-rojas28/atlas-flow.git",
  },
]);
