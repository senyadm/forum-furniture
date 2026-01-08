// components/Hero.tsx
import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] md:min-h-screen overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.jpg"
          alt="Интерьер с диваном"
          fill
          priority
          className="
            object-cover
            object-[center_82%] md:object-center
            scale-[1.08] md:scale-105
            opacity-95
          "
        />

        {/* DESKTOP — как было */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />

        {/* MOBILE — делаем красиво (не убиваем фото) */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-b from-black/25 via-black/15 to-black/65" />
        {/* лёгкая виньетка по краям */}
        <div className="md:hidden absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.25)_65%,rgba(0,0,0,0.55)_100%)]" />
      </div>

      <Navbar />

      {/* DESKTOP лого — не трогаем */}
      <div className="hidden md:block absolute top-8 left-10 z-40 text-white text-xl font-semibold tracking-[0.25em]">
        FORUM
      </div>

      {/* MOBILE layout (только мобилка) */}
      <div className="md:hidden relative z-10 min-h-[100svh] px-4 pt-24 pb-10 flex items-center justify-center text-white">
        <div className="w-full max-w-[420px]">
          {/* Лого сразу под навбаром — по центру */}
          <div className="text-center text-[13px] font-semibold tracking-[0.38em] opacity-95 mb-5">
            FORUM
          </div>

          {/* Небольшая подложка под текст (не огромная карточка) */}
          <div
            className="
              rounded-3xl
              border border-white/12
              bg-black/28
              backdrop-blur-md
              shadow-[0_16px_60px_rgba(0,0,0,0.35)]
              px-5 py-6
            "
          >
            {/* Подзаголовок */}
            <p className="flex flex-wrap items-center justify-center gap-2 text-[13px] text-slate-200/95 tracking-wide">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.75)]" />
              Премиальное Мебельное Производство и Ремонт
            </p>

            {/* Заголовок */}
            <h1 className="mt-4 text-center text-[34px] leading-[1.06] font-semibold tracking-tight">
              Ремонт и Заказ Мебели
            </h1>

            {/* Описание */}
            <p className="mt-4 text-center text-[14px] leading-relaxed text-slate-200/90">
              Индивидуальный дизайн, точность изготовления, материалы высокого класса
              и профессиональный монтаж.
            </p>

            {/* CTA */}
            <button
              className="
                mt-6 w-full
                inline-flex items-center justify-center gap-2
                rounded-full px-6 py-3.5
                text-[14px] font-medium
                bg-white/14 border border-white/18
                text-white
                shadow-[0_10px_26px_rgba(0,0,0,0.35)]
                backdrop-blur-lg
                transition-all duration-300
                active:scale-[0.99]
              "
            >
              Получить консультацию →
            </button>
          </div>
        </div>
      </div>

      {/* DESKTOP layout — твой старый блок, НЕ трогаем */}
      <div className="hidden md:flex relative z-10 min-h-screen flex-col items-center justify-center px-4 text-center text-white">
        <p className="mb-4 flex items-center gap-2 text-base text-slate-200/90 tracking-wide animate-fade-in">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
          Премиальное Мебельное Производство и Ремонт
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold leading-tight md:text-6xl tracking-tight drop-shadow-lg animate-fade-in opacity-0 [animation-delay:150ms]">
          Ремонт и Заказ Мебели
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-200/90 leading-relaxed animate-fade-in opacity-0 [animation-delay:300ms]">
          Индивидуальный дизайн, точность изготовления, материалы высокого класса и
          профессиональный монтаж.
        </p>

        <button
          className="
            mt-10 inline-flex items-center gap-2
            rounded-full px-10 py-4
            text-base font-medium
            bg-white/10 border border-white/20
            text-white tracking-wide
            shadow-[0_4px_30px_rgba(0,0,0,0.3)]
            backdrop-blur-lg
            transition-all duration-300
            hover:bg-white/20 hover:shadow-[0_6px_40px_rgba(0,0,0,0.45)] hover:cursor-pointer
            animate-fade-in opacity-0 [animation-delay:450ms]
          "
        >
          Получить персональную консультацию →
        </button>
      </div>
    </section>
  );
}
