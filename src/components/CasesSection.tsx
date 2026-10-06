import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CASES_DATA } from '../data/initialData';

export const CasesSection: React.FC = () => {
  const [filter, setFilter] = useState<'todos' | 'odontologia' | 'estetica'>('todos');

  const filteredCases = filter === 'todos' 
    ? CASES_DATA 
    : CASES_DATA.filter((c) => c.category === filter);

  return (
    <section className="w-full py-10 sm:py-20 bg-[#f8f9fc] border-y border-[#c1c6d6]/20 px-3.5 sm:px-6 overflow-hidden" id="cases">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-12">
        {/* Section Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 sm:gap-3"
        >
          <div className="max-w-xl flex flex-col gap-2">
            <span className="px-2.5 py-1 rounded-full bg-[#006e2c]/10 text-[#006e2c] text-[11px] sm:text-xs font-bold uppercase tracking-wider w-fit">
              Histórico Comprovado
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#191c20] tracking-tight leading-tight">
              Resultados Reais em Clínicas Odontológicas & Estética
            </h2>
            <p className="text-xs sm:text-base text-[#45474e]">
              Clínicas que transformaram sua presença no Google e WhatsApp em geradores previsíveis de pacientes particulares e tratamentos fechados.
            </p>
          </div>
          <span className="text-[11px] sm:text-xs text-[#45474e] italic sm:text-right">
            * Dados auditados e autorizados pelos clientes
          </span>
        </motion.div>

        {/* Filter Pills with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-none -mx-3.5 px-3.5 sm:mx-0 sm:px-0"
        >
          {[
            { key: 'todos', label: 'Todos os Casos' },
            { key: 'odontologia', label: 'Clínicas Odontológicas' },
            { key: 'estetica', label: 'Clínicas de Estética' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as any)}
              className={`min-h-[38px] px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                filter === tab.key
                  ? 'bg-[#1a73e8] text-white shadow-xs'
                  : 'bg-white text-[#45474e] border border-[#c1c6d6]/30 hover:bg-[#f1f3f7]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Cases Grid with Staggered Scroll Animation */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCases.map((cs, index) => (
              <motion.div
                key={cs.id}
                layout
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-white rounded-2xl p-4 sm:p-6 border border-[#c1c6d6]/30 shadow-xs flex flex-col justify-between gap-3.5 sm:gap-4 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col gap-2.5 sm:gap-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#1a73e8] tracking-wide uppercase text-[10px] sm:text-[11px]">
                      {cs.tag}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#f1f3f7] text-[#45474e] text-[10px] sm:text-[11px]">
                      Verificado
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#191c20]">{cs.title}</h3>
                  <p className="text-xs sm:text-sm text-[#45474e] leading-relaxed">
                    {cs.description}
                  </p>

                  <div className="space-y-2 pt-1">
                    {cs.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-2 sm:p-2.5 rounded-xl bg-[#f1f3f7] flex items-center justify-between gap-2"
                      >
                        <div className="flex flex-col">
                          <span className="text-[11px] sm:text-xs text-[#45474e]">{m.label}</span>
                          <span className="text-[9px] sm:text-[10px] text-[#45474e]/80">{m.trend}</span>
                        </div>
                        <span className="text-sm sm:text-base font-bold text-[#006e2c] flex-shrink-0">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2.5 sm:pt-3 border-t border-[#c1c6d6]/20 flex items-center gap-1.5 text-xs text-[#45474e]">
                  <span className="material-symbols-outlined text-[#006e2c] text-[16px] sm:text-[18px]">verified</span>
                  <span className="font-medium text-[#191c20] text-[11px] sm:text-xs">{cs.highlightNote}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
