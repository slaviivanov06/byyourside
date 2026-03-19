"use client";

const sites = [
  { bg: "#0F0F1A", name: "Framer", sub: "framer.com", accent: "#FF6B35", label: "Framer" },
  { bg: "#F5F5F0", name: "Amie Calendar", sub: "amie.so", accent: "#7C3AED", dark: false, label: "Amie" },
  { bg: "#F0F0F0", name: "Richard Ekwonye", sub: "Creative Developer", accent: "#111", dark: false, heading: "CREATIVE DEVELOPER" },
  { bg: "#080808", name: "Vince Staples", sub: "vincestaples.com", accent: "#888", label: "Portrait" },
  { bg: "#0D0D2E", name: "Digital Designer", sub: "portfolio.framer.website", accent: "#7B2FBE", label: "DD" },
  { bg: "#060A0A", name: "godly.website", sub: "godly.website", accent: "#22D3EE", label: "godly" },
  { bg: "#0A1A10", name: "Tech Barcelona", sub: "techbarcelona.eu", accent: "#10B981", label: "TB" },
  { bg: "#1A0505", name: "Winamp", sub: "winamp.com", accent: "#EF4444", label: "WINAMP" },
  { bg: "#0F1A2E", name: "Focal", sub: "focal.framer.website", accent: "#F59E0B", label: "FOCAL" },
  { bg: "#F5F0FF", name: "Paradox", sub: "paradox.ai", accent: "#7C3AED", dark: false, label: "Paradox" },
  { bg: "#0A0F1A", name: "Indie", sub: "indie.framer.website", accent: "#FB923C", label: "Indie." },
  { bg: "#F0F5F0", name: "Pocket Savings", sub: "pocket.framer.website", accent: "#059669", dark: false, label: "Pocket" },
];

function SiteCard({ site }: { site: typeof sites[0] }) {
  const textColor = site.dark === false ? "#111" : "#FFF";
  return (
    <div className="flex-shrink-0 rounded-xl overflow-hidden border border-white/10 w-[320px] mx-2"
      style={{ background: site.bg, boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}>
      {/* Browser chrome */}
      <div className="h-8 flex items-center gap-2 px-3 border-b border-white/[0.06]" style={{ background: site.bg }}>
        {["#ff5f57","#febc2e","#28c840"].map((c,i) => (
          <div key={i} className="w-3 h-3 rounded-full" style={{ background: c }} />
        ))}
        <div className="flex-1 mx-2 h-4 rounded-full flex items-center px-2" style={{ background: "rgba(255,255,255,0.06)" }}>
          <span className="text-[9px]" style={{ color: "rgba(255,255,255,0.3)" }}>https://framer.com</span>
        </div>
      </div>
      {/* Content */}
      <div className="h-[200px] p-5 flex flex-col justify-between relative overflow-hidden">
        <div className="text-2xl font-bold" style={{ color: textColor, opacity: 0.9 }}>
          {site.heading || site.label || site.name}
        </div>
        <div className="space-y-2">
          <div className="h-2 rounded" style={{ background: site.accent, width: "50%", opacity: 0.6 }} />
          <div className="h-2 rounded" style={{ background: textColor, width: "70%", opacity: 0.15 }} />
          <div className="h-2 rounded" style={{ background: textColor, width: "55%", opacity: 0.1 }} />
        </div>
        {/* Decorative accent */}
        <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20"
          style={{ background: site.accent }} />
      </div>
    </div>
  );
}

function MarqueeRow({ direction = 1, speed = 40 }: { direction?: number; speed?: number }) {
  const doubled = [...sites, ...sites];
  return (
    <div className="flex overflow-hidden py-2">
      <div className="flex" style={{
        animation: `marquee${direction > 0 ? "Left" : "Right"} ${speed}s linear infinite`,
        width: "max-content",
      }}>
        {doubled.map((site, i) => <SiteCard key={i} site={site} />)}
      </div>
    </div>
  );
}

export default function SitesGallery() {
  return (
    <section className="bg-[#060610] py-12 overflow-hidden">
      <div className="space-y-3">
        <MarqueeRow direction={1} speed={45} />
        <MarqueeRow direction={-1} speed={40} />
        <MarqueeRow direction={1} speed={50} />
      </div>

      <style>{`
        @keyframes marqueeLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
