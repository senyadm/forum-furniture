"use client";

import { FormEvent, useState } from "react";

export default function ContactFormSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // здесь потом можно подключить отправку в Telegram / CRM / почту
    console.log({ name, phone });
  };

  return (
    <section className="w-full bg-[#F9FAFB] py-20 md:py-24">
      <div className="max-w-[1100px] mx-auto px-6 text-center">
        {/* Маленький подзаголовок */}
        <p className="text-sm md:text-base text-slate-500 mb-4">
          Начнём работать?
        </p>

        {/* Главный заголовок */}
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 mb-10">
          Оставьте заявку и наш менеджер свяжется
          <br className="hidden md:block" /> с вами
        </h2>

        {/* Форма */}
        <form
          onSubmit={handleSubmit}
          className="
            flex flex-col gap-4
            md:flex-row md:items-center md:justify-center
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
              px-6 py-3.5 text-sm md:text-base text-slate-900
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
              px-6 py-3.5 text-sm md:text-base text-slate-900
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
              rounded-full px-8 md:px-10 py-3.5
              bg-slate-900 text-white text-sm md:text-base font-medium
              shadow-[0_14px_35px_rgba(15,23,42,0.35)]
              hover:bg-slate-800
              transition-colors duration-300
              whitespace-nowrap hover:cursor-pointer
            "
          >
            Получить бесплатную консультацию
          </button>
        </form>

        {/* Подпись под формой */}
        <p className="mt-4 text-[11px] md:text-xs text-slate-400">
          Нажимая на кнопку, вы даёте согласие на обработку персональных данных и
          соглашаетесь с политикой конфиденциальности.
        </p>
      </div>
    </section>
  );
}
