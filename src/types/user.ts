export enum UserRole {
  REGULAR = "regular",
  PREMIUM = "premium",
  ADMIN = "admin",
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  isPremium: boolean;
}
