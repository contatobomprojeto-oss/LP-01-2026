import React from 'react';
import { GARGALOS_DATA } from '../data/initialData';

export const GargalosSection: React.FC = () => {
  return (
    <section className="w-full py-10 sm:py-20 bg-[#f8f9fc] border-y border-[#c1c6d6]/20 px-3.5 sm:px-6" id="problemas">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-12">
        {/* Section Header */}
        <div className="max-w-2xl flex flex-col gap-2">
          <span className="px-2.5 py-1 rounded-full bg-[#dc392c]/10 text-[#b81d17] text-[11px] sm:text-xs font-bold uppercase tracking-wider w-fit">
            Diagnóstico Local & Recepção
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#191c20] tracking-tight leading-tight">
            Reconhece algum destes gargalos no seu negócio hoje?
          </h2>
          <p className="text-xs sm:text-base text-[#45474e] leading-relaxed">
            Clínicas odontológicas e de estética perdem dezenas de pacientes particulares todos os meses por pequenas falhas de indexação, posicionamento e atendimento.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {GARGALOS_DATA.map((item) => (
            <div
              key={item.id}
              className={`p-4 sm:p-6 rounded-2xl bg-white border border-[#c1c6d6]/30 shadow-xs flex flex-col justify-between gap-3.5 sm:gap-4 transition-all hover:shadow-md ${
                item.fullWidth ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex flex-col gap-2 sm:gap-2.5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#b81d17]/10 text-[#b81d17] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px] sm:text-[24px]">{item.icon}</span>
                </div>
                <h3 className="text-sm sm:text-lg font-bold text-[#191c20]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#45474e] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div
                className={`flex items-center gap-1.5 text-xs font-semibold pt-2 border-t border-[#c1c6d6]/20 ${
                  item.fullWidth ? 'text-[#006e2c] text-xs sm:text-sm' : 'text-[#b81d17]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px] sm:text-[18px]">
                  {item.fullWidth ? 'check_circle' : 'trending_down'}
                </span>
                <span className="leading-tight">{item.lossText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
