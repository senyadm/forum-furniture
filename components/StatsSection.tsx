"use client";

import { useEffect, useState } from "react";

const stats = [
  { value: "25+", label: "Лет Опыта" },
  { value: "5000+", label: "Установленных Кухонь" },
  { value: "4800+", label: "Довольных Клиентов" },
  { value: "120+", label: "Уникальных Дизайн-Решений" },
];

export default function StatsSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="
        relative w-screen max-w-none ml-[calc(50%-50vw)]
        py-14 md:py-20 bg-[#F9FAFB] overflow-hidden
      "
    >
      {/* Элегантный soft-glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 w-[900px] h-[300px] -translate-x-1/2 bg-gradient-to-b from-white/70 to-transparent blur-2xl opacity-50" />
      </div>

      {/* GRID: мобилка 2x2 плитки / десктоп как было */}
      <div
        className={`
          relative
          transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}

          /* DESKTOP (как у тебя) */
          md:grid md:grid-cols-4 md:text-center
          md:gap-0
          md:px-16 lg:px-24 xl:px-40

          /* MOBILE (красиво) */
          grid grid-cols-2 gap-3 px-4
        `}
      >
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="
              relative group

              /* MOBILE: премиальные карточки */
              rounded-2xl
              border border-slate-200/80
              bg-white/70
              backdrop-blur-sm
              shadow-[0_12px_40px_rgba(0,0,0,0.06)]
              px-4 py-5
              flex flex-col items-center justify-center text-center
              min-h-[108px]

              /* DESKTOP: полностью как было */
              md:rounded-none md:border-0 md:bg-transparent md:shadow-none md:px-0 md:py-4 md:min-h-0
              md:flex md:flex-col md:items-center md:justify-center
            "
          >
            {/* Цифры */}
            <h3
              className="
                text-4xl md:text-5xl font-semibold text-[#111] tracking-tight
                transition-all duration-300
                group-hover:scale-[1.08]
              "
            >
              {item.value}
            </h3>

            {/* Подпись */}
            <p className="mt-2 text-[11px] md:text-sm text-slate-600 tracking-wide leading-snug">
              {item.label}
            </p>

            {/* Вертикальный делитель (только DESKTOP, как было) */}
            {idx !== stats.length - 1 && (
              <div
                className="
                  hidden md:block absolute right-0 top-1/2 h-14 w-px
                  -translate-y-1/2
                  bg-gradient-to-b from-transparent via-slate-300 to-transparent
                "
              />
            )}

            {/* Микро-линия снизу (только MOBILE, делает дороже) */}
            <div className="mt-4 h-px w-10 bg-slate-200/80 md:hidden" />
          </div>
        ))}
      </div>

      {/* Нижняя элегантная линия */}
      <div className="mt-10 md:mt-20 h-[1px] w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-60" />
    </section>
  );
}
