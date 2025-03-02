import React from "react";
import ResetPasswordForm from "@/src/components/auth/ResetPasswordForm";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

const ResetPasswordPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <ResetPasswordForm />
      </div>
      <Footer />
    </div>
  );
};

export default ResetPasswordPage;
