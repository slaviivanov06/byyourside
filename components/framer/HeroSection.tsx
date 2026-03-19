"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

function HoverLetter({ t, d }: { t: string; d: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-block",
        transition: "transform 0.15s ease",
        transform: hovered ? "scaleY(0.85)" : "scaleY(1)",
        cursor: "default",
      }}
    >
      {hovered ? d : t}
    </span>
  );
}

const siteMockups = [
  { bg: "#0F1A2E", accent: "#3B7AE8", name: "Visual Systems" },
  { bg: "#1A0A2E", accent: "#3B7AE8", name: "DIGITAL DESIGNER" },
  { bg: "#EFEFEA", accent: "#111", name: "CREATIVE DEV", dark: false },
  { bg: "#0A1A0F", accent: "#22C55E", name: "smol" },
  { bg: "#1A0505", accent: "#EF4444", name: "Indie." },
  { bg: "#050A1A", accent: "#F59E0B", name: "Brand Studio" },
  { bg: "#1A1A0A", accent: "#EAB308", name: "Portfolio" },
  { bg: "#0A0A1A", accent: "#EC4899", name: "Agency" },
  { bg: "#0D1A1A", accent: "#3B7AE8", name: "Framer" },
  { bg: "#1A0A15", accent: "#F43F5E", name: "Startup" },
];

function SiteCard({ m }: { m: typeof siteMockups[0] }) {
  const tc = m.dark === false ? "#111" : "#FFF";
  return (
    <div className="rounded-lg overflow-hidden flex-shrink-0 border"
      style={{ background: m.bg, borderColor: "rgba(240,244,255,0.1)", width: 210, height: 140 }}>
      <div className="h-5 flex items-center gap-1 px-2" style={{ borderBottom: "1px solid rgba(240,244,255,0.09)" }}>
        {["#ff5f57","#febc2e","#28c840"].map((c,i) => (
          <div key={i} className="w-2 h-2 rounded-full" style={{ background: c }} />
        ))}
      </div>
      <div className="p-3">
        <div className="text-xs font-bold mb-2" style={{ color: tc, opacity: 0.7 }}>{m.name}</div>
        <div className="space-y-1.5">
          <div className="h-1.5 rounded" style={{ background: m.accent, width: "50%", opacity: 0.6 }} />
          <div className="h-1.5 rounded" style={{ background: tc, width: "75%", opacity: 0.1 }} />
          <div className="h-1.5 rounded" style={{ background: tc, width: "60%", opacity: 0.08 }} />
        </div>
        <div className="h-5 rounded mt-3" style={{ background: m.accent, width: "40%", opacity: 0.4 }} />
      </div>
    </div>
  );
}

const COLS = 6;
const colCards = Array.from({ length: COLS }, (_, ci) =>
  Array.from({ length: 5 }, (_, ri) => siteMockups[(ci * 3 + ri) % siteMockups.length])
);

export default function HeroSection() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section className="relative bg-[#0A0F1E] overflow-hidden" style={{ minHeight: "100vh" }}>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      {/* Scrolling card columns */}
      <div className="absolute inset-0 flex justify-center gap-5 opacity-40"
        style={{ maskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 20%, black 80%)" }}>
        {colCards.map((col, ci) => (
          <div key={ci} style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            animation: `scrollUp ${20 + ci * 2}s linear infinite`,
            animationDelay: `${-ci * 3.5}s`,
            willChange: "transform",
          }}>
            {[...col, ...col, ...col].map((m, i) => (
              <SiteCard key={i} m={m} />
            ))}
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 top-0 h-40 z-10" style={{ background: "linear-gradient(to bottom, #0A0F1E, transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 h-40 z-10" style={{ background: "linear-gradient(to top, #0A0F1E, transparent)" }} />
      <div className="absolute inset-y-0 left-0 w-32 z-10" style={{ background: "linear-gradient(to right, #0A0F1E, transparent)" }} />
      <div className="absolute inset-y-0 right-0 w-32 z-10" style={{ background: "linear-gradient(to left, #0A0F1E, transparent)" }} />

      {/* Hero text */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 min-h-screen">
        <h1 className="font-bold text-[#F0F4FF] leading-[0.95] tracking-tight mb-6"
          style={{ fontSize: "clamp(36px, 10vw, 100px)" }}>
          By your si<HoverLetter t="t" d="d" />e
        </h1>
        <p className="text-[#F0F4FF]/55 max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ fontSize: "clamp(16px, 1.5vw, 22px)" }}>
          Професионален сайт, изработен за вашия бизнес —<br />
          от идея до публикуване за 2–4 седмици.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto px-6 sm:px-0">
          <a href="#pricing"
            className="px-8 py-4 text-white font-semibold rounded-full transition-all hover:scale-[1.03] active:scale-[0.98] hover:brightness-110 text-center"
            style={{ fontSize: 18, background: "linear-gradient(135deg, #3B7AE8, #3B7AE8)", boxShadow: "0 6px 20px rgba(79,142,247,0.25)" }}>
            Разгледай пакетите
          </a>
          <button
            onClick={() => setContactOpen(true)}
            className="px-8 py-4 font-semibold rounded-full transition-all hover:scale-[1.03] active:scale-[0.98] text-center"
            style={{ fontSize: 18, color: "#F0F4FF", background: "rgba(240,244,255,0.08)", border: "1px solid rgba(240,244,255,0.12)" }}>
            Свържи се
          </button>
        </div>
      </div>

      <style>{`
        @keyframes scrollUp {
          from { transform: translateY(0px); }
          to { transform: translateY(-33.333%); }
        }
      `}</style>
    </section>
  );
}
