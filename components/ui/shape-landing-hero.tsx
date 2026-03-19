"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";


function HeroGeometric({
  title1 = "Изгради сайт,",
  title2 = "който те кара да изглеждаш сериозно.",
}: {
  title1?: string;
  title2?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-5"
      >
        <p className="text-xs tracking-[0.25em] uppercase text-white/40 font-medium">
          Webface
        </p>
        <a
          href="#packages"
          className="text-xs px-4 py-2 rounded-full border border-white/15 text-white/60 hover:border-white/30 hover:text-white/90 transition-all duration-200"
        >
          Виж пакетите →
        </a>
      </motion.nav>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 md:mb-8 tracking-tighter leading-[0.9] whitespace-nowrap">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                {title1}{" "}
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg text-white/40 mb-4 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              БЕЗ агенционен хаос · БЕЗ да учиш код · БЕЗ да се занимаваш сам
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-3 items-center justify-center mt-8"
          >
            <a
              href="#packages"
              className="group flex items-center gap-2 bg-white text-[#080b14] px-6 py-3 rounded-full text-sm font-bold hover:bg-white/90 transition-all duration-200"
            >
              Искам сайт с характер
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
            </a>
            <a
              href="#packages"
              className="flex items-center gap-2 border border-white/15 text-white/50 px-6 py-3 rounded-full text-sm hover:border-white/30 hover:text-white/70 transition-all duration-200"
            >
              Виж пакетите
            </a>
          </motion.div>

          <motion.p
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-5 text-xs text-white/20"
          >
            Без ангажимент. Само разговор.
          </motion.p>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/8 px-8 py-3 flex justify-between">
        <p className="text-[10px] tracking-widest uppercase text-white/15">Изработка на сайтове</p>
        <p className="text-[10px] tracking-widest uppercase text-white/15">Малък бизнес</p>
      </div>
    </div>
  );
}

export { HeroGeometric };
