// components/TrustBar.tsx
import {
  FileSignature,
  ReceiptText,
  Layers3,
  Video,
  CalendarClock,
} from "lucide-react";

const items = [
  {
    title: "Договор + гарантия 24 мес.",
    desc: "Фиксируем условия и отвечаем за результат.",
    Icon: FileSignature,
  },
  {
    title: "Фикс-смета, без сюрпризов",
    desc: "Стоимость и объёмы — до старта работ.",
    Icon: ReceiptText,
  },
  {
    title: "Авторский надзор",
    desc: "Контроль соответствия проекту и качеству.",
    Icon: Layers3,
  },
  {
    title: "Фото/видео-отчёт каждую неделю",
    desc: "Показываем прогресс и скрытые этапы.",
    Icon: Video,
  },
  {
    title: "Сроки по графику",
    desc: "Календарь работ и ответственность прописаны.",
    Icon: CalendarClock,
  },
];

export default function TrustBar() {
  return (
    <section className="bg-[#F9FAFB]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative -mt-12">
          {/* мягкая подсветка (дороже выглядит) */}
          <div
            className="pointer-events-none absolute -inset-6 rounded-[32px] bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.06),transparent_60%)] opacity-20"          />

          <div className="relative overflow-hidden rounded-[28px] border border-black/5 bg-white/80 shadow-[0_22px_70px_rgba(0,0,0,0.05)] backdrop-blur-xl">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />

            {/* делители делаем ультра-лёгкими */}
            <div className="grid md:grid-cols-5">
              {items.map(({ title, desc, Icon }, idx) => (
                <div
                  key={title}
                  className={[
                    "group px-7 py-7",
                    "transition-colors duration-300 hover:bg-black/[0.02]",
                    idx !== 0 ? "md:border-l md:border-black/5" : "",
                    idx !== 0 ? "border-t border-black/5 md:border-t-0" : "",
                  ].join(" ")}
                >
                  <div className="flex items-start gap-4">
                    {/* Премиум бейдж */}
                    <div
                      className="
                        mt-0.5 flex h-10 w-10 items-center justify-center rounded-full
                        text-black ring-
                        transition-all duration-300
                        group-hover:-translate-y-[1px]
                      "
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>

                    <div className="min-w-0">
                      <div className="text-[15px] font-semibold leading-snug tracking-tight text-neutral-900">
                        {title}
                      </div>
                      <div className="mt-1.5 text-[13px] leading-relaxed text-neutral-600">
                        {desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
          </div>
        </div>

        <div className="h-10" />
      </div>
    </section>
  );
}
