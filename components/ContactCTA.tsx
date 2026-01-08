import Image from "next/image";

export default function ContactCTA() {
  return (
    <section className="relative w-full overflow-hidden group">
      <div className="relative h-[420px] md:h-[300px] w-full isolate">
        {/* Фоновое изображение */}
        <Image
          src="/lamp-cta.jpg"
          alt="Интерьер"
          fill
          quality={100}
          priority
          className="
            object-cover
            md:object-center
            object-[35%_18%]
            scale-[1.12] md:scale-100
          "
        />

        {/* Градиент: мобилка снизу, десктоп справа (как у тебя) */}
        <div className="absolute inset-0 z-10 md:bg-gradient-to-l md:from-black/70 md:via-black/40 md:to-transparent bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

        {/* СВЕТ ПОД ЛАМПОЙ (hover на desktop) */}
        <div className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div
            className="
              absolute
              left-[30%] top-[32%]
              md:left-[32%] md:top-[50%]
              h-[220px] w-[220px] md:h-[240px] md:w-[240px]
              -translate-x-1/2 -translate-y-1/2
              bg-[radial-gradient(circle,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.22)_28%,rgba(255,255,255,0)_65%)]
              blur-2xl mix-blend-screen
            "
          />
          <div
            className="
              absolute
              left-[30%] top-[50%]
              md:left-[31%] md:top-[66%]
              h-[460px] w-[460px] md:h-[520px] md:w-[520px]
              -translate-x-1/2
              bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.14)_32%,rgba(255,255,255,0)_72%)]
              blur-3xl mix-blend-screen
            "
          />
        </div>

        {/* Контент: десктоп справа как было, мобилка — компактная glass карточка снизу */}
        <div className="absolute inset-0 z-30 flex items-end md:items-center justify-center md:justify-end p-4 md:p-0">
          <div
            className="
              w-full md:w-auto md:max-w-xl
              md:mr-8 md:mr-16
              text-white text-left

              rounded-2xl md:rounded-none
              bg-white/10 md:bg-transparent
              border border-white/15 md:border-0
              backdrop-blur-xl md:backdrop-blur-0
              px-4 py-4 md:p-0
              shadow-[0_18px_60px_rgba(0,0,0,0.35)] md:shadow-none
            "
          >
            <h2 className="text-lg sm:text-xl md:text-3xl font-light leading-snug mb-4 md:mb-8">
              Если у вас остались вопросы, задайте их нашему менеджеру
            </h2>

            <button
              className="
                w-full sm:w-auto
                inline-flex items-center justify-center gap-2
                px-6 py-3 md:py-2.5 rounded-full
                border border-white/40 bg-white/10
                text-sm md:text-sm text-white
                backdrop-blur-sm
                hover:bg-white/20 hover:cursor-pointer
                transition-all
              "
            >
              Получить бесплатную консультацию →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
