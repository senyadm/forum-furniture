import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-[#15191C] to-[#22282B] text-slate-100">
      <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-14">
        {/* 3 колонки */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-10">
          {/* Контакты */}
          <div
            className="animate-fade-in"
            style={{ animationDelay: "0.05s" }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-6">
              Контакты
            </h3>

            <ul className="space-y-4 text-sm md:text-base">
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
                <span className="text-slate-200 group-hover:text-white transition-colors">
                  +7 (999) 123-45-67
                </span>
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
                <span className="text-slate-200 group-hover:text-white transition-colors">
                  info@forum-mebel.ru
                </span>
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
          <div
            className="animate-fade-in"
            style={{ animationDelay: "0.12s" }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-6">
              Ссылки
            </h3>
            <ul className="space-y-3 text-sm md:text-base text-slate-300">
              {[
                { href: "#faq", label: "Вопросы и ответы" },
                { href: "#clients", label: "Информация для клиентов" },
                { href: "#terms", label: "Условия сотрудничества" },
                { href: "#privacy", label: "Политика конфиденциальности" },
                { href: "#contact", label: "Оставить заявку" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="
                      inline-flex items-center gap-1
                      hover:text-white
                      transition-all duration-300
                      hover:-translate-y-0.5
                    "
                  >
                    <span>{item.label}</span>
                    <span className="opacity-0 text-xs transition-opacity duration-300 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* О компании / манифест */}
          <div
            className="animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-6">
              Делаем как для себя
            </h3>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Мы не просто предлагаем мебель и ремонт — мы создаём
              пространство, в котором хочется жить. Каждый проект — это
              индивидуальный подход, надёжные материалы и внимание к деталям.
            </p>
          </div>
        </div>

        {/* Нижняя полоска */}
        <div className="border-t border-white/10 pt-5 mt-2 text-center text-xs md:text-sm text-slate-400">
          Forum&nbsp;2025 © Все права защищены
        </div>
      </div>
    </footer>
  );
}
