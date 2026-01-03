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
        py-20 bg-[#F9FAFB] overflow-hidden
      "
    >
      {/* Элегантный soft-glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 w-[900px] h-[300px] -translate-x-1/2 bg-gradient-to-b from-white/70 to-transparent blur-2xl opacity-50" />
      </div>

      {/* СЕТКА ЦИФР */}
      <div
        className={`
          relative grid grid-cols-1 md:grid-cols-4 text-center 
          gap-16 md:gap-0 
          px-6 md:px-16 lg:px-24 xl:px-40 
          transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-center group py-4"
          >
            {/* Цифры */}
            <h3
              className="
                text-5xl font-semibold text-[#111] tracking-tight 
                transition-all duration-300 
                group-hover:scale-[1.08]
              "
            >
              {item.value}
            </h3>

            {/* Подпись */}
            <p className="mt-2 text-sm text-slate-600 tracking-wide">
              {item.label}
            </p>

            {/* Вертикальный делитель */}
            {idx !== stats.length - 1 && (
              <div
                className="
                  hidden md:block absolute right-0 top-1/2 h-14 w-px 
                  -translate-y-1/2 
                  bg-gradient-to-b from-transparent via-slate-300 to-transparent
                "
              />
            )}
          </div>
        ))}
      </div>

      {/* Нижняя элегантная линия */}
      <div className="mt-20 h-[1px] w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-60" />
    </section>
  );
}
