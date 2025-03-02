import React from "react";
import PremiumUpgrade from "../components/auth/PremiumUpgrade";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProtectedRoute from "../components/auth/ProtectedRoute";

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
