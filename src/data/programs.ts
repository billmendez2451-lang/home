export interface AcademicProgram {
  name: string;
  slug: string;
  level: string;
  description: string;
  isActive: boolean;
  lastReviewedAt: string;
}

export const academicPrograms: AcademicProgram[] = [
  {
    name: 'Ingeniería de Sistemas',
    slug: 'ingenieria-de-sistemas',
    level: 'Pregrado',
    description: 'Formación orientada al análisis, diseño, desarrollo y gestión de soluciones tecnológicas.',
    isActive: true,
    lastReviewedAt: '2026-06-08',
  },
  {
    name: 'Ingeniería Mecánica',
    slug: 'ingenieria-mecanica',
    level: 'Pregrado',
    description: 'Capacitación en diseño, manufactura y gestión de sistemas mecánicos.',
    isActive: true,
    lastReviewedAt: '2026-06-08',
  },
  {
    name: 'Análisis y Diseño de Sistemas',
    slug: 'analisis-diseno-sistemas',
    level: 'Pregrado',
    description: 'Especialización en análisis e implementación de sistemas informáticos.',
    isActive: true,
    lastReviewedAt: '2026-06-08',
  },
  {
    name: 'Administración y Gestión Municipal',
    slug: 'administracion-gestion-municipal',
    level: 'Pregrado',
    description: 'Formación para gestión administrativa y gobernanza local.',
    isActive: true,
    lastReviewedAt: '2026-06-08',
  },
  {
    name: 'Economía Social',
    slug: 'economia-social',
    level: 'Pregrado',
    description: 'Estudio de modelos económicos enfocados en bienestar comunitario.',
    isActive: true,
    lastReviewedAt: '2026-06-08',
  },
];
