import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Bookmark, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface SummaryCardProps {
  id?: string;
  title?: string;
  author?: string;
  coverImage?: string;
  excerpt?: string;
  rating?: number;
  reviewCount?: number;
  createdBy?: {
    name: string;
    avatar: string;
  };
  createdAt?: string;
  isSaved?: boolean;
}

const SummaryCard = ({
  id = "summary-1",
  title = "صد سال تنهایی",
  author = "گابریل گارسیا مارکز",
  coverImage = "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000",
  excerpt = "در این کتاب، مارکز داستان خانواده بوئندیا را در طول هفت نسل در شهر خیالی ماکوندو روایت می‌کند...",
  rating = 4.7,
  reviewCount = 128,
  createdBy = {
    name: "سارا احمدی",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
  },
  createdAt = "۳ روز پیش",
  isSaved = false,
}: SummaryCardProps) => {
  return (
    <Card className="w-full max-w-[320px] h-[280px] overflow-hidden flex flex-col bg-white border border-gray-200 hover:shadow-md transition-shadow">
      <CardHeader className="p-3 pb-0 flex flex-row items-start gap-3">
        <div className="w-16 h-20 rounded overflow-hidden flex-shrink-0">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 overflow-hidden">
          <h3 className="text-lg font-bold text-right truncate" dir="rtl">
            {title}
          </h3>
          <p className="text-sm text-gray-600 text-right" dir="rtl">
            {author}
          </p>
          <div className="flex items-center gap-1 mt-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-xs text-gray-500">({reviewCount})</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-3 flex-1 overflow-hidden">
        <p className="text-sm text-gray-700 line-clamp-3 text-right" dir="rtl">
          {excerpt}
        </p>
      </CardContent>

      <CardFooter className="p-3 pt-0 flex justify-between items-center border-t border-gray-100">
        <div className="flex items-center gap-2">
          <Avatar className="w-6 h-6">
            <AvatarImage src={createdBy.avatar} alt={createdBy.name} />
            <AvatarFallback>{createdBy.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="text-xs">
            <span className="text-gray-600">خلاصه توسط </span>
            <span className="font-medium">{createdBy.name}</span>
            <span className="text-gray-500"> • {createdAt}</span>
          </div>
        </div>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Bookmark
              className={`h-4 w-4 ${isSaved ? "fill-blue-500 text-blue-500" : "text-gray-500"}`}
            />
          </Button>
          <Button variant="outline" size="sm" className="h-8">
            خواندن
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SummaryCard;
