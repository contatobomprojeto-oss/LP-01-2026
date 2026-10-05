import React, { useState } from 'react';
import { ContactConfig } from '../types';
import { WhatsappIcon } from './WhatsappIcon';
import { RicksLogo } from './RicksLogo';
import { DEFAULT_WHATSAPP_MESSAGE } from '../data/initialData';

interface NavbarProps {
  config: ContactConfig;
}

export const Navbar: React.FC<NavbarProps> = ({ config }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const getWhatsappUrl = () => {
    const text = encodeURIComponent(DEFAULT_WHATSAPP_MESSAGE);
    return `https://wa.me/${config.whatsappNumber.replace(/\D/g, '')}?text=${text}`;
  };

  const navLinks = [
    { label: 'Gargalos Locais', href: '#problemas' },
    { label: '5 Frentes Ricks', href: '#frentes' },
    { label: 'Cases Reais', href: '#cases' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Calculadora', href: '#calculadora' },
    { label: 'Dúvidas', href: '#faq' },
    { label: 'Diagnóstico Grátis', href: '#contato', isHighlight: true },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#e9e7eb]/90 border-b border-[#c1c6d6]/30 py-1.5 px-3 text-center text-[10px] sm:text-xs font-medium text-[#45474e] flex items-center justify-center gap-1.5 sm:gap-2 leading-tight">
        <span className="inline-flex items-center gap-1 text-[#1a73e8] font-bold">
          <span className="material-symbols-outlined text-[13px] sm:text-[15px] text-[#1a73e8]">verified</span>
          Google Partner Specialist
        </span>
        <span>•</span>
        <span>Clínicas Odontológicas & Clínicas de Estética</span>
        <span className="hidden sm:inline">•</span>
        <span className="hidden sm:inline-flex items-center gap-1 text-[#006e2c] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#006e2c] animate-pulse"></span>
          Consultoria de Alta Performance
        </span>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#c1c6d6]/30 transition-all shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 h-14 sm:h-20 flex items-center justify-between gap-2">
          {/* Brand Logo with stylized unique R symbol */}
          <a
            href="#"
            className="flex items-center flex-shrink-0 py-1"
            aria-label="Ricks Marketing - Início"
          >
            <RicksLogo size="md" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#45474e]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 ${
                  link.isHighlight
                    ? 'text-[#1a73e8] font-semibold hover:text-[#1557b0]'
                    : 'hover:text-[#1a73e8]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
            {/* WhatsApp CTA */}
            <a
              href={getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 sm:h-11 px-3.5 sm:px-5 rounded-full bg-[#006e2c] hover:bg-[#005320] active:scale-95 text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-sm transition-all"
              aria-label="Contato direto no WhatsApp"
            >
              <WhatsappIcon size={16} />
              <span className="hidden min-[380px]:inline">WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f1f3f7] flex items-center justify-center text-[#191c20] hover:bg-[#e9e7eb] active:scale-95 transition-all cursor-pointer"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            >
              <span className="material-symbols-outlined text-[20px] sm:text-[22px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#c1c6d6]/30 bg-white/98 backdrop-blur-lg px-4 py-4 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all ${
                  link.isHighlight
                    ? 'text-[#1a73e8] bg-[#d8e2ff]/50'
                    : 'text-[#191c20] hover:bg-[#f1f3f7]'
                }`}
              >
                <span>{link.label}</span>
                <span className="material-symbols-outlined text-[18px] opacity-40">chevron_right</span>
              </a>
            ))}
            <div className="pt-2 border-t border-[#c1c6d6]/30 flex flex-col gap-2">
              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-[46px] py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-[#006e2c] flex items-center justify-center gap-2 shadow-xs"
              >
                <WhatsappIcon size={18} />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
