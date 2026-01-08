"use client";

import { FormEvent, useState } from "react";

export default function ContactFormSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ name, phone });
  };

  return (
    <section className="w-full bg-[#F9FAFB] py-12 md:py-24">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 text-center">
        {/* Маленький подзаголовок */}
        <p className="text-[13px] md:text-base text-slate-500 mb-3 md:mb-4">
          Начнём работать?
        </p>

        {/* Главный заголовок */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6 md:mb-10 leading-tight">
          Оставьте заявку и наш менеджер свяжется{" "}
          <br className="hidden md:block" /> с вами
        </h2>

        {/* МОБИЛЬНАЯ КАРТОЧКА (десктоп визуально не меняет — md: убирает фон/границы) */}
        <div
          className="
            mx-auto max-w-[560px]
            rounded-3xl bg-white/90 border border-slate-200/60
            shadow-[0_18px_50px_rgba(15,23,42,0.08)]
            px-4 py-5
            md:rounded-none md:bg-transparent md:border-0 md:shadow-none md:p-0
          "
        >
          {/* Форма */}
          <form
            onSubmit={handleSubmit}
            className="
              flex flex-col gap-3
              md:flex-row md:items-center md:justify-center md:gap-4
            "
          >
            <input
              type="text"
              placeholder="Как вас зовут"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                w-full md:w-[260px]
                rounded-full bg-slate-100/80
                px-5 md:px-6 py-3.5 text-[14px] md:text-base text-slate-900
                placeholder:text-slate-400
                border border-transparent
                focus:outline-none focus:ring-2 focus:ring-slate-900/10
                transition
              "
            />

            <input
              type="tel"
              placeholder="Номер телефона"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="
                w-full md:w-[260px]
                rounded-full bg-slate-100/80
                px-5 md:px-6 py-3.5 text-[14px] md:text-base text-slate-900
                placeholder:text-slate-400
                border border-transparent
                focus:outline-none focus:ring-2 focus:ring-slate-900/10
                transition
              "
            />

            <button
              type="submit"
              className="
                w-full md:w-auto
                rounded-full px-7 md:px-10 py-3.5
                bg-[#22282B] text-white text-[14px] md:text-base font-medium
                shadow-[0_14px_35px_rgba(15,23,42,0.28)]
                hover:bg-slate-800
                transition-colors duration-300
                whitespace-nowrap hover:cursor-pointer
              "
            >
              Получить бесплатную консультацию
            </button>
          </form>

          {/* Подпись под формой */}
          <p className="mt-3 md:mt-4 text-[10px] md:text-xs text-slate-400 leading-relaxed">
            Нажимая на кнопку, вы даёте согласие на обработку персональных данных и
            соглашаетесь с политикой конфиденциальности.
          </p>
        </div>
      </div>
    </section>
  );
}
