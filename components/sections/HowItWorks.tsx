import { ScrollReveal } from "@/components/ui/scroll-reveal";

const steps = [
  { number: "01", title: "Разговор", desc: "Запознаваме се с бизнеса ти — какво правиш, за кого и как трябва да бъдеш възприет онлайн." },
  { number: "02", title: "Позициониране и структура", desc: "Изграждаме логиката, посланието и архитектурата на сайта — преди да пипнем дизайн или код." },
  { number: "03", title: "Дизайн и изработка", desc: "Правим всичко да изглежда чисто, модерно и убедително." },
  { number: "04", title: "Старт", desc: "Сайтът е готов. Ти изглеждаш сериозно. Клиентите го усещат." },
];

export default function HowItWorks() {
  return (
    <section className="border-b border-white/8">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          <ScrollReveal>
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 pt-2">
              04 — Как работи
            </p>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white leading-[1] mb-16">
                4 стъпки от разговор до готов сайт.
              </h2>
            </ScrollReveal>

            <div className="space-y-0">
              {steps.map((step, i) => (
                <ScrollReveal key={step.number} delay={0.1 + i * 0.08}>
                  <div className="flex gap-8 items-start py-8 border-b border-white/8 last:border-0">
                    <span className="text-[11px] font-bold tracking-[0.2em] text-white/20 pt-1 w-8 shrink-0">
                      {step.number}
                    </span>
                    <div>
                      <p className="font-bold text-white mb-2">{step.title}</p>
                      <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
                    </div>
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
