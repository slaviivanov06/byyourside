"use client";

import { useState } from "react";

const categories = [
  { label: "Agency", desc: "Sell your services", bg: "#0F0F1A", accent: "#8B5CF6" },
  { label: "Blog", desc: "Host your thoughts", bg: "#F5F0FF", accent: "#EC4899", dark: false },
  { label: "Landing Pages", desc: "Convert your visitors", bg: "#0A0A1A", accent: "#60A5FA" },
  { label: "Personal", desc: "Share your story", bg: "#0F0A1A", accent: "#F9A8D4" },
  { label: "Photography", desc: "Show your work", bg: "#F5F5F0", accent: "#111", dark: false },
  { label: "Portfolio", desc: "Impress clients", bg: "#1A0A05", accent: "#FB923C" },
  { label: "Landing Page", desc: "Coming Soon", bg: "#2D1B69", accent: "#A78BFA" },
  { label: "Startup", desc: "Launch fast", bg: "#F0F0FF", accent: "#7C3AED", dark: false },
];

function CategoryCard({ cat, active }: { cat: typeof categories[0]; active: boolean }) {
  const tc = cat.dark === false ? "#111" : "#FFF";
  return (
    <div className={`rounded-2xl overflow-hidden cursor-pointer transition-all hover:scale-[1.02] ${active ? "ring-2 ring-blue-500 scale-[1.02]" : ""}`}
      style={{ background: cat.bg, border: "1px solid rgba(0,0,0,0.08)" }}>
      <div className="h-[180px] p-5 flex flex-col justify-between relative overflow-hidden">
        <div className="text-sm font-semibold" style={{ color: tc, opacity: 0.8 }}>{cat.label}</div>
        <div>
          <div className="h-2 rounded mb-1" style={{ background: cat.accent, width: "50%", opacity: 0.6 }} />
          <div className="h-1.5 rounded mb-1" style={{ background: tc, width: "75%", opacity: 0.12 }} />
          <div className="h-1.5 rounded" style={{ background: tc, width: "60%", opacity: 0.08 }} />
        </div>
        <div className="absolute bottom-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-25"
          style={{ background: cat.accent }} />
      </div>
      <div className="px-4 py-3 border-t" style={{ borderColor: tc === "#FFF" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)" }}>
        <p className="font-semibold text-sm" style={{ color: tc, opacity: 0.9 }}>{cat.label}</p>
        <p className="text-xs" style={{ color: tc, opacity: 0.5 }}>{cat.desc}</p>
      </div>
    </div>
  );
}

export default function TemplateCategoriesSection() {
  const [active, setActive] = useState("Agency");

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1180px] mx-auto px-6">
        {/* Category filter tabs */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button key={cat.label}
              onClick={() => setActive(cat.label)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${active === cat.label ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(cat => (
            <div key={cat.label} onClick={() => setActive(cat.label)}>
              <CategoryCard cat={cat} active={active === cat.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
