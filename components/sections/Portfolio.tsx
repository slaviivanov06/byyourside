import { ScrollReveal } from "@/components/ui/scroll-reveal";

const projects: { name: string; type: string; url?: string }[] = [
  // Добави реални проекти тук
  // { name: "Примерен проект", type: "Малък бизнес", url: "https://..." },
];

export default function Portfolio() {
  return (
    <section className="border-b border-white/8">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">

          <ScrollReveal>
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/30 pt-2">
              02 — Примери
            </p>
          </ScrollReveal>

          <div>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white leading-[1] mb-4">
                Сайтове,<br />които изградихме.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-sm text-white/40 leading-relaxed mb-16 max-w-lg">
                Всеки сайт е изграден около позиционирането на бизнеса — не около шаблон.
              </p>
            </ScrollReveal>

            {projects.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projects.map((project, i) => (
                  <ScrollReveal key={i} delay={0.1 + i * 0.06}>
                    <a
                      href={project.url ?? "#"}
                      target={project.url ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group block aspect-video bg-white/5 rounded-2xl overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-6">
                        <p className="text-sm font-bold text-white/70 group-hover:text-white transition-colors duration-200">
                          {project.name}
                        </p>
                        <p className="text-xs text-white/30">{project.type}</p>
                      </div>
                    </a>
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              /* Placeholder when no projects yet */
              <ScrollReveal delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="aspect-video bg-white/5 rounded-2xl border border-white/8 border-dashed flex items-center justify-center"
                    >
                      <p className="text-xs text-white/20 tracking-widest uppercase">Очаквай скоро</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
