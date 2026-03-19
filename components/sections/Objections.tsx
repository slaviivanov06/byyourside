import { ScrollReveal } from "@/components/ui/scroll-reveal";

const objections = [
  { q: "Скъпо е.", a: "Слабият сайт те коства клиенти всеки ден. €200 еднократно срещу загубени запитвания — сметни сам." },
  { q: "Мога и сам.", a: "Можеш да направиш сайт. Но само направен сайт и сайт, който продава доверие, са две различни неща. Повечето хора могат да сглобят страница. Но не и да изградят ясно позициониране." },
  { q: "Имам вече сайт.", a: "Ако е шаблонен, объркан или стар — все едно нямаш. Въпросът не е дали имаш сайт. Въпросът е дали той работи за бизнеса ти." },
  { q: "Социалните мрежи ми стигат.", a: "Социалните мрежи са под чужд контрол. Платформата може да се промени. Сайтът е твоя основа. Мрежите — само канал към нея." },
  { q: "Бизнесът ми е малък.", a: "Точно затова. Малките бизнеси губят най-много от слабото онлайн присъствие — и имат най-много да спечелят от силното." },
  { q: "Ще го направя по-късно.", a: "Докато отлагаш, конкурентите с по-добри сайтове вземат клиентите, които са могли да бъдат твои." },
];

export default function Objections() {
  return (
    <section className="border-b border-white/8">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          <ScrollReveal>
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 pt-2">
              13 — Имаш съмнения?
            </p>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white leading-[1] mb-16">
                Отговорите, преди да ги зададеш.
              </h2>
            </ScrollReveal>

            <div>
              {objections.map((obj, i) => (
                <ScrollReveal key={obj.q} delay={0.05 * i}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-7 border-b border-white/8 last:border-0">
                    <p className="font-bold text-white text-sm">&ldquo;{obj.q}&rdquo;</p>
                    <p className="text-sm text-white/50 leading-relaxed">{obj.a}</p>
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
