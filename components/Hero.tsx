// components/Hero.tsx
import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.jpg"
          alt="Интерьер с диваном"
          fill
          className="object-cover scale-105 opacity-95"
          priority
        />

        {/* Премиальный мягкий затемняющий градиент */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />
      </div>

      <Navbar />

       <div className="absolute top-8 left-10 z-40 text-white text-xl font-semibold tracking-[0.25em]">
        FORUM
      </div>

      {/* Контент HERO */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center text-white">
        
        {/* Верхний подзаголовок */}
        <p className="mb-4 flex items-center gap-2 text-base text-slate-200/90 tracking-wide animate-fade-in">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
          Премиальное Мебельное Производство и Ремонт
        </p>

        {/* Заголовок */}
        <h1 className="max-w-5xl text-5xl font-semibold leading-tight md:text-6xl tracking-tight drop-shadow-lg animate-fade-in opacity-0 [animation-delay:150ms]">
          Ремонт и Заказ Мебели 
        </h1>

        {/* Описание */}
        <p className="mt-6 max-w-2xl text-lg text-slate-200/90 leading-relaxed animate-fade-in opacity-0 [animation-delay:300ms]">
          Индивидуальный дизайн, точность изготовления, материалы высокого класса  
          и профессиональный монтаж. 
        </p>

        {/* Кнопка */}
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
