import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { UserRole } from "../types/user";

interface UseRequireAuthOptions {
  redirectTo?: string;
  requiredRole?: UserRole;
  requirePremium?: boolean;
}

export const useRequireAuth = ({
  redirectTo = "/login",
  requiredRole,
  requirePremium = false,
}: UseRequireAuthOptions = {}) => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isLoading) return;

    if (!isAuthenticated) {
      navigate(redirectTo, { state: { from: location }, replace: true });
      return;
    }

    if (requirePremium && !user?.isPremium) {
      navigate("/premium", { state: { from: location }, replace: true });
      return;
    }

    if (requiredRole && user?.role !== requiredRole) {
      if (requiredRole === UserRole.ADMIN) {
        navigate("/unauthorized", { state: { from: location }, replace: true });
        return;
      }
      if (requiredRole === UserRole.PREMIUM && user?.role !== UserRole.ADMIN) {
        navigate("/premium", { state: { from: location }, replace: true });
        return;
      }
    }
  }, [
    isAuthenticated,
    isLoading,
    user,
    navigate,
    redirectTo,
    requiredRole,
    requirePremium,
    location,
  ]);

  return { isAuthenticated, user, isLoading };
};
