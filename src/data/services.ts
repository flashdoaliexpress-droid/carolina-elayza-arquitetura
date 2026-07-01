import type { LucideIcon } from 'lucide-react';
import {
  Compass,
  Building2,
  Accessibility,
  ClipboardCheck,
  Sofa,
  Ruler,
} from 'lucide-react';

export interface Service {
  id: string;
  index: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: 'reforma',
    index: '01',
    title: 'Projetos de Reforma',
    description:
      'Transformação completa de espaços existentes, aliando estética e funcionalidade para renovar seu ambiente com precisão técnica.',
    icon: Compass,
  },
  {
    id: 'arquitetonico',
    index: '02',
    title: 'Projetos Arquitetônicos',
    description:
      'Concepção original e estruturação de novos espaços, desde o estudo de viabilidade até o detalhamento executivo rigoroso.',
    icon: Building2,
  },
  {
    id: 'adequacao',
    index: '03',
    title: 'Adequação de Acessibilidade',
    description:
      'Adaptação de ambientes residenciais e comerciais para garantir autonomia, segurança e inclusão, em conformidade com as normas.',
    icon: Accessibility,
  },
  {
    id: 'diagnostico',
    index: '04',
    title: 'Diagnóstico de Acessibilidade',
    description:
      'Análise técnica detalhada de espaços existentes para identificar barreiras arquitetônicas e propor soluções normativas.',
    icon: ClipboardCheck,
  },
  {
    id: 'decoracao',
    index: '05',
    title: 'Consultoria de Decoração',
    description:
      'Orientação especializada para seleção de mobiliário, texturas e paletas de cores, elevando a estética sem obras pesadas.',
    icon: Sofa,
  },
  {
    id: 'levantamento',
    index: '06',
    title: 'Levantamento Arquitetônico',
    description:
      'Medição precisa e registro as-built de edificações existentes, formando a base confiável para futuros projetos de intervenção.',
    icon: Ruler,
  },
];
