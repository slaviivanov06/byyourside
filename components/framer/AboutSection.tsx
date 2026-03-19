"use client";

import { useState } from "react";

const team = [
  {
    name: "Мартин",
    role: "Разработка & Технология",
    tag: "DEV",
    desc: "Превръща дизайна в работещ код — бърз, чист и оптимизиран за всяко устройство. Отговаря за всичко техническо: от структурата до перфектното представяне.",
    photo: "/marto.png",
  },
  {
    name: "Слави",
    role: "Дизайн & Визия",
    tag: "DESIGN",
    desc: "Отговаря за цялостния визуален език — от архитектурата на сайта до най-малкия детайл в интерфейса. Убеден, че добрият дизайн продава.",
    photo: "/slavi.jpg",
  },
];

export default function AboutSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="about" className="bg-[#0A0F1E] py-20 sm:py-32 px-6 overflow-hidden">
      <div className="max-w-[1180px] mx-auto">

        {/* Big heading */}
        <div className="mb-12 md:mb-20 overflow-hidden">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#3B7AE8" }}>За нас</p>
          <h2
            className="font-black leading-none tracking-tighter select-none"
            style={{
              fontSize: "clamp(72px, 13vw, 160px)",
              color: "rgba(240,244,255,0.11)",
              letterSpacing: "-0.04em",
            }}
          >
            FOUNDERS
          </h2>
          <p className="text-[#F0F4FF]/60 mt-4 max-w-xl text-lg leading-relaxed"
            style={{ fontSize: "clamp(16px, 1.4vw, 20px)" }}>
            Не сме агенция. Ние сме двама — дизайнер и разработчик — които работят директно с теб от старт до край.
          </p>
        </div>

        {/* Portrait cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          {team.map((person, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative rounded-2xl overflow-hidden cursor-default"
              style={{
                aspectRatio: "3/4",
                maxHeight: "min(600px, 60vw)",
                transition: "transform 0.4s ease",
                transform: hovered === i ? "scale(1.01)" : "scale(1)",
              }}
            >
              {/* Photo */}
              <img
                src={person.photo}
                alt={person.name}
                className="absolute inset-0 w-full h-full object-cover object-top"
                style={{
                  transition: "transform 0.6s ease",
                  transform: hovered === i ? "scale(1.04)" : "scale(1)",
                  filter: "grayscale(20%)",
                }}
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(10,15,30,0.97) 0%, rgba(10,15,30,0.5) 40%, rgba(10,15,30,0.1) 70%, transparent 100%)",
                }}
              />

              {/* Blue glow on hover */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(to top, rgba(59,122,232,0.25) 0%, transparent 50%)",
                  opacity: hovered === i ? 1 : 0,
                }}
              />

              {/* Tag top-right */}
              <div className="absolute top-3 right-3 sm:top-5 sm:right-5">
                <span
                  className="text-[10px] sm:text-xs font-bold tracking-widest px-2 py-1 sm:px-3 sm:py-1.5 rounded-full"
                  style={{
                    background: "rgba(59,122,232,0.15)",
                    border: "1px solid rgba(59,122,232,0.3)",
                    color: "#4F8EF7",
                  }}
                >
                  {person.tag}
                </span>
              </div>

              {/* Text bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-8">
                <p
                  className="font-black leading-none mb-1 sm:mb-2 tracking-tight"
                  style={{
                    fontSize: "clamp(20px, 4.5vw, 52px)",
                    color: "#F0F4FF",
                  }}
                >
                  {person.name}
                </p>
                <p
                  className="font-semibold mb-2 sm:mb-4 text-[11px] sm:text-sm"
                  style={{ color: "#4F8EF7", letterSpacing: "0.05em" }}
                >
                  {person.role}
                </p>
                <p
                  className="hidden sm:block text-[#F0F4FF]/50 text-sm leading-relaxed max-w-sm transition-all duration-400"
                  style={{
                    opacity: hovered === i ? 1 : 0.7,
                    transform: hovered === i ? "translateY(0)" : "translateY(4px)",
                  }}
                >
                  {person.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="mt-16 pt-10 border-t border-white/[0.07] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-[#F0F4FF]/30 text-sm max-w-md leading-relaxed">
            Всеки проект минава само през наши ръце — без junior-и, без аутсорсинг. Знаете точно с кого работите.
          </p>
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="flex -space-x-3">
              {team.map((p, i) => (
                <img
                  key={i}
                  src={p.photo}
                  alt={p.name}
                  className="w-10 h-10 rounded-full object-cover object-top"
                  style={{ border: "2px solid #0A0F1E" }}
                />
              ))}
            </div>
            <span className="text-[#F0F4FF]/40 text-sm">Мартин & Слави</span>
          </div>
        </div>

      </div>
    </section>
  );
}
