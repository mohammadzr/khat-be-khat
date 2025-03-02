import React from "react";
import Profile from "../components/profile/ProfilePage";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProtectedRoute from "../components/auth/ProtectedRoute";

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
