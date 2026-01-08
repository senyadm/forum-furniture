"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Home, Star, Wrench, MessageSquare, Send } from "lucide-react";

const menuItems = [
  { key: "home", label: "Главная", icon: Home },
  { key: "about", label: "О Нас", icon: Star },
  { key: "remont", label: "Выбрать ремонт", icon: Wrench },
  { key: "mebel", label: "Заказать мебель", icon: MessageSquare },
  { key: "cta", label: "Оставить заявку", icon: Send },
];

export default function Navbar() {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const router = useRouter();
  const pathname = usePathname();

  // active по роуту
  useEffect(() => {
    if (pathname === "/") setActiveKey("home");
    else if (pathname.startsWith("/mebel")) setActiveKey("mebel");
    else if (pathname.startsWith("/remont")) setActiveKey("remont");
    else if (pathname.startsWith("/about")) setActiveKey("about");
    else setActiveKey(null);
  }, [pathname]);

  // скрытие/появление при скролле (ТОЛЬКО ДЛЯ DESKTOP)
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 70) setHidden(true);
      else setHidden(false);

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleClick = (key: string) => {
    switch (key) {
      case "home":
        router.push("/");
        break;
      case "about":
        router.push("/about");
        break;
      case "remont":
        router.push("/remont");
        break;
      case "mebel":
        router.push("/mebel");
        break;
      case "cta":
        if (pathname === "/") scrollToId("contact");
        else router.push("/#contact");
        break;
    }
  };

  return (
    <>
      {/* DESKTOP/TABLET (НЕ ТРОГАЕМ) */}
      <header
        className={`
          fixed top-6 left-0 right-0 z-50
          hidden md:flex items-center justify-center
          transition-all duration-500
          ${hidden ? "-translate-y-[120%] opacity-0" : "translate-y-0 opacity-100"}
        `}
      >
        <nav
          className="
            flex items-center gap-1 rounded-full
            px-4 py-2 shadow-xl backdrop-blur-lg
            border border-white/10
          "
          style={{ backgroundColor: "#22282B" }}
        >
          {menuItems.map(({ key, label, icon: Icon }) => {
            const isActive = activeKey === key;

            return (
              <button
                key={key}
                onClick={() => handleClick(key)}
                className={`
                  relative flex items-center rounded-full px-6 py-2.5
                  text-sm font-medium cursor-pointer
                  transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                  ${
                    isActive
                      ? "bg-white text-slate-900 shadow-xl scale-[1.06]"
                      : "text-white hover:bg-white/10 hover:scale-[1.04]"
                  }
                `}
                style={{ fontSize: "15px" }}
              >
                {/* Иконка */}
                <span
                  className={`
                    absolute left-4 flex items-center 
                    transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                    ${
                      isActive
                        ? "opacity-100 translate-x-0 scale-100"
                        : "opacity-0 -translate-x-3 scale-95"
                    }
                  `}
                >
                  <Icon size={18} strokeWidth={2} />
                </span>

                {/* Текст */}
                <span
                  className={`
                    transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                    ${isActive ? "ml-6" : "ml-0"}
                  `}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </nav>
      </header>

      {/* MOBILE — НАВБАР СВЕРХУ (компактный, премиальный) */}
      <nav
        className="
          fixed left-3 right-3 z-50 md:hidden
          rounded-2xl border border-white/10
          shadow-2xl backdrop-blur-lg
        "
        style={{
          backgroundColor: "rgba(34,40,43,0.82)",
          top: "calc(0.75rem + env(safe-area-inset-top))",
        }}
      >
        <div className="grid grid-cols-5 gap-1 p-2">
          {menuItems.map(({ key, icon: Icon }) => {
            const isActive = activeKey === key;

            return (
              <button
                key={key}
                onClick={() => handleClick(key)}
                className={`
                  h-11 rounded-xl
                  flex items-center justify-center
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-white text-slate-900 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                      : "text-white/85 hover:bg-white/10"
                  }
                `}
                aria-label={key}
              >
                <Icon size={20} strokeWidth={2} />
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
