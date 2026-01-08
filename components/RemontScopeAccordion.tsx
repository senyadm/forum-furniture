"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ChevronDown,
  Wrench,
  Paintbrush2,
  Sparkles,
  Target,
  SlidersHorizontal,
  Layers3,
  Ruler,
  ShieldCheck,
  Grid3X3,
  Palette,
  DoorClosed,
  Aperture,
  FileCheck2,
} from "lucide-react";

type Key = "engineering" | "finishing" | "handover";

type Block = {
  key: Key;
  title: string;
  Icon: any;
  bullets: string[];
  bulletIcons: any[];
  images: { main: string; a: string; b: string };
};

const blocks: Block[] = [
  {
    key: "engineering",
    title: "Инженерия и подготовка",
    Icon: Wrench,
    bullets: [
      "План и точки коммуникаций",
      "Электрика: группы и щит",
      "Сантехника: разводка и узлы",
      "Геометрия стен/пола",
      "Гидроизоляция мокрых зон",
    ],
    bulletIcons: [Target, SlidersHorizontal, Layers3, Ruler, ShieldCheck],
    images: {
      main: "/remont-scope/engineering.jpg",
      a: "/remont-scope/detail-1.jpg",
      b: "/remont-scope/detail-2.jpg",
    },
  },
  {
    key: "finishing",
    title: "Отделка и материалы",
    Icon: Paintbrush2,
    bullets: [
      "Плитка и узлы примыканий",
      "Финиш стен: покраска/обои",
      "Полы: укладка и стыки",
      "Двери и наличники",
      "Чистовые линии и детали",
    ],
    bulletIcons: [Grid3X3, Palette, Layers3, DoorClosed, Aperture],
    images: {
      main: "/remont-scope/finishing.jpg",
      a: "/remont-scope/detail-1.jpg",
      b: "/remont-scope/detail-2.jpg",
    },
  },
  {
    key: "handover",
    title: "Финал и сдача",
    Icon: Sparkles,
    bullets: [
      "Комплектация и установка",
      "Финальные узлы и стыки",
      "Проверка работоспособности",
      "Уборка и подготовка к въезду",
      "Сдача по акту",
    ],
    bulletIcons: [Layers3, Ruler, ShieldCheck, Aperture, FileCheck2],
    images: {
      main: "/remont-scope/handover.jpg",
      a: "/remont-scope/detail-1.jpg",
      b: "/remont-scope/detail-2.jpg",
    },
  },
];

function IconBadge({ Icon }: { Icon: any }) {
  return (
    <span
      className="
        inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full
        border border-black/10
        bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.95),rgba(255,255,255,0.70)_45%,rgba(0,0,0,0.03)_100%)]
      "
    >
      {/* ВАЖНО: lucide = stroke, поэтому задаём цвет stroke напрямую */}
      <Icon className="h-5 w-5 text-neutral-700" strokeWidth={1.8} />
    </span>
  );
}

function Photo({
  src,
  alt,
  priority,
  className,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl border border-black/5 bg-neutral-100",
        "transition-transform duration-300 ease-out",
        "hover:-translate-y-[1px]",
        className,
      ].join(" ")}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 45vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-70" />
    </div>
  );
}

export default function RemontScopeSection() {
  const [openKey, setOpenKey] = useState<Key>("engineering");

  const active = useMemo(
    () => blocks.find((b) => b.key === openKey) ?? blocks[0],
    [openKey]
  );

  return (
    <section className="relative bg-[#F9FAFB] py-16 overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-44 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.10),transparent_60%)] blur-3xl opacity-15" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm tracking-[0.2em] text-[#22282B]">
            СОСТАВ РАБОТ
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-[#22282B]">
            Что входит в ремонт
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT */}
          <div className="rounded-[28px] border border-black/5 bg-white/80 shadow-sm backdrop-blur-xl overflow-hidden">
            <div className="divide-y divide-black/5">
              {blocks.map((b) => {
                const isOpen = b.key === openKey;
                const BIcon = b.Icon;

                return (
                  <div key={b.key} className={isOpen ? "bg-black/[0.015]" : ""}>
                    <button
                      type="button"
                      onClick={() => setOpenKey(b.key)}
                      className="w-full px-7 py-5 text-left flex items-center justify-between gap-6 hover:bg-black/[0.02] transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                      aria-controls={`scope-${b.key}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#22282B] text-white/90 shadow-sm">
                          <BIcon className="h-5 w-5" strokeWidth={1.7} />
                        </span>
                        <div className="text-[16px] font-semibold tracking-tight text-neutral-900">
                          {b.title}
                        </div>
                      </div>

                      <ChevronDown
                        className={[
                          "h-5 w-5 text-neutral-500 transition-transform duration-200",
                          isOpen ? "rotate-180" : "rotate-0",
                        ].join(" ")}
                      />
                    </button>

                    <div
                      id={`scope-${b.key}`}
                      className={[
                        "grid overflow-hidden px-7",
                        "transition-[grid-template-rows,opacity,margin] duration-250 ease-out",
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 pb-6"
                          : "grid-rows-[0fr] opacity-0 pb-0",
                      ].join(" ")}
                    >
                      <div className="min-h-0">
                        <div className="grid gap-3 md:grid-cols-2 mt-3">
                          {b.bullets.map((t, i) => {
                            const ItemIcon = b.bulletIcons[i];
                            return (
                              <div
                                key={t}
                                className="
                                  flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3
                                  transition-colors duration-200
                                  hover:border-black/10 hover:bg-neutral-50
                                  cursor-pointer
                                "
                              >
                                <IconBadge Icon={ItemIcon} />
                                <p className="text-[13px] leading-relaxed text-neutral-800">
                                  {t}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="px-7 py-6 border-t border-black/5 bg-white/60">
              <button
                type="button"
                className="
      w-full rounded-full bg-[#22282B] px-6 py-3 text-sm font-medium text-white
      transition-all duration-200 cursor-pointer
      hover:-translate-y-[1px] hover:shadow-md hover:opacity-95
      active:translate-y-0
    "
              >
                Получить смету и состав работ →
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-[28px] border border-black/5 bg-white/80 shadow-sm backdrop-blur-xl overflow-hidden">
            <div className="p-7">
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm font-semibold text-[#22282B]">
                  {active.title}
                </div>
                <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-neutral-700">
                  Примеры
                </span>
              </div>

              {/* key помогает React “обновить” блок без тяжелых эффектов */}
              <div key={active.key} className="mt-5 grid gap-3">
                <div className="relative">
                  <Photo
                    src={active.images.main}
                    alt={active.title}
                    priority
                    className="aspect-[16/10]"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white/85 px-4 py-2 text-xs text-neutral-900 backdrop-blur border border-black/10">
                    {active.title}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Photo
                    src={active.images.a}
                    alt="Деталь"
                    className="aspect-[4/3]"
                  />
                  <Photo
                    src={active.images.b}
                    alt="Деталь"
                    className="aspect-[4/3]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
