import type { LucideIcon } from 'lucide-react';
import { Accessibility, Heart, RefreshCw, Users } from 'lucide-react';

export interface Value {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const values: Value[] = [
  {
    id: 'acessibilidade',
    title: 'Acessibilidade',
    description: 'Design universal integrado desde a concepção.',
    icon: Accessibility,
  },
  {
    id: 'humanizacao',
    title: 'Humanização',
    description: 'Foco na escala humana e na experiência sensível.',
    icon: Heart,
  },
  {
    id: 'transformacao',
    title: 'Transformação',
    description: 'Impacto positivo no contexto urbano local.',
    icon: RefreshCw,
  },
  {
    id: 'compromisso',
    title: 'Compromisso Social',
    description: 'Arquitetura como ferramenta de inclusão.',
    icon: Users,
  },
];
