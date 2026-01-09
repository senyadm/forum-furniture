"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ClipboardList,
  Ruler,
  Layers3,
  Box,
  FileSignature,
  Factory,
  Truck,
  Palette,
  Timer,
  Scan,
  MapPinned,
  Settings2,
  Image as ImageIcon,
  ReceiptText,
  ShieldCheck,
  Wrench,
  Check,
} from "lucide-react";

type Step = {
  id: number;
  title: string;
  desc: string;
  Icon: React.ElementType;
  bg: string;
  points: { label: string; Icon: React.ElementType }[];
};

const steps: Step[] = [
  {
    id: 1,
    title: "Заявка → бриф",
    desc: "Стиль, размеры, ожидания по бюджету.",
    Icon: ClipboardList,
    bg: "/mebel/process/01.jpg",
    points: [
      { label: "Референсы и пожелания", Icon: Palette },
      { label: "Сроки и приоритеты", Icon: Timer },
    ],
  },
  {
    id: 2,
    title: "Замер / план",
    desc: "Выезд или работа по чертежам.",
    Icon: Ruler,
    bg: "/mebel/process/02.jpg",
    points: [
      { label: "Размеры и привязки", Icon: Scan },
      { label: "План по зонам", Icon: MapPinned },
    ],
  },
  {
    id: 3,
    title: "Подбор решений",
    desc: "Материалы и фурнитура под задачу.",
    Icon: Layers3,
    bg: "/mebel/process/03.jpg",
    points: [
      { label: "Материалы и фактуры", Icon: Layers3 },
      { label: "Фурнитура и механизмы", Icon: Settings2 },
    ],
  },
  {
    id: 4,
    title: "3D + смета",
    desc: "Визуализация + спецификация и стоимость.",
    Icon: Box,
    bg: "/mebel/process/04.jpg",
    points: [
      { label: "3D / эскизы", Icon: ImageIcon },
      { label: "Смета и спецификация", Icon: ReceiptText },
    ],
  },
  {
    id: 5,
    title: "Договор",
    desc: "Этапы, сроки, условия и предоплата.",
    Icon: FileSignature,
    bg: "/mebel/process/05.jpg",
    points: [
      { label: "Сроки и этапы", Icon: Timer },
      { label: "Гарантии и ответственность", Icon: ShieldCheck },
    ],
  },
  {
    id: 6,
    title: "Закупка",
    desc: "Закупка/производство + контроль качества.",
    Icon: Factory,
    bg: "/mebel/process/06.jpg",
    points: [
      { label: "Контроль исполнения", Icon: ShieldCheck },
      { label: "Прогресс по этапам", Icon: Wrench },
    ],
  },
  {
    id: 7,
    title: "Сборка",
    desc: "Доставка, монтаж, проверка, сдача.",
    Icon: Truck,
    bg: "/mebel/process/07.jpg",
    points: [
      { label: "Монтаж и регулировка", Icon: Wrench },
      { label: "Сдача и рекомендации", Icon: Check },
    ],
  },
];

function cn(...s: Array<string | false | undefined>) {
  return s.filter(Boolean).join(" ");
}

/** Плавная смена фоновых изображений без моргания */
function CrossfadeBackground({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  const [current, setCurrent] = useState(src);
  const [next, setNext] = useState<string | null>(null);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (src === current) return;
    setNext(src);
    setFadeIn(false);
  }, [src, current]);

  const finish = () => {
    if (!next) return;
    setCurrent(next);
    setNext(null);
    setFadeIn(false);
  };

  return (
    <div className="absolute inset-0">
      <Image
        src={current}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 65vw"
        priority={priority}
      />

      {next && (
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-500 ease-out",
            fadeIn ? "opacity-100" : "opacity-0"
          )}
          onTransitionEnd={finish}
        >
          <Image
            src={next}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 65vw"
            onLoadingComplete={() =>
              requestAnimationFrame(() => setFadeIn(true))
            }
          />
        </div>
      )}
    </div>
  );
}

function StepButton({
  step,
  activeId,
  onClick,
  mobile,
}: {
  step: Step;
  activeId: number;
  onClick: () => void;
  mobile?: boolean;
}) {
  const isActive = step.id === activeId;
  const Icon = step.Icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        mobile ? "min-w-[180px]" : "min-w-0",
        "group relative cursor-pointer select-none text-left rounded-2xl transition",
        "border shadow-sm ring-1 ring-transparent",
        isActive
          ? "border-black/15 bg-[#22282B] text-white shadow-md ring-white/10"
          : "border-black/10 bg-white/80 text-[#22282B] hover:bg-white hover:border-black/15 hover:shadow-md hover:ring-black/10"
      )}
    >
      <div className="flex items-center gap-3 px-3 py-2.5">
        <span
          className={cn(
            "inline-flex h-9 w-9 items-center justify-center rounded-full border transition",
            isActive ? "border-white/20 bg-white/10" : "border-black/10 bg-white"
          )}
        >
          <Icon
            className={cn(
              "h-4.5 w-4.5",
              isActive ? "text-white" : "text-[#22282B]"
            )}
            strokeWidth={1.8}
          />
        </span>

        <div className="min-w-0">
          <div
            className={cn(
              "text-xs font-semibold tracking-tight",
              isActive ? "text-white" : "text-[#22282B]"
            )}
          >
            {String(step.id).padStart(2, "0")}
          </div>
          <div
            className={cn(
              "text-xs leading-snug",
              isActive ? "text-white/80" : "text-[#22282B]/60"
            )}
          >
            {step.title}
          </div>
        </div>
      </div>

      {isActive && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl">
          <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_60%)]" />
        </div>
      )}
    </button>
  );
}

export default function MebelOrderProcessSection() {
  const [activeId, setActiveId] = useState<number>(1);

  const active = useMemo(
    () => steps.find((s) => s.id === activeId) ?? steps[0],
    [activeId]
  );

  // preload соседних картинок: -1 и +1
  const preloadSrcs = useMemo(() => {
    const ids = [activeId - 1, activeId + 1].filter((x) => x >= 1 && x <= 7);
    return steps.filter((s) => ids.includes(s.id)).map((s) => s.bg);
  }, [activeId]);

  const ActiveIcon = active.Icon;

  return (
    <section
      aria-labelledby="order-process"
      className="relative bg-[#F6F7F8] py-12 md:py-14 overflow-hidden"
    >
      {/* subtle premium background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-52 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.10),transparent_60%)] blur-3xl opacity-15" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(0,0,0,0.22)_1px,transparent_1px)] [background-size:26px_26px]" />
      </div>

      {/* preload соседних фоток (скрыто) */}
      <div className="hidden">
        {preloadSrcs.map((src) => (
          <Image key={src} src={src} alt="" width={24} height={24} />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm tracking-[0.2em] text-[#22282B] uppercase">
              ПРОЦЕСС
            </p>
            <h2
              id="order-process"
              className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-[#22282B]"
            >
              Как проходит заказ
            </h2>
            <p className="mt-3 text-sm md:text-base text-[#22282B]/65">
              7 шагов — быстро и прозрачно. Выберите этап, чтобы увидеть детали.
            </p>
          </div>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#22282B] px-6 py-3 text-sm font-medium text-white
                       shadow-sm transition hover:-translate-y-[1px] hover:shadow-md active:translate-y-0"
          >
            Получить расчёт
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Timeline */}
        <div className="mt-7 rounded-[28px] border border-black/10 bg-white/75 backdrop-blur-xl shadow-sm p-4 sm:p-5">
          {/* MOBILE: горизонтальный свайп, скроллбар скрыт */}
          <div
            className="
              flex gap-2 pb-2 overflow-x-auto overscroll-x-contain
              [-webkit-overflow-scrolling:touch]
              [scrollbar-width:none] [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
              sm:hidden
            "
          >
            {steps.map((s) => (
              <StepButton
                key={s.id}
                step={s}
                activeId={activeId}
                mobile
                onClick={() => setActiveId(s.id)}
              />
            ))}
          </div>

          {/* DESKTOP: grid без overflow => скроллбар не появится вообще */}
          <div className="hidden sm:grid sm:grid-cols-7 sm:gap-3">
            {steps.map((s) => (
              <StepButton
                key={s.id}
                step={s}
                activeId={activeId}
                onClick={() => setActiveId(s.id)}
              />
            ))}
          </div>
        </div>

        {/* Details + CTA */}
        <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_360px]">
          {/* DETAILS WITH PHOTO BACKGROUND */}
          <div className="relative rounded-[28px] overflow-hidden border border-black/10 shadow-sm">
            <CrossfadeBackground
              src={active.bg}
              alt={active.title}
              priority={activeId === 1}
            />

            {/* overlays (темнее + премиум) */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-black/85" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.14),transparent_45%)]" />

            <div className="relative p-6 md:p-7 text-white">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 border border-white/15 backdrop-blur text-white shadow-sm">
                    <ActiveIcon className="h-5 w-5" strokeWidth={1.8} />
                  </span>

                  <div>
                    <div className="text-sm text-white/70 font-medium">
                      Этап {String(active.id).padStart(2, "0")}
                    </div>
                    <div className="mt-1 text-xl md:text-2xl font-semibold tracking-tight text-white">
                      {active.title}
                    </div>
                    <p className="mt-2 text-sm md:text-base text-white/80">
                      {active.desc}
                    </p>
                  </div>
                </div>

                <div className="hidden md:block text-[72px] font-semibold tracking-tight text-white/[0.10] -mt-2">
                  {String(active.id).padStart(2, "0")}
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {active.points.map((p) => {
                  const PIcon = p.Icon;
                  return (
                    <div
                      key={p.label}
                      className="
                        flex items-center gap-3 rounded-2xl border border-white/14 bg-white/8 backdrop-blur px-4 py-3
                        cursor-pointer transition
                        hover:bg-white/12 hover:border-white/24
                        hover:shadow-[0_12px_32px_rgba(0,0,0,0.24)]
                      "
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/16 bg-white/10">
                        <PIcon
                          className="h-4.5 w-4.5 text-white"
                          strokeWidth={1.9}
                        />
                      </span>
                      <div className="text-sm text-white/90">{p.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-[28px] border border-black/10 bg-white/80 backdrop-blur-xl shadow-sm p-6 md:p-7">
            <div className="text-sm tracking-[0.2em] text-[#22282B] uppercase">
              БЫСТРЫЙ СТАРТ
            </div>
            <div className="mt-3 text-lg font-semibold tracking-tight text-[#22282B]">
              Достаточно 2–3 фото
            </div>
            <p className="mt-2 text-sm text-[#22282B]/65">
              Адрес, план и пару предпочтений — остальное соберём в
              бриф и предложим решения.
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#22282B] px-6 py-3 text-sm font-medium text-white
                         shadow-sm transition hover:-translate-y-[1px] hover:shadow-md active:translate-y-0"
            >
              Оставить заявку
              <ArrowRight className="h-4 w-4" />
            </a>

            <div className="mt-3 text-xs text-[#22282B]/55">
              Ответим с первичными вариантами и вилкой по срокам.
            </div>
          </div>
        </div>

        {/* mobile CTA */}
        <a
          href="#contact"
          className="mt-6 inline-flex sm:hidden w-full items-center justify-center gap-2 rounded-full bg-[#22282B] px-6 py-3 text-sm font-medium text-white shadow-sm"
        >
          Получить расчёт
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
