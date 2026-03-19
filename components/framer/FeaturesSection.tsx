"use client";

import { Play, ArrowRight } from "lucide-react";

function FeatureCard({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`rounded-2xl overflow-hidden ${className}`} style={style}>
      {children}
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1180px] mx-auto px-6 space-y-4">

        {/* Row 1: Design + Layout */}
        <div className="grid grid-cols-5 gap-4">
          {/* Design */}
          <FeatureCard className="col-span-3 p-8 relative overflow-hidden min-h-[320px] flex flex-col justify-between"
            style={{ background: "linear-gradient(135deg, #7B2FBE 0%, #C026D3 100%)" }}>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-white text-xl font-bold mb-2">Design</h3>
                <p className="text-white/70 text-sm max-w-xs leading-relaxed">
                  A freeform canvas with built-in icon packs, stock photos, and more.
                </p>
              </div>
              <button className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                <Play size={14} className="text-white" fill="white" />
              </button>
            </div>
            {/* Canvas mockup */}
            <div className="relative mt-6">
              <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { bg: "#E0C8F0", h: "h-20" },
                    { bg: "#D4C4E8", h: "h-20", selected: true },
                    { bg: "#C8B8E0", h: "h-20" },
                  ].map((card, i) => (
                    <div key={i} className={`${card.h} rounded-lg flex items-end p-2 ${card.selected ? "ring-2 ring-white" : ""}`}
                      style={{ background: card.bg }}>
                      {card.selected && (
                        <div className="space-y-1 w-full">
                          <div className="h-1 rounded bg-white/60 w-full" />
                          <div className="h-1 rounded bg-white/40 w-2/3" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full blur-3xl opacity-30" style={{ background: "#EC4899" }} />
          </FeatureCard>

          {/* Layout */}
          <FeatureCard className="col-span-2 p-8 flex flex-col justify-between min-h-[320px]"
            style={{ background: "#F8F8FA", border: "1px solid #E8E8EF" }}>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-gray-900 text-xl font-bold mb-2">Layout</h3>
                <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                  Easily create layouts that adapt to any size.
                </p>
              </div>
              <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
                <Play size={14} className="text-gray-600" fill="#4B5563" />
              </button>
            </div>
            {/* Breakpoint UI */}
            <div className="mt-4 bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-blue-500">Breakpoint</span>
                <span className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">+</span>
              </div>
              <div className="space-y-3">
                {[{ label: "Tablet", val: "810" }, { label: "Mobile", val: "390" }].map(b => (
                  <div key={b.label} className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
                    <span className="text-sm text-gray-700 font-medium">{b.label}</span>
                    <span className="text-sm text-gray-400 font-mono">{b.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </FeatureCard>
        </div>

        {/* Row 2: Collaboration + CMS */}
        <div className="grid grid-cols-5 gap-4">
          {/* Collaboration */}
          <FeatureCard className="col-span-2 p-8 min-h-[280px] flex flex-col justify-between"
            style={{ background: "linear-gradient(135deg, #EF4444 0%, #F97316 100%)" }}>
            <div>
              <h3 className="text-white text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Work together and chat with your team in real-time.
              </p>
            </div>
            {/* Chat bubbles */}
            <div className="space-y-2 mt-4">
              {["Team chat here...", "Looking good! 🎉", "Ship it!"].map((msg, i) => (
                <div key={i} className={`px-3 py-2 rounded-2xl text-xs text-white/90 max-w-[80%] ${i % 2 === 0 ? "bg-white/15 self-start" : "bg-white/20 ml-auto"}`}
                  style={{ marginLeft: i % 2 !== 0 ? "auto" : undefined }}>
                  {msg}
                </div>
              ))}
            </div>
          </FeatureCard>

          {/* CMS */}
          <FeatureCard className="col-span-3 p-8 min-h-[280px] flex flex-col justify-between"
            style={{ background: "#F8F8FA", border: "1px solid #E8E8EF" }}>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-gray-900 text-xl font-bold mb-2">Content Management System</h3>
                <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
                  Run a blog, list job openings, or manage your event schedule.
                </p>
              </div>
              <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
                <ArrowRight size={14} className="text-gray-600" />
              </button>
            </div>
            {/* CMS Table mockup */}
            <div className="mt-4 bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="grid grid-cols-3 gap-0 border-b border-gray-100 px-4 py-2">
                {["Title","Date","Status"].map(h => <span key={h} className="text-xs text-gray-400 font-medium">{h}</span>)}
              </div>
              {["New blog post","Getting started","Framer 101"].map((title, i) => (
                <div key={i} className="grid grid-cols-3 gap-0 px-4 py-2.5 border-b border-gray-50 hover:bg-gray-50 cursor-pointer">
                  <span className="text-xs text-gray-700 font-medium">{title}</span>
                  <span className="text-xs text-gray-400">Mar {i + 1}, 2022</span>
                  <span className={`text-xs font-medium ${i === 0 ? "text-green-500" : "text-gray-400"}`}>{i === 0 ? "Published" : "Draft"}</span>
                </div>
              ))}
            </div>
          </FeatureCard>
        </div>

        {/* Row 3: Figma to Framer - Full width */}
        <FeatureCard className="p-8 min-h-[280px] grid grid-cols-2 gap-8 items-center"
          style={{ background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)" }}>
          <div>
            <h3 className="text-white text-2xl font-bold mb-3">Figma to Framer Import</h3>
            <p className="text-white/70 text-base leading-relaxed">
              Copy and paste your web designs from Figma to Framer and hit publish.
            </p>
            <button className="mt-6 flex items-center gap-2 text-white/80 hover:text-white transition text-sm font-medium">
              Learn more <ArrowRight size={14} />
            </button>
          </div>
          {/* Editor mockup */}
          <div className="bg-[#0A0A14] rounded-xl border border-white/10 overflow-hidden">
            <div className="h-8 flex items-center gap-2 px-3 border-b border-white/10">
              {["#ff5f57","#febc2e","#28c840"].map((c,i) => (
                <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
              ))}
              <span className="text-[10px] text-white/30 mx-auto">https://your-website.framer.website/</span>
            </div>
            <div className="p-4">
              <div className="text-white/80 text-lg font-medium mb-1">doka</div>
              <div className="text-white/40 text-xs mb-4">A collection of photos from around the world.</div>
              <div className="grid grid-cols-3 gap-2">
                {["#1E3A5F","#2D4A7A","#3A6B9A"].map((c,i) => (
                  <div key={i} className="h-16 rounded-lg" style={{ background: c }} />
                ))}
              </div>
            </div>
          </div>
        </FeatureCard>

        {/* Row 4: Hosting + SEO */}
        <div className="grid grid-cols-2 gap-4">
          {/* Hosting */}
          <FeatureCard className="p-8 min-h-[200px] flex flex-col justify-between"
            style={{ background: "linear-gradient(135deg, #0D9488 0%, #059669 100%)" }}>
            <div>
              <h3 className="text-white text-xl font-bold mb-2">Hosting</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Blazing fast—with versioning and built-in traffic analytics.
              </p>
            </div>
            <div className="flex items-end gap-2 mt-4">
              {[40,65,80,55,90,70,85].map((h,i) => (
                <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h * 0.7}px`, background: "rgba(255,255,255,0.25)" }} />
              ))}
            </div>
          </FeatureCard>

          {/* SEO */}
          <FeatureCard className="p-8 min-h-[200px] flex flex-col justify-between"
            style={{ background: "#F8F8FA", border: "1px solid #E8E8EF" }}>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-gray-900 text-xl font-bold mb-2">SEO</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Give your page a title and description, and rank on search engines.
                </p>
              </div>
              <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
                <ArrowRight size={14} className="text-gray-600" />
              </button>
            </div>
            <div className="mt-4 bg-white rounded-xl border border-gray-200 p-3 shadow-sm space-y-2">
              <div>
                <label className="text-[10px] text-gray-400">Page title</label>
                <div className="h-7 bg-gray-50 rounded border border-gray-200 flex items-center px-2">
                  <span className="text-xs text-gray-600">My Framer Site</span>
                </div>
              </div>
              <div>
                <label className="text-[10px] text-gray-400">Description</label>
                <div className="h-7 bg-gray-50 rounded border border-gray-200 flex items-center px-2">
                  <span className="text-xs text-gray-400">Add a description...</span>
                </div>
              </div>
            </div>
          </FeatureCard>
        </div>

      </div>
    </section>
  );
}

