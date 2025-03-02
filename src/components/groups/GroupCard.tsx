import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Progress } from "../ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Users, Calendar, BookOpen, Crown } from "lucide-react";

interface GroupCardProps {
  id?: string;
  name?: string;
  bookTitle?: string;
  bookCover?: string;
  memberCount?: number;
  readingProgress?: number;
  nextMeetingDate?: string;
  isPremium?: boolean;
  members?: Array<{
    id: string;
    name: string;
    avatar?: string;
  }>;
}

const GroupCard = ({
  id = "group-1",
  name = "کتابخوانی فلسفه",
  bookTitle = "هنر شفاف اندیشیدن",
  bookCover = "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000",
  memberCount = 24,
  readingProgress = 68,
  nextMeetingDate = "۱۵ خرداد ۱۴۰۳",
  isPremium = false,
  members = [
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
}: GroupCardProps) => {
  return (
    <Card className="w-[360px] h-[300px] overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardHeader className="p-4 pb-2 flex justify-between items-start">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold">{name}</h3>
            {isPremium && (
              <Badge className="bg-amber-500 text-white">
                <Crown className="h-3 w-3 mr-1" />
                ویژه
              </Badge>
            )}
          </div>
          <div className="flex items-center text-gray-500 text-sm mt-1">
            <Users className="h-4 w-4 mr-1" />
            <span>{memberCount} عضو</span>
          </div>
        </div>
        <div className="flex -space-x-2 rtl:space-x-reverse">
          {members.slice(0, 3).map((member) => (
            <Avatar key={member.id} className="border-2 border-white">
              <AvatarImage src={member.avatar} alt={member.name} />
              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
            </Avatar>
          ))}
          {memberCount > 3 && (
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 border-2 border-white text-xs font-medium">
              +{memberCount - 3}
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-2">
        <div className="flex gap-4">
          <img
            src={bookCover}
            alt={bookTitle}
            className="w-20 h-28 object-cover rounded-md shadow-sm"
          />
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="font-medium text-sm mb-1">کتاب در حال مطالعه:</h4>
              <p className="text-base font-bold">{bookTitle}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-gray-500 text-sm">
                <BookOpen className="h-4 w-4 mr-1" />
                <span>پیشرفت مطالعه:</span>
              </div>
              <Progress value={readingProgress} className="h-2 w-full" />
              <span className="text-xs text-gray-500">{readingProgress}%</span>
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center text-sm text-gray-500">
          <Calendar className="h-4 w-4 mr-1" />
          <span>جلسه بعدی: {nextMeetingDate}</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-2">
        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          پیوستن به گروه
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GroupCard;
