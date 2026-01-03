// components/RemontHero.tsx
import Image from "next/image";
import Navbar from "./Navbar";

export default function RemontHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      
      {/* Фон: картинка + градиент */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/remont-hero.jpg"        
            alt="Ремонт квартир под ключ"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Плавный затемняющий градиент */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/60 to-black/80" />
        </div>
      </div>

      {/* Навбар */}
      <Navbar />

      {/* FORUM */}
      <div className="absolute top-8 left-10 z-40 text-white text-xl font-semibold tracking-[0.25em]">
        FORUM
      </div>

      {/* Контент HERO */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center text-white">

        {/* Подзаголовок */}
        <p className="mb-4 flex items-center gap-2 text-base text-slate-200/90 tracking-wide animate-fade-in">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
          Ремонт квартир под ключ
        </p>

        {/* Заголовок */}
        <h1 className="max-w-5xl text-5xl md:text-6xl font-semibold leading-tight tracking-tight drop-shadow-lg animate-fade-in opacity-0 [animation-delay:150ms]">
          Ремонт, который меняет
          <br />
          пространство
        </h1>

        {/* Описание */}
        <p className="mt-6 max-w-3xl text-lg text-slate-200/90 leading-relaxed animate-fade-in opacity-0 [animation-delay:300ms]">
          Смета и дизайн бесплатно. От черновых работ до установки последнего фасада — ведём проект под ключ с 2000 года.
        </p>

        {/* CTA */}
        <button
          className="
            mt-10 inline-flex items-center gap-2
            rounded-full px-10 py-4
            text-base font-medium 
            bg-white/10 border border-white/20 
            text-white tracking-wide
            shadow-[0_4px_30px_rgba(0,0,0,0.35)]
            backdrop-blur-lg
            transition-all duration-300
            hover:bg-white/20 hover:shadow-[0_6px_40px_rgba(0,0,0,0.5)]
            animate-fade-in opacity-0 [animation-delay:450ms] hover:cursor-pointer
          "
        >
          Получить консультацию по ремонту →
        </button>

      </div>
    </section>
  );
}
