"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  pkg: string | null;
  onClose: () => void;
}

const serviceTypes = [
  "Ресторант / Кафе",
  "Магазин / E-commerce",
  "Фитнес / Здраве",
  "Красота / Козметика",
  "Строителство / Ремонти",
  "Правни / Финансови услуги",
  "Образование / Обучения",
  "Туризъм / Хотел",
  "Лично портфолио",
  "Друго",
];

export default function OrderModal({ pkg, onClose }: Props) {
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    businessName: "", serviceType: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Получихме вашата заявка! Ще се свържем скоро.");
    onClose();
  };

  const inputCls = "w-full px-4 py-3 rounded-full text-sm text-[#F0F4FF] outline-none transition-all focus:ring-2 focus:ring-[#3B7AE8]/30";
  const inputStyle = { background: "rgba(240,244,255,0.05)", border: "1px solid rgba(240,244,255,0.12)" };

  return (
    <AnimatePresence>
      {pkg !== null && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-50"
            style={{ background: "rgba(240,244,255,0.5)", backdropFilter: "blur(6px)" }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-md rounded-2xl p-8 pointer-events-auto max-h-[90vh] overflow-y-auto"
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

              {/* Header */}
              <div className="mb-7">
                <p className="text-xs font-bold tracking-widest uppercase text-[#3B7AE8] mb-1">Избран пакет: {pkg}</p>
                <h3 className="text-2xl font-bold text-[#F0F4FF] tracking-tight">Изпратете заявка</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* За вас */}
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-[#F0F4FF]/35 mb-3">За вас</p>
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-semibold text-[#F0F4FF]/50 mb-1.5 block">Две имена</label>
                      <input type="text" placeholder="Иван Иванов" value={form.name} onChange={set("name")}
                        className={inputCls} style={inputStyle} required />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#F0F4FF]/50 mb-1.5 block">Телефон</label>
                      <input type="tel" placeholder="+359 88 888 8888" value={form.phone} onChange={set("phone")}
                        className={inputCls} style={inputStyle} required />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#F0F4FF]/50 mb-1.5 block">Имейл</label>
                      <input type="email" placeholder="ivan@example.com" value={form.email} onChange={set("email")}
                        className={inputCls} style={inputStyle} required />
                    </div>
                  </div>
                </div>

                {/* Разделител */}
                <div style={{ borderTop: "1px solid rgba(240,244,255,0.08)" }} />

                {/* За вашия бизнес */}
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-[#F0F4FF]/35 mb-3">За вашия бизнес</p>
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-semibold text-[#F0F4FF]/50 mb-1.5 block">Тип услуга</label>
                      <select value={form.serviceType} onChange={set("serviceType")}
                        className={inputCls} style={{ ...inputStyle, appearance: "none" as const, cursor: "pointer" }} required>
                        <option value="" disabled>Изберете тип...</option>
                        {serviceTypes.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#F0F4FF]/50 mb-1.5 block">Име на бизнеса</label>
                      <input type="text" placeholder="Примерен ЕООД" value={form.businessName} onChange={set("businessName")}
                        className={inputCls} style={inputStyle} required />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-[0.98]"
                  style={{ background: "linear-gradient(135deg, #3B7AE8, #3B7AE8)" }}
                >
                  Изпрати заявка
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
