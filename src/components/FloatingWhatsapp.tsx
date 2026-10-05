import React from 'react';
import { ContactConfig } from '../types';
import { WhatsappIcon } from './WhatsappIcon';
import { DEFAULT_WHATSAPP_MESSAGE } from '../data/initialData';
import { trackEvent } from '../utils/analytics';

interface FloatingWhatsappProps {
  config: ContactConfig;
}

export const FloatingWhatsapp: React.FC<FloatingWhatsappProps> = ({ config }) => {
  const getWhatsappUrl = () => {
    const text = encodeURIComponent(DEFAULT_WHATSAPP_MESSAGE);
    return `https://wa.me/${config.whatsappNumber.replace(/\D/g, '')}?text=${text}`;
  };

  return (
    <aside className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-3.5 sm:bottom-6 sm:right-6 z-50">
      <a
        href={getWhatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('contact', { method: 'whatsapp', location: 'floating_button' })}
        aria-label="Agendar conversa no WhatsApp"
        className="h-12 sm:h-14 px-3 sm:px-5 rounded-full bg-[#006e2c] hover:bg-[#005320] text-white shadow-[0_4px_22px_rgba(0,110,44,0.4)] flex items-center gap-2 sm:gap-2.5 hover:scale-105 active:scale-95 transition-all group cursor-pointer border border-[#86f898]/40"
      >
        <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#86f898] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-[#89fa9b]"></span>
        </span>
        <WhatsappIcon size={24} />
        <span className="text-xs sm:text-sm font-bold tracking-wide hidden min-[380px]:inline">
          Agendar Conversa
        </span>
      </a>
    </aside>
  );
};
