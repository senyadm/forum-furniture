import Image from "next/image";

const items = [
  { title: "Сроки Под Контролем", image: "/why1.jpg", layout: "image-top" },
  { title: "Один Подрядчик — Всё Под Ключ", image: "/why2.jpg", layout: "text-top" },
  { title: "Прозрачная Смета", image: "/why3.jpg", layout: "image-top" },
  { title: "Работа По Договору", image: "/why4.jpg", layout: "text-top" },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-12 md:py-24 bg-[#F9FAFB]" id="why-us">
      {/* Заголовок */}
      <div className="text-center mb-8 md:mb-20 px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900">
          Почему Выбирают Нас
        </h2>
      </div>

      {/* Сетка карточек */}
      <div className="max-w-[1380px] mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-14 px-4 md:px-6">
        {items.map((item, i) => {
          const isTextTop = item.layout === "text-top";

          return (
            <div
              key={i}
              className="
                group flex flex-col cursor-pointer
                transition-all duration-500
                md:hover:-translate-y-1
              "
            >
              {/* TITLE (ОДИН) */}
              <h3
                className={`
                  order-2 md:order-${isTextTop ? "1" : "2"}
                  text-sm md:text-[30px]
                  font-medium md:font-light
                  text-slate-900 leading-snug md:leading-tight
                  text-center md:text-left
                  mt-3 md:mt-0
                  mb-0 md:mb-${isTextTop ? "8" : "0"}
                  transition-all duration-500
                  inline-block origin-left
                  md:group-hover:scale-[1.04] md:group-hover:font-normal
                  ${isTextTop ? "md:mb-8" : ""}
                `}
              >
                {item.title}
              </h3>

              {/* IMAGE */}
              <div
                className={`
                  order-1 md:order-${isTextTop ? "2" : "1"}
                  relative aspect-square md:aspect-[3/4] w-full
                  rounded-2xl md:rounded-[30px]
                  overflow-hidden
                  mb-0 md:mb-${isTextTop ? "8" : "8"}
                  shadow-sm
                `}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                    object-cover
                    brightness-[0.88] md:brightness-[0.80]
                    transition-all duration-700
                    md:group-hover:brightness-100
                    md:group-hover:scale-110
                  "
                />
                <div
                  className="
                    absolute inset-0 bg-black/10
                    transition-all duration-700
                    md:group-hover:bg-transparent
                  "
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
