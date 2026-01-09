import Image from "next/image";
import { ChefHat, ShowerHead, BedDouble, Armchair, ArrowRight } from "lucide-react";

type Card = {
  title: string;
  icon: React.ElementType;
  items: string[];
  bg: string;
};

export default function MebelCategoriesSection() {
  const cards: Card[] = [
    {
      title: "Кухни и хранение",
      icon: ChefHat,
      items: ["Кухни", "Шкафы / гардеробные", "Прихожие"],
      bg: "/mebel/bg-kitchen.jpg",
    },
    {
      title: "Ванные и зоны",
      icon: ShowerHead,
      items: ["Тумбы / столешницы", "ТВ-зоны", "Стеновые панели"],
      bg: "/mebel/bg-bath.jpg",
    },
    {
      title: "Комнаты",
      icon: BedDouble,
      items: ["Спальни", "Детские", "Офис / кабинет"],
      bg: "/mebel/bg-rooms.jpg",
    },
    {
      title: "Мебель по запросу",
      icon: Armchair,
      items: ["Мягкая мебель", "Столы / стулья", "Шкафы / тумбы"],
      bg: "/mebel/bg-custom.jpg",
    },
  ];

  return (
    <section aria-labelledby="mebel-categories" className="w-full bg-[#F6F7F8]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        {/* Header (как в RemontScopeSection) */}
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm tracking-[0.2em] text-[#22282B] uppercase">
              МЕБЕЛЬ НА ЗАКАЗ
            </p>
            <h2
              id="mebel-categories"
              className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-[#22282B]"
            >
              Что можно заказать
            </h2>
            <p className="mt-3 text-sm md:text-base text-[#22282B]/65">
              Делаем под проект или подбираем аналоги из Европы/Кореи под бюджет.
            </p>
          </div>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[#22282B]/15 bg-white px-5 py-3 text-sm
                       shadow-sm transition hover:shadow-md hover:border-[#22282B]/25"
          >
            Рассчитать
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {cards.map((c) => {
            const Icon = c.icon;

            return (
              <a
                key={c.title}
                href="#contact"
                className="group relative overflow-hidden rounded-3xl border border-black/10 shadow-sm
                           transition hover:shadow-md hover:-translate-y-[1px]"
              >
                {/* background photo */}
                <div className="absolute inset-0">
                  <Image
                    src={c.bg}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    priority={false}
                  />

                  {/* Stronger, smarter overlay for readability */}
                  <div className="absolute inset-0 bg-[#22282B]/55 transition-opacity duration-300 group-hover:opacity-70" />

                  {/* Darken where text lives (top/center) */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/15" />

                  {/* Soft vignette */}
                  <div className="absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.55)]" />
                </div>

                {/* content */}
                <div className="relative p-7 md:p-8 text-white">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl border border-white/20 bg-white/10 p-3.5 backdrop-blur-md">
                        <Icon className="h-6 w-6 text-white" strokeWidth={1.8} />
                      </div>

                      <div
                        className="text-lg md:text-xl font-semibold tracking-tight"
                        style={{ textShadow: "0 10px 24px rgba(0,0,0,0.45)" }}
                      >
                        {c.title}
                      </div>
                    </div>

                    <ArrowRight className="h-5 w-5 text-white/65 transition group-hover:translate-x-0.5 group-hover:text-white" />
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {c.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-full border border-white/18 bg-black/25 px-3 py-1.5 text-sm text-white/90 backdrop-blur-md
                                   transition group-hover:bg-black/35"
                        style={{ textShadow: "0 8px 18px rgba(0,0,0,0.35)" }}
                      >
                        {it}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 h-px w-full bg-white/12" />
                  <div
                    className="mt-4 text-xs text-white/75"
                    style={{ textShadow: "0 8px 18px rgba(0,0,0,0.35)" }}
                  >
                    Эскиз → материалы → смета → производство → монтаж
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <a
          href="#contact"
          className="mt-6 inline-flex sm:hidden w-full items-center justify-center gap-2 rounded-full bg-[#22282B] px-5 py-3 text-sm text-white shadow-sm"
        >
          Рассчитать стоимость
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
