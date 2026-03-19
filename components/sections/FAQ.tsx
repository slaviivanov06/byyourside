"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const faqs = [
  { q: "Колко бързо е готов сайтът?", a: "Типично 1–2 седмици от началото на работата, в зависимост от пакета и готовността ти за сътрудничество." },
  { q: "Трябва ли да имам готови текстове и снимки?", a: "Не е задължително. Работим заедно по позиционирането и текстовете. За снимки — ако нямаш, ползваме качествени стокови изображения." },
  { q: 'Какво значи "Сайт с характер"?', a: "Сайт, изграден около позиционирането на бизнеса - не около шаблон. Първо се изяснява как трябва да бъдеш възприет онлайн, после всичко останало следва оттам." },
  { q: "Как плащам?", a: "50% при старт на работата, 50% при предаване на готовия сайт. Без изненади." },
  { q: "Мога ли да добавям неща по-късно?", a: "Да. Сайтът се изгражда така, че да може да расте заедно с бизнеса ти." },
  { q: "Какво ако вече имам домейн и хостинг?", a: "Без проблем — работим с него или го прехвърляме при нужда." },
  { q: "Каква е разликата между пакетите?", a: "Старт е входната точка — чист и професионален сайт. Характер добавя настройка на хостинг и домейн, за да не се занимаваш сам с техническата страна. Авторитет включва 3 месеца поддръжка за максимално спокойствие след старта." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="border-b border-white/8">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          <ScrollReveal>
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 pt-2">
              15 — FAQ
            </p>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white leading-[1] mb-16">
                Чести въпроси.
              </h2>
            </ScrollReveal>

            <div>
              {faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={0.03 * i}>
                  <div className="border-b border-white/8">
                    <button
                      className="w-full text-left py-6 flex items-center justify-between gap-8 group"
                      onClick={() => setOpen(open === i ? null : i)}
                    >
                      <span className="font-semibold text-white text-sm group-hover:text-white/60 transition-colors duration-200">
                        {faq.q}
                      </span>
                      <span className="shrink-0 text-white/30 text-lg font-light transition-transform duration-300" style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>
                        +
                      </span>
                    </button>
                    <AnimatePresence>
                      {open === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 text-sm text-white/50 leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
