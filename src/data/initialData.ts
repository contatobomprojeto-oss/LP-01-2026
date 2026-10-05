import { CaseStudy, ContactConfig, FaqItem, FrenteItem, Lead } from '../types';

export const INITIAL_CONFIG: ContactConfig = {
  whatsappNumber: '5562992231843',
  whatsappDisplay: '(62) 99223-1843',
  leadDestinationEmail: 'henrique.ferrazms@gmail.com',
  agencyName: 'Ricks Marketing',
  logoUrl: '',
  heroBannerUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80',
};

export const DEFAULT_WHATSAPP_MESSAGE = 'Olá, quero melhorar meus resultados, vamos agendar uma conversa';

export const GARGALOS_DATA = [
  {
    id: 1,
    icon: 'wrong_location',
    title: 'Pouca presença no Google Maps',
    description: 'Pacientes a menos de 500 metros pesquisam por medicamentos ou procedimentos estéticos (como botox, limpeza de pele e tratamentos) e vão direto para o concorrente porque seu estabelecimento não pontua no raio local.',
    lossText: 'Perda de até 45% das buscas do bairro',
  },
  {
    id: 2,
    icon: 'receipt_long',
    title: 'Anúncios sem retorno comprovado',
    description: 'Verba desperdiçada com panfletos de papel ou impulsionamentos genéricos no Instagram sem saber com clareza quantos pacientes agendaram consulta ou chamaram no WhatsApp da clínica ou balcão.',
    lossText: 'Custo alto sem métricas de conversão',
  },
  {
    id: 3,
    icon: 'store',
    title: 'Grandes redes e franquias dominando a busca',
    description: 'Mega redes farmacêuticas e franquias de estética ocupam as 3 primeiras posições do Google Maps, enquanto o seu negócio independente fica oculto na segunda página, invisível para o público local.',
    lossText: 'Invisível para quem pesquisa no smartphone',
  },
  {
    id: 4,
    icon: 'update_disabled',
    title: 'Perfil Google desatualizado ou abandonado',
    description: 'Fotos amadoras, procedimentos e produtos sem catálogo, dúvidas no chat sem resposta e avaliações negativas sem réplica profissional destroem a credibilidade e o agendamento de novos clientes.',
    lossText: 'Queda severa na confiança e conversão',
  },
  {
    id: 5,
    icon: 'crisis_alert',
    title: 'Falta de atração contínua e funil de recorrência',
    description: 'Depender apenas de quem passa na porta ou indicação boca a boca é arriscado. Farmácias e clínicas de estética modernas precisam de um funil digital automatizado que capture pacientes novos todos os dias e gere recompra contínua.',
    lossText: 'A RickS Marketing resolve cada uma dessas dores com metodologia validada para saúde e estética.',
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
    description: 'Auditoria técnica profunda: categorias médicas, estéticas e farmacêuticas exatas, catálogo visual com serviços e produtos, fotos profissionais e gestão ativa de avaliações 5 estrelas.',
    checkItems: [
      'Posicionamento no Google 3-Pack (Top 3)',
      'Catálogo interativo integrado ao WhatsApp',
      'Gestão e resposta estratégica a avaliações',
    ],
  },
  {
    id: 2,
    badgeNumber: 2,
    badgeColorClass: 'bg-[#dc392c] text-white',
    icon: 'ads_click',
    title: 'Google Ads (Intenção de Compra & Agendamento)',
    description: 'Captura imediata de buscas quentes: "farmácia entrega rápida", "clínica de estética perto de mim", "harmonização facial", "limpeza de pele hoje", remédios e tratamentos de alta urgência.',
    checkItems: [
      'Anúncios com botão direto para WhatsApp e Ligação',
      'Negativação cirúrgica de termos sem intenção de compra',
      'Extensão de endereço com traçado de rota no GPS',
    ],
  },
  {
    id: 3,
    badgeNumber: 3,
    badgeColorClass: 'bg-[#006e2c] text-white',
    icon: 'share_location',
    title: 'Meta Ads (Geofencing & Campanhas Visuais)',
    description: 'Cercamento digital por raio geográfico (2 a 5 km ao redor do ponto físico). Criativos magnéticos no Instagram e Facebook destacando procedimentos estéticos, ofertas sazonais e dermocosméticos.',
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
    title: 'Ativação de Atendimento & WhatsApp Conversor',
    description: 'Transformamos cliques em vendas e agendamentos concretos: triagem rápida de receitas e dúvidas de procedimentos, confirmação automática de horários e lembretes de retorno.',
    checkItems: [
      'Tempo de resposta reduzido no WhatsApp',
      'Scripts de agendamento e fechamento no direct',
      'Fidelização e recorrência de clientes',
    ],
  },
  {
    id: 5,
    badgeNumber: 5,
    badgeColorClass: 'bg-[#202124] text-white',
    icon: 'query_stats',
    title: 'Dashboard Looker Studio & Reunião Mensal',
    description: 'Sem métricas de vaidade: painel Google Looker Studio transparente em tempo real, mostrando rotas solicitadas, ligações, mensagens de agendamento e faturamento gerado.',
    checkItems: [
      'Métricas de Ação: 100% Rastreadas',
      'Custo por Paciente/Cliente: CAC Controlado',
      'Alinhamento Estratégico Mensal com Especialista',
    ],
    highlight: true,
  },
];

export const CASES_DATA: CaseStudy[] = [
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
    id: 'medfarma',
    tag: 'Rede de Farmácias (3 Lojas)',
    category: 'farmacia',
    title: 'Rede Medfarma',
    description: 'Domínio da região metropolitana contra grandes redes nacionais através de Google Maps e anúncios de medicamentos urgentes.',
    metrics: [
      { label: 'Novas Rotas no Maps', value: '+184%', trend: 'crescimento no 1º trimestre' },
      { label: 'Ligações e Delivery', value: '+490/mês', trend: 'pedidos diretos no balcão e WhatsApp' },
    ],
    highlightNote: 'ROI auditado em 4.8x sobre a verba investida',
  },
  {
    id: 'estetica-dermo',
    tag: 'Centro de Biomedicina & Estética',
    category: 'estetica',
    title: 'Espaço DermoEstética',
    description: 'Otimização do Perfil da Empresa no Google e Meta Ads geolocalizado, atraindo pacientes para preenchimentos, botox e peelings.',
    metrics: [
      { label: 'Avaliação no Google', value: '4.9 ★', trend: '190+ avaliações reais de pacientes' },
      { label: 'Ticket Médio de Venda', value: '+38%', trend: 'fechamento de pacotes completos' },
    ],
    highlightNote: 'Tornou-se a clínica de estética mais recomendada da região',
  },
  {
    id: 'farmashop',
    tag: 'Drogaria Independente',
    category: 'farmacia',
    title: 'Farmashop Drogaria',
    description: 'Elevação da reputação no Google de 3.4 para 4.9 estrelas através de pós-venda automatizado no caixa e anúncios de perfumaria e plantão.',
    metrics: [
      { label: 'Avaliação Maps', value: '4.9 ★', trend: '320 novas avaliações reais' },
      { label: 'Novas Vendas Balcão', value: '+34%', trend: 'aumento contínuo de fluxo' },
    ],
    highlightNote: 'Tornou-se a farmácia mais bem avaliada de todo o bairro',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Meu negócio é local (farmácia independente ou clínica de estética), o marketing digital funciona para mim?',
    answer: 'Sim, é exatamente onde a assessoria gera o maior retorno proporcional! Diferente do marketing genérico de redes sociais, nosso foco é 100% hiperlocal. Posicionamos sua farmácia ou clínica para que pacientes e moradores em um raio de 1 a 5 km encontrem o seu estabelecimento em primeiro lugar no momento exato em que pesquisam por remédios, entregas rápidas ou procedimentos estéticos.',
  },
  {
    id: 'faq-2',
    question: 'Em quanto tempo começo a ver aumento nas mensagens de WhatsApp e agendamentos?',
    answer: 'Com as campanhas de Google Ads e anúncios locais direcionados, os primeiros contatos no WhatsApp e chamadas telefônicas costumam ocorrer já nos primeiros 5 a 7 dias úteis após a aprovação dos anúncios. O fortalecimento orgânico do Google Meu Negócio consolida-se continuamente entre 30 e 60 dias.',
  },
  {
    id: 'faq-3',
    question: 'A RickS cuida tanto do Google Meu Negócio quanto dos anúncios de tráfego pago?',
    answer: 'Sim! Nossa assessoria é 360°: gerenciamos seu Perfil de Empresa no Google, catálogo de produtos e serviços estéticos, anúncios no Google Ads e Meta Ads (Instagram/Facebook) e estruturamos o funil para converter contatos em clientes no seu WhatsApp.',
  },
  {
    id: 'faq-4',
    question: 'Como acompanho o retorno do meu investimento?',
    answer: 'Através de um painel exclusivo no Google Looker Studio, atualizado em tempo real. Você visualiza com total transparência quantas rotas foram traçadas, quantas ligações foram feitas, quantas conversas foram abertas no WhatsApp e o custo exato por paciente/cliente gerado.',
  },
  {
    id: 'faq-5',
    question: 'Como agendar uma conversa para iniciar?',
    answer: 'Basta clicar no botão de WhatsApp ou preencher o formulário de auditoria gratuita nesta página. Faremos uma sessão diagnóstica de 25 minutos para analisar sua presença no Google e apresentar as oportunidades da sua região.',
  },
];

export const INITIAL_LEADS: Lead[] = [
  {
    id: 'lead-1',
    nome: 'Roberto Fernandes',
    farmacia: 'Drogaria Santa Fé',
    tipoNegocio: 'farmacia',
    cnpj: '12.345.678/0001-90',
    whatsapp: '(62) 99123-4567',
    email: 'roberto@drogariasantafe.com.br',
    volume: '1001-3000',
    data: '2026-09-18T14:20:00.000Z',
    status: 'novo',
    notas: 'Interesse urgente em dominar o Google Maps e entregas no WhatsApp.',
  },
  {
    id: 'lead-2',
    nome: 'Dra. Camila Vasconcelos',
    farmacia: 'Clínica BellaPelle Estética Avançada',
    tipoNegocio: 'estetica',
    cnpj: '98.765.432/0001-11',
    whatsapp: '(62) 98234-5678',
    email: 'contato@bellapelle.com.br',
    volume: '1001-3000',
    data: '2026-09-17T10:15:00.000Z',
    status: 'qualificado',
    notas: 'Deseja atrair mais pacientes particulares para procedimentos estéticos faciais e corporais.',
  },
];

