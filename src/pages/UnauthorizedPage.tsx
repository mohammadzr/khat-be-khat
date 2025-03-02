import React from "react";
import Unauthorized from "@/src/components/auth/UnauthorizedPage";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

const UnauthorizedPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-1">
        <Unauthorized />
      </div>
      <Footer />
    </div>
  );
};

export default UnauthorizedPage;
