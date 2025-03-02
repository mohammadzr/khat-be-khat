import "@/src/index.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "کتاب‌خانه فارسی",
  description:
    "جامعه کتاب فارسی - خلاصه‌های کتاب، خرید و فروش، و گروه‌های مطالعه در یک پلتفرم",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
