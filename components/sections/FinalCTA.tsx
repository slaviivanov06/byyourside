"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FloatingPaths } from "@/components/ui/floating-paths";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-16 py-40" ref={ref}>
        <div className="border-b border-white/10 pb-16 mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[10px] tracking-[0.25em] uppercase text-white/30 mb-10"
          >
            16 — Следваща стъпка
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white leading-[0.95] max-w-4xl"
          >
            Бизнесът ти заслужава да изглежда точно толкова добре, колкото реално е.
          </motion.h2>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base text-white/40 max-w-sm leading-relaxed"
          >
            Ако си готов да спреш да изглеждаш слаб онлайн и да изградиш сайт, който работи за бизнеса ти — започнем.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-start sm:items-end gap-3"
          >
            <a
              href="mailto:hello@sayt-s-harakter.bg"
              className="group inline-flex items-center gap-4 bg-white text-black px-8 py-5 text-sm font-bold tracking-tight hover:bg-white/90 transition-all duration-200"
            >
              Искам сайт с характер
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
            <p className="text-xs text-white/25 tracking-wide">Без ангажимент. Само разговор.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
