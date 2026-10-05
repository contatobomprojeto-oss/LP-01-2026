export interface Lead {
  id: string;
  nome: string;
  farmacia: string;
  tipoNegocio?: 'farmacia' | 'estetica' | 'outro';
  cnpj?: string;
  whatsapp: string;
  email: string;
  volume: string;
  data: string;
  status: 'novo' | 'em_contato' | 'qualificado' | 'convertido';
  notas?: string;
}

export interface ContactConfig {
  whatsappNumber: string; // e.g. "5562992231843"
  whatsappDisplay: string; // e.g. "(62) 99223-1843"
  leadDestinationEmail: string; // default henrique.ferrazms@gmail.com
  agencyName: string;
  logoUrl: string;
  heroBannerUrl?: string;
}

export interface FrenteItem {
  id: number;
  title: string;
  description: string;
  badgeNumber: number;
  badgeColorClass: string;
  icon: string;
  checkItems: string[];
  highlight?: boolean;
}

export interface CaseStudy {
  id: string;
  tag: string;
  category: 'farmacia' | 'estetica' | 'rede' | 'hiperlocal' | 'reputacao';
  title: string;
  description: string;
  metrics: {
    label: string;
    value: string;
    trend: string;
  }[];
  highlightNote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
