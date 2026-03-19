import { ScrollReveal } from "@/components/ui/scroll-reveal";

const isFor = [
  "Малки бизнеси без силно онлайн присъствие",
  "Хора, на които е писнало да изглеждат слаби онлайн",
  "Бизнеси, които знаят, че са добри — но сайтът им не го показва",
  "Тези, които искат ясен процес без хаос",
  "Тези, които не искат да учат код или да се занимават сами",
];

const isNotFor = [
  'Тези, които търсят "нещо евтино, колкото да го има"',
  "Тези, които не вярват, че онлайн присъствието има значение",
  "Тези, които искат само красива визия без ясно позициониране",
];

export default function ForWho() {
  return (
    <section className="border-b border-white/8">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          <ScrollReveal>
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 pt-2">
              07 — За кого е
            </p>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white leading-[1] mb-16">
                Подходящо ли е за теб?
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <ScrollReveal delay={0.15}>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 mb-6">За кого е</p>
                </ScrollReveal>
                <div className="space-y-0">
                  {isFor.map((item, i) => (
                    <ScrollReveal key={item} delay={0.15 + i * 0.06}>
                      <div className="flex items-start gap-3 py-4 border-b border-white/8 last:border-0">
                        <span className="shrink-0 text-white font-bold text-sm mt-0.5">✓</span>
                        <span className="text-sm text-white/70 leading-snug">{item}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              <div>
                <ScrollReveal delay={0.2}>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/20 mb-6">За кого не е</p>
                </ScrollReveal>
                <div className="space-y-0">
                  {isNotFor.map((item, i) => (
                    <ScrollReveal key={item} delay={0.2 + i * 0.06}>
                      <div className="flex items-start gap-3 py-4 border-b border-white/8 last:border-0">
                        <span className="shrink-0 text-white/20 font-bold text-sm mt-0.5">✕</span>
                        <span className="text-sm text-white/30 leading-snug">{item}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
