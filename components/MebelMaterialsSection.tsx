"use client";

import Image from "next/image";
import {
  Layers3,
  PanelsTopLeft,
  SquareStack,
  Settings2,
  ArrowRight,
} from "lucide-react";

type Card = {
  title: string;
  subtitle: string;
  Icon: React.ElementType;
  items: string[];
  image: string;
  note: string;
};

const cards: Card[] = [
  {
    title: "Корпус",
    subtitle: "Основа и геометрия",
    Icon: Layers3,
    items: ["ЛДСП", "МДФ", "Шпон", "Массив"],
    image: "/mebel/materials/body.jpg",
    note: "Подбираем конструктив под нагрузки и точную геометрию проекта.",
  },
  {
    title: "Фасады",
    subtitle: "Стиль и детали",
    Icon: PanelsTopLeft,
    items: ["Эмаль", "Шпон", "Пластик", "Стекло / алюминий"],
    image: "/mebel/materials/facades.jpg",
    note: "Согласуем оттенок, фрезеровку и тактильность — до утверждения в 3D.",
  },
  {
    title: "Столешницы",
    subtitle: "Тактильность и ресурс",
    Icon: SquareStack,
    items: ["HPL", "Кварц", "Керамогранит", "Дерево"],
    image: "/mebel/materials/countertops.jpg",
    note: "Выберем поверхность под режим использования: износ, пятна, тепло и вода.",
  },
  {
    title: "Фурнитура",
    subtitle: "Тишина и ход",
    Icon: Settings2,
    items: ["Петли", "Направляющие", "Подъёмники", "Бренды — по запросу"],
    image: "/mebel/materials/hardware.jpg",
    note: "Закладываем ресурс и плавность: доводчики, нагрузка, гарантийная база.",
  },
];

function cn(...s: Array<string | false | undefined>) {
  return s.filter(Boolean).join(" ");
}

export default function MebelMaterialsSection() {
  return (
    <section
      aria-labelledby="mebel-materials"
      className="relative bg-[#F6F7F8] py-10 md:py-12"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm tracking-[0.2em] text-[#22282B] uppercase">
              МАТЕРИАЛЫ
            </p>
            <h2
              id="mebel-materials"
              className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-[#22282B]"
            >
              Материалы и фурнитура
            </h2>
            <p className="mt-3 text-sm md:text-base text-[#22282B]/65">
              Покажем фактуры и согласуем комплектацию заранее.
            </p>
          </div>
        </div>

        {/* cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {cards.map((c) => {
            const Icon = c.Icon;

            return (
              <article
                key={c.title}
                className="group relative overflow-hidden rounded-[22px] border border-black/10 bg-white shadow-sm transition hover:-translate-y-[1px] hover:shadow-md"
              >
                <div className="relative aspect-[16/9] md:aspect-[16/8.6]">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* затемнение: сверху и снизу, чтобы badge не терялся */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-transparent" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.12),transparent_38%)]" />

                  {/* top badge — на плотной glass-плашке */}
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/25 backdrop-blur">
                      <Icon className="h-5 w-5 text-white" strokeWidth={1.9} />
                    </span>

                    <div className="rounded-full border border-white/18 bg-black/25 px-3 py-2 backdrop-blur">
                      <div className="text-sm font-semibold text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)]">
                        {c.title}
                      </div>
                      <div className="text-xs text-white/80 drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)]">
                        {c.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* bottom glass footer */}
                  <div className="absolute inset-x-4 bottom-4">
                    <div className="rounded-2xl border border-white/16 bg-black/34 backdrop-blur px-4 py-3 transition-colors duration-300 group-hover:bg-black/40">
                      {/* chips — БОЛЬШЕ и заметнее */}
                      <div className="flex flex-wrap gap-2">
                        {c.items.map((it) => (
                          <span
                            key={it}
                            className="
                              rounded-full border border-white/18 bg-white/10
                              px-3 py-1.5 text-xs font-medium text-white/90
                              drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]
                            "
                          >
                            {it}
                          </span>
                        ))}
                      </div>

                      <div className="mt-2 text-[12px] leading-relaxed text-white/78 drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
                        {c.note}
                      </div>
                    </div>
                  </div>

                  {/* subtle shine */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                    <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.14),transparent_60%)]" />
                  </div>

                  {/* тонкая окантовка */}
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
                </div>
              </article>
            );
          })}
        </div>

        {/* mobile CTA */}
        <a
          href="#contact"
          className="mt-6 inline-flex sm:hidden w-full items-center justify-center gap-2 rounded-full bg-[#22282B] px-6 py-3 text-sm font-medium text-white shadow-sm"
        >
          Подобрать материалы
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
