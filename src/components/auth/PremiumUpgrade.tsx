import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Check, Crown, Star } from "lucide-react";
import CustomLink from "../CustomLink";

const PremiumUpgrade = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">ارتقا به اشتراک ویژه</h1>
        <p className="text-gray-600">
          با ارتقا به اشتراک ویژه، به امکانات بیشتری دسترسی خواهید داشت
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>اشتراک عادی</span>
              <Badge variant="outline" className="bg-gray-100">
                رایگان
              </Badge>
            </CardTitle>
            <CardDescription>امکانات پایه برای همه کاربران</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>مشاهده خلاصه‌های کتاب</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>خرید و فروش کتاب‌های دست دوم</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>عضویت در گروه‌های مطالعه (حداکثر ۳ گروه)</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>ایجاد ۱ خلاصه کتاب در ماه</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <CustomLink href="/">اشتراک فعلی شما</CustomLink>
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center">
                <Crown className="h-5 w-5 text-amber-500 mr-2" />
                اشتراک ویژه
              </span>
              <Badge className="bg-blue-600">۱۹۹,۰۰۰ تومان / ماهانه</Badge>
            </CardTitle>
            <CardDescription>
              امکانات پیشرفته برای کاربران حرفه‌ای
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>تمام امکانات اشتراک عادی</span>
              </li>
              <li className="flex items-center">
                <Star className="h-5 w-5 text-amber-500 mr-2" />
                <span>ایجاد خلاصه‌های کتاب نامحدود</span>
              </li>
              <li className="flex items-center">
                <Star className="h-5 w-5 text-amber-500 mr-2" />
                <span>ایجاد و مدیریت گروه‌های مطالعه نامحدود</span>
              </li>
              <li className="flex items-center">
                <Star className="h-5 w-5 text-amber-500 mr-2" />
                <span>دسترسی به خلاصه‌های ویژه و انحصاری</span>
              </li>
              <li className="flex items-center">
                <Star className="h-5 w-5 text-amber-500 mr-2" />
                <span>تولید پادکست از خلاصه‌های کتاب</span>
              </li>
              <li className="flex items-center">
                <Star className="h-5 w-5 text-amber-500 mr-2" />
                <span>ایجاد برنامه مطالعاتی برای گروه‌ها</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              ارتقا به اشتراک ویژه
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-gray-500 mb-2">
          با خرید اشتراک ویژه، شما با{" "}
          <CustomLink href="/terms" className="text-blue-600 hover:underline">
            شرایط استفاده
          </CustomLink>{" "}
          موافقت می‌کنید.
        </p>
        <p className="text-sm text-gray-500">
          برای اطلاعات بیشتر با{" "}
          <CustomLink href="/contact" className="text-blue-600 hover:underline">
            پشتیبانی
          </CustomLink>{" "}
          تماس بگیرید.
        </p>
      </div>
    </div>
  );
};

export default PremiumUpgrade;
