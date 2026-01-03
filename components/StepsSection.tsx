"use client";

import Image from "next/image";

const steps = [
  {
    number: 1,
    title: "Заявка и бриф",
    description:
      "Вы отмечаете, что нужно: ремонт, мебель или полный комплект. Менеджер уточняет задачи, стиль и бюджет.",
    image: "/step1.jpg",
  },
  {
    number: 2,
    title: "Замер и концепция",
    description:
      "Выезд замерщика и дизайнера. Для ремонта — планировка и отделка, для мебели — кухня, гардероб и встроенные решения.",
    image: "/step2.jpg",
  },
  {
    number: 3,
    title: "Договор и реализация",
    description:
      "Фиксируем смету и сроки. Запускаем ремонт или производство мебели, затем монтаж и аккуратная сдача объекта.",
    image: "/step3.jpg",
  },
];

export default function StepsSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 md:py-24">
      {/* Заголовок */}
      <div className="text-center mb-14 px-6">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900">
          Как начать сотрудничать с нами?
        </h2>
        <p className="mt-4 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
          Вы можете заказать комплексный ремонт с мебелью или только мебель —
          процесс остаётся прозрачным на каждом этапе.
        </p>
      </div>

      {/* Сетка шагов */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="
    group rounded-3xl bg-white/95 overflow-hidden
    shadow-[0_10px_30px_rgba(15,23,42,0.08)]
    hover:shadow-[0_18px_45px_rgba(15,23,42,0.14)]
    transition-all duration-500 hover:-translate-y-1
    animate-fade-in relative
  "
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            {/* Картинка */}
            <div className="relative h-[220px] w-full overflow-hidden">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Кружок — вынесен наверх относительно картинки */}
            <div
              className="
      absolute left-1/2 -translate-x-1/2
      top-[200px]  /* позиция прямо над текстом */
      z-20
      flex h-10 w-10 items-center justify-center
      rounded-full bg-slate-900 text-white
      text-sm font-semibold
      shadow-[0_6px_16px_rgba(15,23,42,0.35)]
      transition-transform duration-500
      group-hover:scale-110 group-hover:-translate-y-1
    "
            >
              {step.number}
            </div>

            {/* Текст */}
            <div className="pt-10 pb-7 px-7 text-center">
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
