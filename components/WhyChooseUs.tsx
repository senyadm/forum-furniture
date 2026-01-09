import Image from "next/image";
import { ArrowRight, ArrowUpRight, BadgeCheck } from "lucide-react";

type Item = {
  title: string;
  subtitle: string;
  image: string;
  accent: string;
};

const items: Item[] = [
  {
    title: "Сроки под контролем",
    subtitle: "Календарь этапов и точные даты сдачи.",
    image: "/why1.jpg",
    accent: "Этапы и сроки",
  },
  {
    title: "Один подрядчик — под ключ",
    subtitle: "Единый контур ответственности за результат.",
    image: "/why2.jpg",
    accent: "Ответственность",
  },
  {
    title: "Прозрачная смета",
    subtitle: "Понятная спецификация без «сюрпризов».",
    image: "/why3.jpg",
    accent: "Смета и объём",
  },
  {
    title: "Работа по договору",
    subtitle: "Фиксируем условия, сроки и гарантию.",
    image: "/why4.jpg",
    accent: "Договор",
  },
];

function cn(...s: Array<string | false | undefined>) {
  return s.filter(Boolean).join(" ");
}

export default function WhyChooseUs() {
  return (
    <section
      className="relative w-full py-12 md:py-20 bg-[#F9FAFB] text-[#22282B] overflow-hidden"
      id="why-us"
    >
      {/* premium background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-52 left-1/2 h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.10),transparent_60%)] blur-3xl opacity-10" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(rgba(0,0,0,0.28)_1px,transparent_1px)] [background-size:38px_38px]" />
      </div>

      <div className="relative mx-auto max-w-[1380px] px-4 md:px-6">
        {/* header */}
        <div className="flex items-end justify-between gap-6 mb-7 md:mb-12">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.25em] uppercase text-[#22282B]/55">
              WHY FORUM
            </p>

            {/* bigger main title */}
            <h2 className="mt-3 text-3xl leading-[1.05] md:text-5xl md:leading-[1.02] font-semibold tracking-tight">
              Почему выбирают нас
            </h2>

            <p className="mt-4 text-sm md:text-lg text-[#22282B]/65">
              Спокойный процесс и предсказуемый результат — без лишнего шума.
            </p>
          </div>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#22282B] px-6 py-3 text-sm font-medium text-white
                       shadow-sm transition-all duration-300 ease-out hover:-translate-y-[1px] hover:shadow-md active:translate-y-0"
          >
            Обсудить проект
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {items.map((item, i) => (
            <article
              key={i}
              className={cn(
                "group relative overflow-hidden rounded-[28px] bg-white",
                "ring-1 ring-black/10 ring-inset",
                "shadow-[0_18px_55px_rgba(17,24,39,0.10)]",
                // softer hover: smaller move + smoother easing
                "transition-[transform,box-shadow] duration-500 ease-out",
                "hover:-translate-y-[1px] hover:shadow-[0_28px_75px_rgba(17,24,39,0.14)]"
              )}
            >
              {/* subtle rim light */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 rounded-[28px] ring-1 ring-white/70 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
              </div>

              {/* image */}
              <div className="relative aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={cn(
                    "object-cover scale-[1.02]",
                    // smoother zoom
                    "transition-transform duration-[900ms] ease-out",
                    "group-hover:scale-[1.07]"
                  )}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* darker base overlay for readability (always) */}
                <div className="absolute inset-0 bg-black/35" />

                {/* stronger bottom gradient for text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/25" />

                {/* top scrim for pill */}
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 via-black/28 to-transparent" />

                {/* subtle grain */}
                <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:24px_24px]" />

                {/* Accent pill */}
                <div className="absolute left-4 top-4">
                  <div
                    className="
                      inline-flex items-center gap-2 rounded-full
                      border border-white/18
                      bg-white/10
                      px-3.5 py-2
                      text-xs text-white/90
                      backdrop-blur-md
                      shadow-[0_14px_40px_rgba(0,0,0,0.35)]
                      transition-all duration-500 ease-out
                      group-hover:bg-white/12
                    "
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/35 border border-white/15">
                      <BadgeCheck className="h-4 w-4 text-white/90" />
                    </span>
                    <span className="[text-shadow:0_2px_12px_rgba(0,0,0,0.60)]">
                      {item.accent}
                    </span>
                  </div>
                </div>


                {/* title/subtitle */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-[18px] md:text-[20px] font-semibold leading-snug text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.70)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed [text-shadow:0_2px_16px_rgba(0,0,0,0.60)]">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* premium footer */}
              <div className="px-5 py-4 bg-white">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-xs text-[#22282B]/55">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#22282B]/25" />
                    <span className="tracking-[0.18em] uppercase">
                      Forum standard
                    </span>
                  </div>
                </div>

                <div className="mt-3 h-px w-full bg-gradient-to-r from-black/0 via-black/10 to-black/0" />
              </div>
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
