import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { Alert, AlertDescription } from "../ui/alert";
import { Lock, AlertCircle } from "lucide-react";
import CustomLink from "../CustomLink";

const ResetPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const { updatePassword, error, clearError } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    clearError();

    if (!password || !confirmPassword) {
      setFormError("لطفاً تمام فیلدها را پر کنید.");
      return;
    }

    if (password !== confirmPassword) {
      setFormError("رمز عبور و تکرار آن مطابقت ندارند.");
      return;
    }

    if (password.length < 6) {
      setFormError("رمز عبور باید حداقل ۶ کاراکتر باشد.");
      return;
    }

    try {
      setIsSubmitting(true);
      await updatePassword(password);
      setIsSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err: any) {
      setFormError(err.message || "خطا در بازنشانی رمز عبور.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">تغییر رمز عبور</CardTitle>
        <CardDescription>رمز عبور جدید خود را وارد کنید</CardDescription>
      </CardHeader>
      <CardContent>
        {isSuccess ? (
          <Alert className="mb-4 bg-green-50 text-green-800 border-green-200">
            <AlertDescription>
              رمز عبور شما با موفقیت تغییر کرد. در حال انتقال به صفحه ورود...
            </AlertDescription>
          </Alert>
        ) : (
          <>
            {(formError || error) && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  {formError || error?.message}
                </AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">رمز عبور جدید</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  dir="ltr"
                  className="text-left"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">تکرار رمز عبور جدید</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  dir="ltr"
                  className="text-left"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "در حال ذخیره..."
                ) : (
                  <>
                    <Lock className="mr-2 h-4 w-4" /> ذخیره رمز عبور جدید
                  </>
                )}
              </Button>
            </form>
          </>
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        <CustomLink href="/login" className="text-blue-600 hover:text-blue-800">
          بازگشت به صفحه ورود
        </CustomLink>
      </CardFooter>
    </Card>
  );
};

export default ResetPasswordForm;
