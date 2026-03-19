import { ScrollReveal } from "@/components/ui/scroll-reveal";

const items = [
  { title: "Ясно позициониране", desc: "Клиентите разбират кой си и защо да те изберат — без да се налага да обясняваш." },
  { title: "Силно първо впечатление", desc: "Изглеждаш сериозно от секунда едно." },
  { title: "Доверие преди контакт", desc: "Клиентът е убеден преди да се свърже с теб." },
  { title: "Чист, модерен дизайн", desc: "Без шаблонен вид. Без визуален шум." },
  { title: "Структура, която води към действие", desc: "Не просто страница с информация — а път за клиента." },
  { title: "Спокойствие", desc: "Ти не правиш нищо сам. Ние се занимаваме." },
];

export default function WhatYouGet() {
  return (
    <section className="border-b border-white/8">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          <ScrollReveal>
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 pt-2">
              08 — Какво получаваш
            </p>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white leading-[1] mb-4">
                Не просто сайт.
              </h2>
              <p className="text-base text-white/40 mb-16">Резултат, който усещаш от деня на старта.</p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-white/8">
              {items.map((item, i) => (
                <ScrollReveal key={item.title} delay={0.05 * i}>
                  <div className={`p-6 border-white/8 hover:bg-white/5 transition-colors duration-200 ${
                    i % 2 === 0 ? "border-r" : ""
                  } ${i < items.length - 2 ? "border-b" : ""}`}>
                    <p className="font-bold text-white text-sm mb-2">{item.title}</p>
                    <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
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
