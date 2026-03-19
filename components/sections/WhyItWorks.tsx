import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function WhyItWorks() {
  return (
    <section className="border-b border-white/8">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          <ScrollReveal>
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 pt-2">
              12 — Защо работи
            </p>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white leading-[1] mb-12">
                Повечето сайтове са слаби по една причина.
              </h2>
            </ScrollReveal>

            <div className="space-y-6 border-l border-white/10 pl-8">
              <ScrollReveal delay={0.2}>
                <p className="text-base text-white/50 leading-relaxed">
                  Направени са "отзад напред" — първо украсата, после логиката. Избира се шаблон, добавят се цветове и снимки, и се смята, че работата е свършена.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-base text-white/70 leading-relaxed">
                  Сайт с характер работи обратното. Първо позиционирането. После всичко останало.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <p className="text-base text-white/50 leading-relaxed">
                  Когато клиентът те намери онлайн, не той трябва да се досеща какво правиш. Сайтът трябва да му го каже ясно, бързо и убедително.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.5}>
                <p className="text-base text-white font-semibold leading-relaxed">
                  Точно това прави "Сайт с характер". Разликата не е в дизайна — разликата е в логиката.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
