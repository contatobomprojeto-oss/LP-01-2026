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
import { LeadsModal } from './components/LeadsModal';
import { INITIAL_CONFIG, INITIAL_LEADS } from './data/initialData';
import { ContactConfig, Lead } from './types';

export default function App() {
  const [isLeadsModalOpen, setIsLeadsModalOpen] = useState(false);
  const [leads, setLeads] = useState<Lead[]>(() => {
    try {
      const saved = localStorage.getItem('ricks_leads');
      if (saved) {
        const parsed: Lead[] = JSON.parse(saved);
        // Exclude mock/demo leads so list only contains real incoming leads
        return parsed.filter(
          (l) => l.id !== 'lead-1' && l.id !== 'lead-2' && l.nome !== 'Dr. Roberto Fernandes'
        );
      }
      return [];
    } catch {
      return [];
    }
  });

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

  // Persist leads
  useEffect(() => {
    try {
      localStorage.setItem('ricks_leads', JSON.stringify(leads));
    } catch (e) {
      console.error('Failed to save leads to localStorage', e);
    }
  }, [leads]);

  // Persist config
  useEffect(() => {
    try {
      localStorage.setItem('ricks_consultoria_config', JSON.stringify(config));
    } catch (e) {
      console.error('Failed to save config to localStorage', e);
    }
  }, [config]);

  // Secret URL trigger (?admin or ?gestor)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.has('admin') || params.has('gestor')) {
        setIsLeadsModalOpen(true);
      }
    }
  }, []);

  // Keyboard shortcut Ctrl+Alt+L or Alt+L to toggle Leads Modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'l') || (e.altKey && e.key.toLowerCase() === 'l') || (e.ctrlKey && e.altKey && e.key.toLowerCase() === 'l')) {
        e.preventDefault();
        setIsLeadsModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleAddLead = (newLead: Lead) => {
    setLeads((prev) => [newLead, ...prev]);
  };

  const handleUpdateStatus = (id: string, status: Lead['status']) => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === id ? { ...lead, status } : lead))
    );
  };

  const handleDeleteLead = (id: string) => {
    setLeads((prev) => prev.filter((lead) => lead.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#fafafc] text-[#191c20] flex flex-col selection:bg-[#d8e2ff] selection:text-[#004493]">
      {/* Navigation with secret admin trigger on logo */}
      <Navbar config={config} onAdminTrigger={() => setIsLeadsModalOpen(true)} />

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

        {/* 6. Formulário de Auditoria Gratuita (Leads encaminhados direto para o e-mail e salvos no painel) */}
        <AuditFormSection config={config} onAddLead={handleAddLead} />

        {/* 7. FAQ */}
        <FaqSection />

        {/* 8. CTA Final */}
        <CtaBanner config={config} />
      </main>

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsapp config={config} />

      {/* Footer 100% público e limpo */}
      <Footer config={config} />

      {/* Central Privada de Leads (Protegida por senha - Apenas Gestor) */}
      <LeadsModal
        isOpen={isLeadsModalOpen}
        onClose={() => setIsLeadsModalOpen(false)}
        leads={leads}
        onUpdateStatus={handleUpdateStatus}
        onDeleteLead={handleDeleteLead}
        destinationEmail={config.leadDestinationEmail}
        whatsappNumber={config.whatsappDisplay || config.whatsappNumber}
      />
    </div>
  );
}
