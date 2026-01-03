// components/ConsultationCTA.tsx
"use client";

export default function ConsultationCTA() {
  return (
    <section className="w-full bg-[#16191D] py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
          {/* ЛЕВАЯ ЧАСТЬ — ТЕКСТ */}
          <div className="text-white">
            <p className="mb-3 text-xs md:text-sm uppercase tracking-[0.22em] text-slate-300">
              Персональная консультация
            </p>

            <h2 className="mb-4 text-3xl md:text-4xl font-medium tracking-tight">
              Мы создаём мебель под вас,
              <br className="hidden md:block" />а не под готовые каталоги
            </h2>

            <p className="mb-6 text-sm md:text-base leading-relaxed text-slate-200/90">
              Никаких шаблонов. Мы проектируем мебель, исходя из вашего ритма
              жизни, привычек и эстетики пространства — подбираем материалы,
              пропорции и конструкции, которые органично дополняют интерьер и
              работают именно для вас.
            </p>

            <ul className="mb-8 space-y-3 text-sm md:text-base text-slate-300/95">
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-white/80 self-center" />
                <span>
                  Изделия формируются под ваш образ жизни, а не под типовые
                  размеры.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-white/80 self-center" />
                <span>
                  Обсуждаем бюджет открыто и предлагаем взвешенные решения в
                  премиальных материалах.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-white/80 self-center" />
                <span>
                  Создаём не «готовую модульную систему», а мебель, которая
                  ощущается индивидуальной и собранной специально под вас.
                </span>
              </li>
            </ul>

            {/* CTA-СЕКЦИЯ */}
            <div className="space-y-3">
              <p className="text-xs md:text-sm text-slate-400">
                Оставьте заявку — мы свяжемся и обсудим проект в удобном
                формате.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row mt-8">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/79991234567"
                  target="_blank"
                  rel="noreferrer"
                  className="
      inline-flex items-center justify-center
      rounded-full px-10 py-4 w-full sm:w-[55%]
      text-lg font-medium text-white
      bg-white/10 border border-white/20
      shadow-[0_4px_30px_rgba(0,0,0,0.3)]
      backdrop-blur-lg
      transition-all duration-300
      hover:bg-white/20 hover:shadow-[0_6px_40px_rgba(0,0,0,0.45)]
    "
                >
                  Оставить заявку →
                </a>

                {/* Позвонить */}
                <a
                  href="tel:+79991234567"
                  className="
      inline-flex items-center justify-center
      rounded-full px-10 py-4 w-full sm:w-[45%]
      text-lg font-medium text-white/90
      bg-white/5 border border-white/15
      shadow-[0_3px_20px_rgba(0,0,0,0.25)]
      backdrop-blur-lg
      transition-all duration-300
      hover:bg-white/10 hover:text-white hover:shadow-[0_6px_35px_rgba(0,0,0,0.45)]
    "
                >
                  Позвонить →
                </a>
              </div>

              <p className="text-[11px] md:text-xs text-slate-500">
                Первая консультация — бесплатно, 20–30 минут.
              </p>
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ — КАРТОЧКА */}
          <div className="w-full">
            <div
              className="
                rounded-3xl border border-white/10 bg-white/5
                px-6 py-6 md:px-8 md:py-7
                shadow-[0_18px_45px_rgba(0,0,0,0.75)]
                backdrop-blur-xl
                transition-all duration-500
                hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.9)]
              "
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                Как проходит консультация
              </p>

              <div className="space-y-4 text-sm md:text-base text-slate-100/95">
                <div className="transition-all duration-300 hover:text-white">
                  <p className="text-xs text-slate-400 mb-0.5">Шаг 1</p>
                  <p className="font-medium">
                    Вы рассказываете, какую мебель хотите создать: кухню,
                    гардеробную, систему хранения или отдельные предметы.
                  </p>
                </div>

                <div className="transition-all duration-300 hover:text-white">
                  <p className="text-xs text-slate-400 mb-0.5">Шаг 2</p>
                  <p className="font-medium">
                    Мы уточняем ваши привычки, сценарии использования и
                    требования к материалам, стилю и функциональности.
                  </p>
                </div>

                <div className="transition-all duration-300 hover:text-white">
                  <p className="text-xs text-slate-400 mb-0.5">Шаг 3</p>
                  <p className="font-medium">
                    Предлагаем первичные решения по конструкциям, пропорциям и
                    отделкам — без давления и навязанных вариантов.
                  </p>
                </div>
              </div>

              <div className="mt-5 border-top border-slate-700/60 pt-4 flex flex-col gap-1 text-xs text-slate-400">
                <span>Каждое изделие для нас — отдельный проект.</span>
                <span className="text-slate-200">
                  Мы создаём спокойную, элегантную мебель, которая работает на
                  ваш комфорт и подчёркивает характер пространства.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
