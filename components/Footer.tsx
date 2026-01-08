import Link from "next/link";

export default function Footer() {
  const links = [
    { href: "#faq", label: "Вопросы и ответы" },
    { href: "#clients", label: "Информация для клиентов" },
    { href: "#terms", label: "Условия сотрудничества" },
    { href: "#privacy", label: "Политика конфиденциальности" },
    { href: "#contact", label: "Оставить заявку" },
  ];

  return (
    <footer className="w-full bg-gradient-to-t from-[#15191C] to-[#22282B] text-slate-100">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-8 md:mb-10">
          {/* Контакты */}
          <div className="animate-fade-in" style={{ animationDelay: "0.05s" }}>
            <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6">
              Контакты
            </h3>

            <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
              <li className="flex items-center gap-3 group">
                <span
                  className="
                    flex h-9 w-9 items-center justify-center rounded-full
                    bg-white/5 text-lg
                    transition-all duration-300
                    group-hover:bg-white/10 group-hover:scale-105
                  "
                >
                  📞
                </span>
                <a
                  href="tel:+79991234567"
                  className="text-slate-200 group-hover:text-white transition-colors"
                >
                  +7 (999) 123-45-67
                </a>
              </li>

              <li className="flex items-center gap-3 group">
                <span
                  className="
                    flex h-9 w-9 items-center justify-center rounded-full
                    bg-white/5 text-lg
                    transition-all duration-300
                    group-hover:bg-white/10 group-hover:scale-105
                  "
                >
                  ✉️
                </span>
                <a
                  href="mailto:info@forum-mebel.ru"
                  className="text-slate-200 group-hover:text-white transition-colors break-all"
                >
                  info@forum-mebel.ru
                </a>
              </li>

              <li className="flex items-center gap-3 group">
                <span
                  className="
                    flex h-9 w-9 items-center justify-center rounded-full
                    bg-white/5 text-lg
                    transition-all duration-300
                    group-hover:bg-white/10 group-hover:scale-105
                  "
                >
                  📍
                </span>
                <span className="text-slate-200 group-hover:text-white transition-colors">
                  Оренбург, Россия
                </span>
              </li>
            </ul>
          </div>

          {/* Ссылки */}
          <div className="animate-fade-in" style={{ animationDelay: "0.12s" }}>
            <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6">
              Ссылки
            </h3>

            {/* МОБИЛКА: 1 колонка (чтобы не было “кривого” переноса), DESKTOP: как было */}
            <ul className="space-y-3 md:space-y-3 text-sm md:text-base text-slate-300">
              {links.map((item) => (
                <li key={item.href} className="group">
                  <Link
                    href={item.href}
                    className="
                      inline-flex w-full
                      text-slate-300 hover:text-white
                      transition-all duration-300
                      hover:-translate-y-0.5
                      leading-snug
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* О компании */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6">
              Делаем как для себя
            </h3>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Мы создаём пространство,
              в котором хочется жить. Каждый проект — это индивидуальный подход,
              надёжные материалы и внимание к деталям.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 md:pt-5 mt-1 text-center text-[11px] md:text-sm text-slate-400">
          Forum&nbsp;2026 © Все права защищены
        </div>
      </div>
    </footer>
  );
}
