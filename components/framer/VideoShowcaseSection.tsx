"use client";

import { useEffect, useRef } from "react";

export default function VideoShowcaseSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#0A0F1E] py-24 px-6 overflow-hidden">
      <div className="max-w-[1180px] mx-auto">

        {/* Label */}
        <p
          className="text-sm font-semibold tracking-widest uppercase mb-4"
          style={{ color: "#3B7AE8" }}
        >
          В действие
        </p>

        {/* Heading */}
        <h2
          className="font-black leading-tight tracking-tight mb-16"
          style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            color: "#F0F4FF",
          }}
        >
          Вижте резултата
        </h2>

        {/* Video wrapper */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            boxShadow: "0 0 80px rgba(59,122,232,0.15), 0 40px 80px rgba(0,0,0,0.6)",
            border: "1px solid rgba(59,122,232,0.2)",
          }}
        >
          {/* Fake browser chrome */}
          <div
            className="flex items-center gap-2 px-4"
            style={{
              height: 36,
              background: "rgba(15,20,40,0.95)",
              borderBottom: "1px solid rgba(59,122,232,0.15)",
            }}
          >
            {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full"
                style={{ background: c }}
              />
            ))}
            <div
              className="ml-4 flex-1 max-w-xs rounded-md px-3 text-xs"
              style={{
                background: "rgba(240,244,255,0.05)",
                border: "1px solid rgba(240,244,255,0.08)",
                color: "rgba(240,244,255,0.3)",
                height: 22,
                lineHeight: "22px",
              }}
            >
              yoursite.com
            </div>
          </div>

          {/* Video */}
          <video
            ref={videoRef}
            src="/demo.mov"
            muted
            loop
            playsInline
            className="w-full block"
            style={{ display: "block", maxHeight: 640, objectFit: "cover" }}
          />
        </div>

      </div>
    </section>
  );
}
