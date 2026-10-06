import React from 'react';
import { motion } from 'framer-motion';
import { FRENTES_DATA } from '../data/initialData';

export const FrentesSection: React.FC = () => {
  return (
    <section className="w-full py-10 sm:py-20 px-3.5 sm:px-6 max-w-7xl mx-auto overflow-hidden" id="frentes">
      <div className="flex flex-col gap-6 sm:gap-12">
        {/* Section Header with Fade-In & Slide-Up */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto flex flex-col items-center gap-2"
        >
          <span className="px-2.5 py-1 rounded-full bg-[#1a73e8]/10 text-[#1a73e8] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            Metodologia Exclusiva Ricks Marketing
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#191c20] tracking-tight leading-tight">
            As 5 Frentes de Domínio Local para Clínicas Odontológicas & Estética
          </h2>
          <p className="text-xs sm:text-base text-[#45474e] leading-relaxed max-w-xl">
            Uma engrenagem comercial validada para consolidar sua clínica odontológica ou de estética como a escolha número 1 da sua região.
          </p>
        </motion.div>

        {/* 5 Cards Layout with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {FRENTES_DATA.map((frente, index) => (
            <motion.div
              key={frente.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`p-4 sm:p-6 rounded-2xl bg-[#f1f3f7] border border-[#c1c6d6]/30 flex flex-col justify-between gap-3 sm:gap-3.5 hover:shadow-md transition-shadow ${
                frente.highlight ? 'md:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full ${frente.badgeColorClass} font-bold text-xs sm:text-sm flex items-center justify-center shadow-xs`}
                  >
                    {frente.badgeNumber}
                  </div>
                  <span className="material-symbols-outlined text-[22px] sm:text-[26px] text-[#1a73e8]">
                    {frente.icon}
                  </span>
                </div>

                <h3 className="text-sm sm:text-lg font-bold text-[#191c20] mt-2.5 sm:mt-3">
                  {frente.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#45474e] leading-relaxed mt-1">
                  {frente.description}
                </p>
              </div>

              {frente.highlight ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 pt-2">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-[#c1c6d6]/20 shadow-xs">
                    <span className="text-[10px] sm:text-[11px] text-[#45474e] block">Métricas de Ação</span>
                    <span className="text-sm sm:text-base font-bold text-[#1a73e8]">100% Rastreadas</span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-[#c1c6d6]/20 shadow-xs">
                    <span className="text-[10px] sm:text-[11px] text-[#45474e] block">Custo por Paciente</span>
                    <span className="text-sm sm:text-base font-bold text-[#006e2c]">CAC Controlado</span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-[#c1c6d6]/20 shadow-xs">
                    <span className="text-[10px] sm:text-[11px] text-[#45474e] block">Alinhamento Mensal</span>
                    <span className="text-sm sm:text-base font-bold text-[#191c20]">Direto com Especialista</span>
                  </div>
                </div>
              ) : (
                <ul className="space-y-1.5 text-xs text-[#45474e] pt-2 border-t border-[#c1c6d6]/30">
                  {frente.checkItems.map((check, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[15px] sm:text-[16px] text-[#006e2c] flex-shrink-0">check</span>
                      <span className="leading-tight">{check}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
