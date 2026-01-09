"use client";

import {
  ArrowRight,
  Truck,
  Hammer,
  ShieldCheck,
  Sparkles,
  PackageCheck,
  Check,
} from "lucide-react";

type Item = {
  title: string;
  detail: string;
  Icon: React.ElementType;
};

function cn(...s: Array<string | false | undefined>) {
  return s.filter(Boolean).join(" ");
}

export default function MebelServicePromiseSection() {
  const items: Item[] = [
    {
      title: "Доставка и подъём",
      detail: "В согласованное окно, с аккуратной защитой проходов.",
      Icon: Truck,
    },
    {
      title: "Сборка и монтаж",
      detail: "По уровню и зазорам. Финальная регулировка — после установки.",
      Icon: Hammer,
    },
    {
      title: "Вывоз упаковки",
      detail: "Упаковку и мусор забираем — помещение остаётся чистым.",
      Icon: PackageCheck,
    },
    {
      title: "Гарантия",
      detail:
        "Гарантия на монтаж + условия производителя фиксируются в договоре.",
      Icon: ShieldCheck,
    },
    {
      title: "Сервис после",
      detail: "Поддержка проекта и корректировки, если потребуется.",
      Icon: Sparkles,
    },
  ];

  const trust = [
    "Подъём включён",
    "Монтаж по уровню",
    "Вывоз упаковки",
    "Гарантия фиксируется",
  ];

  return (
    <section className="relative bg-[#F6F7F8] py-10 md:py-12 overflow-hidden">
      {/* premium background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-56 left-1/2 h-[740px] w-[740px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.10),transparent_60%)] blur-3xl opacity-10" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(rgba(0,0,0,0.25)_1px,transparent_1px)] [background-size:34px_34px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm tracking-[0.2em] text-[#22282B] uppercase">
              СЕРВИС
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-[#22282B]">
              Доставка, сборка, гарантия
            </h2>

            <p className="mt-3 text-sm md:text-base text-[#22282B]/65">
              Под ключ — спокойно и в одном контуре ответственности.
            </p>

            {/* trust row: НЕ переносится, без скроллбара */}
            <div
              className={cn(
                "mt-5 flex items-center gap-5",
                "flex-nowrap overflow-x-auto whitespace-nowrap",
                "[scrollbar-width:none] [-ms-overflow-style:none]",
                "[&::-webkit-scrollbar]:hidden"
              )}
            >
              {trust.map((t, i) => (
                <div key={t} className="inline-flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#22282B]/10">
                    <Check className="h-4 w-4 text-[#22282B]" />
                  </span>
                  <span className="text-sm text-[#22282B]/70">{t}</span>

                  {i !== trust.length - 1 && (
                    <span className="ml-5 h-4 w-px bg-black/10" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#22282B] px-6 py-3 text-sm font-medium text-white
                       shadow-sm transition hover:-translate-y-[1px] hover:shadow-md active:translate-y-0"
          >
            Обсудить проект
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* cards (нижe/короче) */}
        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
          {items.map(({ title, detail, Icon }) => (
            <article
              key={title}
              className={cn(
                "group relative overflow-hidden rounded-[24px] bg-white",
                "ring-1 ring-black/10 ring-inset",
                "shadow-[0_16px_48px_rgba(17,24,39,0.08)]",
                "px-5 py-5 md:px-6 md:py-6",
                "transition-[transform,box-shadow] duration-200",
                "hover:-translate-y-[2px] hover:shadow-[0_22px_62px_rgba(17,24,39,0.12)]"
              )}
            >
              {/* watermark: меньше и ниже */}
              <div className="pointer-events-none absolute -right-6 -bottom-6 opacity-[0.055] transition-opacity duration-200 group-hover:opacity-[0.085]">
                <Icon className="h-36 w-36 text-[#22282B]" strokeWidth={1.1} />
              </div>

              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#22282B] text-white shadow-sm">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </div>

              <h3 className="mt-4 text-[15px] font-semibold text-[#22282B] leading-snug">
                {title}
              </h3>

              {/* короче текст (2–3 строки). Нужен plugin line-clamp, если нет — убери line-clamp */}
              <p className="mt-2 text-sm leading-relaxed text-[#22282B]/65 line-clamp-3">
                {detail}
              </p>

              <div className="mt-5 h-px w-10 bg-black/10" />
            </article>
          ))}
        </div>

        {/* mobile CTA */}
        <a
          href="#contact"
          className="mt-6 inline-flex sm:hidden w-full items-center justify-center gap-2 rounded-full bg-[#22282B] px-6 py-3 text-sm font-medium text-white shadow-sm"
        >
          Обсудить проект
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
