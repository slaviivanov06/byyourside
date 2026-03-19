"use client";

import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50"
            style={{ background: "rgba(240,244,255,0.5)", backdropFilter: "blur(6px)" }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-sm rounded-2xl p-8 pointer-events-auto"
              style={{ background: "#0A0F1E", border: "1px solid rgba(240,244,255,0.1)", boxShadow: "0 24px 60px rgba(240,244,255,0.15)" }}
            >
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all hover:bg-black/10"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 2l10 10M12 2L2 12" stroke="#F0F4FF" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>

              <div className="mb-6">
                <p className="text-xs font-bold tracking-widest uppercase text-[#3B7AE8] mb-1">Свържете се с нас</p>
                <h3 className="text-2xl font-bold text-[#F0F4FF] tracking-tight">Изберете начин</h3>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => { onClose(); document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="flex items-center gap-4 w-full px-5 py-4 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98]"
                  style={{ background: "linear-gradient(135deg, #3B7AE8, #2F66CC)", border: "1px solid rgba(59,122,232,0.4)" }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.15)" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M9 12l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-white/60 font-medium mb-0.5">Започни оттук</p>
                    <p className="text-white font-semibold text-sm">Избери план</p>
                  </div>
                </button>

                <a
                  href="tel:+359885409859"
                  className="flex items-center gap-4 w-full px-5 py-4 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98]"
                  style={{ background: "rgba(240,244,255,0.05)", border: "1px solid rgba(240,244,255,0.1)" }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #3B7AE8, #3B7AE8)" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#F0F4FF]/40 font-medium mb-0.5">Телефон</p>
                    <p className="text-[#F0F4FF] font-semibold text-sm">0885 409 859</p>
                  </div>
                </a>

                <a
                  href="mailto:byyoursite@gmail.com"
                  className="flex items-center gap-4 w-full px-5 py-4 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98]"
                  style={{ background: "rgba(240,244,255,0.05)", border: "1px solid rgba(240,244,255,0.1)" }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #3B7AE8, #3B7AE8)" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6l-10 7L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#F0F4FF]/40 font-medium mb-0.5">Имейл</p>
                    <p className="text-[#F0F4FF] font-semibold text-sm">byyoursite@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
