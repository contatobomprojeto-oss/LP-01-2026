import { CaseStudy, ContactConfig, FaqItem, FrenteItem, Lead, TestimonialItem } from '../types';

export const INITIAL_CONFIG: ContactConfig = {
  whatsappNumber: '5562992231843',
  whatsappDisplay: '(62) 99223-1843',
  leadDestinationEmail: 'henrique.ferrazms@gmail.com',
  agencyName: 'Ricks Marketing',
  logoUrl: '',
  heroBannerUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
};

export const DEFAULT_WHATSAPP_MESSAGE = 'Olá, quero melhorar meus resultados na clínica, vamos agendar uma conversa';

export const GARGALOS_DATA = [
  {
    id: 1,
    icon: 'wrong_location',
    title: 'Pouca presença no Google Maps',
    description: 'Pacientes a menos de 1 km pesquisam por dentistas (implantes, alinhadores, dor de dente) ou procedimentos estéticos (botox, bioestimuladores) e vão direto para o concorrente porque sua clínica não pontua no raio local.',
    lossText: 'Perda de até 45% das buscas do bairro',
  },
  {
    id: 2,
    icon: 'receipt_long',
    title: 'Anúncios sem retorno comprovado',
    description: 'Verba desperdiçada com panfletos ou impulsionamentos genéricos no Instagram sem saber com clareza quantos pacientes agendaram consulta ou chamaram no WhatsApp da clínica.',
    lossText: 'Custo alto sem métricas de conversão',
  },
  {
    id: 3,
    icon: 'store',
    title: 'Grandes franquias dominando a busca local',
    description: 'Grandes redes de franquias odontológicas e estéticas ocupam as 3 primeiras posições do Google Maps, enquanto a sua clínica independente fica oculta na segunda página, invisível para o público local.',
    lossText: 'Invisível para quem pesquisa no smartphone',
  },
  {
    id: 4,
    icon: 'update_disabled',
    title: 'Perfil Google desatualizado ou abandonado',
    description: 'Fotos antigas do consultório, procedimentos sem catálogo claro, dúvidas no chat sem resposta e avaliações negativas sem réplica profissional destroem a credibilidade e o agendamento de novos pacientes.',
    lossText: 'Queda severa na confiança e conversão',
  },
  {
    id: 5,
    icon: 'crisis_alert',
    title: 'Falta de atração contínua e funil de recorrência',
    description: 'Depender apenas de quem passa na frente ou indicação boca a boca é arriscado. Clínicas odontológicas e de estética modernas precisam de um funil digital automatizado que capture pacientes particulares todos os dias e gere recorrência.',
    lossText: 'A Ricks Marketing resolve cada uma dessas dores com metodologia validada para odontologia e estética.',
    fullWidth: true,
  },
];

export const FRENTES_DATA: FrenteItem[] = [
  {
    id: 1,
    badgeNumber: 1,
    badgeColorClass: 'bg-[#1a73e8] text-white',
    icon: 'pin_drop',
    title: 'Google Meu Negócio & Perfil de Alta Conversão',
    description: 'Auditoria técnica profunda: categorias odontológicas e estéticas exatas (Clínica Odontológica, Dentista, Ortodontista, Clínica de Estética), catálogo visual com tratamentos e gestão ativa de avaliações 5 estrelas.',
    checkItems: [
      'Posicionamento no Google 3-Pack (Top 3)',
      'Catálogo de tratamentos integrado ao WhatsApp',
      'Gestão e resposta estratégica a avaliações',
    ],
  },
  {
    id: 2,
    badgeNumber: 2,
    badgeColorClass: 'bg-[#dc392c] text-white',
    icon: 'ads_click',
    title: 'Google Ads (Intenção de Agendamento)',
    description: 'Captura imediata de buscas de alta intenção: "dentista perto de mim", "implante dentário urgente", "alinhador invisível", "harmonização orofacial", "clareamento dental hoje" e tratamentos particulares de alta margem.',
    checkItems: [
      'Anúncios com botão direto para WhatsApp e Ligação',
      'Negativação cirúrgica de termos sem intenção de consulta',
      'Extensão de endereço com traçado de rota no GPS',
    ],
  },
  {
    id: 3,
    badgeNumber: 3,
    badgeColorClass: 'bg-[#006e2c] text-white',
    icon: 'share_location',
    title: 'Meta Ads (Geofencing & Campanhas Visuais)',
    description: 'Cercamento digital por raio geográfico (2 a 6 km ao redor da clínica). Criativos magnéticos no Instagram e Facebook destacando alinhadores invisíveis, transformações de sorriso, estética facial e tratamentos preventivos.',
    checkItems: [
      'Campanhas com apelo visual de alta conversão',
      'Segmentação qualificada por bairro, idade e interesses',
      'Geração de conversas qualificadas no WhatsApp',
    ],
  },
  {
    id: 4,
    badgeNumber: 4,
    badgeColorClass: 'bg-[#FBBC04] text-[#1a1b1e]',
    icon: 'quickreply',
    title: 'Ativação de Atendimento & Recepção Conversora',
    description: 'Transformamos cliques em agendamentos concretos na recepção: triagem rápida de urgências odontológicas e dúvidas de procedimentos estéticos, confirmação automática de horários e lembretes de retorno.',
    checkItems: [
      'Tempo de resposta reduzido no WhatsApp',
      'Scripts de agendamento e fechamento na recepção',
      'Fidelização e recorrência de pacientes',
    ],
  },
  {
    id: 5,
    badgeNumber: 5,
    badgeColorClass: 'bg-[#202124] text-white',
    icon: 'query_stats',
    title: 'Dashboard Looker Studio & Reunião Mensal',
    description: 'Sem métricas de vaidade: painel Google Looker Studio transparente em tempo real, mostrando rotas solicitadas, ligações, mensagens de agendamento e faturamento gerado para a clínica.',
    checkItems: [
      'Métricas de Ação: 100% Rastreadas',
      'Custo por Paciente: CAC Controlado',
      'Alinhamento Estratégico Mensal com Especialista',
    ],
    highlight: true,
  },
];

export const CASES_DATA: CaseStudy[] = [
  {
    id: 'clinica-odonto-martins',
    tag: 'Clínica Odontológica & Implantes',
    category: 'odontologia',
    title: 'Dr. André Martins Odontologia',
    description: 'Domínio das buscas na zona sul para implantes dentários, próteses protocolo e alinhadores transparentes com direcionamento direto para a recepção no WhatsApp.',
    metrics: [
      { label: 'Consultas de Implante / Mês', value: '+38', trend: 'avaliações fechadas na clínica' },
      { label: 'Chamadas no WhatsApp', value: '+280%', trend: 'pacientes particulares do bairro' },
    ],
    highlightNote: 'Aumento de R$ 94.000 em tratamentos contratados no 2º trimestre',
  },
  {
    id: 'clinica-estetica-lumina',
    tag: 'Clínica de Estética Avançada',
    category: 'estetica',
    title: 'Clínica Lumina Estética & Laser',
    description: 'Posicionamento no Top 1 do Google Maps para buscas de harmonização, laser e protocolos corporais com funil direto para WhatsApp da secretária.',
    metrics: [
      { label: 'Novos Agendamentos / Mês', value: '+142', trend: 'consultas e procedimentos fechados' },
      { label: 'Chamadas no WhatsApp', value: '+310%', trend: 'leads de alta intenção no bairro' },
    ],
    highlightNote: 'Agenda cheia de procedimentos com ROI de 5.4x sobre o investimento',
  },
  {
    id: 'odontoprime-estetica',
    tag: 'Clínica Integrada de Odontologia',
    category: 'odontologia',
    title: 'OdontoPrime Estética Dental',
    description: 'Elevação da reputação no Google Maps de 3.8 para 4.9 estrelas através de pós-consulta automatizado e campanhas locais de alinhadores e lentes de resina.',
    metrics: [
      { label: 'Avaliação Maps', value: '4.9 ★', trend: '240 novas avaliações reais de pacientes' },
      { label: 'Novos Pacientes Particulares', value: '+45%', trend: 'aumento contínuo de fluxo' },
    ],
    highlightNote: 'Tornou-se a clínica odontológica mais bem avaliada e recomendada do bairro',
  },
  {
    id: 'estetica-dermo',
    tag: 'Centro de Biomedicina & Estética',
    category: 'estetica',
    title: 'Espaço DermoEstética',
    description: 'Otimização do Perfil da Empresa no Google e Meta Ads geolocalizado, atraindo pacientes para preenchimentos, botox e bioestimuladores.',
    metrics: [
      { label: 'Avaliação no Google', value: '4.9 ★', trend: '190+ avaliações reais de pacientes' },
      { label: 'Ticket Médio de Venda', value: '+38%', trend: 'fechamento de planos de tratamento' },
    ],
    highlightNote: 'Tornou-se a clínica de estética mais recomendada da região',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Meu negócio é local (clínica odontológica independente ou consultório de estética), o marketing digital funciona para mim?',
    answer: 'Sim, é exatamente onde a assessoria gera o maior retorno proporcional! Diferente do marketing genérico de redes sociais, nosso foco é 100% hiperlocal. Posicionamos sua clínica odontológica ou de estética para que pacientes em um raio de 1 a 7 km encontrem seu consultório em primeiro lugar no momento exato em que pesquisam por dentistas, implantes, dor de dente, alinhadores invisíveis ou procedimentos estéticos.',
  },
  {
    id: 'faq-2',
    question: 'Em quanto tempo começo a ver aumento nas mensagens de WhatsApp e agendamentos?',
    answer: 'Com as campanhas de Google Ads e anúncios locais direcionados, os primeiros contatos no WhatsApp e chamadas telefônicas costumam ocorrer já nos primeiros 5 a 7 dias úteis após a aprovação dos anúncios. O fortalecimento orgânico do Google Meu Negócio consolida-se continuamente entre 30 e 60 dias.',
  },
  {
    id: 'faq-3',
    question: 'A Ricks cuida tanto do Google Meu Negócio quanto dos anúncios de tráfego pago?',
    answer: 'Sim! Nossa assessoria é 360°: gerenciamos seu Perfil de Empresa no Google, catálogo de tratamentos odontológicos e estéticos, anúncios no Google Ads e Meta Ads (Instagram/Facebook) e estruturamos o funil para converter contatos em consultas agendadas no seu WhatsApp.',
  },
  {
    id: 'faq-4',
    question: 'Como acompanho o retorno do meu investimento?',
    answer: 'Através de um painel exclusivo no Google Looker Studio, atualizado em tempo real. Você visualiza com total transparência quantas rotas foram traçadas, quantas ligações foram feitas, quantas conversas foram abertas no WhatsApp e o custo exato por paciente gerado.',
  },
  {
    id: 'faq-5',
    question: 'Como agendar uma conversa para iniciar?',
    answer: 'Basta clicar no botão de WhatsApp ou preencher o formulário de auditoria gratuita nesta página. Faremos uma sessão diagnóstica de 25 minutos para analisar sua presença no Google e apresentar as oportunidades da sua região.',
  },
];

export const INITIAL_LEADS: Lead[] = [];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'dep-1',
    name: 'Dra. Camila Nogueira',
    role: 'Cirurgiã-Dentista & Diretora Clínica',
    businessName: 'OralVitta Odontologia Integrada',
    cityState: 'Goiânia - GO',
    category: 'odontologia',
    photoUrl: 'https://images.unsplash.com/photo-1594824813524-8b6b15802319?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    highlightMetric: '+185% em agendamentos particulares',
    comment: 'Competir com duas grandes franquias odontológicas na mesma avenida parecia uma batalha perdida. A Ricks Marketing reestruturou nosso Google Meu Negócio e ativou campanhas de implantes e alinhadores no raio de 4km. Em 40 dias, viramos a primeira opção nas buscas locais do bairro e a agenda lotou.',
    verified: true,
    timeframe: 'Cliente há 8 meses',
  },
  {
    id: 'dep-2',
    name: 'Dr. Marcelo Furtado',
    role: 'Biomédico Esteta & Fundador',
    businessName: 'Harmonize Estética Avançada',
    cityState: 'Campinas - SP',
    category: 'estetica',
    photoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    highlightMetric: 'R$ 48.000 em procedimentos no 1º mês',
    comment: 'Nós já tínhamos queimado muito dinheiro com impulsionamento no Instagram que só trazia curtidas e curiosos. O trabalho da Ricks com Google Ads local e funil de WhatsApp colocou pacientes qualificados na nossa maca para botox e bioestimuladores toda semana.',
    verified: true,
    timeframe: 'Cliente há 1 ano',
  },
  {
    id: 'dep-3',
    name: 'Dr. Lucas Menezes',
    role: 'Ortodontista & Sócio-Fundador',
    businessName: 'Menezes Odontologia & Alinhadores',
    cityState: 'Belo Horizonte - MG',
    category: 'odontologia',
    photoUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    highlightMetric: '89% de conversão nas avaliações',
    comment: 'A automação de triagem rápida no WhatsApp integrada com as buscas do Google foi um divisor de águas. Paramos de perder pacientes para concorrentes por demora no atendimento da recepção. O Henrique e a equipe entregam resultados com seriedade cirúrgica.',
    verified: true,
    timeframe: 'Cliente há 6 meses',
  },
  {
    id: 'dep-4',
    name: 'Dra. Renata Albuquerque',
    role: 'Fisioterapeuta Dermatofuncional & Diretora',
    businessName: 'Instituto Renata Albuquerque Estética',
    cityState: 'Brasília - DF',
    category: 'estetica',
    photoUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    highlightMetric: 'Agenda cheia com 3 semanas de antecedência',
    comment: 'Nossa clínica era muito dependente de indicações boca a boca. Com a assessoria da Ricks, passamos a dominar os termos mais buscados na Asa Sul. Os pacientes já chegam sabendo o valor dos tratamentos e prontos para fechar pacotes de alta margem.',
    verified: true,
    timeframe: 'Cliente há 5 meses',
  },
  {
    id: 'dep-5',
    name: 'Dr. Carlos Eduardo Ramos',
    role: 'Implantodontista & Diretor Clínico',
    businessName: 'Rede OdontoMais (3 Unidades)',
    cityState: 'Aparecida de Goiânia - GO',
    category: 'odontologia',
    photoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    highlightMetric: 'ROI de 7.2x em captação de pacientes',
    comment: 'Padronizar o Google Perfil de Empresa das nossas 3 clínicas odontológicas e alinhar com anúncios de rota no Google Maps aumentou as consultas de avaliação imediatamente. A Ricks entende a dor real do consultório odontológico particular.',
    verified: true,
    timeframe: 'Cliente há 11 meses',
  },
];
