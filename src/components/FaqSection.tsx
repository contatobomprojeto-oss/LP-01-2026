import React, { useState } from 'react';
import { FAQ_DATA } from '../data/initialData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-12 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto" id="faq">
      <div className="flex flex-col gap-8">
        <div className="text-center flex flex-col items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-[#f1f3f7] text-[#45474e] text-xs font-bold uppercase tracking-wider">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#191c20] tracking-tight">
            Perguntas Frequentes de Proprietários e Gestores
          </h2>
          <p className="text-sm sm:text-base text-[#45474e]">
            Transparência total sobre prazos, custos e rotina de atendimento.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-[#f1f3f7] rounded-2xl overflow-hidden border border-[#c1c6d6]/30 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-3 focus:outline-none cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#191c20]">
                    {item.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-[#1a73e8] transition-transform duration-200 text-[22px] flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-[#45474e] leading-relaxed border-t border-[#c1c6d6]/20 pt-3 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
