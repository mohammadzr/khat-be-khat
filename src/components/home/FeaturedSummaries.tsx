import React from "react";
import { Button } from "../ui/button";
import { ChevronLeft, BookOpen } from "lucide-react";
import SummaryCard from "../summaries/SummaryCard";

interface FeaturedSummariesProps {
  title?: string;
  description?: string;
  summaries?: Array<{
    id: string;
    title: string;
    author: string;
    coverImage: string;
    excerpt: string;
    rating: number;
    reviewCount: number;
    createdBy: {
      name: string;
      avatar: string;
    };
    createdAt: string;
    isSaved: boolean;
  }>;
}

const FeaturedSummaries = ({
  title = "خلاصه‌های برتر کتاب‌ها",
  description = "خلاصه‌های منتخب و پرطرفدار کتاب‌های فارسی و ترجمه شده",
  summaries = [
    {
      id: "summary-1",
      title: "صد سال تنهایی",
      author: "گابریل گارسیا مارکز",
      coverImage:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000",
      excerpt:
        "در این کتاب، مارکز داستان خانواده بوئندیا را در طول هفت نسل در شهر خیالی ماکوندو روایت می‌کند...",
      rating: 4.7,
      reviewCount: 128,
      createdBy: {
        name: "سارا احمدی",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
      },
      createdAt: "۳ روز پیش",
      isSaved: false,
    },
    {
      id: "summary-2",
      title: "بیگانه",
      author: "آلبر کامو",
      coverImage:
        "https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=1000",
      excerpt:
        "داستان مردی به نام مرسو که پس از مرگ مادرش، در یک روز گرم تابستانی در ساحل الجزایر، عربی را به قتل می‌رساند...",
      rating: 4.5,
      reviewCount: 95,
      createdBy: {
        name: "علی محمدی",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ali",
      },
      createdAt: "۱ هفته پیش",
      isSaved: true,
    },
    {
      id: "summary-3",
      title: "کیمیاگر",
      author: "پائولو کوئلیو",
      coverImage:
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000",
      excerpt:
        "داستان چوپان جوانی به نام سانتیاگو که در جستجوی گنج به سفری طولانی می‌رود و در این مسیر درس‌های ارزشمندی می‌آموزد...",
      rating: 4.3,
      reviewCount: 112,
      createdBy: {
        name: "مریم حسینی",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maryam",
      },
      createdAt: "۲ هفته پیش",
      isSaved: false,
    },
    {
      id: "summary-4",
      title: "خشم و هیاهو",
      author: "ویلیام فاکنر",
      coverImage:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000",
      excerpt:
        "داستان خانواده کامپسون در جنوب آمریکا که با مشکلات مختلف اجتماعی و خانوادگی دست و پنجه نرم می‌کنند...",
      rating: 4.6,
      reviewCount: 87,
      createdBy: {
        name: "رضا کریمی",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Reza",
      },
      createdAt: "۳ هفته پیش",
      isSaved: false,
    },
  ],
}: FeaturedSummariesProps) => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="rtl-text text-right">
            <h2 className="text-2xl md:text-3xl font-bold mb-2" dir="rtl">
              {title}
            </h2>
            <p className="text-gray-600" dir="rtl">
              {description}
            </p>
          </div>
          <Button
            variant="outline"
            className="mt-4 md:mt-0 flex items-center gap-2 rtl-text"
            dir="rtl"
          >
            <span>مشاهده همه</span>
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {summaries.map((summary) => (
            <SummaryCard
              key={summary.id}
              id={summary.id}
              title={summary.title}
              author={summary.author}
              coverImage={summary.coverImage}
              excerpt={summary.excerpt}
              rating={summary.rating}
              reviewCount={summary.reviewCount}
              createdBy={summary.createdBy}
              createdAt={summary.createdAt}
              isSaved={summary.isSaved}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            variant="secondary"
            className="flex items-center gap-2 mx-auto"
          >
            <BookOpen className="h-4 w-4" />
            <span>مشاهده خلاصه‌های بیشتر</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSummaries;
