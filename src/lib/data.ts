export const profile = {
  name: "Nicolás Palma Marín",
  role: "Ingeniero en Informática · BI & Software Engineer",
  tagline:
    "Transformo datos dispersos en ecosistemas digitales que impulsan decisiones inteligentes.",
  location: "Puente Alto, Región Metropolitana, Chile",
  email: "nicolaspalma.it@gmail.com",
  phone: "+56 9 4959 0206",
  linkedin: "https://linkedin.com/in/nicolaspalmamarin",
  github: "https://github.com/nicopyjs",
  summary:
    "Ingeniero en Informática titulado de Duoc UC con dos votos de distinción, reflejo de mi esfuerzo, compromiso y rendimiento académico destacado. Formado sólidamente en desarrollo de software, bases de datos, análisis de datos y tecnologías de vanguardia. Apasionado por la tecnología, la automatización y el aprendizaje constante. Busco seguir creciendo profesionalmente, aportando valor en equipos que apuesten por la innovación y la mejora continua.",
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  url?: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "NEB Chile",
    role: "Ingeniero de Proyectos TI & Business Intelligence",
    period: "Jul 2025 — Actualidad",
    location: "Providencia, Región Metropolitana",
    url: "https://nebchile.cl",
    points: [
      "Rol híbrido estratégico donde convergen análisis de datos, ingeniería de software y automatización de procesos.",
      "Diseño y orquestación de dashboards avanzados en Power BI, con medidas DAX complejas y modelos que unifican SQL Server, APIs REST y archivos planos.",
      "Construcción de aplicaciones y microservicios con Python (Flask) en el backend y Vite + React en el frontend; soluciones móviles en AppSheet.",
      "Automatización de flujos financieros y operativos con Google Apps Script y Excel/Sheets, reduciendo drásticamente los tiempos de gestión manual.",
      "Administración de bases de datos SQL y despliegue de infraestructura en Google Cloud Platform; administración de Google Workspace.",
    ],
  },
  {
    company: "Constructora Gardilcic",
    role: "Practicante — Departamento de Sistemas",
    period: "Oct 2024 — Dic 2024",
    location: "Conchalí, Región Metropolitana",
    url: "https://www.gardilcic.cl/",
    points: [
      "540 horas de práctica profesional desarrollando dashboards interactivos en Power BI.",
      "Nuevas funcionalidades en aplicativos existentes, incluyendo modelado de datos y soporte técnico a usuarios.",
    ],
  },
];

export const education = {
  institution: "Duoc UC",
  degree: "Ingeniería en Informática",
  period: "Mar 2021 — Dic 2024",
  detail:
    "Titulado con dos votos de distinción. Formación sólida en programación, análisis de datos, bases de datos, redes, ciberseguridad, desarrollo de software y metodologías ágiles.",
};

export type Project = {
  name: string;
  period: string;
  description: string;
  tags: string[];
  highlights: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    name: "Dashboard de Movimientos Contables",
    period: "NEB Chile · 2025",
    description:
      "Plataforma web para el área de finanzas de NEB Chile que centraliza y visualiza movimientos contables, ingresos y gastos por centro de negocio, con filtros dinámicos y gráficos acumulados en tiempo real.",
    tags: ["Next.js 16", "React 19", "Tailwind CSS", "Recharts", "Google Sheets API"],
    highlights: [
      "Integración con Google Sheets y archivos Excel/CSV vía googleapis, exceljs y papaparse.",
      "Gráficos de gasto e ingreso acumulado y filtros por centro de negocio con exclusión.",
      "Arquitectura 100% Server Components sobre Next.js App Router.",
    ],
  },
  {
    name: "EarthAlert",
    period: "Proyecto de título · Ago — Dic 2024",
    description:
      "Aplicación móvil de alerta temprana de sismos orientada a entregar notificaciones inmediatas a usuarios en zonas de riesgo sísmico, integrando geolocalización y datos sísmicos en tiempo real.",
    tags: ["React Native", "Expo", "APIs REST", "Geolocalización", "UX/UI"],
    highlights: [
      "Interfaz intuitiva multiplataforma (Android e iOS) desarrollada en Expo.",
      "Flujos de backend conectados a APIs públicas de monitoreo sísmico en tiempo real.",
      "Aplicó diseño de sistemas escalables y manejo de eventos en tiempo real, alineado a necesidades reales de protección civil.",
    ],
  },
  {
    name: "Business Intelligence Financiero",
    period: "NEB Chile & Gardilcic",
    description:
      "Suite de dashboards de Power BI para análisis de estado de resultado y desempeño económico, con modelos de datos complejos publicados y embebidos en portales corporativos.",
    tags: ["Power BI", "DAX", "ETL", "SQL Server", "KPIs"],
    highlights: [
      "Modelado de datos y medidas DAX para análisis económico multi-proyecto.",
      "Publicación y embebido de dashboards para democratizar el acceso a la información.",
      "Optimización de modelos para grandes volúmenes de datos corporativos.",
    ],
  },
];

export const skillGroups: { title: string; skills: string[] }[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Vite", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Python", "Flask", "Node.js", "Express.js"],
  },
  {
    title: "Bases de datos",
    skills: ["PostgreSQL", "MSSQL", "MySQL", "Oracle", "SQLite"],
  },
  {
    title: "Datos & BI",
    skills: ["Power BI", "DAX", "ETL", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
  },
  {
    title: "Cloud & herramientas",
    skills: ["Google Cloud Platform", "Google Workspace Admin", "AppSheet", "Apps Script", "Git & GitHub"],
  },
  {
    title: "Habilidades blandas",
    skills: ["Proactividad", "Autodidacta", "Trabajo en equipo", "Trabajo bajo presión", "Comunicación"],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  url?: string;
  description?: string;
  inProgress?: boolean;
};

export const certifications: Certification[] = [
  {
    name: "Python Essentials 1",
    issuer: "Cisco",
    date: "Julio 2025",
    url: "https://www.credly.com/badges/c725b7d9-ad81-4412-8dbb-5aa17f9a9cf5/public_url",
    description: "Fundamentos de programación en Python: variables, estructuras de control, funciones y listas.",
  },
  {
    name: "Python Essentials 2",
    issuer: "Cisco",
    date: "Noviembre 2025",
    url: "https://www.credly.com/badges/4d0c50c5-268d-40d3-b5a9-e8f6b3335fad/public_url",
  },
  {
    name: "JavaScript Essentials 1",
    issuer: "Cisco",
    date: "Noviembre 2025",
    url: "https://www.credly.com/badges/f657d7af-d08e-47db-a5d9-405a2f734c53/public_url",
  },
  {
    name: "JavaScript Essentials 2",
    issuer: "Cisco",
    date: "Noviembre 2025",
    url: "https://www.credly.com/badges/633046a3-ccab-4a55-bf10-c862dc2a77ce/public_url",
  },
  {
    name: "Google Data Analytics",
    issuer: "Google",
    date: "En curso",
    description: "Certificado profesional: limpieza, análisis y visualización de datos con hojas de cálculo, SQL, Tableau y R.",
    inProgress: true,
  },
  {
    name: "Google Advanced Data Analytics",
    issuer: "Google",
    date: "En curso",
    description: "Certificado profesional avanzado: estadística, Python, machine learning y storytelling con datos.",
    inProgress: true,
  },
];

export type Language = { name: string; level: number; note?: string };

export const languages: Language[] = [
  { name: "Español", level: 5 },
  { name: "Inglés", level: 4 },
];
