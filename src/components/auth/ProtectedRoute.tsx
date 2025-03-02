import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/src/contexts/AuthContext";
import { UserRole } from "@/src/types/user";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: UserRole;
  requirePremium?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole,
  requirePremium = false,
}) => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requirePremium && !user?.isPremium) {
    return <Navigate to="/premium" state={{ from: location }} replace />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    if (requiredRole === UserRole.ADMIN) {
      return <Navigate to="/unauthorized" state={{ from: location }} replace />;
    }
    if (requiredRole === UserRole.PREMIUM && user?.role !== UserRole.ADMIN) {
      return <Navigate to="/premium" state={{ from: location }} replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
