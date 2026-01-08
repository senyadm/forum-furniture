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
    <section className="w-full bg-[#F9FAFB] py-12 md:py-24">
      {/* Заголовок */}
      <div className="text-center mb-8 md:mb-14 px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900">
          Как начать сотрудничать с нами?
        </h2>
        <p className="mt-3 md:mt-4 text-[13px] md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Вы можете заказать комплексный ремонт с мебелью или только мебель —
          процесс остаётся прозрачным на каждом этапе.
        </p>
      </div>

      {/* Сетка шагов: MOBILE 2 колонки (3-й на всю ширину), DESKTOP как было */}
      <div
        className="
          max-w-[1200px] mx-auto
          grid grid-cols-2 gap-3 px-4
          md:grid-cols-3 md:gap-10 md:px-6
        "
      >
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`
              group relative overflow-hidden
              rounded-2xl md:rounded-3xl bg-white/95
              shadow-[0_10px_30px_rgba(15,23,42,0.08)]
              hover:shadow-[0_18px_45px_rgba(15,23,42,0.14)]
              transition-all duration-500
              md:hover:-translate-y-1
              animate-fade-in

              ${step.number === 3 ? "col-span-2 md:col-span-1" : ""}
            `}
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            {/* IMAGE */}
            <div className="relative h-[120px] sm:h-[140px] md:h-[220px] w-full overflow-hidden">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover transition-transform duration-700 md:group-hover:scale-105"
              />
              {/* лёгкий премиум-оверлей на мобиле */}
              <div className="absolute inset-0 bg-black/5 md:bg-transparent" />
            </div>

            {/* Номер: MOBILE бейдж в углу / DESKTOP как было по центру */}
            <div
              className="
                absolute z-20
                left-3 top-3
                flex h-8 w-8 items-center justify-center
                rounded-full bg-slate-900 text-white
                text-xs font-semibold
                shadow-[0_10px_24px_rgba(15,23,42,0.28)]
                md:left-1/2 md:-translate-x-1/2
                md:top-[200px]
                md:h-10 md:w-10 md:text-sm
                md:transition-transform md:duration-500
                md:group-hover:scale-110 md:group-hover:-translate-y-1
              "
            >
              {step.number}
            </div>

            {/* TEXT */}
            <div className="px-4 py-4 md:px-7 md:pt-10 md:pb-7 text-left md:text-center">
              <h3 className="text-[15px] sm:text-base md:text-2xl font-semibold text-slate-900 mb-1.5 md:mb-2">
                {step.title}
              </h3>

              {/* на мобилке режем до 2 строк, чтобы не было “простыни” */}
              <p
                className="
                  text-[12px] sm:text-[13px] md:text-sm
                  text-slate-600 leading-relaxed
                  md:[display:block]
                  [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]
                  overflow-hidden
                "
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
