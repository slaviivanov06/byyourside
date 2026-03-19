"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

function ParallaxShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
  scrollSpeed = 100,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  scrollSpeed?: number;
}) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, scrollSpeed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8, delay, ease: "easeOut" }}
      className={cn("absolute", className)}
      style={{ y, rotate }}
    >
      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{
          duration: 14,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: delay * 2,
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.12]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.06)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Subtle base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.04] via-transparent to-rose-500/[0.04] blur-3xl" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Shapes — distributed across viewport with different parallax speeds */}

      {/* Top-left — large indigo, drifts up */}
      <ParallaxShape
        delay={0.2}
        width={700}
        height={160}
        rotate={12}
        gradient="from-indigo-500/[0.12]"
        scrollSpeed={-180}
        className="left-[-15%] top-[10%]"
      />

      {/* Top-right — large rose, drifts down */}
      <ParallaxShape
        delay={0.5}
        width={550}
        height={130}
        rotate={-18}
        gradient="from-rose-500/[0.12]"
        scrollSpeed={220}
        className="right-[-8%] top-[5%]"
      />

      {/* Center-left — violet, medium speed up */}
      <ParallaxShape
        delay={0.35}
        width={380}
        height={90}
        rotate={-6}
        gradient="from-violet-500/[0.13]"
        scrollSpeed={-120}
        className="left-[2%] top-[42%]"
      />

      {/* Center-right — amber, medium speed down */}
      <ParallaxShape
        delay={0.65}
        width={260}
        height={65}
        rotate={22}
        gradient="from-amber-500/[0.12]"
        scrollSpeed={160}
        className="right-[8%] top-[38%]"
      />

      {/* Bottom-left — cyan, drifts down */}
      <ParallaxShape
        delay={0.45}
        width={480}
        height={110}
        rotate={-10}
        gradient="from-cyan-500/[0.12]"
        scrollSpeed={140}
        className="left-[-5%] top-[68%]"
      />

      {/* Bottom-right — large indigo, drifts up fast */}
      <ParallaxShape
        delay={0.3}
        width={600}
        height={140}
        rotate={15}
        gradient="from-indigo-400/[0.10]"
        scrollSpeed={-240}
        className="right-[-12%] top-[72%]"
      />

      {/* Upper-center — small rose, fast down */}
      <ParallaxShape
        delay={0.7}
        width={180}
        height={45}
        rotate={-28}
        gradient="from-rose-400/[0.14]"
        scrollSpeed={320}
        className="left-[28%] top-[8%]"
      />

      {/* Lower-center — small violet, slow up */}
      <ParallaxShape
        delay={0.55}
        width={220}
        height={55}
        rotate={8}
        gradient="from-violet-400/[0.12]"
        scrollSpeed={-60}
        className="right-[30%] top-[80%]"
      />
    </div>
  );
}
