import React, { useState, useEffect } from 'react';
import { Lead } from '../types';
import { WhatsappIcon } from './WhatsappIcon';

interface LeadsModalProps {
  isOpen: boolean;
  onClose: () => void;
  leads: Lead[];
  onUpdateStatus: (id: string, status: Lead['status']) => void;
  onDeleteLead?: (id: string) => void;
  destinationEmail: string;
  whatsappNumber: string;
}

const DEFAULT_ADMIN_PASSWORD = 'ricks';

export const LeadsModal: React.FC<LeadsModalProps> = ({
  isOpen,
  onClose,
  leads,
  onUpdateStatus,
  onDeleteLead,
  destinationEmail,
  whatsappNumber,
}) => {
  const [mainTab, setMainTab] = useState<'leads' | 'logo'>('leads');
  const [filterStatus, setFilterStatus] = useState<string>('todos');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('ricks_admin_auth') === 'true';
  });

  useEffect(() => {
    if (isOpen) {
      setPasswordError(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const storedPass = localStorage.getItem('ricks_admin_pass') || DEFAULT_ADMIN_PASSWORD;
    if (passwordInput.trim() === storedPass) {
      setIsAuthenticated(true);
      sessionStorage.setItem('ricks_admin_auth', 'true');
      setPasswordError(null);
      setPasswordInput('');
    } else {
      setPasswordError('Senha incorreta. Tente novamente.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('ricks_admin_auth');
  };

  const filtered = leads.filter((lead) => {
    const matchesStatus = filterStatus === 'todos' || lead.status === filterStatus;
    const term = searchTerm.toLowerCase();
    const clinicaName = (lead.clinica || lead.farmacia || '').toLowerCase();
    const matchesSearch =
      !searchTerm ||
      lead.nome.toLowerCase().includes(term) ||
      clinicaName.includes(term) ||
      lead.whatsapp.includes(term) ||
      lead.email.toLowerCase().includes(term);
    return matchesStatus && matchesSearch;
  });

  const exportCsv = () => {
    const headers = ['Data', 'Nome', 'Clínica', 'Tipo', 'WhatsApp', 'Email', 'Volume', 'Status'];
    const rows = leads.map((l) => [
      new Date(l.data).toLocaleString('pt-BR'),
      l.nome,
      l.clinica || l.farmacia || '',
      l.tipoNegocio || 'outro',
      l.whatsapp,
      l.email,
      l.volume,
      l.status,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.map((x) => `"${x}"`).join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `leads_ricks_marketing_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusBadge = (status: Lead['status']) => {
    switch (status) {
      case 'novo':
        return 'bg-[#dc392c]/10 text-[#dc392c] border-[#dc392c]/20';
      case 'em_contato':
        return 'bg-[#1a73e8]/10 text-[#1a73e8] border-[#1a73e8]/20';
      case 'qualificado':
        return 'bg-[#7b1fa2]/10 text-[#7b1fa2] border-[#7b1fa2]/20';
      case 'convertido':
        return 'bg-[#006e2c]/10 text-[#006e2c] border-[#006e2c]/20';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusLabel = (status: Lead['status']) => {
    switch (status) {
      case 'novo':
        return 'Novo';
      case 'em_contato':
        return 'Em Contato';
      case 'qualificado':
        return 'Qualificado';
      case 'convertido':
        return 'Cliente Fechado';
      default:
        return status;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col border border-[#c1c6d6]/40 overflow-hidden">
        {/* If not authenticated, show password lock screen */}
        {!isAuthenticated ? (
          <div className="p-6 sm:p-12 flex flex-col items-center justify-center text-center gap-5 max-w-md mx-auto my-auto">
            <div className="w-16 h-16 rounded-full bg-[#1a73e8]/10 text-[#1a73e8] flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-[32px]">lock</span>
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="text-xl sm:text-2xl font-black text-[#191c20]">
                Acesso Restrito ao Gestor
              </h2>
              <p className="text-xs sm:text-sm text-[#45474e]">
                Este painel contém dados sigilosos e é protegido por senha. Apenas você pode visualizá-lo.
              </p>
            </div>

            <form onSubmit={handlePasswordSubmit} className="w-full flex flex-col gap-3">
              <input
                type="password"
                required
                autoFocus
                placeholder="Digite a senha de administrador"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full min-h-[46px] px-4 rounded-xl bg-[#f1f3f7] border border-[#c1c6d6]/40 text-sm text-[#191c20] text-center focus:border-[#1a73e8] focus:bg-white outline-none transition-all"
              />

              {passwordError && (
                <span className="text-xs text-[#dc392c] font-semibold">
                  {passwordError}
                </span>
              )}

              <button
                type="submit"
                className="w-full min-h-[46px] rounded-xl bg-[#1a73e8] hover:bg-[#1557b0] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">vpn_key</span>
                <span>Desbloquear Painel</span>
              </button>
            </form>

            <button
              onClick={onClose}
              className="text-xs text-[#45474e] hover:text-[#191c20] underline transition-colors cursor-pointer"
            >
              Cancelar e voltar à página
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-[#c1c6d6]/30 flex items-center justify-between bg-[#f8f9fc]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#006e2c]/10 text-[#006e2c] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">verified_user</span>
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-[#191c20]">
                    Painel do Gestor • Ricks Marketing
                  </h2>
                  <p className="text-xs text-[#45474e]">
                    Acesso exclusivo de Henrique Ferraz
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {mainTab === 'leads' && (
                  <button
                    onClick={exportCsv}
                    className="px-3 py-1.5 rounded-xl bg-white border border-[#c1c6d6]/40 hover:bg-[#f1f3f7] text-[#191c20] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    title="Exportar planilha CSV"
                  >
                    <span className="material-symbols-outlined text-[16px] text-[#006e2c]">download</span>
                    <span className="hidden sm:inline">Exportar CSV</span>
                  </button>
                )}

                <button
                  onClick={handleLogout}
                  className="px-3 py-1.5 rounded-xl bg-white border border-[#c1c6d6]/40 hover:bg-[#f1f3f7] text-[#727785] hover:text-[#dc392c] text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                  title="Bloquear painel"
                >
                  <span className="material-symbols-outlined text-[16px]">lock</span>
                  <span className="hidden sm:inline">Bloquear</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-white border border-[#c1c6d6]/30 text-[#45474e] hover:text-[#191c20] hover:bg-[#f1f3f7] flex items-center justify-center cursor-pointer transition-colors"
                  aria-label="Fechar painel"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
            </div>

            {/* Main Tabs Navigation */}
            <div className="flex items-center px-4 sm:px-6 bg-[#f1f3f7] border-b border-[#c1c6d6]/30 gap-2 pt-2">
              <button
                type="button"
                onClick={() => setMainTab('leads')}
                className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-all cursor-pointer flex items-center gap-2 ${
                  mainTab === 'leads'
                    ? 'bg-white text-[#1a73e8] border-t-2 border-[#1a73e8] shadow-xs'
                    : 'text-[#45474e] hover:text-[#191c20]'
                }`}
              >
                <span className="material-symbols-outlined text-[17px]">contacts</span>
                <span>Leads Recebidos ({leads.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setMainTab('logo')}
                className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-all cursor-pointer flex items-center gap-2 ${
                  mainTab === 'logo'
                    ? 'bg-white text-[#1a73e8] border-t-2 border-[#1a73e8] shadow-xs'
                    : 'text-[#45474e] hover:text-[#191c20]'
                }`}
              >
                <span className="material-symbols-outlined text-[17px]">download</span>
                <span>Exportar Logomarca (PNG)</span>
                <span className="px-1.5 py-0.2 rounded-full bg-[#006e2c] text-white text-[9px] font-bold">
                  Novo
                </span>
              </button>
            </div>

            {/* TAB 1: LEADS CONTENT */}
            {mainTab === 'leads' && (
              <>
                {/* Informational Destination Banner */}
                <div className="px-4 sm:px-6 py-2.5 bg-[#e8f0fe] border-b border-[#1a73e8]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#001a41]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-[#1a73e8]">forward_to_inbox</span>
                    <span>
                      <strong>Destino dos Formulários:</strong> Encaminhados para <strong>{destinationEmail}</strong>.
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-[#006e2c]">chat</span>
                    <span>
                      <strong>WhatsApp Comercial:</strong> {whatsappNumber}
                    </span>
                  </div>
                </div>

                {/* Filter bar */}
                <div className="p-3 sm:p-4 border-b border-[#c1c6d6]/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white">
                  <div className="flex items-center gap-2 flex-1 max-w-sm px-3 py-1.5 rounded-xl bg-[#f1f3f7] border border-[#c1c6d6]/30">
                    <span className="material-symbols-outlined text-[18px] text-[#727785]">search</span>
                    <input
                      type="text"
                      placeholder="Buscar por nome, clínica, telefone..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="bg-transparent text-xs sm:text-sm text-[#191c20] outline-none w-full"
                    />
                  </div>

                  <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1 sm:pb-0">
                    {[
                      { id: 'todos', label: `Todos (${leads.length})` },
                      { id: 'novo', label: 'Novos' },
                      { id: 'em_contato', label: 'Em Contato' },
                      { id: 'qualificado', label: 'Qualificados' },
                      { id: 'convertido', label: 'Convertidos' },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setFilterStatus(tab.id)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                          filterStatus === tab.id
                            ? 'bg-[#1a73e8] text-white shadow-xs'
                            : 'bg-[#f1f3f7] text-[#45474e] hover:bg-[#e9e7eb]'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Leads Table / List */}
                <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-3">
                  {filtered.length === 0 ? (
                    <div className="py-14 flex flex-col items-center justify-center text-center gap-3 text-[#45474e]">
                      <div className="w-14 h-14 rounded-2xl bg-[#f1f3f7] flex items-center justify-center text-[#727785]">
                        <span className="material-symbols-outlined text-[32px]">inbox</span>
                      </div>
                      <div className="max-w-md">
                        <p className="text-sm font-bold text-[#191c20]">Nenhum lead registrado ainda.</p>
                        <p className="text-xs text-[#727785] mt-1 leading-relaxed">
                          Os leads de demonstração fictícios foram removidos. Quando um visitante real preencher o formulário no site, ele aparecerá instantaneamente aqui e no seu e-mail ({destinationEmail}).
                        </p>
                      </div>
                    </div>
                  ) : (
                    filtered.map((lead) => {
                      const cleanPhone = lead.whatsapp.replace(/\D/g, '');
                      const waUrl = `https://wa.me/55${cleanPhone.replace(/^55/, '')}?text=${encodeURIComponent(
                        `Olá ${lead.nome}, aqui é Henrique da Ricks Marketing! Recebi sua solicitação de auditoria para ${lead.clinica || lead.farmacia}. Podemos agendar nossa conversa?`
                      )}`;

                      return (
                        <div
                          key={lead.id}
                          className="p-4 rounded-2xl bg-white border border-[#c1c6d6]/30 hover:border-[#1a73e8]/40 shadow-xs transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-4"
                        >
                          <div className="flex items-start gap-3 min-w-0 flex-1">
                            <div className="w-10 h-10 rounded-2xl bg-[#f1f3f7] text-[#1a73e8] flex items-center justify-center flex-shrink-0 font-extrabold text-sm">
                              {lead.nome.slice(0, 2).toUpperCase()}
                            </div>

                            <div className="flex flex-col gap-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="text-sm sm:text-base font-bold text-[#191c20]">
                                  {lead.nome}
                                </span>
                                <span
                                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getStatusBadge(
                                    lead.status
                                  )}`}
                                >
                                  {getStatusLabel(lead.status)}
                                </span>
                                {lead.tipoNegocio && (
                                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#f1f3f7] text-[#45474e]">
                                    {lead.tipoNegocio === 'odontologia'
                                      ? 'Odontologia'
                                      : lead.tipoNegocio === 'estetica'
                                      ? 'Estética'
                                      : 'Saúde'}
                                  </span>
                                )}
                              </div>

                              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#45474e]">
                                <span className="flex items-center gap-1 font-semibold text-[#191c20]">
                                  <span className="material-symbols-outlined text-[15px] text-[#1a73e8]">domain</span>
                                  {lead.clinica || lead.farmacia}
                                </span>

                                <span className="flex items-center gap-1 text-[#006e2c] font-medium">
                                  <span className="material-symbols-outlined text-[15px]">call</span>
                                  {lead.whatsapp}
                                </span>

                                <span className="flex items-center gap-1 text-[#727785]">
                                  <span className="material-symbols-outlined text-[15px]">mail</span>
                                  {lead.email}
                                </span>

                                <span className="text-[11px] text-[#727785]">
                                  Vol: {lead.volume}
                                </span>

                                <span className="text-[11px] text-[#727785]">
                                  {new Date(lead.data).toLocaleString('pt-BR', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                  })}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-2 flex-shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-[#c1c6d6]/20">
                            <select
                              value={lead.status}
                              onChange={(e) => onUpdateStatus(lead.id, e.target.value as Lead['status'])}
                              className="px-2.5 py-1.5 rounded-xl bg-[#f1f3f7] text-xs font-semibold text-[#191c20] border border-[#c1c6d6]/30 focus:border-[#1a73e8] outline-none cursor-pointer"
                              title="Alterar status do lead"
                            >
                              <option value="novo">Novo</option>
                              <option value="em_contato">Em Contato</option>
                              <option value="qualificado">Qualificado</option>
                              <option value="convertido">Convertido</option>
                            </select>

                            <a
                              href={waUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3.5 py-1.5 rounded-xl bg-[#006e2c] hover:bg-[#005320] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors"
                              title="Chamar cliente no WhatsApp"
                            >
                              <WhatsappIcon size={14} />
                              <span>WhatsApp</span>
                            </a>

                            {onDeleteLead && (
                              <button
                                onClick={() => onDeleteLead(lead.id)}
                                className="w-8 h-8 rounded-xl bg-white hover:bg-[#dc392c]/10 text-[#727785] hover:text-[#dc392c] border border-[#c1c6d6]/30 flex items-center justify-center transition-colors cursor-pointer"
                                title="Remover lead"
                              >
                                <span className="material-symbols-outlined text-[16px]">delete</span>
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </>
            )}

            {/* TAB 2: LOGO EXPORT (PNG) */}
            {mainTab === 'logo' && (
              <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6 bg-[#fafafc]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#c1c6d6]/20 pb-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#191c20]">
                      Pacote Oficial de Logomarca Ricks Marketing (PNG)
                    </h3>
                    <p className="text-xs text-[#45474e]">
                      Arquivos em alta definição prontos para impressão, WhatsApp, Instagram e apresentações.
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#006e2c]/10 text-[#006e2c] w-fit">
                    ✓ Renderizado em Resolução Vetorial
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Card 1: Logo Horizontal Fundo Transparente */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#c1c6d6]/30 shadow-xs flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#191c20]">Logo Completa (Horizontal)</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#1a73e8]/10 text-[#1a73e8]">
                          1600 × 480 px
                        </span>
                      </div>
                      <p className="text-[11px] text-[#45474e]">
                        Fundo transparente. Ideal para cabeçalhos de propostas, documentos timbrados, sites e fundos claros.
                      </p>

                      {/* Preview Box with transparent checker pattern */}
                      <div className="w-full h-28 rounded-xl bg-[radial-gradient(#e1e3e8_1px,transparent_1px)] [background-size:8px_8px] bg-slate-50 border border-[#c1c6d6]/30 flex items-center justify-center p-3">
                        <img
                          src="/ricks-logo-completo-transparente.png"
                          alt="Logo Ricks Marketing Transparente"
                          className="max-h-16 max-w-full object-contain"
                        />
                      </div>
                    </div>

                    <a
                      href="/ricks-logo-completo-transparente.png"
                      download="ricks-marketing-logo-transparente.png"
                      className="min-h-[42px] px-4 rounded-xl bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">download</span>
                      <span>Baixar PNG Transparente (1600px)</span>
                    </a>
                  </div>

                  {/* Card 2: Logo Horizontal Fundo Escuro */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#c1c6d6]/30 shadow-xs flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#191c20]">Logo Completa (Fundo Escuro)</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#0b1329] text-white">
                          1600 × 480 px
                        </span>
                      </div>
                      <p className="text-[11px] text-[#45474e]">
                        Versão em alto contraste com fundo escuro executivo (#0b1329) e texto em branco e azul celeste.
                      </p>

                      {/* Preview Box */}
                      <div className="w-full h-28 rounded-xl bg-[#0b1329] border border-[#c1c6d6]/30 flex items-center justify-center p-3">
                        <img
                          src="/ricks-logo-completo-fundo-escuro.png"
                          alt="Logo Ricks Marketing Fundo Escuro"
                          className="max-h-16 max-w-full object-contain rounded-lg"
                        />
                      </div>
                    </div>

                    <a
                      href="/ricks-logo-completo-fundo-escuro.png"
                      download="ricks-marketing-logo-fundo-escuro.png"
                      className="min-h-[42px] px-4 rounded-xl bg-[#0b1329] hover:bg-[#191c20] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">download</span>
                      <span>Baixar PNG Fundo Escuro (1600px)</span>
                    </a>
                  </div>

                  {/* Card 3: Ícone Símbolo R (Ultra-HD 2048px Master) */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#c1c6d6]/30 shadow-xs flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#191c20]">Ícone Símbolo "R" (Master 2K)</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#006e2c]/10 text-[#006e2c]">
                          2048 × 2048 px
                        </span>
                      </div>
                      <p className="text-[11px] text-[#45474e]">
                        Resolução máxima para outdoors, camisetas, canecas, carimbos e materiais impressos.
                      </p>

                      <div className="w-full h-32 rounded-xl bg-[radial-gradient(#e1e3e8_1px,transparent_1px)] [background-size:8px_8px] bg-slate-50 border border-[#c1c6d6]/30 flex items-center justify-center p-3">
                        <img
                          src="/ricks-logo-icone-2048.png"
                          alt="Ícone Ricks Marketing 2K"
                          className="h-20 w-20 object-contain drop-shadow-md"
                        />
                      </div>
                    </div>

                    <a
                      href="/ricks-logo-icone-2048.png"
                      download="ricks-icone-master-2048px.png"
                      className="min-h-[42px] px-4 rounded-xl bg-[#006e2c] hover:bg-[#005320] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">download</span>
                      <span>Baixar Ícone Master 2K (2048px)</span>
                    </a>
                  </div>

                  {/* Card 4: Ícone para Redes Sociais & WhatsApp (1024px e 512px) */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#c1c6d6]/30 shadow-xs flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#191c20]">Ícone para Redes Sociais</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#1a73e8]/10 text-[#1a73e8]">
                          1024px & 512px
                        </span>
                      </div>
                      <p className="text-[11px] text-[#45474e]">
                        Dimensões quadradas exatas para foto de perfil do WhatsApp Business, Instagram e favicon.
                      </p>

                      <div className="w-full h-32 rounded-xl bg-slate-50 border border-[#c1c6d6]/30 flex items-center justify-center gap-6 p-3">
                        <div className="flex flex-col items-center gap-1">
                          <img
                            src="/ricks-logo-icone-1024.png"
                            alt="Ícone 1024"
                            className="h-16 w-16 rounded-full border-2 border-white shadow-md"
                          />
                          <span className="text-[9px] text-[#727785]">Preview Perfil</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <img
                            src="/ricks-logo-icone-512.png"
                            alt="Ícone 512"
                            className="h-12 w-12 rounded-xl shadow-xs"
                          />
                          <span className="text-[9px] text-[#727785]">App Icon</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href="/ricks-logo-icone-1024.png"
                        download="ricks-icone-perfil-1024px.png"
                        className="min-h-[42px] px-3 rounded-xl bg-[#f1f3f7] hover:bg-[#e9e7eb] text-[#191c20] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-[#c1c6d6]/40"
                      >
                        <span className="material-symbols-outlined text-[16px]">download</span>
                        <span>Baixar 1024px</span>
                      </a>
                      <a
                        href="/ricks-logo-icone-512.png"
                        download="ricks-icone-avatar-512px.png"
                        className="min-h-[42px] px-3 rounded-xl bg-[#f1f3f7] hover:bg-[#e9e7eb] text-[#191c20] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-[#c1c6d6]/40"
                      >
                        <span className="material-symbols-outlined text-[16px]">download</span>
                        <span>Baixar 512px</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
