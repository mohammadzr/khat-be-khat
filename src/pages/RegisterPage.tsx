import React from "react";
import RegisterForm from "@/src/components/auth/RegisterForm";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <RegisterForm />
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
