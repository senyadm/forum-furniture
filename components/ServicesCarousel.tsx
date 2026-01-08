"use client";

import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Ремонт Квартир",
    description: "От планировки до сдачи объекта. Премиальное качество.",
    image: "/service1.jpg",
    href: "/remont",
  },
  {
    title: "Мебель На Заказ",
    description: "Дизайн, изготовление и монтаж. Индивидуальные проекты.",
    image: "/service2.jpg",
    href: "/mebel",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-14 md:py-0">
      {/* Заголовок */}
      <div className="text-center mb-10 md:mb-14 px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900">
          Наши Услуги
        </h2>
      </div>

      {/* 2 карточки */}
      <div className="mx-auto max-w-[1400px] px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12">
        {cards.map((card, index) => (
          <Link
            key={index}
            href={card.href}
            className="
              group rounded-2xl md:rounded-3xl overflow-hidden bg-white border border-slate-200 
              shadow-[0_10px_26px_rgba(0,0,0,0.06)] md:shadow-[0_12px_32px_rgba(0,0,0,0.06)]
              hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]
              transition-all duration-500 cursor-pointer select-none
              md:hover:-translate-y-1
              block
            "
          >
            {/* Картинка */}
            <div className="relative h-[190px] md:h-[240px] w-full overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="
                  object-cover
                  brightness-[0.78] md:brightness-[0.65]
                  transition-all duration-700 ease-out
                  group-hover:brightness-[0.95]
                  group-hover:scale-[1.04]
                "
              />
              <div
                className="
                  absolute inset-0 bg-black/10 md:bg-black/20
                  transition-all duration-700 ease-out
                  group-hover:bg-black/0
                "
              />
            </div>

            {/* Контент */}
            <div className="p-5 md:p-8">
              <h3
                className="
                  text-xl md:text-2xl font-semibold text-slate-900 mb-2 md:mb-3
                  transition-all duration-500 ease-out
                  group-hover:text-slate-800 group-hover:tracking-[0.5px]
                "
              >
                {card.title}
              </h3>

              <p
                className="
                  text-slate-600 leading-relaxed text-[15px] md:text-base mb-4 md:mb-6
                  transition-all duration-500 ease-out
                  group-hover:text-slate-700
                "
              >
                {card.description}
              </p>

              <span
                className="
                  text-[15px] md:text-base font-medium text-slate-900 
                  inline-flex items-center gap-2
                  transition-all duration-500 ease-out
                  group-hover:gap-4 group-hover:text-slate-800
                  group-hover:translate-x-1
                "
              >
                Подробнее →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* нижний отступ только на мобиле, чтобы секция “дышала” */}
      <div className="h-10 md:hidden" />
    </section>
  );
}
