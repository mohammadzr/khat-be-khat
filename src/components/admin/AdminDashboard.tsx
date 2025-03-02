import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRole } from "@/src/types/user";
import {
  Users,
  BookOpen,
  ShieldAlert,
  Settings,
  BarChart3,
  Search,
  UserPlus,
  Crown,
  Flag,
  CheckCircle,
  XCircle,
} from "lucide-react";

const AdminDashboard = () => {
  // Mock data for demonstration
  const stats = [
    {
      title: "کاربران",
      value: "۱,۲۳۴",
      icon: <Users className="h-5 w-5" />,
      change: "+۱۲%",
    },
    {
      title: "خلاصه‌ها",
      value: "۲,۵۶۷",
      icon: <BookOpen className="h-5 w-5" />,
      change: "+۸%",
    },
    {
      title: "گزارش‌ها",
      value: "۲۳",
      icon: <Flag className="h-5 w-5" />,
      change: "-۵%",
    },
    {
      title: "کاربران ویژه",
      value: "۳۴۵",
      icon: <Crown className="h-5 w-5" />,
      change: "+۲۰%",
    },
  ];

  const recentUsers = [
    {
      id: "1",
      name: "علی محمدی",
      email: "ali@example.com",
      role: UserRole.REGULAR,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ali",
      joinedAt: "۲ روز پیش",
    },
    {
      id: "2",
      name: "سارا احمدی",
      email: "sara@example.com",
      role: UserRole.PREMIUM,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
      joinedAt: "۳ روز پیش",
    },
    {
      id: "3",
      name: "محمد رضایی",
      email: "mohammad@example.com",
      role: UserRole.REGULAR,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mohammad",
      joinedAt: "۱ هفته پیش",
    },
    {
      id: "4",
      name: "مریم حسینی",
      email: "maryam@example.com",
      role: UserRole.ADMIN,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maryam",
      joinedAt: "۲ هفته پیش",
    },
  ];

  const reportedContent = [
    {
      id: "1",
      title: "خلاصه کتاب: صد سال تنهایی",
      type: "summary",
      reportedBy: "علی محمدی",
      reason: "محتوای نامناسب",
      date: "۱ روز پیش",
    },
    {
      id: "2",
      title: "گروه مطالعه: فلسفه غرب",
      type: "group",
      reportedBy: "سارا احمدی",
      reason: "تبلیغات",
      date: "۲ روز پیش",
    },
    {
      id: "3",
      title: "آگهی فروش: کتاب بوف کور",
      type: "listing",
      reportedBy: "محمد رضایی",
      reason: "قیمت غیرمنطقی",
      date: "۳ روز پیش",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">پنل مدیریت</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="جستجو..." className="w-64 pl-3 pr-10" />
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <UserPlus className="mr-2 h-4 w-4" />
            افزودن کاربر جدید
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {stat.title}
                  </p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  <p
                    className={`text-xs mt-1 ${stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                  >
                    {stat.change} نسبت به ماه قبل
                  </p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  {React.cloneElement(stat.icon as React.ReactElement, {
                    className: "h-6 w-6 text-blue-600",
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="users" className="mb-8">
        <TabsList className="w-full">
          <TabsTrigger value="users" className="flex-1">
            <Users className="mr-2 h-4 w-4" />
            کاربران
          </TabsTrigger>
          <TabsTrigger value="content" className="flex-1">
            <BookOpen className="mr-2 h-4 w-4" />
            محتوا
          </TabsTrigger>
          <TabsTrigger value="reports" className="flex-1">
            <ShieldAlert className="mr-2 h-4 w-4" />
            گزارش‌ها
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex-1">
            <BarChart3 className="mr-2 h-4 w-4" />
            آمار و تحلیل
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex-1">
            <Settings className="mr-2 h-4 w-4" />
            تنظیمات
          </TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>مدیریت کاربران</CardTitle>
              <CardDescription>لیست کاربران اخیراً ثبت نام شده</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-right py-3 px-4">کاربر</th>
                      <th className="text-right py-3 px-4">ایمیل</th>
                      <th className="text-right py-3 px-4">نقش</th>
                      <th className="text-right py-3 px-4">تاریخ ثبت نام</th>
                      <th className="text-right py-3 px-4">عملیات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.map((user) => (
                      <tr key={user.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <Avatar className="h-8 w-8 mr-2">
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>
                                {user.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <span>{user.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">{user.email}</td>
                        <td className="py-3 px-4">
                          {user.role === UserRole.ADMIN ? (
                            <Badge className="bg-purple-600">مدیر</Badge>
                          ) : user.role === UserRole.PREMIUM ? (
                            <Badge className="bg-amber-500">
                              <Crown className="h-3 w-3 mr-1" /> ویژه
                            </Badge>
                          ) : (
                            <Badge variant="outline">عادی</Badge>
                          )}
                        </td>
                        <td className="py-3 px-4">{user.joinedAt}</td>
                        <td className="py-3 px-4">
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              ویرایش
                            </Button>
                            <Button variant="destructive" size="sm">
                              حذف
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>گزارش‌های محتوا</CardTitle>
              <CardDescription>محتوای گزارش شده توسط کاربران</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-right py-3 px-4">عنوان</th>
                      <th className="text-right py-3 px-4">نوع</th>
                      <th className="text-right py-3 px-4">گزارش دهنده</th>
                      <th className="text-right py-3 px-4">دلیل</th>
                      <th className="text-right py-3 px-4">تاریخ</th>
                      <th className="text-right py-3 px-4">عملیات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportedContent.map((report) => (
                      <tr key={report.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{report.title}</td>
                        <td className="py-3 px-4">
                          {report.type === "summary" ? (
                            <Badge className="bg-blue-600">خلاصه</Badge>
                          ) : report.type === "group" ? (
                            <Badge className="bg-green-600">گروه</Badge>
                          ) : (
                            <Badge className="bg-orange-600">آگهی</Badge>
                          )}
                        </td>
                        <td className="py-3 px-4">{report.reportedBy}</td>
                        <td className="py-3 px-4">{report.reason}</td>
                        <td className="py-3 px-4">{report.date}</td>
                        <td className="py-3 px-4">
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-green-600 border-green-600"
                            >
                              <CheckCircle className="h-4 w-4 mr-1" />
                              تایید
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-red-600 border-red-600"
                            >
                              <XCircle className="h-4 w-4 mr-1" />
                              رد
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>مدیریت محتوا</CardTitle>
              <CardDescription>
                مدیریت خلاصه‌ها، گروه‌ها و آگهی‌های فروشگاه
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                بخش مدیریت محتوا در حال توسعه است.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>آمار و تحلیل</CardTitle>
              <CardDescription>آمار و تحلیل فعالیت‌های کاربران</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                بخش آمار و تحلیل در حال توسعه است.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>تنظیمات سیستم</CardTitle>
              <CardDescription>تنظیمات عمومی سیستم</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">بخش تنظیمات در حال توسعه است.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
