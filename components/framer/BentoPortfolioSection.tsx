"use client";

import { useState, useRef } from "react";

const projects = [
  { num: "01", label: "КŌJI Restaurant", tag: "Ресторант", src: "/demo2.mov" },
  { num: "02", label: "Nexus SaaS Platform", tag: "SaaS / Технология", src: "/demo.mov" },
];

export default function BentoPortfolioSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const mobileVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleClick = (i: number) => {
    const next = selected === i ? null : i;
    setSelected(next);
    // Desktop sticky video
    videoRefs.current.forEach((v, idx) => {
      if (idx === i && next === i) { v?.play().catch(() => {}); }
      else { v?.pause(); if (v) v.currentTime = 0; }
    });
    // Mobile inline video
    mobileVideoRefs.current.forEach((v, idx) => {
      if (idx === i && next === i) { v?.play().catch(() => {}); }
      else { v?.pause(); if (v) v.currentTime = 0; }
    });
  };

  const active = selected ?? 0;

  return (
    <section className="bg-[#0A0F1E] py-24 px-6" id="projects">
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="overflow-hidden">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#3B7AE8" }}>
              Наши проекти
            </p>
            <h2
              className="font-black leading-none tracking-tighter select-none"
              style={{
                fontSize: "clamp(72px, 10vw, 140px)",
                color: "rgba(240,244,255,0.11)",
                letterSpacing: "-0.02em",
              }}
            >
              Работата<br />говори сама.
            </h2>
          </div>
        </div>

        {/* List + Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-12 lg:gap-20 items-start">

          {/* Project list */}
          <div>
            {projects.map((p, i) => (
              <div key={i}>
                <div
                  onClick={() => handleClick(i)}
                  className="group border-b flex items-center gap-6 py-8 cursor-pointer"
                  style={{
                    borderColor: "rgba(240,244,255,0.07)",
                    opacity: selected === null || selected === i ? 1 : 0.3,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  {/* Number */}
                  <span
                    className="font-mono flex-shrink-0"
                    style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", color: "#3B7AE8" }}
                  >
                    {p.num}
                  </span>

                  {/* Name */}
                  <span
                    className="font-black flex-1 leading-none tracking-tight"
                    style={{
                      fontSize: "clamp(26px, 3.2vw, 52px)",
                      color: "#F0F4FF",
                      transition: "color 0.3s",
                    }}
                  >
                    {p.label}
                  </span>

                  {/* Tag */}
                  <span
                    className="hidden sm:block text-xs font-semibold tracking-widest uppercase flex-shrink-0"
                    style={{ color: "rgba(240,244,255,0.25)" }}
                  >
                    {p.tag}
                  </span>

                  {/* Arrow — rotates on mobile when expanded */}
                  <svg
                    width="18" height="18" viewBox="0 0 18 18" fill="none"
                    className="flex-shrink-0 transition-all duration-300"
                    style={{
                      transform: selected === i ? "rotate(90deg)" : "translate(0,0)",
                      color: selected === i ? "#3B7AE8" : "rgba(240,244,255,0.2)",
                    }}
                  >
                    <path d="M4 14L14 4M14 4H7M14 4V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Mobile inline video — visible only on < lg */}
                <div
                  className="lg:hidden overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: selected === i ? 300 : 0,
                    opacity: selected === i ? 1 : 0,
                  }}
                >
                  <div className="relative rounded-xl overflow-hidden mb-4" style={{ aspectRatio: "16/10" }}>
                    <video
                      ref={(el) => { mobileVideoRefs.current[i] = el; }}
                      src={p.src}
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 pointer-events-none"
                      style={{ background: "linear-gradient(to top, rgba(10,15,30,0.7) 0%, transparent 50%)" }} />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="font-black leading-none tracking-tight text-[#F0F4FF]" style={{ fontSize: 18 }}>{p.label}</p>
                      <p className="text-xs mt-1 font-semibold tracking-widest uppercase" style={{ color: "#3B7AE8" }}>{p.tag}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Divider after last */}
            <div style={{ height: 1, background: "rgba(240,244,255,0.07)" }} />
          </div>

          {/* Sticky video preview */}
          <div
            className="sticky top-24 hidden lg:block"
          >
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "rgba(240,244,255,0.25)" }}>
              Избери проект за преглед
            </p>
            <div style={{ aspectRatio: "16/10" }}>
            <div
              className="relative w-full h-full rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(59,122,232,0.15)",
              }}
            >
              {/* Videos stacked, active one fades in */}
              {projects.map((p, i) => (
                <video
                  key={i}
                  ref={(el) => { videoRefs.current[i] = el; }}
                  src={p.src}
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    opacity: active === i ? 1 : 0,
                    transition: "opacity 0.5s ease",
                  }}
                />
              ))}

              {/* Bottom gradient + label */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(10,15,30,0.8) 0%, transparent 50%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p
                  className="font-black leading-none tracking-tight"
                  style={{ fontSize: "clamp(18px, 2vw, 28px)", color: "#F0F4FF" }}
                >
                  {projects[active].label}
                </p>
                <p className="text-xs mt-1.5 font-semibold tracking-widest uppercase" style={{ color: "#3B7AE8" }}>
                  {projects[active].tag}
                </p>
              </div>
            </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
