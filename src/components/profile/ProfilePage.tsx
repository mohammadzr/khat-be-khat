import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Alert, AlertDescription } from "../ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import {
  User,
  Settings,
  Lock,
  AlertCircle,
  Crown,
  BookOpen,
  ShoppingBag,
  Users,
} from "lucide-react";

const ProfilePage = () => {
  const { user, updateProfile, updatePassword, error, clearError } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [avatar, setAvatar] = useState(user?.avatar || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    clearError();
    setSuccessMessage(null);

    if (!name) {
      setFormError("لطفاً نام خود را وارد کنید.");
      return;
    }

    try {
      setIsSubmitting(true);
      await updateProfile({ name, avatar });
      setSuccessMessage("اطلاعات پروفایل با موفقیت به‌روزرسانی شد.");
    } catch (err: any) {
      setFormError(err.message || "خطا در به‌روزرسانی پروفایل.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    clearError();
    setSuccessMessage(null);

    if (!currentPassword || !newPassword || !confirmPassword) {
      setFormError("لطفاً تمام فیلدها را پر کنید.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setFormError("رمز عبور جدید و تکرار آن مطابقت ندارند.");
      return;
    }

    if (newPassword.length < 6) {
      setFormError("رمز عبور باید حداقل ۶ کاراکتر باشد.");
      return;
    }

    try {
      setIsSubmitting(true);
      await updatePassword(newPassword);
      setSuccessMessage("رمز عبور با موفقیت تغییر کرد.");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      setFormError(err.message || "خطا در تغییر رمز عبور.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/3 lg:w-1/4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-gray-500 text-sm mb-2">{user.email}</p>
                {user.isPremium ? (
                  <Badge className="bg-amber-500">
                    <Crown className="h-3 w-3 mr-1" /> کاربر ویژه
                  </Badge>
                ) : (
                  <Badge variant="outline" className="text-gray-500">
                    کاربر عادی
                  </Badge>
                )}

                <div className="w-full mt-6 space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    asChild
                  >
                    <div>
                      <BookOpen className="mr-2 h-4 w-4" />
                      خلاصه‌های من
                    </div>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    asChild
                  >
                    <div>
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      فروشگاه من
                    </div>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    asChild
                  >
                    <div>
                      <Users className="mr-2 h-4 w-4" />
                      گروه‌های من
                    </div>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-2/3 lg:w-3/4">
          <Tabs defaultValue="profile">
            <TabsList className="w-full">
              <TabsTrigger value="profile" className="flex-1">
                <User className="mr-2 h-4 w-4" />
                پروفایل
              </TabsTrigger>
              <TabsTrigger value="security" className="flex-1">
                <Lock className="mr-2 h-4 w-4" />
                امنیت
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex-1">
                <Settings className="mr-2 h-4 w-4" />
                تنظیمات
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>اطلاعات پروفایل</CardTitle>
                  <CardDescription>
                    اطلاعات پروفایل خود را مدیریت کنید
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {successMessage && (
                    <Alert className="mb-4 bg-green-50 text-green-800 border-green-200">
                      <AlertDescription>{successMessage}</AlertDescription>
                    </Alert>
                  )}

                  {(formError || error) && (
                    <Alert variant="destructive" className="mb-4">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        {formError || error?.message}
                      </AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleProfileUpdate} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">نام و نام خانوادگی</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">ایمیل</Label>
                      <Input
                        id="email"
                        value={user.email}
                        disabled
                        className="bg-gray-50"
                      />
                      <p className="text-xs text-gray-500">
                        ایمیل قابل تغییر نیست
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="avatar">آدرس تصویر پروفایل</Label>
                      <Input
                        id="avatar"
                        value={avatar}
                        onChange={(e) => setAvatar(e.target.value)}
                        placeholder="https://example.com/avatar.jpg"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "در حال ذخیره..." : "ذخیره تغییرات"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>تغییر رمز عبور</CardTitle>
                  <CardDescription>رمز عبور خود را تغییر دهید</CardDescription>
                </CardHeader>
                <CardContent>
                  {successMessage && (
                    <Alert className="mb-4 bg-green-50 text-green-800 border-green-200">
                      <AlertDescription>{successMessage}</AlertDescription>
                    </Alert>
                  )}

                  {(formError || error) && (
                    <Alert variant="destructive" className="mb-4">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        {formError || error?.message}
                      </AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handlePasswordUpdate} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">رمز عبور فعلی</Label>
                      <Input
                        id="currentPassword"
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">رمز عبور جدید</Label>
                      <Input
                        id="newPassword"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">
                        تکرار رمز عبور جدید
                      </Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "در حال ذخیره..." : "تغییر رمز عبور"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>تنظیمات حساب کاربری</CardTitle>
                  <CardDescription>
                    تنظیمات حساب کاربری خود را مدیریت کنید
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {!user.isPremium && (
                      <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                        <div className="flex items-start">
                          <Crown className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                          <div>
                            <h3 className="font-medium">
                              ارتقا به اشتراک ویژه
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                              با ارتقا به اشتراک ویژه، به امکانات بیشتری دسترسی
                              خواهید داشت
                            </p>
                            <Button className="bg-blue-600 hover:bg-blue-700">
                              مشاهده مزایای اشتراک ویژه
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="border-t pt-4">
                      <h3 className="font-medium mb-2">اعلان‌ها</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label
                            htmlFor="email-notifications"
                            className="cursor-pointer"
                          >
                            دریافت اعلان‌های ایمیلی
                          </Label>
                          <input
                            type="checkbox"
                            id="email-notifications"
                            className="toggle"
                            defaultChecked
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label
                            htmlFor="summary-notifications"
                            className="cursor-pointer"
                          >
                            اعلان خلاصه‌های جدید
                          </Label>
                          <input
                            type="checkbox"
                            id="summary-notifications"
                            className="toggle"
                            defaultChecked
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label
                            htmlFor="group-notifications"
                            className="cursor-pointer"
                          >
                            اعلان‌های گروه‌های مطالعه
                          </Label>
                          <input
                            type="checkbox"
                            id="group-notifications"
                            className="toggle"
                            defaultChecked
                          />
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <h3 className="font-medium mb-2 text-red-600">
                        حذف حساب کاربری
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        با حذف حساب کاربری، تمام اطلاعات شما به طور دائمی حذف
                        خواهد شد و قابل بازیابی نیست.
                      </p>
                      <Button variant="destructive">حذف حساب کاربری</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
