import React from "react";
import PremiumUpgrade from "@/src/components/auth/PremiumUpgrade";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import ProtectedRoute from "@/src/components/auth/ProtectedRoute";

const PremiumPage = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1">
          <PremiumUpgrade />
        </div>
        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default PremiumPage;
