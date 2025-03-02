import { createClient } from "@supabase/supabase-js";
import { User, UserRole } from "@/src/types/user";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type AuthError = {
  message: string;
  status?: number;
};

export async function signUp(
  email: string,
  password: string,
  name: string,
): Promise<{ user: User | null; error: AuthError | null }> {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          role: UserRole.REGULAR,
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
          isPremium: false,
        },
      },
    });

    if (error) throw error;

    const user = data.user
      ? {
          id: data.user.id,
          email: data.user.email || "",
          name: data.user.user_metadata.name || "",
          role: data.user.user_metadata.role || UserRole.REGULAR,
          avatar: data.user.user_metadata.avatar || "",
          isPremium: data.user.user_metadata.isPremium || false,
        }
      : null;

    return { user, error: null };
  } catch (error: any) {
    return {
      user: null,
      error: {
        message: error.message || "Failed to sign up",
        status: error.status,
      },
    };
  }
}

export async function signIn(
  email: string,
  password: string,
): Promise<{ user: User | null; error: AuthError | null }> {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    const user = data.user
      ? {
          id: data.user.id,
          email: data.user.email || "",
          name: data.user.user_metadata.name || "",
          role: data.user.user_metadata.role || UserRole.REGULAR,
          avatar: data.user.user_metadata.avatar || "",
          isPremium: data.user.user_metadata.isPremium || false,
        }
      : null;

    return { user, error: null };
  } catch (error: any) {
    return {
      user: null,
      error: {
        message: error.message || "Failed to sign in",
        status: error.status,
      },
    };
  }
}

export async function signOut(): Promise<{ error: AuthError | null }> {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { error: null };
  } catch (error: any) {
    return {
      error: {
        message: error.message || "Failed to sign out",
        status: error.status,
      },
    };
  }
}

export async function resetPassword(
  email: string,
): Promise<{ error: AuthError | null }> {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) throw error;
    return { error: null };
  } catch (error: any) {
    return {
      error: {
        message: error.message || "Failed to send reset password email",
        status: error.status,
      },
    };
  }
}

export async function updatePassword(
  password: string,
): Promise<{ error: AuthError | null }> {
  try {
    const { error } = await supabase.auth.updateUser({
      password,
    });
    if (error) throw error;
    return { error: null };
  } catch (error: any) {
    return {
      error: {
        message: error.message || "Failed to update password",
        status: error.status,
      },
    };
  }
}

export async function getCurrentUser(): Promise<{
  user: User | null;
  error: AuthError | null;
}> {
  try {
    const { data, error } = await supabase.auth.getUser();
    if (error) throw error;

    const user = data.user
      ? {
          id: data.user.id,
          email: data.user.email || "",
          name: data.user.user_metadata.name || "",
          role: data.user.user_metadata.role || UserRole.REGULAR,
          avatar: data.user.user_metadata.avatar || "",
          isPremium: data.user.user_metadata.isPremium || false,
        }
      : null;

    return { user, error: null };
  } catch (error: any) {
    return {
      user: null,
      error: {
        message: error.message || "Failed to get current user",
        status: error.status,
      },
    };
  }
}

export async function updateUserProfile(
  profile: Partial<User>,
): Promise<{ user: User | null; error: AuthError | null }> {
  try {
    const { data, error } = await supabase.auth.updateUser({
      data: profile,
    });

    if (error) throw error;

    const user = data.user
      ? {
          id: data.user.id,
          email: data.user.email || "",
          name: data.user.user_metadata.name || "",
          role: data.user.user_metadata.role || UserRole.REGULAR,
          avatar: data.user.user_metadata.avatar || "",
          isPremium: data.user.user_metadata.isPremium || false,
        }
      : null;

    return { user, error: null };
  } catch (error: any) {
    return {
      user: null,
      error: {
        message: error.message || "Failed to update user profile",
        status: error.status,
      },
    };
  }
}
