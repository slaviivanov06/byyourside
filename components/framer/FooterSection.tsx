"use client";

import { useState } from "react";
import OrderModal from "./OrderModal";
import ContactModal from "./ContactModal";

const footerLinks = {
  Company: ["About", "Careers", "Cookies", "Security", "Privacy", "Abuse", "Charges", "Terms"],
  Product: ["Learn", "Plugins", "Gallery", "Agencies", "Startups", "Freelancers", "Prototyping"],
  Templates: ["New", "Free", "Agency", "Blog", "Brand Guidelines", "Changelog", "Landing Page", "Personal", "Photography", "Podcast", "Portfolio", "Splash Page", "Startup", "Web3", "3D"],
  Resources: ["Desktop Apps", "Figma Plugin", "SEO", "Partner program", "Webflow vs. Framer"],
  Support: ["Updates", "Discord", "Startups", "Contact"],
};

function TikTokIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  );
}

export default function FooterSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedPkg, setSelectedPkg] = useState<string | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  const packages = [
    {
      name: "Старт",
      price: "200",
      suffix: "€",
      desc: "Най-достъпният начин да получите професионално онлайн присъствие. Чист дизайн, бърза скорост и всичко необходимо за старт.",
      features: [
        { label: "Мобилна оптимизация", included: true },
        { label: "Персонализиран дизайн", included: true },
        { label: "Бърза скорост на зареждане", included: true },
        { label: "Обратна връзка по време на работа", included: true },
        { label: "Настройка на домейн", included: false },
        { label: "Настройка на хостинг", included: false },
        { label: "Поддръжка след пускане", included: false },
      ],
      btnLabel: "Избери Старт",
      popular: false,
    },
    {
      name: "Про",
      price: "250",
      suffix: "€",
      oldPrice: "300€",
      discount: "-17%",
      desc: "За бизнеси, които искат да изпъкнат. Пълен дизайн с анимации и техническа настройка включена.",
      features: [
        { label: "Мобилна оптимизация", included: true },
        { label: "Персонализиран дизайн", included: true },
        { label: "Бърза скорост на зареждане", included: true },
        { label: "Обратна връзка по време на работа", included: true },
        { label: "Настройка на домейн", included: true },
        { label: "Настройка на хостинг", included: true },
        { label: "Поддръжка след пускане", included: false },
      ],
      btnLabel: "Избери Про",
      popular: true,
    },
    {
      name: "Премиум",
      price: "500",
      suffix: "€+",
      desc: "Цената варира според обхвата на проекта. Свържете се с нас — след кратък разговор за вашия бизнес ще изготвим индивидуална оферта.",
      features: [
        { label: "Мобилна оптимизация", included: true },
        { label: "Персонализиран дизайн", included: true },
        { label: "Бърза скорост на зареждане", included: true },
        { label: "Обратна връзка по време на работа", included: true },
        { label: "Настройка на домейн", included: true },
        { label: "Настройка на хостинг", included: true },
        { label: "3 месеца поддръжка след пускане", included: true },
      ],
      btnLabel: "Свържи се с нас",
      popular: false,
    },
  ];

  return (
    <>
    <OrderModal pkg={selectedPkg} onClose={() => setSelectedPkg(null)} />
    <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    <footer className="bg-[#0A0F1E] border-t border-white/[0.07]">
      {/* Pricing */}
      <div className="max-w-[1180px] mx-auto px-6 py-16 sm:py-24 border-b border-white/[0.07]">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#3B7AE8] mb-3">Ценови пакети</p>
          <div className="overflow-hidden">
            <h2
              className="font-black leading-none tracking-tighter select-none mb-4"
              style={{
                fontSize: "clamp(72px, 10vw, 140px)",
                color: "rgba(240,244,255,0.11)",
                letterSpacing: "-0.04em",
              }}
            >Изберете своя пакет</h2>
          </div>
          <p className="text-[#F0F4FF]/40 text-lg max-w-xl mx-auto">Изберете пакет и попълнете формуляр — не плащате нищо преди да се срещнем и да подпишем договор.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg, i) => {
            const hovered = hoveredCard === i;
            return (
              <div
                key={i}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative flex flex-col rounded-2xl p-5 sm:p-8 border transition-all duration-300 cursor-default"
                style={{
                  background: hovered ? "linear-gradient(145deg, #4F8EF7, #3B7AE8)" : "rgba(240,244,255,0.05)",
                  borderColor: hovered ? "transparent" : "rgba(240,244,255,0.12)",
                  boxShadow: hovered ? "0 20px 50px rgba(79,142,247,0.15)" : "none",
                  transform: hovered ? "translateY(-6px) scale(1.02)" : "translateY(0) scale(1)",
                  zIndex: hovered ? 10 : 1,
                }}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: hovered ? "rgba(255,255,255,0.2)" : "linear-gradient(90deg, #3B7AE8, #3B7AE8)" }}>
                      НАЙ-ПОПУЛЯРЕН
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <p className="text-sm font-medium mb-1 transition-colors duration-300"
                    style={{ color: hovered ? "rgba(255,255,255,0.7)" : "rgba(240,244,255,0.5)" }}>
                    {pkg.name}
                  </p>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-5xl font-bold transition-colors duration-300"
                      style={{ color: hovered ? "#fff" : "#F0F4FF" }}>
                      {pkg.price}
                    </span>
                    <span className="text-2xl font-semibold mb-1 transition-colors duration-300"
                      style={{ color: hovered ? "rgba(255,255,255,0.6)" : "rgba(240,244,255,0.5)" }}>
                      {pkg.suffix}
                    </span>
                  </div>
                  {pkg.oldPrice && (
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm line-through transition-colors duration-300"
                        style={{ color: hovered ? "rgba(255,255,255,0.4)" : "rgba(240,244,255,0.3)" }}>
                        {pkg.oldPrice}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ color: hovered ? "#fff" : "#3B7AE8", background: hovered ? "rgba(255,255,255,0.15)" : "rgba(79,142,247,0.12)" }}>
                        {pkg.discount}
                      </span>
                    </div>
                  )}
                  <p className="text-sm leading-relaxed transition-colors duration-300"
                    style={{ color: hovered ? "rgba(255,255,255,0.6)" : "rgba(240,244,255,0.5)" }}>
                    {pkg.desc}
                  </p>
                </div>

                <ul className="space-y-3 mb-10 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f.label} className="flex items-center gap-3 text-sm transition-colors duration-300"
                      style={{ color: f.included ? (hovered ? "rgba(255,255,255,0.8)" : "rgba(240,244,255,0.6)") : (hovered ? "rgba(255,255,255,0.3)" : "rgba(240,244,255,0.25)") }}>
                      {f.included ? (
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 16 16"
                          style={{ color: hovered ? "rgba(255,255,255,0.6)" : "#3B7AE8" }}>
                          <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 16 16"
                          style={{ color: hovered ? "rgba(255,255,255,0.25)" : "rgba(240,244,255,0.2)" }}>
                          <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      )}
                      {f.label}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => pkg.name === "Премиум" ? setContactOpen(true) : setSelectedPkg(pkg.name)}
                  className="w-full py-3 rounded-full text-sm font-semibold transition-all duration-300"
                  style={{
                    background: hovered ? "rgba(255,255,255,0.15)" : "linear-gradient(135deg, #3B7AE8, #3B7AE8)",
                    color: "#fff",
                    border: hovered ? "1px solid rgba(255,255,255,0.25)" : "none",
                  }}
                >
                  {pkg.btnLabel}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1180px] mx-auto px-6 py-8 flex items-center justify-between">
        <p className="text-[#F0F4FF]/30 text-sm">byyoursite © {new Date().getFullYear()}</p>
        <div className="flex items-center gap-4 text-[#F0F4FF]/30">
          {[TikTokIcon, InstagramIcon].map((Icon, i) => (
            <a key={i} href="#" className="hover:text-[#F0F4FF]/70 transition-colors">
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
    </>
  );
}
