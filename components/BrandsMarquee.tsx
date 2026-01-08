"use client";

import Image from "next/image";

const brands = [
  { name: "Knauf", src: "/brands/knauf.svg" },
  { name: "Rehau", src: "/brands/rehau.svg" },
  { name: "Schneider Electric", src: "/brands/schneider.svg" },
  { name: "Grohe", src: "/brands/grohe.svg" },
  { name: "Legrand", src: "/brands/legrand.svg" },
  { name: "Geberit", src: "/brands/geberit.svg" },
  { name: "Egger", src: "/brands/egger.svg" },
];

export default function BrandsMarquee() {
  const loop = [...brands, ...brands];

  return (
    <section className="relative bg-[#F9FAFB] py-14 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.10),transparent_60%)] blur-3xl opacity-10" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2">
          <p className="text-sm tracking-[0.2em] text-neutral-500">МАТЕРИАЛЫ И БРЕНДЫ</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
            Работаем с премиальными брендами
          </h2>
          <p className="max-w-2xl text-[12px] leading-relaxed text-neutral-600">
            Используем проверенные материалы и комплектующие — без компромиссов по качеству.
          </p>
        </div>

        <div className="mt-8 rounded-[28px] border border-black/5 bg-white/80 backdrop-blur-xl shadow-sm overflow-hidden">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />

          <div className="relative py-8">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/95 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white/95 to-transparent" />

            <div className="marquee">
              <div className="marquee__track">
                {loop.map((b, idx) => (
                  <div
                    key={`${b.name}-${idx}`}
                    className="
                      marquee__item
                      cursor-pointer
                      opacity-70 grayscale
                      transition-all duration-200
                      hover:opacity-100 hover:grayscale-0
                    "
                    title={b.name}
                  >
                    {/* одинаковая “ячейка”, чтобы ничего не прилипало */}
                    <div
                      className="
                        flex items-center justify-center
                        h-12 w-[190px] min-w-[190px]
                      "
                    >
                      {/* логотип внутри ограничиваем по высоте/ширине */}
                      <div className="relative h-10 w-[160px]">
                        <Image
                          src={b.src}
                          alt={b.name}
                          fill
                          className="object-contain"
                          sizes="160px"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 text-center text-xs text-neutral-500">
              Используем только реальные бренды из нашей комплектации.
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}
