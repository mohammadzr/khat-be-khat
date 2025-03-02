import React, { useRef } from "react";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight, ShoppingBag } from "lucide-react";
import BookListingCard from "../marketplace/BookListingCard";

interface MarketplacePreviewProps {
  title?: string;
  description?: string;
  listings?: Array<{
    id: string;
    title: string;
    author: string;
    coverImage: string;
    price: number;
    condition: "new" | "like-new" | "good" | "fair" | "poor";
    sellerName: string;
    sellerAvatar: string;
    sellerRating: number;
    location: string;
    listedDate: string;
  }>;
  onViewAllClick?: () => void;
}

const MarketplacePreview = ({
  title = "بازار کتاب دست دوم",
  description = "خرید و فروش کتاب‌های دست دوم با قیمت مناسب از فروشندگان معتبر",
  listings = [
    {
      id: "1",
      title: "شازده کوچولو",
      author: "آنتوان دو سنت اگزوپری",
      coverImage:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000",
      price: 120000,
      condition: "good" as const,
      sellerName: "سارا احمدی",
      sellerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sara",
      sellerRating: 4.5,
      location: "تهران",
      listedDate: "۳ روز پیش",
    },
    {
      id: "2",
      title: "صد سال تنهایی",
      author: "گابریل گارسیا مارکز",
      coverImage:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000",
      price: 180000,
      condition: "like-new" as const,
      sellerName: "علی محمدی",
      sellerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ali",
      sellerRating: 4.8,
      location: "اصفهان",
      listedDate: "۱ هفته پیش",
    },
    {
      id: "3",
      title: "کیمیاگر",
      author: "پائولو کوئلیو",
      coverImage:
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1000",
      price: 95000,
      condition: "fair" as const,
      sellerName: "مریم حسینی",
      sellerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maryam",
      sellerRating: 4.2,
      location: "شیراز",
      listedDate: "۲ هفته پیش",
    },
    {
      id: "4",
      title: "بینوایان",
      author: "ویکتور هوگو",
      coverImage:
        "https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=1000",
      price: 220000,
      condition: "new" as const,
      sellerName: "رضا کریمی",
      sellerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=reza",
      sellerRating: 5.0,
      location: "مشهد",
      listedDate: "۲ روز پیش",
    },
    {
      id: "5",
      title: "جنایت و مکافات",
      author: "فئودور داستایوفسکی",
      coverImage:
        "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1000",
      price: 150000,
      condition: "good" as const,
      sellerName: "نیما رضایی",
      sellerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=nima",
      sellerRating: 4.6,
      location: "تبریز",
      listedDate: "۵ روز پیش",
    },
  ],
  onViewAllClick = () => {},
}: MarketplacePreviewProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <div className="rtl">
            <h2 className="text-2xl font-bold text-gray-900" dir="rtl">
              {title}
            </h2>
            <p className="text-gray-600 mt-1" dir="rtl">
              {description}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={scrollLeft}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={scrollRight}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={onViewAllClick}
            >
              <span>مشاهده همه</span>
              <ShoppingBag className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex gap-6">
            {listings.map((listing) => (
              <div key={listing.id} className="flex-shrink-0">
                <BookListingCard
                  id={listing.id}
                  title={listing.title}
                  author={listing.author}
                  coverImage={listing.coverImage}
                  price={listing.price}
                  condition={listing.condition}
                  sellerName={listing.sellerName}
                  sellerAvatar={listing.sellerAvatar}
                  sellerRating={listing.sellerRating}
                  location={listing.location}
                  listedDate={listing.listedDate}
                />
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default MarketplacePreview;
