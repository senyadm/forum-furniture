"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type CaseItem = {
  name: string;
  before: string;
  after: string;
};

const cases: CaseItem[] = [
  {
    name: "Кухня",
    before: "/before-after/kitchen-before.jpg",
    after: "/before-after/kitchen-after.jpg",
  },
  {
    name: "Гостиная",
    before: "/before-after/living-before.jpg",
    after: "/before-after/living-after.jpg",
  },
  {
    name: "Ванная",
    before: "/before-after/bath-before.jpg",
    after: "/before-after/bath-after.jpg",
  },
];

function clamp(v: number) {
  return Math.max(0, Math.min(100, v));
}

export default function BeforeAfterSection() {
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState(52); // %
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);

  const current = useMemo(() => cases[active] ?? cases[0], [active]);

  const setFromClientX = (clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(clamp(pct));
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!draggingRef.current) return;
      setFromClientX(e.clientX);
    };
    const onUp = () => {
      draggingRef.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  useEffect(() => {
    const onTouchMove = (e: TouchEvent) => {
      if (!draggingRef.current) return;
      if (!e.touches?.[0]) return;
      setFromClientX(e.touches[0].clientX);
    };
    const onTouchEnd = () => {
      draggingRef.current = false;
      document.body.style.userSelect = "";
    };

    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  const startMouse = (e: React.MouseEvent) => {
    draggingRef.current = true;
    document.body.style.cursor = "ew-resize";
    document.body.style.userSelect = "none";
    setFromClientX(e.clientX);
  };

  const startTouch = (e: React.TouchEvent) => {
    draggingRef.current = true;
    document.body.style.userSelect = "none";
    setFromClientX(e.touches[0].clientX);
  };

  return (
    <section className="relative bg-[#F9FAFB] py-16 overflow-x-hidden">
      {/* лёгкая атмосфера */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-44 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.10),transparent_60%)] blur-3xl opacity-10" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2">
          <p className="text-sm tracking-[0.2em] text-neutral-500">РЕЗУЛЬТАТ</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
            До / После
          </h2>
          <p className="max-w-2xl text-[14px] leading-relaxed text-neutral-600">
            Потяните ползунок — слева “До”, справа “После”.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-6">
          <div
            className="
              inline-flex flex-wrap gap-2 rounded-full
              border border-black/5 bg-white/70 backdrop-blur
              px-2 py-2 shadow-sm
            "
          >
            {cases.map((c, idx) => {
              const isActive = idx === active;
              return (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => {
                    setActive(idx);
                    setPos(52);
                  }}
                  className={[
                    "rounded-full px-4 py-2 text-sm font-medium cursor-pointer",
                    "transition-all duration-200",
                    isActive
                      ? "bg-[#22282B] text-white shadow-sm"
                      : "bg-transparent text-neutral-600 hover:bg-white hover:text-neutral-900",
                  ].join(" ")}
                >
                  {c.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Slider card */}
        <div className="mt-6 rounded-[28px] border border-black/5 bg-white/80 shadow-sm backdrop-blur-xl overflow-hidden">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />

          <div
            ref={wrapRef}
            className="relative w-full cursor-ew-resize select-none"
            onMouseDown={startMouse}
            onTouchStart={startTouch}
            role="group"
            aria-label="Сравнение До и После"
          >
            {/* BASE = AFTER (полный размер) */}
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={current.after}
                alt={`${current.name} — После`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 1000px"
                priority
              />
            </div>

            {/* OVERLAY = BEFORE (полный размер + clip-path) */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: `inset(0 ${100 - pos}% 0 0)`,
                WebkitClipPath: `inset(0 ${100 - pos}% 0 0)`,
                willChange: "clip-path",
              }}
              aria-hidden="true"
            >
              <Image
                src={current.before}
                alt={`${current.name} — До`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 1000px"
              />
            </div>

            {/* Divider */}
            <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
              <div className="h-full w-px bg-white/85" />
            </div>

            {/* Handle */}
            <div className="absolute top-1/2 -translate-y-1/2" style={{ left: `${pos}%` }}>
              <div
                className="
                  -translate-x-1/2
                  h-12 w-12 rounded-full
                  border border-black/10 bg-white/90
                  backdrop-blur
                  shadow-[0_18px_55px_rgba(0,0,0,0.18)]
                  flex items-center justify-center
                  transition-transform duration-200
                "
              >
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-0.5 rounded-full bg-[#22282B]" />
                  <span className="h-5 w-0.5 rounded-full bg-[#22282B]" />
                  <span className="h-3 w-0.5 rounded-full bg-[#22282B]" />
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="pointer-events-none absolute left-4 top-4">
              <span className="rounded-full border border-black/10 bg-white/90 px-3 py-1 text-xs text-neutral-900 backdrop-blur">
                До
              </span>
            </div>
            <div className="pointer-events-none absolute right-4 top-4">
              <span className="rounded-full border border-black/10 bg-white/90 px-3 py-1 text-xs text-neutral-900 backdrop-blur">
                После
              </span>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />

          <div className="px-6 py-4 text-sm text-neutral-700 flex items-center justify-between">
            <span className="font-medium">{current.name}</span>
            <span className="text-neutral-500">Drag ↔</span>
          </div>
        </div>
      </div>
    </section>
  );
}
