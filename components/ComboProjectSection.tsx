// components/ComboProjectSection.tsx
"use client";

import Image from "next/image";

const blocks = [
  {
    title: "Дизайн и смета бесплатно",
    text: "Мы подберём материалы, составим смету и сделаем визуализацию до начала работ — чтобы вы знали итог заранее.",
    image: "/combo-1.jpg",
  },
  {
    title: "Под любые вкусы и размеры",
    text: "От небольших кухонь до сложных проектов. Подстроим мебель и ремонт под планировку, стиль и бюджет.",
    image: "/combo-2.jpg",
  },
  {
    title: "Собираем, доставляем, подключаем",
    text: "Один подрядчик для всего процесса: ремонт, мебель, техника и аккуратная сдача объекта.",
    image: "/combo-3.jpg",
  },
];

export default function ComboProjectSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Шапка секции */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 items-start">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 leading-tight">
            Ремонт и мебель
            <br />в одном проекте
          </h2>

          <p className="text-[15px] text-slate-600 leading-relaxed max-w-lg">
            Один подрядчик — полный контроль над сроками, бюджетом и качеством.
            Мы создаём интерьеры под ключ: от черновых работ до сборки мебели и
            подключения техники. Вам не нужно координировать несколько бригад —
            мы берём весь процесс на себя.
          </p>
        </div>

        {/* Карточки */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {blocks.map((item, i) => (
            <div key={i} className="flex flex-col group">
              {/* Фото */}
              <div
                className={`
    relative w-full 
    ${i === 1 ? "aspect-[4/5]" : "aspect-[3/4]"} 
    rounded-[34px] overflow-hidden
    shadow-[0_18px_50px_rgba(0,0,0,0.12)]
    transition-all duration-700 group-hover:shadow-[0_25px_65px_rgba(0,0,0,0.18)]
  `}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  quality={90}
                  className="
                    object-cover
                    brightness-[0.80]
                    transition-all duration-700 ease-out
                    group-hover:brightness-[1] 
                    group-hover:scale-[1.045]
                  "
                />

                {/* Мягкий градиент для премиальности */}
                <div
                  className="
                  absolute inset-0 
                  bg-gradient-to-b from-black/5 to-black/10
                  opacity-40 group-hover:opacity-0
                  transition-all duration-700
                "
                />
              </div>
              {/* Текст */}
              <div className="mt-6">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
