/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { GargalosSection } from './components/GargalosSection';
import { FrentesSection } from './components/FrentesSection';
import { CasesSection } from './components/CasesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CalculatorSection } from './components/CalculatorSection';
import { AuditFormSection } from './components/AuditFormSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';
import { INITIAL_CONFIG } from './data/initialData';
import { ContactConfig } from './types';

export default function App() {
  // Load config with localStorage fallback
  const [config] = useState<ContactConfig>(() => {
    try {
      const saved = localStorage.getItem('ricks_consultoria_config');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure confirmed phone number +5562992231843 and email are preserved
        return {
          ...parsed,
          whatsappNumber: INITIAL_CONFIG.whatsappNumber,
          whatsappDisplay: INITIAL_CONFIG.whatsappDisplay,
          leadDestinationEmail: INITIAL_CONFIG.leadDestinationEmail,
        };
      }
      return INITIAL_CONFIG;
    } catch {
      return INITIAL_CONFIG;
    }
  });

  // Persist config
  useEffect(() => {
    try {
      localStorage.setItem('ricks_consultoria_config', JSON.stringify(config));
    } catch (e) {
      console.error('Failed to save config to localStorage', e);
    }
  }, [config]);

  return (
    <div className="min-h-screen bg-[#fafafc] text-[#191c20] flex flex-col selection:bg-[#d8e2ff] selection:text-[#004493]">
      {/* Navigation without internal lead panels */}
      <Navbar config={config} />

      {/* Main Sections */}
      <main className="w-full flex-1 overflow-x-clip">
        {/* 1. Hero Section */}
        <HeroSection
          config={config}
          onOpenAudit={() => {
            const el = document.getElementById('contato');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Gargalos Locais da Clínica Odontológica & de Estética */}
        <GargalosSection />

        {/* 3. As 5 Frentes de Domínio Local */}
        <FrentesSection />

        {/* 4. Cases Reais com ROI */}
        <CasesSection />

        {/* 5. Depoimentos de Clientes & Prova Social */}
        <TestimonialsSection />

        {/* 6. Calculadora Interativa de Oportunidades */}
        <CalculatorSection config={config} />

        {/* 6. Formulário de Auditoria Gratuita (Leads encaminhados direto para o e-mail) */}
        <AuditFormSection config={config} />

        {/* 7. FAQ */}
        <FaqSection />

        {/* 8. CTA Final */}
        <CtaBanner config={config} />
      </main>

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsapp config={config} />

      {/* Footer */}
      <Footer config={config} />
    </div>
  );
}
