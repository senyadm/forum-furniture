import Image from "next/image";

const items = [
  { title: "Сроки Под Контролем", image: "/why1.jpg", layout: "image-top" },
  { title: "Один Подрядчик — Всё Под Ключ", image: "/why2.jpg", layout: "text-top" },
  { title: "Прозрачная Смета", image: "/why3.jpg", layout: "image-top" },
  { title: "Работа По Договору", image: "/why4.jpg", layout: "text-top" },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-28 bg-[#F9FAFB]" id="why-us">
      {/* Заголовок */}
      <div className="text-center mb-20 px-6">
        <h2 className="text-5xl font-medium tracking-tight text-slate-900">
          Почему Выбирают Нас
        </h2>
      </div>

      {/* Сетка карточек */}
      <div className="max-w-[1380px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 px-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="
              group flex flex-col cursor-pointer
              transition-all duration-500
              hover:-translate-y-1
            "
          >
            {/* TEXT TOP */}
            {item.layout === "text-top" && (
              <h3
                className="
                  text-[30px] font-light text-slate-900 leading-tight mb-8
                  transition-all duration-500
                  inline-block origin-left
                  group-hover:scale-[1.04] group-hover:font-normal
                "
              >
                {item.title}
              </h3>
            )}

            {/* IMAGE */}
            <div className="relative aspect-[3/4] w-full rounded-[30px] overflow-hidden mb-8 shadow-sm">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="
                  object-cover brightness-[0.80]
                  transition-all duration-700
                  group-hover:brightness-100
                  group-hover:scale-110
                "
              />
              <div
                className="
                  absolute inset-0 bg-black/10
                  transition-all duration-700
                  group-hover:bg-transparent
                "
              />
            </div>

            {/* TEXT BOTTOM */}
            {item.layout === "image-top" && (
              <h3
                className="
                  text-[30px] font-light text-slate-900 leading-tight
                  transition-all duration-500
                  inline-block origin-left
                  group-hover:scale-[1.04] group-hover:font-normal
                "
              >
                {item.title}
              </h3>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
