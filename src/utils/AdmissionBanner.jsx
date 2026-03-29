import { useState, useEffect } from "react";

const starPositions = [
  { top: "8%", left: "5%", size: 6, delay: 0 },
  { top: "15%", left: "92%", size: 4, delay: 0.3 },
  { top: "70%", left: "3%", size: 5, delay: 0.6 },
  { top: "85%", left: "88%", size: 7, delay: 0.9 },
  { top: "40%", left: "97%", size: 4, delay: 0.2 },
  { top: "55%", left: "1%", size: 3, delay: 0.7 },
];

export default function AdmissionBanner() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center 
      bg-black/40
      ${closing ? "animate-fadeOut" : "animate-fadeIn"}`}
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-[94vw] max-w-[520px] rounded 
        bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950
        border border-yellow-600/40 shadow-2xl overflow-hidden
        ${closing ? "animate-scaleOut" : "animate-scaleIn"}`}
      >
        {/* Stars */}
        {starPositions.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-yellow-400/70 animate-pulse"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}

        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 w-7 h-7 text-yellow-400 border border-yellow-500/40 bg-yellow-500/10 hover:bg-yellow-500/20"
        >
          ✕
        </button>

        {/* Header */}
        <div className="text-center py-6 px-6 bg-gradient-to-br from-blue-900 to-blue-800">
          <h2 className="text-yellow-300 text-2xl font-bold">
            جامعہ حفصہ للبنات
          </h2>
          <p className="text-yellow-500 font-bold tracking-widest uppercase text-sm">
            Jamia Hafsa Lil Banat
          </p>
          <p className="text-yellow-200/60 text-xs italic mt-1">
            Islamic Education for Girls · Ratupura
          </p>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

        {/* Body */}
        <div className="p-6 text-yellow-100">

          <div className="mb-4 text-sm text-yellow-400 uppercase tracking-widest">
            ✦ Batch 2026–27 ✦ Admissions Open
          </div>

          <h3 className="text-xl mb-2 text-right">
            داخلہ شروع ہو گیا — ابھی درخواست دیں
          </h3>

          <p className="text-center text-yellow-200 mb-4">
            Admissions Now Open · Online Form Available
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-2 mb-4 text-xs">
            <span className="px-3 py-1 border border-yellow-500/30">
              🌐 Online Form
            </span>
            <span className="px-3 py-1 border border-yellow-500/30">
              📍 Ratupura
            </span>
            <span className="px-3 py-1 border border-yellow-500/30">
              📅 2026–27
            </span>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-2 text-sm mb-4">
            {[
              "Hifz-ul-Quran Program",
              "Aalima Course",
              "Tajweed Classes",
              "Online Registration",
              "Girls-Only Institute",
              "Experienced Faculty",
            ].map((f, i) => (
              <div key={i} className="flex gap-2">
                <span className="w-1 h-1 mt-2 bg-yellow-400 rounded-full"></span>
                {f}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex gap-3 items-center">
            <button
              onClick={() =>
                window.open("https://jamiahafsalilbanat.com", "_blank")
              }
              className="flex-1 bg-yellow-500 text-blue-900 py-2 text-xs font-bold uppercase tracking-widest hover:brightness-110"
            >
              Apply Now
            </button>

            <a
              href="https://jamiahafsalilbanat.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-yellow-400"
            >
              Website
            </a>
          </div>
        </div>

        {/* Bottom Glow */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
      </div>
    </div>
  );
}