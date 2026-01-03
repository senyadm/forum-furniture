import Image from "next/image";

export default function ContactCTA() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[280px] md:h-[300px] w-full">

        {/* Фоновое изображение */}
        <Image
          src="/lamp-cta.jpg"
          alt="Интерьер"
          fill
          quality={100}
          priority
          className="object-cover object-center"
        />

        {/* Градиент справа */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent" />

        {/* Контент */}
        <div className="absolute inset-0 flex items-center justify-end">
          {/* Контейнер текста справа, но сам текст — слева */}
          <div className="max-w-xl mr-8 md:mr-16 text-white text-left">

            <h2 className="text-2xl md:text-3xl font-light leading-snug mb-6 md:mb-8">
              Если у вас остались вопросы,
              задайте их нашему менеджеру
            </h2>

            <button
              className="
                inline-flex items-center gap-2 
                px-6 py-2.5 rounded-full
                border border-white/40 bg-white/10 
                text-xs md:text-sm text-white
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
