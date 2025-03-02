import React from "react";
import { Button } from "../ui/button";
import GroupCard from "../groups/GroupCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ReadingGroupsSectionProps {
  title?: string;
  description?: string;
  groups?: Array<{
    id: string;
    name: string;
    bookTitle: string;
    bookCover: string;
    memberCount: number;
    readingProgress: number;
    nextMeetingDate: string;
    isPremium: boolean;
    members: Array<{
      id: string;
      name: string;
      avatar?: string;
    }>;
  }>;
}

const ReadingGroupsSection = ({
  title = "گروه‌های مطالعه فعال",
  description = "به گروه‌های مطالعه بپیوندید و تجربه خواندن کتاب را با دیگران به اشتراک بگذارید",
  groups = [
    {
      id: "group-1",
      name: "کتابخوانی فلسفه",
      bookTitle: "هنر شفاف اندیشیدن",
      bookCover:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000",
      memberCount: 24,
      readingProgress: 68,
      nextMeetingDate: "۱۵ خرداد ۱۴۰۳",
      isPremium: true,
      members: [
        {
          id: "1",
          name: "سارا",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
        },
        {
          id: "2",
          name: "علی",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ali",
        },
        {
          id: "3",
          name: "مریم",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maryam",
        },
      ],
    },
    {
      id: "group-2",
      name: "ادبیات معاصر",
      bookTitle: "سمفونی مردگان",
      bookCover:
        "https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=1000",
      memberCount: 18,
      readingProgress: 42,
      nextMeetingDate: "۲۰ خرداد ۱۴۰۳",
      isPremium: false,
      members: [
        {
          id: "4",
          name: "محمد",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mohammad",
        },
        {
          id: "5",
          name: "فاطمه",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatemeh",
        },
        {
          id: "6",
          name: "رضا",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Reza",
        },
      ],
    },
    {
      id: "group-3",
      name: "رمان‌های علمی تخیلی",
      bookTitle: "دنیای قشنگ نو",
      bookCover:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000",
      memberCount: 32,
      readingProgress: 75,
      nextMeetingDate: "۱۰ خرداد ۱۴۰۳",
      isPremium: true,
      members: [
        {
          id: "7",
          name: "نیما",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nima",
        },
        {
          id: "8",
          name: "زهرا",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zahra",
        },
        {
          id: "9",
          name: "امیر",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amir",
        },
      ],
    },
    {
      id: "group-4",
      name: "روانشناسی و خودشناسی",
      bookTitle: "انسان در جستجوی معنا",
      bookCover:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000",
      memberCount: 45,
      readingProgress: 30,
      nextMeetingDate: "۲۵ خرداد ۱۴۰۳",
      isPremium: false,
      members: [
        {
          id: "10",
          name: "سینا",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sina",
        },
        {
          id: "11",
          name: "نرگس",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Narges",
        },
        {
          id: "12",
          name: "حسین",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hossein",
        },
      ],
    },
  ],
}: ReadingGroupsSectionProps) => {
  // Scroll functionality for the carousel
  const scrollContainer = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-2" dir="rtl">
              {title}
            </h2>
            <p className="text-gray-600" dir="rtl">
              {description}
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollLeft}
              className="h-10 w-10 rounded-full"
              aria-label="Scroll left"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollRight}
              className="h-10 w-10 rounded-full"
              aria-label="Scroll right"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 ml-2">
              مشاهده همه گروه‌ها
            </Button>
          </div>
        </div>

        <div
          ref={scrollContainer}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x"
          dir="rtl"
        >
          {groups.map((group) => (
            <div key={group.id} className="snap-start flex-shrink-0">
              <GroupCard
                id={group.id}
                name={group.name}
                bookTitle={group.bookTitle}
                bookCover={group.bookCover}
                memberCount={group.memberCount}
                readingProgress={group.readingProgress}
                nextMeetingDate={group.nextMeetingDate}
                isPremium={group.isPremium}
                members={group.members}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button variant="outline" className="text-blue-600 border-blue-600">
            ایجاد گروه مطالعه جدید
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReadingGroupsSection;
