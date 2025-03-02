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
import { Alert, AlertDescription } from "../ui/alert";
import { Mail, AlertCircle, ArrowLeft } from "lucide-react";
import CustomLink from "../CustomLink";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const { resetPassword, error, clearError } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    clearError();

    if (!email) {
      setFormError("لطفاً ایمیل خود را وارد کنید.");
      return;
    }

    try {
      setIsSubmitting(true);
      await resetPassword(email);
      setIsSuccess(true);
    } catch (err: any) {
      setFormError(err.message || "خطا در ارسال ایمیل بازیابی رمز عبور.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">بازیابی رمز عبور</CardTitle>
        <CardDescription>
          ایمیل خود را وارد کنید تا لینک بازیابی رمز عبور برای شما ارسال شود
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isSuccess ? (
          <Alert className="mb-4 bg-green-50 text-green-800 border-green-200">
            <AlertDescription>
              لینک بازیابی رمز عبور به ایمیل شما ارسال شد. لطفاً ایمیل خود را
              بررسی کنید.
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
                <Label htmlFor="email">ایمیل</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  "در حال ارسال..."
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" /> ارسال لینک بازیابی
                  </>
                )}
              </Button>
            </form>
          </>
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        <CustomLink
          href="/login"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> بازگشت به صفحه ورود
        </CustomLink>
      </CardFooter>
    </Card>
  );
};

export default ForgotPasswordForm;
