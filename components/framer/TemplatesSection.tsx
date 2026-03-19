"use client";

const templatePreviews = [
  { bg: "#0F0F1A", label: "Agency", accent: "#8B5CF6" },
  { bg: "#F5F0FF", label: "Blog", accent: "#EC4899", dark: false },
  { bg: "#0A1A1A", label: "Landing Page", accent: "#06B6D4" },
  { bg: "#F0F5FF", label: "Personal", accent: "#3B82F6", dark: false },
  { bg: "#0F1A0A", label: "Photography", accent: "#22C55E" },
  { bg: "#1A0F0A", label: "Portfolio", accent: "#F97316" },
  { bg: "#0A0A1A", label: "Startup", accent: "#7C3AED" },
  { bg: "#1A0A0A", label: "Podcast", accent: "#EF4444" },
  { bg: "#F5F5F0", label: "Web3", accent: "#8B5CF6", dark: false },
  { bg: "#0A1A0A", label: "Ecommerce", accent: "#10B981" },
  { bg: "#1A1A0A", label: "Brand", accent: "#EAB308" },
  { bg: "#0A0F1A", label: "3D", accent: "#60A5FA" },
];

function TemplateCard({ t }: { t: typeof templatePreviews[0] }) {
  const tc = t.dark === false ? "#111" : "#FFF";
  return (
    <div className="flex-shrink-0 w-[240px] h-[160px] rounded-xl overflow-hidden mx-2 cursor-pointer hover:scale-[1.03] transition-transform"
      style={{ background: t.bg, border: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="h-full p-5 flex flex-col justify-between relative overflow-hidden">
        <div className="text-sm font-semibold" style={{ color: tc, opacity: 0.8 }}>{t.label}</div>
        <div className="space-y-1.5">
          <div className="h-2 rounded" style={{ background: t.accent, width: "45%", opacity: 0.7 }} />
          <div className="h-1.5 rounded" style={{ background: tc, width: "70%", opacity: 0.15 }} />
          <div className="h-1.5 rounded" style={{ background: tc, width: "55%", opacity: 0.1 }} />
        </div>
        <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-30"
          style={{ background: t.accent }} />
      </div>
    </div>
  );
}

function TemplateRow({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...templatePreviews, ...templatePreviews];
  return (
    <div className="overflow-hidden py-2">
      <div className="flex" style={{
        animation: `${reverse ? "marqueeRight" : "marqueeLeft"} 35s linear infinite`,
        width: "max-content",
      }}>
        {doubled.map((t, i) => <TemplateCard key={i} t={t} />)}
      </div>
    </div>
  );
}

export default function TemplatesSection() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      {/* Scrolling template previews */}
      <div className="mb-16 space-y-3">
        <TemplateRow />
        <TemplateRow reverse />
      </div>

      {/* Text content */}
      <div className="text-center px-6 max-w-3xl mx-auto">
        <h2 className="text-[56px] md:text-[72px] font-bold leading-none tracking-tight mb-6"
          style={{ background: "linear-gradient(135deg, #FF7A29 0%, #FF4E88 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          Top-notch templates.
        </h2>
        <p className="text-xl text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
          Browse dozens of professionally designed templates. Easily change structure, style,
          and graphics—then publish instantly.
        </p>
        <button className="px-8 py-3.5 text-white font-semibold text-lg rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          style={{ background: "linear-gradient(135deg, #FF7A29, #FF4E88)" }}>
          Browse templates
        </button>
      </div>
    </section>
  );
}
