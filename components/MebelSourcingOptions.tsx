import {
  ArrowRight,
  Factory,
  Globe2,
  Sparkles,
  Check,
  Dot,
  ShieldCheck,
  Timer,
  Gem,
} from "lucide-react";

type Option = {
  title: string;
  label: string;
  icon: React.ElementType;
  bullets: string[];
};

export default function MebelSourcingOptions() {
  const options: Option[] = [
    {
      title: "Локальное производство",
      label: "Индивидуально",
      icon: Factory,
      bullets: ["Максимальная кастомизация", "Сроки короче по логистике", "Гибкость по материалам"],
    },
    {
      title: "Европа",
      label: "Премиум-уровень",
      icon: Globe2,
      bullets: ["Бренды и фурнитура", "Сильный дизайн-язык", "Стабильное качество"],
    },
    {
      title: "Корея",
      label: "Современный подход",
      icon: Sparkles,
      bullets: ["Технологичные фабрики", "Чистые линии и детали", "Контроль исполнения"],
    },
  ];

  return (
    <section aria-labelledby="mebel-options" className="relative w-full overflow-hidden bg-[#22282B] text-white">
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-[#F6F7F8] to-[#22282B]" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-52 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.10),rgba(255,255,255,0)_60%)] blur-3xl opacity-90" />
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),rgba(255,255,255,0)_60%)]" />
        <div className="absolute -bottom-52 -right-52 h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.07),rgba(255,255,255,0)_60%)]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        {/* Header */}
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm tracking-[0.2em] text-white/70 uppercase">
              СЦЕНАРИИ ПРОИЗВОДСТВА
            </p>
            <h2 id="mebel-options" className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Варианты производства
            </h2>
            <p className="mt-3 text-sm md:text-base text-white/65">
              Подбираем оптимальный путь под проект: сроки, эстетика и уровень исполнения бизнес-класса.
            </p>
          </div>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm text-[#22282B]
                       shadow-sm transition hover:shadow-md hover:-translate-y-[1px] active:translate-y-0"
          >
            Подобрать вариант
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Cards */}
        <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {options.map((o, idx) => {
            const Icon = o.icon;
            const num = String(idx + 1).padStart(2, "0");

            return (
              <article
                key={o.title}
                className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.035] p-7 shadow-sm
                           transition hover:-translate-y-[2px] hover:bg-white/[0.055] hover:border-white/18"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.10),transparent_45%)]" />
                </div>

                <div className="pointer-events-none absolute -right-6 -bottom-8 text-[92px] font-semibold tracking-tight text-white/[0.06]">
                  {num}
                </div>

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-xs text-white/70">
                      <span className="font-medium text-white/80">{num}</span>
                      <span className="h-1 w-1 rounded-full bg-white/40" />
                      <span>{o.label}</span>
                    </div>

                    <div className="rounded-2xl border border-white/12 bg-white/5 p-3 transition group-hover:bg-white/10">
                      <Icon className="h-5 w-5 text-white/90 transition group-hover:scale-[1.04]" strokeWidth={1.8} />
                    </div>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{o.title}</h3>

                  <ul className="mt-4 space-y-2.5 text-sm text-white/70">
                    {o.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/12 bg-white/5">
                          <Check className="h-3.5 w-3.5 text-white/70" />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm text-white/75 transition group-hover:text-white"
                  >
                    Обсудить проект
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Brand line (тонко, дорого, без лишнего текста) */}
        <div className="mt-8 rounded-full border border-white/12 bg-white/[0.035] px-4 py-3 backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/70">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-white/70" />
                Контроль качества
              </span>

              <Dot className="h-4 w-4 text-white/25" />

              <span className="inline-flex items-center gap-2">
                <Timer className="h-4 w-4 text-white/70" />
                Сроки под проект
              </span>

              <Dot className="h-4 w-4 text-white/25" />

              <span className="inline-flex items-center gap-2">
                <Gem className="h-4 w-4 text-white/70" />
                Материалы бизнес-класса
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-white/65">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1.5">
                <Factory className="h-4 w-4 text-white/70" />
                Локально
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1.5">
                <Globe2 className="h-4 w-4 text-white/70" />
                Европа
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1.5">
                <Sparkles className="h-4 w-4 text-white/70" />
                Корея
              </span>
            </div>
          </div>
        </div>

        {/* mobile CTA */}
        <a
          href="#contact"
          className="mt-6 inline-flex sm:hidden w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm text-[#22282B] shadow-sm"
        >
          Подобрать вариант
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
