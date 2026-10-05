import React from 'react';
import { ContactConfig } from '../types';
import { WhatsappIcon } from './WhatsappIcon';
import { DEFAULT_WHATSAPP_MESSAGE } from '../data/initialData';

interface CtaBannerProps {
  config: ContactConfig;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ config }) => {
  const getWhatsappUrl = () => {
    const text = encodeURIComponent(DEFAULT_WHATSAPP_MESSAGE);
    return `https://wa.me/${config.whatsappNumber.replace(/\D/g, '')}?text=${text}`;
  };

  return (
    <section className="w-full py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#1a73e8] to-[#1557b0] rounded-2xl sm:rounded-3xl p-5 sm:p-12 text-white shadow-xl flex flex-col items-center text-center gap-4 sm:gap-6">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-[28px] sm:text-[32px] text-white">
            verified_user
          </span>
        </div>

        <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-2xl leading-tight">
          Não deixe os concorrentes da sua região continuarem recebendo os clientes e pacientes que deveriam ser seus.
        </h2>

        <p className="text-xs sm:text-base text-white/90 max-w-lg leading-relaxed">
          Agende uma sessão diagnóstica exclusiva de 25 minutos com nosso especialista no ecossistema Google para Farmácias e Clínicas de Estética.
        </p>

        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
          <a
            href={getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[50px] w-full sm:w-auto px-6 sm:px-8 rounded-xl sm:rounded-full bg-[#006e2c] hover:bg-[#005320] active:scale-98 text-white text-sm sm:text-base font-bold flex items-center justify-center gap-2 shadow-lg transition-all text-center"
          >
            <WhatsappIcon size={20} />
            <span>Falar Agora no WhatsApp</span>
          </a>
          <a
            href="#contato"
            className="min-h-[48px] w-full sm:w-auto px-6 sm:px-8 rounded-xl sm:rounded-full bg-white text-[#1a73e8] hover:bg-[#f8f9fc] active:scale-98 text-sm sm:text-base font-bold flex items-center justify-center transition-all text-center"
          >
            <span>Solicitar Diagnóstico</span>
          </a>
        </div>

        <div className="flex items-center gap-1 text-[11px] text-white/80 pt-1">
          <span className="material-symbols-outlined text-[15px]">lock</span>
          <span>Atendimento consultivo sigiloso • Exclusividade por bairro / região</span>
        </div>
      </div>
    </section>
  );
};
