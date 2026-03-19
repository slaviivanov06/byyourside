import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Problem() {
  return (
    <section className="border-b border-white/8">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
          {/* Left label */}
          <ScrollReveal>
            <p className="text-xs tracking-[0.25em] uppercase text-white/30 pt-2">
              02 — Проблемът
            </p>
          </ScrollReveal>

          {/* Right content */}
          <div>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white leading-[1] mb-10">
                Когато клиентите те намерят онлайн и сайтът ти изглежда слаб —
                те напускат.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-5 text-lg text-white/50 leading-relaxed">
                <p>Без запитване. Без обаждане. Без обяснение.</p>
                <p>
                  Сайтът е шаблонен. Или объркан. Или стар. Или изобщо го
                  няма. Клиентът не разбира бързо какво правиш, защо си добър
                  избор и защо да ти се довери.
                </p>
                <p className="text-white font-semibold">
                  И избира някой друг — само защото онлайн изглежда
                  по-убедително.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-12 pt-8 border-t border-white/8">
                <p className="text-lg text-white/50 leading-relaxed">
                  Всеки ден без силен сайт е ден, в който губиш доверие. Може
                  да си добър в това, което правиш. Но ако онлайн присъствието
                  ти не го показва —{" "}
                  <span className="text-white font-semibold">
                    за клиентите това не съществува.
                  </span>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
