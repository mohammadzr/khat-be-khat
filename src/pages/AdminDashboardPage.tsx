import React from "react";
import AdminDashboard from "@/src/components/admin/AdminDashboard";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import ProtectedRoute from "@/src/components/auth/ProtectedRoute";
import { UserRole } from "@/src/types/user";

const AdminDashboardPage = () => {
  return (
    <ProtectedRoute requiredRole={UserRole.ADMIN}>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1">
          <AdminDashboard />
        </div>
        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default AdminDashboardPage;
