import React, { useState } from 'react';
import { ContactConfig, Lead } from '../types';
import { WhatsappIcon } from './WhatsappIcon';

interface AuditFormSectionProps {
  config: ContactConfig;
  onAddLead?: (lead: Lead) => void;
}

export const AuditFormSection: React.FC<AuditFormSectionProps> = ({ config, onAddLead }) => {
  const [nome, setNome] = useState('');
  const [farmacia, setFarmacia] = useState('');
  const [tipoNegocio, setTipoNegocio] = useState<'farmacia' | 'estetica' | 'outro'>('farmacia');
  const [cnpj, setCnpj] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [volume, setVolume] = useState('1001-3000');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<Lead | null>(null);

  // Mask CNPJ: 00.000.000/0001-00
  const handleCnpjChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, '');
    if (v.length > 14) v = v.slice(0, 14);
    if (v.length > 12) {
      v = v.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
    } else if (v.length > 8) {
      v = v.replace(/^(\d{2})(\d{3})(\d{3})(\d+)/, '$1.$2.$3/$4');
    } else if (v.length > 5) {
      v = v.replace(/^(\d{2})(\d{3})(\d+)/, '$1.$2.$3');
    } else if (v.length > 2) {
      v = v.replace(/^(\d{2})(\d+)/, '$1.$2');
    }
    setCnpj(v);
  };

  // Mask Phone: (00) 00000-0000
  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, '');
    if (v.length > 11) v = v.slice(0, 11);
    if (v.length > 10) {
      v = v.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (v.length > 6) {
      v = v.replace(/^(\d{2})(\d{4})(\d+)/, '($1) $2-$3');
    } else if (v.length > 2) {
      v = v.replace(/^(\d{2})(\d+)/, '$1.$2');
    }
    setWhatsapp(v);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const destinationEmail = config.leadDestinationEmail || 'henrique.ferrazms@gmail.com';
    const segmentLabel =
      tipoNegocio === 'estetica'
        ? 'Clínica de Estética / Harmonização'
        : tipoNegocio === 'farmacia'
        ? 'Farmácia / Drogaria'
        : 'Consultório / Saúde Integrada';

    const newLead: Lead = {
      id: 'lead-' + Date.now(),
      nome,
      farmacia,
      tipoNegocio,
      cnpj: cnpj || undefined,
      whatsapp,
      email,
      volume,
      data: new Date().toISOString(),
      status: 'novo',
    };

    // Forward lead details directly to email
    try {
      await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(destinationEmail)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `[Novo Lead RickS Marketing] Auditoria Solicitada - ${farmacia}`,
          _template: 'table',
          'Nome do Gestor': nome,
          'Nome da Farmácia/Clínica': farmacia,
          'Segmento': segmentLabel,
          'WhatsApp Comercial': whatsapp,
          'E-mail Corporativo': email,
          'CNPJ': cnpj || 'Não informado',
          'Volume de Atendimentos': volume,
          'Data do Envio': new Date().toLocaleString('pt-BR'),
        }),
      });
    } catch {
      // In case of network error, continue smoothly
    }

    if (onAddLead) {
      onAddLead(newLead);
    }
    setSubmittedLead(newLead);
    setIsSubmitting(false);

    // Reset form
    setNome('');
    setFarmacia('');
    setTipoNegocio('farmacia');
    setCnpj('');
    setWhatsapp('');
    setEmail('');
    setVolume('1001-3000');
  };

  const getWhatsappConfirmationUrl = (lead: Lead) => {
    const text = encodeURIComponent(
      `Olá, quero melhorar meus resultados, vamos agendar uma conversa! Acabei de solicitar a auditoria no site para ${lead.farmacia} (Responsável: ${lead.nome}).`
    );
    return `https://wa.me/${config.whatsappNumber.replace(/\D/g, '')}?text=${text}`;
  };

  return (
    <section className="w-full py-10 sm:py-20 bg-[#f8f9fc] border-y border-[#c1c6d6]/20 px-3.5 sm:px-6" id="contato">
      <div className="max-w-3xl mx-auto flex flex-col gap-6 sm:gap-8">
        <div className="text-center flex flex-col items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-[#1a73e8]/10 text-[#1a73e8] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            Diagnóstico Sem Custo
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#191c20] tracking-tight leading-tight">
            Solicite a Auditoria Gratuita do seu Estabelecimento
          </h2>
          <p className="text-xs sm:text-base text-[#45474e] max-w-xl">
            Preencha os dados abaixo. Nossos especialistas farão uma varredura da sua farmácia ou clínica no Google e apresentarão os 3 pontos imediatos de melhoria.
          </p>
        </div>

        {submittedLead ? (
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-[#86f898] shadow-lg flex flex-col items-center text-center gap-4 animate-in fade-in duration-300">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#86f898]/30 text-[#006e2c] flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px] sm:text-[32px]">task_alt</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-extrabold text-[#191c20]">
              Auditoria Solicitada com Sucesso!
            </h3>
            <p className="text-xs sm:text-sm text-[#45474e] max-w-md">
              Os dados de <strong>{submittedLead.farmacia}</strong> foram recebidos e encaminhados diretamente para o e-mail do especialista (<strong>{config.leadDestinationEmail}</strong>). Entraremos em contato no WhatsApp <strong>{submittedLead.whatsapp}</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-2 w-full sm:w-auto">
              <a
                href={getWhatsappConfirmationUrl(submittedLead)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] px-6 rounded-xl sm:rounded-full bg-[#006e2c] hover:bg-[#005320] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all text-center"
              >
                <WhatsappIcon size={20} />
                <span>Falar no WhatsApp para Prioridade</span>
              </a>
              <button
                onClick={() => setSubmittedLead(null)}
                className="w-full sm:w-auto min-h-[46px] px-5 rounded-xl sm:rounded-full bg-[#f1f3f7] hover:bg-[#e9e7eb] text-[#191c20] text-xs sm:text-sm font-semibold transition-all cursor-pointer"
              >
                Enviar Outro Estabelecimento
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 border border-[#c1c6d6]/30 shadow-md flex flex-col gap-3.5 sm:gap-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#191c20]" htmlFor="lead-nome">
                  Nome do Proprietário / Gestor
                </label>
                <input
                  id="lead-nome"
                  type="text"
                  required
                  placeholder="Ex: Roberto / Dra. Camila"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="min-h-[48px] px-3.5 rounded-xl bg-[#f1f3f7] text-base sm:text-sm text-[#191c20] border border-[#c1c6d6]/30 focus:border-[#1a73e8] focus:bg-white transition-all outline-none"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#191c20]" htmlFor="lead-tipo">
                  Segmento do Estabelecimento
                </label>
                <select
                  id="lead-tipo"
                  value={tipoNegocio}
                  onChange={(e) => setTipoNegocio(e.target.value as any)}
                  className="min-h-[48px] px-3.5 rounded-xl bg-[#f1f3f7] text-base sm:text-sm text-[#191c20] border border-[#c1c6d6]/30 focus:border-[#1a73e8] focus:bg-white transition-all outline-none cursor-pointer"
                >
                  <option value="farmacia">Farmácia / Drogaria</option>
                  <option value="estetica">Clínica de Estética / Harmonização</option>
                  <option value="outro">Consultório / Centro de Saúde Integrada</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#191c20]" htmlFor="lead-farmacia">
                  Nome da Farmácia ou Clínica
                </label>
                <input
                  id="lead-farmacia"
                  type="text"
                  required
                  placeholder="Ex: Drogaria Santa Fé ou Clínica Belle"
                  value={farmacia}
                  onChange={(e) => setFarmacia(e.target.value)}
                  className="min-h-[48px] px-3.5 rounded-xl bg-[#f1f3f7] text-base sm:text-sm text-[#191c20] border border-[#c1c6d6]/30 focus:border-[#1a73e8] focus:bg-white transition-all outline-none"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#191c20]" htmlFor="lead-cnpj">
                  CNPJ (Opcional)
                </label>
                <input
                  id="lead-cnpj"
                  type="text"
                  maxLength={18}
                  placeholder="00.000.000/0001-00"
                  value={cnpj}
                  onChange={handleCnpjChange}
                  className="min-h-[48px] px-3.5 rounded-xl bg-[#f1f3f7] text-base sm:text-sm text-[#191c20] border border-[#c1c6d6]/30 focus:border-[#1a73e8] focus:bg-white transition-all outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#191c20]" htmlFor="lead-whatsapp">
                  WhatsApp Comercial com DDD
                </label>
                <input
                  id="lead-whatsapp"
                  type="tel"
                  required
                  placeholder="(62) 99999-9999"
                  value={whatsapp}
                  onChange={handleWhatsappChange}
                  className="min-h-[48px] px-3.5 rounded-xl bg-[#f1f3f7] text-base sm:text-sm text-[#191c20] border border-[#c1c6d6]/30 focus:border-[#1a73e8] focus:bg-white transition-all outline-none"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#191c20]" htmlFor="lead-email">
                  E-mail Corporativo
                </label>
                <input
                  id="lead-email"
                  type="email"
                  required
                  placeholder="contato@empresa.com.br"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="min-h-[48px] px-3.5 rounded-xl bg-[#f1f3f7] text-base sm:text-sm text-[#191c20] border border-[#c1c6d6]/30 focus:border-[#1a73e8] focus:bg-white transition-all outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#191c20]" htmlFor="lead-volume">
                Clientes ou pacientes atendidos por mês:
              </label>
              <select
                id="lead-volume"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="min-h-[48px] px-3.5 rounded-xl bg-[#f1f3f7] text-base sm:text-sm text-[#191c20] border border-[#c1c6d6]/30 focus:border-[#1a73e8] focus:bg-white transition-all outline-none cursor-pointer"
              >
                <option value="ate-500">Até 500 atendimentos/mês</option>
                <option value="501-1500">De 501 a 1.500 atendimentos/mês</option>
                <option value="1501-4000">De 1.501 a 4.000 atendimentos/mês</option>
                <option value="mais-4000">Mais de 4.000 atendimentos/mês</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="min-h-[50px] w-full rounded-2xl sm:rounded-full bg-[#1a73e8] hover:bg-[#1557b0] active:scale-98 text-white text-sm sm:text-base font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer disabled:opacity-75 mt-1"
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined text-[20px] animate-spin">sync</span>
                  <span>Enviando análise e gerando auditoria...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
                  <span>Solicitar Diagnóstico Gratuito</span>
                </>
              )}
            </button>

            <p className="text-[10px] sm:text-[11px] text-center text-[#45474e]">
              🔒 Seus dados estão em total sigilo. Consultoria sob rigorosa conformidade com a LGPD.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
