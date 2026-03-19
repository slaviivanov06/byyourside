import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function NewWay() {
  return (
    <section className="border-b border-white/8">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
          <ScrollReveal>
            <p className="text-xs tracking-[0.25em] uppercase text-white/30 pt-2">
              03 — Нова възможност
            </p>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white leading-[1] mb-10">
                Има различен начин.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-4 text-lg text-white/40 leading-relaxed mb-12">
                <p>Не чрез шаблон, сглобен за уикенд.</p>
                <p>Не чрез агенция с 6 месеца чакане и неясни фактури.</p>
                <p>Не сам, с YouTube видеа и 3 месеца изгубено време.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-lg text-white/70 leading-relaxed mb-12">
                Чрез сайт, изграден около позиционирането на бизнеса ти.
                Сайт, който показва ясно кой си, какво правиш и защо трябва
                да ти се доверят.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="border border-white/10 p-8 inline-block">
                <p className="text-2xl font-black tracking-tight text-white mb-2">
                  Сайт с характер.
                </p>
                <p className="text-sm text-white/40 tracking-wide">
                  Сайт, изграден от позициониране — не от шаблон.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
