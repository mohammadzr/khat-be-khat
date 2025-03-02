import React, { createContext, useContext, useEffect, useState } from "react";
import { User, UserRole } from "@/src/types/user";
import {
  signIn,
  signUp,
  signOut,
  resetPassword,
  updatePassword,
  getCurrentUser,
  updateUserProfile,
  AuthError,
  supabase,
} from "@/src/lib/auth";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  error: AuthError | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updatePassword: (password: string) => Promise<void>;
  updateProfile: (profile: Partial<User>) => Promise<void>;
  isAuthenticated: boolean;
  isPremium: boolean;
  isAdmin: boolean;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<AuthError | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      const { user, error } = await getCurrentUser();
      setUser(user);
      setError(error);
      setIsLoading(false);
    };

    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session) {
          const { user: currentUser } = await getCurrentUser();
          setUser(currentUser);
        } else {
          setUser(null);
        }
        setIsLoading(false);
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleSignIn = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    const { user: authUser, error: authError } = await signIn(email, password);
    setUser(authUser);
    setError(authError);
    setIsLoading(false);
    if (authError) throw authError;
  };

  const handleSignUp = async (
    email: string,
    password: string,
    name: string,
  ) => {
    setIsLoading(true);
    setError(null);
    const { user: authUser, error: authError } = await signUp(
      email,
      password,
      name,
    );
    setUser(authUser);
    setError(authError);
    setIsLoading(false);
    if (authError) throw authError;
  };

  const handleSignOut = async () => {
    setIsLoading(true);
    setError(null);
    const { error: authError } = await signOut();
    setError(authError);
    setUser(null);
    setIsLoading(false);
    if (authError) throw authError;
  };

  const handleResetPassword = async (email: string) => {
    setIsLoading(true);
    setError(null);
    const { error: authError } = await resetPassword(email);
    setError(authError);
    setIsLoading(false);
    if (authError) throw authError;
  };

  const handleUpdatePassword = async (password: string) => {
    setIsLoading(true);
    setError(null);
    const { error: authError } = await updatePassword(password);
    setError(authError);
    setIsLoading(false);
    if (authError) throw authError;
  };

  const handleUpdateProfile = async (profile: Partial<User>) => {
    setIsLoading(true);
    setError(null);
    const { user: updatedUser, error: authError } =
      await updateUserProfile(profile);
    setUser(updatedUser);
    setError(authError);
    setIsLoading(false);
    if (authError) throw authError;
  };

  const clearError = () => {
    setError(null);
  };

  const value = {
    user,
    isLoading,
    error,
    signIn: handleSignIn,
    signUp: handleSignUp,
    signOut: handleSignOut,
    resetPassword: handleResetPassword,
    updatePassword: handleUpdatePassword,
    updateProfile: handleUpdateProfile,
    isAuthenticated: !!user,
    isPremium: user?.isPremium || false,
    isAdmin: user?.role === UserRole.ADMIN,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
