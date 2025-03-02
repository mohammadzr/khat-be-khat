import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Star, StarHalf, Eye } from "lucide-react";

interface BookListingCardProps {
  id?: string;
  title?: string;
  author?: string;
  coverImage?: string;
  price?: number;
  condition?: "new" | "like-new" | "good" | "fair" | "poor";
  sellerName?: string;
  sellerAvatar?: string;
  sellerRating?: number;
  location?: string;
  listedDate?: string;
  onClick?: () => void;
}

const BookListingCard = ({
  id = "1",
  title = "شازده کوچولو",
  author = "آنتوان دو سنت اگزوپری",
  coverImage = "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000",
  price = 120000,
  condition = "good",
  sellerName = "سارا احمدی",
  sellerAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=sara",
  sellerRating = 4.5,
  location = "تهران",
  listedDate = "۳ روز پیش",
  onClick = () => {},
}: BookListingCardProps) => {
  // Format price to Persian currency format
  const formattedPrice =
    new Intl.NumberFormat("fa-IR").format(price) + " تومان";

  // Map condition to Persian text and color
  const conditionMap = {
    new: { text: "نو", color: "bg-green-100 text-green-800" },
    "like-new": { text: "در حد نو", color: "bg-emerald-100 text-emerald-800" },
    good: { text: "خوب", color: "bg-blue-100 text-blue-800" },
    fair: { text: "متوسط", color: "bg-yellow-100 text-yellow-800" },
    poor: { text: "ضعیف", color: "bg-red-100 text-red-800" },
  };

  // Render stars for rating
  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star
            key={`star-${i}`}
            className="w-3 h-3 fill-yellow-400 text-yellow-400"
          />
        ))}
        {hasHalfStar && (
          <StarHalf className="w-3 h-3 fill-yellow-400 text-yellow-400" />
        )}
        <span className="text-xs text-gray-600 mr-1">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <Card className="w-[280px] h-[320px] overflow-hidden bg-white hover:shadow-md transition-shadow duration-300 rtl">
      <div className="relative h-40 overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <Badge
          className={`absolute top-2 right-2 ${conditionMap[condition].color}`}
        >
          {conditionMap[condition].text}
        </Badge>
      </div>

      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-1 truncate" dir="rtl">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-2" dir="rtl">
          {author}
        </p>
        <p className="font-semibold text-lg text-blue-600" dir="rtl">
          {formattedPrice}
        </p>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center">
            <Avatar className="h-6 w-6 mr-2">
              <AvatarImage src={sellerAvatar} />
              <AvatarFallback>{sellerName.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-xs text-gray-700">{sellerName}</span>
          </div>
          <div className="text-xs text-gray-500">{location}</div>
        </div>

        <div className="flex items-center mt-1">
          <span className="text-xs text-gray-500">{listedDate}</span>
          <div className="mr-auto">{renderRating(sellerRating)}</div>
        </div>
      </CardContent>

      <CardFooter className="p-3 pt-0 flex justify-between">
        <Button
          variant="outline"
          size="sm"
          className="text-xs flex items-center"
          onClick={onClick}
        >
          <Eye className="h-3 w-3 mr-1" />
          مشاهده
        </Button>
        <Button
          variant="secondary"
          size="sm"
          className="text-xs flex items-center"
        >
          <MessageCircle className="h-3 w-3 mr-1" />
          تماس با فروشنده
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookListingCard;
