import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAuth } from "@/src/contexts/AuthContext";

interface AuthenticatedLayoutProps {
  children: React.ReactNode;
}

const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({
  children,
}) => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar
        user={
          user
            ? {
                name: user.name,
                avatar: user.avatar,
                isAuthenticated: true,
                isPremium: user.isPremium,
              }
            : undefined
        }
      />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default AuthenticatedLayout;
