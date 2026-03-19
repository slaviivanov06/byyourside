import { ScrollReveal } from "@/components/ui/scroll-reveal";

const benefits = [
  "Изглеждаш професионално още от първите секунди",
  "Клиентите разбират по-бързо какво правиш и защо да те изберат",
  "Печелиш доверие още преди контакт",
  "Отличаваш се от шаблонните конкуренти",
  "Не се занимаваш сам с код, дизайн и хаос",
  "Получаваш сайт с реална бизнес функция — не просто визия",
];

export default function Benefits() {
  return (
    <section className="border-b border-white/8">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          <ScrollReveal>
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 pt-2">
              06 — Ползи
            </p>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white leading-[1] mb-16">
                Какво се променя.
              </h2>
            </ScrollReveal>

            <div className="space-y-0">
              {benefits.map((b, i) => (
                <ScrollReveal key={b} delay={0.05 * i}>
                  <div className="flex items-start gap-6 py-5 border-b border-white/8 last:border-0 group">
                    <span className="text-[10px] text-white/20 font-bold tracking-widest pt-1 w-6 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base font-medium text-white/80 leading-snug group-hover:text-white transition-colors duration-200">
                      {b}
                    </p>
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
