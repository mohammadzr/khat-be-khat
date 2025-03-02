import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";
import {
  Book,
  BookOpen,
  Search,
  ShoppingBag,
  Users,
  Bell,
  Menu,
  X,
  LogIn,
  UserCircle,
  Settings,
  LogOut,
} from "lucide-react";

interface NavbarProps {
  user?: {
    name: string;
    avatar?: string;
    isAuthenticated: boolean;
    isPremium?: boolean;
  };
  onSearch?: (query: string) => void;
}

const Navbar = ({
  user = {
    name: "کاربر مهمان",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=guest",
    isAuthenticated: false,
    isPremium: false,
  },
  onSearch = () => {},
}: NavbarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="w-full h-20 bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <Book className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-blue-600 hidden sm:inline-block">
              کتاب‌خانه فارسی
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
          <NavigationMenu className="rtl">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">
                  <BookOpen className="h-4 w-4 mr-1" />
                  خلاصه‌ها
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px] rtl">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-blue-700 p-6 no-underline outline-none focus:shadow-md"
                          href="/summaries"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium text-white">
                            خلاصه‌های کتاب
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            مجموعه‌ای از بهترین خلاصه‌های کتاب‌های فارسی و ترجمه
                            شده
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 focus:bg-blue-50"
                          href="/summaries/popular"
                        >
                          <div className="text-sm font-medium leading-none">
                            محبوب‌ترین خلاصه‌ها
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                            پرطرفدارترین خلاصه‌های هفته اخیر
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 focus:bg-blue-50"
                          href="/summaries/create"
                        >
                          <div className="text-sm font-medium leading-none">
                            ایجاد خلاصه جدید
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                            خلاصه کتاب مورد علاقه خود را به اشتراک بگذارید
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">
                  <ShoppingBag className="h-4 w-4 mr-1" />
                  فروشگاه
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px] rtl">
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 focus:bg-blue-50"
                          href="/marketplace"
                        >
                          <div className="text-sm font-medium leading-none">
                            همه کتاب‌ها
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                            مرور تمام کتاب‌های موجود در فروشگاه
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 focus:bg-blue-50"
                          href="/marketplace/new"
                        >
                          <div className="text-sm font-medium leading-none">
                            فروش کتاب
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                            کتاب‌های دست دوم خود را برای فروش قرار دهید
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">
                  <Users className="h-4 w-4 mr-1" />
                  گروه‌های مطالعه
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px] rtl">
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 focus:bg-blue-50"
                          href="/groups"
                        >
                          <div className="text-sm font-medium leading-none">
                            همه گروه‌ها
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                            مرور تمام گروه‌های مطالعه فعال
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 focus:bg-blue-50"
                          href="/groups/my"
                        >
                          <div className="text-sm font-medium leading-none">
                            گروه‌های من
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                            گروه‌های مطالعه که در آن‌ها عضو هستید
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 focus:bg-blue-50"
                          href="/groups/create"
                        >
                          <div className="text-sm font-medium leading-none">
                            ایجاد گروه جدید
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                            یک گروه مطالعه جدید با دوستان خود ایجاد کنید
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center relative max-w-md w-full mx-4"
        >
          <Input
            type="text"
            placeholder="جستجوی کتاب، خلاصه یا گروه..."
            className="w-full pl-10 pr-4 rtl"
            dir="rtl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 h-4 w-4 text-gray-400" />
        </form>

        {/* User Menu / Auth Buttons */}
        <div className="flex items-center gap-2">
          {user.isAuthenticated ? (
            <>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 h-10 px-2"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium hidden sm:inline-block">
                      {user.name}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 rtl">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">{user.name}</p>
                      {user.isPremium && (
                        <p className="text-xs text-blue-600">کاربر ویژه</p>
                      )}
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <UserCircle className="mr-2 h-4 w-4" />
                    <span>پروفایل من</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>خلاصه‌های من</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    <span>فروشگاه من</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Users className="mr-2 h-4 w-4" />
                    <span>گروه‌های من</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>تنظیمات</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>خروج</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button variant="outline" size="sm" asChild>
                <Link to="/login">
                  <LogIn className="h-4 w-4 mr-1" />
                  ورود
                </Link>
              </Button>
              <Button size="sm" className="hidden sm:flex" asChild>
                <Link to="/register">ثبت نام</Link>
              </Button>
            </>
          )}

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-sm">
          <div className="container mx-auto p-4 space-y-4">
            <form
              onSubmit={handleSearch}
              className="flex items-center relative w-full"
            >
              <Input
                type="text"
                placeholder="جستجوی کتاب، خلاصه یا گروه..."
                className="w-full pl-10 pr-4 rtl"
                dir="rtl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 h-4 w-4 text-gray-400" />
            </form>

            <div className="space-y-2">
              <Link
                to="/summaries"
                className="flex items-center p-2 hover:bg-gray-100 rounded-md"
              >
                <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                <span>خلاصه‌های کتاب</span>
              </Link>
              <Link
                to="/marketplace"
                className="flex items-center p-2 hover:bg-gray-100 rounded-md"
              >
                <ShoppingBag className="h-5 w-5 mr-2 text-blue-600" />
                <span>فروشگاه کتاب</span>
              </Link>
              <Link
                to="/groups"
                className="flex items-center p-2 hover:bg-gray-100 rounded-md"
              >
                <Users className="h-5 w-5 mr-2 text-blue-600" />
                <span>گروه‌های مطالعه</span>
              </Link>
            </div>

            {!user.isAuthenticated && (
              <div className="flex gap-2 pt-2 border-t border-gray-200">
                <Button className="w-full" asChild>
                  <Link to="/register">ثبت نام</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
