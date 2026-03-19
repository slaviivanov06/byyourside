"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const packages = [
  {
    id: "start",
    name: "СТАРТ",
    price: "€200",
    originalPrice: null,
    tag: null,
    forWho: "Чист, подреден и професионален сайт без излишна сложност.",
    result: "Изглеждаш сериозно онлайн.",
    includes: [
      "Сайт с характер — изграден от позициониране",
      "Чист, модерен дизайн",
      "Адаптиран за мобилни устройства",
      "Форма за контакт",
      "Готов за публикуване",
    ],
    cta: "Избери Старт",
    highlight: false,
    note: null,
  },
  {
    id: "character",
    name: "ХАРАКТЕР",
    price: "€250",
    originalPrice: "€300",
    tag: "ПРЕПОРЪЧИТЕЛЕН",
    forWho: "По-завършено решение — без да се занимаваш с техническата страна.",
    result: "Готов за работа от ден едно — без да пипаш нищо сам.",
    includes: [
      "Всичко от Старт",
      "Настройка на хостинг и домейн",
      "По-лесен старт, по-малко главоболия",
      "Готов за работа от ден едно",
    ],
    cta: "Искам Характер",
    highlight: true,
    note: "Повечето клиенти избират този пакет.",
  },
  {
    id: "authority",
    name: "АВТОРИТЕТ",
    price: "€500+",
    originalPrice: null,
    tag: null,
    forWho: "По-сериозно онлайн присъствие и дългосрочна сигурност.",
    result: "Онлайн присъствие, за което не се притесняваш.",
    includes: [
      "Всичко от Характер",
      "3 месеца поддръжка",
      "По-пълно, по-спокойно решение",
      "По-сигурна основа за бизнеса ти",
    ],
    cta: "Искам Авторитет",
    highlight: false,
    note: null,
  },
];

function CornerDots({ bright = false }: { bright?: boolean }) {
  const c = bright ? "bg-white/40" : "bg-white/20";
  return (
    <>
      <span className={`absolute top-3 left-3 w-1 h-1 rounded-full ${c}`} />
      <span className={`absolute top-3 right-3 w-1 h-1 rounded-full ${c}`} />
      <span className={`absolute bottom-3 left-3 w-1 h-1 rounded-full ${c}`} />
      <span className={`absolute bottom-3 right-3 w-1 h-1 rounded-full ${c}`} />
    </>
  );
}

function PricingCard({ pkg }: { pkg: typeof packages[0] }) {
  return (
    <div
      className={`relative rounded-2xl flex flex-col overflow-hidden h-full
        ${pkg.highlight ? "ring-1 ring-white/20" : "ring-1 ring-white/10"}
      `}
      style={{
        background: pkg.highlight
          ? "linear-gradient(145deg, #1a1f35 0%, #0f1220 100%)"
          : "linear-gradient(145deg, #0e1120 0%, #080b14 100%)",
      }}
    >
      <CornerDots bright={pkg.highlight} />

      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      {pkg.highlight && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99,130,255,0.18) 0%, transparent 70%)",
          }}
        />
      )}

      <div className="relative z-10 p-6 flex flex-col gap-4 flex-1">
        {pkg.tag && (
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full border border-white/15 text-white/50">
              ★ {pkg.tag}
            </span>
          </div>
        )}

        <div>
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/30 mb-2">
            {pkg.name}
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black tracking-tight text-white/90">
              {pkg.price}
            </span>
            {pkg.originalPrice && (
              <span className="text-sm text-white/25 line-through">{pkg.originalPrice}</span>
            )}
          </div>
          {pkg.originalPrice && (
            <p className="text-[11px] text-emerald-400/80 font-semibold mt-0.5">Спести €50</p>
          )}
        </div>

        <p className="text-xs text-white/40 leading-relaxed">{pkg.forWho}</p>

        <div className="h-px bg-white/8" />

        <ul className="space-y-2 flex-1">
          {pkg.includes.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="shrink-0 text-white/25 text-xs mt-0.5">—</span>
              <span className="text-xs text-white/50 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-xs font-semibold text-white/60">→ {pkg.result}</p>

        <div>
          <a
            href="#contact"
            className={`block text-center w-full py-3 rounded-xl text-xs font-bold tracking-[0.12em] uppercase transition-all duration-200
              ${pkg.highlight
                ? "bg-white text-[#080b14] hover:bg-white/90"
                : "bg-white/8 text-white/60 hover:bg-white/14 border border-white/10"
              }
            `}
          >
            {pkg.cta}
          </a>
          {pkg.note && (
            <p className="text-center text-[10px] mt-2 text-white/20 tracking-wide">{pkg.note}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Packages() {
  const [hovered, setHovered] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="packages" className="relative py-32 overflow-hidden" ref={sectionRef}>

      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(99,130,255,0.13) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-white/20" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-white/35">Пакети</span>
            <div className="h-px w-8 bg-white/20" />
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black tracking-tighter leading-[1] mb-4"
            style={{
              background: "linear-gradient(180deg, rgba(200,215,255,1) 0%, rgba(140,160,220,0.7) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Избери пакета,<br />подходящ за теб.
          </h2>
          <p className="text-sm text-white/30">Без скрити цени. Без изненади.</p>
        </motion.div>

        {/* Desktop: 3D perspective card fan */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden sm:flex items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          {/* LEFT — СТАРТ */}
          <div
            className="w-[340px] max-h-[420px] overflow-hidden flex-shrink-0 cursor-pointer"
            style={{
              position: "relative",
              zIndex: hovered === 0 ? 10 : 0,
              transform: hovered === 0
                ? "rotateY(0deg) translateZ(0px) scale(1.03)"
                : "rotateY(-10deg) translateZ(-50px)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(null)}
          >
            <PricingCard pkg={packages[0]} />
          </div>

          {/* CENTER — ХАРАКТЕР */}
          <div
            className="w-[390px] flex-shrink-0 cursor-pointer"
            style={{
              position: "relative",
              zIndex: hovered === 1 ? 10 : 1,
              transform: hovered === 1 ? "scale(1.03)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
          >
            <PricingCard pkg={packages[1]} />
          </div>

          {/* RIGHT — АВТОРИТЕТ */}
          <div
            className="w-[340px] max-h-[420px] overflow-hidden flex-shrink-0 cursor-pointer"
            style={{
              position: "relative",
              zIndex: hovered === 2 ? 10 : 0,
              transform: hovered === 2
                ? "rotateY(0deg) translateZ(0px) scale(1.03)"
                : "rotateY(10deg) translateZ(-50px)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
          >
            <PricingCard pkg={packages[2]} />
          </div>
        </motion.div>

        {/* Mobile: vertical stack */}
        <div className="sm:hidden flex flex-col gap-4">
          {packages.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
