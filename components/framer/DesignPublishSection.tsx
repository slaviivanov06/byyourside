"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

/* ─── Video Preview Card ─── */
function VideoCard({ label, src }: { label: string; src?: string }) {
  return (
    <div className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col"
      style={{ background: "#131D35", border: "1px solid rgba(240,244,255,0.12)", boxShadow: "0 4px 24px rgba(240,244,255,0.08)" }}>
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 h-10 flex-shrink-0"
        style={{ background: "#4F8EF7", borderBottom: "1px solid rgba(240,244,255,0.15)" }}>
        {["#ff5f57","#febc2e","#28c840"].map((c, i) => (
          <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
        ))}
        <div className="flex-1 mx-3 h-5 rounded-md flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.2)" }}>
          <span className="text-[10px] text-white/70">{label}</span>
        </div>
      </div>

      {/* Video area */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        {src ? (
          <video src={src} autoPlay loop muted playsInline className="w-full h-full object-cover" />
        ) : (
          <>
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, #131D35 0%, #0F1A30 50%, #0D1628 100%)" }} />
            <div className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: "linear-gradient(rgba(240,244,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(240,244,255,1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }} />
            <div className="relative z-10 flex flex-col items-center gap-3">
              <svg width="22" height="22" viewBox="0 0 18 18" fill="none">
                <path d="M5 3.5l11 5.5-11 5.5V3.5z" fill="rgba(240,244,255,0.35)" />
              </svg>
              <span className="text-[#F0F4FF]/35 text-xs tracking-widest uppercase">Примерен проект</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const extraProjects: { label: string; src?: string }[] = [
  { label: "проект-03.webstudio.bg" },
  { label: "проект-04.webstudio.bg" },
  { label: "проект-05.webstudio.bg" },
  { label: "проект-06.webstudio.bg" },
];

/* ─── Main Section ─── */
export default function DesignPublishSection() {
  const [showMore, setShowMore] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Arrow draw progress
  const arrowOpacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
  const editorX = useTransform(scrollYProgress, [0.25, 0.65], ["-22%", "0%"]);
  const publishedX = useTransform(scrollYProgress, [0.25, 0.65], ["22%", "0%"]);
  const splitOpacity = useTransform(scrollYProgress, [0.22, 0.5], [0, 1]);
  const splitScale = useTransform(scrollYProgress, [0.25, 0.65], [0.92, 1]);

  return (
    <div ref={containerRef}>
      {/* ── Part 1: Design, publish, done. ── */}
      <section className="relative overflow-hidden"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(170deg, #0A0F1E 0%, #0D1526 40%, #0B1322 75%, #0C1322 100%)",
        }}>
        {/* Noise overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-screen py-24">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="font-bold leading-tight tracking-tight mb-8"
            style={{ fontSize: "clamp(40px, 5.5vw, 76px)" }}>
            <span className="text-[#F0F4FF]">Избираме визия </span>
            <span className="bg-clip-text text-transparent inline-block" style={{ backgroundImage: "linear-gradient(135deg, #4F8EF7, #3B7AE8)" }}>заедно.</span>
            {" "}
            <span className="text-[#F0F4FF]">Изграждаме сайта. Пускаме го онлайн.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-[#F0F4FF]/55 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(16px, 1.5vw, 20px)" }}>
            Без излишно усложняване, без агенционен хаос и без да губиш време в технически дреболии. Получаваш сайт, който работи за бизнеса ти.
          </motion.p>
        </div>

        {/* Bottom fade — matches Part 2 start exactly */}
        <div className="absolute bottom-0 inset-x-0 h-48 pointer-events-none"
          style={{ background: "linear-gradient(to top, #0C1322, transparent)" }} />
      </section>

      {/* ── Part 2: Design → Publish split ── */}
      <section className="relative overflow-hidden py-24"
        style={{ background: "linear-gradient(180deg, #0C1322 0%, #0D1426 50%, #0A0F1E 100%)" }}>
        {/* Labels */}
        <motion.div
          style={{ opacity: arrowOpacity }}
          className="hidden sm:flex items-center justify-center gap-0 mb-8 px-6">
          <div className="flex-1 text-right pr-8">
            <span style={{ fontFamily: "var(--font-caveat)", fontSize: "clamp(26px, 3vw, 40px)", color: "rgba(255,255,255,0.75)", letterSpacing: "-0.01em" }}>
              от идея...
            </span>
          </div>
          <div className="relative w-36 flex-shrink-0 flex justify-center" style={{ marginTop: "-30px" }}>
            <svg width="144" height="72" viewBox="0 0 144 72" fill="none">
              <path d="M10 56 C16 18, 62 4, 110 40" stroke="rgba(240,244,255,0.65)" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M94 24 L110 40 L92 44" stroke="rgba(240,244,255,0.65)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
          <div className="flex-1 pl-8">
            <span style={{ fontFamily: "var(--font-caveat)", fontSize: "clamp(26px, 3vw, 40px)", color: "rgba(255,255,255,0.75)", letterSpacing: "-0.01em" }}>
              ...до готов сайт.
            </span>
          </div>
        </motion.div>

        {/* Split view */}
        <motion.div
          style={{ opacity: splitOpacity, scale: splitScale }}
          className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div style={{ x: showMore ? 0 : editorX }} transition={showMore ? { duration: 0.4, ease: [0.25,0.1,0.25,1] } : undefined} className="relative aspect-video">
              <VideoCard label="проект-01.webstudio.bg" />
            </motion.div>
            <motion.div style={{ x: showMore ? 0 : publishedX }} transition={showMore ? { duration: 0.4, ease: [0.25,0.1,0.25,1] } : undefined} className="relative aspect-video">
              <VideoCard label="проект-02.webstudio.bg" />
            </motion.div>
          </div>

          {/* Extra 4 projects */}
          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-2 gap-5 mt-5">
                  {extraProjects.slice(0, 2).map((p, i) => (
                    <motion.div
                      key={p.label}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="relative aspect-video"
                    >
                      <VideoCard label={p.label} src={p.src} />
                    </motion.div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  {extraProjects.slice(2).map((p, i) => (
                    <motion.div
                      key={p.label}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: (i + 2) * 0.1 }}
                      className="relative aspect-video"
                    >
                      <VideoCard label={p.label} src={p.src} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Show more / less button */}
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowMore(!showMore)}
              className="group flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-semibold text-[#F0F4FF]/70 hover:text-[#3B7AE8] transition-all"
              style={{
                background: "rgba(240,244,255,0.07)",
                border: "1px solid rgba(240,244,255,0.12)",
              }}
            >
              <span>{showMore ? "Скрий" : "Виж още проекти"}</span>
              <motion.svg
                animate={{ rotate: showMore ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                width="14" height="14" viewBox="0 0 14 14" fill="none"
              >
                <path d="M2.5 5l4.5 4 4.5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
