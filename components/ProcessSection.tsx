// components/ProcessSection.tsx
"use client";

const steps = [
  { number: "01", title: "Знакомство и задача", text: "Вы рассказываете, что хотите изменить: кухня, вся квартира или только мебель. Обсуждаем стиль, бюджет и сроки." },
  { number: "02", title: "Замер и концепция", text: "Делаем замер, смотрим на реальные габариты и свет. Предлагаем несколько направлений по планировке и материалам." },
  { number: "03", title: "Проект и смета", text: "Фиксируем решения в проекте, считаем прозрачную смету, согласовываем сроки. Никаких скрытых доплат «по ходу»." },
  { number: "04", title: "Реализация под ключ", text: "Организуем ремонт, производство мебели и монтаж. Вы общаетесь с одной командой и получаете готовое пространство." },
];

export default function ProcessSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 md:py-24">
      <div className="relative mx-auto max-w-[1100px] px-6">

        {/* Заголовок */}
        <div className="mb-14 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-[11px] tracking-[0.28em] text-slate-400 uppercase">
              Процесс работы
            </p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 leading-tight">
              Как мы ведём проект
            </h2>
            <p className="mt-4 max-w-xl text-sm md:text-[15px] leading-relaxed text-slate-600">
              Структурированный процесс без хаоса: вы понимаете, что происходит на
              каждом этапе — от первого звонка до установки последнего фасада.
            </p>
          </div>

          <p className="text-xs md:text-sm text-slate-500 max-w-sm md:text-right">
            Мы берём на себя организацию и координацию. Все договорённости фиксируем
            письменно, чтобы вы чувствовали контроль и спокойствие.
          </p>
        </div>

        {/* Шаги */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8">
          {steps.map((step) => (
            <article
              key={step.number}
              className="
                group relative overflow-hidden
                rounded-3xl border border-slate-200/70
                bg-white px-6 py-6 md:px-8 md:py-7
                shadow-[0_18px_45px_rgba(15,23,42,0.04)]
                transition-all duration-500
                hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.07)]
              "
            >
              <div
                className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-br from-white/70 via-white/0 to-slate-100/0
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                "
              />

              <div className="relative z-10 flex items-start gap-4">
                {/* Номер шага */}
                <div className="flex-shrink-0">
                  <div
                    className="
                      flex h-12 w-12 items-center justify-center
                      rounded-full bg-[#22282B] text-slate-50
                      text-[13px] font-semibold tracking-[0.22em]
                      shadow-[0_12px_30px_rgba(15,23,42,0.45)]
                      transition-all duration-500
                      group-hover:bg-slate-800
                    "
                  >
                    {step.number}
                  </div>
                </div>

                {/* Текст */}
                <div>
                  <h3 className="mb-1.5 text-base md:text-lg font-semibold text-[#22282B]">
                    {step.title}
                  </h3>
                  <p className="text-[13px] md:text-[15px] leading-relaxed text-[#22282B]">
                    {step.text}
                  </p>
                </div>
              </div>

              {/* Большой фоновый номер */}
              <span
                className="
                  pointer-events-none absolute -right-1 -bottom-3
                  text-6xl md:text-7xl font-semibold tracking-tight
                  text-slate-100
                "
              >
                {step.number}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
