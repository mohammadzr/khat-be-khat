import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  BookOpen,
  Users,
  BookMarked,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface FeaturedBook {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  category: string;
  rating: number;
  isNew?: boolean;
}

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  featuredBooks?: FeaturedBook[];
  onExplore?: () => void;
  onSignUp?: () => void;
}

const HeroSection = ({
  headline = "جامعه کتاب فارسی",
  subheadline = "خلاصه‌های کتاب، خرید و فروش، و گروه‌های مطالعه در یک پلتفرم",
  featuredBooks = [
    {
      id: "1",
      title: "صد سال تنهایی",
      author: "گابریل گارسیا مارکز",
      coverImage:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000",
      category: "رمان",
      rating: 4.8,
      isNew: true,
    },
    {
      id: "2",
      title: "بوف کور",
      author: "صادق هدایت",
      coverImage:
        "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?q=80&w=1000",
      category: "ادبیات کلاسیک",
      rating: 4.6,
    },
    {
      id: "3",
      title: "هنر شفاف اندیشیدن",
      author: "رولف دوبلی",
      coverImage:
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000",
      category: "توسعه فردی",
      rating: 4.5,
    },
    {
      id: "4",
      title: "شازده کوچولو",
      author: "آنتوان دو سنت اگزوپری",
      coverImage:
        "https://images.unsplash.com/photo-1633477189729-9290b3261d0a?q=80&w=1000",
      category: "داستان",
      rating: 4.9,
      isNew: true,
    },
    {
      id: "5",
      title: "کیمیاگر",
      author: "پائولو کوئلیو",
      coverImage:
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1000",
      category: "رمان",
      rating: 4.7,
    },
  ],
  onExplore = () => {},
  onSignUp = () => {},
}: HeroSectionProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const visibleBooks = 3; // Number of books visible at once

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= featuredBooks.length - visibleBooks + 1
        ? 0
        : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredBooks.length - visibleBooks : prevIndex - 1,
    );
  };

  // Stats for the platform
  const stats = [
    { icon: <BookOpen className="h-5 w-5" />, value: "+۵,۰۰۰", label: "کتاب" },
    { icon: <Users className="h-5 w-5" />, value: "+۱۰,۰۰۰", label: "کاربر" },
    {
      icon: <BookMarked className="h-5 w-5" />,
      value: "+۲,۵۰۰",
      label: "خلاصه",
    },
  ];

  return (
    <section className="w-full h-[500px] bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000')] bg-cover opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left content - Text and CTA */}
        <div className="w-full md:w-1/2 text-right space-y-6 py-10 md:py-0">
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900"
            dir="rtl"
          >
            {headline}
          </h1>

          <p className="text-lg text-gray-700" dir="rtl">
            {subheadline}
          </p>

          <div className="flex flex-wrap gap-4 justify-end">
            <Button
              onClick={onSignUp}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
            >
              عضویت رایگان
            </Button>
            <Button
              variant="outline"
              onClick={onExplore}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-md"
            >
              جستجوی کتاب‌ها
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 justify-end mt-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="text-right">
                  <p className="font-bold text-lg text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  {stat.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right content - Book carousel */}
        <div className="w-full md:w-1/2 relative h-[350px] mt-8 md:mt-0">
          <div className="relative h-full flex items-center justify-center">
            {/* Carousel navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-0 z-20 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-blue-600"
              aria-label="Previous book"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Books carousel */}
            <div className="relative h-full w-full overflow-hidden">
              <div
                className="absolute flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(${currentIndex * -280}px)` }}
              >
                {featuredBooks.map((book, index) => (
                  <div
                    key={book.id}
                    className="w-[250px] mx-3 h-full flex flex-col items-center justify-center"
                  >
                    <div className="relative w-[180px] h-[260px] group transition-all duration-300 transform hover:scale-105">
                      <img
                        src={book.coverImage}
                        alt={book.title}
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                      />
                      {book.isNew && (
                        <Badge className="absolute top-2 right-2 bg-blue-600 text-white">
                          جدید
                        </Badge>
                      )}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col items-center justify-center p-4 text-white">
                        <h3 className="font-bold text-lg text-center" dir="rtl">
                          {book.title}
                        </h3>
                        <p className="text-sm text-center" dir="rtl">
                          {book.author}
                        </p>
                        <div className="mt-2 flex items-center">
                          <span className="text-yellow-400 mr-1">★</span>
                          <span>{book.rating}</span>
                        </div>
                        <Badge className="mt-2 bg-white/20">
                          {book.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 z-20 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-blue-600"
              aria-label="Next book"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
