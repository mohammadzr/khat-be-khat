import React from "react";
import LoginForm from "../components/auth/LoginForm";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
