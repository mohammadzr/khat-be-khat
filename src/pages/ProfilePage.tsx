import React from "react";
import Profile from "@/src/components/profile/ProfilePage";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import ProtectedRoute from "@/src/components/auth/ProtectedRoute";

const ProfilePage = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1">
          <Profile />
        </div>
        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default ProfilePage;
