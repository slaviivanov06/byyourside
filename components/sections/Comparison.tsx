import { ScrollReveal } from "@/components/ui/scroll-reveal";

const rows = [
  { label: "Подход", old: "Шаблон и украса", new: "Позициониране и логика" },
  { label: "Старт", old: "Избираш цветове", new: "Изясняваш кой си" },
  { label: "Резултат", old: "Сайт, който стои", new: "Сайт, който работи" },
  { label: "Доверие", old: "Разчиташ на шанса", new: "Изграждаш го съзнателно" },
  { label: "Клиентът", old: "Се досеща сам", new: "Разбира веднага" },
];

export default function Comparison() {
  return (
    <section className="border-b border-white/8">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          <ScrollReveal>
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 pt-2">
              05 — Стар срещу нов начин
            </p>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white leading-[1] mb-16">
                Разликата не е в дизайна. Разликата е в логиката.
              </h2>
            </ScrollReveal>

            {/* Table */}
            <ScrollReveal delay={0.2}>
              <div className="border border-white/10">
                {/* Header */}
                <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-white/10">
                  <div className="px-5 py-3">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-white/20"></span>
                  </div>
                  <div className="px-5 py-3 border-l border-white/10">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-white/30">Старият начин</span>
                  </div>
                  <div className="px-5 py-3 border-l border-white/10 bg-white/5">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-white/70">Сайт с характер</span>
                  </div>
                </div>

                {rows.map((row, i) => (
                  <div key={row.label} className={`grid grid-cols-[1fr_1fr_1fr] ${i < rows.length - 1 ? "border-b border-white/8" : ""}`}>
                    <div className="px-5 py-4">
                      <span className="text-xs font-semibold text-white/30">{row.label}</span>
                    </div>
                    <div className="px-5 py-4 border-l border-white/8">
                      <span className="text-xs text-white/30 line-through">{row.old}</span>
                    </div>
                    <div className="px-5 py-4 border-l border-white/8 bg-white/5">
                      <span className="text-xs text-white font-medium">{row.new}</span>
                    </div>
                  </div>
                ))}

                {/* Footer row */}
                <div className="grid grid-cols-[1fr_1fr_1fr] border-t border-white/10 bg-white/3">
                  <div className="px-5 py-4">
                    <span className="text-xs font-bold text-white/30">Краен резултат</span>
                  </div>
                  <div className="px-5 py-4 border-l border-white/10">
                    <span className="text-xs text-white/30">Сайт, който просто стои онлайн.</span>
                  </div>
                  <div className="px-5 py-4 border-l border-white/10 bg-white/5">
                    <span className="text-xs text-white font-bold">Сайт, който работи за бизнеса ти.</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
