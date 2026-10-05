import React, { useState } from 'react';
import { ContactConfig } from '../types';
import { WhatsappIcon } from './WhatsappIcon';
import { DEFAULT_WHATSAPP_MESSAGE } from '../data/initialData';

interface HeroSectionProps {
  config: ContactConfig;
  onOpenAudit: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ config, onOpenAudit }) => {
  const [activeNiche, setActiveNiche] = useState<'odonto' | 'estetica'>('odonto');
  const [activeSearchFilter, setActiveSearchFilter] = useState('Aberto agora');
  const [searchQuery, setSearchQuery] = useState('dentista aberto perto de mim');
  const [interactionToast, setInteractionToast] = useState<string | null>(null);

  const odontoFilters = ['Aberto agora', 'Implantes', 'Alinhadores', 'Melhor avaliado', 'Emergência 24h'];
  const aestheticsFilters = ['Aberto agora', 'Harmonização', 'Botox & Preenchimento', 'Melhor avaliada', 'Limpeza de Pele'];

  const filters = activeNiche === 'odonto' ? odontoFilters : aestheticsFilters;

  const handleToggleNiche = (niche: 'odonto' | 'estetica') => {
    setActiveNiche(niche);
    if (niche === 'odonto') {
      setSearchQuery('dentista aberto perto de mim');
      setActiveSearchFilter('Aberto agora');
    } else {
      setSearchQuery('clínica de estética e botox perto de mim');
      setActiveSearchFilter('Aberto agora');
    }
  };

  const getWhatsappUrl = (customMsg?: string) => {
    const text = encodeURIComponent(customMsg || DEFAULT_WHATSAPP_MESSAGE);
    return `https://wa.me/${config.whatsappNumber.replace(/\D/g, '')}?text=${text}`;
  };

  const handleSimulatedAction = (action: string) => {
    if (action === 'Ligar') {
      setInteractionToast('📞 Discagem rastreada simulada! No perfil do Google, seu telefone toca instantaneamente na recepção.');
    } else if (action === 'Rota') {
      setInteractionToast('📍 Traçado de GPS simulado! O paciente recebe a rota direta até o consultório.');
    } else if (action === 'WhatsApp') {
      window.open(getWhatsappUrl(), '_blank');
      setInteractionToast('💬 Conexão com WhatsApp comercial da recepção iniciada!');
    }
    setTimeout(() => {
      setInteractionToast(null);
    }, 4500);
  };

  return (
    <section className="relative pt-4 pb-10 sm:pt-14 sm:pb-20 px-3.5 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Ambient Backdrops */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 sm:w-[540px] h-72 sm:h-[400px] bg-[#1a73e8]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-0 w-48 sm:w-[320px] h-48 sm:h-[320px] bg-[#86f898]/20 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
        {/* Left: Copywriting & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start gap-3.5 sm:gap-6">
          {/* Google Badges Pill */}
          <div className="inline-flex items-center flex-wrap gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-[#f1f3f7] border border-[#c1c6d6]/30 shadow-xs max-w-full">
            <div className="flex items-center gap-1 flex-shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#4285F4]"></span>
              <span className="w-2 h-2 rounded-full bg-[#EA4335]"></span>
              <span className="w-2 h-2 rounded-full bg-[#FBBC04]"></span>
              <span className="w-2 h-2 rounded-full bg-[#34A853]"></span>
            </div>
            <span className="text-[10px] sm:text-xs font-semibold text-[#45474e]">
              Google Partner Specialist • Odontologia & Estética
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-[26px] sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#191c20] leading-[1.2] sm:leading-[1.12]">
            Sua Clínica Odontológica ou de Estética no{' '}
            <span className="text-[#1a73e8] underline decoration-[#1a73e8]/30 decoration-wavy underline-offset-4">
              Topo do Google
            </span>{' '}
            quando o Paciente Mais Procura.
          </h1>

          {/* Body */}
          <p className="text-sm sm:text-lg text-[#45474e] leading-relaxed max-w-xl">
            Atraia pacientes particulares hiperlocais da sua região com{' '}
            <strong className="text-[#191c20] font-semibold">Google Meu Negócio otimizado</strong>,
            anúncios de alta intenção e agendamento direto na recepção via WhatsApp.
          </p>

          {/* CTAs Group Mobile Optimised */}
          <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[50px] sm:min-h-[52px] px-6 rounded-xl sm:rounded-full bg-[#006e2c] hover:bg-[#005320] active:scale-98 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all text-center"
            >
              <WhatsappIcon size={22} />
              <span>Agendar Conversa no WhatsApp</span>
            </a>
            <a
              href="#calculadora"
              className="w-full sm:w-auto min-h-[48px] px-5 rounded-xl sm:rounded-full bg-[#f1f3f7] hover:bg-[#e9e7eb] active:scale-98 text-[#1a73e8] font-semibold text-sm sm:text-base flex items-center justify-center gap-2 border border-[#c1c6d6]/30 transition-all text-center"
            >
              <span className="material-symbols-outlined text-[20px]">calculate</span>
              <span>Simular Faturamento Extra</span>
            </a>
          </div>

          {/* Micro Proof Stats */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-1 sm:pt-2 w-full max-w-md">
            <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-[#f1f3f7]/80 border border-[#c1c6d6]/20">
              <span className="material-symbols-outlined text-[#006e2c] text-[20px] sm:text-[22px]">domain_verification</span>
              <div className="flex flex-col">
                <span className="text-[11px] sm:text-xs font-bold text-[#191c20]">+150 Clínicas</span>
                <span className="text-[9px] sm:text-[10px] text-[#45474e] leading-tight">no Topo do Google</span>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-[#f1f3f7]/80 border border-[#c1c6d6]/20">
              <span className="material-symbols-outlined text-[#1a73e8] text-[20px] sm:text-[22px]">near_me</span>
              <div className="flex flex-col">
                <span className="text-[11px] sm:text-xs font-bold text-[#191c20]">+42% Agendamentos</span>
                <span className="text-[9px] sm:text-[10px] text-[#45474e] leading-tight">via Rotas & Zap</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Mobile-Native Search & Maps Card Mockup */}
        <div className="lg:col-span-5 w-full mt-2 lg:mt-0">
          <div className="w-full max-w-md mx-auto bg-white rounded-2xl border border-[#c1c6d6]/40 shadow-xl overflow-hidden p-3 sm:p-4 flex flex-col gap-2.5 sm:gap-3">
            {/* Niche Selector Tabs inside Mockup */}
            <div className="flex items-center gap-1 p-1 bg-[#f1f3f7] rounded-xl text-xs font-semibold">
              <button
                type="button"
                onClick={() => handleToggleNiche('odonto')}
                className={`flex-1 py-1.5 px-1.5 sm:px-2 rounded-lg flex items-center justify-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs transition-all cursor-pointer ${
                  activeNiche === 'odonto'
                    ? 'bg-white text-[#1a73e8] shadow-xs font-bold'
                    : 'text-[#45474e] hover:text-[#191c20]'
                }`}
              >
                <span className="material-symbols-outlined text-[15px] sm:text-[16px]">dentistry</span>
                <span>Odontologia</span>
              </button>
              <button
                type="button"
                onClick={() => handleToggleNiche('estetica')}
                className={`flex-1 py-1.5 px-1.5 sm:px-2 rounded-lg flex items-center justify-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs transition-all cursor-pointer ${
                  activeNiche === 'estetica'
                    ? 'bg-white text-[#1a73e8] shadow-xs font-bold'
                    : 'text-[#45474e] hover:text-[#191c20]'
                }`}
              >
                <span className="material-symbols-outlined text-[15px] sm:text-[16px]">spa</span>
                <span>Clínica Estética</span>
              </button>
            </div>

            {/* Interactive Search Input Mock */}
            <div className="flex items-center justify-between px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full bg-[#f1f3f7] border border-[#c1c6d6]/30 shadow-inner">
              <div className="flex items-center gap-1.5 min-w-0 flex-1">
                <span className="material-symbols-outlined text-[#1a73e8] text-[17px] sm:text-[19px]">search</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="text-xs sm:text-sm font-medium text-[#191c20] bg-transparent border-none outline-none w-full truncate"
                  aria-label="Simular busca do Google"
                />
              </div>
              <div className="flex items-center gap-1 text-[#45474e] flex-shrink-0">
                <button
                  onClick={() =>
                    setSearchQuery(
                      activeNiche === 'odonto'
                        ? 'implante dentario e alinhador perto de mim'
                        : 'harmonização facial e botox perto de mim'
                    )
                  }
                  className="hover:text-[#1a73e8] p-0.5 transition-colors"
                  title="Alternar busca"
                >
                  <span className="material-symbols-outlined text-[16px] sm:text-[17px]">sync</span>
                </button>
                <span className="material-symbols-outlined text-[16px] sm:text-[17px]">photo_camera</span>
              </div>
            </div>

            {/* Google Filter Chips Slider */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[10px] sm:text-[11px] -mx-1 px-1">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveSearchFilter(f)}
                  className={`px-2 sm:px-2.5 py-1 rounded-full whitespace-nowrap flex items-center gap-1 transition-all cursor-pointer ${
                    activeSearchFilter === f
                      ? 'bg-[#1a73e8]/10 text-[#1a73e8] font-semibold border border-[#1a73e8]/30'
                      : 'bg-[#f1f3f7] text-[#45474e] hover:bg-[#e9e7eb]'
                  }`}
                >
                  {activeSearchFilter === f && (
                    <span className="material-symbols-outlined text-[12px]">check</span>
                  )}
                  {f}
                </button>
              ))}
            </div>

            {/* Native Map View Representation */}
            <div className="w-full h-28 sm:h-36 rounded-xl bg-slate-100 relative overflow-hidden border border-[#c1c6d6]/30 flex items-center justify-center">
              {/* Grid street pattern representation */}
              <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#1a73e8_1px,transparent_1px)] [background-size:12px_12px]" />
              
              {/* Radius circle */}
              <div className="absolute w-20 sm:w-24 h-20 sm:h-24 rounded-full border border-[#1a73e8]/40 bg-[#1a73e8]/5 pointer-events-none animate-pulse" />

              {/* Location Marker Pin */}
              <div className="relative flex flex-col items-center animate-bounce duration-1000 z-10">
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${activeNiche === 'odonto' ? 'bg-[#0b57d0]' : 'bg-[#7b1fa2]'} text-white flex items-center justify-center shadow-lg border-2 border-white`}>
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px]">
                    {activeNiche === 'odonto' ? 'dentistry' : 'spa'}
                  </span>
                </div>
                <div className="w-2 h-1 bg-black/30 rounded-full blur-[1px]"></div>
              </div>

              {/* Top Left Badge */}
              <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded-full flex items-center gap-1 text-[9px] sm:text-[10px] font-bold text-[#191c20] shadow-xs border border-[#c1c6d6]/30">
                <span className="w-2 h-2 rounded-full bg-[#006e2c] animate-pulse"></span>
                <span>1º Lugar no Raio 3.5km</span>
              </div>

              {/* Simulated distance tag */}
              <div className="absolute bottom-2 right-2 bg-[#202124]/85 text-[#f1f0f4] text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-md">
                <span>350m de distância</span>
              </div>
            </div>

            {/* Organic #1 Pack Profile Card */}
            <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#f8f9fc] border border-[#c1c6d6]/30 flex flex-col gap-1.5 sm:gap-2">
              <div className="flex items-center justify-between text-[10px] sm:text-[11px]">
                <span className="px-1.5 py-0.5 rounded bg-[#1a73e8] text-white font-bold uppercase tracking-wider text-[8px] sm:text-[9px]">
                  Patrocinado • 1º Resultado
                </span>
                <span className="text-[#006e2c] font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#006e2c]"></span>{' '}
                  {activeNiche === 'odonto' ? 'Aberto até 19:30' : 'Hora Marcada'}
                </span>
              </div>

              <div>
                <h2 className="text-xs sm:text-base font-bold text-[#191c20] leading-snug">
                  {activeNiche === 'odonto' ? 'Instituto Odontológico Dr. André Martins' : 'Clínica Lumina Estética & Laser'}
                </h2>
                <p className="text-[11px] sm:text-xs text-[#45474e] line-clamp-1">
                  {activeNiche === 'odonto'
                    ? 'Implantes, Alinhadores e Estética Orofacial • Recepção Ágil'
                    : 'Biomedicina Esteta • Harmonização, Botox e Laser'}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 text-xs">
                <span className="font-bold text-[#191c20] text-xs">4.9</span>
                <div className="flex items-center text-[#FBBC04]">
                  <span className="material-symbols-outlined text-[13px] sm:text-[15px] fill">star</span>
                  <span className="material-symbols-outlined text-[13px] sm:text-[15px] fill">star</span>
                  <span className="material-symbols-outlined text-[13px] sm:text-[15px] fill">star</span>
                  <span className="material-symbols-outlined text-[13px] sm:text-[15px] fill">star</span>
                  <span className="material-symbols-outlined text-[13px] sm:text-[15px] fill">star</span>
                </div>
                <span className="text-[#45474e] text-[10px] sm:text-[11px]">(196 avaliações)</span>
              </div>

              {/* Action buttons in Mobile Google Maps standard */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => handleSimulatedAction('Ligar')}
                  className="min-h-[40px] rounded-xl bg-[#e1e3e8] active:bg-[#d8e2ff] text-[#1a73e8] text-[11px] sm:text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  aria-label="Simular ligação telefônica"
                >
                  <span className="material-symbols-outlined text-[16px]">call</span> Ligar
                </button>
                <button
                  type="button"
                  onClick={() => handleSimulatedAction('Rota')}
                  className="min-h-[40px] rounded-xl bg-[#1a73e8] active:brightness-90 text-white text-[11px] sm:text-xs font-semibold flex items-center justify-center gap-1 shadow-xs transition-colors cursor-pointer"
                  aria-label="Simular traçado de rota no GPS"
                >
                  <span className="material-symbols-outlined text-[16px]">directions</span> Rota
                </button>
                <button
                  type="button"
                  onClick={() => handleSimulatedAction('WhatsApp')}
                  className="min-h-[40px] rounded-xl bg-[#006e2c] active:brightness-90 text-white text-[11px] sm:text-xs font-semibold flex items-center justify-center gap-1 shadow-xs transition-colors cursor-pointer"
                  aria-label="Abrir conversa no WhatsApp comercial"
                >
                  <WhatsappIcon size={15} />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Interaction Toast Notification */}
            {interactionToast && (
              <div className="p-2.5 rounded-xl bg-[#d8e2ff] text-[#001a41] text-xs font-medium border border-[#1a73e8]/30 animate-in fade-in duration-200 flex items-center justify-between">
                <span className="text-[11px] sm:text-xs">{interactionToast}</span>
                <button
                  onClick={() => setInteractionToast(null)}
                  className="text-[#001a41] hover:text-[#1a73e8] ml-2 text-sm p-1"
                >
                  ✕
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
