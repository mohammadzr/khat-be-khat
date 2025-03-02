import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldAlert, Home } from "lucide-react";
import CustomLink from "../CustomLink";

const UnauthorizedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="bg-red-100 p-6 rounded-full mb-6">
        <ShieldAlert className="h-16 w-16 text-red-600" />
      </div>
      <h1 className="text-3xl font-bold mb-2">دسترسی غیرمجاز</h1>
      <p className="text-gray-600 mb-6 max-w-md">
        شما مجوز لازم برای دسترسی به این صفحه را ندارید. لطفاً با مدیر سیستم
        تماس بگیرید یا به صفحه اصلی بازگردید.
      </p>
      <div className="flex gap-4">
        <Button variant="outline" asChild>
          <CustomLink href="/contact">تماس با پشتیبانی</CustomLink>
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700" asChild>
          <CustomLink href="/">
            <Home className="mr-2 h-4 w-4" />
            بازگشت به صفحه اصلی
          </CustomLink>
        </Button>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
