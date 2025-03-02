import React from "react";
import AdminDashboard from "../components/admin/AdminDashboard";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import { UserRole } from "../types/user";

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
