import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Мебель и ремонт под ключ | FORUM",
  description: "Мебель на заказ и ремонт квартир с 2000 года. Дизайн, изготовление и монтаж под ключ.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-slate-50">
        {children}
      </body>
    </html>
  );
}
