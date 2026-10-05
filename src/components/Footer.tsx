import React from 'react';
import { ContactConfig } from '../types';
import { WhatsappIcon } from './WhatsappIcon';
import { RicksLogo } from './RicksLogo';

interface FooterProps {
  config: ContactConfig;
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
  return (
    <footer className="w-full bg-[#f1f3f7] border-t border-[#c1c6d6]/30 py-10 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="flex flex-col gap-3">
            <RicksLogo size="sm" />
            <p className="text-xs text-[#45474e] leading-relaxed">
              Consultoria de alta performance em aceleração comercial, Google Meu Negócio e atração de pacientes e clientes no WhatsApp para farmácias e clínicas de estética.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#e1e3e8] text-[#45474e] text-[11px] font-semibold w-fit">
              <span className="material-symbols-outlined text-[15px] text-[#006e2c]">verified</span>
              <span>Google Partner Specialist</span>
            </div>
          </div>

          {/* Soluções */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-[#191c20] uppercase tracking-wider">
              Soluções Especializadas
            </span>
            <a className="text-xs text-[#45474e] hover:text-[#1a73e8] transition-colors py-0.5" href="#frentes">
              Google Meu Negócio Local
            </a>
            <a className="text-xs text-[#45474e] hover:text-[#1a73e8] transition-colors py-0.5" href="#frentes">
              Tráfego Pago Geofencing
            </a>
            <a className="text-xs text-[#45474e] hover:text-[#1a73e8] transition-colors py-0.5" href="#frentes">
              Atendimento & WhatsApp Conversor
            </a>
            <a className="text-xs text-[#45474e] hover:text-[#1a73e8] transition-colors py-0.5" href="#frentes">
              Gestão de Avaliações 5★
            </a>
            <a className="text-xs text-[#45474e] hover:text-[#1a73e8] transition-colors py-0.5" href="#frentes">
              Auditoria de Posicionamento 360°
            </a>
          </div>

          {/* Links Rápidos */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-[#191c20] uppercase tracking-wider">
              Navegação Rápida
            </span>
            <a className="text-xs text-[#45474e] hover:text-[#1a73e8] transition-colors py-0.5" href="#problemas">
              Gargalos Locais
            </a>
            <a className="text-xs text-[#45474e] hover:text-[#1a73e8] transition-colors py-0.5" href="#cases">
              Resultados Comprovados
            </a>
            <a className="text-xs text-[#45474e] hover:text-[#1a73e8] transition-colors py-0.5" href="#calculadora">
              Calculadora de Faturamento
            </a>
            <a className="text-xs text-[#45474e] hover:text-[#1a73e8] transition-colors py-0.5" href="#faq">
              Perguntas Frequentes
            </a>
            <a className="text-xs text-[#45474e] hover:text-[#1a73e8] transition-colors py-0.5" href="#contato">
              Solicitar Diagnóstico
            </a>
          </div>

          {/* Atendimento */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-[#191c20] uppercase tracking-wider">
              Atendimento Direto
            </span>
            <a
              href={`mailto:${config.leadDestinationEmail}`}
              className="text-xs text-[#45474e] hover:text-[#1a73e8] transition-colors flex items-center gap-1.5 py-0.5"
            >
              <span className="material-symbols-outlined text-[16px] text-[#1a73e8]">mail</span>
              <span>{config.leadDestinationEmail}</span>
            </a>
            <a
              href={`https://wa.me/${config.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent('Olá, quero melhorar meus resultados, vamos agendar uma conversa')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#45474e] hover:text-[#006e2c] transition-colors flex items-center gap-1.5 py-0.5"
            >
              <WhatsappIcon size={16} className="text-[#006e2c]" />
              <span>WhatsApp: {config.whatsappDisplay || config.whatsappNumber}</span>
            </a>
            <p className="text-xs text-[#45474e] flex items-center gap-1.5 py-0.5">
              <span className="material-symbols-outlined text-[16px] text-[#45474e]">schedule</span>
              <span>Horário: 08:00 às 18:00</span>
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-[#c1c6d6]/30"></div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] text-[#45474e]">
          <p>© {new Date().getFullYear()} Ricks Marketing Consultoria para Saúde & Estética Ltda. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-[#1a73e8] transition-colors" href="#">Privacidade</a>
            <a className="hover:text-[#1a73e8] transition-colors" href="#">Segurança</a>
            <a className="hover:text-[#1a73e8] transition-colors" href="#">LGPD & Conformidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
