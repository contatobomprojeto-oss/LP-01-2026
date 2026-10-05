import React, { useState } from 'react';
import { ContactConfig } from '../types';
import { WhatsappIcon } from './WhatsappIcon';

interface CalculatorSectionProps {
  config: ContactConfig;
}

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({ config }) => {
  const [clientes, setClientes] = useState(1800);
  const [ticket, setTicket] = useState(70);
  const [taxa, setTaxa] = useState(20);

  const formatBRL = (valor: number) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const novosClientes = Math.round(clientes * (taxa / 100));
  const fatMensal = novosClientes * ticket;
  const fatAnual = fatMensal * 12;

  const getWhatsappSimulatorUrl = () => {
    const text = encodeURIComponent(
      `Olá, quero melhorar meus resultados, vamos agendar uma conversa! Fiz a simulação no site: ${clientes.toLocaleString(
        'pt-BR'
      )} clientes/mês com ticket de ${formatBRL(ticket)}. Potencial estimado de +${novosClientes.toLocaleString(
        'pt-BR'
      )} atendimentos e ${formatBRL(fatMensal)}/mês adicional.`
    );
    return `https://wa.me/${config.whatsappNumber.replace(/\D/g, '')}?text=${text}`;
  };

  const applyPreset = (presetClientes: number, presetTicket: number, presetTaxa: number) => {
    setClientes(presetClientes);
    setTicket(presetTicket);
    setTaxa(presetTaxa);
  };

  return (
    <section className="w-full py-10 sm:py-20 px-3.5 sm:px-6 max-w-7xl mx-auto" id="calculadora">
      <div className="flex flex-col gap-6 sm:gap-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-[#1a73e8]/10 text-[#1a73e8] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            Simulador de Crescimento
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#191c20] tracking-tight leading-tight">
            Calculadora de Oportunidades
          </h2>
          <p className="text-xs sm:text-base text-[#45474e] leading-relaxed">
            Arraste os controles abaixo para estimar em tempo real quanto de faturamento adicional sua farmácia ou clínica de estética pode destravar.
          </p>

          {/* Quick Presets */}
          <div className="w-full pt-1">
            <span className="text-[11px] sm:text-xs text-[#45474e] font-medium block mb-2 text-center">Cenários rápidos:</span>
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-2">
              <button
                onClick={() => applyPreset(900, 55, 15)}
                className="min-h-[40px] px-3 py-2 rounded-xl sm:rounded-full bg-[#f1f3f7] hover:bg-[#e9e7eb] active:bg-[#d8e2ff] text-xs font-semibold text-[#191c20] transition-colors cursor-pointer text-center"
              >
                Farmácia de Bairro
              </button>
              <button
                onClick={() => applyPreset(2200, 75, 25)}
                className="min-h-[40px] px-3 py-2 rounded-xl sm:rounded-full bg-[#f1f3f7] hover:bg-[#e9e7eb] active:bg-[#d8e2ff] text-xs font-semibold text-[#191c20] transition-colors cursor-pointer text-center"
              >
                Drogaria Média
              </button>
              <button
                onClick={() => applyPreset(400, 220, 20)}
                className="min-h-[40px] px-3 py-2 rounded-xl sm:rounded-full bg-[#f1f3f7] hover:bg-[#e9e7eb] active:bg-[#d8e2ff] text-xs font-semibold text-[#191c20] transition-colors cursor-pointer text-center"
              >
                Clínica Estética
              </button>
              <button
                onClick={() => applyPreset(950, 350, 25)}
                className="min-h-[40px] px-3 py-2 rounded-xl sm:rounded-full bg-[#f1f3f7] hover:bg-[#e9e7eb] active:bg-[#d8e2ff] text-xs font-semibold text-[#191c20] transition-colors cursor-pointer text-center"
              >
                Harmonização
              </button>
            </div>
          </div>
        </div>

        {/* Calculator Card */}
        <div className="bg-[#f1f3f7] rounded-2xl sm:rounded-3xl border border-[#c1c6d6]/40 p-3.5 sm:p-8 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Controls Column */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-6">
            {/* Slider 1 */}
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <label className="font-bold text-[#191c20]" htmlFor="input-clientes">
                  Clientes atendidos por mês:
                </label>
                <span className="text-base sm:text-lg font-extrabold text-[#1a73e8]">
                  {clientes.toLocaleString('pt-BR')}
                </span>
              </div>
              <input
                id="input-clientes"
                type="range"
                min="300"
                max="10000"
                step="100"
                value={clientes}
                onChange={(e) => setClientes(parseInt(e.target.value, 10))}
                className="w-full h-3 sm:h-2.5 bg-[#e1e3e8] rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] sm:text-[11px] text-[#45474e]">
                <span>300</span>
                <span>5.000</span>
                <span>10.000+</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <label className="font-bold text-[#191c20]" htmlFor="input-ticket">
                  Ticket Médio por Venda (R$):
                </label>
                <span className="text-base sm:text-lg font-extrabold text-[#1a73e8]">
                  {formatBRL(ticket)}
                </span>
              </div>
              <input
                id="input-ticket"
                type="range"
                min="25"
                max="500"
                step="5"
                value={ticket}
                onChange={(e) => setTicket(parseFloat(e.target.value))}
                className="w-full h-3 sm:h-2.5 bg-[#e1e3e8] rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] sm:text-[11px] text-[#45474e]">
                <span>R$ 25</span>
                <span>R$ 250</span>
                <span>R$ 500+</span>
              </div>
            </div>

            {/* Slider 3 */}
            <div className="flex flex-col gap-1.5 sm:gap-2 accent-secondary">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <label className="font-bold text-[#191c20]" htmlFor="input-taxa">
                  Estimativa de Novos Clientes via Google:
                </label>
                <span className="text-base sm:text-lg font-extrabold text-[#006e2c]">
                  {taxa}%
                </span>
              </div>
              <input
                id="input-taxa"
                type="range"
                min="10"
                max="50"
                step="5"
                value={taxa}
                onChange={(e) => setTaxa(parseInt(e.target.value, 10))}
                className="w-full h-3 sm:h-2.5 bg-[#e1e3e8] rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] sm:text-[11px] text-[#45474e]">
                <span>10% (Conservador)</span>
                <span>25% (Médio)</span>
                <span>50% (Agressivo)</span>
              </div>
            </div>

            <p className="text-[10px] sm:text-[11px] text-[#45474e] leading-tight">
              * Valores calculados com base na média dos clientes da consultoria após os primeiros 90 dias de setup e otimização contínua.
            </p>
          </div>

          {/* Dynamic Results Column */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-3.5 sm:p-6 border border-[#c1c6d6]/30 shadow-md flex flex-col gap-3.5 sm:gap-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#c1c6d6]/20">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#006e2c] flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px] sm:text-[16px]">trending_up</span>
                Potencial Mapeado do seu Negócio
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#89fa9b] text-[#002108] text-[9px] sm:text-[10px] font-bold">
                Estimativa Real
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <div className="p-2.5 sm:p-3 rounded-xl bg-[#f1f3f7] flex flex-col gap-0.5">
                <span className="text-[11px] sm:text-xs text-[#45474e]">Novos Clientes / Mês</span>
                <span className="text-xl sm:text-2xl font-black text-[#191c20]">
                  +{novosClientes.toLocaleString('pt-BR')}
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#006e2c] font-medium">no balcão e WhatsApp</span>
              </div>

              <div className="p-2.5 sm:p-3 rounded-xl bg-[#f1f3f7] flex flex-col gap-0.5">
                <span className="text-[11px] sm:text-xs text-[#45474e]">Faturamento Mensal Adicional</span>
                <span className="text-xl sm:text-2xl font-black text-[#1a73e8]">
                  {formatBRL(fatMensal)}
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#1a73e8] font-medium">direto no caixa</span>
              </div>
            </div>

            {/* Box Destaque Anual */}
            <div className="p-3 sm:p-4 rounded-xl bg-[#d8e2ff]/40 border border-[#1a73e8]/20 flex flex-col gap-1 text-center sm:text-left">
              <span className="text-[11px] sm:text-xs text-[#45474e] font-medium">
                Estimativa de Faturamento Adicional Anual:
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1a73e8]">
                {formatBRL(fatAnual)}
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#45474e]">
                Considerando recompras, tratamentos e procedimentos complementares.
              </span>
            </div>

            <a
              href={getWhatsappSimulatorUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[48px] sm:min-h-[50px] px-4 rounded-xl sm:rounded-full bg-[#006e2c] hover:bg-[#005320] active:scale-98 text-white text-xs sm:text-base font-bold flex items-center justify-center gap-2 shadow-md transition-all text-center cursor-pointer"
            >
              <WhatsappIcon size={20} />
              <span>Capturar oportunidade no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
