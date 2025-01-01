import { ValueOf } from "../lib/types/utility";

export const Routes = {
  Home: "/",
  Login: "/login",
  ChangePassword: "/change-password",
  Search: "/search",
  Favorites: "/favorites",
  Profile: "/profile",
} as const;

export type Routes = ValueOf<typeof Routes>;
