// components/QualityControlSection.tsx
import { ClipboardList, Camera, HardHat, FileCheck2 } from "lucide-react";

const items = [
  {
    title: "Чек-листы приемки",
    desc: "Проверяем каждый этап по пунктам.",
    Icon: ClipboardList,
  },
  {
    title: "Фото скрытых работ",
    desc: "Коммуникации остаются в отчёте.",
    Icon: Camera,
  },
  {
    title: "Прораб / технадзор",
    desc: "Контроль технологии и сроков.",
    Icon: HardHat,
  },
  {
    title: "Акт скрытых работ",
    desc: "Фиксируем узлы до отделки.",
    Icon: FileCheck2,
  },
];

export default function QualityControlSection() {
  return (
    <section className="relative bg-[#F9FAFB] py-14 overflow-x-hidden">
      {/* мягкая подсветка */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.10),transparent_60%)] blur-3xl opacity-10" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* header — проще */}
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm tracking-[0.2em] text-neutral-500">КОНТРОЛЬ КАЧЕСТВА</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
              Как мы контролируем качество
            </h2>
            <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-neutral-600">
              Коротко и по делу — без обещаний, только процесс.
            </p>
          </div>

          {/* маленький “бейдж” в тон палитры */}
          <div className="hidden md:inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm text-neutral-700 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22282B]" />
            Прозрачный контроль
          </div>
        </div>

        {/* cards — темные */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="
                group rounded-[22px]
                border border-black/10
                bg-[#22282B]
                px-6 py-6
                shadow-[0_18px_60px_rgba(0,0,0,0.12)]
                transition-all duration-200
                hover:-translate-y-[1px]
                hover:shadow-[0_26px_90px_rgba(0,0,0,0.16)]
                cursor-pointer
                relative overflow-hidden
              "
            >
              {/* очень тонкий “премиум” блик */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <div className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
              </div>

              <div
                className="
                  relative inline-flex h-11 w-11 items-center justify-center rounded-full
                  border border-white/10 bg-white/5
                  shadow-[0_12px_35px_rgba(0,0,0,0.20)]
                  transition-transform duration-200
                  group-hover:scale-[1.03]
                "
              >
                <Icon className="h-5 w-5 text-white/90" strokeWidth={1.7} />
              </div>

              <div className="relative mt-4 text-[15px] font-semibold tracking-tight text-white">
                {title}
              </div>

              <div className="relative mt-2 text-[13px] leading-relaxed text-white/70">
                {desc}
              </div>

              {/* тонкая линия при hover */}
              <div className="relative mt-5 h-px w-10 bg-white/15 transition-all duration-200 group-hover:w-16 group-hover:bg-white/25" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
