import React, { useState } from 'react';

export const TechArchitectureSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [testResult, setTestResult] = useState<string | null>(null);

  const simulateApiTest = () => {
    setTestResult('Enviando payload de teste para /api/leads...');
    setTimeout(() => {
      setTestResult(
        JSON.stringify(
          {
            success: true,
            status: 201,
            message: 'Lead validado e direcionado com sucesso para a fila de WhatsApp e e-mail.',
            leadId: 'sim-' + Date.now(),
            timestamp: new Date().toISOString(),
          },
          null,
          2
        )
      );
    }, 400);
  };

  return (
    <section className="w-full py-8 sm:py-12 bg-[#f8f9fc] border-t border-[#c1c6d6]/20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        {/* Toggle Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#191c20]">
            <span className="material-symbols-outlined text-[#1a73e8] text-[20px]">terminal</span>
            <span>Integração Técnica do Formulário (Node.js API)</span>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-xs text-[#1a73e8] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>{isOpen ? 'Ocultar Endpoint' : 'Ver Endpoint'}</span>
            <span className="material-symbols-outlined text-[16px]">
              {isOpen ? 'expand_less' : 'expand_more'}
            </span>
          </button>
        </div>

        {/* Collapsible Code Snippet */}
        {isOpen && (
          <div className="rounded-2xl bg-[#202124] text-[#f1f0f4] p-4 sm:p-5 text-xs font-mono overflow-x-auto shadow-inner border border-[#c1c6d6]/30 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-[#727785]/30 mb-3">
              <span className="text-[#adc7ff] font-semibold">POST /api/leads (Node.js & Express)</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={simulateApiTest}
                  className="px-2.5 py-1 rounded bg-[#1a73e8] text-white text-[11px] font-sans hover:bg-[#1557b0] transition-colors cursor-pointer"
                >
                  Simular Requisição
                </button>
                <span className="text-[10px] text-[#c1c6d6]">REST API Ready</span>
              </div>
            </div>

            <pre className="text-[#adc7ff] leading-relaxed overflow-x-auto text-[11px] sm:text-xs">
              <code>{`// Endpoint pronto para persistência dos leads da Ricks Marketing
app.post('/api/leads', (req, res) => {
  const { nome, farmacia, cnpj, whatsapp, email, volume } = req.body;
  if (!nome || !farmacia || !whatsapp || !email) {
    return res.status(400).json({ error: 'Campos obrigatórios ausentes.' });
  }
  const lead = { 
    id: Date.now(), 
    nome, 
    farmacia, 
    cnpj, 
    whatsapp, 
    email, 
    volume, 
    data: new Date() 
  };
  
  // Direcionamento automatizado para o WhatsApp e e-mail configurados
  return res.status(201).json({ success: true, leadId: lead.id });
});`}</code>
            </pre>

            {testResult && (
              <div className="mt-3 p-3 rounded-lg bg-[#2f3033] border border-[#1a73e8]/40">
                <span className="text-[10px] text-[#89fa9b] block mb-1 font-sans">
                  Resposta da Simulação:
                </span>
                <pre className="text-[#89fa9b] text-[11px] leading-tight overflow-x-auto whitespace-pre-wrap">
                  {testResult}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
