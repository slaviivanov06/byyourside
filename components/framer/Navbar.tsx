"use client";

import { useState } from "react";
import { Zap, Menu, X } from "lucide-react";
import ContactModal from "./ContactModal";

const navTabs = [
  { label: "Наши проекти", href: "#projects", favicon: "#4F8EF7" },
  { label: "Процесът", href: "#process", favicon: "#4F8EF7" },
  { label: "Въпроси", href: "#faq", favicon: "#F59E0B" },
  { label: "За нас", href: "#about", favicon: "#4F8EF7" },
  { label: "Оферти", href: "#pricing", favicon: "#22C55E" },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <nav className="sticky top-0 z-50" style={{ background: "#0E1A30" }}>
        {/* Traffic lights + tabs row */}
        <div
          className="flex items-end"
          style={{
            background: "#080D1C",
            borderBottom: "1px solid rgba(240,244,255,0.1)",
            height: 44,
            paddingLeft: 16,
          }}
        >
          {/* Traffic lights */}
          <div className="hidden md:flex items-center gap-2 mb-3 mr-5 flex-shrink-0">
            {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
              <div key={i} className="w-3 h-3 rounded-full" style={{ background: c }} />
            ))}
          </div>

          {/* Logo tab (always active) */}
          <a
            href="#"
            className="hidden md:flex items-center gap-2 px-4 h-8 rounded-t-md flex-shrink-0"
            style={{
              background: "#0E1A30",
              border: "1px solid rgba(240,244,255,0.1)",
              borderBottom: "1px solid #0E1A30",
              marginBottom: -1,
            }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-white/40 flex items-center justify-center">
              <Zap size={7} className="text-white" fill="white" />
            </div>
            <span className="text-white text-xs font-semibold">By your site</span>
          </a>

          {/* Nav tabs — desktop */}
          <div className="hidden md:flex items-end h-full overflow-x-auto scrollbar-none">
            {navTabs.map((tab, i) => {
              const isActive = activeTab === i;
              return (
                <a
                  key={i}
                  href={tab.href}
                  onClick={() => setActiveTab(i)}
                  className="flex items-center gap-1.5 px-4 h-8 rounded-t-md flex-shrink-0 transition-all"
                  style={{
                    background: isActive ? "#0E1A30" : "rgba(240,244,255,0.05)",
                    border: "1px solid rgba(240,244,255,0.1)",
                    borderBottom: isActive ? "1px solid #0E1A30" : "1px solid rgba(240,244,255,0.1)",
                    marginBottom: -1,
                    marginLeft: 2,
                    minWidth: 110,
                  }}
                >
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: tab.favicon }} />
                  <span className={`text-[11px] truncate transition-colors ${isActive ? "text-[#F0F4FF]/80" : "text-[#F0F4FF]/35"}`}>
                    {tab.label}
                  </span>
                </a>
              );
            })}
          </div>

          {/* CTA buttons (right side) */}
          <div className="hidden md:flex items-center gap-2 ml-auto mb-2 pr-4 flex-shrink-0">
            <a
              href="#pricing"
              className="px-3 py-1 text-xs font-semibold text-white rounded-md transition-all hover:brightness-110"
              style={{ background: "linear-gradient(135deg, #3B7AE8, #3B7AE8)", boxShadow: "none" }}
            >
              Избери пакет
            </a>
            <button
              onClick={() => setContactOpen(true)}
              className="px-3 py-1 text-xs font-semibold text-[#F0F4FF] rounded-md transition-all hover:brightness-110"
              style={{ background: "rgba(240,244,255,0.12)", border: "1px solid rgba(240,244,255,0.18)" }}
            >
              Свържи се
            </button>
          </div>

          {/* Mobile logo + hamburger */}
          <div className="flex md:hidden items-center justify-between w-full px-2 mb-2">
            <a href="#" className="flex items-center gap-1.5">
              <Zap size={14} className="text-white" fill="white" />
              <span className="text-white text-sm font-semibold">By your site</span>
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-[#F0F4FF]/50 hover:text-white transition-colors p-1">
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Address bar */}
        <div
          className="hidden md:flex items-center gap-3 px-4"
          style={{
            background: "#0E1A30",
            height: 34,
            borderBottom: "1px solid rgba(240,244,255,0.07)",
          }}
        >
          <div className="flex items-center gap-1 text-[#F0F4FF]/15 flex-shrink-0">
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div
            className="flex-1 flex items-center px-3 rounded"
            style={{ background: "rgba(240,244,255,0.06)", height: 22, border: "1px solid rgba(240,244,255,0.09)", maxWidth: 480 }}
          >
            <span className="text-[10px] text-[#F0F4FF]/20 truncate">
              🔒 webstudio.bg{navTabs[activeTab] ? navTabs[activeTab].href : ""}
            </span>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[#1c0a00]/[0.1] px-4 py-3 space-y-1" style={{ background: "#0E1A30" }}>
            {navTabs.map((tab, i) => (
              <a
                key={i}
                href={tab.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 py-2.5 text-sm text-[#F0F4FF]/50 hover:text-white transition-colors"
              >
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: tab.favicon }} />
                {tab.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a href="#pricing" className="w-full py-2 text-xs font-semibold text-white text-center rounded-md" style={{ background: "linear-gradient(135deg, #3B7AE8, #3B7AE8)" }}>
                Избери пакет
              </a>
              <button onClick={() => { setMobileOpen(false); setContactOpen(true); }} className="w-full py-2 text-xs font-semibold text-[#F0F4FF] text-center rounded-md" style={{ background: "rgba(240,244,255,0.12)", border: "1px solid rgba(240,244,255,0.18)" }}>
                Свържи се
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
