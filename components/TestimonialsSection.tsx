"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Сергей Ким",
    role: "Менеджер строительной компании",
    date: "12 сентября 2024",
    text: "У них тонкое чувство стиля — создают что-то по-настоящему профессиональное, интересное и полезное для многих людей.",
    rating: 5,
    avatar: "/review1-avatar.jpg",
    image: "/review1-room.jpg",
  },
  {
    name: "Игорь Петров",
    role: "Владелец квартиры в новостройке",
    date: "3 мая 2024",
    text: "Заказал ремонт и мебель под ключ. Всё продумано до мелочей: эргономика, материалы и аккуратный монтаж. Я просто заехал и начал жить.",
    rating: 5,
    avatar: "/review2-avatar.jpg",
    image: "/review2-room.jpg",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-[#F9FAFB] py-12 md:py-24">
      <div className="relative mx-auto max-w-[1200px] px-4 md:px-6">
        {/* Заголовок */}
        <div className="mb-8 md:mb-14 text-center">
          <p className="mb-2 text-[10px] md:text-[11px] tracking-[0.28em] text-slate-400 uppercase">
            Отзывы
          </p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900">
            Отзывы клиентов
          </h2>
          <p className="mt-3 md:mt-4 text-[13px] md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Несколько слов от тех, кто уже доверил нам ремонт и мебель под ключ.
          </p>
        </div>

        {/* Основной блок */}
        <div className="grid grid-cols-1 items-stretch gap-4 md:gap-10 lg:grid-cols-2">
          {/* Правая картинка — НА МОБИЛЕ СВЕРХУ */}
          <div
            key={current.name + "-image"}
            className="
              animate-fade-in
              relative order-1 lg:order-2
              h-[190px] sm:h-[220px] md:h-[340px]
              overflow-hidden rounded-2xl md:rounded-[32px]
              shadow-[0_18px_45px_rgba(15,23,42,0.18)]
              md:shadow-[0_22px_55px_rgba(15,23,42,0.25)]
              bg-slate-900/5
              transition-all duration-500
              md:hover:-translate-y-0.5 md:hover:shadow-[0_28px_70px_rgba(15,23,42,0.3)]
            "
          >
            <Image src={current.image} alt="Интерьер клиента" fill className="object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />
          </div>

          {/* Левая карточка — НА МОБИЛЕ НИЖЕ */}
          <div
            key={current.name + "-card"}
            className="
              animate-fade-in
              order-2 lg:order-1
              rounded-2xl md:rounded-[32px] bg-white/95
              px-5 py-5 md:px-10 md:py-10
              shadow-[0_14px_36px_rgba(15,23,42,0.08)]
              md:shadow-[0_18px_45px_rgba(15,23,42,0.10)]
              border border-slate-100
              flex flex-col justify-between
              transition-all duration-500
              md:hover:shadow-[0_24px_60px_rgba(15,23,42,0.16)]
              md:hover:-translate-y-0.5
            "
          >
            {/* Верх: автор + кавычки */}
            <div className="mb-5 md:mb-9 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="relative h-11 w-11 md:h-14 md:w-14 rounded-full overflow-hidden">
                  <Image src={current.avatar} alt={current.name} fill className="object-cover" />
                </div>

                <div>
                  <div className="text-[15px] md:text-lg font-semibold text-slate-900 leading-snug">
                    {current.name}
                  </div>
                  <div className="text-[11px] md:text-sm text-slate-500 leading-snug">
                    {current.role}
                  </div>
                  <div className="mt-0.5 text-[10px] md:text-xs text-slate-400">
                    {current.date}
                  </div>
                </div>
              </div>

              <div className="hidden text-4xl font-serif text-slate-200 md:block">“</div>
            </div>

            {/* Текст отзыва (на мобилке чуть компактнее) */}
            <p className="mb-5 md:mb-6 text-[13px] md:text-base leading-relaxed text-slate-800">
              {current.text}
            </p>

            {/* Низ: рейтинг */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-1 text-amber-400 text-base">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < current.rating ? "opacity-100" : "opacity-30"}>
                    ★
                  </span>
                ))}
              </div>

              <span className="text-[10px] md:text-xs text-slate-400 text-right">
                Оценка по отзывам клиентов
              </span>
            </div>
          </div>
        </div>

        {/* Стрелки */}
        <div className="mt-6 md:mt-10 flex items-center justify-center gap-3 md:gap-5">
          <button
            onClick={handlePrev}
            aria-label="Предыдущий отзыв"
            className="
              flex h-10 w-10 md:h-11 md:w-11 items-center justify-center
              rounded-full bg-white
              shadow-[0_8px_20px_rgba(15,23,42,0.10)]
              text-slate-900 text-base md:text-lg
              transition-all duration-300
              md:hover:bg-slate-900 md:hover:text-white
              md:hover:-translate-y-0.5 md:hover:shadow-[0_12px_28px_rgba(15,23,42,0.22)]
              focus:outline-none focus:ring-2 focus:ring-slate-900/40 hover:cursor-pointer
            "
          >
            ←
          </button>

          <button
            onClick={handleNext}
            aria-label="Следующий отзыв"
            className="
              flex h-10 w-10 md:h-11 md:w-11 items-center justify-center
              rounded-full bg-white
              shadow-[0_8px_20px_rgba(15,23,42,0.10)]
              text-slate-900 text-base md:text-lg
              transition-all duration-300
              md:hover:bg-slate-900 md:hover:text-white
              md:hover:-translate-y-0.5 md:hover:shadow-[0_12px_28px_rgba(15,23,42,0.22)]
              focus:outline-none focus:ring-2 focus:ring-slate-900/40 hover:cursor-pointer
            "
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
