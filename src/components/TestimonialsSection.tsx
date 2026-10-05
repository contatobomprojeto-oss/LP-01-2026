import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS_DATA } from '../data/initialData';
import { TestimonialItem } from '../types';

export const TestimonialsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'odontologia' | 'estetica'>('todos');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filteredTestimonials = TESTIMONIALS_DATA.filter((item) => {
    if (activeFilter === 'todos') return true;
    return item.category === activeFilter;
  });

  const getInitials = (name: string) => {
    const parts = name.replace(/^Dr[a]?\.\s*/i, '').trim().split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return parts[0].slice(0, 2).toUpperCase();
  };

  return (
    <section className="w-full py-12 sm:py-24 px-3.5 sm:px-6 bg-[#fafafc] border-b border-[#c1c6d6]/20 overflow-hidden" id="depoimentos">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-14">
        {/* Section Header with Fade-In & Slide-Up */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a73e8]/10 text-[#1a73e8] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px] text-[#1a73e8]">verified</span>
            <span>Prova Social & Resultados Reais</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#191c20] tracking-tight leading-tight">
            Quem lidera clínicas odontológicas e de estética confia na{' '}
            <span className="text-[#1a73e8] bg-gradient-to-r from-[#1a73e8] to-[#0052cc] bg-clip-text text-transparent">
              Ricks Marketing
            </span>
          </h2>

          <p className="text-xs sm:text-base text-[#45474e] leading-relaxed max-w-2xl">
            Veja como transformamos clínicas odontológicas e de estética em potências locais no Google, gerando filas de novos pacientes particulares direto no WhatsApp.
          </p>

          {/* Google Reviews Badge Summary */}
          <div className="mt-2 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-2 px-4 rounded-2xl bg-white border border-[#c1c6d6]/30 shadow-xs">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span className="text-xs font-bold text-[#191c20]">Google Avaliações</span>
            </div>
            <div className="flex items-center text-[#e37400]">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-[16px] fill-current">
                  star
                </span>
              ))}
            </div>
            <span className="text-xs font-extrabold text-[#191c20]">5.0 de 5.0</span>
            <span className="text-[11px] text-[#45474e] font-medium hidden sm:inline">
              (Depoimentos verificados de dentistas e diretores de clínicas)
            </span>
          </div>
        </motion.div>

        {/* Filter Pills with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-none"
        >
          <button
            type="button"
            onClick={() => setActiveFilter('todos')}
            className={`min-h-[40px] px-4 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 flex-shrink-0 ${
              activeFilter === 'todos'
                ? 'bg-[#1a73e8] text-white shadow-sm shadow-[#1a73e8]/25'
                : 'bg-white text-[#45474e] hover:bg-[#f1f3f7] border border-[#c1c6d6]/30'
            }`}
          >
            <span>Todos os Depoimentos</span>
            <span
              className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                activeFilter === 'todos' ? 'bg-white/20 text-white' : 'bg-[#e9e7eb] text-[#45474e]'
              }`}
            >
              {TESTIMONIALS_DATA.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveFilter('odontologia')}
            className={`min-h-[40px] px-4 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 flex-shrink-0 ${
              activeFilter === 'odontologia'
                ? 'bg-[#1a73e8] text-white shadow-sm shadow-[#1a73e8]/25'
                : 'bg-white text-[#45474e] hover:bg-[#f1f3f7] border border-[#c1c6d6]/30'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">dentistry</span>
            <span>Clínicas Odontológicas</span>
            <span
              className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                activeFilter === 'odontologia' ? 'bg-white/20 text-white' : 'bg-[#e9e7eb] text-[#45474e]'
              }`}
            >
              {TESTIMONIALS_DATA.filter((i) => i.category === 'odontologia').length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveFilter('estetica')}
            className={`min-h-[40px] px-4 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 flex-shrink-0 ${
              activeFilter === 'estetica'
                ? 'bg-[#1a73e8] text-white shadow-sm shadow-[#1a73e8]/25'
                : 'bg-white text-[#45474e] hover:bg-[#f1f3f7] border border-[#c1c6d6]/30'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">spa</span>
            <span>Clínicas de Estética</span>
            <span
              className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                activeFilter === 'estetica' ? 'bg-white/20 text-white' : 'bg-[#e9e7eb] text-[#45474e]'
              }`}
            >
              {TESTIMONIALS_DATA.filter((i) => i.category === 'estetica').length}
            </span>
          </button>
        </motion.div>

        {/* Testimonials Grid with Staggered Scroll Animation */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredTestimonials.map((item: TestimonialItem, index) => {
              const hasImageError = failedImages[item.id];

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#c1c6d6]/30 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-lg hover:border-[#1a73e8]/40 transition-all duration-300 flex flex-col justify-between gap-5 group"
                >
                  {/* Header: Photo, Name, Role, Rating */}
                  <div className="flex flex-col gap-3.5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        {/* Avatar with Brazilian appearance portrait */}
                        <div className="relative flex-shrink-0">
                          {!hasImageError ? (
                            <img
                              src={item.photoUrl}
                              alt={item.name}
                              referrerPolicy="no-referrer"
                              onError={() => setFailedImages((prev) => ({ ...prev, [item.id]: true }))}
                              className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl object-cover border-2 border-white shadow-md ring-2 ring-[#1a73e8]/20 group-hover:ring-[#1a73e8]/50 transition-all"
                            />
                          ) : (
                            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#1a73e8] to-[#0052cc] text-white font-extrabold flex items-center justify-center text-sm shadow-md">
                              {getInitials(item.name)}
                            </div>
                          )}
                          {/* Verified badge icon */}
                          <div
                            className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#1a73e8] text-white flex items-center justify-center shadow-xs border-2 border-white"
                            title="Cliente verificado"
                          >
                            <span className="material-symbols-outlined text-[12px] font-bold">check</span>
                          </div>
                        </div>

                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-1.5">
                            <h3 className="font-extrabold text-sm sm:text-base text-[#191c20] truncate">
                              {item.name}
                            </h3>
                          </div>
                          <p className="text-[11px] text-[#45474e] font-medium truncate">
                            {item.role}
                          </p>
                          <p className="text-[11px] font-bold text-[#1a73e8] truncate">
                            {item.businessName}
                          </p>
                        </div>
                      </div>

                      {/* Category pill */}
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${
                          item.category === 'estetica'
                            ? 'bg-[#ea80fc]/15 text-[#9c27b0]'
                            : 'bg-[#1a73e8]/10 text-[#1a73e8]'
                        }`}
                      >
                        {item.category === 'estetica' ? 'Estética' : 'Odontologia'}
                      </span>
                    </div>

                    {/* Stars + Highlight Pill */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-[#c1c6d6]/20">
                      <div className="flex items-center text-[#e37400]">
                        {[...Array(item.rating)].map((_, i) => (
                          <span key={i} className="material-symbols-outlined text-[16px] fill-current">
                            star
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-lg bg-[#006e2c]/10 text-[#006e2c]">
                        <span className="material-symbols-outlined text-[13px]">trending_up</span>
                        <span>{item.highlightMetric}</span>
                      </span>
                    </div>

                    {/* Testimonial Quote */}
                    <div className="relative pt-1">
                      <span className="text-3xl text-[#1a73e8]/25 font-serif absolute -top-1 -left-1 select-none leading-none">
                        “
                      </span>
                      <p className="text-xs sm:text-[13px] text-[#45474e] leading-relaxed italic pl-3">
                        {item.comment}
                      </p>
                    </div>
                  </div>

                  {/* Footer Info: City & Timeframe */}
                  <div className="pt-3 border-t border-[#c1c6d6]/20 flex items-center justify-between text-[11px] text-[#727785]">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-[#1a73e8]">location_on</span>
                      <span>{item.cityState}</span>
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <span className="material-symbols-outlined text-[14px] text-[#006e2c]">verified_user</span>
                      <span>{item.timeframe}</span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Trust Banner with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0b1329] via-[#0f1d3f] to-[#0b1329] p-6 sm:p-10 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 border border-white/10"
        >
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start gap-1.5 text-xs font-bold text-[#8ab4f8] uppercase tracking-wider">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>Segurança & Compromisso Ético</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              Sua clínica odontológica ou de estética com o mesmo nível de resultado
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl">
              Estratégias 100% desenhadas para as normas do CFO/CRO, CFM, Anvisa e Conselhos de Biomedicina. Sem risco de suspensão da conta Google.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto flex-shrink-0">
            <a
              href="#contato"
              className="min-h-[48px] px-6 sm:px-8 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] active:scale-98 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg transition-all text-center"
            >
              <span className="material-symbols-outlined text-[18px]">search_insights</span>
              <span>Solicitar Auditoria da Minha Região</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
