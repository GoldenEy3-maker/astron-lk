import { ValueOf } from "../lib/types/utility";

export const Routes = {
  Home: "/",
  SignIn: "/sign-in",
  ChangePassword: "/change-password",
  Search: "/search",
  Favorites: "/favorites",
  Profile: "/profile",
} as const;

export type Routes = ValueOf<typeof Routes>;
